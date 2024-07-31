# Tarefa 02 - Teste de Unidade

**Nome:** [Breno Porfirio]  
**Usuário GitHub:** [BrenoPorfirio]  
**E-mail:** [breno.porfirio.079@ufrn.edu.br]

# Repositórios do projeto
* [Backend](https://github.com/leonardobezrr/sig-estoque-back-end)
* [Frontend](https://github.com/leonardobezrr/sig-estoque-front-end)

# Testes de software:
Testes de software são uma parte crucial do ciclo de vida do desenvolvimento de software. Eles envolvem a avaliação e a verificação de que um software funciona conforme o esperado e atende às suas especificações e requisitos. O objetivo dos testes de software é identificar defeitos, garantir a qualidade e melhorar a confiabilidade e desempenho do software antes que ele seja liberado para uso.

Existem vários tipos de testes de software, cada um com um propósito específico, incluindo testes funcionais, testes de integração, testes de sistema, testes de aceitação, e testes de unidade. Cada tipo de teste é realizado em diferentes estágios do desenvolvimento para garantir que todas as partes do software sejam testadas de maneira adequada.

# Testes de unidade
Testes de unidade são uma prática fundamental no desenvolvimento de software, em que partes individuais do código (unidades) são testadas de forma isolada para verificar se funcionam conforme o esperado. Esses testes são automatizados e geralmente escritos pelos próprios desenvolvedores, utilizando frameworks específicos para a linguagem em questão. O objetivo principal dos testes de unidade é validar o comportamento de pequenas unidades de código, garantindo que cada uma delas funcione corretamente antes de integrá-las com outras partes do sistema. Isso não apenas ajuda a identificar e corrigir erros precocemente, mas também facilita a manutenção e evolução do software ao longo do tempo.

# Linguagem de programção e Stack
Para o desenvolvimento do front-end, estamos utilizando JavaScript com o framework React, Nexjs e TypeScript. No back-end, utilizamos Node.js e Fastify. Essa combinação permite um desenvolvimento eficiente e escalável, com uma base de código tipada e uma estrutura leve para a criação de aplicações web modernas e de alta performance.

# Framework Testes de Unidade
Vitest é um framework de testes rápido e eficiente para JavaScript e TypeScript, projetado especificamente para trabalhar em harmonia com o Vite, um bundler moderno. Ele se destaca por sua velocidade e integração simplificada, oferecendo uma experiência de desenvolvimento ágil e robusta. Para saber mais: [Vitest](https://vitest.dev/)

# IDE
Visual Studio Code (VSCode) é uma IDE popular e poderosa desenvolvida pela Microsoft, amplamente utilizada por desenvolvedores para escrever, depurar e gerenciar código. Conhecida por sua flexibilidade, extensibilidade e desempenho, o VSCode se destaca como uma ferramenta essencial para desenvolvedores de todas as áreas, desde web development até data science. Suas ferramentas de debug são:
## Breakpoints
Permite aos desenvolvedores definir breakpoints no código para pausar a execução e inspecionar o estado do programa.

## Watch Expressions
Possibilita monitorar expressões específicas e verificar seus valores durante a execução do programa.

## Call Stack
Mostra a pilha de chamadas do programa, permitindo entender a sequência de chamadas que levou a um determinado ponto de execução.

## Variables View
Exibe as variáveis e seus valores atuais, ajudando a identificar erros e comportamentos inesperados no código.

## Debug Console
Oferece um console interativo para avaliar expressões e executar comandos durante a depuração.

## Inline Values
Exibe valores de variáveis diretamente no código, facilitando a visualização dos dados durante a execução.

# Tutorial CRUD
[CRUD com Node, Fastify e PRISMA](https://www.youtube.com/watch?v=P--nEPLYV9A&ab_channel=HeroCode)
Conteúdo que apresenta de forma prática e eficiente a criação de um crud com as tecnologias mencionadas. Apresenta desde lógica de programação básica, tipagem, e orientação a objetos.

# Mocks Objects em Testes de Unidade
Mocks Objects são objetos simulados que imitam o comportamento de objetos reais em um ambiente controlado de teste. Eles são utilizados em testes de unidade para isolar o código que está sendo testado, permitindo que os desenvolvedores verifiquem o comportamento de uma unidade de código sem depender de suas interações com outros componentes do sistema.

## Exemplos de Uso de Mocks:
## Testar Interações 
Verificar se uma função chama um método específico de um objeto de dependência.
## Simular Respostas
Simular respostas de serviços externos para testar como a unidade lida com diferentes cenários, como sucesso ou falha de uma API.
## Validar Comportamento
Assegurar que uma unidade de código se comporta corretamente ao interagir com dependências simuladas.

# CRUD de Supplier

Permite criar, editar, buscar e excluir fornecedores que são do tipo Supplier. Os Suppliers são do tipo User.

# Testes de unidade

* [Link para o arquivo de testes](https://github.com/leonardobezrr/sig-estoque-back-end/tree/dev/src/services/supplier)

Neste conjunto de testes de unidade para fornecedores, são realizados cinco testes distintos:

1. **Criação de Supplier (create.test.ts):** Este teste verifica se é possível criar um novo fornecedor e garante que o fornecedor seja salvo corretamente no repositório em memória.

2. **Busca de Todos os Suppliers (fetch-all-supplier.test.ts):** Este teste valida a funcionalidade de buscar todos os fornecedores registrados, assegurando que todos os fornecedores ativos sejam retornados corretamente.

3. **Busca de Suppliers por Nome da Empresa (fetch-many-supplier-by-company-name.test.ts):** Este teste verifica se é possível buscar fornecedores com base no nome da empresa. Ele confirma que o sistema retorna apenas os fornecedores cuja empresa corresponde ao nome fornecido.

4. **Busca de Suppliers por Nome Social (fetch-many-supplier-by-social-name.test.ts):** Este teste avalia a funcionalidade de buscar fornecedores pelo nome social. O teste garante que o sistema retorne os fornecedores cujo nome social corresponda ao fornecido.

5. **Busca de Supplier por ID (find-supplier-by-id.test.ts):** Este teste verifica se é possível encontrar um fornecedor específico pelo seu ID. O teste assegura que o sistema retorne o fornecedor correto ou lance um erro apropriado se o fornecedor não for encontrado.

Além disso, os dados utilizados para esses testes são mockados em um arquivo exclusivo para garantir a integridade e a repetibilidade dos testes.


* [Link para o arquivo de Mock](https://github.com/leonardobezrr/sig-estoque-back-end/blob/dev/src/repositories/in-memory/in-memory-supplier-repository.ts)

Após a implementação dos testes, ficou evidente a importância de se obter uma boa cobertura de testes em um sistema. A experiência foi extremamente positiva e contribuiu significativamente para o meu desenvolvimento e aprendizado.

# Teste de Integração
Os testes de integração são uma etapa crucial no ciclo de vida do desenvolvimento de software, focando em verificar a interação entre diferentes módulos ou componentes do sistema. Enquanto os testes unitários isolam e testam partes individuais do código, os testes de integração garantem que essas partes funcionem corretamente quando combinadas.

## Objetivos dos Testes de Integração:
## Verificar Interfaces:
Assegurar que os diferentes módulos ou componentes se comuniquem corretamente através de suas interfaces.
## Detectar Problemas de Integração:
Identificar e corrigir problemas que podem surgir quando componentes individuais são combinados.
## Validar Fluxos de Dados:
Garantir que os dados sejam passados corretamente entre os módulos.
## Assegurar Funcionalidade:
Confirmar que funcionalidades que dependem de múltiplos módulos funcionem como esperado.

## Diferença entre Teste Unitário e Teste de Integração:
## Objetivo: 

### Teste Unitário:
Verificar se unidades individuais do código (como funções ou métodos) funcionam corretamente de forma isolada.
### Teste de Integração:
Verificar se diferentes unidades ou módulos funcionam corretamente juntos.

## Escopo:

### Teste Unitário:
Foca em pequenas partes do código, geralmente escritas e mantidas pelo próprio desenvolvedor.
### Teste de Integração:
Foca na interação entre vários módulos, podendo envolver diferentes partes do sistema, como serviços web, bancos de dados, e outras APIs.

## Isolamento:

### Teste Unitário:
Isola o código em teste usando mocks e stubs para substituir dependências externas.
### Teste de Integração:
Utiliza componentes reais do sistema, testando a integração entre eles sem usar mocks.

## Complexidade:

### Teste Unitário:
Geralmente menos complexo e mais rápido de executar, pois testa pequenas partes do código.
### Teste de Integração:
Pode ser mais complexo e demorado, pois testa a integração de vários módulos e pode exigir um ambiente de teste mais completo.

No projeto até o momento, não temos testes de integração.