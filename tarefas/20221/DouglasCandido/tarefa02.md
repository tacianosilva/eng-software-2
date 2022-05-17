# Tarefa 02 - Implementação de um CRUD

## Seção 0: Aluno

Nome: Douglas Mateus Soares Cândido da Silva

GitHub: DouglasCandido

Email: douglasmateus1@hotmail.com

## Seção 1:

### Link para o repositório do projeto: 

https://github.com/gabrielazevedods/engenharia-de-software-II

### Descrição da Stack Tecnológica do projeto: 

Iremos utilizar o framework Django para desenvolver tanto o front-end quanto o back-end do aplicativo web. Para o front-end, o recurso Templates do Django será utilizado juntamente com a biblioteca Bootstrap para estilizar o aplicativo. Para o back-end, será utilizado o SGBD PostgresSQL, juntamente com os recursos Models, Views e URLs do Django, serão criadas Views para tratar e responder adequadamente os diferentes tipos de requisições (GET, POST, etc) feitas aos determinados URLs do app.

## Seção 2:

### Arquitetura do projeto:

Adotaremos a arquitetura MVT (Model-View-Template) já definida no Django e, portanto, a comunicação entre o front-end, o back-end e o banco de dados acontecerá da seguinte forma: O Django possui o recurso Models e permite aos programadores representar os dados do banco de dados (No nosso projeto, o SGBD PostgreSQL) como objetos (ORM: Object Relational Mapper), esses dados serão utilizados e renderizados nos templates (Páginas) pelo recurso do Django Views de acordo com as demandas feitas pelos usuários ao acessar determinada funcionalidade do aplicativo através das Urls. Serão criadas Views para tratar e responder adequadamente os diferentes tipos de requisições (GET, POST, etc) feitas aos determinados URLs do app.

### Seção 3:

### Sobre o tutorial utilizado na implementação do CRUD na tecnologia escolhida para o projeto: 

https://www.youtube.com/watch?v=N6jzspc2kds&ab_channel=CodAffection

Tutorial feito pelo canal CodAffection que ensina a criar um aplicativo web básico com as funcionalidades CRUD utilizando Django e Postgres. Demonstra os principais recursos do Django (Models, Views, Templates, URLs) além dos arquivos criados por ele ao iniciar um novo projeto. Também demonstra como estilizar o app com a biblioteca Bootstrap e o módulo Crispy Forms do Django para estilizar e controlar formulários. Combinamos esse tutorial com os recursos do Docker e docker-compose para gerenciar as dependências.

### Seção 4:

Arquitetura do Software se refere ao fluxo como os componentes do sistema se relacionam entre si. No caso do nosso projeto, preferimos adotar a arquitetura já disponibilizada pelo Django, que é o framework utilizado no desenvolvimento. O Django utiliza a arquitetura MVT (Model-View-Template), que é uma reimaginação e fusão da arquitetura MVC (Model-View-Controller) com a Arquitetura de Camadas (Que divide o software em camadas de acordo com o escopo a que elas se referem: Interface com o usuário, lógica de negócio, lógica de acesso aos dados, banco de dados, etc). Na arquitetura MVT, os Models representam os dados das tabelas do banco de dados (No nosso caso, o SGBD relacional PostgreSQL) como objetos de classes, por meio do ORM. Os objetos (Dados) serão disponibilizados e renderizados nos Templates (Arquivos HTML com uma sintaxe especial). As Views são chamadas de acordo com requisições feitas aos URLs e elas são responsáveis por fazer o controle (Lógica de negócio) de como tratar determinado tipo de requisição (De acordo com os métodos e status HTTP) e renderizar um template (Interface com o usuário) específico para a situação.

