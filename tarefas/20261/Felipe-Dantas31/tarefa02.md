# Tarefa 02 - Teste de Unidade

**Nome:** Felipe Iago Dantas
**GitHub:** Felipe-Dantas31
**E-mail:** (coloque seu e-mail)
**Repositório do Projeto:** https://github.com/suelitonx/chaves_es2

---

## 9. Testes de Software

### a) Testes de Software com foco em Testes de Unidade

Testes de Software são práticas utilizadas para garantir a qualidade de um sistema, verificando se ele atende aos requisitos e funciona corretamente.

Os **Testes de Unidade** têm como objetivo testar pequenas partes do sistema de forma isolada, como funções, métodos ou classes. Eles são importantes porque permitem identificar erros rapidamente, facilitam a manutenção do código e aumentam a confiabilidade da aplicação.

---

### b) Linguagem e stack do projeto

O projeto foi desenvolvido utilizando a linguagem **Dart** com o framework **Flutter**.

O Flutter é um SDK desenvolvido pelo Google para criação de aplicações multiplataforma (Android, iOS, Web e Desktop) utilizando uma única base de código, oferecendo alto desempenho e uma rica interface gráfica.

---

### c) Framework de Testes de Unidade

O framework utilizado foi o **flutter_test**, que já vem integrado ao Flutter.

Ele permite criar testes de unidade e testes de widgets, sendo bastante eficiente para validar a lógica de negócio da aplicação.

Características:

* Fácil integração com Flutter
* Suporte a testes assíncronos
* Execução simples com o comando `flutter test`

Links:

* https://docs.flutter.dev/testing
* https://api.flutter.dev/flutter/flutter_test/flutter_test-library.html

---

### d) IDE utilizada

A IDE utilizada foi o **Visual Studio Code (VS Code)**.

Ela oferece suporte completo ao Flutter por meio de extensões, incluindo:

* Debug com breakpoints
* Inspeção de variáveis
* Hot Reload
* Terminal integrado

Essas ferramentas facilitam o desenvolvimento e a identificação de erros.

---

### e) Tutorial de CRUD com testes

Tutorial utilizado:
https://docs.flutter.dev/cookbook/testing/unit/introduction

O tutorial apresenta como criar testes de unidade em Flutter, mostrando como validar funções e lógica de negócio. Ele demonstra como estruturar e executar testes dentro do ambiente Flutter.

---

### f) Mock Objects

Mock Objects são objetos simulados utilizados em testes de unidade para substituir dependências reais, como banco de dados ou APIs externas.

Eles permitem testar partes isoladas do sistema, tornando os testes mais rápidos, previsíveis e confiáveis.

---

## 10. Descrição do Repositório

### a) Descrição do CRUD (User Story)

O projeto implementa um CRUD para gerenciamento de usuários utilizando o modelo `UsuariosModel`.

**User Story:**

Como administrador do sistema, desejo cadastrar, visualizar, atualizar e remover usuários, para gerenciar as informações e permissões dentro da aplicação.

Operações implementadas:

* **Inserir usuário:** criação de um novo usuário com dados como nome, email, matrícula e senha
* **Consultar usuários:** listagem de usuários cadastrados
* **Atualizar usuário:** alteração de dados como nome, foto, email e permissões (role)
* **Deletar usuário:** remoção de um usuário do sistema

O modelo `UsuariosModel` representa a estrutura dos dados, contendo atributos como id, nome, email, matrícula, role, lista de locais e datas de criação e atualização.

---

### b) Testes de Unidade

Foram implementados testes de unidade para validar o comportamento do modelo `UsuariosModel`.

Os testes verificam:

* Criação de usuário
* Conversão de JSON para objeto (`fromJson`)
* Conversão de objeto para JSON (`toJson`)
* Atualização de dados com `copyWith`
* Criação de objeto vazio com `empty()`

Os testes foram implementados utilizando o framework `flutter_test`.

Durante o desenvolvimento, foi possível perceber que os testes ajudam a garantir o funcionamento correto das funcionalidades e facilitam a manutenção do código.

Link dos testes: https://github.com/suelitonx/chaves_es2/blob/main/test/usuarios_model_test.dart

---

### c) Testes de Integração

Os Testes de Integração verificam a comunicação entre diferentes partes do sistema, como interface, lógica de negócio e banco de dados.

Já os Testes de Unidade focam em partes isoladas do sistema.

Neste projeto, foram utilizados Testes de Unidade, pois o objetivo foi validar o comportamento do modelo e suas funções de forma isolada.

Diferença:

* **Testes de Unidade:** testam partes individuais
* **Testes de Integração:** testam o sistema funcionando em conjunto

---
