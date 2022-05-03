# Tarefa 02 - Implementação de um CRUD

* Joan Medeiros
* [@joanmdrs](https://github.com/joanmdrs)
* joanmedeiros2018@gmail.com

## Tecnologias estudadas 

### Linguagem 

- JavaScript

### Front-End 

- React.Js
- CSS

### Back-End

- Node.Js
- Express.Js
- Prisma ORM

### Banco de Dados 

- PostgreSQL

### Repositório do projeto
* [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=Repositório&color=#0e1116)](https://github.com/joanmdrs/sigcli)

## Arquitetura do projeto 

O projeto foi dividido em duas seções, uma de client e outra de server. A seção client guarda o Front-End e a server guarda o Back-End.

### Front-End 

No desenvolvimento do Front-End foi utilizado o React.Js que é uma biblioteca JavaScript para desenvolvimento de interfaces de usuário. Além disso, foi utilizado o Axios que é um client HTTP baseado em Promisses. 

### Back-End 

No desenvolvimento do Back-End, foi utilizado o Node.Js, juntamente com o framework Express.Js que é um gerenciador de requisições HTTP. Além disso, foi utilizado o Prisma ORM que é um kit de ferramentas para ajudar os desenvolvedores na gestão de banco de dados, o qual foi utilizado o PostgreSQL.

### Ligação Front-End e Back-End 

Essa ligação se deu por meio do uso da API criada pelo Back-End que alimenta o Front-End com a utilização do Axios, que faz as requisições de contato com a API.

### Ligação Back-End e Banco de Dados

Essa ligação se deu por meio do uso do ORM Prisma e do Express, que juntos, se complementam para realização a conexão com o Banco de Dados e por fim, conseguir realizar a manutenção de dados dentro do Banco de Dados. 

## Tutoriais 

### Front-End e Back-End 

Para o desenvolvimento do Front-End e parte do Back-End, foi utilizado 1 playlist, onde o autor do vídeo criou um CRUD utilizando React.Js, Node.Js, Express.Js e MySQL. Seguem os vídeos abaixo:

* [Crud utilizando React Js, Node e MySQL (simples) pt.1](https://youtu.be/e0He6sCiQT8)
* [Crud utilizando React Js, Node e MySQL (simples) pt.2](https://youtu.be/5_9rvyT9cg4)
* [Crud utilizando React Js, Node e MySQL (simples) pt.3](https://youtu.be/vzPsUWLprAw)

Descrição: No decorrer dos três vídeos, o autor demonstra a criação de um CRUD utilizando a biblioteca React.Js no Front-End, e utilizando o Express, o NodeJS e o MySQL no Back-End. O autor cria desde o formulário de inputs, a configuração das rotas, a conexão com o banco e a ligação entre as camadas de Front-End e Back-End.

### Back-End e Prisma ORM

Para o desenvolvimento do restante do Back-End e da definição do schema do banco do banco de dados foi utilizado o tutorial abaixo:

* [Prisma ORM Tutorial for Beginners | CRUD, CreateMany, Associations...](https://www.youtube.com/watch?v=E37-33M6Ypk)

Descrição: No decorrer do vídeo o autor realiza a configuração do Prisma ORM, cria a conexão com o banco de dados, que foi o MySQL e cria uma API simples utilizando o Express.Js.

## Arquitetura de Software 

### Modelo Client-server (cliente-servidor)

O modelo client-serve se trata de uma estrutura distribuída que se divide em tarefas entre os fornecedores de recurso e os consumidores, ou seja, Um deles é responsável pela manutenção da informação e o outro pela obtenção de dados. Dessa forma, a característica "cliente-servidor" descreve a relação de programas que cooperam entre si dentro de uma determinada aplicação, onde o componente do servidor fornece uma função ou serviço para um ou muitos clientes, os quais por sua vez realizam solicitações para esses serviços.
