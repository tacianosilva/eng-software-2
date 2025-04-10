# Tarefa 01 - Git e GitHub com Markdown

_Alec Can Yalcin, AlecYalcin, alecyalcin@gmail.com_

## Projeto KNN-Barber-App

_Software de gerenciamento de atendimentos_

Equipe:

- Alec Can Yalçin
- Denner Bismarck
- Stênio Eric
- Júlio César
- Guilherme de Medeiros

Repositório: <https://github.com/AlecYalcin/KNN-Barber-App>

### Stacks

#### Python

Linguagem de programação robusta e simples de se utilizar. Com o padrão de arquitetura DDD, se torna de fácil manutenção, adição de features e refatoração. Todos do projeto tem ampla experiência com Python.

#### javascript

Para o visual, será utilizado React.js com Javascript. Fácil de estruturar páginas e componentes do sistema e de ampla manutenção, sendo uma das bibliotecas mais utilizadas atualmente.

#### FastAPI

Embora não seja uma framework, será a biblioteca de gerenciamento de APIs para a comunicação entre as diferentes interfaces do sistema. FastAPI é simples e dinâmico, e pelo escopo do projeto se mostra ideal

## Branches e Pull Request

No desenvolvimento de proejtos com _GitFlow_, é importante a utilização de _branchs_ para diferenciar progressões do projeto. As branchs são uma forma de atomizar _features_,_consertos de bugs_,_refatoração_,_escrita de documentos_ e muito mais

E para manter o projeto coeso sem que todos os participantes enviem uma atualização diretamente na _branch principal_, o _pull request_ é uma ótima escolha. Ao fornecer uma ferramenta que faz todos visualizarem quais mudanças foram feitas e procurar por aprovação, se tem uma forte gestão de projetos.

### Versionamento Semântico

A fim de garantir que todos os envolvidos com o projeto (Criadores ou Usuários) estejam de acordo com as atualizações, elas comumente são organizadas em _releases_. Tendo até três numerações diferentes, cada uma apresenta uma informação crucial.

- **x.yy.zzz**. O _x_ indica a versão principal da _release_, nessa versão nós tmeos funcionalidades completas e comuns entre todos as alterações dessa mesma versão, ou seja, os usuários podem esperar _constância de propriedades do sistema_. Em _yy_ temos o versionamento secundário, são modificações menores da _release_ que fazem alguma diferença mas que não são suficientes para se considerar outra _release_, nesse tipo de versionamento os usuários podem esperar _features_ e _correções de desempenho_. Já _yyy_ é a versão menor, ela representa minúsculas modificações no sistema e apenas informam sobre correções menores como _bugfixes, chores e documentação_.

### Conventional Commits

Como forma de facilitar a identificação de _commits_ realizados no sistema, foi organizado um padrão de comentários para os _commits_. Esse padrão utiliza um identificador para entender o que o commit está realizando e uma descrição curta dele. Alguns dos identificores são:

- feat: quando o commit adiciona novas funcionalidades no sistema.
- fix: quando o commit corrige problemas do sistema.
- chore: quando há mudanças pequenas como nomes de variável, referências http, reescrita de comentários...
- docs: criação ou atualização da documentação do sistema.
- test: criação de testes ou realização de testes
