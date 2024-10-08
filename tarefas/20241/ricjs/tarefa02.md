# Tarefa 02 - Teste de Unidade

## Ricardo Alencar, @ricsjs, ricardo.alencar.122@ufrn.edu.br

## Repositórios do projeto

* [Backend](https://github.com/leonardobezrr/sig-estoque-back-end)
* [Frontend](https://github.com/leonardobezrr/sig-estoque-front-end)

## Testes de Software

Testes de unidade são um tipo de teste de software que focam em verificar a funcionalidade de partes específicas de um programa, geralmente funções ou métodos individuais. Esses testes são realizados isoladamente do restante do sistema para garantir que cada unidade de código esteja funcionando conforme o esperado.

## NodeJs

Node.js é um ambiente de execução JavaScript baseado no motor V8 do Google Chrome. Ele permite que os desenvolvedores executem código JavaScript no servidor, em vez de apenas no navegador.

## Fastify

Fastify é um framework web para Node.js que se destaca por ser extremamente rápido e eficiente. Ele é projetado para fornecer uma performance superior com uma interface de usuário simples.

## Vitest

Vitest é um framework de testes para aplicações JavaScript e TypeScript que é altamente inspirado no Jest, mas otimizado para funcionar com Vite, um build tool para desenvolvimento frontend rápido.

## Ferramentas de debug da IDE

Debugging Multilinguagem: Suporta depuração para diversas linguagens de programação, incluindo JavaScript, TypeScript, Python, Java, C#, e mais, através de extensões específicas.

Breakpoints: Permite a adição de breakpoints para pausar a execução do código em pontos específicos e inspecionar o estado da aplicação.

Watch Variables: Monitora variáveis específicas e acompanha suas mudanças durante a execução do código.

Call Stack: Visualiza a pilha de chamadas para entender a sequência de execução do código e rastrear a origem de erros.

Step Through Code: Executa o código linha por linha (step over, step into, step out) para investigar o comportamento do programa em detalhes.

Inline Values: Exibe os valores das variáveis diretamente no editor de código enquanto você está no modo de depuração, facilitando a análise.

Debug Console: Permite a execução de expressões e comandos durante a depuração, fornecendo uma forma interativa de investigar problemas.

Conditional Breakpoints: Define breakpoints condicionais que pausam a execução somente quando determinadas condições são atendidas.

Logpoints: Insere mensagens de log no console de debug sem alterar o código-fonte, útil para rastreamento de execução sem interromper o fluxo.

## Link de CRUD com Node + Fastify

* [Rest API com Node e Fastify](https://www.youtube.com/watch?v=E6mZSJFozvM)

## Mock Objects em Testes de Unidade

Mock Objects são objetos simulados que imitam o comportamento de objetos reais de forma controlada. Eles são amplamente utilizados em testes de unidade para substituir componentes externos ou dependências que são difíceis de configurar ou que tornariam os testes lentos e não determinísticos. Mocks permitem isolar a unidade de código que está sendo testada, garantindo que os testes sejam focados e confiáveis.

### Por que usar Mock Objects?

Isolamento: Permitem testar uma unidade de código isoladamente, sem depender de outras partes do sistema.

Controle: Oferecem controle total sobre o comportamento das dependências, permitindo simular diferentes cenários e condições.

Velocidade: Aceleram os testes, substituindo dependências que podem ser lentas, como chamadas de rede ou operações de I/O.

Determinismo: Garantem que os testes sejam consistentes e reproduzíveis, pois o comportamento dos mocks é previsível e controlado.

## CRUD de Manager

Permite criar, editar, buscar e excluir usuários que são do tipo Manager. Os Manager são do tipo User.

## Testes de autenticação de usuário

* [Link para o arquivo de testes](https://github.com/leonardobezrr/sig-estoque-back-end/blob/dev/src/services/user/authenticate-user.test.ts)

Nesse teste de autenticação de usuário, podemos ver três testes de unidade, um deles é um teste que cria um usuário e em seguida faz a autenticação. Além disso, os dados estão mockados em um arquivo exclusivo para testes:

* [Link para o arquivo de mock (in-memory)](https://github.com/leonardobezrr/sig-estoque-back-end/blob/dev/src/repositories/in-memory/in-memory-users-repository.ts)

Após a implementação dos testes, percebe-se a importância de uma boa cobertura de testes em um sistema. Foi uma experiência muito boa e contribuiu bastante pro meu aprendizado.

## Testes de Integração

Testes de integração são um tipo de teste de software que verificam a interação entre diferentes módulos ou componentes de um sistema para garantir que eles funcionem corretamente em conjunto. Eles são realizados após os testes unitários e antes dos testes de sistema. O objetivo é identificar problemas que podem surgir quando componentes integrados interagem entre si.

## Testes de Integração vs Testes de unidade

### Testes unitários

Foco: Verificam a funcionalidade de unidades individuais de código, como funções ou métodos, em isolamento.

Escopo: Limitado a um único componente.

Objetivo: Garantir que cada unidade de código funcione conforme o esperado.

Velocidade: Rápidos de executar, pois não dependem de recursos externos.

Isolamento: Utilizam mocks e stubs para isolar o componente sendo testado.

### Testes de integração

Foco: Verificam a interação entre múltiplos componentes ou módulos.

Escopo: Inclui vários componentes e suas interações.

Objetivo: Garantir que componentes integrados funcionem corretamente juntos.

Velocidade: Podem ser mais lentos, pois podem envolver recursos reais e configurações mais complexas.

Realismo: Utilizam os componentes reais sempre que possível para testar interações genuínas.

## Uso no projeto

No projeto, por enquanto, não temos testes de integração implementados, somente testes de unidade.