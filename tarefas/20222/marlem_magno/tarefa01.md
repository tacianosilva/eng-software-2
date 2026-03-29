# Tarefa 01 - Git e GitHub com Markdown

## Nome: Márlem Magno da Silva Dantas
## GitHub: [marlemM](https://github.com/marlemM)
## E-mail: marlem.magno@gmail.com

# Produto para Controle de emprestimo de materiais de apoio para docentes do ceres
## Equipe
- [Ana Paula Teixera](https://github.com/paulinhatexx)
- [Hiago Roque Silva de Medeiros](https://github.com/HiagoRoque)
- [Marlem Magno da Silva Dantas](https://github.com/marlemM) (Primeiro Gerente)
## [Repositório do Projeto](https://github.com/marlemM/SCMA) 

## Linguagem Utilizada
<p> A linguagem utilizada para desenvolver o back-end do projeto será Python, atráves do framework Django. Para o front-end será utilizado HTML, CSS e Javascript. Para o banco de dados será utilizado o Mysql.
O domínio da equipe sobre a linguagem é satisfatória, já sobre o framework a equipe tem pouca experiência.</p>

Membro          | Domínio       | Experiência
:--------------:|:-------------:|:-------:
Ana Paula       | Iniciante     | 1 ano
Hiago           | Iniciante     | 1 anos
Márlem          | Iniciante     | 2 ano

## Framework Utilizado
<p>Vamos utilizar como framework o Django que é um framework de web server-side extremamente popular e repleto de características, escrito em Python para desenvolvimento rápido para web, que utiliza o padrão model-template-view. Foi criado originalmente como sistema para gerenciar um site jornalístico na cidade de Lawrence, no Kansas. Tornou-se um projeto de código aberto e foi publicado sob a licença BSD em 2005 Django é um framework .<p>

## IDE utilizada no projeto
<p>Para desenvolvimento do projeto, a equipe utilizará o [Visual Studio Code](https://code.visualstudio.com/). O VSCode é um editor de código de código aberto desenvolvido pela Microsoft. A ferramenta possui um debugger integrado, que ajuda a debugar com facilidade e simplicidade o código escrito. Para versionamento, o VSCode tem uma ótima integração com Git E GitHub, além de possuir várias extensões que dão superpoderes ao Git, como o [Gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens).<p>

## Links de Tutoriais Usados Para Fazer Um CRUD Na Tecnologia Escolhida

https://youtu.be/mbQVVIqSxoI  
Tutorial bem simples e direto ao ponto, ótimo para desenvolver um CRUD rápido usando o framework Django

## Branches e pull request
- Branch  
<p>Como o nome sugere, é uma ramificação. Digamos que durante o desenvolvimento de um projeto de software, em dado momento, eu quero adicionar uma funcionalidade que pode ocasionar bugs indesejéveis, então ao invés de mandar os novos commits para a branch principal, podemos criar novas branches que atuarão como uma cópia da branch principal, porém tudo que for adicionado a ela não afetará a branch principal até que seja feito o merge. Usando o gitflow, podemos criar branches específicas para cada parte de desenvolvimento. Como a branch Main, que contém a versão principal do projeto; a Develop para ser a branch que irá ser adicionado as novas funcionalidades; a Feature, que contém novas funcionalidades em cima da branch Develop.<p>

- Pull request  
<p>Significa solicitação de puxar, em tradução livre. Quando se deseja integrar o conteúdo de uma branch para a branch principal, é solicitado um pull request para que o gerente do projeto aprove ou rejeite as novas alterações, para ai sim ocorrer o merge das branches. No gitflow isso ajuda muito a organizar e selecionar o que deve ser mergiado ou não, e manter o controle do versionamento para sempre garantir a qualidade do software.<p>


## Versionamento Semântico
<p>No mundo de gerenciamento de software existe algo terrível conhecido como inferno das dependências (“dependency hell”). Quanto mais o sistema cresce, e mais pacotes são adicionados a ele, maior será a possibilidade de, um dia, você encontrar-se neste poço de desespero. O Versionamento Semântico utiliza uma quantidade de regras para evitar que as dependências ocorram, são algumas delas:<p>

- Um número de versão normal DEVE ter o formato de X.Y.Z, onde X, Y, e Z são inteiros não negativos, e NÃO DEVE conter zeros à esquerda. X é a versão Maior, Y é a versão Menor, e Z é a versão de Correção. Cada elemento DEVE aumentar numericamente. Por exemplo: 1.9.0 -> 1.10.0 -> 1.11.0.

- No início do desenvolvimento, a versão Maior DEVE ser zero (0.y.z). Qualquer coisa PODE mudar a qualquer momento. A API pública NÃO DEVE ser considerada estável.

- Versão 1.0.0 define a API como pública. A maneira como o número de versão é incrementado após este lançamento é dependente da API pública e como ela muda.


## Conventional Commits
<p> O Conventional Commit, como o próprio nome já diz, utiliza uma convenção simples para usar nas mensagens de commit. Ao olhar para tal mensagem, o responsável por revisar o código sabe do que se trata imediatamente. Possui palavras chaves, como:</p>
 
- fix - correção de bugs  
- feat - novas funcionalidades  
- refactor - refatoração de código, mas sem alterações no funcionamento  
- perf - refatorações especiais, que melhoram o desempenho 
- style - commits que não afetam o código em si  
- test - testes  
- docs - documentação  
- build - alteração nas ferramentas de dependências por exemplo  
- ops - infraestrutura  
- chore - vários commits  