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

## IDE e suas ferramentas de debug

Visual Studio Code (VSCode) é um editor de código-fonte leve, gratuito e multiplataforma desenvolvido pela Microsoft. Ele é amplamente utilizado por desenvolvedores devido à sua extensibilidade, interface amigável e conjunto robusto de ferramentas para desenvolvimento de software.

Principais Funcionalidades do VSCode:

- Editor de Código:
Suporte para várias linguagens de programação com realce de sintaxe, autocompletar e snippets.
Extensões para suporte adicional a linguagens, frameworks e ferramentas de desenvolvimento.

- Integração com Controle de Versão:
Suporte embutido para Git, permitindo operações como commit, push, pull, e merge diretamente do editor.
Extensões para integração com outros sistemas de controle de versão.

- Terminal Integrado:
Terminal embutido que suporta comandos do sistema operacional e comandos específicos do projeto.

- Extensões:
Grande variedade de extensões disponíveis no Visual Studio Code Marketplace para adicionar funcionalidades e suporte a novas linguagens e ferramentas.

Ferramentas de Depuração no VSCode:

- Debugging Interface:
A interface de depuração do VSCode inclui uma barra lateral com controles para iniciar, pausar, parar e avançar passo a passo no código.
Exibe variáveis, pilha de chamadas, pontos de interrupção e console de depuração.

- Configuração de Depuração (launch.json):
Configurações de depuração são definidas em um arquivo launch.json, onde você especifica como iniciar a aplicação, argumentos, ambiente, etc.
Suporte para diferentes ambientes de depuração, como Node.js, Python, C++, e muitos outros.

- Pontos de Interrupção (Breakpoints):
Permite definir pontos no código onde a execução será interrompida para inspeção.
Suporte para breakpoints condicionais e de log.

- Inspeção de Variáveis e Pilha de Chamadas:
Durante a depuração, você pode inspecionar o valor das variáveis e explorar a pilha de chamadas para entender o estado da aplicação e o fluxo de execução.

- Execução Passo a Passo:
Funcionalidades para avançar passo a passo (Step Over), entrar em funções (Step Into) e sair de funções (Step Out).

## CRUD na tecnologia escolhida e que mostra a construção de Testes de Software

O tutorial inclui exemplos práticos para ilustrar o processo de escrita e execução de testes, com o objetivo de ajudar os desenvolvedores a melhorar a qualidade do código e detectar erros no início do ciclo de desenvolvimento.

https://www.youtube.com/watch?v=cEXt8hDyKQw

## Mocks Objects em Testes de Unidade

Mocks (ou "objetos simulados") são um conceito fundamental em testes de unidade, usados para isolar o comportamento de um componente específico do código. Funções de simulação ( mocks em inglês ) permitem que você teste os links entre códigos, apagando a implementação real de uma função, capturando chamadas para a função (e os parâmetros passados nessas chamadas), capturar instâncias do construtor de funções quando instanciado com new, e permitindo configuração em tempo de teste de valores de retorno.

## Mock objects

Em resumo, tive dificuldade. Mas o Django ajudou muito.
https://github.com/flaviogui/TechCell-Pro/blob/main/projeto/aparelhoApp/tests.py
