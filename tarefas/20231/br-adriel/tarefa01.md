# Tarefa 01 - Git e GitHub com Markdown

Nome: Adriel Faria dos Santos

Usuário do Github: br-adriel

Email: adriel.faria.701@ufrn.edu.br

## Projeto da disciplina

Nome do projeto: ControlCash

Descrição: Sistema de controle de caixa e gestão de estoque.

Equipe:

- Adriel Faria dos Santos
- Alef Luciano Silva
- Bianca Laise Medeiros Cassiano
- Cintia Campos de Queiroz
- Guilherme Angelo de Medeiros
- Hilário Petronio de Medeiros Dantas

Link para o repositório: [ControlCash](https://github.com/Control-Cash/controlcash)

### A liguagem de programação escolhida

O projeto será desenvolvido com a linguagem python. Todos os membros da equipe
possuem um nível básico de entendimento e funcionamento da linguagem, e alguns
possuem experiência a utilizando no desenvolvimento web atráves de frameworks.

Para o desenvolvimento do projeto foi escolhido o framework web Django. Alguns
membros já viram e trabalharam com esse framework em um projeto de disciplinas
anteriores, outros nunca o usaram. Ele foi escolhido por ser considerado de
fácil aprendizado e porque o professor da disciplina o utiliza em outros
projetos, de forma que ele poderia ser consultado em caso de dúvidas mais
complexas à respeito do seu funcionamento.

O django é um framework open source que visa simplificar e resolver problemas
comuns durante o desenvolvimento de apicações web, como autenticação e migrações
de banco de dados. Projetos Django normalmente são divididos em "subprojetos"
chamados apps, que por sua vez são divididos em uma estrutura de arquivos que
separa modelos de dados, lógica de negócio, rotas e templates em diferentes
arquivos. Essa modularização ajuda com a manuntenção e escalonamento dos
projetos.

### IDE - Ferraments de DEBUG e controle de versão

A IDE que eu escolhi para trabalhar durante o desenvolvimento do projeto foi o
VS Code. Ele se trata de um editor de código genérico que é consegue se integrar
a diversas linguagens de programação através de seu extenso leque de extensões.

Ele possui uma boa integração com o Git e o Github, permitindo que as ações mais
comuns do dia a dia possam seu realizadas por meio de sua própria interface
gráfica, sem precisar tocar no terminal. Essas ações incluem a criação de um
repositório git, criar commits, defazer commits, abrir pull requests, criar e
alterar branches, além de possuir uma interface que auxilia na hora de realizar
merge e rebase.

O VS Code possui uma ferramenta de DEBUG integrada que pode ser configurada para
ser utilizada com arquivos python. Para uma melhor perfomance dessa ferramenta
basta instalar o leque de extensões 'Python' que a própria Microsoft, empresa
proprietária do editor de código, seleciona.

### Tutoriais sobre Django

[Django 4 CRUD completo em ~30 minutos](https://www.youtube.com/watch?v=GGBzMpIAgz4)

[Escrevendo seu primeiro app Django, parte 1](https://docs.djangoproject.com/pt-br/4.2/intro/tutorial01/)

Os tutoriais acima cobrem o processo de criação, listagem, edição e remoção de
objetos no django desde a criação de um novo app, passando pela definição de
modelos no models.py e pela lógica implementada nas views, e indo até a
renderização desses dados no html. As partes posteriores do segundo tutorial
cobrem até mesmo a parte de como fazer testes automatizados usando a bliblioteca
padrão que o framework oferece.

### Branches e Pull Requests

Branches e pull requests estão intimamente relacionados com os sistemas de
controle de versão, como o git.

Um branch é uma cópia do código-fonte principal de um repositório. Essa cópia
serve para que possamos fazer alterações no código sem afetar o código já
existente na branch principal. Esse funcionamento possibilita que várias pessoas
trabalhem ao mesmo tempo em um mesmo repositório sem causar conflitos no
trabalho umas das outras.

Entretanto, como você está modificando o código, seja para adicioanr uma nova
funcionalidade ou para corrigir um bug, você precisa que essas mudanças vão para
a branch principal, para efetivar essas mudanças feitas nos arquivos é utilizado
o Pull Request.

Um pull request é a solicitação para que um novo código de uma branch "volte"
para o código da branch principal e esse seja efetivado. Ele acaba funcionando
como um passo intermediário na junção de códigos para que não haja sobrescrita
não intencional de código, pois antes de ser efetivado um pull request pode ser
revisado antes de ser aceito na branch principal.

### Versionamento semântico

O versionamento semântico é um padrão de atribuição de versão de software
amplamente adotado que estabelece que o número de versão de um software será
composta por três partes separadas por pontos, nesse estilo:

```text
X.Y.Z
```

No exemplo acima cada letra representaria um número, e cada número desses tem um
significado e um critério para ser modificado para mais ou para menos.

O Z representa as correções de bug, logo ele é incrementado em 1 sempre que
uma nova correção é feita, entretanto essa correção não deve quebrar a
compatibilidade com versões anteriores. Por exemplo, se um outro programa
interagia com o software quando ele estava na versão X.Y.1, o mesmo programa
deve continuar funcionando com a versão X.Y.2 sem que alterações tenham que ser
feitas em seu código fonte.

O Y representa novas funcionalidades, então sempre que uma nova função é
adiciona seu valor é incrementado em 1, contanto que essa nova função não quebre
a compatibilidade com a versão anterior, como foi explicado no detalhamento do
número "Z". Quando o Y é incrementado o Z é zerado.

Já o X representa uma nova versão do sistema, isto é, esse valor é incrementado
em 1 quando uma nova atualização quebra a compatibilidade com versões anteriores
do software, como explicado anteriormente. Quando o X é incrementado o Y e o Z
são zerados.

### Conventional commits

Conventional commits é um padrão adotado nos projetos de software para as
mensagens de commit a fim de torná-las bem descritivas, de fácil compreensão e
consistentes.

Ao utilizar essa convenção você deve dividir sua mensagem de commit em 3 partes:

```bash
<tipo>[escopo]: <descrição>
```

Os tipos mais usados são `fix`, para indicar uma correção, e `feat`, para
indicar uma nova funcionalidade. Outros tipos adicionais também podem ser
usados para melhor atender cada necessidade. Quando o tipo vem sucedido de uma
exclamação significa que aquele commit introduz uma mudança que causará quebra
de compatibilidade em relação as versões anteriores.

Essa convenção também define a estruturação para o corpo do commit, sugerindo o
uso de um rodapé iniciado por `BREAKING CHANGE:` nos commits que causam quebra
de compatibilidade.
