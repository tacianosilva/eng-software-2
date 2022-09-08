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
