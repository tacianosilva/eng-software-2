# Tarefa 02 - Teste de Unidade 

**Nome:** [CaioLucasLopesMedeiros]
**Usuário GitHub:** [Caiolucas]
**Email:** [Caiolucas0430@gmail.com]
Repositório do projeto (questão 9):** [] 


## Questão 9

**a. Testes de Software e Testes de Unidade**
Testes de software são práticas sistemáticas para garantir que um sistema funciona conforme o esperado, prevenindo que bugs cheguem ao usuário final. O **Teste de Unidade** tem o foco na menor parte testável de um software (como uma função ou método específico). O objetivo é isolar essa parte do resto do código e verificar se a lógica interna dela está correta.

**b. Linguagem de programação e stack**
Para o projeto da disciplina, a linguagem de programação escolhida foi o **TypeScript**, executado no ambiente **Node.js**. A stack também conta com **Docker** e **Docker Compose** para a criação de um ambiente de desenvolvimento isolado e padronizado.

**c. Framework de Testes de Unidade**
O framework escolhido para o projeto foi o **[Jest](https://jestjs.io/pt-BR/)**. Desenvolvido e mantido pela Meta, ele é um dos frameworks de testes mais populares para o ecossistema JavaScript e Node.js. 

**Resumo:** O Jest se destaca por ter uma configuração "zero-config" para a maioria dos projetos, sendo extremamente rápido devido à execução paralela de testes. Ele já inclui nativamente um *test runner* (executor), uma biblioteca de asserções (para validar se o resultado é o esperado) e ferramentas robustas para *Mocking* (simulação de funções e módulos). Para que ele funcione perfeitamente com a tipagem da nossa stack, utilizamos a extensão `ts-jest`, que compila o TypeScript em tempo real durante a execução dos testes.

**d. IDE e Ferramentas de Debug integrada**
A IDE utilizada para o desenvolvimento deste projeto é o **Visual Studio Code (VS Code)**. Ele possui um excelente suporte nativo para TypeScript e Node.js. 

**Ferramentas de Debug:** O VS Code possui um *debugger* (depurador) integrado extremamente poderoso. As principais ferramentas que utilizo nele incluem:
 **Breakpoints (Pontos de interrupção):** Permitem pausar a execução do código em uma linha específica para investigar problemas.
 **Aba Variables/Watch:** Permite inspecionar o valor das variáveis em tempo real enquanto o código está pausado, sem a necessidade de espalhar `console.log` pelo código.
 **Call Stack (Pilha de chamadas):** Mostra o caminho exato e a ordem das funções que foram executadas até chegar ao ponto de erro ou pausa.
 **Step Over/Step Into:** Controles que permitem avançar a execução do código linha por linha, facilitando o entendimento do fluxo de dados da aplicação.

**e. Tutorial de CRUD com Testes em NestJS**
  **Link:** [Construindo uma API CRUD com NestJS e Testes Unitários com Jest](https://docs.nestjs.com/fundamentals/testing) *(Referência baseada na documentação oficial e práticas da comunidade).*
  **Resumo:** O material demonstra como construir os módulos básicos de um CRUD (Inserir, Consultar, Atualizar e Deletar) utilizando a arquitetura de *Controllers* e *Services* do NestJS. O ponto central em relação aos testes é a demonstração de como utilizar o módulo de testes nativo do framework (`@nestjs/testing`) em conjunto com o Jest. O tutorial explica como isolar as regras de negócio no *Service* e criar simulações (Mocks) do repositório de dados para garantir que os testes de unidade sejam executados de forma rápida e sem conexão com um banco de dados real.