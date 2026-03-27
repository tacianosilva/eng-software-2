# Tarefa 01 - Git e GitHub com Markdown

|Aluno|Usuário do Github|E-mail|
|-|-|-|
|Mosiah Adam|akemi-adam|tech.adam.servicos@gmail.com|

## Projeto

|Título|Descrição|Equipe|Links|
|-|-|-|-|
|Touchfy|Sistema web para streaming e publicação de músicas online|Anderson, Diana, Douglas e Mosiah|[back-end](https://github.com/douglas-e-amigos/touchfy-api), [front-end](https://github.com/douglas-e-amigos/touchfy-ui)|

## Linguagens

O projeto utiliza duas linguagens de programação principais: typescript, para o desenvolvimento da interface web; e java, para a criação da API.

Typescript é uma linguagem transpilada baseada no javascript, herdando muito de sua sintaxe e funcionamento, mas aumentando a segurança e adicionando outras funcionalidades. O Typescript possui tipagem forte e estática, o que aumenta a confiabilidade do software. Possui o recurso de interfaces, o que permita uma flexibilidade maior e mais segura do que o javascript.

Por sua vez, o Java é uma linguagem compilada, fortemente e estaticamente tipada, que estará sendo usada para o back-end nesse projeto. O java roda na JVM (Máquina Virtual do Java), o que garante uma interoperabilidade do código.

Todos os membros da equipe possuem conhecimento em Java. Alguns tiveram uma boa experiência com a linguagem por fazerem curso técnico no IFRN. Já o typescript vai ser uma experiência nova para a maioria da equipe; porém, por já estarem habituados com javascript e com os conceitos de POO, não será um desafio.

## Tecnologias

O Angular, mantido pela Google, é um framework front-end baseado em TypeScript usado para criar aplicações web modernas. Ele utiliza uma arquitetura de componentes, possui recursos como roteamento, injeção de dependência e integração com APIs, facilitando o desenvolvimento de interfaces organizadas e escaláveis.

O Spring Boot, do ecossistema da VMware, é um framework back-end em Java voltado para a criação de APIs e sistemas robustos. Ele simplifica a configuração do Spring e permite desenvolver aplicações rapidamente, sendo muito utilizado em projetos corporativos e de microserviços.

## IDE

O Visual Studio Code é uma IDE leve e bastante popular, desenvolvida pela Microsoft, que oferece suporte a diversas linguagens por meio de extensões. Ele possui uma interface simples e altamente personalizável, além de um ecossistema rico que permite integrar ferramentas essenciais ao desenvolvimento, como linters, formatadores e suporte a frameworks modernos.

Em relação ao debug, o VS Code permite o uso de breakpoints para pausar a execução do código e inspecionar variáveis, facilitando a identificação de erros. Já no controle de versão, ele possui integração nativa com o Git, permitindo realizar commits, visualizar alterações, resolver conflitos e gerenciar branches diretamente pela interface, sem necessidade de usar o terminal.

## CRUD Exemplo

Um exemplo de CRUD com SpringBoot pode ser observado [aqui](https://www.rocketseat.com.br/blog/artigos/post/crud-java-spring-boot-guia-completo).

Basicamente, uma vez que tenha criado um projeto spring, o desenvolvedor vai precisar criar uma `Entity` (entidade), que represente o modelo de dados do CRUD (a tabela). No exemplo, o tutorial usa uma entidade de produtos, que é uma classe que mapeia as colunas do banco de dados e que possue as anotações `@Entity` e de colunas.

Após isso, o tutorial mostra que é preciso criar um `Repository`, que nada mais é do que uma interface que extende de outra interface, `JpaRepository`. Essa interface define os principais métodos de interação com o banco de dados, como métodos de salvar, atualizar, buscar, etc. Aqui é importante associar uma entidade à interface, para tipar corretamente.

Por fim, o tutorial mostra a criação de um controller, que é uma classe que expõe as rotas da API do Spring e recebe a requisição. Aqui, o controller só repassa a requisição para o repositório do produto ou usa ele para retornar algo.
