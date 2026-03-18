# Tarefa 01 - Git e GitHub com Markdown

Nome: Ariadny Dantas
Usuário Github: ariadnyD
E-mail: ariadny.dantas.716@ufrn.edu.br

# Projeto: Oficina Mecânica

## 1. Sobre o Projeto e Equipe
**Descrição:** O projeto consiste em um sistema de controle interno focado na gestão de uma oficina mecânica. A aplicação será utilizada pelo proprietário e pelos funcionários para otimizar operações diárias, incluindo a precificação de serviços, o registro e histórico de manutenções realizadas por veículo, o cadastro detalhado de ordens de serviço (vinculadas aos clientes e seus respectivos veículos) e o controle integrado de estoque de peças.
**Equipe:** Ariadny Dantas, Riam Stefesom, José Salustiano.
**Repositório:** [Acesso ao projeto no GitHub](https://github.com/eng-softw4re/oficina-mecanica.git)

## 2. Tecnologias e Linguagens
O projeto será desenvolvido utilizando as linguagens **Python** e **JavaScript**. A equipe possui domínio e experiência prévia com essa stack de tecnologias, uma vez que a base de estruturação e o início do desenvolvimento deste sistema foram estabelecidos no semestre passado.

## 3. Frameworks Utilizados
Para estruturar o sistema de forma eficiente, utilizaremos:
* **Django (Back-end):** Um framework robusto em Python que acelera o desenvolvimento fornecendo uma arquitetura segura, mapeamento objeto-relacional (ORM) para o banco de dados e rotas prontas.
* **React (Front-end):** Uma biblioteca/framework JavaScript para a construção da interface de usuário. Ele trabalha com a criação de componentes reutilizáveis, garantindo que as telas de cadastro, estoque e controle de ordens de serviço sejam dinâmicas e fluidas.

## 4. Ambiente de Desenvolvimento (IDE)
Adotaremos o **Visual Studio Code (VS Code)** como nossa IDE principal, devido à sua excelente compatibilidade e fluidez no Linux Mint, além de ser o padrão atual para desenvolvimento web. 
* **Integração com Git:** O VS Code possui uma aba de *Source Control* nativa que permite visualizar as modificações nos arquivos, fazer *commits*, transitar entre *branches* e enviar o código para o GitHub de forma visual, sem depender exclusivamente de comandos no terminal.
* **Ferramentas de Debug:** A IDE possui suporte integrado para depuração tanto do Python quanto do JavaScript. É possível adicionar *breakpoints* (pontos de parada) clicando ao lado da linha de código para pausar a execução e inspecionar o valor das variáveis em tempo real, facilitando a identificação de erros na lógica de precificação e controle do sistema.

## 5. Referência Prática: Operações Básicas
**Tutorial em vídeo:** [CRUD em Python - Python e MySQL (Hashtag Programação)](https://youtu.be/_q3j25ACmQ4)
O vídeo demonstra de maneira prática e direta como implementar as quatro operações fundamentais em um banco de dados (Create, Read, Update, Delete). Ele ensina como conectar o Python a um banco MySQL e criar as interações enviando os comandos SQL pelo código, servindo como uma excelente base lógica para o gerenciamento dos dados da oficina.

## 6. Fluxo de Trabalho e Controle de Versão (GitFlow)
Utilizaremos o modelo **GitFlow** para organizar o versionamento no GitHub. Nesse formato, o desenvolvimento ocorre em ramificações isoladas chamadas **Branches** (ex: `feature/cadastro-cliente` ou `bugfix/erro-estoque`), mantendo o código oficial da branch principal intacto.
Ao finalizar o desenvolvimento em uma branch, abriremos um **Pull Request (PR)**. O PR é um pedido formal para fundir (*merge*) o código novo na branch principal. Ele funciona como um ponto de verificação onde os outros membros da equipe podem revisar o código, discutir as mudanças e garantir a qualidade antes da integração final.
