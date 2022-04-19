# Tarefa 01 - Git e GitHub com Markdown

* Nome: Lucas da Silva Santos
* Usuário Github: [LucasSilva01](https://github.com/LucasSilva01)
* E-mail: santoslucas9956@gmail.com
#

## SABIDO - Student Appointment Book Integrated with Django On the fly



* Descrição: O Student Appointment Book Integrated with Django On the fly(SABIDO), é um aplicativo cujo seu objetivo é auxiliar estudantes de diversas áreas a organizarem suas tarefas de forma otimizada, gerando relatórios e monitorando o ciclo de vida das tarefas que estão em aberto.
#
| Equipe de desenvolvimento | Github
|----  | ---- |
| Danrley Daniel Moreira Sales | danrleydaniel
| Douglas Mateus Soares Cândido da Silva| douglascandido
| Edinalda Cristina Alves de Medeiros | edinaldaufrn
| Gabriel Azevedo dos Santos | gabrielazevedods
| Gabriel Gonçalo da Costa | gabrielgoncalo
| Lucas da Silva Santos | LucasSilva01


* Link do Repositório: [SABIDO](https://github.com/gabrielazevedods/engenharia-de-software-II)
#
## Sobre as linguagens de programação:

 - Todos os integrantes do grupo já tem afinidade com grande parte das tecnologias que serão utilizadas no gerenciador de tarefas - SABIDO, serão utilizadas HTML, CSS e JavaScript para o Front-end, será utilizado o SGBD PostgreSQL para manter os dados.

#
 ## Sobre o framework: 

- **Django:** é um framework para desenvolvimento web rápido, escrito em Python, usando o modo model-template-view (MTV).

#
## Sobre a IDE:

- Será usado o Visual Studio Code como IDE, pois é algo que todos os integrantes tem afinidade. Como o VS code já é integrado com o git e tem uma ótima ferramenta de depuração, acaba faciliatando o uso para todos os integrantes do grupo por isso optamos pelo mesmo.

# 
## Sobre o CRUD
Link: [CRUD Django](https://data-flair.training/blogs/django-crud-example/)
- **Descrição**:  O link acima é de um site de treinamento que mostra como é projetado um aplicavo CRUD na estrutura Django, onde ele se inicia criando um ambiente virtual com a biblioteca virtualenv e instalando as demais dependências do sistema, ele mostra como são feitas funções de exibição, delete, update, entre as demais, mostra como é feita a configuração de URLs e por fim faz um pequeno resumo do trabalho feito. 

#
## Sobre as branches e pull request e git flow

- Uma branch é simplesmente uma ramificação do projeto original, enquanto um pull request é uma solicitação dos usuários para contribuir com suas alterações de volta ao repositório original do projeto, já o git flow serve para gerenciar o fluxo de trabalho onde você trabalha na sua branch fazendo commits e indicando o tipo de commit que está sendo feito, otimizando assim o desenvolvimento que está sendo realizado de uma forma eficiente.

#
## Sobre o versionamento semântico

- O versionamento semântico hoje é um dos padrões de versionamento mais usados e conhecidos, tem o objetivo de evitar que atualizações de dependência quebrem o seu software indevidamente, enquanto permitindo que você tenha uma noção do status de estabilidade do software e possa identificar se uma nova versão possui apenas novos recursos ou se possui apenas correções de bugs.

#

## Sobre o Conventional Commits

 - Se trata de um padrão que de escrita das mensagens que são passadas ao realizar commits, cada prefixo dita o tipo de commit que está sendo feito, ajudando a equipe a deixar mais claro essa mensagem para a equipe que está desenvolvendo, seguindo a seguinte estrutura: 

 ```
    <tipo>[escopo opcional]: <descrição>
    [corpo opcional]
    [rodapé(s) opcional(is)]

 ```

### O commit contém os seguintes elementos estruturais, para comunicar a intenção ao utilizador da sua biblioteca
#
- fix: um commit do tipo fix soluciona um problema na sua base de código (isso se correlaciona com PATCH do versionamento semântico).

- feat: um commit do tipo feat inclui um novo recurso na sua base de código (isso se correlaciona com MINOR do versionamento semântico).

- BREAKING CHANGE: um commit que contém no rodapé opcional o texto BREAKING CHANGE:, ou contém o símbolo ! depois do tipo/escopo, introduz uma modificação que quebra a compatibilidade da API (isso se correlaciona com MAJOR do versionamento semântico). Uma BREAKING CHANGE pode fazer parte de commits de qualquer tipo.

- Outros tipos adicionais são permitidos além de fix: e feat:, por exemplo @commitlint/config-conventional (baseado na Convenção do Angular) recomenda-se build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, entre outros.

- Outros rodapés diferentes de BREAKING CHANGE: <descrição> podem ser providos e seguem a convenção simular a git trailer format.

Fonte -> https://www.conventionalcommits.org/pt-br/v1.0.0/
