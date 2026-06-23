# Análise de Pontos de Função (APF) - NextGym

Este documento detalha o cálculo da métrica de Análise de Pontos de Função (FPA) aplicada ao tamanho do escopo implementado no projeto **NextGym**, focado especificamente nas iterações iniciais da disciplina (CRUD de Alunos e Gamificação).

A APF é uma métrica que mede o software quantificando a funcionalidade fornecida ao usuário baseada em design lógico e requisitos de negócio.

---

## 1. Funções de Dados (ALI e AIE)

Com base no Diagrama Entidade-Relacionamento do nosso banco de dados gerido via Prisma, as seguintes funções de dados foram mapeadas:

- **ALI (Arquivo Lógico Interno):** Dados mantidos dentro da fronteira do sistema.
- **AIE (Arquivo de Interface Externa):** Dados lidos pelo sistema, mas mantidos fora de sua fronteira.

| Arquivo Lógico (Modelo) | Tipo | Tipos de Registro (TR) | Tipos de Dados (TD) | Nível de Complexidade | Contagem (PF) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Aluno** | ALI | 1 | 15 (id, nome, cpf, email, dataNasc, etc) | Baixa | 7 |
| **Funcionario** (Recepcionista) | ALI | 1 | 4 | Baixa | 7 |
| **Plano** | ALI | 1 | 4 | Baixa | 7 |
| **Matricula & Pagamento** | ALI | 2 | 10 | Média | 10 |
| **Treino & Exercicio** | ALI | 2 | 11 | Média | 10 |
| **Historico & SeriesExecutadas** | ALI | 2 | 8 | Média | 10 |
| **Supabase Auth / Sessão** | AIE | 1 | 5 (token, exp, uuid, role) | Baixa | 5 |

**Subtotal de Funções de Dados:** 56 PF

---

## 2. Funções de Transação (User Stories)

As funções de transação medem as transações entre o usuário e a aplicação. Elas são mapeadas de acordo com as especificações das User Stories.

- **EE (Entrada Externa):** Processa dados de entrada para atualizar um ALI.
- **CE (Consulta Externa):** Exibe dados recuperados (sem lógica matemática).
- **SE (Saída Externa):** Exibe dados com cálculos ou lógicas derivadas.

### 2.1 US01: Gerenciamento de Alunos (CRUD Base)

| Processo Elementar | Tipo | Arq. Referenciados (ALR) | Tipos de Dados (TD) | Complexidade | Contagem (PF) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Criar novo Aluno** | EE | 1 (Aluno) | 10 (campos formulário) | Baixa | 3 |
| **Editar cadastro Aluno** | EE | 1 (Aluno) | 10 | Baixa | 3 |
| **Remover Aluno** | EE | 1 (Aluno) | 1 (id) | Baixa | 3 |
| **Listar todos os Alunos** | CE | 1 (Aluno) | 8 | Baixa | 3 |
| **Visualizar Perfil Completo** | CE | 2 (Aluno, Matricula) | 15 | Média | 4 |

**Subtotal US01:** 16 PF

### 2.2 US02: Gamificação e XP (Registro de Treinos)

| Processo Elementar | Tipo | Arq. Referenciados (ALR) | Tipos de Dados (TD) | Complexidade | Contagem (PF) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Registrar Treino Concluído** | EE | 3 (Historico, Treino, Aluno) | 6 | Alta | 6 |
| **Calcular Nível / Validar Streak** | SE | 1 (Aluno) | 4 | Baixa | 4 |
| **Visualizar Estatísticas (Dashboard)** | CE | 1 (Aluno) | 5 | Baixa | 3 |

**Subtotal US02:** 13 PF

---

## 3. Resumo da Contagem Total (PF Não-Ajustado)

| Categoria da FPA | Somatório (Pontos de Função) |
| :--- | :--- |
| **Total em Funções de Dados (Tabelas)** | 56 |
| **Total em Funções de Transação (CRUD)** | 16 |
| **Total em Funções de Transação (Gamificação)** | 13 |
| **TAMANHO FUNCIONAL TOTAL ESTIMADO** | **85 PF** |

*(Considerando um Fator de Ajuste Técnico padrão VAF = 1.0, o tamanho funcional do escopo principal do NextGym é estimado rigidamente em 85 Pontos de Função. Qualquer nova feature expandirá matematicamente esta base).*
