# Tarefa 01 - Git e GitHub com Markdown

- **Nome:** Italo Mauricio
- **Usuário GitHub:** italo-mauricio
- **E-mail:** italomauricio98@gmail.com

## event-sync

### Descrição
Uma aplicação web para gerenciamento de eventos, no qual o usuário tem total liberdade para customizar o evento a partir da sua necessidade. 

### Equipe
- **Membros:** Italo Mauricio, Tallys Aureliano, Vinicius Maia, Lucas Mateus, Dayanne Xavier.
- **Repositório:** [(https://github.com/tallysdev/eventSync)]

### Linguagem de Programação
O back-end do projeto será desenvolvido em Django, o front-end será desenvolvido em Vue.js e o SGBD utilizado será o PostGreSQL

## Frameworks Utilizados
## Vue.js

Vue.js é um framework progressivo para construção de interfaces de usuário. Ele é projetado desde o início para ser adotado de forma incremental, o que significa que você pode começar com uma parte pequena de sua aplicação e gradualmente expandi-la conforme necessário. Vue.js é especialmente popular para o desenvolvimento de single-page applications (SPAs), onde oferece uma abordagem reativa e de componentes para construir interfaces de usuário interativas.

Principais características do Vue.js incluem:

- **Reatividade:** Vue.js utiliza um sistema reativo que atualiza automaticamente a interface do usuário quando os dados mudam.
- **Componentização:** A aplicação é dividida em componentes reutilizáveis, facilitando a construção e manutenção de interfaces complexas.
- **Simplicidade:** Vue.js é conhecido por sua sintaxe simples e fácil de aprender, o que o torna acessível para desenvolvedores de diferentes níveis de experiência.

## Django

Django é um framework web em Python que segue o princípio do "batteries-included", ou seja, ele vem com um conjunto abrangente de recursos para facilitar o desenvolvimento web. Django é frequentemente utilizado para construir aplicativos web robustos e escaláveis, desde simples sites até aplicações complexas.

Principais características do Django incluem:

- **ORM (Object-Relational Mapping):** Django inclui um ORM que permite aos desenvolvedores interagir com o banco de dados usando objetos Python, eliminando a necessidade de escrever consultas SQL manualmente.
- **Administração Automática:** Django vem com um painel de administração automático que permite aos desenvolvedores criar rapidamente uma interface administrativa para gerenciar os dados do aplicativo.
- **Segurança:** Django possui recursos integrados para proteger contra várias vulnerabilidades comuns na web, como injeção de SQL, CSRF e XSS.

## Vue.js e Django juntos

Vue.js e Django podem ser usados juntos para criar aplicações web poderosas. Normalmente, Vue.js é usado para construir o frontend da aplicação, enquanto Django é usado para o backend. A comunicação entre o frontend e o backend pode ser feita através de uma API RESTful, onde Django fornece os endpoints da API e Vue.js consome esses endpoints para exibir dados na interface do usuário.

Essa combinação oferece o melhor dos dois mundos: a reatividade e interatividade do Vue.js no frontend, combinada com a robustez e segurança do Django no backend. É uma escolha popular para equipes que desejam desenvolver aplicações web modernas e escaláveis.

### IDE Utilizada
A equipe utilizará o Visual Studio Code como IDE principal. O Visual Studio Code possui integração nativa com o Git, facilitando o controle de versão. Além disso, oferece ferramentas de debug avançadas para JavaScript, incluindo breakpoints e console interativo.

### Tutorial CRUD
[Tutorial CRUD com Vue.js e Django](https://www.youtube.com/watch?v=u1M9-55IgnU)

Este tutorial aborda como construir uma aplicação usando Vue.js no frontend e Django no backend. Ele guia o usuário através da criação de operações CRUD (Create, Read, Update, Delete) para gerenciar as tarefas.

### Branches e Pull Requests com GitFlow:

O GitFlow é um modelo de fluxo de trabalho para o Git que define uma estrutura clara para gerenciar branches em um projeto. Ele promove a utilização de diferentes tipos de branches para organizar o desenvolvimento de novas funcionalidades, correções de bugs, releases e hotfixes.

- **Branches:**
  - **Main:** Branch principal que reflete o estado de produção do projeto. Cada commit na branch master representa uma nova versão lançada.
  - **Develop:** Branch de integração contínua, onde as features são mescladas antes de serem lançadas na master.
  - **Feature:** Branches criadas a partir da develop para desenvolver novas funcionalidades. Uma vez concluídas, são mescladas de volta para a develop.
  - **Release:** Branches criadas a partir da develop quando uma versão está pronta para ser lançada. Aqui são feitos ajustes finais antes de mesclar na master e na develop.
  - **Hotfix:** Branches criadas a partir da master para corrigir problemas críticos em produção. Uma vez corrigidos, são mesclados de volta para a master e para a develop.

- **Pull Requests (Merge Requests):**
  - Quando uma feature ou uma release está pronta para ser integrada ao branch principal (master ou develop), uma Pull Request é aberta.
  - A Pull Request permite revisão de código, discussão e garantia de qualidade antes de mesclar as mudanças.
  - Uma vez aprovada, a Pull Request é mesclada no branch de destino.

O GitFlow é uma metodologia poderosa para gerenciar o desenvolvimento de projetos Git, proporcionando uma estrutura organizada e transparente para toda a equipe.

### Versionamento Semântico:

O Versionamento Semântico é uma abordagem para atribuir significado a números de versão de software, de modo a transmitir de forma clara e consistente a natureza e o impacto das mudanças feitas em uma versão específica.

As versões são definidas no formato MAJOR.MINOR.PATCH:

- **MAJOR:** Incrementado quando são feitas mudanças incompatíveis na API.
- **MINOR:** Incrementado quando são adicionadas funcionalidades de maneira retrocompatível.
- **PATCH:** Incrementado quando são feitas correções de bugs de maneira retrocompatível.

Além disso, o Versionamento Semântico permite a inclusão de identificadores adicionais de pré-lançamento (como alfa, beta, rc) e de metadados de compilação.

Essa abordagem facilita a comunicação entre desenvolvedores, usuários e sistemas de automação sobre o significado e o impacto das versões de software.