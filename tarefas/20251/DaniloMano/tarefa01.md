# Tarefa 01 - Git e GitHub com Markdown

**Nome:** Danilo Gabriel de Medeiros Brito  
**Usuário GitHub:** DaniloMano  
**E-mail:** danilogabrill@outlook.com

## **Título do Projeto**
 ### Sistema de gerenciamento para empresa Bonelaria Militar

 ## **Descrição do Projeto**
 O propósito do Sistema da Bonelaria Militar será desenvolver um sistema de informação para uma confecção de artigos militares, no qual será possível cadastrar os produtos fabricados, cadastrar as costureiras, além de cadastrar as saídas/entradas, cada costureira cadastrada receberá notificações de quando determinada matéria prima sair da fábrica para a sua residência, onde será confeccionado o produto (bonés, chapéus, calções entre outros), e a mesma vai poder confirmar que o produto foi recebido. Em cada costureira registrada, terá o relatório da quantidade de produtos já feitos, juntamente com os preços individuais de cada, no qual no final vai poder ser contabilizado o quanto foi o lucro de cada costureira individualmente de acordo com os produtos fabricados, dessa forma, será possível calcular o salário de forma prática além de trazer informações úteis para análise de dados sobre a produção de cada uma.

 ## **Equipe**
- [Bruno Costa Souto](https://github.com/SoutoCB)  
- [Cláudio Pereira Teixeira de Araújo](https://github.com/Claudio-Arauj)  
- [Danilo Gabriel de Medeiros Brito](https://github.com/DaniloMano)  
- [Felipe Augusto Araújo da Cunha](https://github.com/fel-ps)  
- [Mateus Dantas de Oliveira](https://github.com/mtzdantas)  

## [**Link do Repositório**](https://github.com/mtzdantas/sistema-bonelaria)

## **Linguagem de programação do projeto**
 
### **Dart/Flutter**
 
Será utilizado o framework Flutter, que é baseado na linguagem de programação Dart, desenvolvida pelo Google para o desenvolvimento de aplicativos multiplataforma. Dart é uma linguagem moderna, rápida e orientada a objetos, ideal para aplicações eficientes e responsivas.
 
### **Experiência da equipe com a linguagem:**
A equipe possui experiência prévia com a linguagem Dart e o framework Flutter, adquirida durante o desenvolvimento de um projeto prático na disciplina de Programação Orientada a Objetos (POO). Esse projeto proporcionou uma base nos principais conceitos da linguagem e familiaridade com a estrutura de desenvolvimento de aplicações utilizando Flutter. Dessa forma, os membros do grupo detêm o conhecimento necessário para aplicar a tecnologia neste projeto.

## Framework do Projeto: Flutter

Para este projeto, escolhemos o framework Flutter, um framework multiplataforma baseado na linguagem Dart. O Flutter permite a criação de aplicativos para Mobile, Web e Desktop, garantindo uma interface visual moderna, desempenho otimizado e um desenvolvimento ágil graças ao seu recurso de Hot Reload, que facilita a visualização instantânea das mudanças no código.

## Ambiente de Desenvolvimento Integrado (IDE) usada: Visual Studio Code (VS Code)
 
A IDE escolhida para o projeto é o Visual Studio Code (VS Code). Ela possui ferramentas integradas de debug, como definição de breakpoints, inspeção de variáveis e análise da pilha de execução. Também oferece suporte nativo ao Git, permitindo realizar commits, gerenciar branches e sincronizar com repositórios remotos de forma simples e eficiente.

## **Tutorial de CRUD com Flutter** 
 
### [**FLUTTER TODO App With Hive DB, Task Management App, Hive CRUD Operation Tutorial | Flutter Tutorial**](https://www.youtube.com/watch?v=RQlhC_rDrsc)
 
**by: [Programming With FlexZ](https://www.youtube.com/@ProgrammingWithFlexZ)** 
 
**Resumo do Tutorial:**
No vídeo, é mostrado como desenvolver um aplicativo de lista de tarefas do zero, utilizando Flutter e o banco de dados Hive. O conteúdo é organizado da seguinte forma:

- Capítulo 1: Pacotes Essenciais e Estrutura de Pastas
- Capítulo 2: Construindo a Tela Inicial: Interface e Funcionalidades Principais
- Capítulo 3: Adicionando Animações: Drawer Animado e Ícones
- Capítulo 4: Sistema de Gerenciamento de Tarefas: Desenvolvimento da Tela de Tarefas e Exploração de Widgets
- Capítulo 5: Integração com Banco de Dados e Configuração de Alertas e Notificações
- Capítulo 6: Técnicas Avançadas de Interface e Operações no Banco de Dados

## Branches e Pull Request usando git e github com GitFlow

No Git, uma **branch** é uma ramificação independente usada para desenvolver e implementar novas funcionalidades e correções, sem afetar o código principal, da **branch principal**. O **GitHub** facilita a criação e o gerenciamento dessas branches de forma mais visual.

Um **pull request** (ou *merge request*) é uma requisição feita pedindo para integrar modificações feitas em uma branch ao repositório principal. Ele permite que outros membros da equipe possam fazer a revisão do código antes de dar *merge*, garantindo maior qualidade e controle no processo de desenvolvimento em equipe.

Já o **GitFlow** é um modelo de branches que organiza o fluxo de desenvolvimento em regras bem definidas. Ele propõe o uso de branches diferentes para funções diferentes:

- `main` ou `master`: contém a versão segura do projeto.
- `develop`: branch de desenvolvimento principal.
- `feature`: branch para desenvolver novas funcionalidades.
- `hotfix`: branch para correção de problemas.

Com o GitFlow, cada nova funcionalidade do projeto é desenvolvida em uma branch `feature`, que quando concluída é integrada à branch `develop` por meio de um pull request. Esse fluxo de branches garante organização, paralelismo no trabalho em equipe e um controle eficaz de versões.

## **Versionamento Semântico (SemVer)**

Versionamento Semântico é um padrão de regras para controle de versões que segue o formato `MAJOR.MINOR.PATCH`, que organiza e comunica mudanças de versões de forma padrão. Dado um número de versão do formato `MAJOR.MINOR.PATCH` (ex: 2.1.3):

- **MAJOR** é incrementado quando há mudanças incompatíveis na API.
- **MINOR** é incrementado quando funcionalidades novas são adicionadas de forma compatível.
- **PATCH** é incrementado para correções de bugs que mantêm compatibilidade.

Além disso, podem ser adicionados rótulos para:
- **Pré-lançamento**: `1.0.0-alpha`, `2.1.0-beta.2`
- **Metadados de build**: `1.0.0+exp.sha.5114f85`

Esse sistema ajuda a gerenciar dependências e garantir compatibilidade entre versões, facilitando a evolução segura dos projetos.

## **Conventional Commits**

O **Conventional Commits** é uma convenção simples para utilizar nas mensagens de commit, ela deixa o histórico de alterações mais claro e facilita automações como geração de changelog e controle de versionamento semântico.

#### **Formato da mensagem**
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]


### Tipos comuns de Conventional Commits

| Tipo        | Descrição                                                                 |
|-------------|---------------------------------------------------------------------------|
| `feat`      | Adição de uma nova funcionalidade                                         |
| `fix`       | Correção de um bug                                                        |
| `docs`      | Alterações apenas na documentação (README, comentários, etc.)            |
| `style`     | Alterações de formatação, espaçamento, ponto e vírgula, etc.             |
| `refactor`  | Refatoração de código que **não corrige bug** nem **adiciona funcionalidade** |
| `perf`      | Melhorias de desempenho                                                   |
| `test`      | Adição ou modificação de testes                                           |
| `build`     | Mudanças que afetam o sistema de build ou dependências externas          |
| `ci`        | Alterações em arquivos e scripts de integração contínua (CI)             |
| `chore`     | Tarefas diversas de manutenção, que não afetam o código de produção      |
| `revert`    | Reversão de um commit anterior                                            |

**BREAKING CHANGE** pode ser usado em qualquer tipo de commit para indicar uma mudança que quebra compatibilidade.


#### **Exemplos:**
- `feat: adiciona botão de login`
- `fix(api): corrige erro de autenticação`
- `feat!: altera formato do retorno da API`
- `chore!: remove suporte ao Node 12`  
  `BREAKING CHANGE: uso de recursos não compatíveis com Node 12`

#### **Vantagens:**
- Geração automática de changelogs
- Controle automático de versionamento com base em SemVer
- Comunicação clara das mudanças
- Facilita a colaboração em projetos

Essa convenção melhora a legibilidade do histórico de commits e padroniza o processo de desenvolvimento.

## AcademicDevFlow
Conta no  AcademicDevFlow Criada
##