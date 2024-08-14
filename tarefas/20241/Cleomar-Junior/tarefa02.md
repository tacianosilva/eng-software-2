# Tarefa 02 - Teste de Unidade

**Nome:** [Cleomar Souza dos Santos Junior]  
**Usuário GitHub:** [Cleomar-Junior]  
**E-mail:** [cl_jr@outlook.com]

## Link para o Repositório

[Repositório do Projeto SIGApoio](https://github.com/tgo-mas/SIGApoio)

## Testes de Software - Testes de Unidade

Os testes de unidade são uma prática essencial na engenharia de software, focada em verificar o comportamento correto de componentes isolados do sistema, como funções ou métodos. Eles são projetados para testar cada unidade de código de forma independente, assegurando que cada parte funcione como esperado, sem dependências de outras partes do sistema.

## Stack do Projeto

### Linguagem de Programação: Python

Python é uma linguagem de programação de alto nível, conhecida por sua versatilidade e ampla utilização em diversas áreas, como desenvolvimento web, ciência de dados e machine learning. Ela é apreciada por sua sintaxe simples e fácil de ler, além de contar com uma vasta comunidade e um grande número de bibliotecas disponíveis.

### Framework: Django

Django é um framework web poderoso e popular no ecossistema Python, usado para construir aplicações web complexas e escaláveis. Ele oferece uma variedade de funcionalidades, incluindo sistema de autenticação e autorização, gerenciamento de banco de dados, sistema de templates para criar interfaces web, ferramentas de roteamento de URLs e gestão de requisições HTTP, além de suporte para testes de unidade e integração contínua.

### Banco de Dados: PostgreSQL

PostgreSQL é um Sistema de Gerenciamento de Banco de Dados (SGBD) open-source, reconhecido por sua confiabilidade, escalabilidade e recursos avançados. Suas principais características incluem suporte a transações ACID para garantir a integridade dos dados, otimização de consultas para alto desempenho e replicação de dados para alta disponibilidade.

## Framework de teste

### Pytest

O Pytest é um framework de testes de software amplamente utilizado em Python, conhecido por sua flexibilidade, extensibilidade e capacidade de simplificar a criação e execução de testes unitários, de integração e funcionais.

[Documentação](https://docs.pytest.org/en/stable/contents.html)

## IDE: Visual Studio Code

O VSCode é um editor de código popular, como um "bloquinho de notas" super poderoso para programadores. Ele tem muitas ferramentas para facilitar a vida de quem escreve código, e uma delas é o debugger.

O debugger é como um detetive para o seu código. Quando seu programa não funciona como você esperava, o debugger te ajuda a encontrar o erro, linha por linha. É como colocar um ponto de parada no seu código e ver o que está acontecendo naquele momento.

## Tutorial do CRUD na Tecnologia escolhida: Django

[curso](https://www.udemy.com/course/introducao-ao-django-4-crud-completo-com-banco-de-dados/)
[artigo](https://www.datacamp.com/pt/tutorial/pytest-tutorial-a-hands-on-guide-to-unit-testing)

## Mock Objects

Mock objects são objetos simulados, criados para substituir componentes reais em testes unitários. Eles permitem isolar o código que está sendo testado, controlando as interações com dependências externas e garantindo resultados mais confiáveis e previsíveis.

## Crud implementado no projeto

### User Story US07 - Manter reservas de itens

O sistema deve manter um cadastro de reservas para cada item. Uma reserva pode ter os atributos responsável e item. Cada item possui um histórico de reservas, que poderá ser acessado pelos servidores e bolsistas.

### Teste de Integração

Os testes de integração verificam se diferentes componentes ou módulos de um sistema funcionam corretamente quando combinados. Eles garantem que as interações entre essas partes não introduzam erros.

**Diferença com Teste de Unidade:**
- **Testes de Unidade** focam em componentes isolados, enquanto **Testes de Integração** avaliam a interação entre componentes.