# Tarefa 01 - Git e GitHub com Markdown

Nome: Mateus Dantas de Oliveira<br>
Github: mtzdantas<br>
E-mail: mateus.dantas.125@ufrn.edu.br

## Informações sobre o projeto

### Título:
Sistema de gerenciamento da Bonelaria Militar

### Descrição:
É um sistema para gerenciar a produção de artigos militares, permitindo cadastro de produtos, costureiras e controle de materiais, além de automatizar o cálculo de pagamentos.

### Integrantes do grupo:
- Bruno Costa Souto  
- Cláudio Pereira Teixeira de Araújo  
- Danilo Gabriel de Medeiros Brito  
- Felipe Augusto Araújo da Cunha  
- Mateus Dantas de Oliveira  

### Repositório do projeto:
https://github.com/mtzdantas/sistema-bonelaria.git

## Linguagem de programação usada

Para o front-end o projeto será desenvolvido em Dart, uma linguagem que foi criada com o objetivo de ser uma linguagem moderna, produtiva e com alto desempenho, voltada principalmente para aplicações front-end, tanto para web quanto para mobile e desktop. <br>

A equipe tem uma certa facilidade para trabalhar com Dart pois todos já utilizamos dessa ferramenta para desenvolvimento de interfaces na disciplina de POO.

## Framework

O framework utilizado será o Flutter, framework esse que trouxe muito destaque para o Dart. Com ele, é possível criar apps com interface gráfica nativa para Android, iOS, Web e Desktop, a partir de uma única base de código.

## IDE

A IDE escolhida foi o Visual Studio Code. Ele é um editor de código-fonte leve, gratuito e de código aberto. Sua vasta coleção de extensões o torna uma IDE muito completa e uma das mais utilizadas atualmente.

**Debug:**  
O VS Code possui um sistema de debugging integrado muito eficiente, oferecendo funcionalidades como:
- Breakpoints (pontos de parada);
- Step Over / Step Into / Continue (controle linha a linha);
- Watch e Variables (monitoramento de variáveis em tempo real);
- Call Stack (pilha de chamadas);
- Terminal integrado (execução direta no editor).

**Controle de versão:**  
O VS Code tem suporte nativo ao Git, o que facilita bastante o controle de versão e a integração com o GitHub. Ele permite:
- Visualizar mudanças nos arquivos (diffs);
- Realizar commits diretamente pela interface;
- Criar e alternar entre branches facilmente;
- Executar push, pull e fetch com apenas um clique;
- Integrar com o GitHub para criação de Pull Requests, visualização de issues, entre outros.

## Tutorial

**Link:** https://www.youtube.com/watch?v=qyP1NOXT9GU

O vídeo apresenta um tutorial completo sobre como implementar operações CRUD (Criar, Ler, Atualizar, Excluir) em um aplicativo Flutter utilizando o Firebase Firestore como banco de dados. Por meio de um projeto prático e simples, ideal para iniciantes, o instrutor ensina passo a passo como criar formulários de cadastro de empregados, integrar Firebase tanto no Android quanto no iOS, exibir dados em tempo real com StreamBuilder, e realizar atualizações e exclusões de registros com feedback visual no app. O conteúdo é focado em boas práticas, organização de código e oferece orientações claras para quem está começando no desenvolvimento mobile com Flutter e Firebase.

## Branches e GitFlow

**Branches:** O uso de branches para o versionamento de código é essencial para organizar o trabalho e permitir que várias pessoas colaborem simultaneamente sem conflitos. Uma branch é basicamente uma linha separada de desenvolvimento, permitindo criar novas funcionalidades, corrigir bugs ou testar ideias sem afetar o código principal. <br>

**Gitflow:** O GitFlow é uma estratégia de gerenciamento de branches muito popular, especialmente em equipes que seguem boas práticas de versionamento e entrega contínua. Ele define um modelo claro e organizado de como criar, testar e integrar código. As principais branches no GitFlow são:
- main ou master: Contém o código em produção.
- develop: Contém o código de desenvolvimento (última versão testada, mas ainda não liberada em produção).
- feature/*: Usada para desenvolver novas funcionalidades. Parte da develop.
- release/*: Usada para preparar uma nova versão. Sai da develop e depois vai para main e develop.
- hotfix/*: Corrige erros críticos diretamente na main, e depois é fundida também com a develop

## Versionamento Semântico

O Versionamento Semântico é uma convenção para definir versões de software de forma clara e padronizada, facilitando a compreensão sobre a natureza das mudanças em cada atualização. Ele utiliza o formato MAJOR.MINOR.PATCH, por exemplo: 2.4.1.

## Conventional Commits

Conventional Commits é uma convenção para escrever mensagens de commit padronizadas e informativas. Ela facilita o entendimento da história do projeto, melhora a automação de processos (como geração de changelogs e versionamento) e ajuda na colaboração em equipe. <br>
A mensagem de commit segue o padrão "tipo(escopo opcional): descrição". Alguns exemplos de uso:
- `feat: adiciona função de login com autenticação`
- `fix: corrige erro de validação no formulário`
- `docs: atualiza README com instruções de instalação`