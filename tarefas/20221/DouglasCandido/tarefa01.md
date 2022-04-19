# Tarefa 01 - Git e GitHub com Markdown

## Seção 0: Aluno

Nome: Douglas Mateus Soares Cândido da Silva

GitHub: DouglasCandido

Email: douglasmateus1@hotmail.com

## Seção 1: Sobre o projeto

### Título

SABIDO: Student Appointment Book Integrated with Django On the fly   

### Descrição

SABIDO é um aplicativo desenvolvido com o objetivo de ajudar os estudantes a organizarem suas tarefas e rotinas.

### Equipe

[Danrley Daniel Moreira Sales / danrleydaniel](https://github.com/danrleydaniel)  (Primeiro Gerente)

[Douglas Mateus Soares Cândido da Silva / douglascandido](https://github.com/douglascandido)

[Edinalda Cristina Alves de Medeiros / edinaldaufrn](https://github.com/edinaldaufrn)

[Gabriel Azevedo dos Santos / gabrielazevedods](https://github.com/gabrielazevedods)

[Gabriel Gonçalo da Costa / gabrielgoncalo](https://github.com/gabrielgoncalo)

[Lucas da Silva Santos / lucassilva01](https://github.com/lucassilva01)

### Link para o repositório do projeto

https://github.com/gabrielazevedods/engenharia-de-software-II

## Seção 2: Linguagem de programação utilizada no projeto

### Ferramentas utilizadas

A equipe optou por utilizar o framework Django para desenvolver o aplicativo SABIDO. Essa decisão foi tomada em virtude da experiência prévia, e amplamente satisfatória, dos membros da equipe com a linguagem de programação Python: uma vez que os códigos feitos utilizando o Django são escritos em Python.

Será utilizado HTML, CSS e JavaScript para o Front-end.

Será utilizado o SGBD PostgreSQL para manter os dados.

### Experiência da equipe com as ferramentas

Os membros da equipe já tiveram experiências prévias com as ferramentas que serão utilizadas em disciplinas cursadas ao longo do curso, porém entraram em consenso que devem estudar e treinar Django para, só então, começarem a codificar.

## Seção 3: Framework utilizado no projeto

### Django

A equipe decidiu utilizar o framework Django, pois os membros gostaram da experiência na aprendizagem da linguagem de programação Python. Além disso, o professor da disciplina (Engenharia de Software 2) Taciano Silva concordou em fornecer ajuda aos membros da equipe com o Django, pois ele já desenvolveu vários projetos e acumulou conhecimento sobre o framework.

O Django é um framework que busca fornecer ao programador um rápido desenvolvimento de aplicativos web, porém robusto. Isso é possível pois o mesmo simplifica a dor de cabeça inicial do programador que é causada em configurar o ambiente de desenvolvimento web, uma vez que ele conta com uma grande gama de funcionalidades integradas, fundamentadas na arquitetura MVC (Model-View-Controller) que está implementada no framework como uma nova forma conhecida como MVT (Model-View-Template), que buscam principalmente o enlace entre o servidor web (Que irá controlar as requisições e respostas solicitadas pelo browser), os dados mantidos pelo banco de dados e a interface com o usuário.

<!-- 

![alt Django](https://www.researchgate.net/profile/John-Handley-2/publication/279198179/figure/fig2/AS:294420277678096@1447206672815/Main-components-of-the-full-stack-with-Django-framework-being-at-the-core.png) 

-->

## Seção 4: Sobre a IDE que será utilizada

### Microsoft Visual Studio

A equipe decidiu utilizar a IDE Microsoft Visual Studio, pois utilizam-na rotineiramente para codificar tudo que precisam e em virtude da sua simplificidade e possibilidade de instalar diversas extensões que ajudam no desenvolvimento. Além disso, ela já possui integração com o git, possibilitando um ótimo controle de versionamento. Quanto à depuração, o Visual Studio possui uma excelente ferramenta já integrada, ela possibilita o programador acompanhar o fluxo de execução do código, bem como saber em que momento os valores das variáveis são alterados, destacar as linhas em que ocorreram os erros e apontar possíveis soluções. 

## Seção 5: Tutorial que ensina a implementar funcionalidades CRUD na tecnologia escolhida

### Tutorial escolhido: https://www.youtube.com/watch?v=N6jzspc2kds

Disponível no Youtube e feito pelo canal CodAffection, esse tutorial é bastante didático e ensina desde a instalação do Django até as funcionalidades CRUD com a implementação de um sistema que gerencia dados de empregados de uma empresa, além de também utilizar Bootstrap para melhorar a aparência dos templates.

## Seção 6: Branches e Pull Request

No Git, Branches são como ramos de uma árvore, pois ramificam o fluxo de implementação das funcionalidades de um determinado projeto. Os Branches são criados justamente para que os programadores de um projeto de software possam desenvolver funcionalidades diferentes em paralelo, assim otimizando o processo de desenvolvimento e garantindo que a integridade do núcleo (Core) do código permaneça preservada, embora novas funcionalidades estejam sendo criadas. 

A função Pull Request do Git é uma solicitação para mesclar e integrar as novas mudanças feitas em cópias (Clones) do repositório à arvore principal (Origin = Orígem) do repositório. Por exemplo: são mudanças que um programador responsável por uma funcionalidade que foi desenvolvida em um branch separado do Main (Principal) requisita ao gerente do branch Main para unir (Acoplar) o seu trecho de código que implementa tal nova funcionalidade ao código que está no branch Main, geralmente o núcleo principal do software (Com as funcionalidades principais que, normalmente, já foram testadas e consolidadas). 

## Seção 7: Versionamento Semântico

Trata-se de um conjunto de diretrizes e regras que definem como os números das versões de um software devem ser estabelecidos (Justamente para garantir o controle do desenvolvimento e a gestão de dependências), considerando se as novas alterações são compatíveis ou incompatíveis com as versões anteriores. 

As regras estabelecem que a nomenclatura de uma nova versão do software deve ser estabelecida pela seguinte forma de três números separados por pontos finais: n.n.n, onde cada n é um número natural. O primeiro número se refere à versão Major (Maior) e simboliza que essa versão é teve mudanças drásticas no núcleo do código e é incompatível com as versões anteriores. O segundo número se refere à versão Minor (Menor) e destaca que novas funcionalidades foram adicionadas, porém elas são compatíveis com o código já existente. O terceiro e último número é o Patch (Correção) e é atualizado quando uma nova versão com o propósito de corrigir bugs é lançada, preservando a compatibilidade do código.


## Seção 8: Conventional Commits 

Se relaciona intimamente com o Versionamento Semântico por se tratar de um conjunto de regras e diretrizes sobre como escrever as mensagens dos commits, garantindo a padronização. As mensagens dos commits devem ser escritas obedecendo uma sintaxe: 

tipo [escopo opcional]: descrição

[corpo opcional]

[rodapé(s) opcional(is)]

fix se relaciona com o número Patch do Versionamento Semântico, pois se trata de um commit com o objetivo de consertar algum bug.

feat se relaciona com o número Minor do Versionamento Semântico, pois se trata do de um commit que simboliza o desenvolvimento de uma nova funcionalidade.

BREAKING CHANGE é o texto que pode ser escrito em qualquer tipo de commit e simboliza que as mudanças trazidas por esse commit podem ou vão tornar o código incompatível com as versões anteriores, por isso esse tipo de sinalização está relacionada com o número Major do Versionamento Semântico.

Existem outros tipos de commit, dependendo das políticas e particularidades escolhidas pelos próprios desenvolvedores do software.







