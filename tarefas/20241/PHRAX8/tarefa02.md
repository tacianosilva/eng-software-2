# Tarefa 02 - Teste de Unidade

**Nome:** Pedro Henrique Ribeiro Alves

**Github:** [PHRAX8](https://github.com/PHRAX8)

**Email:** pedro.ribeiro.121@ufrn.edu.br

**Repositório do Projeto:** [SigBordado](https://github.com/GomesLuan/SigBordado.git)

## Testes de Software

Os testes de software são feitos para assegurar que um sistema funcione corretamente. Entre esses testes, os testes de unidade se destacam como um que se concentra em avaliar componentes individuais, como funções ou métodos, de maneira isolada, durante a fase de desenvolvimento, esses testes ajudam a detectar e corrigir erros logo no início. Os testes de unidade são geralmente automatizados, permitindo verificar rapidamente se mudanças no código não criam novos problemas, tornando a manutenção do software mais fácil.

## Informações do projeto

### Linguagem: Javascript

JavaScript é uma linguagem de programação de alto nível amplamente utilizada na criação de páginas web dinâmicas e interativas. Sua versatilidade permite sua execução tanto no lado do cliente quanto no lado do servidor. Ela também oferece suporte a operações assíncronas, possibilitando o processamento de tarefas como solicitações de rede sem interromper a execução do código. O conhecimento básico da equipe sobre JavaScript foi adquirido durante a disciplina de Programação Web.

### Linguagem: Python

Python é reconhecida como uma linguagem de programação de alto nível, notória por sua simplicidade e clareza. Suportando programação orientada a objetos, imperativa e funcional, Python atrai diversos desenvolvedores. Sua popularidade é impulsionada pela extensa quantidade de bibliotecas, facilitando o desenvolvimento. A equipe demonstra um conhecimento intermediário em Python, adquirido através da disciplina de Algoritmos e Lógica de Programação.

### Framework

No Frontend, optamos pelo framework ReactJS, amplamente empregado na criação de interfaces de usuário para aplicações web. Este framework é reconhecido por sua abordagem de componentização e pela eficiência na atualização do Document Object Model (DOM). Para o Backend, escolhemos o Django, um framework de desenvolvimento web em Python que se integra facilmente em diversos projetos.

## Framework: pytest

O pytest é um framework de testes para Python conhecido por sua simplicidade e alta extensibilidade. Atende tanto a testes básicos quanto a cenários mais complexos além de incluir recursos avançados como fixtures, que ajudam na configuração e limpeza dos testes. Apresenta também suporte a plugins, uma poderosa interface de linha de comando e a capacidade de descobrir automaticamente os testes, o que torna mais fácil organizar e executar grandes quantidades de testes.

## IDE

Optamos pelo Visual Studio Code como ambiente de desenvolvimento. Este software conta com um depurador integrado para facilitar o processo de identificação e correção de bugs, permitindo que os desenvolvedores inspecionem o estado do aplicativo durante sua execução. Além disso, o Visual Studio Code oferece integração nativa com o Git, fornecendo uma interface gráfica intuitiva para realizar operações comuns, como commit, pull, push e merge, simplificando o fluxo de trabalho.

## Tutorial de testes

* [Tutorial](https://www.youtube.com/watch?v=0OOS7sbVn4U)

O vídeo demonstra o processo de configuração do pytest em um ambiente Django, incluindo a criação de testes para funcionalidades de registro e login de usuário.

## Mocks Objects

São objetos simulados usados em testes de unidade para imitar o comportamento de objetos reais, permitindo isolar o componente que está sendo testado ao substituir dependências externas, como serviços, bancos de dados ou APIs, com versões controladas e previsíveis. Permitindo focar o teste na funcionalidade específica do código que está sendo analisado, garantindo velocidade, confiábilidade. Podem também verificar se certos métodos foram chamados com os parâmetros corretos, ajudando a validar as interações entre componentes. 

## Manter Material

Para adicionar um novo material, é enviado uma solicitação POST para /material/ com os dados do material; se bem-sucedido, um código HTTP 201 Created é enviado. Para consultar materiais, o endpoint GET /material/ é usado para obter todos os registros ou GET /material/{pk}/ para um material específico, recebendo uma lista ou detalhes do material. Caso o material não exista, o sistema responde com um código HTTP 404 Not Found.
Para atualizar um material existente, é enviado uma solicitação PUT para /material/{pk}/ com as novas informações; se a atualização for bem-sucedida, um código HTTP 200 OK é enviado. Se houver erros ou o material não for encontrado, o sistema retornará um código HTTP 400 Bad Request ou 404 Not Found, respectivamente. Para excluir um material, é enviado uma solicitação DELETE para /material/{pk}/; se a exclusão for realizada com sucesso, um código HTTP 204 No Content é enviado. O sistema também valida os dados e fornece mensagens detalhadas para ajudar na correção de erros.

## Teste de Unidade
* [Arquivo de Teste](https://github.com/GomesLuan/SigBordado/blob/dev/backend/api/tests.py)
Implementar os testes para o gerenciamento de materiais envolveu verificar a funcionalidade de diferentes partes do sistema. No modelo Material, garanti que as instâncias eram criadas corretamente e que o método __str__ retornava a representação esperada. Esses testes confirmaram que o modelo armazenava e recuperava os dados conforme o esperado.
Para o serializador MaterialSerializer, os testes focaram em validar se os dados serializados continham os campos corretos e se o processo de criação de novos materiais funcionava bem com dados válidos e inválidos. Além disso, os testes da view MaterialView cobriram todas as operações CRUD, assegurando que as requisições para criar, consultar, atualizar e excluir materiais retornavam os status HTTP corretos e manipulavam os dados de forma adequada.

## Teste de Integração

O teste de integração verifica a interação entre diferentes componentes ou sistemas, garantindo que funcionem corretamente juntos. Avalia como partes do sistema, como banco de dados e APIs, colaboram para realizar tarefas complexas, identificando problemas na comunicação entre elas.
O teste unitário foca na verificação de unidades individuais do código, como funções ou métodos, de forma isolada. O objetivo é assegurar que cada parte do código funcione corretamente por conta própria. Esse foi o teste feito por mim. Já o teste de integração, avalia a interação entre diferentes componentes ou sistemas para garantir que eles funcionem corretamente em conjunto. Esse tipo de teste verifica se diferentes partes do sistema, como módulos, APIs e serviços, colaboram adequadamente para realizar tarefas complexas.
