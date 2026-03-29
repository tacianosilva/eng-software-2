# Tarefas da Turma de Engenharia de Software II - 2022.1

## Nome: Allan Gabriel Almeida Oliveira
## GitHub: [allangbr](https://github.com/allangbr)
## E-mail: allanalmeidagbr@gmail.com

# Produto para gestão de clínica médica
## Equipe
- [Adson Matheus Santos Brito](https://github.com/adson-matheus)
- [Allan Gabriel Almeida Oliveira](https://github.com/allangbr)
- [Joan de Azevedo Medeiros](https://github.com/joanmdrs) (Primeiro Gerente)
- [Rauan Meirelles Dantas De Araujo](https://github.com/rauan-meirelles)
- [Wesley Vitor Silva De Morais](https://github.com/WesleyVitor)
## [Repositório do Projeto](https://github.com/joanmdrs/project-eng-2)

## Linguagem Utilizada
<p> JavaScript (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js,  Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional).</p>

Membro          | Domínio       | Experiência
:--------------:|:-------------:|:-------:
Adson Matheus   | Iniciante     | 1 ano
Allan Gabriel   | Intermediário | 3 anos
Joan Medeiros   | Intermediário | 1 ano
Rauan Meirelles | Iniciante     | 1 ano
Wesley Morais   | Intermediário | 1 ano

## Framework Utilizado
<p> Na parte de Frontend iremos utilizar a biblioteca livre chamada ReactJS para construção de interfaces utilizando componentes que é mantida pela Meta. React pode ser usado como base em desenvolvimento single-page, mobile e server-rendered. React é baseado no gerenciamento de estados e renderização desses estados na DOM. No lado do Backend vamos utilizar o framework Express que será responsável de criar uma api rest conectando ao banco de dados usando o ORM Prisma.</p>

## Tecnologias utilizadas 
### Front-End: 
- ReactJS
### Back-End:
- NodeJS, Express, Prisma, NodeMon e Concurrently

### Banco de Dados:
- MySQL - Criado utilizando Docker

## IDE Utilizada
<p> A IDE utilizada para o desenvolvimento do projeto será o Visual Studio Code, muito usada em todo o mundo e com bastantes extensões. Dentro do VSCode, existe uma guia para testes na qual é possível depurar o código, adicionar breakpoints e verificar se as funções estão corretas.</p>
<p> Além disso, o VSCode possui integração com o GitHub, ou seja, é possível fazer commits, dar push, pull, merge, criar pull requests de dentro do software. É uma plataforma que oferece diversas vantagens e acelera o processo de desenvolvimento.</p>

## Links de Tutoriais Usados Para Fazer Um CRUD Na Tecnologia Escolhida (MySQL):
### Vídeo 1:
#### OBS: O vídeo foi dividido em 3 partes, ou seja, 3 links:
- [Parte 01](https://youtu.be/T8mqZZ0r-RA)
- [Parte 02](https://youtu.be/3YrOOia3-mo)
- [Parte 03](https://youtu.be/_S2GKnFpdtE)

### Descrição:
<p> Nos vídeos acima, o Pedro (dono do canal) faz a demonstração de como se fazer um CRUD utilizando ReactJS, NodeJS Express e MySQL. Dividindo o CRUD em 3 partes, sendo a parte um a criação e configuração do ambiente  de trabalho, a segunda parte consiste no desenvolvimento da parte de Create e Read, e a terceira parte o desenvolvimento do Update e Delete.</p>

### Vídeo 2:
#### OBS: O vídeo foi dividido em 3 partes, ou seja, 3 links:
- [Parte 01](https://youtu.be/e0He6sCiQT8 )
- [Parte 02](https://youtu.be/5_9rvyT9cg4)
- [Parte 03](https://youtu.be/vzPsUWLprAw)

### Descrição:
<p> No decorrer dos três vídeos, o autor demonstra a criação de um CRUD utilizando a biblioteca ReactJS no Front-End, e utilizando o Express, o NodeJS e o MySQL no Back-End. O autor cria desde o formulário de inputs, a configuração das rotas, a conexão com o banco  e a ligação entre as camadas de Front-End e Back-End.</p>

## Branche 
<p> Em tradução literal, significa “ramo”. No mundo da programação, ela tem o mesmo significado: uma branch é uma ramificação do seu projeto. Os repositórios no GitHub funcionam como uma árvore. Quando criamos um repositório, ele automaticamente é iniciado com a branch main, que é equivalente ao tronco da sua árvore, ou seja, é a parte principal do seu projeto. As próximas branches são secundárias e, portanto, ramos da branch master. Em relação ao GitFlow, o mesmo é um modelo de conjunto de diretrizes que as equipes de desenvolvimento podem seguir para organizar as branches, e por esse motivo ele estabelece **padrões de nomes** e **funções** para cada tipo de branch, são eles: master, develop, feature/*, hotfix e release.</p>

## Pull Request
<p> Um pull-request  foi projetado para ajudar a manter as alterações separadas do projeto principal, aumentar a comunicação interna (e potencialmente externa) e permitir uma depuração mais eficaz. Em primeiro lugar, os Pull Requests só funcionam quando um projeto é um único repositório público. Para fazer alterações em um único repositório, os usuários criam branches (partes separadas de código) para testar adições ou alterações. Uma vez que uma branch tenha sido revisada e aprovada, ela pode ser incorporada no restante do código usando um sistema de controle de versão distribuída (DVCS) para enviar as solicitações de Pull Request.</p>
<p> Com relação ao GitFlow, um pull request é criado pelos desenvolvedores de suas respectivas branches de recursos para mesclar código com a branch de desenvolvimento. Normalmente, uma solicitação pull é criada após a conclusão dos recursos. Uma solicitação pull é mesclada com a ramificação de desenvolvimento pelo revisor.</p>

## Versionamento Semântico
<p> O Versionamento Semântico nada mais é do que um conjunto de regras e particularidades que mostram como os números das versões de um software foram desenvolvidos. Em outras palavras, a quantidade de mudanças pelas quais o software passou e quais alterações foram compatíveis ou incompatíveis com a versão anterior.</p>

## Conventional Commits
<p> O Conventional Commit, como o próprio nome já diz, utiliza uma convenção simples para usar nas mensagens de commit. Ao olhar para tal mensagem, o responsável por revisar o código sabe do que se trata imediatamente. Possui palavras chaves, como:</p>

- fix: commit que soluciona um problema, bug;
- feat: commit que inclui uma nova funcionalidade;
- docs: um commit que irá mudar algo na documentação do projeto;
- test: commit de testes.
