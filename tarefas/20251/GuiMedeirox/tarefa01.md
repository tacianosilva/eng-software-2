# Tarefa 01 - Git e GitHub com Markdown

Guilherme - GuiMedeirox - guilherme.medeiros.706@ufrn.edu.br

**KNN Barber App** é um aplicativo que visa auxiliar na gestão de uma barbearia, permitindo o gerenciamento de clientes, agendamentos e pagamentos de forma eficiente. O projeto será desenvolvido utilizando React no front-end e FastAPI no back-end.

**Equipe e Link para o Repositório**

A equipe é composta por integrantes com conhecimento básico em JavaScript/React e Python/FastAPI, com a intenção de aprofundar esses conhecimentos conforme as demandas do projeto surgirem. O repositório do projeto pode ser acessado aqui https:/www.github.com/AlecYalcin/KNN-Barber-App

**Linguagem de Programação**

Usaremos JavaScript com React para o front-end e Python com FastAPI para o back-end. O conhecimento da equipe nessas tecnologias é básico, mas estamos comprometidos em aprofundá-lo ao longo do desenvolvimento do projeto.


**Frameworks Utilizados**

- **FastAPI**: Um framework moderno para construção de APIs em Python, otimizado para alto desempenho e facilidade de uso. Ele utiliza tipagem estática, gerando documentação automática e possuindo suporte a validação de dados via Pydantic. Para criar um CRUD com FastAPI, basta definir os modelos de dados com Pydantic, configurar os endpoints com `@app.post()`, `@app.get()`, `@app.put()` e `@app.delete()`, e integrar com um banco de dados usando SQLAlchemy.
- **React**: Uma biblioteca JavaScript para criação de interfaces de usuário reativas e componentizadas. Permite desenvolvimento modular e reutilizável, facilitando a criação de aplicações SPA (Single Page Applications).

**IDE Utilizada**

Usaremos o **Visual Studio Code (VSCode)**, uma IDE leve e altamente extensível. O VSCode possui suporte a depuração para diversas linguagens através de extensões, permitindo a configuração de breakpoints e execução passo a passo do código. No controle de versão, utilizaremos **Git via terminal** para gerenciar os commits, branches e merge requests.

**Tutorial de CRUD com FastAPI**

Um tutorial excelente para aprender a criar um CRUD com FastAPI pode ser encontrado neste link: [https://fastapi.tiangolo.com/tutorial/sql-databases/](https://fastapi.tiangolo.com/tutorial/sql-databases/).

Resumo do tutorial:
- Configuração de um banco de dados SQLite.
- Uso do SQLAlchemy para interagir com o banco.
- Criação de modelos de dados e endpoints CRUD.
- Utilização do Pydantic para validação.

**Branches e Pull Requests no GitFlow**

O GitFlow é um modelo de branching que organiza o desenvolvimento em diferentes tipos de branches:
- **Main**: Contém a versão estável do projeto.
- **Develop**: Branch principal de desenvolvimento.
- **Feature branches**: Usadas para novas funcionalidades, derivadas de *develop* e mescladas de volta ao final.
- **Release branches**: Preparadas para lançamentos, permitindo correções antes da versão final.
- **Hotfix branches**: Criadas para correções urgentes na *main*.

O **Pull Request (PR)** é a solicitação de mesclagem de código entre branches. No GitHub, ele permite revisão de código, aprovação e merge controlado.
