# Tarefa 02 - Teste de Unidade

Nome: Sueliton dos Santos Medeiros

GitHub: suelitonx

Email: sueliton.medeiros.098@ufrn.edu.br

Repositório do Projeto: https://github.com/suelitonx/eng-software-2

Aqui está o documento completo corrigido para a sua stack real:

---

# Testes de Software — Flutter + Dart + PocketBase

---

## 1. Testes de Software com foco em Testes de Unidade

No Flutter, os testes automatizados se encaixam em três principais categorias: o teste de unidade (unit test), que testa uma única função, método ou classe; o teste de widget (widget test), que verifica o comportamento de widgets da interface; e o teste de integração, que valida fluxos completos do aplicativo.

Um aplicativo bem testado possui muitos testes de unidade e widget. O teste de integração é recomendado somente nas partes mais importantes e sensíveis do projeto para garantir o funcionamento de todo o fluxo.

**Resumo:** Testes de unidade validam isoladamente funções, métodos e classes do código Dart. São rápidos, automatizados e independentes de UI, banco de dados ou rede. Detectam bugs cedo, documentam o comportamento esperado do código e tornam refatorações muito mais seguras.

---

## 2. Linguagem e Stack do Projeto

| Tecnologia | Papel |
|---|---|
| **Dart** | Linguagem de programação |
| **Flutter** | Framework de UI multiplataforma (mobile, web, desktop) |
| **PocketBase** | Backend como serviço (BaaS) open source |
| **pocketbase (pub.dev)** | SDK Dart oficial para comunicação com o PocketBase |

**Sobre o PocketBase:** PocketBase é um backend open source composto por banco de dados embutido (SQLite) com subscriptions em tempo real, gerenciamento de autenticação integrado, dashboard UI conveniente e uma API REST simples. Pode ser usado tanto como framework Go quanto como aplicação standalone.

---

## 3. Framework de Testes de Unidade — `flutter_test` + `test`

O Flutter possui suporte nativo a testes via dois pacotes principais:

O pacote `test` fornece o núcleo do framework para escrever testes unitários, e o pacote `flutter_test` fornece utilitários adicionais para testar widgets. Os arquivos de teste devem sempre terminar com `_test.dart`, que é a convenção usada pelo test runner ao procurar testes.

Para verificar se tudo funcionou corretamente, o arquivo `pubspec.yaml` deve conter na seção de dependências de desenvolvimento: `flutter_test: sdk: flutter` e `test: ^1.x.x`.

Um exemplo simples de teste em Dart/Flutter:

```dart
import 'package:test/test.dart';
import 'package:meu_app/counter.dart';

void main() {
  group('Testes do Counter', () {
    test('valor inicial deve ser 0', () {
      expect(Counter().value, 0);
    });

    test('deve incrementar', () {
      final counter = Counter();
      counter.increment();
      expect(counter.value, 1);
    });
  });
}
```

Para rodar os testes pelo terminal:
```bash
flutter test
```

**Resumo:** O Flutter oferece testes de unidade nativos com os pacotes `test` e `flutter_test`, sem necessidade de instalar frameworks externos. Para mocks, usa-se o pacote **`mockito`** (com geração de código via `build_runner`) ou **`mocktail`** (sem geração de código).

🔗 **Links:**
- Documentação oficial: [https://docs.flutter.dev/cookbook/testing/unit/introduction](https://docs.flutter.dev/cookbook/testing/unit/introduction)
- Pacote `test` no pub.dev: [https://pub.dev/packages/test](https://pub.dev/packages/test)
- Pacote `mockito`: [https://pub.dev/packages/mockito](https://pub.dev/packages/mockito)

---

## 4. IDE — VS Code com Flutter Extension

O **Visual Studio Code** com as extensões **Flutter** e **Dart** instaladas é a IDE utilizada no projeto.

**Ferramentas de Debug do Flutter no VS Code:**

É possível depurar o app de duas formas: usando o Flutter DevTools (suite de ferramentas de debug e profiling que roda no navegador) ou usando os recursos de debug embutidos no VS Code, como a definição de breakpoints. O debug é iniciado via `Run > Start Debugging` ou pressionando `F5`. A barra de status fica laranja para indicar sessão de debug ativa. O painel lateral esquerdo mostra stack frames e variáveis, e o painel Debug Console exibe o log detalhado.

Para realizar um hot reload durante uma sessão de debug, clique em "Hot Reload" na barra de ferramentas de debug ou pressione `Ctrl + F5`. O hot reload injeta os arquivos de código-fonte atualizados na Dart VM em execução, permitindo ver as mudanças quase instantaneamente.

**Flutter DevTools** (acessível pelo VS Code):

O DevTools inclui um depurador completo em nível de código-fonte, suportando breakpoints, stepping (passo a passo) e inspeção de variáveis. Para definir um breakpoint, clique na margem esquerda (régua de número de linha) na área de código. O clique uma vez define um breakpoint; clicar novamente o remove.

As principais ferramentas do Flutter DevTools incluem: **Debugger** (breakpoints, stepping, inspeção de variáveis), **Memory Profiler** (análise de alocação de memória), **CPU Profiler** (informações de uso da CPU), **Widget Inspector** (inspeção visual da árvore de widgets e layout), e **Heap Snapshot** (captura e análise do estado da memória em um ponto específico).

---

## 5. Tutorial — CRUD com Flutter + PocketBase

🔗 **Tutorial principal:** [A PocketBase backend for Flutter and Dart — Medium (Suragch, 2024)](https://suragch.medium.com/a-pocketbase-backend-for-flutter-and-dart-c962bea4e3f1)

O tutorial guia o leitor por todos os passos para conectar um app Flutter ao PocketBase. Cobre criação de projeto Flutter, instalação e inicialização do servidor PocketBase localmente, configuração do SDK Dart, autenticação de usuários com e-mail e senha, e a implementação completa das operações CRUD (Create, Read, Update e Delete) sobre uma coleção de dados no dashboard de administração do PocketBase.

🔗 **SDK Dart oficial (pub.dev):** [https://pub.dev/packages/pocketbase](https://pub.dev/packages/pocketbase)

🔗 **Documentação PocketBase:** [https://pocketbase.io/docs](https://pocketbase.io/docs)

---

## 1. CRUD implementado

Eu implementei o CRUD de chaves no sistema de locação para manter o controle das chaves ligadas aos setores e locais.

### User Story
Como usuário autorizado, eu quero cadastrar, consultar, atualizar e excluir chaves para organizar o fluxo de uso e manter os registros sempre atualizados.

### Operações do CRUD
- **Inserir / cadastrar**: criar uma nova chave com nome, descrição, setor, tags e ícone.
- **Consultar / listar**: ver as chaves cadastradas e filtrar quando precisar encontrar um registro específico.
- **Atualizar**: alterar dados de uma chave já existente, como nome, descrição, tags ou estado de locação.
- **Deletar / excluir**: remover uma chave quando ela não for mais usada.

### Onde isso aparece no código
- Repositório: [ChavesRepository](https://github.com/suelitonx/chaves_es2/blob/main/lib/repositories/chaves_repository.dart)
- Modelo: [ChavesModel](https://github.com/suelitonx/chaves_es2/blob/main/lib/models/chaves_model.dart)

---

## 2. Testes de unidade e experiência de implementação

Os testes ficaram divididos entre modelo, estado e repositório. Para chaves, eu testei a criação do objeto, a conversão de JSON, a atualização com `copyWith` e o fluxo completo do CRUD.

### Arquivos de teste relacionados às chaves
- Cadastro da chave: [chaves_model_create_test.dart](https://github.com/suelitonx/chaves_es2/blob/main/test/chaves_model_create_test.dart)
- Conversão de JSON: [chaves_fromjson_test.dart](https://github.com/suelitonx/chaves_es2/blob/main/test/chaves_fromjson_test.dart)
- Atualização com `copyWith`: [chaves_copywith_test.dart](https://github.com/suelitonx/chaves_es2/blob/main/test/chaves_copywith_test.dart)
- CRUD fake do repositório: [chaves_repository_integration_fake_test.dart](https://github.com/suelitonx/chaves_es2/blob/main/test/chaves_repository_integration_fake_test.dart)
- Teste real do repositório: [chaves_repository_real_test.dart](https://github.com/suelitonx/chaves_es2/blob/main/test/chaves_repository_real_test.dart)

### Resumo da experiência
A parte mais tranquila foi testar os modelos, porque eles têm comportamento simples e não dependem de rede. Já os testes do repositório exigiram mais cuidado, porque o `BaseRepository` conversa com o `PbService` e com o PocketBase.

Na prática, eu usei dois caminhos:
- testes fake, com `FakePb`, para validar create, update, delete e list sem depender de servidor;
- testes reais, para confirmar a integração com o PocketBase quando a variável `PB_INTEGRATION=1` está ativa.

Isso deixou o processo mais rápido no dia a dia e ainda permitiu validar o comportamento real quando necessário.

---

## 3. Testes de integração, diferença para unitários e o que foi feito

### Diferença entre teste de unidade e teste de integração
- **Teste de unidade**: valida uma parte pequena do sistema isoladamente, normalmente com mocks, fakes ou stubs.
- **Teste de integração**: valida se várias partes funcionam juntas, por exemplo repositório, rede e persistência.

### O que foi feito no projeto
No projeto, eu usei os dois tipos:
- **Testes de unidade** para modelos e estado, como `toJson`, `fromJson`, `copyWith` e filtros.
- **Testes de integração fake** para o CRUD, usando `FakePb`.
- **Testes de integração reais** para `ChavesRepository`, `SetoresRepository`, `LocaisRepository` e `UsuariosRepository`, com PocketBase de verdade.

### Observação importante
Os testes reais ficam desligados por padrão e só rodam quando a variável de ambiente `PB_INTEGRATION=1` está definida.

Exemplo no PowerShell:

```powershell
$env:PB_INTEGRATION="1"
$env:PB_TEST_URL="https://chaves.ufrn.me"
flutter test test/chaves_repository_real_test.dart
flutter test test/setores_repository_real_test.dart
flutter test test/locais_repository_real_test.dart
flutter test test/usuarios_repository_real_test.dart
```

---

## Conclusão

O CRUD de chaves ficou completo com inserir, consultar, atualizar e excluir. Além disso, eu deixei os testes cobrindo tanto o comportamento dos modelos quanto o repositório fake e a integração real com PocketBase.
