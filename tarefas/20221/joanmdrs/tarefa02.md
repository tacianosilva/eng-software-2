# Tarefa 02 - Implementação de um CRUD

* Joan Medeiros
* [@joanmdrs](https://github.com/joanmdrs)
* joanmedeiros2018@gmail.com

## Tecnologias estudadas 

### Front End 

- React.Js

### Back-End

- Node.Js
- Express.Js
- Prisma 

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

