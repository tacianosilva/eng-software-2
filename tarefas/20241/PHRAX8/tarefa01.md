# Tarefa 01 - Git e GitHub com Markdown

**Nome:** Pedro Henrique Ribeiro Alves

**Github:** [PHRAX8](https://github.com/PHRAX8)

**Email:** pedro.ribeiro.121@ufrn.edu.br

## Informações sobre o Projeto

### Título:

SIG-Bordado

### Descrição:

As casas de bordado são associações de bordadeiros profissionais que recebem demandas diversas, tais como bordados de redes, toalhas, panos de prato, roupas e entre outros. É importante que essas demandas estejam bem organizadas para que não ocorra erros durante a confecção dos bordados. O SIG-Bordado é um sistema com o objetivo de gerir tais demandas de serviço, facilitando a organização dos pedidos e seus detalhes. O sistema deve ser capaz de colaborar com a produção, atribuindo os pedidos aos clientes que os solicitaram e aos respectivos bordadeiros que irão confeccionar o item do pedido.

### Equipe:

- [Gabriel Wallace Canuto dos Santos](https://github.com/Japagabriel)
- [Luan Victor de Araujo Gomes](https://github.com/GomesLuan)
- [Pedro Henrique Ribeiro Alves](https://github.com/PHRAX8)
- [Victor Ryan Galvao Silva](https://github.com/VictorRyan3612)

### Repositório:

https://github.com/GomesLuan/SigBordado.git

### Linguagem: Javascript

JavaScript é uma linguagem de programação de alto nível amplamente utilizada na criação de páginas web dinâmicas e interativas. Sua versatilidade permite sua execução tanto no lado do cliente quanto no lado do servidor. Ela também oferece suporte a operações assíncronas, possibilitando o processamento de tarefas como solicitações de rede sem interromper a execução do código. O conhecimento básico da equipe sobre JavaScript foi adquirido durante a disciplina de Programação Web.

### Linguagem: Python

Python é reconhecida como uma linguagem de programação de alto nível, notória por sua simplicidade e clareza. Suportando programação orientada a objetos, imperativa e funcional, Python atrai diversos desenvolvedores. Sua popularidade é impulsionada pela extensa quantidade de bibliotecas, facilitando o desenvolvimento. A equipe demonstra um conhecimento intermediário em Python, adquirido através da disciplina de Algoritmos e Lógica de Programação.

### Framework

No Frontend, optamos pelo framework ReactJS, amplamente empregado na criação de interfaces de usuário para aplicações web. Este framework é reconhecido por sua abordagem de componentização e pela eficiência na atualização do Document Object Model (DOM). Para o Backend, escolhemos o Django, um framework de desenvolvimento web em Python que se integra facilmente em diversos projetos.

### Banco de Dados

O PostgreSQL, um sistema gerenciador de banco de dados objeto relacional (SGBD). Destacando-se entre os SGBDs de código aberto, o PostgreSQL oferece recursos como consultas complexas, integridade transacional, controle de concorrência multiversão e suporte ao modelo híbrido objeto-relacional. 

O Docker é uma plataforma de serviço (PaaS) que utiliza virtualização de nível de sistema operacional em contêineres. Esses contêineres são isolados uns dos outros, contendo seus próprios softwares, bibliotecas e arquivos de configuração. Com canais de comunicação bem definidos, os contêineres podem interagir entre si de forma organizada e eficiente. 

### IDE

Optamos pelo Visual Studio Code como ambiente de desenvolvimento. Este software conta com um depurador integrado para facilitar o processo de identificação e correção de bugs, permitindo que os desenvolvedores inspecionem o estado do aplicativo durante sua execução. Além disso, o Visual Studio Code oferece integração nativa com o Git, fornecendo uma interface gráfica intuitiva para realizar operações comuns, como commit, pull, push e merge, simplificando o fluxo de trabalho.

### Exemplo de CRUD
* [Develop a Full Stack CRUD Application using Django and React JS](https://www.youtube.com/watch?v=GLm-_NwlSyE)

O video mostra como é o desenvolvimento de um CRUD integrando Django e ReactJS, abordando a criação de modelos e padrões de URL no backend. Também é mostrado como fazer um formulário e gerenciar requisições para uma rest api no frontend.

### Branches e Pull Request

Os branches facilitam o trabalho dos desenvolvedores ao permitir que trabalhem em funcionalidades e correções de forma independente do código principal. Essa prática evita conflitos entre diferentes partes do código e possibilita que as alterações sejam desenvolvidas sem interferir no trabalho dos demais programadores. No modelo GitFlow, os branches são divididos em cinco tipos: Master, Develop, Features, Release e Hotfix. Cada tipo possui um propósito específico, contribuindo para a eficiência do fluxo de trabalho.

Um pull request é uma solicitação para integrar as alterações de duas branches, proporcionando uma oportunidade para revisão e feedback, o que contribui para garantir a qualidade do código. No contexto do modelo GitFlow, os pull requests desempenham diversos papéis, como:

- Transferir uma funcionalidade do branch de Features para a Develop; 
- Mesclar um branch de Hotfix para a Master após a correção de um novo bug; 
- Retornar a Release para a Develop para revisão adicional do código.

### Versionamento Semântico

É um padrão estabelecido para atribuir números de versão a softwares, seguindo um formato composto por três números separados por pontos. O número Major, o primeiro, reflete alterações incompatíveis com versões anteriores. O segundo, o Minor, indica adições de funcionalidades compatíveis com versões anteriores. Enquanto o terceiro e último número, o patch, representa correções de bugs. 

### Conventional Commits

Constituem uma convenção para mensagens de commit, visando padronizar a comunicação das alterações realizadas durante o desenvolvimento de um software. Esta prática segue um formato que inclui um prefixo indicativo do tipo de mudança efetuada, tais como "feat" para novas funcionalidades, "docs" para atualizações de documentação, "fix" para correções de bugs, entre outros. A adoção dessa padronização facilita a compreensão do histórico de alterações do projeto, contribuindo para uma melhor organização e comunicação entre os membros da equipe.