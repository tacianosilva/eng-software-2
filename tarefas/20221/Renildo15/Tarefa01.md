# Tarefa 01 - Git e GitHub com Markdown
* * *
* Nome: **Renildo Rabi Vale Dos Santos**
* Usúario: **[Renildo15](https://github.com/Renildo15)**
* E-mail: **<rabi.vale.133@ufrn.edu.br>**

* * *
## Gestor Lab

**Descrição:**

A universidade que preparar um banco de dados para gravar os dados do Laboratórios de Pesquisa (Por exemplo, LABICAN, LABEPI, LABORGEO, etc)

**Equipe:**

* [Breno Alves](https://github.com/brenolves); 
* [Eduardo Henrique](https://github.com/rickEDU);
* [Renildo Rabi](https://github.com/Renildo15);
* [Jeison Oliveira](https://github.com/jeisonoliver)
* [Leonardo Dantas](https://github.com/leonardodantas4)
* [Pedro Augusto](https://github.com/PedroAugustoMD)

**Link do repositório:**

* [Gestor Lab](https://github.com/Renildo15/Gestor-Lab)

* * *

## Linguagem de Programação

* Linguagem usada: **Python**

Python é uma linguagem de programação de alto nível,[6] interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.[1] Atualmente, possui um modelo de desenvolvimento comunitário, aberto e gerenciado pela organização sem fins lucrativos Python Software Foundation. Apesar de várias partes da linguagem possuírem padrões e especificações formais, a linguagem, como um todo, não é formalmente especificada. 

* * *

## Framework

* Framework usado: **Django**

Django é um framework para desenvolvimento rápido para web, escrito em Python, que utiliza o padrão model-template-view (MTV). Foi criado originalmente como sistema para gerenciar um site jornalístico na cidade de Lawrence, no Kansas. Tornou-se um projeto de código aberto e foi publicado sob a licença BSD em 2005. O nome Django foi inspirado no músico de jazz Django Reinhardt.

* * *

## IDE

* IDE usada: **Visual Studio Code(VsCode)**

O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código. Ele é customizável, permitindo que os usuários possam mudar o tema do editor, teclas de atalho e preferências. Ele é um software livre e de código aberto, apesar do download oficial estar sob uma licença proprietária.


### DataTip

O DataTip é de longe o mais utilizado, pela natureza da sua facilidade. Basta parar em um breakpoint, passar o mouse sobre alguma variável e ele estará lá para ajudar o programador.
É possível dar um pin em um determinado valor. Extremamente útil durante o debug em loops.

### QuickWatch dialog

O DataTip certas vezes pode deixar a desejar, como em casos que a variável inspecionada possuir muitas propriedades. O mouse pode escorregar e involuntariamente fechar a janela. Para esses cenários o QuickWatch é perfeito. Uma janela é aberta com todos os detalhes das variaveis, facilitando a navegação, permitindo a alteração de variáveis e a partir da versão 2015 do Visual Studio também faz parse de expressões lambda.

### Parallel Watch Window

O objetivo é auxiliar o debug de processos que estão em paralelo. Ela identifica e monitora uma variável através de várias Threads. Além disso é possivel monitorar um valor especifico entre as threads através do suporte a Watch.
Esta é uma ferramenta indispensável ao trabalhar com códigos em paralelo.

### Locals Window

A Locals Window exibe automaticamente uma lista de variáveis e seus valores, que estejam dentro do escopo do método. Ao parar em um breakpoint a janela Locals vai exibir o nome da variável juntamente com seu valor.
Quando o objetivo é entender de maneira geral o que se passa dentro de um método essa ferramenta pode ser utilizada. Ao alterar o valor de alguma variável o Locals exibe em vermelho o novo valor. Esta ferramenta é util para debugar linha-a-linha e ter um panorama geral de quais variáveis estão sendo modificadas.

* * *

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

###Pull Request

Ao  criar um pull request , você adiciona uma breve visão geral do seu recurso, seleciona o branch para o qual o código precisa ser mesclado e seleciona o responsável que o revisará.
Uma vez criado, está aberto para discussão ou modificações.
Às vezes, ocorrem conflitos após a criação de uma solicitação pull e você deve resolver esses conflitos. Possíveis causas de conflitos são discutidas posteriormente neste artigo.
Normalmente, a pessoa designada revisa o código, mas não é obrigatório que apenas o responsável faça a revisão. Qualquer membro da equipe pode participar do processo de revisão e dar seu feedback ou discutir possíveis modificações no código.
Quaisquer comentários ou modificações são adicionados na forma de comentários próximos à linha de código.
O desenvolvedor resolve comentários e responde ao revisor.
Esse processo continua até que todos os comentários sejam resolvidos.
Depois que todas as discussões são resolvidas, o código é mesclado com a ramificação que foi selecionada quando a solicitação pull foi criada