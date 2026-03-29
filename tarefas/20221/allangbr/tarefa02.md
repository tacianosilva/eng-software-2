## Tarefa 02 - Implementação de um CRUD

### Nome: Allan Gabriel Almeida Oliveira
### GitHub: [allangbr](https://github.com/allangbr)
### E-mail: allanalmeidagbr@gmail.com

## Tecnologias utilizadas 
### Front-End: 
- ReactJS
### Back-End:
- NodeJS, Express, Prisma, NodeMon e Axios
### Banco de Dados:
- PostgreSQL - Criado utilizando Docker

### [Repositório do Projeto](https://github.com/allangbr/crud-application)

## Arquitetura do Projeto
<p align="justify"> O projeto teve sua estrutura dividida em duas pastas, a pasta client, onde fica a parte do FrontEnd, e a pasta server, onde fica a parte do BackEnd</p>

### FrontEnd
<p align="justify"> Para o desenvolvimento do FrontEnd, foi utilizado o JavaScript juntamente com a biblioteca ReactJS e o Axios</p>

### BackEnd
<p align="justify"> Já para o desenvolvimento do BackEnd, foi utilizado o JavaScript juntamente com o framework NodeJS, o ORM Prisma, Banco de Dados PostgreSQL e o Express</p>

### Ligação FrontEnd com BackEnd
<p align="justify"> Essa ligação se deu por meio do uso da API criada pelo BackEnd alimenta o FrontEnd com a utilizando do Axios, que faz as requisições de contato com a API</p>

### Ligação BackEnd com o Banco de Dados
<p align="justify"> Essa ligação se deu por meio do uso do ORM Prisma e do Express, que juntos, se complementam para realização a conexão com o Banco de Dados e por fim, conseguir realizar a manutenção de dados dentro do BD.</p>

## Tutorias Utilizados

### FrontEnd
<p align="justify"> Para o desenvolvimento do FrontEnd, foram utilizados dois tutoriais distintos, amobs utilizando o MySQL como Banco de Dados, porém, no meu projeto foi utilizado o PostgreSQL. Na parte de inserção e busca do CRUD, foi utilizado como base os seguintes videos: </p> 

- [Parte 01](https://youtu.be/e0He6sCiQT8) <br>
- [Parte 02](https://youtu.be/5_9rvyT9cg4) <br>

#### Descrição:
<p align="justify"> No decorrer dos vídeos, o autor demonstra a criação de um CRUD utilizando a biblioteca ReactJS no Front-End, e utilizando o Express, o NodeJS e o MySQL no Back-End. O autor cria desde o formulário de inputs, a configuração das rotas, a conexão com o banco  e a ligação entre as camadas de Front-End e Back-End.</p>
  
<p align="justify"> Ja na parte de update e deletação do CRUD, foi utilizado como base no video a seguir, mas o design e comportamento do FrontEnd dessas operações e como os dados foram enviados para o BackEnd foram feitos de forma autoral: </p> 

- [Link do Video](https://youtu.be/_S2GKnFpdtE) <br>

#### Descrição:
<p> No vídeos acima, o autor faz a demonstração de como se fazer um CRUD utilizando ReactJS, NodeJS Express e MySQL.</p>

### BackEnd
<p align="justify"> Já para o desenvolvimento do BackEnd, foi utilizado seguinte tutorial: </p>

- [Link do Video](https://youtu.be/E37-33M6Ypk) <br>

#### Descrição: 
<p> No vídeos acima, o autor faz a demonstração de como se fazer o BackEnd de um CRUD utilizando o ORM Prisma, Express e MySQL.</p>

## Padrão de Arquitetura de Software Client-server (cliente-servidor)

<p align="justify"> No Padrão Client-server (utilizado no meu projeto), o processamento da informação se divide em módulos e processos distintos. Um deles é responsável pela manutenção da informação(server) e o outro pela obtenção de dados(client).  </p> 
