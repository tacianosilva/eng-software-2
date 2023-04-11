# Tarefa 01 - Git e GitHub com Markdown

Nome: Raquel Lima Fernandes  
Usuário github: fernandesraquel  
E-mail: raquel.lima.072@ufrn.edu.br

### Título e descrição do projeto
**CONSTRUCT** é um sistema de gestão para lojas de materiais de construção que visa o bom atendimento ao cliente, a gestão do estoque e o controle dos pedidos e finanças, além da emissão de relatórios.

### Equipe 
[Annielly Ferreira de Souza](https://github.com/Anniellyfs)  
[José Cláudio de Araújo Júnior](https://github.com/ZeClaudio-Jr)  
[Maicon Douglas da Silva](https://github.com/mdouglas630)  
[Raquel Lima Fernandes](https://github.com/fernandesraquel)  
[Renata Karla Araújo dos Santos](https://github.com/renatak12)

### Link do repositório do projeto 
https://github.com/fernandesraquel/construct

### Linguagem de programação que será utilizada
A linguagem de programação utilizada será **Python**. Python é uma linguagem de programação interpretada de alto nível e que suporta múltiplos paradigmas de programação: imperativo, orientado a objetos e funcional, além de apresentar tipagem dinâmica e gerenciamento automático de memória.

### Domínio e experiência da equipe
| Membro       | Experiência                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------- |
| Annielly     | Software Tester Desenvolvedora JavaScript, Python                                                                 |
| José Cláudio | Desenvolvedor Javascript, Python                                                                                  |
| Maicon       | Desenvolvedor Python, Django, JavaScript                                                                          |
| Raquel       | Gerente e Desenvolvedora Javascript, React, Nexjtjs, Python, C, PostgreSQL                                        |  
| Renata       | Desenvolvedora Javascript, Python, Django                                                                         |

### Framework que será utilizado 
O framework utilizado será **DJANGO**. Django é um framework web de alto nível que utiliza a linguagem Python para a criação de aplicações.

### IDE que será utilizada
A IDE utilizada será o **VISUAL STUDIO CODE**. O Visual Studio Code, ou simplesmente VS Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.

### Ferramentas de debug
Debug é o processo que envolve identificar, isolar e corrigir os erros ou anormalidades de um software. A priore a ferramenta de debug utilizada será uma extensão do prórrio vscode o **DataTip** pela natureza da sua facilidade. Basta parar em um breakpoint, passar o mouse sobre alguma variável e ele mostrará.

<div align="center">
    <img src="https://www.brunobrito.net.br/content/images/2018/06/semDebuggerDisplay.gif" alt="DataTip" loading="lazy">
</div>

### Controle de versão
O versionamento do projeto será realizado através do **GIT/GITHUB**.

### Link de tutorial CRUD na tecnologia escolhida
https://www.youtube.com/watch?v=N6jzspc2kds  
https://www.youtube.com/watch?v=vNegKfkopoQ  
https://www.youtube.com/watch?v=Ko5KLX2n334

### Branches e pull request
**Branche** é uma ramificação do seu projeto. Quando criamos um repositório, ele automaticamente é iniciado com a branch master, que é a parte principal do seu projeto. As próximas branches são secundárias e, portanto, ramos da branch master.  
Em aplicações desenvolvidas por mais de uma pessoa, é uma boa prática que além da master, cada desenvolvedor crie e desenvolva seu código em sua própria branch, que pode ter qualquer nome.

Vamos imaginar a criação de um site com 4 páginas (por exemplo: “página inicial”, “sobre nós”, “novidades” e “contato”) em que cada desenvolvedor será responsável por uma página.

Durante o desenvolvimento de cada página, cada programador irá codar e commitar para sua própria branch. Ao finalizar essa tarefa, aquela branch estará pronta para ser incorporada na branch master, processo que chamamos de ```merge```.

O processo de merge serve para fundir as duas branches e fazemos isso através do **pull request**.

### Versionamento semântico
**Versionamento Semântico** é um padrão de regras para manter um acompanhamento de versões no desenvolvimento de códigos. O padrão do versionamento é uma sequência numérica separada em três posições: 

**MAJOR (Maior)**
O primeiro dígito informa a versão de compatibilidade e é alterado caso o software sofra mudanças que a torne incompatível com outras versões. São as chamadas *breaking changes*, atualizações que possuem o potencial de “quebrar” códigos que utilizam versões anteriores.

**MINOR (Menor)**
O segundo dígito informa a versão da funcionalidade, onde uma nova função ou melhoria substancial é adicionada e não há problemas de incompatibilidade com outras versões.

**PATCH (Correção)**
O terceiro dígito informa a versão da correção de bugs, melhorias de desempenho ou alterações similares que não alteram as funcionalidades atuais e nem introduzem novas.

### Controlando versões no Git/Github
O Git nos permite fazer o controle das versões, além dos commits que indicam as mudanças feitas no nosso código, podemos unir um conjunto de funcionalidades através das ```tags``` e ```releases```. Basicamente, as `tags` representam os trechos de código de uma versão e através dos `releases` nós podemos descrever do que se trata essa versão. 

Para criar a primeira tag, digitamos o seguinte comando:  
`git tag -a <NUMERO_DA_TAG> -m “<MENSAGEM_DA_TAG>”`

Assim, para indicar que estamos começando o desenvolvimento do projeto, criando nossa primeira versão (0.1.0, por exemplo), podemos digitar:  
`git tag -a 0.1.0 -m “começando o desenvolvimento do projeto”`  

E para enviar as tags para nosso repositório remoto, digitamos o comando:  
`git push --tags`

Agora, ao atualizar a página do nosso projeto no Github, vemos que o campo Releases recebeu uma alteração.

Ao clicar em “1 tags” vemos a tag que criamos, bem como a mensagem de descrição e a possibilidade de fazer o download desta versão.

Por fim, ao acessar a aba “Releases”, podemos criar uma versão de lançamento, para poder visualizar do que se trata essa primeira versão, clicando em “Create a new release”.

Após isso, basta selecionar a tag que se refere essa release (no caso, 0.1.0), preencher com um título (é comum usar uma estrutura que indique a data e a versão da release) e uma descrição.Também  é possível selecionar a opção “Set as a pre-release” caso essa ainda não seja uma versão de lançamento.

Clicando em “Publish release”, temos nossa primeira release publicada e qualquer pessoa que acessar nosso projeto saberá como está o andamento do projeto, bem como as funcionalidades desta versão.

### Conventional Commits
O **Conventional Commits** é uma convenção simples de mensagens de commit, que segue um conjunto de regras para criar um histórico de commit explícito e bem estruturado.

A mensagem do commit deve ser estruturada da seguinte forma:

`<tipo>[escopo opcional]: <descrição>`  
`[corpo opcional]`  
`[rodapé(s) opcional(is)]`

O commit contém os seguintes elementos estruturais, para comunicar a intenção ao utilizador da sua biblioteca:

1. **fix**: um commit do tipo fix soluciona um problema na sua base de código (isso se correlaciona com ```PATCH``` do versionamento semântico).  
2. **feat**: um commit do tipo feat inclui um novo recurso na sua base de código (isso se correlaciona com ```MINOR``` do versionamento semântico).  
3. **BREAKING CHANGE**: um commit que contém no rodapé opcional o texto  `BREAKING CHANGE: `, ou contém o símbolo  `! ` depois do tipo/escopo, introduz uma modificação que quebra a compatibilidade da API (isso se correlaciona com  `MAJOR ` do versionamento semântico). Uma BREAKING CHANGE pode fazer parte de commits de qualquer *tipo*.  
4. Outros *tipos* adicionais são permitidos além de `fix:` e `feat:`, por exemplo ```@commitlint/config-conventional``` (baseado na ```Convenção do Angular```) recomenda-se  `build: `,  `chore: `,  `ci: `,  `docs: `,  `style: `,  `refactor: `,  `perf: `,  `test: `,  entre outros.
5. Outros *rodapés* diferentes de `BREAKING CHANGE: <descrição>` podem ser providos e seguem uma convenção similar ao ```git trailer format```.
