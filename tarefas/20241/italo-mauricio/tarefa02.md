# Tarefa 02 - Teste de Unidade

**Nome:** Italo Mauricio de Medeiros Santos 

**Usuário GitHub:** italo-mauricio

**E-mail:** italo.santos.059@ufrn.edu.br

**Link para o Repositório do Projeto:** [Repositório](https://github.com/italo-mauricio/eng-software-2)


# Testes de Unidade

**Definição:** Testes de unidade são uma técnica de teste de software que se concentra na verificação de pequenas unidades ou componentes individuais do código, como funções ou métodos, de forma isolada. O objetivo é garantir que cada unidade funcione conforme o esperado de forma independente, antes de integrá-la com outras partes do sistema.

**Importância:**
1. **Isolamento:** Testes de unidade são realizados de forma isolada, sem dependências externas. Isso ajuda a identificar e corrigir bugs em partes específicas do código sem a interferência de outras partes do sistema.
2. **Feedback Rápido:** Eles fornecem feedback rápido sobre a qualidade do código, permitindo aos desenvolvedores identificar e resolver problemas rapidamente durante o desenvolvimento.
3. **Documentação:** Servem como uma forma de documentação do código, mostrando como uma função ou método deve se comportar em diferentes cenários.
4. **Facilidade de Refatoração:** Com uma boa cobertura de testes de unidade, os desenvolvedores podem refatorar e melhorar o código com confiança, sabendo que qualquer quebra de funcionalidade será detectada rapidamente.

**Práticas Comuns:**
- **Cobertura de Código:** É recomendável que o código tenha uma alta cobertura de testes, ou seja, a porcentagem do código executada durante os testes. Contudo, a cobertura de 100% nem sempre é prática ou necessária.
- **Automação:** Testes de unidade são frequentemente automatizados e integrados no pipeline de integração contínua (CI) para garantir que sejam executados regularmente durante o desenvolvimento.
- **Testes em TDD:** Testes de unidade são uma parte fundamental da metodologia de Desenvolvimento Orientado por Testes (TDD), onde os testes são escritos antes do código que implementa a funcionalidade.

**Ferramentas Comuns:**
- **JUnit** para Java
- **NUnit** para .NET
- **pytest** para Python
- **JUnit** para JavaScript

Em resumo, os testes de unidade são essenciais para assegurar a qualidade e a estabilidade do software, permitindo uma detecção precoce de problemas e facilitando a manutenção e evolução contínua do código.



# Linguagens e Stack para Desenvolvimento do Projeto

Para o desenvolvimento do projeto da disciplina, utilizamos duas tecnologias principais: Django e Vue.js. Cada uma desempenha um papel específico no desenvolvimento de software, abrangendo tanto o backend quanto o frontend.

## Django

**Descrição:** Django é um framework de desenvolvimento web de alto nível para a linguagem de programação Python. É projetado para facilitar a criação de aplicações web robustas e escaláveis, com uma ênfase na simplicidade e na rapidez de desenvolvimento.

**Principais Características:**
- **Modelo-Visão-Controle (MVC):** Django segue o padrão MVC, facilitando a separação de preocupações e a organização do código.
- **Administração Automática:** Oferece uma interface administrativa automática e personalizada para gerenciar o conteúdo da aplicação.
- **ORM (Object-Relational Mapping):** Permite a manipulação do banco de dados utilizando objetos Python, simplificando a interação com a base de dados.
- **Segurança:** Inclui recursos integrados para proteger contra vulnerabilidades comuns, como SQL Injection e Cross-Site Scripting (XSS).
- **Escalabilidade:** Adequado para aplicações de todos os tamanhos, desde protótipos rápidos até sistemas complexos e de grande escala.

**Uso no Projeto:** Django é utilizado para o desenvolvimento do backend, gerenciando a lógica de negócios, a interação com o banco de dados e a criação de APIs para a comunicação com o frontend.

## Vue.js

**Descrição:** Vue.js é um framework progressivo para a construção de interfaces de usuário e aplicações de página única (SPA). É conhecido por sua simplicidade, flexibilidade e integração fácil com outras bibliotecas ou projetos existentes.

**Principais Características:**
- **Reatividade:** Oferece um sistema reativo para atualizar a interface do usuário automaticamente em resposta às mudanças de dados.
- **Componentização:** Permite a criação de componentes reutilizáveis e modularizados, facilitando a manutenção e a escalabilidade do código.
- **Diretivas e Binding:** Utiliza diretivas para vincular o DOM e o estado do aplicativo de maneira eficiente.
- **Facilidade de Integração:** Pode ser facilmente integrado com outras bibliotecas ou frameworks, e pode ser usado para adicionar interatividade a projetos existentes.
- **Desempenho:** Oferece um bom desempenho e uma curva de aprendizado suave, ideal para desenvolvedores que buscam uma solução moderna e eficiente.

**Uso no Projeto:** Vue.js é utilizado para o desenvolvimento do frontend, criando uma interface interativa e responsiva para os usuários, e consumindo as APIs fornecidas pelo backend em Django.

## Stack de Desenvolvimento

A combinação de Django e Vue.js permite uma arquitetura moderna e eficaz, aproveitando o melhor de cada tecnologia:
- **Backend (Django):** Gerencia a lógica do servidor, manipulação de dados e segurança.
- **Frontend (Vue.js):** Cria uma interface de usuário dinâmica e responsiva, proporcionando uma experiência de usuário rica e interativa.

Essa stack fornece uma base sólida para o desenvolvimento de aplicações web complexas e de alta performance, unindo a robustez e a escalabilidade do Django com a flexibilidade e a simplicidade do Vue.js.


# Pytest

**Descrição:** Pytest é um framework de testes de unidade para Python que é muito popular devido à sua simplicidade e flexibilidade. Ele é projetado para permitir a escrita de testes de maneira fácil e intuitiva, suportando uma ampla gama de casos de teste, desde os mais simples até os mais complexos.

**Principais Características:**
- **Simples e Intuitivo:** Pytest permite escrever testes de forma simples, usando assertivas padrão do Python. Não é necessário utilizar classes ou métodos especiais para escrever testes.
- **Fixtures:** Oferece um sistema poderoso de fixtures para configurar e fornecer dados ou estados necessários para os testes. Isso facilita a reutilização de código de configuração entre diferentes testes.
- **Parâmetros de Teste:** Permite a execução de um teste com múltiplos conjuntos de dados através de parâmetros, facilitando a cobertura de diferentes cenários com menos código.
- **Plugins:** Suporta uma ampla variedade de plugins que podem adicionar funcionalidades extras, como relatórios de cobertura de código e integração com ferramentas de CI/CD.
- **Integração com Django:** Possui suporte integrado para testes com Django, permitindo testar projetos Django com facilidade.

**Links Úteis:**
- **Documentação Oficial do Pytest:** [Pytest Documentation](https://docs.pytest.org/en/stable/)
- **Pytest no PyPI (Python Package Index):** [Pytest on PyPI](https://pypi.org/project/pytest/)

Pytest é uma escolha excelente para quem deseja uma ferramenta de teste poderosa e flexível para Python, tornando o processo de desenvolvimento mais eficiente e confiável através de testes bem estruturados e fáceis de manter.


# Visual Studio Code (VS Code)

**Descrição:** Visual Studio Code (VS Code) é uma IDE (Ambiente de Desenvolvimento Integrado) leve e poderosa, desenvolvida pela Microsoft. É amplamente utilizada por desenvolvedores devido à sua flexibilidade, extensibilidade e suporte para uma ampla variedade de linguagens e ferramentas de desenvolvimento.

## Ferramentas de Depuração Integradas

VS Code oferece uma série de ferramentas de depuração integradas que ajudam a identificar e corrigir problemas no código de maneira eficiente:

- **Pontos de Interrupção (Breakpoints):** Permitem pausar a execução do código em pontos específicos para inspecionar o estado das variáveis e a execução do programa. É possível adicionar, remover e gerenciar pontos de interrupção diretamente no editor de código.

- **Janela de Depuração:** Fornece uma interface para controlar a execução do código, como iniciar, pausar, continuar e parar a execução. Também mostra informações detalhadas sobre o processo de depuração, como variáveis, chamadas de pilha e pontos de interrupção ativos.

- **Inspeção de Variáveis:** Permite visualizar e modificar o valor das variáveis durante a depuração. Você pode inspecionar variáveis locais e globais, além de ver os valores em tempo real enquanto o código está pausado.

- **Watch Expressions:** Permite adicionar expressões personalizadas para monitorar durante a depuração. Você pode acompanhar o valor de expressões específicas e ver como elas mudam ao longo da execução do código.

- **Console de Depuração:** Oferece um console interativo para executar comandos e ver a saída do código durante a depuração. Isso é útil para avaliar a execução em tempo real e testar pequenas alterações.

- **Step Over, Step Into, e Step Out:** São ferramentas para controlar a execução do código em nível de linha. "Step Over" executa a linha atual e avança, "Step Into" entra em funções chamadas na linha atual, e "Step Out" sai da função atual e retorna ao nível anterior.

- **Depuração de Código Remoto:** VS Code suporta a depuração de código que está sendo executado em um servidor remoto ou em um contêiner Docker. Isso é feito através de extensões e configurações específicas para ambientes remotos.

- **Extensões de Depuração:** O VS Code possui uma vasta gama de extensões disponíveis para suporte a diferentes linguagens e frameworks. Essas extensões adicionam funcionalidades específicas de depuração e ajudam a configurar o ambiente de depuração para várias tecnologias.

**Links Úteis:**
- **Documentação Oficial do VS Code:** [Visual Studio Code Documentation](https://code.visualstudio.com/docs)
- **Configuração de Depuração no VS Code:** [Debugging in Visual Studio Code](https://code.visualstudio.com/docs/editor/debugging)

VS Code é uma ferramenta altamente eficiente para o desenvolvimento e depuração de software, oferecendo um ambiente de desenvolvimento completo e extensível para atender às necessidades dos desenvolvedores.


# CRUD e Testes em Django

**Links Do tutorial:**
- **Python DJango Crud:** [video](https://www.youtube.com/watch?v=REhBTwubGzo)

**Descrição:** Neste tutorial o apresentar está criando testes TDD (Test Driven Development) em django, mostrando os testes de todas as etapas do CRUD, desde a criação, listagem, update e delete.


# Mock Objects em Testes de Unidade

**Definição:** Mock objects (ou simplesmente mocks) são objetos simulados usados em testes de unidade para imitar o comportamento de dependências externas do código que está sendo testado. Eles permitem que você controle e verifique o comportamento das dependências sem precisar usar implementações reais, o que facilita a criação de testes mais isolados e confiáveis.

## Principais Características

- **Isolamento:** Mocks ajudam a isolar a unidade de código sendo testada, garantindo que os testes não sejam afetados por outras partes do sistema, como bancos de dados, APIs externas ou serviços de terceiros.
- **Controle:** Permitem definir com precisão como as dependências devem se comportar durante o teste, fornecendo respostas específicas a chamadas de métodos e permitindo que você simule condições de erro ou comportamentos específicos.
- **Verificação:** Facilitam a verificação se o código em teste interage com as dependências da maneira esperada. É possível verificar se métodos foram chamados, quantas vezes foram chamados e com quais parâmetros.

## Uso Comum

- **Simulação de Dependências:** Usado para simular objetos complexos ou externos que a unidade de código precisa interagir, como serviços web, bancos de dados ou outros módulos.
- **Testes de Integração:** Ajuda a testar a integração da unidade de código com suas dependências de maneira controlada.
- **Verificação de Interações:** Permite verificar se o código faz chamadas esperadas para as dependências, ajudando a garantir que a lógica de interação está correta.

## Ferramentas Comuns

- **Python:** `unittest.mock`, `pytest-mock`
- **Java:** Mockito
- **JavaScript:** Sinon.js
- **C#:** Moq

## Exemplos de Uso

- **Simulação de Métodos:** Criar um mock de um serviço externo que retorna uma resposta simulada quando um método específico é chamado.
- **Verificação de Chamadas:** Verificar se um método foi chamado com os parâmetros corretos e quantas vezes ele foi chamado durante a execução dos testes.

**Links Úteis:**
- **Documentação do `unittest.mock` (Python):** [unittest.mock Documentation](https://docs.python.org/3/library/unittest.mock.html)
- **Mockito (Java):** [Mockito Documentation](https://site.mockito.org/)
- **Sinon.js (JavaScript):** [Sinon.js Documentation](https://sinonjs.org/)

Mocks são uma ferramenta poderosa em testes de unidade, proporcionando uma maneira de testar componentes de forma isolada e garantir que as interações com suas dependências estejam corretas.


# User Story: Manter Eventos

No meu projeto, implementei o User Storie de Manter Eventos, logo abaixo descrevo todas as operações utilizadas.

## Operações do CRUD

### 1. Inserir Evento

**Descrição:** Permite ao usuário criar um novo evento no sistema.

- **Ação:** O usuário preenche um formulário com detalhes do evento, incluindo nome, data, descrição, localização e tipo de evento.
- **Campos Necessários:**
  - Nome do Evento
  - Data de Início
  - Data de Término
  - Descrição
  - Localização
  - Tipo de Evento (ex: conferência, workshop, seminário)
- **Resultado Esperado:** O evento é criado e adicionado à lista de eventos no sistema. O usuário recebe uma confirmação de que o evento foi criado com sucesso.

### 2. Atualizar Evento

**Descrição:** Permite ao usuário modificar as informações de um evento existente.

- **Ação:** O usuário acessa a página de detalhes do evento, edita as informações desejadas e salva as alterações.
- **Campos Editáveis:**
  - Nome do Evento
  - Data de Início
  - Data de Término
  - Descrição
  - Localização
  - Tipo de Evento
- **Resultado Esperado:** As informações do evento são atualizadas no sistema e refletidas na lista de eventos. O usuário recebe uma confirmação de que as alterações foram salvas com sucesso.

### 3. Deletar Evento

**Descrição:** Permite ao usuário remover um evento do sistema.

- **Ação:** O usuário seleciona o evento a ser deletado e confirma a exclusão.
- **Confirmação:** O sistema solicita uma confirmação para evitar exclusões acidentais.
- **Resultado Esperado:** O evento é removido do sistema e não aparece mais na lista de eventos. O usuário recebe uma confirmação de que o evento foi excluído com sucesso.

### 4. Consultar Evento

**Descrição:** Permite ao usuário buscar e visualizar detalhes dos eventos existentes.

- **Ação:** O usuário acessa a lista de eventos ou realiza uma busca usando filtros como nome, data, localização ou tipo de evento.
- **Campos de Pesquisa:**
  - Nome do Evento
  - Data de Início
  - Data de Término
  - Localização
  - Tipo de Evento
- **Resultado Esperado:** O sistema exibe a lista de eventos que correspondem aos critérios de pesquisa. O usuário pode visualizar detalhes de cada evento e acessar informações adicionais.

### 5. Listar Eventos

**Descrição:** Permite ao usuário visualizar todos os eventos cadastrados no sistema.

- **Ação:** O usuário acessa uma página que mostra uma lista de todos os eventos, com informações básicas como nome, data e localização.
- **Resultado Esperado:** A lista de eventos é exibida de forma organizada, permitindo ao usuário navegar pelos eventos e acessar detalhes específicos.

## Requisitos Técnicos

- **Backend:** Implementar endpoints para cada operação CRUD (criação, atualização, exclusão e consulta) usando a tecnologia escolhida (por exemplo, Django).
- **Frontend:** Criar formulários e páginas para interação com o usuário, permitindo o gerenciamento dos eventos.
- **Validações:** Garantir que as entradas do usuário sejam validadas corretamente para evitar erros e inconsistências.
- **Testes:** Implementar testes de unidade e integração para verificar o correto funcionamento das operações CRUD.

Este User Story e as operações CRUD descritas garantem que o sistema de gerenciamento de eventos permita uma administração eficiente e intuitiva dos eventos, atendendo às necessidades dos usuários.


# Experiência com o Teste de Unidade Utilizado

**Links Do Teste de Frontend:**
- **Teste de Tela Vue JS :** [github](https://github.com/tallysdev/eventSync/blob/main/frontend/eventsync_front/src/tests/CreateEvent.test.ts)

- **Minha experiência:** A minha experiência com testes envolvendo Vue Js para o front foi bem tranquila, a ferramente de testes do Vue é muito prática ela se chama "vitest" e dá todo o suporte necessário para fazer todos os testes necessários.