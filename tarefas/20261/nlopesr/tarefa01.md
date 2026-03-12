## Tarefa 01 - Git e GitHub com Markdown

# Nathan Lopes Rodrigues    
# nlopesr
# nathanlpsr@gmail.com## 9.a) Projeto da disciplina

**Título do projeto:** Academic Task Manager  
**Descrição:** Sistema web para cadastro, acompanhamento e priorização de tarefas acadêmicas, com quadro Kanban, prazos e alertas. O objetivo é melhorar a organização de atividades da disciplina e da equipe ao longo das iterações.

**Equipe (inicial):**
- Nathan Lopes Rodrigues (líder técnico)
- Integrante 2 (a definir)
- Integrante 3 (a definir)

**Repositório do projeto:**
- https://github.com/nlopesr/academic-task-manager *(ajustar se o nome final for outro)*

## 9.b) Linguagem de programação

A linguagem principal escolhida para o projeto é **TypeScript** (com Node.js no backend).

**Domínio e experiência da equipe:**
- A equipe já possui experiência prévia com JavaScript.
- TypeScript será usado para aumentar segurança com tipagem estática.
- O nível atual da equipe com TypeScript é **iniciante a intermediário**, com expectativa de evolução durante o projeto.

## 9.c) Framework do projeto

O framework definido para o backend é o **NestJS**.

O NestJS é um framework para Node.js baseado em TypeScript que organiza o projeto por módulos, controladores e serviços. Ele facilita a construção de APIs REST escaláveis, incentiva boas práticas de arquitetura e possui integração com bibliotecas comuns do ecossistema (como TypeORM, Prisma e validação com class-validator).

Como alternativa para frontend, o time pode utilizar **React** ou **Next.js** conforme o escopo da interface evoluir.

## 9.d) IDE utilizada

A IDE escolhida é o **Visual Studio Code (VS Code)**.

**Debug integrado:**
- Breakpoints para pausar a execução.
- Inspeção de variáveis em tempo real.
- Call stack e step-by-step (step over, step into, step out).
- Debug Console para avaliação de expressões durante a execução.

**Controle de versão integrado:**
- Painel de Source Control com commit, diff e stage de arquivos.
- Criação e troca de branches na própria interface.
- Integração com GitHub via extensões para Pull Requests e Code Review.

## 9.e) Tutorial CRUD na tecnologia escolhida

**Tutorial:** CRUD API com NestJS + TypeORM + PostgreSQL  
Link: https://docs.nestjs.com/recipes/crud-generator

**Resumo curto:**
O tutorial mostra como criar uma API CRUD em NestJS com geração de recursos, definição de entidades, criação de endpoints REST (create, read, update, delete) e organização em módulos/serviços/controladores.

## 9.f) Branches e Pull Request com GitFlow

No GitFlow, as branches têm papéis bem definidos:
- `main`: versões estáveis em produção.
- `develop`: integração contínua do que está em desenvolvimento.
- `feature/*`: desenvolvimento de novas funcionalidades.
- `release/*`: preparação de versão.
- `hotfix/*`: correções urgentes em produção.

O fluxo comum com GitHub é: criar `feature/*`, desenvolver, abrir **Pull Request** para `develop`, passar por revisão de código e testes, e então fazer o merge. Isso melhora rastreabilidade, colaboração e qualidade das entregas.

## 9.g) Resumo de Versionamento Semântico (SemVer)

O Versionamento Semântico segue o padrão **MAJOR.MINOR.PATCH**:
- **MAJOR**: mudanças incompatíveis com versões anteriores.
- **MINOR**: novas funcionalidades compatíveis.
- **PATCH**: correções compatíveis (bugs e ajustes).

Esse padrão facilita a comunicação entre desenvolvedores e reduz riscos na atualização de dependências.

## 9.h) Resumo de Conventional Commits

Conventional Commits é uma convenção para padronizar mensagens de commit, no formato:

`tipo(escopo opcional): descrição`

Exemplos de tipos:
- `feat`: nova funcionalidade
- `fix`: correção de bug
- `docs`: documentação
- `refactor`: refatoração sem alterar comportamento esperado
- `test`: testes
- `chore`: tarefas de manutenção

Esse padrão melhora leitura do histórico, automação de changelog e consistência da colaboração.
