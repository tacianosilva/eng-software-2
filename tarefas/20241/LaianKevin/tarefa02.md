# Tarefa 02 - Teste de Unidade
# Projeto: TechCell-Pro

## informações pessoais
- Nome: Laian Kevin Silva do Rosário
- Usuário do Github: [LaianKevin](https://github.com/LaianKevin)
- Email: <laiankevin25@gmail.com>
- Repositório: [Link do Repositório] (https://github.com/flaviogui/TechCell-Pro)


## Resumo dos testes de Software com foco em Testes de Unidade

Os testes de unidade são um tipo de teste de software que verifica a menor parte testável de um aplicativo, que normalmente é uma função, método ou classe individual. O objetivo é validar que cada unidade do software funcione conforme o esperado isoladamente.

## Linguagem de Programação e Stack para o Projeto

Para o desenvolvimento do projeto da disciplina, utilizaremos a linguagem de programação Python. A stack escolhida inclui:

Framework Web: Django
Banco de Dados: SQLite (por padrão com Django, mas pode ser substituído por PostgreSQL, MySQL, etc.)
Servidor de Desenvolvimento: Django Development Server
Ferramentas de Teste: pytest, unittest

## Framework de testes de unidade

O Django fornece um framework de testes robusto e integrado para facilitar a criação, execução e manutenção de testes em aplicações web. Ele é baseado no módulo unittest do Python e oferece funcionalidades adicionais específicas para o desenvolvimento web.

Principais Funcionalidades:

- TestCase: 
O 'django.test.TestCase' é uma subclasse de 'unittest.TestCase' que prepara o ambiente de teste, incluindo a criação de um banco de dados temporário.
Testes que herdam de 'TestCase' garantem que cada teste é executado com um banco de dados limpo.
Client:

- Client:
O django.test.Client simula um navegador web para enviar requisições HTTP e testar as respostas.
Facilita o teste de visualizações (views) e URLs.

- Fixtures:
Permitem a configuração inicial de dados para testes.
Pode-se carregar dados iniciais a partir de arquivos JSON, XML ou YAML.

- Testes de Modelos:
Verificam se os modelos funcionam como esperado, incluindo métodos personalizados e validações.

 - Testes de Formulários:
Asseguram que os formulários validam dados corretamente e que os dados válidos são processados corretamente.

- Testes de Visualizações:
Testam se as visualizações retornam as respostas corretas e se a lógica de negócios está implementada corretamente.

- Testes de Templates:
Verificam se os templates renderizam o conteúdo esperado.

Links Úteis:
https://docs.djangoproject.com/en/5.0/internals/contributing/writing-code/unit-tests/
https://docs.djangoproject.com/en/5.0/topics/testing/
https://docs.djangoproject.com/en/5.0/topics/testing/overview/#testing-tools
