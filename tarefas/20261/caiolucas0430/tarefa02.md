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

  ## Questão 10
  ## Letra A
  No projeto, implementei um CRUD no módulo Jobs, que representa o vínculo entre o cliente e o prestador de serviço dentro da plataforma. Um Job é criado quando um cliente solicita um serviço e um prestador é associado para executá-lo. Durante o desenvolvimento, o foco principal foi garantir que a manipulação desses registros ocorresse de forma segura e precisa, validando cada etapa do processo desde a entrada dos dados até o armazenamento final no banco de dados PostgreSQL.

  Para consolidar esta solução, estruturei a lógica de criação e registro para que campos obrigatórios, como o nome do usuário e suas credenciais, fossem devidamente validados antes da persistência. Além disso, desenvolvi a funcionalidade de consulta através de um sistema de radar, que permite localizar oportunidades de trabalho com base em critérios geográficos e raios de distância específicos. Toda a comunicação foi protegida com a implementação de tokens JWT, assegurando que apenas usuários autenticados e autorizados pudessem interagir com os dados dos serviços.

  O processo de construção seguiu um método rigoroso de testes End-to-End, onde criei robôs que simulam o comportamento real de um usuário, desde o cadastro e login até a busca efetiva por um Job. Esse cuidado garantiu que o sistema fosse capaz de tratar erros de forma inteligente, como evitar duplicidade de registros ou acessos não autorizados, mantendo a integridade da plataforma. O código foi finalizado seguindo padrões profissionais de escrita e organização, facilitando futuras manutenções e garantindo que o fluxo entre clientes e prestadores seja sempre confiável.

## Letra B
No desenvolvimento do módulo Jobs, estabeleci uma estrutura de testes unitários para validar individualmente cada funcionalidade do CRUD. Essas verificações foram conduzidas de maneira independente, empregando Mocks para mimetizar a resposta do repositório e de quaisquer serviços externos vinculados.

Essa prática foi fundamental para consolidar a compreensão sobre o desacoplamento das camadas do sistema. Ao utilizar objetos simulados, foi possível concentrar a análise estritamente nas regras de negócio do serviço, eliminando a necessidade de conexão com o banco de dados ou dependências de terceiros durante os testes

## Letra C
Testes de Integração avaliam se diferentes módulos de um sistema funcionam corretamente quando conectados, focando em identificar falhas na comunicação e na troca de dados. Eles validam o fluxo completo da aplicação, desde a requisição até a interação com componentes de infraestrutura, como bancos de dados ou APIs externas, garantindo que os contratos entre as interfaces operem em conjunto sem erros.

Codifiquei Testes de Integração / End-to-End (E2E), pois testamos o fluxo completo desde a requisição HTTP batendo na rota de Radar até a resposta do servidor, integrando todas as camadas da sua aplicação NestJS.
