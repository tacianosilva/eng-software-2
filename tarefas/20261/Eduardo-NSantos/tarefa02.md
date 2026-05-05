# Tarefa 02 - Teste de Unidade

**Nome:** Eduardo Nascimento Santos 
**GitHub:** https://github.com/Eduardo-NSantos
**E-mail:** eduardo.santos.135@ufrn.edu.br

**Repositório do projeto:** https://github.com/LuizFelixDev/iservice-api

## 9 - Testes de Software e Ferramentas

### a) Testes de Software (foco em Testes de Unidade)
Testes de software são práticas utilizadas para verificar se um sistema funciona corretamente e atende aos requisitos definidos. Os testes de unidade focam em validar pequenas partes do código, como funções ou métodos, de forma isolada. Esse tipo de teste permite identificar erros rapidamente, facilita a manutenção do sistema e aumenta a confiabilidade da aplicação.

---

### b) Linguagem e Stack do Projeto
A linguagem utilizada no projeto é TypeScript, utilizando o framework NestJS no desenvolvimento backend. A stack também inclui Node.js como ambiente de execução e pode utilizar bibliotecas como Express (internamente no NestJS), além de ferramentas como npm para gerenciamento de dependências.

---

### c) Framework de Testes de Unidade
Um framework bastante utilizado no ecossistema do NestJS é o Jest.

O Jest permite criar testes automatizados de forma simples, rápida e eficiente. Ele oferece recursos como mocks, testes assíncronos e cobertura de código, sendo amplamente utilizado em aplicações Node.js.

Link: https://jestjs.io/

---

### d) IDE utilizada
A IDE utilizada é o Visual Studio Code (VS Code).

Ela possui diversas ferramentas de debug integradas, como:
- Breakpoints (pontos de parada)
- Execução passo a passo
- Inspeção de variáveis
- Console de debug

Além disso, o VS Code possui extensões que melhoram ainda mais a produtividade no desenvolvimento com NestJS e TypeScript.

---

### e) Tutorial de CRUD com Testes
Tutorial encontrado: https://docs.nestjs.com/first-steps

O tutorial apresenta a criação de uma aplicação básica com NestJS, incluindo a estrutura de um CRUD. Também mostra como configurar e executar testes automatizados utilizando Jest, abordando boas práticas no desenvolvimento de aplicações backend.

---

### f) Mock Objects
Mock Objects são objetos simulados utilizados em testes de unidade para substituir dependências reais, como banco de dados ou APIs externas.

Eles permitem testar partes específicas do sistema de forma isolada, garantindo maior controle sobre os resultados dos testes. No contexto do NestJS, o Jest oferece suporte nativo para criação de mocks, facilitando a simulação de dependências.

---

## 10 - Descrição do Repositório do Projeto

### a) CRUD implementado (User Story - Jobs)

No projeto implementei um CRUD no módulo **Jobs**, que representa o vínculo entre o cliente e o prestador de serviço dentro da plataforma. Um Job é criado quando um cliente solicita um serviço e um prestador é associado para executá-lo.

---

### b) Testes de Unidade do CRUD

Foram implementados testes de unidade para cada uma das operações do CRUD. Os testes foram feitos de forma isolada, utilizando Mock Objects para simular o comportamento do repositório e dependências externas.

A experiência de implementar os testes foi importante para entender melhor o isolamento das camadas da aplicação. O uso de mocks facilitou o foco apenas na lógica do serviço, sem depender de banco de dados ou outras integrações.

---
