## Tarefa 01 - Git e GitHub com Markdown

# Nathan Lopes Rodrigues
# nlopesr
# nathanlpsr@gmail.com

## 9.a) Projeto da disciplina

**Título do projeto:** Em definição pela equipe.

**Descrição:** A equipe ainda está refinando o escopo funcional e o tema final do projeto da disciplina. Neste momento, estamos usando como referência inicial o repositório base abaixo para estruturar o frontend e evoluir conforme as decisões das próximas reuniões.

**Equipe:**
- Nathan Lopes 
- Diêgo Axel
- Tomé Galileu
- Vitória
- Hildemberg

**Link de referência / repositório base:**
- https://github.com/fundaoimd/projeto_es2_front/

## 9.b) Linguagem de programação

As tecnologias definidas até agora são:
- **Python** (linguagem principal do backend)
- **Django** (framework web)
- **Nginx** (servidor web/reverse proxy para deploy)

**Domínio e experiência da equipe:**
- Atualmente, apenas **Hildemberg** possui experiência prática mais sólida com essa stack.
- Os demais integrantes estão em processo de aprendizado com acompanhamento da equipe.

## 9.c) Framework do projeto

O framework principal definido é o **Django**.

O Django é um framework web em Python que segue a filosofia de "baterias inclusas", trazendo recursos prontos para acelerar o desenvolvimento, como painel administrativo, ORM, roteamento, autenticação e segurança padrão. Para o projeto da disciplina, ele ajuda a construir APIs e regras de negócio com produtividade e organização.

## 9.d) IDE utilizada

A IDE escolhida é o **Visual Studio Code (VS Code)**.

**Debug integrado:**
- Breakpoints para pausar execução.
- Inspeção de variáveis em tempo real.
- Execução passo a passo (step over, step into, step out).
- Debug Console para avaliar expressões durante a execução.

**Controle de versão integrado:**
- Painel Source Control com staging, diff e commit.
- Criação e troca de branches pela interface.
- Integração com GitHub via extensões para Pull Requests e revisão de código.

## 9.e) Tutorial CRUD na tecnologia escolhida

**Tutorial:** Django Tutorial - Writing your first Django app  
Link: https://docs.djangoproject.com/en/stable/intro/tutorial01/

**Resumo curto:**
A sequência oficial de tutoriais do Django mostra como criar um projeto, definir modelos, usar o ORM, gerar páginas administrativas e manipular operações de criação, leitura, atualização e remoção de dados.

## 9.f) Branches e Pull Request com GitFlow

No GitFlow, as branches têm papéis bem definidos:
- `main`: versões estáveis em produção.
- `develop`: integração contínua do que está em desenvolvimento.
- `feature/*`: novas funcionalidades.
- `release/*`: preparação de release.
- `hotfix/*`: correções urgentes em produção.

No GitHub, o fluxo comum é: criar `feature/*`, desenvolver, abrir Pull Request para `develop`, passar por revisão e testes e então realizar merge. Isso melhora rastreabilidade e qualidade das entregas.

## 9.g) Resumo de Versionamento Semântico (SemVer)

O Versionamento Semântico segue o padrão **MAJOR.MINOR.PATCH**:
- **MAJOR**: mudanças incompatíveis com versões anteriores.
- **MINOR**: novas funcionalidades compatíveis.
- **PATCH**: correções compatíveis.

Esse padrão facilita comunicação de impacto de mudanças e gestão de versões no projeto.

## 9.h) Resumo de Conventional Commits

Conventional Commits padroniza mensagens de commit no formato:

`tipo(escopo opcional): descrição`

Exemplos de tipos:
- `feat`: nova funcionalidade
- `fix`: correção de bug
- `docs`: documentação
- `refactor`: refatoração
- `test`: testes
- `chore`: manutenção

Esse padrão melhora o histórico, facilita revisão e pode automatizar changelog.

## 9.i) AcademicDevFlow

Conta criada no AcademicDevFlow (https://labens.dct.ufrn.br/academicflow/) e navegação realizada no sistema, incluindo a área de tarefas.

Evidência de acesso e navegação:
- Captura de tela do sistema na rota `aluno/tarefas` (12/03/2026).

Também foi realizado o cadastro de pelo menos um feedback no sistema, conforme solicitado no item.

**Status:** concluído.

## 9.j) Criação do projeto no AcademicDevFlow pelo Líder Técnico

O líder técnico (Diêgo) deve criar o projeto e vincular os membros da equipe.
