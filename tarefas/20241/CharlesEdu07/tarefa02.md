# Tarefa 02 - Teste de Unidade

*Nome:* Charles Eduardo Araújo de Faria  
*Usuário GitHub:* https://github.com/CharlesEdu07 
*E-mail:* charleseduardofaria@gmail.com

---

## Repositórios do Projeto:

[Back-end](https://github.com/leonardobezrr/sig-estoque-back-end)
[Front-end](https://github.com/leonardobezrr/sig-estoque-front-end)

### Testes de Software: Testes de Unidade

Os testes de unidade são uma prática fundamental no desenvolvimento de software, focada em garantir que as menores partes de uma aplicação, como funções, métodos ou classes, funcionem corretamente. Esses testes são executados isoladamente para verificar se a unidade de código está produzindo os resultados esperados para diferentes entradas.

#### Características dos Testes de Unidade

1. **Isolamento:** Testes de unidade isolam o código de suas dependências externas. Isso geralmente é alcançado usando mocks ou stubs, permitindo que o teste se concentre apenas na lógica interna da unidade.

2. **Automatização:** São frequentemente automatizados para facilitar a execução rápida e repetida dos testes. Ferramentas como JUnit (para Java), NUnit (para .NET), e pytest (para Python) são amplamente usadas.

3. **Foco na Função/Método:** Cada teste de unidade se concentra em uma única função ou método, verificando sua saída para várias entradas.

4. **Rapidez:** Esses testes são rápidos de executar, permitindo a detecção precoce de erros no ciclo de desenvolvimento.

#### Benefícios dos Testes de Unidade

- **Detecção Precoce de Erros:** Problemas são encontrados e corrigidos mais cedo, reduzindo o custo e o esforço para corrigir bugs.
- **Documentação Viva:** Testes de unidade servem como uma forma de documentação que explica como as unidades devem se comportar.
- **Facilidade de Manutenção:** Código bem testado é geralmente mais fácil de modificar e refatorar, pois os desenvolvedores podem ter confiança de que suas mudanças não introduzirão novos bugs.
- **Refatoração Segura:** Permite que desenvolvedores façam refatorações no código com segurança, sabendo que os testes ajudarão a garantir que a funcionalidade permanece intacta.

### Linguagem de Programação:
<div style="text-align: justify">
Estaremos utilizando JavaScript como linguagem principal para o desenvolvimento do projeto. A equipe possui um bom domínio da linguagem, com experiência em projetos anteriores e participação em cursos relacionados.
</div>

### Framework:
<div style="text-align: justify">
Para agilizar o desenvolvimento, estaremos utilizando o framework React, para o front-end e o Fastify para o back-end. Ambos são frameworks web em JavaScript, que incentivam o desenvolvimento rápido e limpo. Ele fornece uma série de ferramentas para facilitar tarefas comuns em desenvolvimento web.
</div>

### Framework de Testes:

Vitest é um framework de testes moderno para JavaScript e TypeScript, projetado para ser rápido e integrado com ferramentas populares de desenvolvimento como Vite. Ele se destaca por oferecer uma experiência de teste rápida, com suporte a recursos como mocking, cobertura de código, e depuração integrada. Vitest é particularmente útil para projetos frontend devido à sua integração perfeita com o ecossistema Vite, mas também pode ser usado em projetos Node.js.

### Principais características do Vitest:
- **Performance Rápida**: Graças à sua integração com Vite, o Vitest proporciona um tempo de execução de testes extremamente rápido.
- **Suporte a Múltiplas API's de Teste**: Inclui suporte para as APIs de teste mais usadas, como `expect`, `mock`, `spyOn`, entre outras.
- **Cobertura de Código**: Facilita a geração de relatórios de cobertura de código.
- **Depuração**: Inclui ferramentas de depuração integradas que ajudam a identificar e resolver problemas rapidamente.
- **Mocking e Spy**: Fornece funcionalidades robustas para criar mocks e espiões em testes.

Para saber mais sobre o Vitest, você pode acessar os seguintes links:
- [Documentação Oficial do Vitest](https://vitest.dev/)
- [Repositório no GitHub](https://github.com/vitest-dev/vitest)

Vitest se apresenta como uma excelente opção para desenvolvedores que buscam uma ferramenta de testes moderna, rápida e integrada, especialmente adequada para projetos que utilizam Vite.

### IDE:
<div style="text-align: justify">
A IDE escolhida para o desenvolvimento é o Visual Studio Code. Ela oferece excelentes ferramentas de debug, integração com Git e GitHub, além de uma grande variedade de extensões para melhorar a produtividade da equipe.
</div>

### Debug no Visual Studio Code:

Debuggar código Node.js no Visual Studio Code é uma prática essencial para desenvolvedores que buscam identificar e corrigir problemas em seus aplicativos de forma eficaz. O Visual Studio Code (VS Code) proporciona um suporte robusto para a depuração de Node.js, tornando o processo mais ágil e integrado ao ambiente de desenvolvimento.

Para começar, é necessário garantir que o projeto Node.js esteja configurado corretamente no VS Code. O desenvolvedor deve abrir o VS Code e carregar o projeto desejado. Em seguida, é preciso acessar a seção de depuração clicando no ícone de "executar e depurar" na barra lateral esquerda ou utilizando o atalho de teclado `Ctrl+Shift+D`.

Se ainda não houver uma configuração de depuração, será necessário criar um arquivo de configuração. O desenvolvedor deve clicar no link para criar um arquivo `launch.json`, que estará localizado na seção de depuração. O VS Code gerará um arquivo de configuração padrão para Node.js, que pode ser ajustado conforme as necessidades do projeto. Um exemplo básico de configuração para um aplicativo Node.js pode ser semelhante ao seguinte:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/app.js",
      "restart": true
    }
  ]
}
```

Neste exemplo, `program` especifica o ponto de entrada do aplicativo, geralmente um arquivo como `app.js` ou `index.js`. A opção `restart` faz com que o Node.js reinicie automaticamente caso o código seja alterado e salvo.

Com o arquivo `launch.json` configurado, o desenvolvedor pode iniciar a depuração clicando no botão verde de play ou pressionando `F5`. O VS Code iniciará o aplicativo Node.js no modo de depuração, permitindo que o desenvolvedor defina pontos de interrupção (breakpoints) no código. Para definir um ponto de interrupção, basta clicar na margem esquerda ao lado do número da linha no editor de código. Quando o fluxo de execução atingir esse ponto, a execução será pausada, permitindo que o desenvolvedor examine o estado das variáveis, execute comandos na linha de comando integrada e percorra o código passo a passo.

Além disso, o VS Code oferece um painel de depuração que exibe variáveis, chamadas de pilha e pontos de interrupção ativos. Isso facilita a análise do fluxo de execução e a detecção de problemas. O painel também inclui um console de depuração onde o desenvolvedor pode executar comandos e inspecionar o valor das variáveis em tempo real.

Utilizar as funcionalidades de depuração do VS Code para Node.js pode melhorar significativamente a eficiência do desenvolvimento, tornando o processo de identificação e correção de erros mais direto e interativo.


### Tutoriais - CRUD e Testes:
<div style="text-align: justify">
Encontramos tutoriais úteis que irão nos ajudar no desenvolvimento do projeto.
</div>

Tutoriais CRUD e Testes:
- [Tutorial Node + Fastify CRUD](https://www.youtube.com/watch?v=LMoMHP44-xM)

- [Tutorial Fastify + Testes com NodeTap]('https://www.youtube.com/watch?v=gq8ZQrBJb2M')

- [Tutorial Fastify + Testes com Vitest]('https://www.youtube.com/watch?v=0rew57rLIM8')

- [Tutorial React](https://www.youtube.com/watch?v=1bEbBkWc4-I&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm).

### Mocks Objects:

Mocks são objetos simulados que imitam o comportamento de objetos reais de uma forma controlada, sendo amplamente utilizados em testes unitários para isolar a unidade de código sendo testada. No contexto de testes unitários, mocks permitem testar a lógica de uma unidade específica sem depender de suas dependências reais, que podem ser complexas, lentas ou não determinísticas.

Aqui estão alguns pontos-chave sobre mocks no contexto de testes unitários:

#### Propósitos dos Mocks

- **Isolamento:** Permitem que a unidade de código sob teste (Unit Under Test - UUT) seja testada de maneira isolada, sem a influência de dependências externas como bancos de dados, serviços web, ou outras unidades de código.
- **Controle:** Dão controle completo sobre o comportamento das dependências, permitindo que você simule diferentes cenários, como respostas bem-sucedidas, falhas, exceções, etc.
- **Verificação:** Permitem verificar se certos métodos foram chamados com os argumentos esperados, ajudando a garantir que a UUT está interagindo corretamente com suas dependências.

### Descrição do Repositório

### CRUD

Atuei na implementação de 2 user storys, sendo eles o product (produto) e supplier (fornecedor). Cada um desses CRUDs apresenta as 4 operações básicas.

Para o desenvolvimento dos testes, foquei no product.

Link para o service e seus respectivos testes:

- [Testes do CRUD de produto](https://github.com/leonardobezrr/sig-estoque-back-end/tree/dev/src/services/product)

#### Experiência com os testes

Implementar testes unitários envolve criar testes que verificam o funcionamento correto de unidades individuais de código, como funções ou métodos.

Primeiramente, é necessário criar um repositório simulado (mocked repository) ou um repositório em memória (in-memory repository) que imite as operações básicas do CRUD.

Em seguida, os testes podem ser elaborados, fornecendo objetos simulados (mock objects) para o repositório em memória e verificando se os resultados obtidos correspondem aos resultados esperados.

#### Teste de Integração

Testes de integração verificam como diferentes módulos ou sistemas interagem entre si. Eles são essenciais para garantir que as unidades individuais de um sistema, que foram testadas de forma isolada, funcionem corretamente quando integradas.

Nessa atividade, não foram feitos testes de integração e sim de unidade. Nesse caso, os testes estão isolando os serviços específicos e usando uma implementação simplificada (InMemoryProductsRepository) para verificar seu comportamento. Isso se encaixa melhor como um teste de unidade, pois não está testando a interação real entre o serviço e um banco de dados real ou outros sistemas externos.