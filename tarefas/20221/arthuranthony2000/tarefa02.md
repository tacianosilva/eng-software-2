# Tarefa 02 - Implementação de um CRUD
## Aluno

Nome: Arthur Anthony da Cunha Romão E Silva

GitHub: arthuranthony2000

Email: arthuranthony2000@gmail.com


## Projeto

### Link para o repositório do projeto

https://github.com/arthuranthony2000/Sig-environment-mark

### Descrição da Stack Tecnológica do projeto
Iremos utilizar o framework Spring Boot como backend, fornecendo API Rest para o frontend, utilizando a biblioteca React JS. Será utilizado o JPA para ORM, banco de dados relacional postgresql. No frontend será utilizado o boostrap para estilizar os componentes da página, bem como tecnologias como HTML, CSS e Javascript. Será utilizado o Postman para testar metódos GET, POST, PUT no backend, o Maven como gerenciador de pacotes e a ferramenta CASE Astah Community para a modelagem do domínio.


## Tutorial

https://youtu.be/nQr_X62vq-k

### Repositório utilizado na aula

https://github.com/devsuperior/aulao005

O Nelio Alves é professor do instituto federal do triângulo mineiro, possui uma academia preparatória para programadores ingressantes no mercado de trabalho, realiza semanas especiais, prévias de seus bootcamps. Nessa live ele ensina como construir um CRUD simples, utilizando Spring Boot, Maven, JPA/Hibernate e o Postman para testar o backend com os metódos HTTPS. O mini projeto consiste em um sistema simples de cadastro de produtos, associados a suas respectivas categorias.


## Arquitetura de Software utilizada no projeto

O sistema será dividido em duas partes, o front-end, na qual irá consumir uma API, será hospedado na vercel, e a outra parte o back-end que irá fornecer a API REST. Ou seja, a aplicação fará requisições a um controlador REST no back-end, na qual possui outras camadas como a de serviço, que ficará responsável por fazer o intermédio entre os controladores rest, e a camada de acesso a dados. A camada de domínio, que ficará responsável por armazenar as regras de negócio. E a camada de acesso a dados (repository), na qual será responsável por implementar interfaces de acesso e manipulação aos dados, nesse caso em um banco de dados no sgbd postgresql.

