# Tarefa 02 - Implementação de um CRUD

* Nome: Lucas da Silva Santos
* Usuário Github: [LucasSilva01](https://github.com/LucasSilva01)
* E-mail: santoslucas9956@gmail.com
#

* Link do Repositório: [SABIDO](https://github.com/gabrielazevedods/engenharia-de-software-II)
#
## Descrição da Stack Tecnológica do seu projeto

* Tanto o front-end quanto o back-end da aplicação web serão construídos usando o framework Django que  é um framework web full stack open source (código aberto) baseado em Python. A aplicação será estilizada usando a funcionalidade Templates do Django e o framework Bootstrap no front-end, enquanto o sistema de gerenciamento de banco de dados PostgresSQL será utilizado no backend, juntamente com os recursos  Model-View-Template, os três aspectos de uma aplicação web trabalhados pelo Django. As visualizações serão construídas para processar e responder a vários tipos de solicitações (GET, POST, dentre outros).
#
## Arquitetura Geral do Projeto

* Usaremos a arquitetura MTV (Model, Template, View) que é padrão do Django. No model ocorre o mapeamento do banco de dados para o projeto, enquanto no template temos as páginas para que os dados sejam vizualizados/renderizados no navegador e a lógica de négocio fica na parte da view, que é basicamente onde fica o projeto, quando o usuário faz uma requisição pelo browser, utilizando uma rota, é executado um método das Views, que utiliza os Models para acessar o banco de dados e retornar as informações. Estas informações são renderizadas pela camada de Template e, finalmente, é renderizado para o usuário pelo navegador. 
#

## Tutorial para a implementação de um CRUD

* Link do Tutorial: [CRUD Django](https://www.youtube.com/watch?v=mbQVVIqSxoI)

* Link do repósitorio após fazer o tutorial: [GitHub - CRUD Django](https://github.com/LucasSilva01/CRUD-Django)

Neste tutorial ele foca na parte de desenvolvimento do CRUD e não na preparação do ambiente para que seja realizado o projeto, diferente de grande parte dos tutoriais que encontrei, ele finaliza o CRUD não somente no django-admin, mas também via requisições em páginas. Acima está o repositório do CRUD após realizar o tutorial.
#

## Arquitetura de Software

A arquitetura MTV é uma derivação desde padrão de projeto. O que se altera é a nomenclatura de arquivos e quais as camadas interconectadas. Este modelo é utilizado dentro do framework. A arquitetura do Django é relativamente simples. Basicamente, um projeto Django possui como padrão de projeto o MTV (Model, Template, View), que servem para:

    Model: Mapeamento do banco de dados para o projeto;

    Template: Páginas para visualização de dados. Normalmente, é aqui que fica o HTML que será renderizado nos navegadores;

    View: Lógica de negócio. É aqui que determinamos o que irá acontecer em nosso projeto.

Toda esta arquitetura é interligada e conversam entre si. Uma depende da outra para realizar um determinado serviço e, no final, executar a tarefa que o usuário solicitou.