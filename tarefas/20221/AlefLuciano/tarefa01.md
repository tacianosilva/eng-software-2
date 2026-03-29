# Tarefa 01 - Git e GitHub com Markdown
* * *
* Nome: **Alef Luciano Silva**
* Usúario: **[AlefLuciano](https://github.com/AlefLuciano)**
* E-mail: **<alef.silva.123@ufrn.edu.br>**
* * * 
## Control Cash 

A necessidade do sistema de controle de caixa surgiu com o aumento do fluxo de vendas de um comércio. O projeto tem como ideal facilitar a logística de entrada e saída monetária da empresa comercial em questão, bem como o monitoramento de forma simplificada do estoque, promovendo uma melhoria da eficiência operacional e do controle das operações financeiras.

**Link do Repositório:** 

* [Control Cash](https://github.com/Control-Cash/controlcash)

* * * 

**Equipe:**

* [Adriel Faria dos Santos](https://github.com/br-adriel) (Gerente);
* [Alef Luciano](https://github.com/AlefLuciano); 
* [Bianca Laíse Medeiros Cassiano](https://github.com/biancamdros);
* [Cintia](https://github.com/cintiacq)
* [Guilherme Ângelo](https://github.com/GuilhermeAngelo)
* [Hilário Dantas](https://github.com/hilariodantas)

* * * 
## Framework

* Linguagem/Framework usado: **Django**

Django é um framework para desenvolvimento rápido para web, escrito em Python, que utiliza o padrão model-template-view (MTV). Foi criado originalmente como sistema para gerenciar um site jornalístico na cidade de Lawrence, no Kansas. Tornou-se um projeto de código aberto e foi publicado sob a licença BSD em 2005. O nome Django foi inspirado no músico de jazz Django Reinhardt.

* * *

## IDE

* IDE usada: **Visual Studio Code(VsCode)**

O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código. Ele é customizável, permitindo que os usuários possam mudar o tema do editor, teclas de atalho e preferências. Ele é um software livre e de código aberto, apesar do download oficial estar sob uma licença proprietária.

### Controle de Versões

O Visual Studio Code integrou o gerenciamento de controle de origem (SCM) e inclui suporte ao Git pronto para uso. Muitos outros provedores de controle de origem estão disponíveis por meio de extensões no VS Code Marketplace.

* * *

## Tutorial CRUD

* Link: https://youtube.com/playlist?list=PL8rp8Q_tOmSP9zycKLIHK-jTcBXzrj1_W

No primeiro video da playlist sobre o crud, foi apresentado a estrutura básica de um crud como:
Inserir, editar e excluir. E também foi apresentado um pouco sobre template.

* * *

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

### Versionamento Semântico

O Versionamento Semântico é uma abordagem de numeração de versões de software que utiliza um conjunto de regras e convenções para definir de forma clara e padronizada a evolução das versões de um programa. Essa metodologia foi criada com o objetivo de facilitar a compreensão e a comunicação entre desenvolvedores, usuários e outras partes interessadas no software.

* * * 

### Conventional Commits (Convenções para Mensagens de Commits) 

Conventional Commits é uma especificação para criar mensagens de commit de maneira consistente e padronizada. A ideia é que, seguindo um padrão bem definido, a mensagem do commit seja mais informativa e facilite a compreensão das mudanças realizadas no código.

As mensagens de commit seguem uma estrutura composta por três partes: o tipo, o escopo e a descrição. O tipo pode ser um dos seguintes: feat (nova funcionalidade), fix (correção de bug), docs (atualização de documentação), style (formatação de código), refactor (refatoração de código), test (adição ou modificação de testes), chore (mudanças que não afetam o código, como configurações) ou revert (reversão de um commit anterior).
