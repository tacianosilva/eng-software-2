# Tarefa 01 - Git e GitHub com Markdown

## Nome: Emerson da Silva Santos | Github: Simio123 | E-mail: emerson.santos.125@ufrn.edu.br

## Descrição
**Nome**: Sis-Pedidos 
**Descrição**: Sistema feito para pedidos de restaurante

### Equipe
Diego Dantas <br>
Emerson da Silva <br>
João Pedro dos Santos <br>
Reinaldo Alves <br>
**Repositório**: https://github.com/joaosantosmedeiros/eng-software-2

## Linguagem
A linguagem utilizada para tanto frontend como frontend é o Typescript, feita pelo Google ela adiciona vários elementos ao Javascript, a principal delas sendo a tipagem de variáveis.<br>
A equipe possui um bom entendimento a cerca da linguagem, tendo feito alguns projetos para portfólio e agregar no conhecimento da linguagem.

## Framework
O framework escolhido pela equipe foi NodeJs no backend e a biblioteca React como Frontend. 

## IDE
A IDE utilizada tanto no frontend como no backend é o VsCode, que possui ótimas ferramentas tanto para o debug quanto para o controle de versão. O Visual Studio possui integração nativa com o github e é possível realizar grande parte do versionamento mais básico diretamente dele.

## Tutorial
[Este tutorial](https://www.youtube.com/watch?v=_7UQPve99r4) é uma boa base para quem deseja fazer um crud básico em Node. Caso o MongoDb não seja o banco de dados utilizado ou preferido, pode-se trocar por outro facilmente.

## Git Flow
Git Flow é umm estratégia propõer auxiliar na organização do versionamento de códigos. Foi feito pelo engenheiro de software holandês Vincent Driessen. Tem como princpal objetivo melhorar as organizações das branches dentro de repositórios.

O Git Flow trabalha com duas branches principais, a Develop e a Master, que duram para sempre; e três branches de suporte, Feature, Release e Hotfix, que são temporários e duram até realizar o merge com as branches principais.

## Versionamento Semântico
**Versionamento Semântico (SemVer)** é um sistema para gerenciar versões de software com base em mudanças na API e compatibilidade. O formato é **MAJOR.MINOR.PATCH**:

- **MAJOR**: Incrementa quando há mudanças **incompatíveis** com versões anteriores.
- **MINOR**: Incrementa quando são adicionadas **funcionalidades compatíveis**.
- **PATCH**: Incrementa para **correções de bugs** mantendo a compatibilidade.

### Por que usar SemVer?
SemVer ajuda a evitar problemas com **dependências** e facilita a **comunicação** sobre mudanças no código, promovendo versões mais previsíveis e controladas.

## Conventional Commits
É uma convenção para padronizar mensagens de commit, facilitando a automação de ferramentas (como CHANGELOGs) e alinhando-se ao versionamento semântico (SemVer).  
A estrutura básica inclui um **tipo** (`feat`, `fix`, etc.), **escopo opcional**, **descrição** e seções adicionais (**corpo** e **rodapé**).  
Commits do tipo `fix` correlacionam-se a **PATCH**, `feat` a **MINOR**, e `BREAKING CHANGE` (no rodapé ou com `!`) a **MAJOR**.  
Outros tipos (ex: `docs`, `chore`) são permitidos, mas só afetam o versionamento se incluírem mudanças que quebram compatibilidade.  
A convenção prioriza clareza no histórico de alterações, auxiliando colaboradores e processos de desenvolvimento.
