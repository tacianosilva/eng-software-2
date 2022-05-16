# Tarefa 02 - Implementação de um CRUD
<p> Nome: Edinalda Cristina Alves de Medeiros
<p> Usuário GitHub: edinaldaufrn
<p> E-mail: edinaldacristam@gmail.com

## Stack Tecnológica
O trabalho será utilizado: HTML, CSS e JavaScript para o Front-end, e Back-end Django. Assim como também, será utilizado o SGBD PostgreSQL para manter os dados.

## Arquitetura do Projeto
<p> No Front-end seram ultilizados páginas HTML que irá definir a estrutura do site. Essas páginas seram personalizadas utilizando CSS. Já o JavaScript irá deixar a página dinamica. 
<p> No Back-end será ultilizado o Framwork Django, que é baseado na arquitetura MVC (Model-View-Controller) que está implementada no framework como uma nova forma conhecida como MVT (Model-View-Template), que buscam principalmente o enlace entre o servidor web (Que irá controlar as requisições e respostas solicitadas pelo browser), os dados mantidos pelo banco de dados e a interface com o usuário.
<p> Já o Banco de Dados será um banco de dados relacional baseado em SQL, onde ultilizaremos o SGBD PostgreSQL.

## Link de Tutorial para fazer a implementação de um CRUD

[Link do tutorial](https://www.youtube.com/watch?v=Dzuiy-JNi-E)
<p> Nesse yuyorial aprendemos:
* Como criar um projeto com o Django
* O que são e como criar apps
* O que são e como criar models
* O que são migrations e como trabalhar com elas
* Sobre a interface de admin do Django
* A usar a API para acessar o banco de dados
* O que é uma view
* Como conectar uma url a uma view
* O que são templates e como trabalhar com elas
* Como adicionar css no projeto.

## Arquitetura de Software do Django

<p> A arquitetura do Django é relativamente simples. Basicamente, um projeto Django possui como padrão de projeto o MTV (Model, Template, View), que servem para:
* Model: Mapeamento do banco de dados para o projeto;
* Template: Páginas para visualização de dados. Normalmente, é aqui que fica o HTML que será renderizado nos navegadores;
* View: Lógica de negócio. É aqui que determinamos o que irá acontecer em nosso projeto.
<p> Toda esta arquitetura é interligada e conversam entre si. Uma depende da outra para realizar um determinado serviço e, no final, executar a tarefa que o usuário solicitou. A imagem abaixo descreve exatamente como este processo funciona:
![Arquitetura de software do Django](D:\UFRN\UFRN 2022_1\CloneGitHub\eng-software-2\tarefas\20221\edinaldaufrn)
