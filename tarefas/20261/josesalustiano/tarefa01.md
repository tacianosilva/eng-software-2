# Tarefa 01 - Git e GitHub com Markdown

**Nome:** José Salustiano Neto Júnior
**Usuário GitHub:** josesalustiano
**E-mail:** jose.salustiano.166@ufrn.edu.br

---

## a. Título e descrição do projeto na disciplina, Equipe e Link para o repositório

**Título do Projeto:** Sistema de Gestão para Oficina Mecânica

**Descrição do Projeto:** O projeto consiste no desenvolvimento de uma plataforma automatizada voltada para organizar e otimizar as operações diárias de uma oficina mecânica. O sistema visa mitigar falhas operacionais e administrativas por meio de quatro pilares fundamentais: a Gestão de Atendimentos (cadastro unificado de clientes, veículos e histórico de ordens de serviço); o Controle de Estoque (monitoramento rigoroso da entrada e saída de peças/insumos com baixa automatizada); o Controle Financeiro (registro estruturado de receitas baseadas em serviços concluídos e formas de pagamento); e a Padronização de Serviços (catálogo de procedimentos com valores fixos e tempos estimados pré-definidos, garantindo consistência nos orçamentos). O software adota uma arquitetura moderna com a separação completa entre o Backend (API) e o Frontend (Interface).

**Equipe:** Ariadny Dantas, José Salustiano e Riam Stefesom.

**Link do Repositório:** https://github.com/riamxpp/Oficina-mecanica

## b. Linguagem de programação, domínio e experiência da equipe

O sistema utiliza uma arquitetura desacoplada e faz uso de duas linguagens principais: **Python** no ecossistema do backend e **JavaScript** no desenvolvimento do frontend.

* **Python:** É uma linguagem de alto nível, de sintaxe limpa, fortemente tipada e dinâmica. É amplamente reconhecida pela sua legibilidade e pela robustez do seu ecossistema, o que reduz o tempo de desenvolvimento de lógicas complexas de negócios e garante segurança no tratamento de dados.
* **JavaScript:** É a linguagem padrão da web para a criação de interfaces dinâmicas, permitindo o processamento de requisições assíncronas no lado do cliente sem a necessidade de recarregar a página a cada ação.

**Domínio e Experiência da Equipe:** Nos possuímos domínio intermediário e prático na linguagem Python, consolidado através do desenvolvimento de rotinas de validação de dados, transações de banco de dados e controle de regras restritivas (como a unicidade de registros e controle lógico de exclusão). Em relação ao JavaScript,  possuímos experiência na manipulação de estados do lado do cliente, integração com APIs REST através de requisições HTTP (com a biblioteca Axios) e estruturação de fluxos de telas responsivas.

## c. Frameworks utilizados no projeto

O projeto utiliza frameworks consolidados em ambas as pontas da aplicação:

* **No Backend (Django e Django REST Framework - DRF):**
O Django é um framework de alto nível em Python que segue a filosofia *"Batteries Included"*, oferecendo nativamente ferramentas robustas para segurança, um ORM (*Object-Relational Mapping*) poderoso e gerenciamento avançado de permissões de usuários. Juntamente com o DRF, o framework é utilizado para transformar os modelos de dados em uma API RESTful padronizada, que trafega dados puramente em formato JSON de maneira rápida e segura.

* **No Frontend (React):**
O React é uma biblioteca/framework JavaScript baseada em componentes, utilizada para a construção de interfaces de usuário dinâmicas. Ele gerencia o estado da aplicação de forma eficiente por meio do *Virtual DOM*. No projeto, o React permite criar formulários inteligentes e telas de visualização detalhada que consomem os dados da API em tempo real.

## d. IDE e Ferramentas Integradas

A IDE principal a ser utilizada no projeto será o **Visual Studio Code (VS Code)**, por ser leve e altamente customizável tanto para o ecossistema Python quanto para o JavaScript. 

* **Ferramentas de Debug:** O VS Code possui um *debugger* nativo que permite a inserção de *breakpoints* (pontos de parada) no código, inspeção do valor de variáveis em tempo real, visualização da pilha de chamadas (*call stack*) e execução passo a passo do código (tanto no servidor Django quanto na interface React).
* **Controle de Versão:** A IDE possui forte integração nativa com o Git. Na aba *Source Control*, é possível realizar o *staging* de arquivos, escrever mensagens de commit, alternar entre *branches*, realizar *push/pull* e resolver conflitos de *merge* de forma visual, sem a necessidade de recorrer ao terminal para comandos básicos.

## e. Tutorial de CRUD

**Link do Tutorial:** [Tutorial Prático de CRUD](https://www.youtube.com/watch?v=RFhtotcSz1A)

**Descrição:** Este tutorial em vídeo aborda de forma prática e direta como desenvolver as quatro operações fundamentais de um sistema: CRUD (Create, Read, Update, Delete). O material ensina o passo a passo para estruturar a criação, leitura, atualização e remoção de registros, servindo como uma excelente base de referência para a construção do fluxo de dados e das funcionalidades principais do nosso projeto.

## f. Branches, Pull Requests e GitFlow

O **GitFlow** é um modelo de ramificação (*branching model*) que organiza o trabalho em equipe definindo papéis estritos para diferentes branches:
* `main`: Armazena o código de produção, que sempre deve estar funcional.
* `develop`: Serve como a branch principal de integração. É a partir dela que os desenvolvedores criam suas branches de trabalho.
* `feature/nome-da-tarefa`: Branches temporárias criadas a partir da `develop` para desenvolver uma funcionalidade específica isoladamente.

Quando o trabalho em uma `feature` é finalizado, o desenvolvedor abre um **Pull Request (ou Merge Request)** no GitHub para solicitar que o seu código seja integrado de volta à branch `develop`. O Pull Request é fundamental porque permite que outros membros da equipe revisem o código, aprovem as alterações e garantam que não existam conflitos estruturais antes de a funcionalidade fazer parte do projeto principal.

## g. Versionamento Semântico (SemVer)

O **Versionamento Semântico** é um conjunto de regras para a atribuição de números de versão a um software, ajudando os desenvolvedores a entenderem o impacto de uma atualização. Ele segue o formato estruturado `MAJOR.MINOR.PATCH` (ex: `v2.1.4`):
1. **MAJOR (Maior):** Incrementado quando são feitas mudanças incompatíveis na API (quebram o funcionamento de versões anteriores).
2. **MINOR (Menor):** Incrementado quando novas funcionalidades são adicionadas, mas mantendo a compatibilidade com versões anteriores.
3. **PATCH (Correção):** Incrementado quando são feitas correções de bugs (*bug fixes*) que não alteram as funcionalidades nem quebram a compatibilidade.

## h. Conventional Commits

Os **Conventional Commits** (Convenção para Mensagens de Commits) são um padrão simples para formatar mensagens de commit. Eles ajudam a criar um histórico de projeto limpo, legível por humanos e por máquinas (útil para gerar *changelogs* automáticos). A estrutura básica é: `<tipo>[escopo opcional]: <descrição>`.

Os principais tipos são:
* `feat:` (Adição de uma nova funcionalidade)
* `fix:` (Correção de um bug)
* `docs:` (Alterações na documentação)
* `chore:` (Tarefas de manutenção, atualização de dependências, etc.)
* Exemplo prático: `feat: adiciona controle de estoque nas ordens de serviço`