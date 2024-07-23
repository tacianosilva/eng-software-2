# Tarefa 02 - Teste de Unidade

Felipe Souza Benício da Silva | FelipeSouza14 | felipesouzabenicio@gmail.com

Para acessar o repositório do projeto [Clique Aqui!](https://github.com/melquetrindade/sigQueijaria)

## O que são Testes de Unidade?

Testes de unidade são uma técnica essencial no desenvolvimento de software que foca na verificação de componentes individuais do código, conhecidos como unidades. O principal objetivo desses testes é assegurar que cada unidade funcione corretamente de acordo com suas especificações e requisitos definidos. Esse tipo de teste é realizado de forma isolada, permitindo que os desenvolvedores identifiquem e corrijam erros específicos em partes do código sem a interferência de outros componentes.

Geralmente, os testes de unidade são automatizados, o que possibilita a execução rápida e frequente desses testes durante o desenvolvimento. Isso ajuda a detectar e resolver problemas de forma antecipada, facilitando a manutenção e a refatoração do código com maior segurança. A automação também contribui para uma integração contínua mais eficiente, pois os testes podem ser executados a cada mudança no código.

Diversas ferramentas e frameworks são utilizados para criar e gerenciar testes de unidade, como JUnit para Java, NUnit para .NET e _pytest_ para Python. Esses testes são apenas uma parte de uma abordagem de teste mais ampla, que inclui também testes de integração e testes de sistema, todos eles contribuindo para garantir a qualidade e a robustez do software final.

## Linguagens de Programação

Python e JavaScript são duas linguagens de programação amplamente utilizadas, cada uma com suas características distintas e aplicações específicas. Python, por exemplo, é conhecida por sua sintaxe limpa e legibilidade, é uma linguagem versátil e poderosa, ideal para desenvolvimento web, análise de dados, automação de tarefas e inteligência artificial, de fácil aprendizado.
Por outro lado, JavaScript é a linguagem essencial para o desenvolvimento de aplicações web interativas. JavaScript é indispensável para a criação de sites dinâmicos, aplicativos web e jogos online, e sua evolução constante garante que permaneça uma ferramenta crucial no arsenal de qualquer desenvolvedor web. Dessa forma, foram escolhidas as tecnologias descritas acima para o desenvolvimento do atual projeto.

## Framework para Testes de Unidade

O _pytest_ é uma ferramenta de teste amplamente utilizada para projetos em Python, destacando-se por sua simplicidade e flexibilidade. Com uma sintaxe fácil de entender e utilizar, o _pytest_ permite que os desenvolvedores escrevam testes de forma clara e eficiente. Ele identifica automaticamente arquivos e funções de teste com base em convenções de nomenclatura, eliminando a necessidade de configuração adicional.

Um dos recursos mais notáveis do _pytest_ é o sistema de fixtures, que facilita a configuração e limpeza de estados antes e depois dos testes, garantindo um ambiente de teste consistente. Além disso, o _pytest_ oferece mensagens de erro detalhadas e suporta asserções complexas, tornando a identificação e resolução de problemas mais simples.

O _pytest_ também é altamente extensível, com uma ampla gama de plugins disponíveis para adicionar funcionalidades extras e integrar com outras ferramentas. A capacidade de parametrizar testes e executar testes em paralelo, por meio do plugin _pytest_-xdist, ajuda a melhorar a eficiência e a cobertura dos testes.

Para rodar os testes, os desenvolvedores apenas precisam executar o comando _pytest_, que então descobrirá e executará os testes automaticamente, fornecendo um resumo dos resultados. Em resumo, o _pytest_ é uma ferramenta poderosa e versátil que se adapta bem a diferentes tamanhos e tipos de projetos, contribuindo significativamente para a garantia da qualidade do código.