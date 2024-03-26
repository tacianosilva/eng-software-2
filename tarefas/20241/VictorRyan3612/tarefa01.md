# Tarefa 01 - Git e GitHub com Markdown

**nome**: Victor Ryan Galvão Silva

**github**: [VictorRyan3612](https://github.com/VictorRyan3612)

**email pessoal**: vitorsilva3612@gmail.com

**email institucional**: ryan.silva.706@ufrn.edu.br


## Projeto

**Titulo**: SigBordado

**Descrição**:

As casas de bordado são associações de bordadeiros profissionais que recebem demandas diversas, tais como bordados de redes, toalhas, panos de prato, roupas e entre outros. É importante que essas demandas estejam bem organizadas para que não ocorra erros durante a confecção dos bordados. O SIG-Bordado é um sistema com o objetivo de gerir tais demandas de serviço, facilitando a organização dos pedidos e seus detalhes. O sistema deve ser capaz de colaborar com a produção, atribuindo os pedidos aos clientes que os solicitaram e aos respectivos bordadeiros que irão confeccionar o item do pedido.


**Equipe**: 

- [Gabriel Wallace Canuto dos Santos](https://github.com/Japagabriel)
- [Luan Victor de Araujo Gomes](https://github.com/GomesLuan)
- [Pedro Henrique Ribeiro Alves](https://github.com/PHRAX8)
- [Victor Ryan Galvao Silva](https://github.com/VictorRyan3612)


**link**: https://github.com/GomesLuan/SigBordado


### Linguagem: Javascript
JavaScript é uma linguagem de programação de alto nível, interpretada, e multi-paradigma. Ela é amplamente utilizada para o desenvolvimento de páginas web interativas e dinâmicas. JavaScript pode ser executado tanto no lado do cliente (navegador) quanto no lado do servidor (usando plataformas como Node.js). Isso permite a criação de aplicações web completas usando apenas uma linguagem de programação. A linguagem também suporta operações assíncronas, o que significa que pode lidar com tarefas como solicitações de rede sem bloquear a execução do código. Isso é especialmente importante no desenvolvimento web, onde as interações do usuário e as solicitações de rede podem ocorrer simultaneamente. A equipe possui conhecimento básico da linguagem, tendo a utilizado anteriormente na disciplina de Programação Web.
### Linguagem: Python
Python é uma linguagem de programação de alto nível, interpretada, e de propósito geral, que se destaca por sua simplicidade, legibilidade e facilidade de aprendizado. Python suporta vários paradigmas de programação, incluindo programação orientada a objetos, programação imperativa e programação funcional. Isso oferece aos desenvolvedores uma grande flexibilidade na abordagem de problemas de programação. Uma das principais razões para a popularidade da linguagem é o seu vasto ecossistema de bibliotecas de terceiros. Essas bibliotecas permitem que os desenvolvedores aproveitem funcionalidades pré-existentes para acelerar o desenvolvimento de software. A equipe possui conhecimento intermediário na linguagem, tendo a utilizado anteriormente na disciplina de Algoritmos e Lógica de Programação, além de projetos diversos.


### Framework

Para o Frontend, será utilizado o framework ReactJS, que é comumente usado para construção de interfaces de usuário (UI), especialmente em aplicações web. O framework também é conhecido por sua abordagem de componentização e pela eficiência na atualização do DOM (Document Object Model). Para o Backend será utilizado Django, um framework de desenvolvimento web em Python que é conhecido por sua eficiência, simplicidade e escalabilidade.

### Tecnologias

Front-End: ReactJS

Back-End: Django

Banco de dados: Postgres e Docker

### IDE utilizada

Será utilizada a IDE Visual Studio Code, conhecida por sua leveza, rapidez e extensibilidade. O VS Code possui um depurador integrado para debug, permitindo que os desenvolvedores inspecionem variáveis, definam pontos de interrupção, executem passo a passo e monitorem o estado do aplicativo durante a execução. Além disso, a IDE possui integração nativa com o Git, o sistema de controle de versão mais popular. Ele fornece uma interface gráfica para executar operações Git comuns, como commit, pull, push, merge, entre outras. Os desenvolvedores podem visualizar as alterações nos arquivos, comparar versões, e gerenciar branches diretamente no editor.


https://www.youtube.com/watch?v=GLm-_NwlSyE

no vídeo acima, a apresentadora faz um passo a passo de para a instalação e implementação de um CRUD em django usando como exemplo um sistema de estudantes.


## branches e pull request

O uso de branches alternativas à master ou main, serve para diversas finalidades, entre elas, evitar que o código estável seja "contaminado" por códigos não estáveis ou em desenvolvimento, principalmente quando envolve vários desenvolvedores, no sentido de gitflow, cada branch possui sua respectiva responsabilidade, por exemplo, a develop, que possui um conjunto de funcionalidades que irão para a main, a feature sendo criada a partir da develop para a criacao de uma unica funcionalidade, em seguinda indo para a deveop, seguindo esse processo, chega a hora da criacao da release, onde prepara a develop para a main, após isso, a main recebe o novo código, porém, pode acontecer de ser necessaria uma correção, nesse caso, a brach de suporte hotfix se faz necessária, assim, responsável por corrigir e atualizar a main.

Todas essas relações onde uma branch envia seu conteúdo para outra, é usado o pull request, e após isso, se confirmado, acontece o merge, onde a branch final recebe o novo código.


## Versionamento Semântico

O versionamento semântico consiste em padronizar as versões do software, sendo delegadas 3 numeros, no formato x.y.z, onde x é a major, onde indica incompatibilidade com verões major anteriores, y é a minor onde indica nova funcionalidade, e z é a patch, onde há conrreções.

