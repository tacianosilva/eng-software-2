# Tarefa 02 - Teste de Unidade

#### Nome: Davi Natan Vieira de Oliveira
#### Usuário github: DaviNatan10
#### E-mail: davi.oliveira.137@ufrn.edu
#### Repositório do projeto: https://github.com/Gedsonfa/ScheduleSphere

# Teste de Unidade
Testes de unidade são uma prática de desenvolvimento de software que visa verificar se uma parte específica do código, geralmente uma função ou método, está funcionando corretamente. Cada teste de unidade isola uma unidade de código, como uma função ou classe, para validar que ela se comporta como esperado em diferentes cenários.

# Linguagem e Stack

JavaScript
JavaScript é uma linguagem de programação interpretada, de alto nível e dinamicamente tipada. Originalmente criada para tornar as páginas web interativas, é amplamente utilizada para desenvolvimento frontend (lado do cliente), mas também pode ser usada no backend (lado do servidor). É uma das três tecnologias essenciais da web, junto com HTML e CSS.

Node.js
Node.js é um ambiente de execução JavaScript do lado do servidor. Ele permite que os desenvolvedores utilizem JavaScript para escrever scripts que executam no lado do servidor, possibilitando o desenvolvimento de aplicativos de rede escaláveis e de alto desempenho. Node.js utiliza o mecanismo V8 do Google Chrome para executar o código JavaScript fora do navegador.

TypeScript
TypeScript é uma linguagem de programação desenvolvida pela Microsoft que é um superset (superconjunto) de JavaScript. Isso significa que todo código JavaScript válido é também válido em TypeScript, mas TypeScript adiciona recursos adicionais como tipagem estática e interfaces. Esses recursos ajudam a detectar erros em tempo de desenvolvimento e melhoram a manutenção e escalabilidade do código.

React
React é uma biblioteca JavaScript para construir interfaces de usuário, desenvolvida pelo Facebook. Focada principalmente na construção de interfaces de usuário em aplicações de página única (SPA), React utiliza uma abordagem declarativa e baseada em componentes. Componentes são blocos de construção reutilizáveis que podem ser compostos para criar interfaces complexas.

Next.js
Next.js é um framework de desenvolvimento baseado em React que permite a construção de aplicações web com renderização do lado do servidor (SSR) e geração de sites estáticos (SSG). Ele facilita a criação de aplicações React otimizadas para SEO e oferece funcionalidades como roteamento baseado em arquivos, otimização automática de imagens e suporte a APIs.

Docker
Docker é uma plataforma que permite a criação, distribuição e execução de aplicativos em contêineres. Um contêiner é uma unidade de software que empacota código e todas as suas dependências, garantindo que o aplicativo funcione de forma consistente em qualquer ambiente. Docker facilita o desenvolvimento, teste e implantação de software, promovendo a portabilidade e escalabilidade.

# FrameWork de Teste
Vitest é uma ferramenta de testes de unidade para JavaScript e TypeScript, projetada para ser rápida, leve e fácil de usar. Ela é construída com foco na experiência do desenvolvedor, oferecendo uma sintaxe simples e suporte para funcionalidades modernas de linguagem, como módulos ES e tipagem TypeScript. Vitest é uma alternativa a outras bibliotecas de testes como Jest, Mocha e Jasmine, mas é conhecida por sua integração nativa com Vite, um bundler e servidor de desenvolvimento rápido para aplicações web modernas.


## Características principais do Vitest:
Integração com Vite: Vitest é projetado para funcionar em conjunto com Vite, o que proporciona uma experiência de desenvolvimento muito rápida, especialmente para projetos baseados em frontend, como aqueles usando frameworks como Vue, React, ou Svelte.

Suporte a Módulos ES: Ao contrário de algumas bibliotecas de testes mais antigas que dependem de CommonJS, Vitest suporta nativamente módulos ES, que são o padrão moderno para módulos em JavaScript. Isso é particularmente útil para projetos que utilizam as últimas especificações do ECMAScript.

Tipagem Estática com TypeScript: Vitest oferece suporte completo para TypeScript, permitindo a verificação de tipos durante a escrita dos testes. Isso ajuda a detectar erros de tipo antecipadamente e melhora a robustez do código.

Performance e Eficiência: Vitest é conhecido por ser rápido, aproveitando ao máximo o cache de módulos de Vite para acelerar a execução dos testes. Isso é especialmente importante em grandes bases de código, onde a velocidade de feedback é crucial.

# Links para vitest:  https://vitest.dev/
# Tutorial de teste: https://www.youtube.com/watch?v=j3nAKSF_jbU

# IDE Utilizada

O Visual Studio Code (VSCode) é uma das IDEs (Ambiente de Desenvolvimento Integrado) mais populares e versáteis. Desenvolvida pela Microsoft, é uma ferramenta de código aberto que suporta uma ampla gama de linguagens de programação e é conhecida por sua leveza, personalização e extensibilidade.

### Ferramenta de Debug no Vscode
O VSCode possui uma poderosa ferramenta de debug integrada que pode ser personalizada para diferentes linguagens e ambientes. Aqui estão algumas das funcionalidades de debug:

Breakpoints: Permite definir pontos de interrupção no código para pausar a execução e inspecionar o estado atual da aplicação.

Watch: É possível adicionar expressões para serem monitoradas durante a execução do programa, permitindo observar como os valores mudam em tempo real.

Call Stack: Exibe a pilha de chamadas, mostrando quais funções foram chamadas para chegar ao ponto atual no código.

Variable Inspection: Permite inspecionar o valor de variáveis no ponto de interrupção, incluindo a capacidade de explorar objetos e arrays.

# Tutorial de Crud na tecnologia escolhida

Video no youtube sobre Crud em TypeScript[Clique aqui](https://www.youtube.com/watch?v=_lDXeKuw-ys)
## Sobre o vídeo
Descubra como estruturar seu projeto de forma modular e separar as preocupações para um código mais limpo e escalável.
 Utilização de TypeScript: Aprenda como o TypeScript pode elevar a qualidade do seu código, proporcionando tipagem estática e prevenção de erros.
 Hands-on com Next.js: Veja na prática como tirar proveito desse incrível framework para criação de aplicações React com renderização no lado do servidor.

 # Mocks Objects

Mocks, ou objetos mock, são ferramentas fundamentais em testes de unidade que simulam o comportamento de objetos reais de forma controlada. Eles permitem que os desenvolvedores isolem a unidade de código que estão testando, substituindo as dependências externas por objetos simulados que imitam o comportamento dessas dependências de maneira previsível e controlada.

Principais Características e Uso de Mocks
Isolamento: Mocks são usados para testar uma unidade de código em isolamento, sem dependências de serviços externos, bancos de dados, APIs, ou outros componentes que possam introduzir variabilidade ou complexidade.

Controle de Comportamento: Com mocks, os desenvolvedores podem controlar as respostas das dependências de forma precisa. Por exemplo, podem simular respostas de sucesso, falhas ou exceções, permitindo que os testes cubram uma ampla gama de cenários.

Verificação de Interações: Além de fornecer respostas simuladas, mocks podem ser usados para verificar se certas interações ocorreram, como se um método específico foi chamado, quantas vezes foi chamado, ou com quais argumentos.

Rapidez e Eficiência: Como os mocks evitam interações reais com recursos externos, os testes de unidade que os utilizam geralmente são mais rápidos e menos propensos a falhas intermitentes.