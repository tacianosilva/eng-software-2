[README](README.md)

# Tarefa 02 - Teste de Unidade
### Tallys Aureliano
### tallysdev
### tallys.santos.017@ufrn.edu.br
[Repositorio do projeto](https://github.com/tallysdev/eventSync/blob/feat/issue42-theme-room/frontend/eventsync_front/src/tests/ThemeRoom.test.ts)

## A)
Testes de Unidade são uma prática essencial em testes de software que envolve a verificação de componentes individuais ou unidades de código para garantir que funcionem conforme o esperado. Esses testes são geralmente escritos e executados pelos desenvolvedores durante a fase de desenvolvimento do software, focando em funções, métodos ou classes específicos. O objetivo principal dos testes de unidade é isolar cada parte do programa e mostrar que as partes individuais estão corretas.

Ferramentas como JUnit para Java, pytest para Python e Jest para JavaScript são amplamente utilizadas para escrever e executar testes de unidade. Essas ferramentas oferecem funcionalidades como asserções, mocks e relatórios detalhados, que ajudam os desenvolvedores a criar testes robustos e eficientes. Em suma, os testes de unidade são uma prática crucial para garantir a qualidade, a confiabilidade e a manutenibilidade do software ao longo de seu ciclo de vida.

## B)
No projeto da disciplina, foi utilizada a linguagem Python para o backend com o framework Django Rest Framework, e TypeScript para o frontend com Vue.js. Essa combinação permite um desenvolvimento eficiente e robusto tanto no servidor quanto no cliente, aproveitando as vantagens de cada tecnologia.

## C)
### Python - Django
Para o backend em Django, utilizamos o framework de testes `unittest`. O `unittest` é uma biblioteca padrão do Python que fornece uma infraestrutura para a criação e execução de testes automatizados. Ele é inspirado no JUnit, um framework de testes para Java, e suporta uma ampla gama de assertivas, além de oferecer um rico conjunto de ferramentas para a criação de testes complexos.

- [Unittest Documentation](https://docs.python.org/3/library/unittest.html)

### TypeScript - Vue

Para o frontend, utilizamos o `Vitest`, um framework de testes unitários projetado para trabalhar perfeitamente com aplicações Vue.js. O `Vitest` é inspirado no `Jest`, conhecido por sua simplicidade e eficiência, oferecendo uma experiência de testes rápida e integrada com o ecossistema Vue.

- [Vitest Documentation](https://vitest.dev/)

## D)
O Visual Studio Code (VSCode) é um editor de código-fonte desenvolvido pela Microsoft, amplamente utilizado por desenvolvedores devido à sua robustez, versatilidade e uma ampla gama de extensões. É gratuito, open-source e funciona em várias plataformas, incluindo Windows, macOS e Linux. VSCode é conhecido por sua interface amigável, desempenho rápido e a capacidade de lidar com uma variedade de linguagens de programação, como JavaScript, TypeScript, Python, Java, C++, entre outras.

Uma das funcionalidades mais poderosas do VSCode são suas ferramentas de debug integradas. O depurador do VSCode suporta a depuração de várias linguagens diretamente do editor, oferecendo uma experiência de desenvolvimento integrada sem a necessidade de alternar entre diferentes ferramentas. As funcionalidades incluem pontos de interrupção (breakpoints), inspeção de variáveis, step-in, step-out e step-over para percorrer o código linha por linha, e a capacidade de observar expressões e estados de execução em tempo real.

Para configurar o debug, o VSCode usa um arquivo launch.json, onde se pode definir configurações específicas para o ambiente de depuração, como scripts iniciais, variáveis de ambiente e argumentos de linha de comando. Além disso, extensões como "Python", "Debugger for Java", "C++ Extension Pack" e "Node.js" ampliam ainda mais as capacidades de depuração, fornecendo suporte específico para essas linguagens e frameworks.

O painel de depuração do VSCode oferece uma visão clara do call stack, das variáveis ativas e permite a adição de watch expressions para monitorar valores específicos durante a execução. A integração com Git também é uma vantagem significativa, permitindo que os desenvolvedores façam commits, pull requests e revisões de código diretamente no editor, sem sair do ambiente de desenvolvimento.

## E)

- [Django CRUD and Testing Tutorial]( https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Django/Testing)

Este tutorial guia o desenvolvedor desde a configuração inicial do Django, passando pela criação das operações CRUD, até a implementação de testes de unidade para garantir que todas as partes do aplicativo funcionem corretamente.

## F)
Mocks Objects são uma técnica utilizada em testes de unidade para simular o comportamento de objetos reais de forma controlada e previsível. Eles permitem que os desenvolvedores isolem a unidade de código sendo testada, substituindo suas dependências externas por versões falsas que imitam o comportamento dos objetos reais. Isso é especialmente útil para testar componentes que interagem com recursos externos, como bancos de dados, serviços web ou sistemas de arquivos, que podem ser difíceis ou impraticáveis de utilizar diretamente em testes de unidade.

Os mocks são configurados para retornar respostas específicas quando métodos ou propriedades são acessados, permitindo que o teste se concentre exclusivamente na lógica da unidade de código em questão. Além de retornarem valores predefinidos, os mocks podem ser utilizados para verificar se métodos foram chamados com os argumentos corretos e quantas vezes foram invocados, facilitando a validação do comportamento interno do código.
## 10

[Teste feito por mim](https://github.com/tallysdev/eventSync/blob/feat/issue42-theme-room/frontend/eventsync_front/src/tests/ThemeRoom.test.ts)