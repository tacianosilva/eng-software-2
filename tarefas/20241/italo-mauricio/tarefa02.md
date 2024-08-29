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

