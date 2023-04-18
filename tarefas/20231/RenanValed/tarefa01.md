### Tarefa 01 - Git e GitHub com Markdown

nome: Renan Dantas
usuário github: [Renanvaled](https://github.com/RenanValed)
e-mail: rénanvaled@gmail.com

# Sistema de controle de pronto (REPy)
## Descrição do projeto:

O Sistema de Controle de Pontos surge com a necessidade de contabilizar a jornada de trabalho dos funcionários/colaboradores de uma empresa de forma mais ágil, dinâmica e eficiente. Evitar fraudes, erros na hora do registro, rasuras e no fim tudo mais organizado, protegido e gerenciável.
O sistema será capaz de auxiliar seus devidos usuários no gerenciamento e consulta de dados relacionado a cada cliente envolvido, tendo em vista a modernização na marcação de ponto em sua jornada de trabalho. Além disso, será capaz de gerar relatórios de carga-horárias cumpridas e acompanhá-la periodicamente.

# Equipe
Nome | Competências | Papel |
---- | ------------ | ----- |
Bruno Costa | Desenvolvedor Web-Apps, sites, python, C | Gerente, Desenvolvedor |
David Santos | Desenvolvedor Back-end, API REST (django) | Desenvolvedor |
Renan vale | Product Manager, Dev. python, Dev. C | Gerente, Desenvolvedor |
Marcelo Vitor | Desenvolvedor Front-end, UX/UI | Desenvolvedor |

## Linguagens de programação:
### Python
    A equipe possui um conhecimento intermediário em Python, adquirido através de projetos realizados, cursos assistidos e da disciplina de ALP, que utilizou Python como linguagem base. Caso surjam dúvidas durante a construção do projeto, a equipe pode utilizar materiais de apoio previamente organizados para auxiliar no desenvolvimento.

## Frameworks:
### ReactJs
ReactJs é um framework com base em javascript voltado para criação de interfaces com o usuário(front-end), em que sua grande caracteristica é criar componentes reutilizáveis. Essa componentização permite o reaproveitamento de conteúdos e possibilita a criação de sites bem otimizados.

### DjangoREST

O DjangoREST é uma biblioteca do Django que ajuda a construir APIs RESTful de forma simples e eficiente. Algumas das vantagens são: a facilidade na criação de APIs, o suporte embutido para autenticação e autorização, a manipulação fácil de dados serializados e a integração perfeita com outros componentes do Django, como o ORM e o sistema de autenticação.

## IDE(Integrated Development Environment)
### Visual Studio
É um ambiente de desenvolvimento integrado desenvolvido pela Microsoft. Principais características incluem suporte a diversas linguagens de programação, depuração integrada, controle de versão, gerenciamento de pacotes e bibliotecas, bem como ferramentas para teste de código e análise de desempenho.

#### Ferramentas de debug e controle de versão da IDE
* A ferramenta de debug integrada ajuda os desenvolvedores a encontrar e corrigir erros em seu código com facilidade,e tamém, os desenvolvedores definam pontos de interrupção e inspecionem variáveis em tempo real, bem como acompanhem a execução do código linha por linha.

* Possui integração nativa com vários sistemas de controle de versão, como o Git, SVN e Mercurial. Isso permite que os desenvolvedores gerenciem seus projetos de maneira eficiente, rastreiem alterações no código, revertam alterações e resolvam conflitos.

##Exemplo de aplicaçao CRUD emm python

Este tutorial, mostra como relacionar a tecnologia de Python com o MySQL. Exibindo: inicializaçao de conexão com o BD, o envio de dados(INESERT), a requisição de dados (READ), a atualizaçao de um campo na tabela e a excusão de um dado existente no BD. 
Além de, na descriçao deixar um link para outro vídeo que mostra como integrar o CRUD em botões.
- [Ir para vídeo](https://www.youtube.com/watch?v=_q3j25ACmQ4)

### Branches e Pull Request com GitFlow

O GitFlow é uma metodologia de desenvolvimento de software que utiliza o Git como sistema de controle de versão. Ele define um fluxo de trabalho para gerenciar as branches e pull requests em projetos colaborativos.

## Branches principais

O GitFlow propõe a criação de duas branches principais:

- **Master**: contém o código estável e pronto para ser lançado.
- **Develop**: onde as novas funcionalidades são desenvolvidas e testadas antes de serem integradas à branch master.

### Branches secundárias

Além das branches principais, o GitFlow sugere a criação de outras branches secundárias:

- **Feature**: para desenvolvimento de novas funcionalidades.
- **Hotfix**: para correção rápida de bugs.
- **Release**: para preparação da próxima versão do software.

### Pull Request

Quando uma nova funcionalidade é desenvolvida na branch feature, por exemplo, ela deve passar por testes locais antes de ser enviada para revisão através do pull request. O pull request é uma solicitação para que os outros membros da equipe revisem o código e deem feedbacks antes da integração com a branch develop.

Após a revisão e aprovação do pull request, a nova funcionalidade pode ser integrada à branch develop. Quando a branch develop estiver pronta para ser lançada em produção, ela pode ser mesclada com a branch master através do pull request.

Em resumo, o GitFlow é uma metodologia eficiente para gerenciar as branches e pull requests em projetos colaborativos utilizando o Git e o GitHub. Ele ajuda a manter um fluxo organizado e seguro para o desenvolvimento do software.