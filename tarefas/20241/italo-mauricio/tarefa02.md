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
