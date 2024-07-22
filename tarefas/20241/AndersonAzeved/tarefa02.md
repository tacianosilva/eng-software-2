# Tarefa 02 - Teste de Unidade

###

## Informações pessoais
Nome: [Anderson Azevedo da Silva](https://github.com/AndersonAzeved) <br>
GitHub: [AndersonAzeved](https://github.com/AndersonAzeved)<br>
Email: andersonsilva14.2017@gmail.com

##
### [Repositório do projeto - SIGApoio](https://github.com/tgo-mas/SIGApoio)<br>
##
## Testes de Software

### Testes de Unidade
Uma prática importante no desenvolvimento de software é o teste de unidade, que se concentra em verificar individualmente pequenas partes do código, como funções ou métodos, para garantir que funcionem corretamente. Eles servem como registro do comportamento esperado, facilitam a manutenção e permitem a detecção de erros de forma imediata. Para isso, ferramentas como JUnit, PyTest e Unittest são amplamente utilizadas. Os testes de unidade incluem testes independentes e isolados com o uso de mocks para simular dependências externas. A automação desses testes e sua incorporação ao processo de integração contínua são cruciais. Essa abordagem é essencial para garantir a qualidade e a confiabilidade do software ao longo do tempo, apesar dos problemas com a cobertura e a manutenção dos testes.

## Sobre a linguagem de programação a ser usada no projeto

### Linguagem de Programação: Python
Python, é uma linguagem de programação fácil, versátil e poderosa. Excelente para iniciantes e experientes, por ter uma curva de aprendizado ótima. Tem diversos usos, como IA, análise de dados e desenvolvimento web. Python, possui uma escrita légivel e de fácil compreensão, e gratuita. Desse modo, existem vários adeptos na comunidade. 

### Framework a ser utilizado: Django 
O Django é um framework web escrito em Python e de código aberto, destacando se por ofertar um ambiente que facilita a criação de soluções web escaláveis. Ademais, promove o desenvolvimento rápido e um design limpo, proporcionando ferramentas robustas e eficientes para desenvolvedores.

### Banco de Dados: PostgreSQL
O PostgreSQL é um banco de dados relacional de código aberto robusto e extensível que atende aos padrões SQL. Ele possui recursos avançados como replicação, controle de concorrência multiversion (MVCC) e transações ACID, além de suportar uma ampla gama de tipos de dados. Ele funciona bem para aplicações que vão de sites simples a sistemas complexos de análise de dados, pois é extensível o suficiente para permitir a inclusão de novos tipos de dados e funções. A eficiência e a segurança do PostgreSQL são constantemente melhoradas por uma comunidade ativa de desenvolvedores.

## Framework de testes, para a linguagem escolhida
PyTest é um framework de testes comumente utilizado para Python, conhecido por sua facilidade de uso e flexibilidade. Ele permite a criação de testes básicos e complexos, com suporte para fixtures, parametrização e detecção automática de testes. O PyTest oferece uma grande coleção de plugins para melhorar sua funcionalidade e ajuda a configurar e limpar os ambientes de teste. O desenvolvimento é melhorado com sua integração com ferramentas de CI/CD e a capacidade de executar testes em paralelo. PyTest é uma opção versátil e eficaz para testes em Python porque tem uma sintaxe clara e suporta várias funcionalidades.
* [Documentação PyTest](https://docs.pytest.org/en/stable/contents.html)
* [Instalação](https://docs.pytest.org/en/stable/getting-started.html)

## Outro framework de testes
Cypress é um conjunto de testes end-to-end para aplicações Next.js, conhecido por sua facilidade de uso e capacidade de simular interações reais no navegador. Com recursos como time-travel debugging e uma API para interações DOM simples, ele permite testes rápidos e confiáveis. A aplicação pode funcionar bem em ambientes de produção com o Cypress, que suporta tanto testes de integração quanto end-to-end. A Cypress é uma escolha popular para garantir a qualidade das aplicações Next.js devido à sua interface de usuário interativa e excelente documentação.
* [Documentação do Cypress](https://docs.cypress.io/guides/overview/why-cypress)
* [Instalação](https://docs.cypress.io/guides/getting-started/installing-cypress)

#

## IDE: Visual Studio Code
* O Visual Studio Code (VSCode) é uma IDE de código aberto da Microsoft, disponível para Windows, macOS e Linux. Ela se destaca por sua leveza, flexibilidade e grande variedade de extensões, tornando-a uma excelente escolha para desenvolvedores de diferentes linguagens e plataformas.

### Ferramentas de Debug: 
* O VSCode possui ferramentas de debug integradas para diversas linguagens, como JavaScript, TypeScript, Python, C++ e Java. 

* Alguns exemplos dos recursos que se destacam: 
    * Pontos de interrupção 
    * Console de depuração 
    * Pilha de chamadas 
    * Examinar variáveis


### Ferramentas de Controle de Versão:
* O VSCode oferece suporte integrado ao Git, o sistema de controle de versão mais popular. Através da interface do VSCode, você pode:
    * Criar e gerenciar repositórios Git.
    * Visualizar histórico de alterações.
    * Comparar e mesclar diferentes versões do código.
    * Fazer commits e pushs para repositórios remotos.

## Tutorial Testes de Unidade

### Tutorial de um CRUD em Python com Django framework 
> Curso gratuito, clique [aqui](https://www.udemy.com/course/introducao-ao-django-4-crud-completo-com-banco-de-dados/)
* Neste [curso](https://www.udemy.com/course/introducao-ao-django-4-crud-completo-com-banco-de-dados/) gratuito, aprenda o básico sobre o Django fraemwork através de uma abordagem prática e hands on onde você desenvolverá um CRUD.

### Tutorial Testes de Unidade
Os três tipos de teste são discutidos neste artigo: unitário, de integração e automatizado. Os testes unitários se concentram em unidades de código individuais. Testes de integração avaliam como várias partes do código trabalham juntas. Testes são realizados automaticamente.
* [Link do tutorial](https://medium.com/@habbema/teste-de-software-com-python-ec521876340f)


## Mocks Objects em Testes de Unidade
Mocks são usados em testes de unidade para simular dependências externas e objetos com os quais a unidade de código do teste interage. Eles permitem que você isole e teste a funcionalidade particular da unidade sem depender de componentes reais, como serviços externos ou bancos de dados.

Os mocks ajudam na criação de condições controladas e na verificação de como a unidade de código reage a vários tipos de situações, como erros ou reações inesperadas. Isso torna mais fácil encontrar bugs e entender o comportamento do código, reduzindo os custos e a complexidade da configuração e gerenciamento de dependências reais. Em Python e Java, ferramentas como unittest.mock e Mockito são frequentemente usadas para criar e administrar mocks em testes de unidade.


## CRUD implementado no projeto
### User Story US05 - Manter Recurso
O user story, tem a finalidade de manter os recursos do sistema SIGApoio, para empréstimo. Um recurso pode ter os atributos codigo, status, funcionando e tipo. Apresenta uma tela de estoque para listar os recursos disponíveis. Os tipos de recursos são adaptador HDMI, projetor, notebook, caixa de som e mouse. Bem como, uma tela que mostra os recursos disponíveis e os reservados. Ademais, cadastrar, editar e deletar recursos.

## Implementação de Teste de Unidade
Para garantir que várias rotas da API estivessem funcionando corretamente, utilizei o Django TestCase com o "APIClient" ao implementar os testes de unidade para a aplicação. A experiência foi positiva porque pude verificar se as páginas e endpoints da API retornavam o código de status HTTP esperado (200 OK). 

Cada teste foi configurado para acessar vários URLs para os métodos GET e POST, o que facilita a identificação rápida de problemas de integração ou resposta da API. A simulação de requisições e a verificação dos resultados foram facilitadas com o uso do "APIClient". No geral, foi um processo direto que garantiu a integridade das principais funcionalidades da aplicação.
* [Link dos testes](https://github.com/tgo-mas/SIGApoio/blob/main/proj_SIGApoio/app/tests.py)
