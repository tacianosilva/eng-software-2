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

### Links de Tutoriais usados para fazer um CRUD na tecnologia escolhida (MySQL):

Vídeo 1:

PS: O vídeo foi dividido em 3 partes, ou seja, 3 links:
Parte 1: https://www.youtube.com/watch?v=T8mqZZ0r-RA

Parte 2: https://www.youtube.com/watch?v=3YrOOia3-mo&list=WL&index=26

Parte 3: https://www.youtube.com/watch?v=_S2GKnFpdtE

Nos vídeos acima, o Pedro (dono do canal) faz a demonstração de como se fazer um CRUD utilizando ReactJS, NodeJS Express e MySQL. Dividindo o CRUD em 3 partes, sendo a parte um a criação e configuração do ambiente de trabalho, a segunda parte consiste no desenvolvimento da parte de Create e Read, e a terceira parte o desenvolvimento do Update e Delete.

Vídeo 2:

PS: O vídeo foi dividido em 3 partes, ou seja, 3 links:
Parte 1: https://youtu.be/e0He6sCiQT8

Parte 2: https://youtu.be/5_9rvyT9cg4

Parte 3: https://youtu.be/vzPsUWLprAw

Descrição: No decorrer dos três vídeos, o autor demonstra a criação de um CRUD utilizando a biblioteca ReactJS no Front-End, e utilizando o Express, o NodeJS e o MySQL no Back-End. O autor cria desde o formulário de inputs, a configuração das rotas, a conexão com o banco e a ligação entre as camadas de Front-End e Back-End.

## Arquitetura MVC

A arquitetura MVC(Model-View-Controller) é um tipo de arquitetura em camadas no qual existe a camada de View responsável por "conversar" com os usuários. A camada de Controller é um "meio de campo" entre View e Model, que faz toda a chamada para as regras de negócios. E Model é uma camada de conexão com o banco de dados.
