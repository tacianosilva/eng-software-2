# Plano de Iteração

Este plano de iteração será usando como exemplo da disciplina Engenharia de Software II.

## Calendário da Iterações

Iteração | Data início | Data Final | Apresentação | Gerente
-------- | ----------- | ---------- | ------------ | -------
It1      | 19/06/2020  | 24/06/2020 | 26/06/2020   | Gerente 1
It2      | 24/06/2020  | 02/07/2020 | 03/07/2020   | Gerente 2
It3      | 02/07/2020  | 09/07/2020 | 10/07/2020   | Gerente 3
It4      | 09/07/2020  | 16/07/2020 | 17/07/2020   | Gerente 4
It5      | 16/07/2020  | 23/07/2020 | 24/07/2020   | Gerente 5

* Observação 1: Cada Iteração de ser cadastrada como Milestones no GitHub.
* Observação 2: Use este repositório como Modelo.

## Descrição das Tarefas em cada Iteração

### T01 - Iteração 1 - Planejamento

A Iteração 1 começou dia 19/06/2020 e vai até 24/06/2020. As atividades dessa tarefa são:

- Criar repositório do projeto no GitHub com .gitignore para a linguagem do projeto;
- Definir tecnologia do projeto e colocar no README.md do repositório;
- Postar o link de tutoriais com a tecnologia do seu projeto no fórum do sigaa e colocar no README.md;
- Criação do **Documento de Visão** no formato Markdown, crie um diretório "docs" no repositório;
  - Deve conter *lista de requisitos funcionais*, *requisitos não funcionais*, *perfil de usuários* e *tabela de riscos*;
- Criação do **Documento de Modelos** com o Modelo Conceitual, Modelo de Dados e o Dicionário de Dados, no formato Markdown, coloque no diretório "docs" do repositório;
- Coloque links para a documentação no README.md do repositório;
- Colocar Estrutura inicial do Projeto no repositório;

Nesta iteração temos atividades diferentes para dois perfis **Gerentes** e **Analistas**:

#### Gerentes

- Criar Milestones para a Iteração 1;
- Definir e descrever as tarefas (issues) da Iteração 1 (milestone) e alocar as issues para cada membro da equipe;
- Definir que parte do *Documento de Visão* cada membro da equipe vai preparar;
- Definir que parte do *Documento de Modelos* cada membro da equipe vai preparar;
- Definir os **User Stories** do *Documento Lista de User Stories* cada membro da equipe vai detalhar, pelo menos um detalhamento por membro (incluindo o gerente);
  - Um User Store pode ser formado de um ou mais requisitos funcionais;
  - Definir qual será o User Story (Caso de Uso) *base* para implementação, chame de US01;
  - [Modelo de Lista de User Stories!](https://docs.google.com/document/d/1Ns2J9KTpLgNOpCZjXJXw_RSCSijTJhUx4zgFhYecEJg/edit#);
- Criar o repositório de software no GitHub;
- Fechar tarefas quando elas forem concluída;

#### Analistas

- Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
- Enviar commits da parte do Documento de Visão que preparou;
- Enviar commits da parte do Documento de Modelos que preparou;
- Enviar commits do User Story que detalhou;
  - Deve detalhar pelo menos um;
  - Detalhar ou Especificar um US é criar a descrição (estória do usuário) e os testes de aceitação);
- Avisar ao gerente quando concluir uma tarefa;

O gerente deve enviar nesta tarefa o link do repositório e o link dos dois documentos no SIGAA.

### T02 - Iteração 2 - Inicialização

A Iteração 2 começou dia 24/06/2020 e vai até 02/07/2020. As atividades dessa tarefa são:

- Atualização do **Documento de Visão**, pode adicionar requisitos funcionais, se necessário;
- Atualização do **Documento Lista de User Stories** com a lista de User Stories, pode adicionar *User Stories* se necessário. coloque no diretório "docs" do repositório;
  - Deve ser detalhado pelo menos **mais dois User Stories**;
  - Um User Store pode ser formado de um ou mais requisitos funcionais;
  - Implementar o User Story *base*;
- Criar modelo (imagem) da Arquitetura Geral do Sistema e descreva cada parte da arquitetura
 (não é o documento Arquitetural completo);
  - [Modelo aqui!](https://docs.google.com/document/d/1i80vPaInPi5lSpI7rk4QExnO86iEmrsHBfmYRy6RDSM/edit?usp=sharing);
- Criar documento com a Contagem de Ponto de Função, coloque no diretório "docs" do repositório
  - [Modelo aqui!](https://docs.google.com/document/d/1s4bMbrpQt9RF6tymXvI0HHfQO14hMyL08UxmX1eH82s/edit?usp=sharing);
  - Faça a contagem indicativa do tamanho funcional do software;
  - Faça a contagem detalhada do tamanho funcional dos User Stories (um User Story por membro da equipe);
 - Criar documento com o Termo de Abertura do Projeto, no google docs
   - [Modelo Aqui!](https://docs.google.com/document/d/1xGwEppR2qmQ7H3EdevWBCWferzY3RuoZim_GEz6LZ90/edit?usp=sharing);

#### Gerentes:

- Criar Milestones da Iteração 2;
- Definir e descrever as tarefas (issues) da Iteração 2 (milestones) e
alocar as issues para cada membro da equipe;
- Definir qual User Story cada membro da equipe vai especificar/detalhar;
   - Detalhar ou Especificar um US é criar a descrição (estória do usuário) e os testes de aceitação);
- Definir quem vai construir a Arquitetura Geral do Sistema que faz parte do **Documento Projeto Arquitetural** e o que cada membro da equipe vai preparar;
- O gerente deve fazer a contagem indicativa do tamanho funcional de Projeto;
- Definir quem vai fazer a contagem detalhada do tamanho funcional de cada User Story;
- Fechar tarefas se concluída;

#### Analistas

- Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
- Enviar commits do User Story que detalhou;
- Enviar commits da contagem do User Story que detalhou;
- Enviar commits das outras tarefas;
- Avisar ao gerente quando concluir uma tarefa;

#### Desenvolvedor

- Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
- Enviar commits da implementação do User Story;
- Enviar commits da implementação de **Testes de Unidade** do User Story que implementou;
- Avisar ao gerente quando concluir uma tarefa;

#### Testador

- Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
- Executar cada teste de aceitação do User Story, anotando o resultado em um Markdown dos Resultados dos Testes de Aceitação;
- Cadastrar issues de bugs caso os Testes de Aceitação não passem;
- Avisar ao gerente quando concluir uma tarefa;
