# Tarefa 02 - Teste de Unidade

*Nome:* Erick Bezerra Ribeiro Trindade
*Usuário GitHub:* https://github.com/ErickBezerrar 
*E-mail:* erickbrtrindade@gmail.com
*Repositório:* [erickbrtrindade@gmail.com](https://github.com/melquetrindade/sigQueijaria)

---

## Projeto: SigQueijaria

### Descrição:

<div style="text-align: justify">
Testes de Unidade (ou Unit Tests) são uma prática fundamental em desenvolvimento de software, focada em testar individualmente as menores partes testáveis de uma aplicação, conhecidas como unidades. Essas unidades geralmente são funções, métodos ou classes. O objetivo dos testes de unidade é garantir que cada unidade funcione corretamente isoladamente, sem dependências de outras partes do sistema.

A linguagem usada no projeto será python com o uso do framework do django, para o front foi escolhido o uso do Next.js

Para testes de unidade em projetos Django, um dos frameworks mais populares é o pytest. Este framework oferece uma maneira mais flexível e menos verbosa de escrever testes em comparação ao módulo unittest padrão do Python. O pytest é altamente extensível e possui várias funcionalidades úteis que podem tornar a escrita e execução de testes mais eficiente.

Resumo sobre o pytest:

Facilidade de uso: pytest permite escrever testes com menos código e mais legibilidade, suportando a escrita de testes simples e complexos.
Plugins: Possui uma grande quantidade de plugins que podem ser usados para estender suas funcionalidades, como integração com bancos de dados, testes de performance e muito mais.
Fixture Management: pytest utiliza um sistema de fixtures que permite configurar estados iniciais para seus testes, melhorando a reutilização e a modularidade do código de teste.
Suporte para testes paralelos: Com a ajuda do plugin pytest-xdist, é possível executar testes em paralelo, o que pode reduzir significativamente o tempo de execução dos testes em grandes projetos.
Integração com Django: O plugin pytest-django oferece integração completa com o framework Django, permitindo que você aproveite as vantagens do pytest enquanto trabalha com um projeto Django.

Links úteis:

https://github.com/pytest-dev/pytest-django
https://docs.djangoproject.com/en/4.2/topics/testing/
https://realpython.com/testing-in-django-part-1-best-practices-and-examples/

IDE utilizada: VS code

Visual Studio Code (VS Code) é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele é gratuito, open-source e oferece suporte a várias linguagens de programação através de uma ampla gama de extensões. 

Ferramentas de Debug Integradas

Breakpoints:

Permitem que você pause a execução do código em um ponto específico para inspecionar variáveis, memória e fluxo de execução.
Podem ser definidos diretamente na linha de código clicando na margem esquerda.
Watch Expressions:

Permitem monitorar o valor de expressões específicas ao longo da execução do programa.
Útil para acompanhar variáveis e expressões complexas em tempo real.

Call Stack:

Exibe a pilha de chamadas de funções, permitindo que você navegue para cima e para baixo na pilha para entender o fluxo de execução do programa.
Facilita a identificação de como uma função foi chamada e o contexto em que ela está sendo executada.

#tutorial do CRUD em Django
https://www.youtube.com/watch?v=GGBzMpIAgz4

Mock objects são objetos simulados que imitam o comportamento de objetos reais em testes de unidade. Eles são usados para isolar o código em teste, substituindo dependências externas ou complexas que o código possa ter, como chamadas a banco de dados, serviços web ou outras interações de rede. A utilização de mock objects facilita a criação de testes previsíveis e controlados, focando na lógica interna do código em vez de sua interação com o ambiente externo.

CRUD produto(User Story US3)

O CRUD de produtos tem como funçao fazer toda a inserçao de produtos, exclusao, leitura e atualizacao dos mesmos, com o intuito de deixar todo o sistema completo.

Create: Adicionar um novo produto ao banco de dados.
Read: Recuperar informações sobre um ou mais produtos.
Update: Modificar os detalhes de um produto existente.\
Delete: Remover um produto do banco de dados.

</div>