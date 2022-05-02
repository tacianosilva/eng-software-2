## Atividades por Iteração

Nesta página teremos de forma geral a descrição das atividades em cada Iteração de desenvolvimento do projeto. Na página [Plano de Iteração e Plano de Release](doc-iteracao.md) temos um exemplo de cronograma.

No processo de desenvolvimento que utilizamos da disciplina, inspirados no XP e YP, temos as seguintes fases:

* Planejamento
  * Criação dos documentos iniciais;
  * Iteração 1;
* Inicialização
  * Estruturação do projeto, planejamento de iterações, definições de arquitetura;s
  * Iteração 2;
* Desenvolvimento
  * atualização do planejamento, implementação, testes e implantação;
  * demais iterações sempre finalizando com um MVP.

### T01 - Iteração 1 - Inicialização e Planejamento

As atividades da **Iteração 1** são:

* **Criar repositório** do projeto no GitHub com `.gitignore` para a linguagem do projeto;
* **Definir tecnologia** do projeto e colocar no `README.md` do repositório;
* **Postar o link de tutoriais** com a tecnologia do seu projeto no fórum do sigaa e colocar no `README.md`. Postar no Discord os links dos tutoriais nos respectivos canais.
* Criação do **Documento de Visão** no formato Markdown, crie um diretório *"docs"* no repositório ([Modelo aqui!](../docs/doc-visao.md));
    * Deve conter **lista de requisitos funcionais, requisitos não funcionais, perfil de usuários e tabela de riscos**;
    * **Aloque entidades por membro** da equipe para fazer o levantamento dos requisitos funcionais (aloque duas ou três por membro da equipe);
* Criação do **Documento de Modelos** com o Modelo Conceitual usando *UML* ou o Modelo de Dados usando *MER*. Crie um **Dicionário de Dados**, no formato Markdown, coloque no diretório *"docs"* do repositório ([Modelo aqui!](../docs/doc-modelos.md));
* Criação de um **Plano de Release e Iteração** para o Projeto ([Modelo aqui!](../docs/doc-iteracao.md));
* Criar e colocar **Estrutura inicial do Projeto** no repositório;
* Criação de um **User Story (US)** base para o Projeto;
    * Deve ser feito o **Detalhamento do US00** (User Story base);
    * Deve ser feita a **Implementação do US00**;
    * Versão inicial do **Documento de User Stories** ([Modelo aqui!](../docs/doc-userstories.md));
* Coloque **links para a documentação** no README.md do repositório;

O gerente deve enviar nesta tarefa o link do repositório e o link dos dois documentos que devem estar no mesmo repositório.

Nesta iteração temos atividades diferentes para dois perfis **Gerentes** e **Analistas**:

#### Gerentes

* Criar Milestones para a Iteração 1;
* Definir e descrever as tarefas (issues) da Iteração 1 (milestone) e alocar as issues para cada membro da equipe;
* Definir que parte do *Documento de Visão* cada membro da equipe vai preparar;
* Definir que parte do *Documento de Modelos* cada membro da equipe vai preparar;
* Definir os **User Stories** do *Documento Lista de User Stories* cada membro da equipe vai detalhar, pelo menos um detalhamento por membro (incluindo o gerente);
  * Um User Store pode ser formado de um ou mais requisitos funcionais;
  * Definir qual será o User Story (Caso de Uso) *base* para implementação, chame de US01;
  * [Modelo de Lista de User Stories!](https://docs.google.com/document/d/1Ns2J9KTpLgNOpCZjXJXw_RSCSijTJhUx4zgFhYecEJg/edit#);
* Criar o repositório de software no GitHub;
* Fechar tarefas quando elas forem concluída;

#### Analistas

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Enviar commits da parte do Documento de Visão que preparou;
* Enviar commits da parte do Documento de Modelos que preparou;
* Enviar commits do User Story que detalhou;
  * Deve detalhar pelo menos um;
  * Detalhar ou Especificar um US é criar a descrição (estória do usuário) e os testes de aceitação);
* Avisar ao gerente quando concluir uma tarefa;

O gerente deve enviar nesta tarefa o link do repositório e o link dos dois documentos no SIGAA.

### T02 - Iteração 2 - Desenvolvimento

As atividades da **Iteração 2** são:

* Atualização do **Documento de Visão**, pode adicionar requisitos funcionais, se necessário;
* Atualização do **Documento User Stories** com a lista de User Stories, pode adicionar *User Stories* se necessário.
  * Deve ser detalhado pelo menos **mais dois User Stories**;
  * Deve ser implementado pelo menos **dois User Stories**;
  * Um User Story pode ser formado de um ou mais requisitos funcionais;
  * Um dos User Stories a ser implementado é o User Story *base* definido na Iteração anterior;
* Criar o **Documento da Arquitetura** apenas com o modelo (imagem) da *Arquitetura Geral do Sistema* e descreva cada parte desta arquitetura;
  * Ainda não precisa ser o Documento Arquitetural completo, mas a arquitetura geral do sistemas deste a tela até a base de dados;
  * [Modelo em Markdown](doc-arquitetura.md)
  * [Modelo do Google Docs](https://docs.google.com/document/d/1i80vPaInPi5lSpI7rk4QExnO86iEmrsHBfmYRy6RDSM/edit?usp=sharing);
* Criar **Documento do Tamanho Funcional** com *Análise de Pontos de Função - APF*;
  * [Modelo em Markdown](doc-apf.md)
  * [Modelo do Google Docs](https://docs.google.com/document/d/1s4bMbrpQt9RF6tymXvI0HHfQO14hMyL08UxmX1eH82s/edit?usp=sharing);
  * Faça a contagem indicativa do tamanho funcional do software;
  * Faça a contagem detalhada do tamanho funcional dos User Stories detalhados;
* Criar documento com o **Termo de Abertura do Projeto - TAP**, no google docs
  * O termo de abertura deve ser feito só no google drive.
  * Pesquise modelos deste documento para comparar;
  * [Modelo do Google Docs](https://docs.google.com/document/d/1xGwEppR2qmQ7H3EdevWBCWferzY3RuoZim_GEz6LZ90/edit?usp=sharing);

#### Gerentes It02

* Criar Milestones da Iteração 2;
* Definir e descrever as tarefas (issues) da Iteração 2 (milestones) e
alocar as issues para cada membro da equipe;
* Definir qual User Story cada membro da equipe vai especificar/detalhar;
  * Detalhar ou Especificar um US é criar a descrição (estória do usuário) e os testes de aceitação;
* Definir quem vai construir a Arquitetura Geral do Sistema que faz parte do **Documento Projeto Arquitetural** e o que cada membro da equipe vai preparar;
* O gerente deve fazer a contagem indicativa do tamanho funcional de Projeto;
* Definir quem vai fazer a contagem detalhada do tamanho funcional de cada User Story;
* Fechar tarefas se concluída;

#### Analistas It02

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Enviar commits do User Story que detalhou;
* Enviar commits da contagem do User Story que detalhou;
* Enviar commits das outras tarefas;
* Avisar ao gerente quando concluir uma tarefa;

#### Desenvolvedor It02

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Enviar commits da implementação do User Story;
* Enviar commits da implementação de **Testes de Unidade** do User Story que implementou;
* Avisar ao gerente quando concluir uma tarefa;

#### Testador It02

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Executar cada teste de aceitação do User Story, anotando o resultado em um Markdown dos Resultados dos Testes de Aceitação;
* Cadastrar issues de bugs caso os Testes de Aceitação não passem;
* Avisar ao gerente quando concluir uma tarefa;

### T03 - Iteração 3 - Desenvolvimento

A Iteração 3 começou dia 03/07/2020 e vai até 12/07/2020. As atividades dessa tarefa são:

* Atualização do **Documento de Visão**, pode adicionar requisitos funcionais, se necessário;
* Atualização do **Documento Lista de User Stories** com a lista de User Stories, pode adicionar *User Stories* se necessário. coloque no diretório "docs" do repositório;
  * Deve ser detalhado pelo menos **mais dois User Stories**;
  * Um User Store pode ser formado de um ou mais requisitos funcionais;
  * Implementar os dois User Stories descritos/detalhados na Iteração 02;
* Completar Documento do Projeto Arquitetural do Sistema e descreva cada parte da arquitetura;
  * [Modelo aqui!](https://docs.google.com/document/d/1i80vPaInPi5lSpI7rk4QExnO86iEmrsHBfmYRy6RDSM/edit?usp=sharing);
* Atualizar o Documento com a Contagem de Ponto de Função, coloque no diretório "docs" do repositório
  * [Modelo aqui!](https://docs.google.com/document/d/1s4bMbrpQt9RF6tymXvI0HHfQO14hMyL08UxmX1eH82s/edit?usp=sharing);
  * Faça a contagem detalhada do tamanho funcional do Projeto;
* Criar documento com o Resultados dos Testes de Sistema para o caso de uso **base**.
  * O relatório de Testes deve serguir esse [Modelo aqui!](https://docs.google.com/document/d/11hLKf0FcspQrDRfo3gRMXzuY1028cUeniv_Aob8DX_0/edit?usp=sharing)
* Cadastrar issues de bugs caso os Testes de Aceitação não passem;

#### Gerentes It03

* Criar Milestones da Iteração 3;
* Definir e descrever as tarefas (issues) da Iteração 3 (milestones) e
alocar as issues para cada membro da equipe;
* Atualizar Plano de Release e Plano de Iteração;
* Definir qual User Story cada membro da equipe vai descrever/detalhar;
  * Detalhar ou Descrever um US é criar a descrição (estória do usuário) e os testes de aceitação);
* Definir quem vai detalhar a Arquitetura do Sistema que faz parte do **Documento Projeto Arquitetural** e o que cada membro da equipe vai preparar;
* O gerente deve fazer a contagem indicativa do tamanho funcional de Projeto;
* Verificar a Contagem Detalhada do tamanho funcional do Sistema;
* Executar análise do SonarCloud.io;
* Verificar os problemas detectados pelo SonarCloud e criar tarefas no github;
* Verificar Cobertura dos Testes de Unidade para pelo menos 30%;
* Cadastrar issues de bugs caso detectados pelo Testador no relatório de testes;
* Cadastrar issues de correção de implementação caso detectados pelo Testador no relatório de testes;
* Fechar tarefas se concluída;

#### Analistas It03

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Enviar commits do User Story que detalhou;
* Enviar commits da contagem do User Story que detalhou;
  * Checar a contagem detalhada do Sistema para contemplar esse User Story;
* Enviar commits das outras tarefas;
* Avisar ao gerente quando concluir uma tarefa;

#### Desenvolvedor It03

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Enviar commits da implementação do User Story da Iteração;
* Enviar commits da implementação de **Testes de Unidade** do User Story que implementou;
* Verificar se o SonarCloud.io detectou problemas no seu código;
* Resolver os problemas detectados pelo SonarCloud que o gerente alocou para você;
* Deixar a Cobertura dos Testes de Unidade para pelo menos 30%;
* Avisar ao gerente quando concluir uma tarefa;

#### Testador It03

* Trabalhar nas tarefas e realizar pequenos commits marcando com a hashtag da issue;
* Executar cada teste de aceitação do User Story, anotando o resultado em um Markdown dos Resultados dos Testes de Aceitação;
  * O relatório de Testes deve serguir esse [Modelo](https://docs.google.com/document/d/11hLKf0FcspQrDRfo3gRMXzuY1028cUeniv_Aob8DX_0/edit?usp=sharing)
* Cadastrar issues de bugs caso os Testes de Aceitação não passem;
* Avisar ao getente os bugs e correções necessárias descritas relatório de testes;
* Avisar ao gerente quando concluir uma tarefa;
