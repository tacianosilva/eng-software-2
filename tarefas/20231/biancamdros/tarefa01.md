# Tarefa 01 - Git e GitHub com Markdown
* * *
* Nome: **Bianca Laíse Medeiros Cassiano**
* Usúario: **[biancamdros](https://github.com/biancamdros)**
* E-mail: **<bianca.medeiros.098@ufrn.edu.br>**
* * *

## ControlCash 💸

**Descrição** 

Sistema para controle de caixa e gerenciamento de estoque simplificado desenvolvido usando Django.

**Equipe:**

* [Adriel Faria dos Santos](https://github.com/br-adriel)
* [Alef Luciano Silva](https://github.com/AlefLuciano)
* [Bianca Laise Medeiros Cassiano](https://github.com/biancamdros)
* [Cintia Campos de Queiroz](https://github.com/cintiacq)
* [Guilherme Angelo de Medeiros](https://github.com/GuilhermeAngelo)
* [Hilário Petronio de Medeiros Dantas](https://github.com/hilariodantas)

**Link do repositório:**

* [Control Cash](https://github.com/Control-Cash/controlcash/tree/main)

**Python**

Python é uma linguagem de programação de alto nível, interpretada e orientada a objetos. Foi criada por Guido van Rossum e lançada pela primeira vez em 1991. Python se destaca por sua simplicidade, legibilidade de código e ênfase na produtividade do desenvolvedor. Sua versatilidade, legibilidade e facilidade de uso a tornam uma opção popular entre desenvolvedores em todo o mundo.

Todos os integrantes do grupo possuem um bom domínio e experiência com a linguagem escolhida.

**Django**

Django é um framework web de alto nível escrito em Python. Ele fornece um conjunto de ferramentas e bibliotecas que ajudam a simplificar o desenvolvimento de aplicativos web robustos e escaláveis. Django segue o padrão Model-View-Controller (MVC) para arquitetura de software, onde o modelo representa os dados, a visão lida com a lógica de apresentação e o controlador gerencia a interação entre o modelo e a visão. No geral, o Django é um framework poderoso e popular para o desenvolvimento de aplicativos web. Ele permite que os desenvolvedores construam aplicativos de forma eficiente, seguindo as melhores práticas e aproveitando a rica funcionalidade fornecida pelo framework.

**Visual Studio Code**

O Visual Studio Code, também conhecido como VS Code, é um editor de código-fonte desenvolvido pela Microsoft. Ele foi lançado em 2015 e se tornou um dos editores mais populares entre desenvolvedores de software devido à sua flexibilidade, extensibilidade e facilidade de uso.


**CRUD**
https://www.youtube.com/watch?v=GGBzMpIAgz4
O link acima faz um pequeno resumo inicialmente explicando como funciona o framework e quais são suas aplicações, logo depois inicia a explicação do CRUD e realiza um CRUD simples para demonstrar o que foi explicado.

**Branches, Pull Request e GitFlow**

Branches:
No Git, um branch é uma ramificação do código principal que permite que você trabalhe em alterações isoladas sem afetar o código existente na branch principal (geralmente chamada de "branch padrão" ou "branch master" no GitFlow). Os branches permitem que você desenvolva recursos, corrija bugs ou faça experimentos em paralelo, mantendo um histórico separado de commits para cada branch.

Ao criar um novo branch, você pode alternar para ele para começar a fazer suas alterações. Isso mantém seu trabalho isolado dos outros desenvolvedores até que você esteja pronto para compartilhar suas alterações.

Pull Requests (ou Merge Requests):
Um pull request (PR) ou merge request (MR) é um mecanismo de colaboração usado no GitHub (e em outras plataformas de hospedagem do Git) para revisar e mesclar alterações de um branch para outro. Em vez de fazer uma mesclagem direta, o pull request permite que outros membros da equipe revisem seu código, façam comentários e sugiram alterações antes de aceitar e mesclar as alterações na branch principal.

Ao criar um pull request, você pode adicionar descrições, mencionar as pessoas envolvidas e discutir as alterações propostas. Os revisores podem deixar comentários, fazer perguntas e aprovar as alterações. Uma vez que as discussões são concluídas e as alterações são aprovadas, o pull request pode ser mesclado (merged) na branch principal.

GitFlow:
GitFlow é um modelo de fluxo de trabalho para controle de versão com o Git. Ele define uma estrutura de branches e regras para integração e mesclagem de alterações. Possui duas branches principais: "master" (ou "main") e "develop". Além disso, sugere o uso de branches de recurso, branches de lançamento e branches de hotfix para diferentes propósitos. O GitFlow facilita a colaboração em equipe e o controle de versões em projetos Git.

**Versionamento Semântico**

O Versionamento Semântico (SemVer) é um sistema que define regras para atribuir e incrementar os números de versão em um software. Ele aborda o problema do "inferno das dependências" e fornece uma estrutura para gerenciar as mudanças em um projeto de maneira fácil e segura.

Segundo o SemVer, uma versão consiste de três partes: X.Y.Z, onde X é a versão Maior, Y é a versão Menor e Z é a versão de Correção. O incremento dessas versões segue regras específicas:

Versão de Correção (Z) é incrementada para correções de bugs que não afetam a API pública.
Versão Menor (Y) é incrementada para introdução de novas funcionalidades compatíveis com versões anteriores da API.
Versão Maior (X) é incrementada para mudanças incompatíveis na API pública.
O versionamento pré-lançamento e os metadados de construção podem ser adicionados para indicar versões instáveis ou adicionar informações extras, respectivamente.

O Versionamento Semântico oferece uma forma consistente de controlar e comunicar as alterações em um software, garantindo que as mudanças sejam compreendidas com base no número de versão. Isso facilita a gestão das dependências e garante que os desenvolvedores possam entender as implicações de atualizar para diferentes versões de um software.

**Conventional Commits**

A especificação do Conventional Commits é uma convenção para mensagens de commit que facilita a criação de históricos de commit explícitos. Ela se alinha com o Versionamento Semântico e descreve recursos, correções e modificações que quebram a compatibilidade. A mensagem de commit segue uma estrutura específica, incluindo um tipo, um escopo opcional, uma descrição e seções adicionais para o corpo e rodapé. O tipo pode ser "fix" para correções, "feat" para novos recursos e outros tipos adicionais são permitidos. A quebra de compatibilidade pode ser indicada com o texto "BREAKING CHANGE". Essa convenção ajuda a automatizar a criação de changelogs, determinar alterações no versionamento semântico, comunicar mudanças e facilitar a colaboração em projetos.

