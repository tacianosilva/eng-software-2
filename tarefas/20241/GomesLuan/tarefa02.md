# Tarefa 02 - Teste de Unidade

## Informações Pessoais

**Nome:** Luan Victor de Araujo Gomes

**Github:** [GomesLuan](https://github.com/GomesLuan)

**Email:** luan.gomes.706@ufrn.edu.br

## Link do repositório:

https://github.com/GomesLuan/SigBordado.git

## Testes de Software:

Testes de software são processos essenciais para garantir a qualidade e a funcionalidade correta de um sistema. Testes de unidade, uma forma específica de teste de software, focam em verificar a funcionalidade de componentes individuais, geralmente funções ou métodos, de forma isolada. Eles são realizados durante o desenvolvimento para identificar e corrigir erros precocemente, garantindo que cada unidade do código funcione conforme esperado. Testes de unidade são geralmente automatizados, permitindo uma rápida verificação de que mudanças no código não introduzem novos defeitos, e facilitando a manutenção e evolução do software.

## Informações do projeto

### Linguagem: Javascript

JavaScript é uma linguagem de programação de alto nível, interpretada, e multi-paradigma. Ela é amplamente utilizada para o desenvolvimento de páginas web interativas e dinâmicas. JavaScript pode ser executado tanto no lado do cliente (navegador) quanto no lado do servidor (usando plataformas como Node.js). Isso permite a criação de aplicações web completas usando apenas uma linguagem de programação. A linguagem também suporta operações assíncronas, o que significa que pode lidar com tarefas como solicitações de rede sem bloquear a execução do código. Isso é especialmente importante no desenvolvimento web, onde as interações do usuário e as solicitações de rede podem ocorrer simultaneamente. A equipe possui conhecimento básico da linguagem, tendo a utilizado anteriormente na disciplina de Programação Web.

### Linguagem: Python

Python é uma linguagem de programação de alto nível, interpretada, e de propósito geral, que se destaca por sua simplicidade, legibilidade e facilidade de aprendizado. Python suporta vários paradigmas de programação, incluindo programação orientada a objetos, programação imperativa e programação funcional. Isso oferece aos desenvolvedores uma grande flexibilidade na abordagem de problemas de programação. Uma das principais razões para a popularidade da linguagem é o seu vasto ecossistema de bibliotecas de terceiros. Essas bibliotecas permitem que os desenvolvedores aproveitem funcionalidades pré-existentes para acelerar o desenvolvimento de software. A equipe possui conhecimento intermediário na linguagem, tendo a utilizado anteriormente na disciplina de Algoritmos e Lógica de Programação, além de projetos diversos.

### Framework

Para o Frontend, será utilizado o framework ReactJS, que é comumente usado para construção de interfaces de usuário (UI), especialmente em aplicações web. O framework também é conhecido por sua abordagem de componentização e pela eficiência na atualização do DOM (Document Object Model). Para o Backend será utilizado Django, um framework de desenvolvimento web em Python que é conhecido por sua eficiência, simplicidade e escalabilidade.

### Tecnologias

Front-End: ReactJS

Back-End: Django

Banco de dados: Postgres e Docker

### IDE utilizada

Será utilizada a IDE Visual Studio Code, conhecida por sua leveza, rapidez e extensibilidade. O VS Code possui um depurador integrado para debug, permitindo que os desenvolvedores inspecionem variáveis, definam pontos de interrupção, executem passo a passo e monitorem o estado do aplicativo durante a execução. Além disso, a IDE possui integração nativa com o Git, o sistema de controle de versão mais popular. Ele fornece uma interface gráfica para executar operações Git comuns, como commit, pull, push, merge, entre outras. Os desenvolvedores podem visualizar as alterações nos arquivos, comparar versões, e gerenciar branches diretamente no editor.

## Framework: pytest

O pytest é um framework de testes para Python que é simples de usar e altamente extensível. Ele permite escrever testes de forma concisa e legível, suportando tanto testes simples quanto complexos. O pytest oferece recursos avançados como fixtures (para configuração e limpeza de testes), suporte a plugins, e uma interface de linha de comando poderosa para executar e gerenciar testes. Ele também suporta a descoberta automática de testes, o que facilita a organização e execução de grandes conjuntos de testes.

Mais informações em: https://pytest.org

## Link de Tutorial usado para fazer testes na tecnologia escolhida:
* [Vídeo](https://www.youtube.com/watch?v=0OOS7sbVn4U)

O vídeo acima mostra como configurar o pytest utilizando um ambiente django, bem como mostra a criação de testes para registro e login de usuário. Além disso, são criados testes de unidade referentes ao CRUD de uma tabela.

## Mocks Objects

Mocks Objects são objetos simulados que replicam o comportamento de objetos reais em testes de unidade. Eles são usados para isolar o componente que está sendo testado ao substituir dependências externas, como serviços, bancos de dados ou APIs, com versões controladas e previsíveis. Isso permite focar o teste na funcionalidade específica do código em análise, garantindo que os testes sejam rápidos, confiáveis e repetíveis. Além de simular comportamentos, mocks podem verificar se certos métodos foram chamados, com os parâmetros esperados, ajudando a validar interações entre componentes. Frameworks populares como unittest (com seu submódulo unittest.mock) e pytest (com o plugin pytest-mock) facilitam a criação e uso de mocks em testes de unidade.

## Descrição de CRUD - Manter Funcionário

Um CRUD que implementei foi o de Funcionário, com as operações incluir, consultar, alterar e deletar. Um funcionário armazena informações uma pessoa que trabalha na casa de bordados, que tem acesso ao sistema.

## Implementação dos testes

Implementei testes de unidade para model, serializer e view de Funcionário. De modo geral, os testes tentam realizar as operações básicas do CRUD para conjuntos de dados válidos e inválidos.

Disponível em: https://github.com/GomesLuan/SigBordado/blob/dev/backend/api/tests.py

## Testes de Integração

Testes de integração são uma etapa do processo de testes de software focada em verificar a interação e integração entre diferentes módulos ou componentes do sistema. Ao contrário dos testes de unidade, que isolam e testam partes individuais do código, os testes de integração verificam se os módulos funcionam corretamente juntos, garantindo que a comunicação, as interfaces e as dependências entre eles estejam funcionando conforme esperado. Esses testes ajudam a identificar problemas que podem surgir quando componentes separados são combinados, como incompatibilidades de interface ou falhas na comunicação entre sistemas. Os testes que implementei até o momento no projeto da disciplina se limitam a testes de unidade.