# Tarefa 01 - Git e GitHub com Markdown

###

## Informações pessoais
Nome: [Cláudio Pereira Teixeira de Araújo](https://github.com/Claudio-Arauj) <br>
GitHub: [Claudio-Arauj](https://github.com/Claudio-Arauj)<br>
Email: claudiopereira2004@gmail.com

###

## Informações do projeto
### Título: [Sistema de gerenciamento da Bonelaria Militar](https://github.com/mtzdantas/sistema-bonelaria.git)<br>
### Descrição: <br> 
O propósito do Sistema da Bonelaria Militar será desenvolver um sistema de informação para uma confecção de artigos militares, no qual será possível cadastrar os produtos fabricados, cadastrar as costureiras, além de cadastrar as saídas/entradas, cada costureira cadastrada receberá notificações de quando determinada matéria prima sair da fábrica para a sua residência, onde será confeccionado o produto (bonés, chapéus, calções entre outros), e a mesma vai poder confirmar que o produto foi recebido. Em cada costureira registrada, terá o relatório da quantidade de produtos já feitos, juntamente com os preços individuais de cada, no qual no final vai poder ser contabilizado o quanto foi o lucro de cada costureira individualmente de acordo com os produtos fabricados, dessa forma, será possível calcular o salário de forma prática além de trazer informações úteis para análise de dados sobre a produção de cada uma.

### Equipe 
* [Bruno Costa Souto](https://github.com/SoutoCB)
* [Cláudio Pereira Teixeira de Araújo](https://github.com/Claudio-Arauj)
* [Danilo Gabriel de Medeiros Brito](https://github.com/DaniloMano)
* [Felipe Augusto Araújo da Cunha](https://github.com/fel-ps)
* [Mateus Dantas de Oliveira](https://github.com/mtzdantas)

### Repositório do projeto no GitHub: https://github.com/mtzdantas/sistema-bonelaria.git

#

### Linguagem de programação usada no projeto

#### Linguagem de Programação: Dart

* O projeto será desenvolvido em Dart, uma linguagem moderna e eficiente, ideal para aplicações multiplataforma, especialmente com o uso do framework Flutter. Dart oferece boa performance, sintaxe clara e foco na produtividade do desenvolvedor.

* A equipe possui conhecimento intermediário em Dart, visto anteriormente no terceiro período na disciplina de Programação Orientada á Objetos, o que permite desenvolver, manter e evoluir o projeto com segurança e eficiência, aproveitando os recursos da linguagem de forma adequada. 

#### Framework: Flutter 

* O projeto utilizará o Flutter, um framework de código aberto desenvolvido pelo Google para a criação de aplicações nativas para múltiplas plataformas com uma única base de código. Com o Flutter, é possível desenvolver interfaces modernas, responsivas e de alto desempenho para Android, iOS, web e desktop.

* Sua arquitetura baseada em widgets permite grande flexibilidade na construção de interfaces personalizadas, além de oferecer um conjunto robusto de ferramentas e bibliotecas que aceleram o desenvolvimento. O recurso de hot reload também contribui para maior agilidade nos testes e ajustes durante o processo de programação.

#

### IDE: Visual Studio Code

O **Visual Studio Code (VS Code)** é um editor de código-fonte leve, gratuito e multiplataforma, desenvolvido pela Microsoft. Compatível com **Windows**, **macOS** e **Linux**, ele se destaca pela sua flexibilidade, vasta biblioteca de extensões e desempenho ágil.

Para projetos em **Flutter**, o VS Code é uma das ferramentas mais recomendadas por sua integração prática com o SDK do Flutter e o suporte completo à linguagem Dart.


#### Suporte ao Flutter e Dart

Com as extensões oficiais do Flutter e do Dart instaladas, o VS Code oferece:

* Sugestões de código (IntelliSense) específicas para Flutter/Dart  
* Hot Reload integrado para testes rápidos de UI  
* Templates e snippets para acelerar o desenvolvimento de interfaces com widgets  
* Execução de comandos Flutter diretamente pelo terminal do VS Code


#### Ferramentas de Depuração

O VS Code permite debugar aplicações Flutter de forma eficiente, oferecendo:

* Inserção de *breakpoints* em arquivos Dart  
* Visualização de variáveis em tempo real  
* Navegação pela **pilha de chamadas**  
* Terminal de depuração para análises dinâmicas


#### Integração com Controle de Versão

Possui suporte integrado ao **Git**, permitindo:

* Criação e gerenciamento de repositórios  
* Visualização de alterações no código  
* Realização de *commits*, *pushes*, *pulls* e resolução de conflitos  
* Navegação entre *branches* e histórico de versões

#

### Tutorial de um CRUD em Dart com Flutter framework 
> Curso gratuito do canal Cod3r Cursos: [Link](https://www.youtube.com/watch?v=ViahqKZzZ7Y)
* No [curso gratuito](https://www.youtube.com/watch?v=ViahqKZzZ7Y), são abordados os conceitos básicos do framework Flutter por meio de uma abordagem prática. Durante a aula, é desenvolvido um CRUD completo, o que facilita a compreensão dos principais recursos da ferramenta.

#

### Branches e Pull Requests com GitFlow

No controle de versões com Git e GitHub, o uso de **branches** permite o desenvolvimento paralelo de funcionalidades, correções ou melhorias sem afetar o código principal. Dentro do **GitFlow**, uma estratégia comum de ramificação, os principais tipos de branches são:

* `main` (ou `master`): representa o código em produção.
* `develop`: integra funcionalidades em desenvolvimento.
* `feature/*`: usado para novas funcionalidades, criados a partir de `develop`.
* `release/*`: prepara versões para produção, criados a partir de `develop`.
* `hotfix/*`: corrige problemas em produção, criados a partir de `main`.

Após o desenvolvimento em uma branch (por exemplo, `feature/login`), utiliza-se um **Pull Request (PR)** — também chamado de **Merge Request** — para solicitar a revisão e fusão do código na branch de destino, geralmente `develop`.

O PR permite:
* Análise de código por outros membros da equipe;
* Execução de testes automatizados;
* Discussões e ajustes antes da integração final.

Esse fluxo organiza o trabalho em equipe, evita conflitos e mantém o repositório principal sempre estável.

#