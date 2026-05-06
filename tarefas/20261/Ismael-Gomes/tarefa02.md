# Tarefa 02 - Teste de Unidade

**Nome:** Ismael Gomes da Silva  
**Usuário GitHub:** Ismael-Gomes  
**E-mail:** ismael.silva.713@ufrn.edu.br  
**Repositório do Projeto:** [Repositório do iService (Fork)](https://github.com/Ismael-Gomes/iservice-api)

---

## Pesquisa e Fundamentação

### Testes de Software (Foco em Unidade)
Testes de unidade visam validar a menor parte testável de uma aplicação (funções ou métodos) de forma isolada. O objetivo é garantir que a lógica interna de cada componente esteja correta antes de integrá-lo ao sistema.

### Stack Tecnológica
O projeto é desenvolvido utilizando **TypeScript** com o framework **NestJS**. Essa escolha permite o desenvolvimento de aplicações escaláveis no lado do servidor, utilizando decoradores e injeção de dependência.

### Framework de Testes: Jest
Para o NestJS, o framework padrão e mais utilizado é o **Jest**. Ele é uma solução completa que oferece execução de testes, asserções e suporte nativo a mocks.
- [Site Oficial do Jest](https://jestjs.io/)
- [Documentação de Testes no NestJS](https://docs.nestjs.com/fundamentals/testing)

### IDE e Ferramentas de Debug
Utilizo o **VS Code**. Ele possui ferramentas de debug integradas que permitem inserir *breakpoints*, inspecionar variáveis em tempo real e analisar a pilha de chamadas (*call stack*), facilitando a identificação de bugs em ambientes Node.js.

### Tutorial CRUD e Testes
- [Tutorial: Building a CRUD with NestJS and Jest](https://docs.nestjs.com/recipes/crud-generator)
O guia oficial do NestJS mostra como gerar recursos CRUD e aplicar testes unitários utilizando o `TestingModule`.

### Mock Objects
Mocks são objetos que simulam o comportamento de objetos reais de forma controlada. Em testes de unidade, usamos mocks para isolar a classe testada de suas dependências (como bancos de dados ou APIs externas).

---

## Implementação do Projeto

### Descrição do Repositório
O projeto **iService** é uma API backend desenvolvida de forma colaborativa. O objetivo do sistema é conectar clientes a profissionais autônomos para a prestação de serviços diversos, gerenciando desde o cadastro de usuários (clientes e profissionais) até a criação, geolocalização (radar de serviços próximos) e acompanhamento de serviços (jobs).

### User Story: CRUD de Serviço (Jobs)
O CRUD implementado e testado refere-se à gestão de serviços, baseada na User Story de **Manter Serviço** (US04 - Visão Profissional/Cliente).
- **Inserir (Create):** O cliente registra um pedido de serviço informando descrição e coordenadas geográficas, gerando um registro com UUID.
- **Consultar (Read):** Busca de serviços solicitados por um cliente específico (`findByClient`) e busca de serviços em um raio de distância (`findNearbyJobs`).
- **Atualizar (Update):** Alteração do status do serviço (ex: aceitar serviço, concluir serviço) e ajuste de informações da solicitação.
- **Deletar (Delete):** Cancelamento e remoção de um serviço cadastrado erroneamente ou não mais necessário.

### Testes de Unidade e Experiência
A implementação foi inicialmente desafiadora devido à arquitetura de injeção de dependências do NestJS e à necessidade de configurar a resolução de caminhos (`moduleNameMapper`) no Jest. Tive que criar **Mock Objects** robustos para simular o comportamento do `UserRepository` e do `JobRepository` (TypeORM). Isso me forçou a entender exatamente quais métodos do banco o serviço consome (`createQueryBuilder`, `getMany`, `find`, `create`, `save`). Resolver as inconsistências de UUID e garantir o isolamento do código foi uma experiência muito enriquecedora.

- **Link para o arquivo de teste no meu fork:** [src/jobs/jobs.service.spec.ts](https://github.com/Ismael-Gomes/iservice-api/blob/refactor/jobs-id-consistencia-37/src/jobs/jobs.service.spec.ts)

### Testes de Integração vs. Unidade
A diferença principal é o escopo de atuação e as dependências:
*   **Teste Unitário (O que realizei):** Testa a menor unidade possível (no caso, o `JobsService`) de forma totalmente isolada. Usamos Mocks para "fingir" as respostas do banco de dados, garantindo que apenas a lógica de negócio (como a formatação de coordenadas ou vínculo do UUID) fosse validada.
*   **Teste de Integração:** Verifica se múltiplos módulos funcionam juntos. No iService, isso envolveria conectar o `JobsService` a um banco de dados real de teste (ex: SQLite em memória) para verificar se as queries do TypeORM realmente inserem e resgatam os dados nas tabelas corretamente, sem usar mocks.