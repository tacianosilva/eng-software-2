## Tarefa 02 - Teste de Unidade


**Nome:** Vitória Geovanna de Assis Pereira

**GitHub:** vitoria31032003

**E-mail:** vitoria.assis.067@ufrn.edu.br

## O que são testes de unidades
Os testes de unidade é um bloco de código que garantir uma precisão de outro bloco menor e isolando do código de aplicação,
normalmente representa uma função ou método. Ele foi projetado para verificar se o código está sendo execuntado conforme o esperado, de acordo com a lógica do desenvolvendor. Os testes de unidade são capaz de interagir no único bloco de código por meio de entradas e saídas.

## O que são testes de interação
Os testes de interação é uma etapa do desevolvimento de software em que os módulos ou componentes são combinados e testados em conjunto. Esse tipo de teste é feitos em fases, começando com os módulos mais complexos. Além disso, ele pode ser realizado de forma manual ou autoomatizada.

## O que é mock
O termo é utilizado para descrever um caso especial de objetos quando eles são reais para teste. Esses mocks objects são bastantes na comnunidade e métodologias ágeis, visto que, utilizando o xp que faz uso constante de testes através da técnica Test-Driven Development (TDD) que prega teste antes da implementação. Ainda assim, os mock objects possuem pouca na literatura de forma geral. Com isso, é possível simular alguns objetos no intuido de conseguir testar o código.

## IDE utilizada
Vscode.

## CRUD
Foi desevolvido um CRUD para usuário com as seguintes operações:

Criar,

Listar,

Atualizar,

Deletar.

## Testes de unidade
Os testes de unidade é um CRUD de usuários que utiliza o frameword Jest em TypeScript. Esses testes são essencias para confirmar se todas operações do CRUD de usuários estão funcionando de forma correta. Antes de cada teste, está sendo executada a função beforeEach() que vai ser responsável em certificar uma autonomia entre eles. Dessa forma, é permitido usam funções de adicionar usuário - addUsuario, listar usuário - getUsuarios, buscar usuário por ID - getUsuarioById e deletar usuário - deleteUsuario para validar cada operação do CRUD.

## Link dos testes:
https://github.com/vitoria31032003/eng-software-2/blob/task/1/tarefas/20261/vitoria31032003/user.test.ts

