# Tarefa 02 - Teste de Unidade

Gedson Fernandes de Araújo

Gedsonfa

gedsonfda@gmail.com

# Testes de Software

Os testes de software são uma parte fundamental do ciclo de desenvolvimento de software, garantindo que o software funcione conforme o esperado e que os erros sejam identificados e corrigidos antes do lançamento. Dentro do universo de testes de software, os testes de unidade ocupam um lugar de destaque.
Testes de Unidade

Os testes de unidade são um tipo de teste de software que foca na menor parte testável de uma aplicação, geralmente uma função, método ou classe. O objetivo é verificar se cada unidade de código funciona corretamente isoladamente. Aqui estão alguns pontos-chave sobre testes de unidade:

## Objetivos

* Verificação de Funcionamento: Assegurar que cada unidade individual de código funcione conforme o esperado.
* Detecção Precoce de Erros: Identificar e corrigir erros no início do ciclo de desenvolvimento, o que reduz o custo de correção.
* Documentação: Servir como documentação viva do comportamento esperado do código.
* Facilitar Mudanças: Ajudar a garantir que novas mudanças ou adições ao código não quebrem funcionalidades existentes (refatoração segura).

## Características

* Isolamento: Cada unidade é testada isoladamente, sem dependências externas como banco de dados, serviços externos ou outras unidades de código.
* Automatização: Os testes de unidade são geralmente automatizados e integrados ao pipeline de desenvolvimento contínuo (CI/CD).
* Repetibilidade: Devem ser repetíveis e proporcionar resultados consistentes sempre que executados.
* Rapidez: Devido ao seu escopo reduzido, os testes de unidade são rápidos de executar.

## Ferramentas Comuns

* JUnit: Usado para testar unidades de código Java.
* NUnit: Ferramenta para testes de unidade em C#.
* pytest: Popular no ecossistema Python.
* Mocha: Utilizado para testes de unidade em JavaScript (Node.js).
* xUnit: Família de ferramentas de teste de unidade para várias linguagens de programação.

## Estrutura de um Teste de Unidade

Um teste de unidade típico segue a estrutura Arrange, Act, Assert (AAA):

* Arrange: Configurar o cenário de teste e inicializar os objetos necessários.
* Act: Executar a unidade de código que está sendo testada.
* Assert: Verificar se o resultado obtido corresponde ao esperado.

# Linguagem e Stack

Linguagem de Programação: JavaScript (com TypeScript)

JavaScript é a linguagem de programação principal para desenvolvimento web, permitindo a criação de aplicações tanto no lado do cliente (frontend) quanto no lado do servidor (backend). TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional, tornando o código mais robusto e fácil de manter.
Stack de Desenvolvimento

1. Node.js

Node.js é um ambiente de execução JavaScript no lado do servidor. Ele permite que você use JavaScript para escrever código do lado do servidor, tornando o desenvolvimento full-stack mais coeso.

* Vantagens: Assíncrono, escalável, alta performance.
* Uso: Construção de APIs, serviços backend.

2. TypeScript

TypeScript adiciona tipos estáticos a JavaScript, ajudando a evitar erros comuns e melhorar a manutenção do código.

* Vantagens: Tipagem estática, melhor suporte para IDEs, facilita refatorações.
* Uso: Em todo o projeto, tanto no backend (Node.js) quanto no frontend (React).

3. React

React é uma biblioteca JavaScript para construção de interfaces de usuário. Ela facilita a criação de componentes reutilizáveis e a gestão do estado da aplicação.

* Vantagens: Componentização, performance, ecossistema robusto.
    Uso: Desenvolvimento de interfaces de usuário dinâmicas e interativas.

4. Next.js

Next.js é um framework React que permite a renderização do lado do servidor (SSR) e a geração estática de páginas.

    Vantagens: SSR, geração estática, roteamento automático, otimização de performance.
    Uso: Construção de aplicações web rápidas e otimizadas para SEO.

5. Prisma

Prisma é um ORM (Object-Relational Mapping) moderno que facilita a interação com bancos de dados.

    Vantagens: Tipagem automática, migrações de banco de dados, suporte a vários bancos de dados.
* Uso: Interação com bancos de dados (PostgreSQL, MySQL, SQLite, etc.) no backend.

6. Docker

Docker é uma plataforma de containerização que permite criar, implantar e executar aplicações em containers.

* Vantagens: Consistência entre ambientes, isolamento de dependências, facilidade de escalabilidade.
* Uso: Containerização da aplicação para desenvolvimento, teste e produção.

7. Axios

Axios é uma biblioteca para fazer requisições HTTP.

* Vantagens: Simplicidade, suporte a promessas, interceptadores de requisições e respostas.
* Uso: Comunicação com APIs externas, tanto no frontend quanto no backend.

8. Google APIs

Google APIs são serviços fornecidos pelo Google que podem ser integrados às aplicações.

* Vantagens: Funcionalidades avançadas (mapas, autenticação, análises), confiabilidade.
* Uso: Integração com serviços do Google (Google Maps, Google OAuth, etc.).

9. Date-fns

Date-fns é uma biblioteca para manipulação de datas em JavaScript.

* Vantagens: Legibilidade, modularidade, performance.
* Uso: Manipulação e formatação de datas em todo o projeto.

10. Zod

Zod é uma biblioteca para validação e parsing de esquemas de dados.

* Vantagens: Simplicidade, integração com TypeScript, validação robusta.
* Uso: Validação de dados no backend e frontend.

## Arquitetura do Projeto
Backend (Node.js + TypeScript + Prisma + Docker)

* Setup do servidor: Utilização do Node.js com TypeScript para configurar o servidor.
* ORM: Utilização do Prisma para interagir com o banco de dados.
* Containerização: Utilização do Docker para garantir que o ambiente de desenvolvimento e produção sejam consistentes.
    APIs: Implementação de endpoints RESTful ou GraphQL, usando frameworks como Express.js ou Apollo Server.

## Frontend (React + Next.js + Axios + Date-fns + Zod)

* Interface de Usuário: Criação de componentes reutilizáveis com React.
* SSR e Geração Estática: Utilização do Next.js para melhorar a performance e SEO.
* Requisições HTTP: Utilização do Axios para comunicação com o backend.
* Validação de Formulários: Utilização do Zod para validação de dados.
* Manipulação de Datas: Utilização do Date-fns para manipulação de datas.

## Integração com Google APIs

* Autenticação: Implementação de autenticação usando Google OAuth.
* Outros Serviços: Integração de outros serviços Google conforme necessário (e.g., Google Maps).

## Fluxo de Desenvolvimento

* Configuração Inicial: Setup do ambiente de desenvolvimento com Docker, incluindo containers para Node.js e banco de dados.
* Desenvolvimento de APIs: Criação dos endpoints backend usando Node.js e Prisma.
* Desenvolvimento do Frontend: Criação dos componentes React e páginas Next.js.
* Integração Contínua: Configuração de pipelines CI/CD para testes automatizados e deploys contínuos.
* Teste e Validação: Utilização de frameworks de teste como Jest (para frontend e backend) e ferramentas de validação como Zod.

## Conclusão

Esta stack oferece uma abordagem moderna e robusta para o desenvolvimento full-stack de aplicações web, aproveitando as vantagens de cada ferramenta para criar um ambiente de desenvolvimento eficiente, escalável e fácil de manter.

# Framework

Vitest

## Resumo

Vitest é uma biblioteca de teste unitário projetada para o ecossistema Vite. É conhecida por sua rapidez e simplicidade de uso, fornecendo uma experiência de desenvolvimento ágil e eficiente. Vitest é frequentemente comparado ao Jest devido à sua interface semelhante, mas oferece uma integração mais estreita com projetos Vite, aproveitando seu sistema de compilação para fornecer tempos de execução mais rápidos e uma experiência de desenvolvedor mais integrada.
Principais Recursos do Vitest

* Velocidade e Desempenho: Por ser construído em cima do Vite, Vitest herda seu desempenho rápido e otimizações, oferecendo tempos de inicialização e execução de testes muito rápidos.

* Integração com o Vite: Vitest funciona perfeitamente com o Vite, permitindo que os desenvolvedores utilizem as mesmas configurações e plugins do Vite em seus testes, o que simplifica o processo de configuração.

* Compatibilidade com Jest: A API do Vitest é muito semelhante à do Jest, facilitando a transição para desenvolvedores que já estão familiarizados com o Jest. Isso inclui suporte para funções de teste como describe, it, test, e funcionalidades como mocks e spies.

* Suporte a Módulos ES: Vitest tem suporte nativo para Módulos ES, alinhando-se com as práticas modernas de desenvolvimento JavaScript e facilitando o teste de código escrito em ESModules.

* Testes de Tipos: Integração com TypeScript para oferecer suporte a testes de tipo, garantindo que seu código funcione corretamente com definições de tipos TypeScript.

* Cobertura de Código: Vitest oferece suporte a relatórios de cobertura de código, permitindo que os desenvolvedores identifiquem facilmente áreas do código que não estão sendo testadas.

Casos de Uso

Vitest é ideal para desenvolvedores que já estão usando o Vite em seus projetos ou estão buscando uma alternativa leve e rápida ao Jest, especialmente em ambientes de desenvolvimento que utilizam Módulos ES ou que precisam de uma integração mais estreita com TypeScript.

## Links

* [Documentação Oficial](https://vitest.dev/)

* [Repositório](https://github.com/vitest-dev/vitest)

## Conclusão

Vitest é uma excelente escolha para desenvolvedores que procuram uma solução de teste rápida e moderna, especialmente aqueles que já estão usando o Vite em seus projetos. Com sua compatibilidade com Jest e suporte para TypeScript, ele se torna uma ferramenta poderosa para garantir a qualidade e a confiabilidade do código em ambientes de desenvolvimento modernos.

# IDE

Visual Studio Code (VS Code)

Visual Studio Code (VS Code) é uma das IDEs mais populares e amplamente utilizadas para desenvolvimento de software, especialmente para projetos JavaScript e TypeScript. Desenvolvida pela Microsoft, VS Code é conhecida por sua flexibilidade, extensibilidade e desempenho. É um editor de código leve mas poderoso, suportando uma vasta gama de linguagens de programação e ferramentas.
Características Principais

* Leveza e Performance: VS Code é um editor rápido e responsivo, projetado para ser leve e altamente performático.
* Extensível: Possui um vasto marketplace de extensões que adicionam funcionalidades e suportam diferentes linguagens e frameworks.
* IntelliSense: Oferece autocompletar inteligente, dicas de parâmetros, e navegação rápida de código.
* Integração com Git: Ferramentas de controle de versão integradas, facilitando o gerenciamento de repositórios Git diretamente na IDE.
* Terminal Integrado: Possui um terminal embutido, permitindo rodar comandos diretamente do editor.

## Ferramentas de Debug

VS Code vem com um conjunto robusto de ferramentas de debug que facilitam a identificação e correção de bugs no código. Aqui estão algumas das principais ferramentas de debug integradas:

* Debugging Interativo: Permite a execução de código passo a passo (step-through debugging), com a capacidade de inspecionar variáveis e expressões em tempo real.
* Breakpoints: Possibilidade de definir breakpoints no código para pausar a execução e inspecionar o estado do programa.
    Watch Expressions: Permite monitorar expressões específicas e ver como seus valores mudam à medida que a execução progride.
* Call Stack: Visualiza a pilha de chamadas, permitindo navegar pelas diferentes camadas de chamadas de função.
    Integrated Debug Console: Permite avaliar expressões, executar comandos e interagir com o programa em execução diretamente no console de debug.
* Variable Inspection: Janela de variáveis que exibe o valor atual de todas as variáveis no escopo atual.
* Conditional Breakpoints: Permite definir condições para que um breakpoint seja acionado, útil para situações onde o problema ocorre sob condições específicas.
* Logpoints: Em vez de parar a execução, os logpoints adicionam entradas ao log sem interromper o fluxo do programa.

# Tutorial 

https://www.youtube.com/watch?v=arVY-N0RNPQ

No quinto video da serie de Node.js API testável vamos fazer as operações de CRUD da nossa API e também fazer testes para elas para garantir a funcionalidade.

# Mock Objects em Testes de Unidade

Resumo

Mock Objects são objetos simulados que imitam o comportamento de objetos reais em um sistema controlado, permitindo que testes de unidade isolem e verifiquem o comportamento de partes específicas do código sem depender de suas interações com outros componentes. Isso é especialmente útil para testar componentes que têm dependências externas, como serviços de rede, bancos de dados, ou APIs externas.
Por que Usar Mock Objects?

* Isolamento: Permitem testar uma unidade de código isoladamente, sem depender de outros componentes ou serviços externos.
* Previsibilidade: Possibilitam a configuração de respostas previsíveis para chamadas de métodos, facilitando a verificação do comportamento do código sob teste.
* Performance: Aumentam a velocidade dos testes, eliminando a necessidade de interações reais com serviços lentos ou recursos pesados.
* Controle: Permitem simular diferentes cenários e condições de erro que podem ser difíceis de reproduzir com componentes reais.

## Benefícios de Mock Objects

* Isolamento de Dependências: Permitem focar exclusivamente na lógica da unidade de código testada.
* Cenários de Teste Controlados: Facilitam a simulação de diferentes condições, incluindo casos de sucesso e erro.
* Rapidez: Testes são executados rapidamente, sem a necessidade de interagir com serviços externos reais.
* Reprodutibilidade: Garantem que os testes sejam reprodutíveis e não dependam de fatores externos variáveis.

## Conclusão

Mock Objects são uma ferramenta essencial para testes de unidade, proporcionando um ambiente de teste controlado e previsível. Eles permitem que os desenvolvedores isolem a lógica de negócio e testem comportamentos específicos sem as complicações introduzidas por dependências externas. Utilizar Mock Objects adequadamente pode aumentar significativamente a confiabilidade e a eficácia dos testes de unidade.