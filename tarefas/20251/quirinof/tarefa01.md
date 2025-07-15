# Tarefa 01 - Git e GitHub com Markdown

### Nome: Matheus Quirino Fernandes Figueiredo

### Github: [quirinof](https://github.com/quirinof)

### Email: matheusquirinof@gmail.com

### Descrição do projeto:

O projeto **TechFix** consiste no desenvolvimento de um sistema de gestão de assistência técnica de informática, que permitirá
o gerenciamento eficiente das atividades relacionadas ao reparo, manutenção e suporte técnico de equipamentos de informática.
O sistema será voltado para empresas ou profissionais que oferecem serviços na área, proporcionando uma ferramenta ideal para
administrar as operações do negócio. Contará com funcionalidades como controle de clientes, controle de ordens de serviço,
emissão de relatórios e um controle de contas a receber.

- [techFix-backend](https://github.com/quirinof/techFix-backend.git)
- [techFix-frontend](https://github.com/quirinof/techFix-frontend.git)

### Equipe:

- Matheus Quirino
- Halyson Santos
- Artur Morais
- Isayan Deivid

### Linguagens de programação:

#### TypeScript e JavaScript

O **JavaScript**(JS) é uma linguagem usada para dar lógica e interação às páginas web. Ela possui tipagem dinâmica e é baseada em orientação a objeto, poderá ser utilizada pontualmente no projeto, em alguma configuração ou script de automação. Já o **TypeScript** (TS) foi criado com o objetivo de incluir recursos que não estão presentes no JS, possuindo vantagens como tipagem estática para redução de erros, melhoria no autocomplemento e documentação em tempo real, além de facilitar na manutenção de código. O TS será predominante em todo o projeto.

### Frameworks:

#### Next e Express

O **Next.js** é um framework React usado para construção de aplicações web com renderização híbrida (SSR, SSG e CSR). Já o **Express.js** é um framework minimalista para a plataforma Node.js que simplifica a criação de APIs RESTful e se comunica diretamente com o banco de dados, que no nosso caso será o **PostgreSQL**. Por fim, para a comunicação com o banco de dados será utilizado o **Prisma ORM**.

### IDE

#### Visual Studio Code

As ferramentas de debug do **vscode** podem variar de acordo com a tecnologia, entretanto algumas bases são fixas disponibilizada pela IDE:

- Estabelecendo Breakpoints: Pausando a Execução no Ponto Certo.
- Utilizando a Console Integrada: Inspeção Dinâmica de Variáveis.
- Watch e Expressões: Monitorando Variáveis em Tempo Real.

O vscode tem integração nativa com Git, mas também suporta outros sistemas (como SVN e Mercurial) via extensões.

- **Git Integrado** - source control, commits diretos na interface, branch management, etc;

- Extensões para Git - gitlens (histórico detalhado), gitgraph (visualização de branchs e merges);

- Integração com GitHub - pull requests diretos, clonar repositórios, ações (push, pull, fetch).

### Tutoriais

[CRUD em next.js - para iniciantes](https://youtu.be/iJejohAs9EY?si=n4rTXfRdAr9vxXN2)

[CRUD RestAPI em node, express, postgres e docker](https://youtu.be/TYB-Lz8YGFk?si=ae1uGVRyQTUWahph)

[Aplicação web fullstack usando node, next, express, prisma, postgres e docker](https://www.youtube.com/live/NaqNk2TbeRE?si=q308hzY3aZNWkqTY)

### Branch e Pull Request (ou merge request)

No Git, uma **branch** é uma linha independente de desenvolvimento, permitindo que você trabalhe sem afetar o código principal. O GitFlow, em particular, define uma estrutura para o gerenciamento de branches em um projeto Git. Ele sugere a criação de diferentes tipos de branches, como "feature", "release", "hotfix", entre outros, para isolar diferentes tipos de trabalho e facilitar a colaboração entre membros da equipe. Por exemplo, uma equipe pode criar uma branch de "feature" para trabalhar em uma nova funcionalidade, enquanto a branch principal ("master" ou "main") permanece estável.

Um **pull request** (ou merge request) é uma solicitação para que as mudanças feitas em um branch sejam incorporadas ao branch principal do repositório. No GitFlow, quando uma nova funcionalidade é desenvolvida em uma branch de "feature", por exemplo, e está pronta para ser integrada ao código principal, um membro da equipe cria um pull request para revisão. Isso permite que outros membros da equipe revisem as mudanças, forneçam feedback e, se tudo estiver correto, realizem o merge das alterações na branch principal. O GitHub fornece uma interface amigável para criar e revisar pull requests, incluindo recursos como comentários, revisões de código e integração contínua.

### Versionamento semântico

O versionamento semântico é um padrão de atribuição de versão de software que estabelece que o número de versão de um software será composto por três partes separadas por pontos: MAJOR.MINOR.PATCH. Cada parte tem um significado específico:

MAJOR: Incrementado quando são feitas alterações incompatíveis na API.
MINOR: Incrementado quando funcionalidades são adicionadas de forma compatível com versões anteriores.
PATCH: Incrementado quando correções de bugs são feitas de forma compatível com versões anteriores.

Por exemplo:

```
2.0.0
```

### Conventional commits

Conventional commits são convenções adotas as mensagens de commits para deixalas de fácil compreensão e consistentes.

```bash
<typo>[escopo]: <descrição>
```

Alguns exemplos:

- feat: para novas funcionalidades
- fix: para correção de bugs
- docs: para alterações na documentação
- style: para alterações que não afetam o significado do código (formatação, pontuação, etc.)
- refactor: para refatorações de código
- test: para adição ou modificação de testes
- chore: para tarefas de build, configuração, etc.

Seguir essa convenção ajuda na compreensão do histórico de alterações do projeto e na automação de tarefas relacionadas ao desenvolvimento, como a geração automática de notas de lançamento (changelogs).
