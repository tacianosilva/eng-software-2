# Tarefa 02 - Teste de Unidade

Felipe Souza Benício da Silva | FelipeSouza14 | felipesouzabenicio@gmail.com

Para acessar o repositório do projeto [Clique Aqui!](https://github.com/melquetrindade/sigQueijaria)

## O que são Testes de Unidade?

Testes de unidade são uma técnica essencial no desenvolvimento de software que foca na verificação de componentes individuais do código, conhecidos como unidades. O principal objetivo desses testes é assegurar que cada unidade funcione corretamente de acordo com suas especificações e requisitos definidos. Esse tipo de teste é realizado de forma isolada, permitindo que os desenvolvedores identifiquem e corrijam erros específicos em partes do código sem a interferência de outros componentes.

Geralmente, os testes de unidade são automatizados, o que possibilita a execução rápida e frequente desses testes durante o desenvolvimento. Isso ajuda a detectar e resolver problemas de forma antecipada, facilitando a manutenção e a refatoração do código com maior segurança. A automação também contribui para uma integração contínua mais eficiente, pois os testes podem ser executados a cada mudança no código. Diversas ferramentas e frameworks são utilizados para criar e gerenciar testes de unidade, como JUnit para Java, NUnit para .NET e _pytest_ para Python. Esses testes são apenas uma parte de uma abordagem de teste mais ampla, que inclui também testes de integração e testes de sistema, todos eles contribuindo para garantir a qualidade e a robustez do software final.

## Linguagens de Programação

Python e JavaScript são duas linguagens de programação amplamente utilizadas, cada uma com suas características distintas e aplicações específicas. Python, por exemplo, é conhecida por sua sintaxe limpa e legibilidade, é uma linguagem versátil e poderosa, ideal para desenvolvimento web, análise de dados, automação de tarefas e inteligência artificial, de fácil aprendizado.
Por outro lado, JavaScript é a linguagem essencial para o desenvolvimento de aplicações web interativas. JavaScript é indispensável para a criação de sites dinâmicos, aplicativos web e jogos online, e sua evolução constante garante que permaneça uma ferramenta crucial no arsenal de qualquer desenvolvedor web. Dessa forma, foram escolhidas as tecnologias descritas acima para o desenvolvimento do atual projeto.

## Framework para Testes de Unidade

O _pytest_ é uma ferramenta de teste amplamente utilizada para projetos em Python, destacando-se por sua simplicidade e flexibilidade. Com uma sintaxe fácil de entender e utilizar, o _pytest_ permite que os desenvolvedores escrevam testes de forma clara e eficiente. Ele identifica automaticamente arquivos e funções de teste com base em convenções de nomenclatura, eliminando a necessidade de configuração adicional. Um dos recursos mais notáveis do _pytest_ é o sistema de fixtures, que facilita a configuração e limpeza de estados antes e depois dos testes, garantindo um ambiente de teste consistente. Além disso, o _pytest_ oferece mensagens de erro detalhadas e suporta asserções complexas, tornando a identificação e resolução de problemas mais simples.

O _pytest_ também é altamente extensível, com uma ampla gama de plugins disponíveis para adicionar funcionalidades extras e integrar com outras ferramentas. A capacidade de parametrizar testes e executar testes em paralelo, por meio do plugin _pytest_-xdist, ajuda a melhorar a eficiência e a cobertura dos testes. Para rodar os testes, os desenvolvedores apenas precisam executar o comando _pytest_, que então descobrirá e executará os testes automaticamente, fornecendo um resumo dos resultados. Em resumo, o _pytest_ é uma ferramenta poderosa e versátil que se adapta bem a diferentes tamanhos e tipos de projetos, contribuindo significativamente para a garantia da qualidade do código.

Para acessar a documentação do _pytest_ [Clique Aqui!](https://docs.pytest.org/en/stable/contents.html)

## IDE utilizada e Ferramentas de Debug

O _Visual Studio Code_ (VS Code) é um editor de código-fonte leve e altamente configurável desenvolvido pela Microsoft. Amplamente adotado por desenvolvedores, o VS Code é conhecido por sua interface intuitiva, suporte para uma ampla gama de linguagens de programação e extensibilidade. Sua interface de usuário é limpa e personalizável, com painéis e abas ajustáveis para atender às preferências individuais dos usuários. Além disso, o VS Code conta com um vasto marketplace de extensões que permite adicionar funcionalidades como suporte a novas linguagens, ferramentas de linting, e temas personalizados. Entre os muitos recursos do VS Code, suas ferramentas de depuração integradas se destacam. A capacidade de definir pontos de interrupção (breakpoints) permite que os desenvolvedores pausen a execução do código em locais específicos, facilitando a inspeção do estado do programa e a análise do fluxo de execução. O VS Code oferece também a execução passo a passo do código, permitindo a execução linha por linha para entender melhor o comportamento do código e identificar problemas.

A inspeção de variáveis é outra característica valiosa, permitindo visualizar e expandir variáveis para examinar suas propriedades e valores em tempo real durante a depuração. O stack trace e o call stack ajudam a rastrear a sequência de chamadas de função que levaram ao ponto atual da execução, auxiliando na identificação de erros e na compreensão do contexto do código. O Debug Console fornece uma interface interativa onde comandos e expressões podem ser executados enquanto o código está pausado, facilitando a exploração do estado do programa. Além disso, o VS Code permite adicionar expressões para monitoramento contínuo através das Watch Expressions e oferece a capacidade de criar e personalizar configurações de depuração através de arquivos launch.json. Isso permite definir parâmetros de inicialização e variáveis de ambiente, tornando a depuração ainda mais flexível e ajustada às necessidades específicas de cada projeto. Em resumo, o VS Code é uma ferramenta poderosa e versátil, com recursos de depuração que ajudam a tornar o processo de desenvolvimento mais eficiente e produtivo.

## Como fazer um CRUD com Next.Js

[Tutorial Ensinando a Fazer o CRUD](https://www.youtube.com/watch?v=RKDfKbLJkZQ&list=PLcj1aOceG9D_4EhNJvzKt-bMvEEXbKNSj)

O vídeo ensina a fazer operações CRUD com Next.js e MongoDB para criar um sistema de gerenciamento de funcionários. Mostra como adicionar, visualizar, editar e deletar registros, usando Redux Toolkit e React Query para gerenciar dados. Inclui também a criação de middleware, conexão com MongoDB e dicas sobre o Redux Toolkit.

## Mocks Objects em Testes de Unidade

Mocks objects são componentes fundamentais em testes de unidade, usados para simular o comportamento de objetos reais em um ambiente controlado e previsível. Eles são especialmente úteis quando os objetos reais são complexos, difíceis de configurar ou dependem de recursos externos como bancos de dados, serviços web ou hardware. Ao utilizar mocks, os desenvolvedores podem isolar o código que está sendo testado, garantindo que o teste se concentre exclusivamente na funcionalidade da unidade em questão sem interferências externas.

Esses objetos simulados permitem definir expectativas específicas sobre como eles devem ser usados durante o teste. Por exemplo, um mock pode ser configurado para esperar que um método seja chamado com certos parâmetros e, em seguida, retornar um valor predefinido. Isso facilita a verificação de comportamentos específicos do código sob teste, como a interação correta com dependências. Além disso, mocks podem ser usados para simular erros e verificar se o código lida adequadamente com exceções ou condições inesperadas.

Mocks objects também ajudam a melhorar a eficiência dos testes de unidade. Eles podem substituir componentes que são caros ou lentos para serem executados, permitindo que os testes sejam rápidos e repetíveis. Isso é particularmente importante em ambientes de desenvolvimento ágeis, onde testes frequentes e rápidos são essenciais para garantir a qualidade contínua do software. Em resumo, mocks objects são ferramentas poderosas que permitem aos desenvolvedores criar testes de unidade mais isolados, precisos e eficientes.

## Descrevendo o Projeto:

### Descrição do CRUD de Funcionários

O User Story US03 - Manter Funcionário descreve a funcionalidade do sistema que permite ao gerente realizar o cadastro completo de funcionários. As operações incluem a inserção, alteração, exclusão e consulta dos dados de funcionários. Os atributos registrados para cada funcionário são nome, CPF, data de nascimento, endereço, email, cargo, carga horária e salário. Esta funcionalidade é essencial para a gestão de recursos humanos dentro do sistema, garantindo que todos os dados dos funcionários estejam atualizados e acessíveis para operações futuras.

### Implementando Testes de Unidade

Minha experiência implementando os Testes de Unidade foi bem interessante e bastante produtiva, visto que é imprescindível que sejam feitos testes nas funcionalidades do software, levando em consideração que devido a eles temos noção da eficiência do projeto. Tive algumas dificuldades iniciais, pelo fato de nunca ter tido contato com esse tema, mas fui me adaptando bem ao longo da implementação.

#### Testes Que Fiz

- teste_adicionar_mercadoria_com_dados_validos
- teste_adicionar_mercadoria_com_dados_incompletos
- teste_cadastrar_produtos_com_dados_validos
- teste_cadastrar_produtos_com_dados_incompletos

#### Link para conferir os [Testes de Unidade](https://github.com/melquetrindade/sigQueijaria/tree/main/back_end/api/core/tests)

