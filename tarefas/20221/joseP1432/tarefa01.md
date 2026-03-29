# Tarefa 01 - Git e GitHub com Markdown
* Nome: José Pereira de Araújo Marques
* Usuário: joseP1432
* E-mail: jose.marques15@hotmail.com

## Projeto: SISTEMA DE COMPRA E VENDA DE LOJA DE ROUPAS
Nosso Sistema Web será uma aplicação voltada para o ramo do comércio, onde terá um administrador principal cadastrado diretamente por nós, desenvolvedores, e ele terá todas as permissões que direcionarão o funcionamento da aplicação. A partir deste usuário, novos administradores serão criados e ele determinará as permissões dos demais administradores. Aqui, os administradores poderão cadastrar produtos e registrar suas vendas, como também editar ou desativá-las, gerar o processo de pagamento (tendo a possibilidade de ser pago com mais de um metódo de pagamento). Por último, observar o funcionamento da sua loja através de relatórios periódicos. 

[Clique aqui para acessar.](https://github.com/vitordaniel31/sisvenda.git)

### Equipe:
* José Pereira de Araújo Marques
* Ketlly de Azevedo Medeiros
* Vitor Daniel Locio Medeiros
* Hugo Muryel Maia Fernandes de Araújo

### Linguagem de Programação:
A linguagem escolhida pela equipe, foi o **PHP**. É uma linguagem em que a equipe se sente confortável em desenvolver uma Aplicação Web e que já possui experiência, esse foi o fator de consenso para a equipe determinar a linguagem.

### Framework:
O framework a ser usado será o **Laravel**. Ele é um framework em que possui muitos recursos embutidos que facilitam o desenvolvimento: sistema de roteamento, gerenciamento de banco de dados, autenticação, cache, envio de e-mails, e muito mais. Ele também tem um sistema de templates poderoso, chamado Blade, que facilita a criação de páginas da web dinâmicas e reutilizáveis.

### IDE:
Neste projeto utilizaremos a IDE **Vs Code**, nele é possível codificar e compilar o código no mesmo lugar. Além da assistência prestada pelas diversas extensões e funcionalidades que facilitam comparar códigos. 

Para o debug, o **VS Code** possui uma extensão chamada Debugger for Chrome, que permite que o desenvolvedor depure o código JavaScript em um navegador Chrome diretamente do editor. O **VS Code** também tem uma opção de depuração integrada que permite que o desenvolvedor coloque pontos de interrupção no código e depure passo a passo para identificar erros e bugs.

Para que o desenvolvedor mantenha controle sobre a versão do código, o **VS Code** tem uma integração nativa com o **Git**, permitindo que os desenvolvedores criem e gerenciem repositórios **Git** diretamente do editor. Além disso, o **VS Code** tem uma extensão para o **GitHub** que permite que os desenvolvedores vejam onde houve alteração e em caso de haver divergência entre os códigos originais e os códigos comitados, ele mostra onde há as divergências e permite que o desenvolvedor repare o erro.

### Tutorial:
O tutorial escolhido foi o *"Introdução ao Laravel Framework – Parte 08: CRUD"* do Professor Jorge Luís Gregório. Este tutorial aborda muito bem a criação de um Sistema Web em **Laravel**, ensinando desde a criação do projeto até o desenvolvimento. Outro fator importante para se considerar, é a atualidade da publicação do tutorial e a versão do **Laravel** utilizada, a 8ª versão.

[Acesse aqui.](https://www.jlgregorio.com.br/2022/09/06/introducao-ao-laravel-framework-parte-08-crud/)

### Branches e Pull Request:
O GitFlow é uma metodologia de desenvolvimento de software baseada no uso de branches e pull requests com o Git e o GitHub. Ele propõe o uso de duas branches principais (master e develop) e branches de recurso para o desenvolvimento de novas funcionalidades. O pull request é usado para solicitar a mesclagem das alterações na branch de recurso na branch develop, e o merge da branch develop na branch master é feito quando há um conjunto suficiente de novas funcionalidades. Essa metodologia ajuda a garantir a qualidade do código e a estabilidade do software.

### Versionamento Semântico:
O Versionamento Semântico é um padrão para determinar a nomenclatura de um software, no formato de três números: X.Y.Z. Onde o X seria a versão principal, Y a versão secundária e Z a versão de correção. 

Mudanças na versão principal indicam mudanças incompatíveis com versões anteriores, mudanças na versão secundária indicam adições de funcionalidades compatíveis com versões anteriores, enquanto mudanças na versão de correção indicam correções de bugs ou problemas de compatibilidade. Além disso, o Versionamento Semântico define como devem ser feitas as mudanças nos números de versão, dependendo do tipo de alteração.

### Conventional Commits:
Conventional Commits é uma convenção que define como serão descritas os commits do **GitHub**. Portanto, ao iniciar um commit o desenvolver deve adicionar um prefixo que indica qual foi o tipo de alteração feita no código.

Deve ser usado "feat" para novas funcionalidades, "fix" para correção de bugs, "chore" para tarefas de manutenção. Os prefixos devem ser seguidos por : e um espaço, então o desenvolvedor escreverá a mensagem normalmente a seguir.

Ao seguir essa convenção, as mensagens de commit se tornam mais fáceis de entender e permitem uma melhor organização e rastreamento das mudanças realizadas ao longo do tempo.