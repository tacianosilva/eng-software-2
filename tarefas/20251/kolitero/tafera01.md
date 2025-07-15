# Tarefa 01 - Git e GitHub com Markdown

### NOME: Isayan Deivid Nogueira Monteiro

### Github: [kolitero](https://github.com/kolitero)

### Emial: isayannogueira@gmail.com

## Descrição do projeto:
O projeto TechFix consiste no desenvolvimento de um sistema de gestão de assistência técnica de informática, que permitirá o gerenciamento eficiente das atividades relacionadas ao reparo, manutenção e suporte técnico de equipamentos de informática. O sistema será voltado para empresas ou profissionais que oferecem serviços na área, proporcionando uma ferramenta ideal para administrar as operações do negócio. Contará com funcionalidades como controle de clientes, controle de ordens de serviço, emissão de relatórios e um controle de contas a receber.

- [techFix-backend](https://github.com/quirinof/techFix-backend.git)
- [techFix-frontend](https://github.com/quirinof/techFix-frontend.git)

## Equipe:

- Matheus Quirino
- Halyson Santos
- Artur Morais
- Isayan Deivid

## Linguagens de programação:

JavaScript é uma linguagem criado origialmente para deixar paginas webs mais dinamicas.\
TypeScript é um superconjunto sintático estrito de JavaScript,que a adoção ajudara imensamente a equipe.

experiencia:a equipe ja tem experiencia desde p.web pelo curso de Sistemas de informação da UFRN, alem de projetos proprios.

## framework:
 usaremos Next.js que é um framework React para construção de aplicações web e sites dinâmicos com renderização do lado do servidor (SSR) e Express.js que é um framework minimalista para Node.js, facilitando a criação de APIs e servidores.\
 tambem usaremos prisma como ORM sendo o banco de dados
 um PostgreSQL

 ## idle:
 usaremos visual studio code e suas extensoes



## Tutoriais

[CRUD em next.js - para iniciantes](https://youtu.be/iJejohAs9EY?si=n4rTXfRdAr9vxXN2)

[CRUD RestAPI em node, express, postgres e docker](https://youtu.be/TYB-Lz8YGFk?si=ae1uGVRyQTUWahph)

[Aplicação web fullstack usando node, next, express, prisma, postgres e docker](https://www.youtube.com/live/NaqNk2TbeRE?si=q308hzY3aZNWkqTY)

## Branch e Pull Request (ou merge request)
No GitFlow, branches são usadas para organizar o desenvolvimento, com branches como main, develop, feature, release e hotfix. Um Pull Request (ou Merge Request) é a solicitação para mesclar as alterações de uma branch para outra, sendo revisado antes de ser integrado. GitFlow ajuda a estruturar o fluxo de trabalho, garantindo uma integração contínua e controlada no projeto.

## versionamento 

O versionamento semântico é um padrão de atribuição de versão de software que estabelece que o número de versão de um software será composto por três partes separadas por pontos: MAJOR.MINOR.PATCH. Cada parte tem um significado específico:

MAJOR: Incrementado quando são feitas alterações incompatíveis na API.

MINOR: Incrementado quando funcionalidades são adicionadas de forma compatível com versões anteriores.

PATCH: Incrementado quando correções de bugs são feitas de forma compatível com versões anteriores.

Por exemplo:

```
1.2.1
```

### Conventional commits

Conventional commits são convenções adotas as mensagens de commits para deixalas de fácil compreensão e consistentes.

Alguns exemplos de tipo:

- feat: para novas funcionalidades
- fix: para correção de bugs
- docs: para alterações na documentação
- style: para alterações que não afetam o significado do código (formatação, pontuação, etc.)
- refactor: para refatorações de código
- test: para adição ou modificação de testes
- chore: para tarefas de build, configuração, etc.

#### exemplo 

```bash
fix(pagina de login): background invertido
```