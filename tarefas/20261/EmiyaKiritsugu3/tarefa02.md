# Tarefa 02 - DCT2302 - 2026.1 - Teste de Unidade

**Discente:** José Inamar (EmiyaKiritsugu3)
**Email:** jose.inamar@ufrn.edu.br
**Data:** 05/05/2026

## 1. Testes de Software e Testes de Unidade

Testes de software são processos de execução de um programa com a intenção de encontrar erros. Eles visam garantir que o software atenda aos requisitos e funcione conforme o esperado.

**Testes de Unidade** focam na menor parte testável de uma aplicação (normalmente uma função ou método) de forma isolada. O objetivo é validar que cada unidade do código-fonte está funcionando corretamente.

## 2. Tecnologias Utilizadas no Projeto

O projeto **NextGym** (PWeb_Project) utiliza as seguintes tecnologias:

- **Framework:** Next.js 15 (App Router)
- **Biblioteca UI:** React 19
- **Linguagem:** TypeScript
- **ORM:** Prisma
- **Banco de Dados:** PostgreSQL (via Supabase)
- **Infraestrutura:** Sentry (Monitoramento)
- **AI:** Google Genkit / Gemini (Automação de treinos)

## 3. Framework de Teste de Unidade

Para a realização dos testes de unidade, utilizamos o **Vitest**.

- **Por que Vitest?** É um framework de testes nativo do Vite, extremamente rápido e compatível com a API do Jest. Ele se integra perfeitamente ao ecossistema moderno do Next.js e TypeScript.

## 4. IDE Utilizada

A IDE utilizada é o **VS Code (Visual Studio Code)**, utilizando o terminal integrado e extensões para Vitest e Prisma.

## 5. Tutorial de CRUD (Server Actions)

Para a implementação do CRUD utilizando as tecnologias do projeto (Next.js 15 e Prisma), segui as recomendações oficiais da documentação do Next.js sobre Server Actions:

- [Next.js - Server Actions and Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

## 6. Mock Objects

Mocks são objetos que simulam o comportamento de objetos reais em cenários controlados. Em testes de unidade, são essenciais para isolar a unidade de código que está sendo testada, substituindo dependências externas (como banco de dados ou APIs) por versões falsas que retornam dados previsíveis.

## 7. Repositório do Projeto

O código fonte do projeto e os testes implementados podem ser encontrados em:
- [PWeb_Project - Repositório Principal](https://github.com/EmiyaKiritsugu3/PWeb_Project)

## 8. CRUD Selecionado (User Story)

**Funcionalidade:** Gerenciamento de Alunos (CRUD de Aluno)
**User Story:** "Como recepcionista da academia, desejo cadastrar, visualizar, editar e remover alunos para manter o controle de matriculados atualizado e integrado ao sistema de treinos."

## 9. Implementação dos Testes de Unidade

Foram implementados testes de unidade para as operações de Create, Update e Delete no arquivo de Server Actions de alunos.

- **Link para os Testes:** [src/lib/actions/alunos.test.ts](https://github.com/EmiyaKiritsugu3/PWeb_Project/blob/main/src/lib/actions/alunos.test.ts)

Os testes utilizam mocks para o `prisma`, `getUser` (autenticação) e `revalidatePath`.

## 10. Teste de Unidade vs Teste de Integração

| Característica | Teste de Unidade | Teste de Integração |
| :--- | :--- | :--- |
| **Escopo** | Uma única função ou componente. | Múltiplos módulos/componentes trabalhando juntos. |
| **Isolamento** | Total (usa Mocks para dependências). | Parcial ou nulo (pode usar banco de dados real/teste). |
| **Velocidade** | Extremamente rápido. | Mais lento. |
| **Objetivo** | Verificar a lógica interna da unidade. | Verificar se a comunicação entre módulos está correta. |
| **Complexidade** | Baixa. | Média a Alta. |

---
**Nota:** Esta tarefa faz parte da disciplina DCT2302 - Engenharia de Software 2.
Issue de referência: [#552](https://github.com/tacianosilva/eng-software-2/issues/552)
