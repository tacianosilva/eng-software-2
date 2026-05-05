# Tarefa 02 - Teste de Unidade

**Nome:** Tomé Galileu Oliveira Arcanjo  
**GitHub:** Tome-Arcanjo  
**E-mail:** tome.arcanjo.112@ufrn.edu.br  
**Matrícula:** 20240046173


## Testes de Unidade

Testes de unidade são testes automatizados que verificam o funcionamento de pequenas partes isoladas de um sistema, como funções ou métodos.

Eles são geralmente escritos pelos próprios desenvolvedores e executados com frequência durante o desenvolvimento, ajudando a identificar erros rapidamente. Esses testes não dependem de outros componentes do sistema, como banco de dados ou interfaces, focando apenas na lógica da unidade testada.

O principal objetivo é garantir que cada parte do código funcione corretamente de forma independente, facilitando a manutenção, a refatoração e aumentando a confiabilidade do software.

## Linguagem de Programação e Stack

O desenvolvimento do projeto utiliza uma stack moderna e bem definida, composta por tecnologias amplamente utilizadas no mercado.

No **backend**, é utilizado o **Python** como linguagem de programação, em conjunto com o framework **Django**, responsável pela criação da API e implementação das regras de negócio do sistema.

No **frontend**, a aplicação é desenvolvida com **TypeScript**, utilizando o framework **Vue 3**, que oferece uma interface reativa, modular e eficiente para interação com os usuários.

Para o **banco de dados**, é adotado o **PostgreSQL**, um sistema de gerenciamento relacional robusto, responsável pelo armazenamento, organização e processamento das informações.

Essa combinação de tecnologias proporciona uma arquitetura sólida, escalável e adequada para o desenvolvimento do projeto da disciplina, permitindo boa separação de responsabilidades entre backend, frontend e persistência de dados.

## Vitest

O **Vitest** é um framework moderno de testes de unidade para aplicações JavaScript e TypeScript, especialmente popular em projetos que utilizam **Vite**.

Ele foi criado para ser rápido e simples, aproveitando a mesma infraestrutura do Vite para executar testes com alta performance. Além disso, possui uma sintaxe muito semelhante ao Jest, o que facilita sua adoção.

### Principais Características
- Execução rápida de testes
- Suporte nativo a TypeScript
- Integração direta com projetos Vue 3
- API compatível com Jest (describe, it, expect)
- Ambiente de teste com simulação de navegador (jsdom)

### Uso com Vue
O Vitest é frequentemente utilizado em conjunto com o Vue Test Utils, permitindo testar componentes Vue de forma isolada, verificando renderização, eventos e comportamento.

### Objetivo
Seu principal objetivo é facilitar a criação de testes de unidade eficientes, ajudando a garantir a qualidade do código e a prevenir erros durante o desenvolvimento.

### Links
https://vitest.dev/guide/why.html
https://medium.com/@joalisonpereira/vitest-uma-evolu%C3%A7%C3%A3o-do-jest-49db62c50cc5

## IDE Utilizada

A IDE utilizada no desenvolvimento do projeto é o **Visual Studio Code (VS Code)**. Trata-se de um editor de código leve, gratuito e altamente extensível, amplamente utilizado para desenvolvimento web e backend.

O VS Code oferece suporte a diversas linguagens, incluindo **Python**, **TypeScript** e **JavaScript**, além de possuir uma grande variedade de extensões que facilitam o desenvolvimento com tecnologias como Django e Vue.

### Ferramentas de Debug

O VS Code possui ferramentas de depuração (debug) integradas que permitem analisar e identificar problemas no código de forma eficiente. Entre os principais recursos, destacam-se:

- **Breakpoints (pontos de parada):** permitem pausar a execução do código em linhas específicas para inspeção.
- **Step over / step into / step out:** controle detalhado da execução linha por linha.
- **Inspeção de variáveis:** visualização em tempo real dos valores das variáveis durante a execução.
- **Call stack:** exibe a pilha de chamadas, ajudando a entender o fluxo do programa.
- **Watch:** permite monitorar expressões e variáveis específicas.
- **Debug Console:** execução de comandos e avaliação de expressões durante a depuração.

Além disso, o VS Code possui integração com depuradores para diferentes linguagens, como Python (via extensão oficial) e Node.js, permitindo uma experiência completa de desenvolvimento e análise de código.

## Tutorial Vue 
**Link: https://medium.com/@crisnaxtha/crud-operation-with-vue-js-composite-api-vue-router-and-a-json-server-for-beginner-822cb47693b2**
**https://vitest.dev/guide/learn/async.html**

Os tutoriais acima ensinam como desenvolver um crud em vue, ensinando o funcionamento básico da linguagem com typescript, esinando como instalar o vue e suas dependências na máquina e ensinando a criar rotas. No teste de unidade, o tutorial ensina toda a formação do código e suas funções, explicando como cada uma se comporta e como cada elemento interage ao ser executado.

## Mock Objects em Testes de Unidade

Mock Objects são objetos simulados utilizados em testes de unidade para imitar o comportamento de componentes reais do sistema, como serviços externos, banco de dados ou APIs.

Eles são usados para isolar a unidade que está sendo testada, garantindo que o teste foque apenas na lógica daquela parte do código, sem depender de outros elementos que podem ser complexos, lentos ou instáveis.

### Objetivo
O principal objetivo dos mocks é controlar o ambiente de teste, permitindo simular respostas específicas (como sucesso ou erro) e verificar como a unidade reage a diferentes cenários.

### Vantagens
- Isolamento da unidade testada  
- Maior velocidade na execução dos testes  
- Facilidade para simular cenários difíceis de reproduzir  
- Redução de dependências externas  

Dessa forma, os Mock Objects contribuem para testes mais confiáveis, previsíveis e fáceis de manter.
