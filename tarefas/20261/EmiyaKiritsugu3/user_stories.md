# Lista de User Stories

Este documento consolida as especificações ágeis de requisitos sob a perspectiva dos usuários finais do **NextGym**.

## Iteração 1

### US01: Gerenciamento de Alunos (CRUD)
- **Como** Recepcionista / Administrador.
- **Quero** cadastrar, listar, visualizar, editar e remover registros de alunos.
- **Para** manter os dados cadastrais da academia constantemente atualizados e integrados aos módulos financeiros e de treino.
- **Status:** Implementado, Coberto por Testes de Unidade e Validado na Main.

---

## Iteração 2

### US02: Sistema de XP e Níveis (Gamificação)
- **Como** Aluno.
- **Quero** ganhar Pontos de Experiência (XP) ao registrar a conclusão de um treino diário.
- **Para** visualizar minha evolução de forma gamificada na tela inicial do sistema, subir de nível (Level Up) e manter meu *streak* de ofensiva alto, garantindo minha motivação e combatendo a evasão.
- **Status:** Implementado, Coberto por Testes e Validado.

#### Regras de Negócio:
1. **[RN01 - Ganho Base]** Cada `HistoricoTreino` registrado validamente confere ao aluno uma quantidade fixa de 50 XP.
2. **[RN02 - Progressão de Level]** A cada bloco acumulado de 500 XP, o campo `nivel` do aluno avança em 1. O sistema deve calcular retrospectivamente se os XP obtidos ultrapassam a barreira do próximo nível.
3. **[RN03 - Streak (Ofensiva)]** Se o aluno registrar um treino em dias consecutivos (avaliando `ultimoTreinoData`), a propriedade `streakDiasSeguidos` aumenta em 1. Se passarem mais de 48 horas (dois dias virados) sem treino, o contador de *streak* deve ser resetado para 0 antes de somar +1 pelo treino de hoje.
4. **[RN04 - Prevenção de Abuso]** O aluno não pode pontuar mais de 1 treino no mesmo intervalo de 12 horas.
5. **[RN05 - Integridade ACID]** O cálculo de XP, nível e atualização de *streak* devem ocorrer dentro de uma transação atômica (`$transaction`) no banco de dados via Prisma, de modo que falhas na gravação do histórico revertam os pontos obtidos (rollback).

#### Critérios de Aceitação:
- **Dado** que o aluno termina suas séries e clica no botão "Finalizar Treino Diário".
- **Quando** a Server Action de submissão do treino é executada passando as validações de autorização (Auth Guard).
- **Então** o sistema insere os registros na tabela `HistoricoTreino` e `SerieExecutada`.
- **E** realiza os cálculos de adição de XP.
- **E** avalia o *streak* com base na data do relógio do servidor contra a data do último treino do aluno.
- **E** atualiza atomicamente o perfil do Aluno na tabela `Aluno`.
- **E** retorna a resposta para o frontend atualizar o estado visual do Nível/XP na interface (via `revalidatePath`).
