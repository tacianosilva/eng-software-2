# Tarefa 01 - Git e GitHub com Markdown
- Nome: David Emanoel da Silva Santos
- Usuário: [Davidemanoel7](github.com/Davidemanoel7)
- E-mail: david.emanoel.706@ufrn.edu.br


## REPy (Registro Eletrônico de Pontos y)

O REPy é um Sistema de Registro Eletrônico de Pontos, baseado nos sistemas REP existentes. Nesse projeto, a principal motivação é a construção de uma aplicação para contabilizar a jornada de trabalho dos funcionários de uma organização, além de oferecer funcionalidades administrativas para a organização.


### Equipe:

- David Emanoel da Silva Santos [@Davidemanoel7](https://github.com/Davidemanoel7)
- Bruno da Costa Porfírio [@Brunowcst](https://github.com/Brunowcst)
- Renan Vale Dantas [@RenanValed](https://github.com/RenanValed)
- Marcelo Victor Melo Nunes [@Marcelo1403](https://github.com/Marcelo1403)

### Repositório
[GitHub do projeto](https://github.com/Brunowcst/SistemasDeControleDePontos)

## Linguagens e Tecnologias

* Python: A equipe têm familiaridade com a linguagem, visto que durante a graduação fora usada para a construção de projetos e/ou atividades,demonstrando conhecimento intermediário em suas especificidades, bibliotecas e recursos que ela oferece.

* JavaScript: A equipe têm familiaridade e conhecimento intermediário com a linguagem, visto que durante a graduação fora usada para a construção de projetos e/ou atividades. Durante essa experiência, fora utilizados recursos avançados da linguagem, bem como a utilização de frameworks.

### Tecnologias

* Front-end: ReactJs;
    [ReactJs](https://legacy.reactjs.org/) é uma biblioteca em JavaScript utilizada para a construção de interfaces gráficas na web, auxiliando no desenvolvimento web. Esse fremawork é facilmente ligado à linguagens de marcação e estilização, como o HTML e o CSS, dando ainda mais poder nas interações dos usuários com a interface.
* Back-end: Django Rest;
    [Django REST](https://www.django-rest-framework.org/) é um Framework utilizado para a construção de forma simples e rápida de [APIs](https://aws.amazon.com/pt/what-is/api/) utilizando o Django para manipulação do banco de dados e rotas;

## IDE utilizada

Será utilizada a IDE Visual Studio Code ([VsCode](https://code.visualstudio.com/)) como principal ferramenta de desenvolvimento. Como ferramenta de debug, a equipe utilizará os próprios recursos da plataforma e analisará a utilização de outras, caso necessário. No controle de versão, o [Git](https://git-scm.com/) será a principal ferramenta de controle e gerenciamento de versões, além do [GitHub](https://github.com/), para acompanhamento de tarefas e tasks.

## Tutorial CRUD com FRD (Django Rest Framework)

[Tutorial](https://www.geeksforgeeks.org/django-rest-api-crud-with-drf/)

Esse tutorial da Geeksforgeeks é bem curtinho e interessante, pois mostra que podemos fazer operações CRUD através de APIs REST. O tutotial aborda desde a instalação do django até a exemplificação da criação de uma API simples para um aplicativo de supermercado. 
Dentro do tutorial é abordado a **serialização**, que nada mais é do que a conversão de objetos para o tipo de dado utilizado na web e frameworks front-end (JSON).

O tutorial aborda, ainda, a criação de **views** (visualização) dos dados. Essa ação é necessária para a renderização dos dados e construção das nossas ações de **GET** e **POTS** da nossa API.

Ao final do tutorial, um link muito interessante que poderá ajudar o grupo, na integração do Django REST Framework com a nossa tecnologia utilizada no front-end (ReactJs). [Integrating Django with Reactjs using Django REST Framework](https://www.geeksforgeeks.org/integrating-django-with-reactjs-using-django-rest-framework/?ref=rp)

## Branches & Pull request

### Branches
Uma branch é uma **ramificação** de um repositório; Nessa ramificação, poderá ser feita alterações em documentos e diretórios, sem afetar o diretório principal (ou branch principal). O ato de criar uma branch é saudável e essencial para o desenvolvimento de softwares, pois permite o gerenciamento de atividades e o desenvolvimento paralelo entre contribuintes de um mesmo projeto.

Você pode aprender mais sobre Git [nesse link](https://git-scm.com/docs/gittutorial).

### Pull request
Um Pull request (ou PR) é uma solicitação de alteração (por push) em uma branch no Github. Em um PR, você pode revisar, comentar e discutir os pontos que foram alterados na branch em questão. Além disso, quando da aceitação do PR, o conteúdo modificado poderá ser mesclado nessa branch.

[Leia mais](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests?platform=linux) sobre pull request nessa documentação.

## Versionamento Semântico

O versionamento semântico é uma convenção para atribuição de versões de software que segue um conjunto de regras e padrões bem definidos. Essa convenção é baseada em um número de versão composto por três partes principais (major.minor.patch)

A primeira parte (major) é usada para indicar mudanças incompatíveis na API do software, a segunda parte (minor) é usada para indicar novas funcionalidades ou melhorias que não quebram a compatibilidade com versões anteriores, e a terceira parte (patch) é usada para indicar correções de bugs ou outras alterações que não afetam a compatibilidade. Além disso, o versionamento semântico também inclui pré-lançamentos (como alfa e beta) e metadados opcionais para fornecer informações adicionais sobre a versão do software.

## Conventional Commits
Basicamente trata-se de uma convensão simples utilizada nas mensagens de commits. Essa convensão se relaciona com o versinamento semântico uma vez que estabelesce padrões de commits para o versionamento do software. Por exempplo:
- **fix**: um commit do tipo fix soluciona um problema na sua base de código (isso se correlaciona com PATCH do versionamento semântico).
- **feat**: um commit do tipo feat inclui um novo recurso na sua base de código (isso se correlaciona com MINOR do versionamento semântico).
- **BREAKING CHANGE**: um commit que contém no rodapé opcional o texto BREAKING CHANGE:, ou contém o símbolo ! depois do tipo/escopo, introduz uma modificação que quebra a compatibilidade da API (isso se correlaciona com MAJOR do versionamento semântico).

Além desses, outros padrões podem ser utilizados dado um contexto. Por exemplo: build:, chore:, ci:, docs:, style:, refactor:, perf:, test:.
