# Tarefa 02 - Teste de Unidade

**Nome:** Felipe Iago Dantas  
**GitHub:** Felipe-Dantas31  
**E-mail:** dantas.f.iago@gmail.com
**Repositório do Projeto:** https://github.com/suelitonx/chaves_es2  

---

## 9. Testes de Software

### a) Testes de Software com foco em Testes de Unidade

Testes de Software são práticas utilizadas para garantir a qualidade de um sistema, verificando se ele atende aos requisitos e funciona corretamente.

Os **Testes de Unidade** têm como objetivo testar pequenas partes do sistema de forma isolada, como funções, métodos ou classes. Eles são importantes porque permitem identificar erros rapidamente, facilitam a manutenção do código e aumentam a confiabilidade da aplicação.

---

### b) Linguagem e stack do projeto

O projeto foi desenvolvido utilizando a linguagem **Dart** com o framework **Flutter**.

O Flutter é um SDK desenvolvido pelo Google para criação de aplicações multiplataforma (Android, iOS, Web e Desktop) utilizando uma única base de código.

---

### c) Framework de Testes de Unidade

O framework utilizado foi o **flutter_test**, que já vem integrado ao Flutter.

Ele permite criar testes de unidade e testes de widgets, sendo eficiente para validar a lógica da aplicação.

Características:
- Fácil integração com Flutter  
- Suporte a testes assíncronos  
- Execução com o comando `flutter test`  

Links:
- https://docs.flutter.dev/testing  
- https://api.flutter.dev/flutter/flutter_test/flutter_test-library.html  

---

### d) IDE utilizada

A IDE utilizada foi o **Visual Studio Code (VS Code)**.

Ela oferece:
- Debug com breakpoints  
- Inspeção de variáveis  
- Hot Reload  
- Terminal integrado  

---

### e) Tutorial de CRUD com testes

Tutorial utilizado:  
https://docs.flutter.dev/cookbook/testing/unit/introduction  

O tutorial mostra como criar testes de unidade em Flutter e validar funções da aplicação.

---

### f) Mock Objects

Mock Objects são objetos simulados usados em testes para substituir dependências reais, como banco de dados ou APIs.

Eles permitem testar partes isoladas do sistema, tornando os testes mais rápidos e confiáveis.

---

## 10. Descrição do Repositório

### a) Descrição do CRUD (User Story)

O projeto implementa um CRUD para gerenciamento de usuários utilizando o modelo `UsuariosModel`.

**User Story:**

Como administrador do sistema, desejo cadastrar, visualizar, atualizar e remover usuários, para gerenciar as informações e permissões dentro da aplicação.

Operações:

- Inserir usuário  
- Consultar usuários  
- Atualizar usuário  
- Deletar usuário  

O modelo `UsuariosModel` possui atributos como id, nome, email, matrícula, role, locais e datas de criação e atualização.

---

### b) Testes de Unidade

Foram implementados testes de unidade para validar o modelo `UsuariosModel`.

Os testes verificam:

- Criação de usuário  
- Conversão de JSON (`fromJson`)  
- Conversão para JSON (`toJson`)  
- Atualização com `copyWith`  
- Criação com `empty()`  

Exemplo de teste:

```dart
import 'package:flutter_test/flutter_test.dart';
import 'package:chaves_es2/models/usuarios_model.dart';

void main() {
  test('Deve criar usuário corretamente', () {
    final user = UsuariosModel(
      password: '123',
      tokenKey: 'abc',
      matricula: '2021001',
      nome: 'Felipe',
    );

    expect(user.nome, 'Felipe');
  });
}
```

Link dos testes: https://github.com/suelitonx/chaves_es2/blob/main/test/usuarios_model_test.dart  

---

### c) Testes de Integração

Testes de Integração verificam a comunicação entre diferentes partes do sistema.

Já os Testes de Unidade testam partes isoladas.

Neste projeto foram utilizados Testes de Unidade.

Diferença:

- Testes de Unidade → partes isoladas  
- Testes de Integração → sistema completo funcionando  

---