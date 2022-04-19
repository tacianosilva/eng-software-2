# Tarefas da Turma de Engenharia de Software II - 2022.1

## Nome: Rauan Meirelles Dantas de Araujo
## GitHub: [rauan-meirelles](https://github.com/rauan-meirelles)
## E-mail: rauan.meirelles95@gmail.com
## Produto para gestão de clínica médica
Descrição: O produto deve dar suporte à gestão de clínica onde trabalha uma equipe de médicos. Será usado pelos recepcionistas para marcação de consultas e também pelos médicos, para registro do histórico dos pacientes. Deve ser controlada a recepção de resultados de exames que sejam enviados diretamente dos laboratórios para os médicos; por opção do médico, estes resultados podem ser entregues aos pacientes, ou guardados na clínica para consulta posterior.
## Equipe
- [Adson Matheus Santos Brito](https://github.com/adson-matheus)
- [Allan Gabriel Almeida Oliveira](https://github.com/allangbr)
- [Joan de Azevedo Medeiros](https://github.com/joanmdrs) (Primeiro Gerente)
- [Rauan Meirelles Dantas De Araujo](https://github.com/rauan-meirelles)
- [Wesley Vitor Silva De Morais](https://github.com/WesleyVitor)
## [Repositório do Projeto](https://github.com/joanmdrs/project-eng-2)

## Linguagem usada e domínio da equipe
JavaScript: É uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.

    Membro          | Domínio         | Experiência
    --------------- | --------------- | ---------------
    Allan Gabriel   | Intermediário   |   1 ano
    Joan Medeiros   | Intermediário   |   1 ano
    Rauan Meirelles | Iniciante       |   1 ano
    Adson Matheus   | Iniciante       |   1 ano
    Wesley Morais   | Intermediário   |   1 ano

# Frameworks que serão utilizados
## Front-end
ReactJS: Biblioteca livre para construção de interfaces utilizando componentes que é mantida pela Meta.
React: É baseado no gerenciamento de estados e renderização desses estados na DOM (pode ser usado como base em desenvolvimento single-page, mobile e server-rendered.). 
## Back-end
Express: Framework responsável pela criação de uma api rest conectando ao banco de dados usando o ORM Prisma.

# IDE utilizada
Visual Studio Code: muito usada em todo o mundo e com bastantes extensões. É um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.

# Tutoriais 

## Playlist I
* Parte 1:  https://www.youtube.com/watch?v=T8mqZZ0r-RA
* Parte 2: https://www.youtube.com/watch?v=3YrOOia3-mo&list=WL&index=26
* Parte 3:  https://www.youtube.com/watch?v=_S2GKnFpdtE

### Descrição
Nos vídeos acima, o Pedro (dono do canal) faz a demonstração de como se fazer um CRUD utilizando ReactJS, NodeJS Express e MySQL. Dividindo o CRUD em 3 partes, sendo a parte um a criação e configuração do ambiente  de trabalho, a segunda parte consiste no desenvolvimento da parte de Create e Read, e a terceira parte o desenvolvimento do Update e Delete.

## Playlist II
* Parte 1: https://youtu.be/e0He6sCiQT8 
* Parte 2: https://youtu.be/5_9rvyT9cg4
* Parte 3: https://youtu.be/vzPsUWLprAw

### Descrição
No decorrer dos três vídeos, o autor demonstra a criação de um CRUD utilizando a biblioteca ReactJS no Front-End, e utilizando o Express, o NodeJS e o MySQL no Back-End. O autor cria desde o formulário de inputs, a configuração das rotas, a conexão com o banco  e a ligação entre as camadas de Front-End e Back-End. 

# Branches e Pull Request 

**Branche:** em tradução literal, significa “ramo”. No mundo da programação, ela tem o mesmo significado: uma branch é uma ramificação do seu projeto. Os repositórios no GitHub funcionam como uma árvore. Quando criamos um repositório, ele automaticamente é iniciado com a branch main, que é equivalente ao tronco da sua árvore, ou seja, é a parte principal do seu projeto. As próximas branches são secundárias e, portanto, ramos da branch master. Em relação ao GitFlow, o mesmo é um modelo de conjunto de diretrizes que as equipes de desenvolvimento podem seguir para organizar as branches, e por esse motivo ele estabelece padrões de nomes e funções para cada tipo de branch, são eles: master, develop, feature/*, hotfix e release. 

**Pull Request:** Um pull-request  foi projetado para ajudar a manter as alterações separadas do projeto principal, aumentar a comunicação interna (e potencialmente externa) e permitir uma depuração mais eficaz. Em primeiro lugar, os Pull Requests só funcionam quando um projeto é um único repositório público. Para fazer alterações em um único repositório, os usuários criam branches (partes separadas de código) para testar adições ou alterações. Uma vez que uma branch tenha sido revisada e aprovada, ela pode ser incorporada no restante do código usando um sistema de controle de versão distribuída (DVCS) para enviar as solicitações de Pull Request. Com relação ao GitFlow, um pull request é criado pelos desenvolvedores de suas respectivas branches de recursos para mesclar código com a branch de desenvolvimento. Normalmente, uma solicitação pull é criada após a conclusão dos recursos, e esta solicitação pull é mesclada com a ramificação de desenvolvimento pelo revisor. 

# Versionamento Semântico

O Versionamento Semântico nada mais é do que um conjunto de regras e particularidades que mostram como os números das versões de um software foram desenvolvidos. Em outras palavras, a quantidade de mudanças pelas quais o software passou e quais alterações foram compatíveis ou incompatíveis com a versão anterior.

# Conventional Commits

O Conventional Commit, como o próprio nome já diz, utiliza uma convenção simples para usar nas mensagens de commit. Ao olhar para tal mensagem, o responsável por revisar o código sabe do que se trata imediatamente. Possui palavras chaves, como:

    fix: commit que soluciona um problema, bug.
    feat: commit que inclui uma nova funcionalidade.
    docs: um commit que irá mudar algo na documentação do projeto.
    test: commit de testes.
