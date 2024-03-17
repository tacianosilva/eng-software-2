# Tarefa 01 - Git e GitHub com Markdown 
### Isa Kaillany Soares Pereira | IsaKaillany | isa.soares.709@ufrn.edu.br

---

## Projeto: SigQueijaria

### Descrição: 
O projeto Sistema de Queijaria (SQ) é um sistema caracterizado por possuir diversas funções, dentre elas estão o controle de atividades, o gerenciamento dos fornecedores, a identificação e o controle dos processos internos da queijaria, os quais vão desde a entrada da matéria-prima no sistema até o destino final do produto, ou seja, até a compra do produto final pelo consumidor. Ademais, o SQ tem como propósito o desenvolvimento de um software que registra dados de uma queijaria artesanal, incluindo o lucro, as entradas e saídas financeiras, os tipos de produtos comercializados, o estoque, os prazos de validade, bem como o histórico de vendas e os gastos, com o objetivo de informatizar e automatizar a empresa com recursos administrativos mais sofisticados e eficientes.

### Equipe:  
- Erick Bezerra
- Felipe Souza
- Isa Kaillany
- Manuelly Rodrigues
- Melque Trindade
- Thamiris Borges

### [Link do repositório](https://github.com/melquetrindade/sigQueijaria)

### Linguagens de programação que serão usadas no projeto
<strong>Python</strong> é uma linguagem de programação de alto nível, interpretada, orientada a objetos e com tipagem dinâmica. Ela possui uma sintaxe simples e legível, facilitando o desenvolvimento e compreensão do código, também possui uma grande e ativa comunidade de desenvolvedores, contribuindo com recursos, tutoriais, documentação e pacotes, caracterizada pela colaboração e apoio mútuo.

<strong>JavaScript</strong> é uma linguagem de programação amplamente utilizada para desenvolvimento web. Ela é conhecida por sua capacidade de tornar as páginas da web interativas e dinâmicas

Nossa equipe tem conhecimento intermediário em ambas as linguagens e todos já desenvolveram projetos utilizando-as.

### Frameworks que serão usados no projeto
<strong>Django</strong> é um framework web de alto nível, escrito em Python, que incentiva o desenvolvimento rápido e limpo de aplicativos web. Foi desenvolvido para facilitar a criação de sites complexos, fornecendo uma estrutura robusta e eficiente para lidar com muitas das tarefas comuns encontradas no desenvolvimento web.

### IDE que será usada no projeto
O Visual Studio Code (também conhecido como VS Code) é um editor de código-fonte desenvolvido pela Microsoft que se destaca pela sua leveza, rapidez e extensibilidade. Apesar de ser oferecido pela Microsoft, o Visual Studio Code é um software de código aberto e gratuito, o que contribuiu significativamente para sua popularidade entre os desenvolvedores. </br>

#### Ferramentas de Depuração:
O Visual Studio Code oferece uma série de ferramentas de depuração poderosas e flexíveis que permitem aos desenvolvedores encontrar e corrigir problemas no código de forma eficiente. Algumas das principais características das ferramentas de depuração do VS Code incluem:

- Pontos de Interrupção (Breakpoints)
- Inspeção de Variáveis
- Execução Passo a Passo
- Console de Depuração
 
#### Controle de Versão Integrado:
O Visual Studio Code oferece integração nativa com sistemas de controle de versão, como Git, o que permite aos desenvolvedores gerenciar facilmente o controle de versão de seus projetos diretamente do editor. Algumas das principais características do controle de versão integrado do VS Code incluem:

- Interface Gráfica para Git
- Controle de Ramificações
- Visualização de Diferenças
- Suporte a Extensões de Controle de Versão

### Link de CRUD
[Django 4 - CRUD completo em ~30 minutos](https://www.youtube.com/watch?v=GGBzMpIAgz4)

Os tutoriais acima cobrem o processo de criação, listagem, edição e remoção de objetos no django desde a criação de um novo app, passando pela definição de modelos no models.py e pela lógica implementada nas views, e indo até a renderização desses dados no html. 

### Branches e pull request usando o git e github com o GitFlow
**Branches no GitFlow:**

- Branch Main: No GitFlow, a branch main é considerada a branch principal e deve sempre refletir o estado estável e pronto para produção do código.

- Branch Develop: A branch develop é onde o desenvolvimento ativo ocorre. Ele reflete o estado mais recente do código em desenvolvimento e é onde as novas funcionalidades são integradas antes de serem liberadas para produção.

- Branches de Feature: Para desenvolver novas funcionalidades ou resolver problemas específicos, os desenvolvedores criam branches de feature a partir da branch develop. Cada feature branch é usada para trabalhar em uma única funcionalidade ou correção de bug e é mesclada de volta ao branch develop quando concluída.

**Pull Requests (ou Merge Requests) com o GitHub:**

- Criar um Pull Request: Quando uma funcionalidade ou correção de bug está pronta para revisão, o desenvolvedor cria um pull request no GitHub para mesclar sua feature branch de volta ao branch develop. O pull request inclui informações sobre as mudanças feitas e pode ser revisada por outros membros da equipe antes da mesclagem.

- Revisão e Comentários: Outros membros da equipe revisam o código, fazem comentários e sugerem alterações, se necessário, diretamente no pull request. Isso permite uma colaboração eficiente e transparente entre os membros da equipe.

- Testes Automatizados: Muitas vezes, os pull requests estão configurados para acionar testes automatizados para garantir que as alterações propostas não quebrem o código existente ou introduzam novos bugs.

- Aprovação e Mesclagem: Uma vez que o pull request tenha sido revisado, testado e aprovado, ele pode ser mesclado na branch develop. Isso incorpora as alterações da feature branch no código base e as torna disponíveis para todos os membros da equipe.

- Encerramento do Pull Request: Após a mesclagem, o pull request é fechado e seu histórico permanece disponível para referência futura.

### Versionamento Semântico
O Versionamento Semântico é uma abordagem para atribuir versões aos softwares de forma consistente e significativa. Ele define um conjunto de regras e convenções para numerar as versões de um software, de modo que os desenvolvedores e usuários possam entender rapidamente o impacto das alterações em uma nova versão.

As versões no Versionamento Semântico seguem o formato MAJOR.MINOR.PATCH, onde:

- MAJOR: Indica mudanças incompatíveis na API. Ou seja, quando uma nova versão MAJOR é lançada, isso geralmente significa que o software teve alterações que podem quebrar a compatibilidade com versões anteriores. Por exemplo, adicionar ou remover funcionalidades de forma que o código antigo não seja mais compatível.

- MINOR: Indica adições de funcionalidades, mas de forma retrocompatível. Ou seja, quando uma nova versão MINOR é lançada, isso significa que foram adicionadas novas funcionalidades, mas as APIs existentes ainda são compatíveis com as versões anteriores.

- PATCH: Indica correções de bugs ou pequenas melhorias que mantêm a compatibilidade com versões anteriores. Uma versão PATCH indica que foram feitas correções de bugs ou ajustes menores que não alteram a API do software.

### Conventional Commits
Conventional Commits é uma convenção para escrever mensagens de commit em projetos de desenvolvimento de software. Ele define um padrão para estruturar mensagens de commit de forma consistente e significativa, facilitando a compreensão do propósito e do impacto de cada alteração no código.

As mensagens de commit seguindo a convenção Conventional Commits geralmente têm a seguinte estrutura:

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```
Onde:

**Tipo:** Indica o tipo de alteração feita no commit. Alguns exemplos comuns de tipos incluem:

- feat: Para uma nova funcionalidade adicionada.
- fix: Para uma correção de bug.
- docs: Para alterações na documentação.
- style: Para alterações que não afetam o comportamento do código (por exemplo, formatação, ponto e vírgula ausente).
- refactor: Para alterações que não adicionam novas funcionalidades nem corrigem bugs, mas envolvem refatoração de código existente.
- test: Para adição ou modificação de testes.
- chore: Para alterações relacionadas à tarefa de construção ou ferramentas de desenvolvimento.

**Escopo (opcional):** O escopo opcional fornece um contexto adicional sobre a área do código afetada pela alteração.

**Descrição:** Uma breve descrição da alteração feita no commit.