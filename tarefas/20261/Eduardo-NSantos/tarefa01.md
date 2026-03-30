# Tarefa 01 - Git e GitHub com Markdown

**Nome:** Eduardo Nascimento Santos  
**GitHub:** Eduardo-NSantos
**E-mail:** eduardoshw123@gmail.com

---

## 1. Projeto da disciplina

**Título do projeto:** IService  
**Descrição:** O projeto tem como objetivo de unir cliente e prestador de serviço em um único lugar.

**Equipe:**  
- Eduardo Nascimento  
- Ismael Gomes
- Kaique  Vieira
- Caio Lucas
- Luiz Henrique
- Isaque Guimarães

**Repositório do projeto:**  
https://github.com/LuizFelixDev/iservice-api/

---

## 2. Linguagem de programação do projeto

A linguagem de programação escolhida para o projeto é **JavaScript**, por ser amplamente utilizada no desenvolvimento web e possuir grande compatibilidade com frameworks modernos.

O domínio da equipe com JavaSript é intermediário, pois alguns integrantes já possuem experiência com desenvolvimento de APIs, autenticação, banco de dados e uso dos frameworks. Além disso, a linguagem possui boa documentação e uma comunidade bastante ativa, o que facilita o aprendizado e a resolução de problemas durante o desenvolvimento do projeto.

---

## 3. Framework que será utilizado

O framework escolhido para o backend do projeto é o **NestJS**.
O framework escolhido para o frontend do projeto React Native utilizando Expo.

---

## 4. IDE que será utilizada

A IDE/editor que será utilizado no projeto é o **Visual Studio Code (VS Code)**.

O VS Code é bastante popular no desenvolvimento web por ser leve, extensível e possuir suporte para diversas linguagens.

- Debug integrado para várias linguagens
- Possibilidade de configurar breakpoints
- Inspeção de variáveis
- Execução passo a passo do código

- Integração nativa com Git
- Visualização de arquivos modificados
- Commit, push, pull e merge pela interface gráfica
- Histórico de alterações
- Extensões para GitHub, como GitHub Pull Requests and Issues

---

## 5. Tutorial para fazer CRUD na tecnologia escolhida

Um bom tutorial para CRUD com NestJS é:

**Link:**  
https://www.youtube.com/playlist?list=PLR8JXremim5AdjhggWtqzgSXPYZ_V9x2b

**Descrição:**  
Esse tutorial apresenta a criação de uma aplicação CRUD completa com NestJS, mostrando como configurar rotas, controllers, models, migrations e views para cadastrar, listar, editar e remover registros.

---

## 6. Branches, Pull Request e GitFlow

### Branches
Branches são ramificações do código principal de um repositório. Elas permitem que novas funcionalidades, correções ou experimentos sejam desenvolvidos de forma isolada, sem afetar diretamente a branch principal.

### Pull Request
O Pull Request (PR) é uma solicitação para que as alterações feitas em uma branch sejam revisadas e integradas em outra branch, geralmente a `main` ou `develop`. No GitHub, o PR facilita revisão de código, comentários, testes e discussão antes da mesclagem.

### GitFlow
O GitFlow é uma estratégia de organização de branches no Git. Ele normalmente utiliza:
- `main`: versão estável do sistema
- `develop`: branch de desenvolvimento
- `feature/*`: novas funcionalidades
- `release/*`: preparação de versões
- `hotfix/*`: correções urgentes em produção

Essa abordagem ajuda equipes a trabalharem de forma organizada e controlada, especialmente em projetos com várias pessoas.

---

## 7. Versionamento Semântico (SemVer)

O Versionamento Semântico (SemVer) é uma convenção para numerar versões de software no formato:

`MAJOR.MINOR.PATCH`

Exemplo: `2.4.1`

- **MAJOR**: mudanças incompatíveis com versões anteriores
- **MINOR**: novas funcionalidades compatíveis
- **PATCH**: correções de bugs compatíveis

O SemVer ajuda a entender o impacto de uma atualização e facilita o controle de dependências em projetos de software.

**Referência:**  
https://semver.org/lang/pt-BR/

---

## 8. Resumo sobre Conventional Commits

Conventional Commits é uma convenção para padronizar mensagens de commit, tornando o histórico do projeto mais claro, organizado e fácil de entender.

A estrutura mais comum é:

`tipo: descrição da alteração`

### Exemplos:
- `feat: adiciona tela de login`
- `fix: corrige erro no cadastro de alunos`
- `docs: adiciona documentação inicial`
- `refactor: reorganiza controller de autenticação`

### Tipos mais comuns:
- **feat** → nova funcionalidade
- **fix** → correção de bug
- **docs** → alterações na documentação
- **style** → ajustes de formatação (sem alterar lógica)
- **refactor** → refatoração de código
- **test** → adição ou ajuste de testes
- **chore** → tarefas de manutenção/configuração

### Vantagens do Conventional Commits:
- Histórico mais legível
- Facilita revisão de mudanças
- Ajuda na automação de changelog
- Pode ser integrado com versionamento automático
- Padroniza o trabalho da equipe

No contexto desta atividade, um exemplo de commit seguindo essa convenção seria:

`feat: adiciona descrição do projeto #12`

**Referência:**  
[Conventional Commits PT-BR](https://www.conventionalcommits.org/pt-br/v1.0.0/)

---

