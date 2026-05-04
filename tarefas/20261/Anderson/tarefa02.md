# Tarefa 02 - Teste de Unidade

| | ||
|-|-|-|
Anderson Cruz | gabriel.cruz.133@ufrn.edu.br | andersoncruzdev| 

[Link do fork do repositório](https://github.com/andersoncruzdev/eng-software-2)

## Testes de Software - Foco em Testes de Unidade

Os testes de software são práticas essenciais no desenvolvimento para garantir a qualidade e a confiabilidade do código. Eles envolvem a execução de programas ou componentes com o objetivo de identificar defeitos e validar se o software atende aos requisitos especificados. Entre os tipos de testes, os Testes de Unidade se destacam por focarem na verificação de unidades individuais de código, como funções, métodos ou classes, de forma isolada. Isso permite detectar bugs precocemente, facilitando a manutenção e a integração contínua. Um pequeno resumo: Testes de Unidade promovem código mais robusto, reduzem custos de correção e aumentam a confiança no desenvolvimento ágil.

## Linguagem de Programação e Stack para o Projeto da Disciplina

Para o desenvolvimento do projeto da disciplina, utilizaremos a linguagem de programação Java, conhecida por sua robustez, portabilidade e ampla utilização no mercado. A stack inclui o framework Spring, especialmente o Spring Boot, para o backend web, que facilita a criação de aplicações seguras, escaláveis e de rápida configuração, seguindo uma arquitetura organizada em camadas. Para o banco de dados, optaremos por PostgreSQL, devido à sua robustez, confiabilidade e suporte a dados complexos. Ferramentas adicionais incluem Git para controle de versão e VS Code como ambiente de desenvolvimento.

## Framework de Testes de Unidade

Para testes de unidade em Java, o framework escolhido é o JUnit. JUnit é um framework open-source amplamente utilizado para escrever e executar testes automatizados em Java, facilitando a verificação de unidades de código de forma isolada. Ele suporta anotações como @Test, @BeforeEach, e asserções para validar comportamentos esperados. Resumo: JUnit promove práticas de TDD (Test-Driven Development), integra-se bem com Spring Boot e possui uma comunidade ativa. Link: [JUnit](https://junit.org/junit5/).

## IDE Utilizada

A IDE utilizada é o Visual Studio Code (VS Code), um editor de código fonte gratuito e open-source desenvolvido pela Microsoft. É leve, altamente customizável e suporta uma vasta gama de linguagens de programação através de extensões. Para Java, utilizo a extensão Java Pack, que inclui suporte para compilação, execução e depuração. As ferramentas de debug integradas incluem: configuração de breakpoints visuais, step over/in/out para navegação no código, inspeção de variáveis locais e globais, watch expressions para monitorar valores em tempo real, e um console de debug para executar comandos durante a sessão. Essas ferramentas facilitam a identificação e correção de bugs de forma eficiente.

## Tutorial para CRUD com Testes

Um tutorial recomendado é "Building a RESTful Web Service with Spring Boot" do site oficial do Spring, disponível em [Spring Boot REST Tutorial](https://spring.io/guides/tutorials/rest/). Este tutorial demonstra como criar uma aplicação CRUD (Create, Read, Update, Delete) usando Spring Boot para serviços RESTful, incluindo a implementação de testes de unidade com JUnit e mocks com Mockito. Ele cobre desde a configuração inicial até a execução de testes, mostrando como validar endpoints e lógica de negócio. O conteúdo inclui exemplos práticos de código, explicações passo a passo e boas práticas para testes em aplicações Spring.

## Mock Objects em Testes de Unidade

Mock objects são objetos simulados que substituem dependências reais durante os testes de unidade, permitindo isolar a unidade testada e controlar seu comportamento. Eles são essenciais para testar componentes que interagem com bancos de dados, APIs externas ou outros serviços, evitando testes lentos ou instáveis. Em Java, frameworks como Mockito facilitam a criação de mocks, definindo retornos esperados e verificando interações. Resumo: Mocks promovem testes rápidos, confiáveis e focados, seguindo princípios como o de responsabilidade única e isolamento de dependências.

## Descrição do Repositório do Projeto

O projeto Touchfy é dividido em dois repositórios principais: [touchfy-api](https://github.com/douglas-e-amigos/touchfy-api), que implementa o backend em Java utilizando Spring Boot para fornecer APIs RESTful, e [touchfy-ui](https://github.com/douglas-e-amigos/touchfy-ui), que desenvolve o frontend em React para uma interface de usuário interativa. O sistema parece ser voltado para gerenciamento de agendamentos ou serviços, integrando backend e frontend para uma aplicação completa.

## CRUD Implementado - User Story

**User Story:** Como administrador do sistema Touchfy, quero gerenciar usuários para controlar acessos e perfis, permitindo inserir novos usuários, consultar informações existentes, atualizar dados e deletar usuários inativos.

As operações do CRUD implementadas incluem:
- **Inserir (Create):** Endpoint POST para criar um novo usuário com nome, email e senha.
- **Consultar (Read):** Endpoint GET para listar todos os usuários ou buscar por ID.
- **Atualizar (Update):** Endpoint PUT para modificar dados de um usuário existente.
- **Deletar (Delete):** Endpoint DELETE para remover um usuário do sistema.
- **Operação adicional:** Endpoint GET para buscar usuários por email (filtro).

## Testes de Unidade para o CRUD

Foram implementados testes de unidade para cada operação do CRUD, utilizando JUnit e Mockito para mockar dependências como repositórios e serviços externos. Os testes isolam a lógica de negócio, verificando comportamentos sem interações reais com banco de dados.

- **Teste para Inserir:** Verifica se um usuário é salvo corretamente. Link: [UserServiceTest.java - testSave](https://github.com/douglas-e-amigos/touchfy-api/blob/main/src/test/java/com/ufrn/dct/bsi/touchfy/application/usecases/usuario/CriarUsuarioUseCaseTest.java)

Experiência: Implementar os testes foi inicialmente desafiador devido à configuração de mocks, mas facilitou a detecção precoce de bugs e melhorou a confiança no código. Usar mocks isolou as unidades, tornando os testes rápidos e independentes.

## Testes de Integração vs Testes de Unidade

Testes de Unidade focam em testar componentes individuais (como métodos ou classes) de forma isolada, utilizando mocks para simular dependências externas, garantindo que cada parte funcione corretamente sozinha. Eles são rápidos e ajudam a identificar bugs específicos.

Testes de Integração, por outro lado, verificam a interação entre múltiplos componentes ou sistemas, testando o fluxo completo sem mocks, incluindo bancos de dados reais ou APIs externas. Eles são mais lentos e complexos, mas asseguram que as partes integrem-se corretamente.

No projeto, foram implementados principalmente Testes de Unidade, utilizando mocks para isolar serviços e repositórios, priorizando velocidade e isolamento. Não foram feitos Testes de Integração neste estágio, pois o foco foi em validar unidades individuais antes de testar integrações.