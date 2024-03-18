# Tarefa 01 - Git e GitHub com Markdown

* Nome: Fábio Fabrício Souza de Araújo
* Usuário do Git: FabioAra
* Email: fabio.araujo.@ufrn.edu.br

## Questão A:
## NOME DO PROJETO: Documento de Visão - Sistema de Gestão para Assistência Técnica de Celular
## Descrição do Projeto: 
O Projeto tem como função principal, manter a eficiência e o controle de uma loja de departamentos eletrônicos, principalmente na assistência técnica, o site possui interfaces de simples estrutura para que haja uma simplificação na interação do usuário com o programa, fazendo assim, uma filtragem de dados melhor e principalmente acessibilidade para leigos da tecnologia. Outrossim, em resumo, por meio do site será possível agendar, remarcar e cancelar consultas técnicas para aparelhos remotos, como também irá exibir informações como datas disponíveis para agendamentos. Também, irá exibir dados de relatórios, como exemplo quais dispositivos(marca) deram mais problemas em tal período solicitado.

## Equipe
Fábio Araújo, Flávio Glaydson, Gabriel Santos, Laian Kevin e Samuel Gutemberg.

## Repositório do Projeto:
* link do projeto: https://github.com/flaviogui/TechCell-Pro

## Questão B:

## Linguagem do projeto
 A linguagem escolhida para fazer o projeto será o pyton, o domínio e experiência da equipe com essa linguagem é intermediária.

## Questão C:

os framework's utilizados no projeto serão o Django e Vue.js 

### Django
é um framework de desenvolvimento web em Python que facilita a criação de aplicativos web complexos e robustos. Ele segue o princípio do "batteries-included", o que significa que vem com uma grande variedade de funcionalidades integradas.
### Vue.js
É uma biblioteca JavaScript progressiva para a construção de interfaces de usuário. Ela é usada principalmente no lado do cliente (frontend) para criar interfaces de usuário interativas e dinâmicas. 

## Questão D:

### IDE
A IDE escolhida para o desenvolvimento do trablaho é o VScode (Integrated Development Environment) popular desenvolvida pela Microsoft.

__ferramentas de debug__
O VS Code possui uma poderosa funcionalidade de depuração integrada que suporta várias linguagens de programação, incluindo JavaScript, TypeScript, Python, C ++ e muitas outras. 

__controle de versão__
O VS Code tem integração direta com sistemas de controle de versão, principalmente o Git, permitindo que os desenvolvedores gerenciem seus repositórios diretamente do editor. Algumas das funcionalidades de controle de versão incluem:

* Interface do usuário para Git: 
O VS Code oferece uma interface de usuário intuitiva para realizar operações Git comuns, como commit, push, pull, merge, branch, rebase, entre outras.

* Suporte a diffs: 
Permite visualizar e revisar as diferenças entre arquivos antes de commitá-los, facilitando o controle de versão do código.

* Integração com repositórios remotos: 
Além de trabalhar com repositórios locais, o VS Code pode se integrar a repositórios remotos, como GitHub, Bitbucket e GitLab, facilitando a colaboração em projetos distribuídos.

## Questão E:

* link de tutorial para fazer um crud usando Pyton: https://dev.to/driuzim/criando-um-crud-simples-com-python-opl

Basicamente o artigo mostra que para fazer um crud usando pyton de forma simples, é só instalar uma biblioteca de acesso de banco de dados, como o SQLAlchemy. Em seguida o artigo mostra como instalar a biblioteca e como usá-la.

## Questão F:

__Branches:__

Branches em Git são ramificações do código principal que permitem que você trabalhe em funcionalidades ou correções de bugs de forma isolada, sem afetar o código principal (branch principal ou master).

__Benefícios das Branches:__

1- Permitem desenvolver várias funcionalidades simultaneamente.
2- Isolam o trabalho em progresso, mantendo o código principal estável.
3- Facilitam a colaboração em equipe, permitindo que os membros trabalhem em partes separadas do projeto sem interferir uns com os outros.

__GitFlow:__

No modelo GitFlow, são definidos vários tipos de branches, como master, develop, feature, release e hotfix.
O master representa a versão estável do código em produção.

*O develop é onde o desenvolvimento ativo ocorre.
*As branches feature são usadas para desenvolver novas funcionalidades.
*As branches release são criadas para preparar o próximo lançamento.
*As branches hotfix são para correção de bugs críticos na produção.

__Pull Requests (ou Merge Requests):__


Um Pull Request (PR) é uma solicitação para integrar as alterações de uma branch para outra.
Geralmente, é usado para mesclar o trabalho de uma branch de feature para a branch de desenvolvimento (develop) ou de uma branch de release para a branch master.

__Benefícios dos Pull Requests:__

1- Permitem revisão de código por pares, melhorando a qualidade do código.
2- Facilitam a comunicação entre os membros da equipe sobre alterações propostas.
3- Oferecem uma oportunidade para integração contínua e teste automatizado antes da mesclagem.

## Questão G:

__Resumo sobre Versionamento Semântico__

O texto discute o problema do "inferno das dependências" no gerenciamento de software, onde o aumento da complexidade e do número de pacotes pode levar a dificuldades na atualização e compatibilidade entre versões. Propõe-se uma solução na forma de um conjunto de regras denominado "Versionamento Semântico", que define como os números de versão devem ser atribuídos e incrementados para transmitir significado e facilitar o gerenciamento de dependências.

As regras do Versionamento Semântico são baseadas em práticas comuns tanto em softwares fechados quanto em open-source. Elas exigem a declaração de uma API pública, clara e precisa, e estabelecem padrões para incrementos nos números de versão, como correção de bugs, adição de funcionalidades compatíveis e alterações incompatíveis.

O documento detalha especificações sobre o formato dos números de versão, a manipulação de versões pré-lançamento e metadados de construção, além de fornecer orientações sobre precedência entre versões. Também inclui uma seção de perguntas frequentes abordando preocupações comuns sobre o uso do Versionamento Semântico.

O texto destaca a importância de uma documentação clara da API pública e argumenta que seguir essas regras pode tornar o gerenciamento de dependências mais eficiente e prevenir o "inferno das dependências". Conclui incentivando os desenvolvedores a adotarem o Versionamento Semântico e a seguir as regras propostas para melhorar a compatibilidade e facilitar o processo de atualização de software.


