# Tarefa 01 - Git e GitHub com Markdown

**Nome:** Halyson Santos de Araújo  
**GitHub:** [HalysonSA](https://github.com/HalysonSA)  
**E-mail:** halysonsa@gmail.com

## Projeto na Disciplina

### Título: TechFix

**Descrição:** O projeto consiste no desenvolvimento de um sistema de gestão de
assistência técnica de informática, que permitirá o gerenciamento eficiente das atividades
relacionadas ao reparo, manutenção e suporte técnico de equipamentos e sistemas de
informática. O sistema será voltado para empresas ou profissionais que oferecem serviços
na área, proporcionando uma ferramenta ideal para administrar as operações do negócio.
Contará com funcionalidades como controle de clientes, controle de ordens de serviço,
emissão de relatórios e um controle de contas a receber.

**Equipe:** Halyson Santos, Matheus Quirino, Artur Morais e Isayan Deivid

**Repositório Back:** [GitHub - TechFix](https://github.com/quirinof/techFix-backend)
**Repositório Front:** [GitHub - TechFix](https://github.com/quirinof/techFix-frontend)

## Linguagem de Programação

O projeto utilizará **JavaScript** e **TypeScript**. A equipe já possui conhecimento básico da linguagem, incluindo manipulação de dados, estruturação de código e utilização de bibliotecas populares como React e Express.

## Framework

O frontend será desenvolvido com **Next.js**, um framework baseado em React que permite renderização híbrida (SSR e SSG). No backend, utilizaremos **Express.js**, um framework minimalista para Node.js, permitindo a criação de APIs rápidas e escaláveis. Para comunicação com o banco de dados **PostgreSQL**, usaremos o **Prisma ORM**, facilitando consultas e manutenção.

## IDE e Ferramentas

A equipe utilizará o **Visual Studio Code (VSCode)** como IDE. O VSCode possui suporte integrado para **debugging**, permitindo a inspeção de variáveis e breakpoints diretamente na interface. Além disso, conta com integração com o **Git**, facilitando controle de versão, commits e pull requests sem precisar sair do editor.

## Tutorial CRUD

**Link:** [Tutorial CRUD com Express e PostgreSQL](https://www.youtube.com/watch?v=TYB-Lz8YGFk&t=180s)  
**Descrição:** O tutorial ensina a criar uma aplicação CRUD utilizando **Express.js** no backend e gerenciar os dados no PostgreSQL. Ele aborda a configuração do ambiente, a definição do banco de dados e a implementação das rotas de API.

## Branches e Pull Requests no GitFlow

O GitFlow é uma metodologia de branching para organizar o desenvolvimento de software. Nele, utilizamos:

- **Branch `main`**: Versão estável e pronta para produção.
- **Branch `develop`**: Contém o código em desenvolvimento.
- **Feature branches (`feature/nome-da-feature`)**: Criadas para desenvolver novas funcionalidades.
- **Release branches (`release/vX.Y.Z`)**: Utilizadas para preparar versões antes de serem lançadas.
- **Hotfix branches (`hotfix/nome-do-hotfix`)**: Criadas para corrigir bugs críticos em produção.

Os **Pull Requests (PRs)** são usados para revisar e integrar alterações. No GitHub, podemos criar um PR para mesclar uma feature branch na develop ou um hotfix na main, garantindo qualidade e revisão do código.
