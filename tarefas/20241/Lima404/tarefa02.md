# Tarefa 02 - Teste de Unidade

*Nome:* Gabriel Lima  
*Usuário GitHub:* Lima404  
*E-mail:* gabriel.lima.112@ufrn.edu.br

* [Backend](https://github.com/leonardobezrr/sig-estoque-back-end)
* [Frontend](https://github.com/leonardobezrr/sig-estoque-front-end)


## A. O objetivo dos testes de unidade é isolar cada parte do programa e provar que as partes individuais estão corretas. Eles são escritos e executados por desenvolvedores durante a fase de desenvolvimento para garantir que cada unidade de código funcione conforme o esperado. Um dos principais benefícios dos testes de unidade é que eles facilitam a detecção precoce de erros, reduzindo o custo e o esforço necessários para corrigir falhas no futuro.

## B.
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

## ## Mock Objects em Testes de Unidade

Mock Objects são objetos simulados que imitam o comportamento de objetos reais de forma controlada. Eles são amplamente utilizados em testes de unidade para substituir componentes externos ou dependências que são difíceis de configurar ou que tornariam os testes lentos e não determinísticos. Mocks permitem isolar a unidade de código que está sendo testada, garantindo que os testes sejam focados e confiáveis.

### Por que usar Mock Objects?

Isolamento: Permitem testar uma unidade de código isoladamente, sem depender de outras partes do sistema.

Controle: Oferecem controle total sobre o comportamento das dependências, permitindo simular diferentes cenários e condições.

Velocidade: Aceleram os testes, substituindo dependências que podem ser lentas, como chamadas de rede ou operações de I/O.

Determinismo: Garantem que os testes sejam consistentes e reproduzíveis, pois o comportamento dos mocks é previsível e controlado.
