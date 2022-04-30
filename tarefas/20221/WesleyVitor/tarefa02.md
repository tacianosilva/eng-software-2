## Tarefa 02 - Implementação de um CRUD

## Informações Pessoais

**Nome:** Wesley Vitor Silva de Morais

**Github:** [WesleyVitor](https://github.com/WesleyVitor)

**Email:** wesleydemorais@outlook.com.br

## Stack Tecnológica

Vamos usar na parte do frontend a biblioteca ReactJS, que é escrita com a linguagem javascript, HTML e CSS3. Já na parte de backend vamos utilizar novamente a linguagem de programação javascript junto com o framework express que será responsável de criar a nossa api.

Link da Aplicação: [link](https://github.com/joanmdrs/sigcli)

## Arquitetura geral do projeto

Como já foi observado na sessão de stack Tecnológica, vamos usar a biblioteca ReactJS para criar as páginas de interface com o usuário, determinadas ações que o usuário necessitar junto ao servidor será feita uma requisição pela biblioteca axios ao backend.

Na parte do backend usaremos nodejs junto ao framework express para criar uma api rest que receberá as requisições do frontend, assim caso necessite "conversar" com o banco de dados usaremos uma "fachada" do tipo `nomeEntidadeRepository` para fazer conexão com banco de dados apartir do ORM prisma.

Na parte do banco de dados usaremos o postgresql para guardar os dados necessários, e com a ferramenta de interação pgadmin poderemos administrar as informações do banco.
