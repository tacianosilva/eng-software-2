# Tarefa 01 - Git e GitHub com Markdown

* Nome: Felipe David Pereira dos Santos
* Usuário Github: [felipedavid](https://github.com/felipedavid)
* E-mail: felipedavid.huh@gmail.com
#

## Sushi roll - Aplicação para avaliação de jogos

* Descrição: Aplicação que permite usuários avaliar jogos e consultar opinião de outros usuários e críticos sobre jogos.
#
| Equipe de desenvolvimento | Github
|----  | ---- |
| Felipe David Pereira dos Santos | felipedavid
| Brenno Victor Alves de Medeiros | brennovictor
| Lucas Vinícius Oliveira Souza | Souza-Lucas
| Relyson Medeiros de Lucena | RelysonM


* Link do Repositório: [SABIDO](https://github.com/felipedavid/sushi_roll)

## Linguagem de Programção
O projeto será escrito em Go. Uma linguagem procedural, compilada, multi-plataforma, desenvolvida pela Google por pessoas como Ken Thompson (Criador do Unix e B) e Rob Pike(Criador do UTF-8) com o objetivo de substituir linguagens como C++ e Java em projetos que estavam sofrendo com uma explosão de complexidade. Os pontos fortes da linguagem são sua simplicidade, seu modelo de concorrência, geração de binários estáticos, e standard library rica.

O time não tem experiência na linguagem. Porém já possuem experiência prévia em C. Uma das linguagens mais influentes na criação de Go.

## Framework
Não será utilizado nenhum framework. Iremos utilizar a biblioteca padrão e third-party packages para funcionalidades não fornecidas nela.

## IDE
Não será forçado o uso de um ambiente específico. A única coisa que será requisitada é um editor de texto que consiga rodar o "go fmt" assim que o arquivo for salvo e que tenha uma interface para iteração com o Delve (Go debugger).

## Tutorial Crud
* Link: https://medium.com/baixada-nerd/criando-um-crud-simples-em-go-3640d3618a67
O tutorial demonstra como criar um crud completinho usando apenas a standard library do Go, dés da manipulação do banco de dados, e processamento de templates.

## Branches e Pull request 

### Branch Main/Master
Principal branch, contém associadas a ela as versões de publicação para facilitar o acesso e a busca por versões mais antigas. Também entendemos que é o espelho do programa que está no ar, já que o último código dessa branch deve sempre estar em produção. Além do mais, a única maneira de interagir com essa branch é através de uma Hotfix ou de uma nova Release.

### Branch Develop
É uma das principais branches e serve como uma linha com os últimos desenvolvimentos. Como visto na imagem, é uma cópia da branch principal contendo algumas funcionalidades que ainda não foram publicadas. Sendo assim, é a base para o desenvolvimento de novas features.

### Branch Feature
Uma das branches temporárias e auxiliares do nosso fluxo, sendo a branch que contém uma nova funcionalidade específica para a nossa aplicação. Nela temos a convenção do nome feature/nome_do_recurso que será utilizada no nosso fluxo de trabalho. Não podemos esquecer que toda nova Feature começa e termina obrigatoriamente a partir da develop.

### Branch Hotfix
Também é uma branch auxiliar e temporária, utilizada quando ocorre algum problema no ambiente de produção no qual a correção deve ser feita imediatamente. Conseguimos com isso solucionar o erro e fazer a mesclagem da solução para as branches main/master e develop para que não ocorra a perda do nosso código.

### Branch Release
Por fim, a branch de lançamento do nosso programa. Nela unimos o que está pronto em nossa branch de desenvolvimento e “jogamos” para a branch principal. No mais, é criado uma nova versão etiquetada no nosso projeto para que possamos ter um histórico completo do desenvolvimento.


* * * *

### Pull Request

Ao  criar um pull request , você adiciona uma breve visão geral do seu recurso, seleciona o branch para o qual o código precisa ser mesclado e seleciona o responsável que o revisará.
Uma vez criado, está aberto para discussão ou modificações.
Às vezes, ocorrem conflitos após a criação de uma solicitação pull e você deve resolver esses conflitos. Possíveis causas de conflitos são discutidas posteriormente neste artigo.
Normalmente, a pessoa designada revisa o código, mas não é obrigatório que apenas o responsável faça a revisão. Qualquer membro da equipe pode participar do processo de revisão e dar seu feedback ou discutir possíveis modificações no código.
Quaisquer comentários ou modificações são adicionados na forma de comentários próximos à linha de código.
O desenvolvedor resolve comentários e responde ao revisor.
Esse processo continua até que todos os comentários sejam resolvidos.
Depois que todas as discussões são resolvidas, o código é mesclado com a ramificação que foi selecionada quando a solicitação pull foi criada

* * *

## Versionamento Semântico

Sem a aderência a algum tipo de especificação formal, os números de versão são essencialmente inúteis para gerenciamento de dependências. 
Dando um nome e definições claras às ideias acima, fica fácil comunicar suas intenções aos usuários de seu software. 
Uma vez que estas intenções estão claras, especificações de dependências flexíveis (mas não tão flexíveis) finalmente podem ser feitas. 
Como CaminhaoBombeiros utiliza algumas funcionalidades que foram inicialmente introduzidas na versão 3.1.0, você pode especificar, com segurança, a dependência da Escada como maior ou igual a 3.1.0 porém menor que 4.0.0. 
Agora, quando Escada versão 3.1.1 e 3.2.0 estiverem disponíveis, você poderá lança-los ao seu sistema de gerenciamento de pacote e saberá que eles serão compatíveis com os softwares dependentes existentes. 
Como um desenvolvedor responsável você irá, é claro, querer certificar-se que qualquer atualização no pacote funcionará como anunciado. 
O que você pode fazer é deixar o Versionamento Semântico lhe fornecer uma maneira sensata de lançar e atualizar pacotes sem precisar atualizar para novas versões de pacotes dependentes, salvando-lhe tempo e aborrecimento.

* * *

##  Conventional Commits

A especificação do Conventional Commits é uma convenção simples para utilizar nas mensagens de commit. Ela define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas baseadas na especificação. Esta convenção se encaixa com o SemVer, descrevendo os recursos, correções e modificações que quebram a compatibilidade nas mensagens de commit.

O commit contém os seguintes elementos estruturais, para comunicar a intenção ao utilizador da sua biblioteca:

* fix: um commit do tipo fix soluciona um problema na sua base de código (isso se correlaciona com PATCH do versionamento semântico).

* feat: um commit do tipo feat inclui um novo recurso na sua base de código (isso se correlaciona com MINOR do versionamento semântico).

* BREAKING CHANGE: um commit que contém no rodapé opcional o texto BREAKING CHANGE:, ou contém o símbolo ! depois do tipo/escopo, introduz uma modificação que quebra a compatibilidade da API (isso se correlaciona com MAJOR do versionamento semântico). Uma BREAKING CHANGE pode fazer parte de commits de qualquer tipo.
* Outros tipos adicionais são permitidos além de fix: e feat:, por exemplo @commitlint/config-conventional (baseado na Convenção do Angular) recomenda-se build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, entre outros.
* Outros rodapés diferentes de BREAKING CHANGE: <descrição> podem ser providos e seguem a convenção simular a git trailer format.
