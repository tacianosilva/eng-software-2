# Tarefa 01 - Git e GitHub com Markdown

# Informações pessoais
Gabriel Azevedo dos Santos  
https://github.com/gabrielazevedods  
gabrielazevedo492@gmail.com


# Informações do projeto

## Título do projeto:
SABIDO: Student Appointment Book Integrated with Django On the fly

## Descrição: 
SABIDO é um aplicativo desenvolvido com o objetivo de ajudar os estudantes a organizarem suas tarefas e rotinas.

## Equipe: 
[Danrley Daniel Moreira Sales](https://github.com/danrleydaniel)  
[Douglas Mateus Soares Cândido da Silva](https://github.com/douglascandido)  
[Edinalda Cristina Alves de Medeiros](https://github.com/edinaldaufrn)  
[Gabriel Azevedo dos Santos](https://github.com/gabrielazevedods)  
[Gabriel Gonçalo da Costa](https://github.com/gabrielgoncalo)  
[Lucas da Silva Santos](https://github.com/lucassilva01)  

## Link para o repositório: https://github.com/gabrielazevedods/engenharia-de-software-II


## Linguagens de programação utilizadas no projeto e domínio da equipe
A linguagem utilizada para desenvolver o back-end do projeto será Python, atráves do framework Django. Para o front-end será utilizado HTML, CSS e Javascript. Para o banco de dados será utilizado o Postgresql.
O domínio da equipe sobre a linguagem é satisfatória, já sobre o framework a equipe tem pouca experiência.

## Framework utilizado no projeto
A equipe utilizará o framework Django, que é escrito em Python. Django facilita o desenvolvimento fornecendo módulos prontos e que ajudam o desenvolvedor durante a escrita do projeto.

## IDE utilizada no projeto
Para desenvolvimento do projeto, a equipe utilizará o [Visual Studio Code](https://code.visualstudio.com/). O VSCode é um editor de código de código aberto desenvolvido pela Microsoft. A ferramenta possui um debugger integrado, que ajuda a debugar com facilidade e simplicidade o código escrito. Para versionamento, o VSCode tem uma ótima integração com Git E GitHub, além de possuir várias extensões que dão superpoderes ao Git, como o [Gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens).

## Link de tutorial usando a tecnologia escolhida
https://youtu.be/mbQVVIqSxoI  
Tutorial bem simples e direto ao ponto, perfeito para desenvolver um CRUD rápido usando Django

## Branches e pull request
- Branch  
Como o nome sugere, é uma ramificação. Digamos que durante o desenvolvimento de um projeto de software, em dado momento, eu quero adicionar uma funcionalidade que pode ocasionar bugs indesejéveis, então ao invés de mandar os novos commits para a branch principal, podemos criar novas branches que atuarão como uma cópia da branch principal, porém tudo que for adicionado a ela não afetará a branch principal até que seja feito o merge. Usando o gitflow, podemos criar branches específicas para cada parte de desenvolvimento. Como a branch Main, que contém a versão principal do projeto; a Develop para ser a branch que irá ser adicionado as novas funcionalidades; a Feature, que contém novas funcionalidades em cima da branch Develop.

- Pull request  
Significa solicitação de puxar, em tradução livre. Quando se deseja integrar o conteúdo de uma branch para a branch principal, é solicitado um pull request para que o gerente do projeto aprove ou rejeite as novas alterações, para ai sim ocorrer o merge das branches. No gitflow isso ajuda muito a organizar e selecionar o que deve ser mergiado ou não, e manter o controle do versionamento para sempre garantir a qualidade do software.

## Versionamento semântico
Versionamento semântico é um conjunto simples de regras e requerimentos para atribuição das versões de software. Podemos considerar um formato X.Y.Z (Major, Minor, Patch)

Major: controle de compatibilidade
Minor: controle de funcionalidade
Patch: controle de correção de bugs

Cada elemento deve ser incrementado em 1, deve ter um número único da versão.

Patch deve ser incrementado apenas se estiver adicionando uma correção de algum bug, e mantém a compatibilidade com a versão anterior.

Minor deve ser incrementado se estiver adicionando novas funcionalidades, mantendo a compatibilidade com a versão anterior. Quando a versão Minor for incrementada, a versão Patch deve ser redefinida para 0.

Major deve ser incrementado quando houver alterações que não são compatíveis com a versão anterior já publicada, quando a versão Major for incrementada, tanto a versão minor quanto a versão Patch devem ser redefinidas para 0.

As especificações para o versionamento semântico deve ser regras.  
- Primeira Regra – API pública  
- Segunda Regra – Formato do número de versão, seguindo o formato X.Y.Z.  
- Terceira Regra – Versões imutáveis, para correções, modificações, novas funcionalidades - deverão ser lançadas em uma nova versão.  
- Quarta Regra – Desenvolvimento inicial  
- Quinta Regra – Versão 1.0.  
- Sexta Regra – Versão de remendo ou patch version  
- Sétima Regra – Versão secundária ou minor version  
- Oitava Regra – Versão principal ou major version  
- Nona Regra – Versão de pré-lançamento ou pré-release  
- Décima Regra – Dados de build  
- Décima Primeira Regra – Precedência de versões  
- Décima Segunda Regra - Precedência especificada

## Conventional commits
A mensagem do commit deve seguir o esquema a seguir: 
<tipo> [escopo opcional]: <descrição>

[corpo opcional]

[Rodapé opcional]

O tipo pode ser:  
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
