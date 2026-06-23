 # Tarefa 01 - Git e GitHub com Markdown

**Nome:** Felipe Iago Dantas

**Usuário GitHub:** dantasfiago-hub

**E-mail:** [dantas.f.iago@gmail.com](mailto:dantas.f.iago@gmail.com)

---

# a) Projeto da Disciplina

## Título do Projeto

**chaves_app**

## Descrição do Projeto

O projeto **chaves_app** tem como objetivo desenvolver uma aplicação móvel para o gerenciamento e controle de empréstimos e devoluções de chaves em ambientes institucionais. O sistema permitirá o registro de usuários, o controle das chaves disponíveis, o acompanhamento das movimentações e a geração de informações para auxiliar na administração dos recursos.

A proposta busca substituir processos manuais por uma solução digital, aumentando a segurança, a rastreabilidade e a eficiência na gestão das chaves.

## Equipe

* Felipe Iago Dantas
* Laety Maniery de Araújo Batista
* Pedro Emanuel de Brito Rodrigues
* Sueliton dos Santos Medeiros

## Repositório do Projeto

https://github.com/suelitonx/chaves_es2

---

# b) Linguagem de Programação

## Dart

Dart é uma linguagem de programação desenvolvida pela Google com foco em produtividade, desempenho e desenvolvimento multiplataforma. Atualmente é amplamente utilizada em conjunto com o Flutter para criação de aplicações móveis, web e desktop.

### Principais Características

* Linguagem orientada a objetos.
* Tipagem estática com inferência de tipos.
* Alto desempenho.
* Compilação JIT (Just-In-Time) durante o desenvolvimento.
* Compilação AOT (Ahead-Of-Time) para produção.
* Excelente integração com Flutter.

### Aplicações

A linguagem Dart pode ser utilizada para:

* Aplicações Android.
* Aplicações iOS.
* Aplicações Web.
* Aplicações Desktop.
* Sistemas multiplataforma.

### Experiência da Equipe

A equipe possui experiência acadêmica com programação orientada a objetos e está aprofundando seus conhecimentos em Dart durante o desenvolvimento do projeto. O uso da linguagem permitirá adquirir experiência prática em desenvolvimento mobile moderno e integração de interfaces gráficas.

---

# c) Framework

## Flutter

Flutter é um framework open source criado pela Google para desenvolvimento de aplicações multiplataforma utilizando uma única base de código.

### Arquitetura

A arquitetura do Flutter é dividida em três camadas principais:

#### Framework

Responsável pelos widgets, animações, gerenciamento de estado e interface do usuário.

#### Engine

Implementada em C++, realiza a renderização gráfica por meio da biblioteca Skia.

#### Embedder

Permite a comunicação do Flutter com os sistemas operacionais Android, iOS, Windows, Linux e macOS.

### Vantagens

* Desenvolvimento multiplataforma.
* Alto desempenho.
* Hot Reload.
* Grande comunidade.
* Interface moderna baseada em widgets.
* Redução do tempo de desenvolvimento.

### Casos de Uso

* Aplicativos empresariais.
* Sistemas acadêmicos.
* Aplicativos de gerenciamento.
* Aplicações financeiras.
* Aplicações de comércio eletrônico.

---

# d) IDE

## Visual Studio Code

O Visual Studio Code é uma IDE leve e extensível desenvolvida pela Microsoft. É uma das ferramentas mais utilizadas para desenvolvimento com Flutter e Dart.

### Recursos de Depuração

O VS Code oferece diversos recursos de depuração, incluindo:

* Breakpoints.
* Inspeção de variáveis.
* Execução passo a passo.
* Monitoramento de pilha de chamadas.
* Integração com Flutter DevTools.

### Integração com Git

A IDE possui integração nativa com Git, permitindo:

* Criar commits.
* Realizar push e pull.
* Criar branches.
* Resolver conflitos.
* Visualizar alterações no código.

### Extensões Recomendadas

* Flutter
* Dart
* GitLens
* Error Lens
* Material Icon Theme
* Prettier

---

# e) Tutorial CRUD

## Tutorial Escolhido

### Flutter CRUD Application

Link:

https://www.geeksforgeeks.org/flutter-crud-application/

### Resumo

O tutorial demonstra o desenvolvimento de uma aplicação CRUD utilizando Flutter e Dart. Durante a implementação são abordadas operações de criação, leitura, atualização e exclusão de registros, além da construção de interfaces gráficas e navegação entre telas.

### O que Será Aprendido

* Estrutura de projetos Flutter.
* Criação de telas.
* Manipulação de dados.
* Operações CRUD.
* Navegação entre páginas.
* Gerenciamento de estado.
* Boas práticas de desenvolvimento.

---

# f) Branches, Pull Requests e GitFlow

## Branch

Uma branch é uma linha independente de desenvolvimento dentro de um repositório Git. Ela permite implementar funcionalidades sem afetar diretamente a versão principal do projeto.

## Pull Request

Um Pull Request é uma solicitação para que alterações realizadas em uma branch sejam revisadas e posteriormente integradas a outra branch.

## GitFlow

GitFlow é um modelo de organização de branches criado para facilitar o gerenciamento de projetos de software.

### Main

Contém versões estáveis e prontas para produção.

### Develop

Contém a versão em desenvolvimento do projeto.

### Feature Branches

Utilizadas para implementação de novas funcionalidades.

Exemplo:

```bash
git checkout -b feature/login
```

### Release Branches

Utilizadas para preparação de novas versões.

Exemplo:

```bash
git checkout -b release/1.0.0
```

### Hotfix Branches

Utilizadas para correções urgentes em produção.

Exemplo:

```bash
git checkout -b hotfix/1.0.1
```

### Benefícios do GitFlow

* Melhor organização do código.
* Desenvolvimento paralelo.
* Facilidade de manutenção.
* Maior controle das versões.
* Redução de conflitos.

---

# g) Versionamento Semântico

## SemVer

O Versionamento Semântico (Semantic Versioning) é uma convenção utilizada para identificar versões de software.

O formato padrão é:

```text
MAJOR.MINOR.PATCH
```

### MAJOR

Incrementado quando mudanças incompatíveis são introduzidas.

Exemplo:

```text
1.0.0 → 2.0.0
```

### MINOR

Incrementado quando novas funcionalidades compatíveis são adicionadas.

Exemplo:

```text
1.0.0 → 1.1.0
```

### PATCH

Incrementado quando correções de erros são realizadas.

Exemplo:

```text
1.0.0 → 1.0.1
```

### Benefícios

* Facilita a comunicação entre desenvolvedores.
* Melhora o gerenciamento de dependências.
* Permite identificar compatibilidade entre versões.
* Auxilia na manutenção do software.

---

# h) Conventional Commits

## Conceito

Conventional Commits é uma especificação que padroniza mensagens de commit.

### Estrutura

```text
tipo: descrição
```

### Principais Tipos

#### feat

Nova funcionalidade.

```text
feat: adiciona tela de login
```

#### fix

Correção de erro.

```text
fix: corrige validação de formulário
```

#### docs

Alteração de documentação.

```text
docs: atualiza README
```

#### style

Alterações de formatação.

```text
style: corrige indentação
```

#### refactor

Refatoração sem alterar comportamento.

```text
refactor: reorganiza serviços
```

#### test

Criação ou modificação de testes.

```text
test: adiciona testes de autenticação
```

#### chore

Tarefas de manutenção.

```text
chore: atualiza dependências
```
