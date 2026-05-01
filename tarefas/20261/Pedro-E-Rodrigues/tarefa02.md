# Tarefa 02 - Teste de Unidade

**Nome:** Pedro Emanuel de Brito Rodrigues
**Usuário GitHub:** Pedro-E-Rodrigues
**E-mail:** Pedroemanuel_07@hotmail.com

**Link para o repositório do projeto:** https://github.com/suelitonx/chaves_es2

---
## Questão 9 - Pesquisa sobre Testes

**a. Pesquise e fale um pouco sobre Testes de Software com foco em Testes de Unidade.**
Testes de software são práticas utilizadas para verificar se um sistema atende aos requisitos esperados e se está livre de defeitos. O foco dos Testes de Unidade (ou Unitários) é avaliar as menores partes testáveis do código (como funções, métodos ou classes) de forma completamente isolada do restante do sistema. O objetivo é garantir que cada pedacinho do código funcione corretamente por si só, o que facilita a identificação rápida de bugs e traz muita segurança na hora de dar manutenção ou adicionar novas funcionalidades.

**b. Fale da linguagem de programação, e stack, para desenvolver o projeto da disciplina.**
O projeto da disciplina está sendo desenvolvido utilizando a linguagem de programação **Dart** em conjunto com o framework **Flutter**. O Flutter é um kit de desenvolvimento de interface de usuário (UI toolkit) de código aberto criado pelo Google, utilizado para desenvolver aplicativos multiplataforma (Android, iOS, Web e Desktop) de forma nativa a partir de uma única base de código. 

**c. Busque um framework de Testes de Unidade para a linguagem escolhida e fale um pouco sobre um framework escolhido.**
Para o ecossistema Dart e Flutter, o framework padrão e mais utilizado é o pacote `flutter_test` (que encapsula o pacote core `test` do Dart). Ele já vem embutido no framework e fornece todas as ferramentas necessárias para escrever e executar testes de unidade, testes de widget e testes de integração. A sintaxe é simples, utilizando funções como `test()` para definir um caso de teste e `expect()` para comparar o resultado obtido com o resultado esperado.
* **Link oficial:** [Testing Flutter apps](https://docs.flutter.dev/testing)

**d. Fale um pouco da IDE que você utiliza. Fale sobre as ferramentas de debug que ela tem integrada.**
Utilizo o **Visual Studio Code (VS Code)**, que é um editor de código-fonte leve e altamente customizável. Ele possui excelente suporte para Flutter e Dart através de extensões oficiais. Suas ferramentas de debug integradas são muito poderosas: permitem adicionar *breakpoints* diretamente no código, inspecionar o valor das variáveis em tempo real enquanto o app está rodando (na aba "Run and Debug"), navegar pela pilha de chamadas (*Call Stack*) e utilizar o "Flutter Inspector" (parte do DevTools) para visualizar e debugar a árvore de widgets da interface gráfica de forma visual.

**e. Busque pelo menos um Tutorial para fazer um CRUD na tecnologia escolhida e que mostre a construção de Testes de Software. Apresente o link e descreva em poucas palavras o conteúdo do tutorial.**
* **Tutorial:** [Testing a Flutter App: A Comprehensive Guide](https://medium.com/flutter-community/testing-a-flutter-app-a-comprehensive-guide-f06b3a0f7e4f) (Exemplo de abordagem abrangente)
* **Descrição:** Embora seja difícil encontrar um tutorial único que crie um CRUD do zero *e* implemente todos os testes na mesma página, a documentação oficial do Flutter e artigos da comunidade ensinam a isolar a lógica de negócios (onde o CRUD acontece). O tutorial foca em como estruturar testes unitários para a lógica (como adicionar ou remover itens de uma lista), testes de widget para garantir que a interface reaja a essas mudanças, e testes de integração para simular o fluxo completo do usuário.