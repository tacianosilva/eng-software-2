# Relatório de Testes (Iteração 2)

Este documento detalha os resultados dos testes automatizados e manuais realizados para validar a **US02: Gamificação e Níveis**.

## 1. Testes de Unidade e Integração

Os testes foram escritos utilizando o framework **Vitest** e mockando o banco de dados via **Prisma**. A meta de cobertura (Coverage) para as regras de negócio foi definida em 100%.

| Cenário de Teste | Tipo | Componente | Status |
| :--- | :--- | :--- | :--- |
| **Idempotência (Mesmo Dia)** | Unidade | `gamificationService` | ✅ Passou |
| **Progressão de Nível Único** | Unidade | `gamificationService` | ✅ Passou |
| **Progressão Múltipla (Level Skip)** | Unidade | `gamificationService` | ✅ Passou |
| **Bônus de Streak Diário** | Unidade | `gamificationService` | ✅ Passou |
| **Reset de Streak (Quebra > 48h)** | Unidade | `gamificationService` | ✅ Passou |
| **Gravação de Treino e XP (Transação)** | Integração | `treinosAction` | ✅ Passou |
| **Tratamento de Payload Inválido (Zod)** | Integração | `treinosAction` | ✅ Passou |
| **Captura de Falhas no Banco (Sentry)** | Integração | `treinosAction` | ✅ Passou |

**Resumo da Cobertura:** 100% nas lógicas e branches do motor de Gamificação.

---

## 2. Testes de Aceitação

| ID | Critério de Aceitação | Resultado Obtido | Status |
| :--- | :--- | :--- | :--- |
| **CA01** | O aluno finaliza o treino e seu XP e Streak aumentam. | Ao chamar a action, o XP do mock foi modificado e a transação chamou o DB corretamente. | ✅ Aprovado |
| **CA02** | Ao bater o teto de 500 XP, o nível avança proporcionalmente. | Os cálculos matemáticos refletiram o novo nível sem perder os pontos excedentes. | ✅ Aprovado |
| **CA03** | Falha de autorização impede alteração de dados. | A ausência de sessão (`alunoId` nulo) retorna um "Erro Autenticação" sem acessar o banco. | ✅ Aprovado |

---

## 3. Issues e Bugs Cadastrados (Resolvidos durante QA)

Como estabelecido na política de qualidade desta Iteração, documentamos as anomalias levantadas pela engenharia de testes (QA) que já foram corrigidas antes da integração à `main`:

### Issue #01: ZodError por injeção forçada de `alunoId`
- **Descrição:** O payload de validação (Zod) exigia a presença do campo `alunoId` enviado pelo frontend. Contudo, por questões de segurança (Server-Side Auth), o ID do aluno deve ser recuperado apenas via cookie de sessão (`getUser()`), não confiando no ID enviado pelo cliente.
- **Resolução:** Foi aplicado um `Omit<HistoricoTreinoBase, 'alunoId'>` na etapa de validação (parse) da *Server Action*. O ID da sessão passou a ser injetado logo após a validação.
- **Status:** Fechado / Corrigido.

### Issue #02: Mascaramento de Erros no Try/Catch
- **Descrição:** Erros que deveriam ser repassados para a UI ou para logs não estavam sendo retornados corretamente. Se a gravação no banco falhasse (ex: `PrismaClientKnownRequestError`), a função fazia um `throw error`, o qual era capturado e engolido por escopos superiores, impedindo o *Sentry* de receber o contexto adequado do erro serializado.
- **Resolução:** Refatorou-se a *Server Action* para retornar objetos padronizados no padrão de Erros de Domínio, assegurando a captura via *Sentry* (`captureException`) antes de devolver a resposta controlada para a UI.
- **Status:** Fechado / Corrigido.
