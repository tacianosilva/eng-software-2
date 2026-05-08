# Modelos do Sistema

## 1. Modelo Conceitual de Dados (MER)

O diagrama abaixo representa a estrutura de Entidade-Relacionamento do banco de dados relacional gerido pelo Prisma no Supabase.

```mermaid
erDiagram
    FUNCIONARIO {
        String id PK
        String nomeCompleto
        String email UK
        Role role
    }

    ALUNO {
        String id PK
        String nomeCompleto
        String cpf UK
        String email UK
        DateTime dataNascimento
        StatusAluno statusMatricula
        Int nivel
        Int exp
        Int streakDiasSeguidos
    }

    PLANO {
        String id PK
        String nome
        Float preco
        Int duracaoDias
    }

    MATRICULA {
        String id PK
        DateTime dataInicio
        DateTime dataVencimento
        StatusMatricula status
    }

    PAGAMENTO {
        String id PK
        Float valor
        DateTime dataPagamento
        MetodoPagamento metodo
    }

    TREINO {
        String id PK
        String objetivo
        DateTime dataCriacao
        Int diaSemana
    }

    EXERCICIO {
        String id PK
        String nomeExercicio
        Int series
        String repeticoes
    }

    HISTORICO_TREINO {
        String id PK
        DateTime dataExecucao
        Int duracaoMinutos
    }

    SERIE_EXECUTADA {
        String id PK
        Int serieNumero
        Float peso
        Int repeticoesFeitas
        Boolean concluido
    }

    ALUNO ||--o{ MATRICULA : possui
    PLANO ||--o{ MATRICULA : contempla
    MATRICULA ||--o{ PAGAMENTO : gera
    ALUNO ||--o{ PAGAMENTO : realiza
    ALUNO ||--o{ TREINO : realiza
    FUNCIONARIO ||--o{ TREINO : prescreve
    TREINO ||--|{ EXERCICIO : contem
    ALUNO ||--o{ HISTORICO_TREINO : registra
    TREINO ||--o{ HISTORICO_TREINO : gera
    HISTORICO_TREINO ||--|{ SERIE_EXECUTADA : contem
```
