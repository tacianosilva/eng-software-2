# Tarefa 02 - Teste de Unidade 
### Thamiris de Oliveira Borges | Thami03 | thamirisbgrs@gmail.com :octocat: | [Link do repositório](https://github.com/melquetrindade/sigQueijaria)
<hr> 

## Testes de software 
Testes de software são o processo de avaliar um sistema ou aplicativo para garantir que ele funcione corretamente e atenda aos requisitos especificados. O objetivo principal é identificar e corrigir defeitos para garantir a qualidade e a confiabilidade do software. Testes de Unidade são um tipo de teste de software que se concentra na verificação de partes individuais do código, geralmente funções ou métodos, de forma isolada. O objetivo é assegurar que cada unidade de código funcione corretamente por conta própria, sem dependências externas.

## Next framework para o Front-End
Next.js é um framework para React que oferece uma série de recursos avançados para facilitar o desenvolvimento de aplicações web modernas e de alto desempenho. Criado pela Vercel, Next.js se destaca por sua capacidade de renderização híbrida, suporte a SSR (Server-Side Rendering), SSG (Static Site Generation) e API routes.


## Java Script linguagem para o Front-End:
JavaScript é uma linguagem de programação amplamente utilizada para criar e controlar o comportamento de páginas web no lado do cliente (front-end). É uma das três principais tecnologias da web, juntamente com HTML e CSS, e é essencial para desenvolver experiências interativas e dinâmicas na web.


## Django para framework para o Back-End
Django é um framework web de alto nível para Python que promove o desenvolvimento rápido e limpo de aplicações web. Ele é projetado para ajudar desenvolvedores a criar aplicativos robustos e escaláveis com o menor esforço possível.


## Python para o Back-End:
Python é uma linguagem de programação popular e versátil, amplamente utilizada no desenvolvimento back-end. Sua simplicidade e a vasta gama de bibliotecas e frameworks tornam-na uma escolha atraente para criar e manter aplicações web robustas e escaláveis.

## Pytest para testes no Back-End
Pytest é uma framework de testes para Python que é amplamente utilizada para realizar testes em projetos de back-end. É conhecida por sua simplicidade, flexibilidade e robustez, tornando-a uma escolha popular entre desenvolvedores Python para criar e executar testes.


[Pytest](https://docs.pytest.org/en/stable/)

## Jest para testes no Front-End
Jest é uma biblioteca de testes para JavaScript, desenvolvida pelo Facebook, amplamente utilizada para testar aplicações front-end, especialmente com React. É uma ferramenta poderosa e fácil de configurar, ideal para garantir a qualidade e a robustez do código.

[Jest](https://jestjs.io/pt-BR/)

## IDE utilizada
Visual Studio Code (VS Code) é um editor de código-fonte desenvolvido pela Microsoft, amplamente utilizado por desenvolvedores devido à sua flexibilidade, extensibilidade e suporte para uma ampla gama de linguagens e frameworks. É uma escolha popular tanto para desenvolvimento front-end quanto back-end.

Características Principais
- Interface Intuitiva: Design Moderno: Interface limpa e moderna com suporte para múltiplas janelas e áreas de trabalho.
Customização: Suporte para temas e personalizações de interface.
- Extensibilidade: Marketplace de Extensões: Acesso a uma vasta gama de extensões que adicionam funcionalidades, como suporte a novas linguagens, ferramentas de desenvolvimento e integrações com serviços externos.
Extensões Populares: Extensões para Python, JavaScript, TypeScript, Docker, Git e muito mais.
- Suporte a Várias Linguagens: Suporte nativo para muitas linguagens de programação e linguagens adicionais podem ser adicionadas através de extensões.
- Integração com Git: Controle de Versão: Ferramentas integradas para gerenciar controle de versão Git, com visualização de alterações, commits e merges diretamente no editor.
- Terminal Integrado: Acesso a um terminal integrado dentro do VS Code, permitindo executar comandos sem sair do editor.
- Depurador: Ferramentas de depuração integradas para diferentes linguagens e frameworks, facilitando o rastreamento e a correção de erros.
- IntelliSense: Autocompletar e Sugestões: Oferece sugestões inteligentes de código, autocompletar e documentação inline para melhorar a produtividade e a precisão do código.
- Editor de Código e Navegação: Refatoração e Navegação. Recursos para refatorar código e navegar entre arquivos, funções e variáveis com facilidade.

O Visual Studio Code (VS Code) oferece um conjunto robusto de ferramentas de depuração que facilita a identificação e a correção de erros no código. 

## Tutorial de testes de software com JavaScript
O artigo "Testes Unitários em JavaScript: Um Guia Completo para Iniciantes" da Giovanna Moeller no Medium oferece uma introdução abrangente à prática de testes unitários em JavaScript. O artigo é direcionado para iniciantes que desejam aprender os fundamentos e as melhores práticas para testar seus códigos JavaScript de forma eficaz.

[Link do tutorial](https://giovannamoeller.medium.com/testes-unit%C3%A1rios-em-javascript-um-guia-completo-para-iniciantes-a980138f47d6)

## Mocks Objects
Mock objects são uma técnica amplamente utilizada em testes de software para simular o comportamento de objetos reais. Eles são úteis para isolar o código em teste e garantir que ele se comporte corretamente sob diferentes condições, sem depender de componentes externos ou complexos.

### O que são Mocks?
- Definição: Mocks são objetos que imitam o comportamento de objetos reais de forma controlada. Eles são usados para verificar interações e comportamentos em testes, permitindo que o desenvolvedor isole e teste uma unidade específica de código sem depender de suas dependências.
- Objetivo: Permitir a verificação de interações entre objetos e simular comportamentos complexos de forma previsível e controlada.

## Descrição do Projeto
## Descrição do User Story implementado:
O sistema deve manter um cadastro dos fornecedores a partir da inserção, alteração, exclusão e consulta dos seus dados ao sistema. Um fornecedor tem os atributos nome, CNPJ, data de nascimento, número de telefone e  email. O registro do fornecedor no sistema poderá ser feito apenas pelo gerente.

## Implementando Testes Unitários:
Minha experiência ao implementar os testes unitários foi muito boa, consegui compreender sua importância para garantir a qualidade e manutenibilidade do software ao longo do tempo. Até o momento nunca tinha implementado testes, então tive um pouco de dificuldade no início para entender como funcionava a lógica, porém, logo depois de algumas práticas foi fácil compreender seu funcionamento.

### Testes realizados:
teste_get_fornecedoro_por_id: Realiza teste para consultar um fornecedor por id específico.
teste_update_de_dados_do_fornecedor_valido: Realiza teste para verificar se é permitido atualizar dados de um fornecedor através de uma entrada válida.
teste_deletar_fornecedor_com_id_valido: Realiza teste para verificar se pode deletar um fornecedor com id existente.
teste_criar_fornecedor_com_dados_incompletos: Realiza teste para conferir se é possível cadastrar um fornecedor sem informar todos os dados.

[Link para o arquivo de testes do projeto](https://github.com/melquetrindade/sigQueijaria/blob/main/back_end/api/core/tests/test_views.py)

## Testes de Integração x Unitário

Teste de Integração é um tipo de teste de software que foca em verificar a interação entre diferentes componentes ou módulos de um sistema para garantir que eles funcionem corretamente juntos. Ao contrário dos testes unitários, que avaliam unidades individuais de código, os testes de integração verificam a integração e a comunicação entre essas unidades.

No projeto, eu fiz teste unitário.





