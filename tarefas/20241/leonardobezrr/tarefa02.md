# Tarefa 02 - Teste de Unidade

* [Leonardo Alves da Costa Bezerra](https://www.instagram.com/leobezrr_/)
* [leobezrr](https://github.com/leonardobezrr) - GitHub
* leonardobezerra05@gmail.com
* [Projeto front-end](https://github.com/leonardobezrr/sig-estoque-front-end) - Link 1/2 projeto
* [Projeto back-end](https://github.com/leonardobezrr/sig-estoque-back-end) - Link 2/2 projeto

## Testes de software

### Testes de unidade
Os testes de unidade são um tipo de teste de software focado na verificação da menor unidade testável de um aplicativo. Essas unidades geralmente são funções, métodos ou classes individuais em linguagens orientadas a objetos.

O principal objetivo deles, é validar que cada unidade de código funciona conforme o esperado isoladamente. Isso ajuda a garantir que cada parte do código esteja correta antes de integrá-la com outras partes.

Os testes de unidade são essenciais para a garantia da qualidade no desenvolvimento de software, focando na verificação de pequenas partes do código de forma isolada. Eles permitem uma detecção precoce de erros, facilitam a manutenção e refatoração do código e podem ser automatizados para melhorar a eficiência do processo de desenvolvimento. Ferramentas específicas para diferentes linguagens de programação ajudam a implementar esses testes de maneira eficaz.

## Linguagem de programação e stack 
### NodeJs
Node.js é um ambiente de execução JavaScript baseado no motor V8 do Google Chrome. Ele permite que os desenvolvedores executem código JavaScript no servidor, em vez de apenas no navegador.

### Fastify
Fastify é um framework web para Node.js que se destaca por ser extremamente rápido e eficiente. Ele é projetado para fornecer uma performance superior com uma interface de usuário simples.

### Vitest
Vitest é um framework de testes para aplicações JavaScript e TypeScript que é altamente inspirado no Jest, mas otimizado para funcionar com Vite, um build tool para desenvolvimento frontend rápido.


## IDE - ferramentas de debug 
* Debugging Multilinguagem: Suporta depuração para diversas linguagens de programação, incluindo JavaScript, TypeScript, Python, Java, C#, e mais, através de extensões específicas.

* Breakpoints: Permite a adição de breakpoints para pausar a execução do código em pontos específicos e inspecionar o estado da aplicação.

* Watch Variables: Monitora variáveis específicas e acompanha suas mudanças durante a execução do código.

* Call Stack: Visualiza a pilha de chamadas para entender a sequência de execução do código e rastrear a origem de erros.

* Step Through Code: Executa o código linha por linha (step over, step into, step out) para investigar o comportamento do programa em detalhes.

* Inline Values: Exibe os valores das variáveis diretamente no editor de código enquanto você está no modo de depuração, facilitando a análise.

* Debug Console: Permite a execução de expressões e comandos durante a depuração, fornecendo uma forma interativa de investigar problemas.

* Conditional Breakpoints: Define breakpoints condicionais que pausam a execução somente quando determinadas condições são atendidas.

* Logpoints: Insere mensagens de log no console de debug sem alterar o código-fonte, útil para rastreamento de execução sem interromper o fluxo.

## Tutorial CRUD

* [Rest API com Node e Fastify](https://www.youtube.com/watch?v=E6mZSJFozvM&ab_channel=WilliamFaria%7CDev)

Nesse tutorial nós podemos ver a construção de um CRUD completo para manipular informações sobre livros. Através de métodos como GET para listar todos os livros e GET por ID para acessar detalhes específicos. Além disso, aprendemos como usar POST para adicionar novos livros à sua coleção e PATCH para atualizar atributos essenciais, como indicar se um livro está sendo lido, é um favorito ou foi concluído.

## Mocks objects - Testes de unidades
Mock Objects são objetos simulados que imitam o comportamento de objetos reais de forma controlada. Eles são amplamente utilizados em testes de unidade para substituir componentes externos ou dependências que são difíceis de configurar ou que tornariam os testes lentos e não determinísticos. Mocks permitem isolar a unidade de código que está sendo testada, garantindo que os testes sejam focados e confiáveis.

### Por que usar Mock Objects?
* Isolamento: Permitem testar uma unidade de código isoladamente, sem depender de outras partes do sistema.

* Controle: Oferecem controle total sobre o comportamento das dependências, permitindo simular diferentes cenários e condições.

* Velocidade: Aceleram os testes, substituindo dependências que podem ser lentas, como chamadas de rede ou operações de I/O.

* Determinismo: Garantem que os testes sejam consistentes e reproduzíveis, pois o comportamento dos mocks é previsível e controlado.

## Testes de integração e teste unitário

* O teste de integração é um nível de teste de software que visa validar a interação entre diferentes módulos ou componentes de um sistema. Em outras palavras, ele verifica se os módulos individuais, quando combinados, funcionam corretamente juntos.

* O teste unitário é um nível de teste de software que se concentra na verificação de componentes individuais, geralmente funções ou métodos, para garantir que eles funcionem conforme o esperado de forma isolada.

Ambos os tipos de testes são essenciais para garantir a qualidade e a confiabilidade do software. Os testes unitários ajudam a identificar problemas em unidades específicas de código rapidamente, enquanto os testes de integração garantem que essas unidades funcionem bem juntas em um sistema maior.