# Tarefa 01 - Git e Github com Markdown 
## Tomé Galileu Oliveira Arcanjo 
## Tome-arcanjo 
## tomearcanjo12@gmail.com 

## 9.a)Projeto da Disciplina

## Título do Projeto
**Sistema Complementar de Gestão de Atividade de Extensão (SIGAEX)**

## Descrição
Projeto desenvolvido para o **LABENS**, consistindo em uma plataforma completa para **gestão de atividades de extensão**, incluindo funcionalidades como **controle de presença por QR Code**, entre outros recursos.

## Equipe
- Tomé Galileu   
- Diêgo Axel  
- Nathan Lopes 
- Vitória  
- Hildemberg  

## Link de Referência / Repositório Base
- https://github.com/sigaex/front/

## 9.b) Linguagem de Programação

### Tecnologias Definidas

- **Python** – Linguagem principal utilizada no desenvolvimento do **backend**.  
- **Django** – Framework web utilizado para estruturar e desenvolver a aplicação.  
- **Nginx** – Servidor web utilizado como **reverse proxy** para o deploy da aplicação.

### Domínio e Experiência da Equipe

Os integrantes da equipe possuem **experiência parcial com Python e Django**.  
Entretanto, **apenas Hildemberg possui experiência com toda a stack definida**.

Os demais integrantes **estão atualmente em processo de aprendizado do Nginx**.

## 9.c) Framework Django

O **Django** é um framework web de alto nível para **Python**, utilizado para desenvolver aplicações web de forma rápida, segura e organizada. Ele segue o padrão de arquitetura **MVT (Model–View–Template)**, que separa a lógica de dados, processamento e apresentação da aplicação.

O framework possui diversas funcionalidades prontas, como **ORM para interação com banco de dados**, **painel administrativo automático** e **mecanismos de segurança integrados**, o que acelera o desenvolvimento e reduz a necessidade de bibliotecas externas.

No projeto **SIGAEX**, o Django será utilizado para desenvolver o **backend da aplicação**, gerenciar os dados do sistema e fornecer a lógica necessária para o funcionamento da plataforma.

## 9.d) IDE Utilizada

A **Visual Studio Code (VS Code)** será utilizada como ambiente de desenvolvimento do projeto. Trata-se de uma IDE leve, gratuita e amplamente utilizada no desenvolvimento de software, com suporte a diversas linguagens de programação, incluindo **Python**.

Uma de suas principais vantagens é o **sistema de extensões**, que permite adicionar funcionalidades específicas para cada tecnologia utilizada no projeto, como suporte ao **Django**, formatação de código e análise estática.

### Ferramentas de Debug

O VS Code possui ferramentas integradas de **debug**, permitindo executar o código passo a passo, definir **breakpoints**, inspecionar variáveis e acompanhar o fluxo de execução do programa. Isso facilita a identificação e correção de erros durante o desenvolvimento.

### Controle de Versão

A IDE também possui **integração nativa com Git**, permitindo realizar operações como **commit, push, pull e criação de branches** diretamente pela interface do editor. Essa integração facilita o trabalho colaborativo da equipe e o controle das versões do código no repositório do projeto.

## 9.e) Tutorial Utilizado

**Link do tutorial:**  
https://github.com/prosenjeetshil/django-crud-operations-tutorial

O tutorial apresenta a implementação das operações **CRUD (Create, Read, Update e Delete)** em um projeto utilizando o framework **Django**.

Durante o tutorial são demonstradas as funcionalidades de **cadastrar, pesquisar, atualizar e deletar registros**, explicando passo a passo como implementar cada uma dessas operações dentro da estrutura de um projeto Django.

Esse material foi utilizado como **referência para compreender a implementação básica de operações de gerenciamento de dados**, que são fundamentais para o desenvolvimento do sistema.

## 9.f) Uso de Branches e Pull Requests com Git e GitHub (Gitflow)

Para o desenvolvimento do projeto será utilizado o **Git** como sistema de controle de versão e o **GitHub** para hospedagem e colaboração no repositório.

A equipe utilizará o modelo de organização **Gitflow**, que define uma estrutura de branches para organizar melhor o desenvolvimento. Nesse modelo, normalmente existem branches principais como:

- **main**: contém a versão estável do projeto.
- **develop**: utilizada para integrar as funcionalidades em desenvolvimento.
- **feature/***: utilizadas para desenvolver novas funcionalidades específicas.

Cada integrante da equipe cria uma **branch de feature** para trabalhar em uma nova funcionalidade ou correção. Após finalizar o desenvolvimento, é aberto um **Pull Request (PR)** no GitHub.

O **Pull Request** permite que as alterações sejam revisadas pelos outros membros da equipe antes de serem integradas à branch principal do projeto. Esse processo ajuda a manter a qualidade do código, facilita a colaboração e evita conflitos no desenvolvimento.

## 9.g) Versionamento Semântico

O **Versionamento Semântico (Semantic Versioning)** é uma forma padronizada de numerar versões de um software, facilitando o controle de mudanças e a compreensão da evolução do projeto.

Nesse modelo, as versões seguem o formato:

**MAJOR.MINOR.PATCH** (por exemplo: `1.4.2`)

- **MAJOR**: indica mudanças grandes que podem quebrar compatibilidade com versões anteriores.
- **MINOR**: indica a adição de novas funcionalidades que são compatíveis com versões anteriores.
- **PATCH**: indica correções de bugs ou pequenos ajustes que não alteram funcionalidades.

Esse tipo de versionamento ajuda a equipe a organizar melhor as atualizações do sistema e permite que os usuários e desenvolvedores entendam facilmente o tipo de alteração realizada em cada nova versão do software.
