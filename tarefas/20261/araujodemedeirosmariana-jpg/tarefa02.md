## 9a) Testes de Unidade

Testes de Unidade (ou *Unit Testing*) são a camada mais fundamental e "granular" dos testes de software. Eles consistem em verificar o comportamento de uma unidade isolada do código — a menor parte testável, como uma função, um método ou uma classe. O objetivo é garantir que cada uma dessas partes funcione exatamente como o esperado, independentemente do resto do sistema. Um bom teste de unidade se destaca por três características principais, que trazem benefícios diretos para o desenvolvimento :

1.  **Isolamento**: O teste fala apenas com a unidade em questão. Dependências externas (como bancos de dados, APIs ou outras classes) são substituídas por objetos simulados (*mocks* ou *stubs*). Isso garante que, se o teste falhar, a causa está naquela unidade específica .
2.  **Determinismo**: Dado o mesmo cenário de entrada, o teste sempre produz o mesmo resultado (passa ou falha). Testes "instáveis" (*flaky*) que passam às vezes e falham em outras são um grande problema, pois minam a confiança da equipe .
3.  **Velocidade**: Devem ser extremamente rápidos para rodar (milissegundos). Uma suíte de testes unitários de um projeto pequeno a médio deve ser executada em segundos, fornecendo um retorno imediato para o desenvolvedor .

Essas características colocam o teste de unidade no início do ciclo de vida do desenvolvimento, em uma prática conhecida como **"shift-left"** , onde os testes são realizados o mais cedo possível, prevenindo bugs antes que se tornem caros e complexos de resolver .

## Como Funciona na Prática?

O processo geralmente envolve as seguintes etapas :

1.  **Preparação (*Setup*)**: Configura-se o ambiente e os dados necessários para o cenário de teste.
2.  **Execução (*Exercise*)**: Executa-se a unidade de código (a função/método) com os parâmetros definidos.
3.  **Verificação (*Verify*)**: Compara-se o resultado obtido com o resultado esperado, usando funções de **asserção** (*assertions*).
4.  **Limpeza (*Teardown*)**: (Opcional) Restaura-se o sistema ao estado original, desfazendo qualquer alteração.

## Duas Abordagens Principais: Caixa-branca e Caixa-preta

- **Caixa-branca (*White-box*)**: O teste é desenhado com base no conhecimento do código interno da unidade. O objetivo é percorrer os diferentes caminhos lógicos (como loops e condicionais `if`/`else`), garantindo que toda a estrutura interna seja verificada.
- **Caixa-preta (*Black-box*)**: O teste é desenhado com base na especificação da unidade, focando apenas no que ela deve fazer (entradas e saídas esperadas), sem se preocupar com a implementação interna.

## Ferramentas e Frameworks Populares

Atualmente, a automação é a regra. Os frameworks de teste fornecem a estrutura para escrever e executar os testes de forma simples. Os exemplos mais conhecidos incluem :

| Framework | Linguagem/Ecossistema |
| :--- | :--- |
| **JUnit** | Java (O mais clássico e padrão de fato) |
| **pytest** | Python (Famoso por sua sintaxe simples e poderosa) |
| **Jest** | JavaScript (Foco em React, com configuração mínima) |
| **Mocha** | JavaScript (Flexível e rico em funcionalidades para Node.js) |
| **xUnit / NUnit** | .NET (C#, F#, VB.NET) |

-----

## 9b) Linguagem de programação e stack para o projeto da disciplina

Para o desenvolvimento do projeto da disciplina "Sistema de Assistência Técnica", foi escolhida a seguinte stack tecnológica:

**Backend:**
- **Python 3.12+** – linguagem principal
- **FastAPI** – framework web moderno e de alta performance
- **Uvicorn** – servidor ASGI para execução da aplicação
- **SQLite 3.37.2** – banco de dados relacional leve e embarcado

**Frontend:**
- **HTML5** – estrutura das páginas
- **Jinja2** – template engine para renderização dinâmica
- **Bootstrap 5** – framework CSS para design responsivo
- **JavaScript (ES6)** – interatividade e chamadas assíncronas à API

**Ambiente e ferramentas:**
- **WSL2 (Ubuntu 22.04.5 LTS)** – ambiente de desenvolvimento
- **Virtualenv (.venv)** – isolamento de dependências Python
- **Git & GitHub** – versionamento de código
- **VS Code** – IDE de desenvolvimento

----

## 9c) Framework de Testes de Unidade para a linguagem escolhida

O framework de testes de unidade escolhido para o projeto foi o **pytest**.

## Sobre o pytest

O pytest é o framework de testes mais popular do ecossistema Python. Ele é conhecido por sua sintaxe simples, poderosa e "pythônica", tornando a escrita de testes mais rápida e legível.

## Principais Características

- **Sintaxe simplificada** – usa o `assert` nativo do Python
- **Fixtures** – gerenciam setup e teardown de recursos (banco de dados, clientes HTTP, etc.)
- **Testes parametrizados** – executam o mesmo teste com múltiplas entradas
- **Plugins** – extensível com pytest-cov (cobertura), pytest-asyncio (async), etc.
- **Integração com FastAPI** – funciona perfeitamente com o `TestClient`

## Links

- **Site oficial:** https://pytest.org/
- **GitHub:** https://github.com/pytest-dev/pytest

----

## 9d) IDE utilizada e ferramentas de debug

A IDE utilizada no desenvolvimento do projeto é o **Visual Studio Code (VS Code)** executado sobre **WSL2 (Ubuntu 22.04.5 LTS)**.

##  VS Code

O VS Code foi escolhido por ser leve, altamente customizável, gratuito e ter excelente suporte para Python e FastAPI, especialmente quando integrado ao WSL2.

## Ferramentas de debug integradas

O VS Code possui um depurador (debugger) poderoso que permite:

| Ferramenta | Descrição |
| :--- | :--- |
| **Breakpoints** | Pontos de parada que pausam a execução. Suporta breakpoints condicionais, logpoints (sem pausar) e breakpoints por exceção |
| **Step Over (F10)** | Executa a linha atual e para na próxima, sem entrar em funções |
| **Step Into (F11)** | Entra dentro da função/método chamado na linha atual |
| **Step Out (Shift + F11)** | Sai da função atual e retorna ao chamador |
| **Watch** | Monitora expressões e variáveis específicas em tempo real |
| **Call Stack** | Visualiza a pilha de chamadas para entender o fluxo de execução |
| **Debug Console** | Executa comandos Python interativamente durante a pausa |
| **Variable Explorer** | Exibe todas as variáveis no escopo atual com seus valores |
| **Conditional Breakpoints** | Pausa apenas quando uma condição é verdadeira (ex: `i == 5`) |
| **Inline Values** | Mostra o valor das variáveis diretamente na linha do código |
| **Debug Remoto** | Permite conectar a aplicações rodando em containers Docker ou WSL |

----

## 9e) Tutorial para CRUD e Testes de Software

## Tutorial Escolhido

**Título:** *Testing a FastAPI CRUD API using Pytest* [citation:2]

**Autor:** Pytest-with-Eric

**Link:** https://github.com/Pytest-with-Eric/pytest-fastapi-crud-example

## Descrição do Conteúdo

Este tutorial apresenta um exemplo prático e completo de uma API CRUD (Create, Read, Update, Delete) desenvolvida com **FastAPI** e **SQLite**, com foco especial na escrita de testes automatizados usando **pytest**.

O projeto demonstra:

| Tópico | Descrição |
|--------|-----------|
| **API de Usuários** | Implementa um CRUD completo para gerenciamento de usuários |
| **Arquitetura Limpa** | Separação clara entre camada de API, serviço e banco de dados |
| **Modelos Pydantic** | Validação de dados de entrada e saída |
| **SQLAlchemy ORM** | Persistência de dados com SQLite |
| **Testes com Pytest** | Testes de unidade para as funções da camada de serviço |

----


