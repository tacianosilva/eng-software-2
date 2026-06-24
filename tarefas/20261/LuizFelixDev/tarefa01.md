# Tarefa 01 - Git e GitHub com Markdown
## Nome: Luiz Henrique Felix Guedes
## Usuario: LuizFelixDev
## e-mail: luiz.henrique.felix.709@ufrn.edu.br

Com base nas informações extraídas dos documentos de documentação (`documento_visao.md` e `arquitetura.md`) e de configuração (`package.json`) do projeto **iService**, elaborei as seções solicitadas de forma detalhada e contextualizada à realidade da sua equipe:

---

### 1. Título, Descrição do Projeto, Equipe e Repositório

* **Título do Projeto:** iService
* **Descrição:** Desenvolvido para a disciplina de Engenharia de Software II na UFRN, o iService insere-se no contexto da *Gig Economy* (economia sob demanda). Ele funciona como um marketplace geolocalizado em tempo real focado em conectar pessoas com necessidades urgentes de manutenção, reparos ou serviços rápidos a profissionais qualificados geograficamente próximos. A otimização e inteligência espacial são realizadas por meio da extensão PostGIS do PostgreSQL.
* **Equipe e Papéis:**
* **Taciano:** Cliente Professor
* **Kaique:** Ex Líder Técnico e Desenvolvedor Back-end
* **Luiz Henrique:** Ex Líder Técnico Desenvolvedor Mobile / Front-end
* **Ismael Gomes da Silva:** Desenvolvedor Back-end
* **Caio Lucas Lopes:** Analista de Requisitos
* **Eduardo Nascimento Santos:** Líder técnico Desenvolvedor Full-stack
* **Isaque Guimaraes:** Desenvolvedor Mobile / Front-end


* **Link para o Repositório do Projeto:** O projeto divide-se nos ecossistemas hospedados sob o perfil do GitHub da equipe:
* Backend API: `https://github.com/luizfelixdev/iservice-api`
* Frontend Mobile App: `https://github.com/luizfelixdev/iservice-app`


Com base nas informações extraídas dos documentos de documentação (`documento_visao.md` e `arquitetura.md`) e de configuração (`package.json`) do projeto **iService**, elaborei as seções solicitadas de forma detalhada e contextualizada à realidade da sua equipe:

---

### 2. Linguagem de Programação Utilizada

A linguagem de programação principal adotada no ecossistema do projeto (tanto no front-end quanto no back-end) é o **TypeScript**.

* **Domínio e Experiência da Equipe:** A escolha foi motivada pela tipagem estática rigorosa, que evita erros em tempo de execução e facilita refatorações seguras. A equipe possui competências bem distribuídas: o ecossistema Back-end (Kaique, Ismael e Eduardo) utiliza intensamente os recursos avançados de tipagem do TypeScript integrados a decoradores e injeção de dependência, enquanto o time Front-end/Mobile (Luiz Henrique e Isaque) foca na tipagem de interfaces de usuário, estados e consumo de APIs REST no ecossistema React Native/Expo.

Com base nas informações extraídas dos documentos de documentação (`documento_visao.md` e `arquitetura.md`) e de configuração (`package.json`) do projeto **iService**, elaborei as seções solicitadas de forma detalhada e contextualizada à realidade da sua equipe:

---

### 3. Framework Utilizado

No coração do desenvolvimento do Back-end está o **NestJS** (v11.0.1).

* **Sobre o NestJS:** É um framework Node.js progressivo voltado à construção de aplicativos eficientes, confiáveis e escaláveis no lado do servidor. Ele combina elementos de Programação Orientada a Objetos, Programação Funcional e Programação Reativa.
* **Justificativa no iService:** Ele impõe uma arquitetura modular rígida através da separação explícita entre *Controllers* (tratamento de rotas e requisições HTTP), *Services* (regras de negócio isoladas) e *Guards* (camada nativa para proteção de rotas com JWT e papéis de acesso). Essa modularidade otimiza a separação de conceitos (SoC) e simplifica os testes automatizados com o ecossistema Jest já nativamente embutido no projeto.

Com base nas informações extraídas dos documentos de documentação (`documento_visao.md` e `arquitetura.md`) e de configuração (`package.json`) do projeto **iService**, elaborei as seções solicitadas de forma detalhada e contextualizada à realidade da sua equipe:

---

### 4. Ambiente de Desenvolvimento (IDE) Escolhido

A IDE padrão recomendada para o desenvolvimento do iService é o **Visual Studio Code (VS Code)**.

* **Ferramenta de Debug Integrada:** O VS Code oferece um depurador nativo excelente para Node.js e TypeScript. Configurando o arquivo `.vscode/launch.json` com o comando `nest start --debug --watch`, os desenvolvedores conseguem anexar pontos de parada (*breakpoints*) diretamente no código-fonte TypeScript. Isso permite inspecionar pilhas de chamadas, variáveis em tempo de execução e analisar o fluxo dos serviços de matchmaking e geolocalização do app sem depender de logs poluídos no console.
* **Controle de Versão Integrado:** A IDE possui uma interface gráfica dedicada para Git, permitindo visualizar de forma clara arquivos modificados, realizar estágios (*stage*), escrever mensagens de commits e sincronizar alterações com o GitHub. Ela exibe também indicadores visuais diretamente nas linhas modificadas no código (*Git Gutters*) e, combinado com extensões como o *GitLens*, possibilita rastrear o histórico de alterações por linha e por autor de forma ágil.

Com base nas informações extraídas dos documentos de documentação (`documento_visao.md` e `arquitetura.md`) e de configuração (`package.json`) do projeto **iService**, elaborei as seções solicitadas de forma detalhada e contextualizada à realidade da sua equipe:

---

### 5. Tutorial para Implementação de CRUD

Para consolidar as práticas de desenvolvimento no ecossistema NestJS + TypeORM + PostgreSQL adotado no projeto, recomenda-se o seguinte tutorial prático:

* **Link:** [Building a REST API with NestJS and TypeORM (Dev.to)](https://www.google.com/search?q=https://dev.to/ismailcourr/building-a-rest-api-with-nestjs-and-typeorm-4767)
* **Descrição Curta:** Este tutorial guia o desenvolvedor passo a passo na criação de uma API RESTful utilizando o NestJS integrado ao TypeORM com PostgreSQL. Ele demonstra como gerar recursos modulares usando o Nest CLI, estruturar entidades de banco de dados, expor os endpoints de criação, leitura, atualização e exclusão (CRUD) por meio de Controllers, e injetar serviços para manipular a persistência de dados de forma assíncrona e segura.


Com base nas informações extraídas dos documentos de documentação (`documento_visao.md` e `arquitetura.md`) e de configuração (`package.json`) do projeto **iService**, elaborei as seções solicitadas de forma detalhada e contextualizada à realidade da sua equipe:

---

### 6. Fluxo de Trabalho Git com GitFlow: Branches e Pull Requests

O projeto iService utiliza a estratégia de ramificação **GitFlow** para organizar as contribuições da equipe e manter a branch principal protegida:

* **Branches no GitFlow:**
* `main`: Armazena o código de produção, estável e pronto para entrega.
* `develop`: Ramo central de integração de novas funcionalidades. É a base das atividades diárias da equipe.
* `feature/*`: Branches temporárias criadas a partir da `develop` para o desenvolvimento de requisitos ou tarefas específicas (ex: `feature/solicitar-servico`). Uma vez terminada a tarefa, ela é integrada de volta à `develop`.


* **Pull Request (ou Merge Request):** É o mecanismo pelo qual um desenvolvedor solicita formalmente que as alterações de sua branch (como uma `feature/*`) sejam revisadas e integradas ao ramo principal (`develop` ou `main`). No ecossistema do GitHub, o Pull Request funciona como uma ferramenta de qualidade: ele ativa a automação do CI/CD via GitHub Actions para realizar rotinas automáticas de Linters, Builds e Testes, bloqueando a integração se houver falhas técnicas ou conflitos.

Com base nas informações extraídas dos documentos de documentação (`documento_visao.md` e `arquitetura.md`) e de configuração (`package.json`) do projeto **iService**, elaborei as seções solicitadas de forma detalhada e contextualizada à realidade da sua equipe:

---

### 7. Resumo sobre Versionamento Semântico (SemVer)

O **Versionamento Semântico (SemVer)** é um conjunto de regras que dita como os números de versão de um software devem ser atribuídos e incrementados, estruturando-se no formato clássico **X.Y.Z** (por exemplo: `0.0.1`):

* **MAJOR (X):** Incrementado quando são feitas alterações com quebras de compatibilidade na API (breaking changes), onde o software que consome precisa de modificações para funcionar.
* **MINOR (Y):** Incrementado quando novas funcionalidades são adicionadas mantendo a compatibilidade total com as versões anteriores daquela mesma linha.
* **PATCH (Z):** Incrementado quando são aplicadas apenas correções de bugs (*bug fixes*) que não quebram e não adicionam novas funções, mantendo total retrocompatibilidade.

Com base nas informações extraídas dos documentos de documentação (`documento_visao.md` e `arquitetura.md`) e de configuração (`package.json`) do projeto **iService**, elaborei as seções solicitadas de forma detalhada e contextualizada à realidade da sua equipe:

---

### 8. Resumo sobre Conventional Commits

A especificação de **Conventional Commits** estabelece uma convenção simples para mensagens de commit, tornando o histórico de versionamento do Git altamente legível para humanos e fácil de ser automatizado por ferramentas externas (como geradores automáticos de CHANGELOGs). A estrutura básica baseia-se em:

> **`<tipo>(<escopo opcional>): <descrição curta>`**

Os principais tipos utilizados incluem:

* `feat`: Introdução de uma nova funcionalidade no código.
* `fix`: Resolução/correção de um bug técnico.
* `docs`: Modificações estritamente voltadas a documentações (como arquivos `.md`).
* `style`: Alterações estéticas ou de formatação de código que não afetam seu comportamento lógico (espaços, ponto e vírgula, etc).
* `refactor`: Modificação que reconstrói o código interno sem corrigir bugs ou adicionar novas funções.
* `test`: Adição ou modificação de testes automatizados unitários ou de integração.

