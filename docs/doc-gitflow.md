# Fluxo de Desenvolvimento do Projeto

Nosso projeto utiliza o Git como controle de versão e o GitHub para hospedagem do repositório remoto. Também usamos o GitHub para gestão de tarefas e criação da documentação.

## Fluxo de Desenvolvimento com Git

Na página com Tutorial [Git e GitHub](github.md) apresentamos o **Fluxo de Trabalho Git** com repositório local e repositório remoto no **GitHub**. Conforme exibido na imagem a seguir:

![Fluxo de Trabalho do Git](git-workflow.png)

Contudo, esse fluxo de trabalho descreve apenas as operações realizadas com Git para adição e envio das contribuições para o repositório remoto. Para uma utilização efetiva iremos utilizar um desenvolvimento baseado em multiplos branches.

## Fluxo de Desenvolvimento com GitFlow

[GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) é um modelo de desenvolvimento baseado em branches para Git, criado por Vincent Driessen. Ele atraiu muita atenção porque é muito adequado para colaboração e dimensionamento da equipe de desenvolvimento.

![git-workflow-release-cycle](https://static.imasters.com.br/wp-content/uploads/2015/04/git-workflow-release-cycle-4maintenance.png)

No nosso projeto utilizamos apenas as branches:

* branch **main**: branch principal com o código integrado e verificado.
* branch **feat/issueX**: branch para a feature descrita na issue de id = X.
* branch **fix/issueY**: branch para a hotfix de bugs descrita na issue de id = Y.
* branch **doc/issueZ**: branch para documentação do projeto, criação de tutoriais ou documentação no código, descrita na issue de id = Z.

Neste momento não estamos utilizando branches de **develop** e **release**. Concordamos com a abordagem utilizada por Paulo Moura no seu post [Git-flow o anti-pattern mais querido da galera](https://tasafo.org/2019/01/18/git-flow-o-anti-pattern-mais-querido-da-galera/).

Temos várias opções para os tipos de commit:

* feat – a new feature is introduced with the changes
* fix – a bug fix has occurred
* chore – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
* refactor – refactored code that neither fixes a bug nor adds a feature
* docs – updates to documentation such as a the README or other markdown files
* style – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
* test – including new or correcting previous tests
* perf – performance improvements
* ci – continuous integration related
* build – changes that affect the build system or external dependencies
* revert – reverts a previous commit 

## Passo a Passo para contribuir

0. Faça o **Fork** do projeto no *GitHub*, se você não for membro do repositório;

1. Faça o **Clone** do projeto (`git clone`);
```console
git clone https://github.com/username/projeto.git`
```
2. Verifique se o branch atual é o **branch main** (`git branch`) e sempre atualize o **branch main** antes de tudo (`git pull`);
```console
git branch
git pull origin main
```
3. Crie um **novo branch**, ou seja, uma **feature branch** (`git checkout -b`) para trabalhar em funcionalidade (*feature*) ou em correção de bugs (*hotfix*) ou em documentação (*document*), etc. Use a nomeclatura **feat/issueXX**, **fix/bugYY** ou **doc/issueZZ**. Sempre estando inicialmente no **branch main**;
```console
git checkout -b feat/issueXX main
```

4. **Atualize a feature branch** sempre que necessário, pois a **branch main** pode estar sendo atualizada. É uma boa prática manter a **feature branch** sempre atualizada;
```console
git checkout feat/issueXX
git pull origin main
```
É possível usar `git pull --ff-only`, ou `git rebase -i main` (branches recentes) ou ainda `git merge --no-ff main`.

5. Faça **commits no branch** indicando o id da *issue* no final da mensagem. Coloque mensagens curtas e significativas;
```console
git commit -m "Minha mensagem curta e significativa #id"
```
6. Faça **push do seu branch** para o repositório remoto, quando tiver resolvido a tarefa; Repita o passo 4 antes, para deixar a sua **feature branch** atualizada.
```console
git push origin feat/issueXX
```
7. Crie um **pull request (PR)** do **seu branch** (*feat/issueXX*) para o **branch main** no *GitHub*;

8. Aguarde a revisão do **pull request (PR)**. Caso precise de ajustes basta fazer **novos commits no branch**. O PR será automaticamente atualizado;

9. Quando o **PR**  for aprovado pelo gerente ou líder, será feito o **merge do pull request**;
```console
git checkout main
git merge feat/issueXX
```

**Obs.:** Todos esses comandos pode ser feitos na **IDE** e outros são realizados diretamente no **GitHub**. Qualquer dúvida é só perguntar!!! :nerd:

## Para saber mais

* https://datasift.github.io/gitflow/IntroducingGitFlow.html
* https://imasters.com.br/agile/fluxo-de-desenvolvimento-com-gitflow
* https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow
* https://tasafo.org/2019/01/18/git-flow-o-anti-pattern-mais-querido-da-galera/
