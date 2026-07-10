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

**f. Pesquise sobre Mocks Objects em Testes de Unidade e faça um pequeno resumo.**
Em testes de unidade, *Mock Objects* (Objetos Simulados) são objetos falsos criados para imitar o comportamento de dependências reais e complexas do sistema. Eles são usados para isolar a função que está sendo testada de elementos externos, como bancos de dados, APIs ou serviços web. Com os Mocks, podemos simular cenários de sucesso ou falha sem precisar acessar dados reais, o que torna os testes muito mais rápidos e estáveis. No desenvolvimento com Flutter e Dart, pacotes como o `mockito` ou o `mocktail` são os mais populares para essa tarefa.

---
## Questão 10 - Implementação e Testes do CRUD

**a. Descrição do CRUD (User Story)**
O CRUD escolhido foi o de **Gerenciamento de Chaves**. A User Story principal abrange o ciclo de vida completo de uma chave no sistema:
* **Inserir (Create):** O administrador pode cadastrar uma nova chave no sistema informando seu nome, descrição e setor pertencente.
* **Consultar (Read - US10):** Como Porteiro/Administrador, quero buscar chaves por nome/descrição ou setor, para localizar rapidamente uma chave e ver seu status.
* **Atualizar (Update):** É possível editar as informações de uma chave existente (ex: mudar o setor caso a fechadura mude).
* **Deletar (Delete):** Permite a exclusão lógica ou física de uma chave que foi perdida ou inutilizada.

**b. Testes de Unidade com Mock Objects**
A experiência de implementar os testes de unidade com Mocks no Flutter foi muito esclarecedora. Utilizamos o pacote `mocktail` (ou `mockito`) para "fingir" ser o repositório de chaves e o banco de dados. Isso nos permitiu testar a lógica do `ChavesRepository` (ou do Controller) de forma totalmente isolada, sem precisar de uma conexão real com o servidor ou banco, tornando os testes extremamente rápidos e imunes a falhas de rede.

* **Link para o arquivo de teste:** [Cole o link do GitHub para o seu arquivo de teste aqui depois de fazer o push da Questão 10]

**c. Testes de Integração vs Testes Unitários**
Nesta atividade, o foco foi a realização de **Testes Unitários**. 
A diferença principal é o **escopo**: 
* **Teste Unitário:** Testa uma unidade isolada do código (uma função, um método, uma classe) ignorando o resto do sistema. Por isso usamos Mocks para simular o banco de dados.
* **Teste de Integração:** Testa como diferentes partes do sistema funcionam juntas. Em um app Flutter, um teste de integração abriria o aplicativo em um emulador real, clicaria nos botões, acessaria um banco de dados de teste real e verificaria se a tela atualizou corretamente, testando o fluxo de ponta a ponta.