# Tarefa 02 - Teste de Unidade

Nome: Kaique Vieira Soares

Usuario Github: kaiquevieirasoares

E-mail: kaique.vieira.168@ufrn.edu.br

Link para o repositorio: https://github.com/LuizFelixDev/iservice-api

## 9 - Letra A

* Testes de Software com foco em Unidade
Testes de unidade visam verificar a menor unidade de código testável de forma isolada (geralmente um método ou classe), garantindo que a lógica interna funcione conforme o esperado sem depender de componentes externos como bancos de dados ou APIs.

## 9 - Letra B

* O projeto será desenvolvido utilizando TypeScript com o framework NestJS. O TypeScript adiciona tipagem estática ao JavaScript, reduzindo erros em tempo de desenvolvimento, enquanto o NestJS fornece uma arquitetura baseada em módulos, provedores e controladores, altamente inspirada no Angular.

## 9 - Letra C

* O framework utilizado é o Jest. Ele é o padrão recomendado pelo NestJS e vem pré-configurado ao criar um novo projeto. O Jest é conhecido por sua velocidade, facilidade de configuração e por incluir ferramentas de code coverage e mocking nativamente.

* Links: [NestJS Testing Guide](https://docs.nestjs.com/fundamentals/testing) | [Jest Documentation](https://jestjs.io/)

## 9 - Letra D

* Utilizo o Visual Studio Code (VS Code). Para debug, a IDE conta com o Debugger for Chrome/Node.js integrado, permitindo a criação de arquivos launch.json para interceptar a execução do código, inspecionar variáveis através do Debug Console e utilizar conditional breakpoints.

## 9 - Letra E

* Este guia oficial demonstra como criar um CRUD completo integrando o TypeORM e, crucialmente, como escrever testes de unidade para os serviços, garantindo que a lógica de persistência esteja isolada.

* Link: [Tutorial](https://youtu.be/dXOfOgFFKuY?si=IW4HHfjmG7OgqCIR) 


## 9 - Letra F

* No ecossistema NestJS/Jest, Mocks são objetos que substituem as dependências reais (como Repositories ou outros Services) injetadas via Injeção de Dependência. Usamos funções como jest.fn() ou bibliotecas como @golevelup/ts-jest para simular o retorno de chamadas ao banco de dados, garantindo que o teste de unidade valide apenas a lógica da função testada, sem efeitos colaterais externos.


## 10 - Letra A

* Criei o crud inicial de usuário, Criar, Atualizar, Buscar e Deletar. Adicionei também o cadastro via login com o Google, isso foi feito inicialmente para facilitar a utilização dos outros desenvolvedores no projeto.

## 10 - Letra B

* Fiz os testes de unidade de Jobs, como cadastro, busca dos meus trabalhos e busca pelo funcionario por serviços na cidade, como não era teste de integração, foi feito os testes de unidade utilizando mocks, apenas validando o cénario especifico.


* [Pull Request](https://github.com/LuizFelixDev/iservice-api/pull/43)

* [Link do Teste de Unidade](https://github.com/LuizFelixDev/iservice-api/blob/main/src/jobs/jobs.service.spec.ts)

## 10 - Letra C 

Os Testes de Integração têm como objetivo verificar se os diferentes módulos ou serviços da aplicação funcionam corretamente quando combinados. Enquanto o teste de unidade olha para o componente isolado, o de integração foca na comunicação, validando se os dados fluem corretamente entre a lógica de negócio, o banco de dados e APIs externas.  Para este projeto e em minha experiência profissional, implementei tanto Testes Unitários quanto de Integração. No trabalho e no desenvolvimento do meu projeto, utilizo testes unitários para garantir que cada função ou método se comporte conforme o esperado em cenários isolados. Já os testes de integração são aplicados para assegurar que as rotas da API (Controllers) consigam salvar e recuperar informações do banco de dados real (ou um banco de testes como H2 ou containers Docker) sem erros de mapeamento ou de conexão.  

As principais diferenças são:  

* Escopo: O teste unitário foca na menor unidade de código (uma classe ou método), enquanto o de integração foca no conjunto e na interação entre esses componentes.  

* Dependências: Testes unitários utilizam Mock Objects para substituir dependências externas e ganhar velocidade. Testes de integração utilizam componentes reais (como o banco de dados) para garantir que a infraestrutura esteja configurada corretamente.  

* Velocidade e Custo: Testes unitários são extremamente rápidos e baratos de executar. Testes de integração são mais lentos e complexos, pois exigem que o ambiente (banco, mensageria, etc.) esteja disponível.  

