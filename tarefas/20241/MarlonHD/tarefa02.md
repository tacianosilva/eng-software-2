# Tarefa 02 - Teste de Unidade

**Nome:** Marlon da Silva Dantas

**Github:** [MarlonHD](https://github.com/MarlonHD)

**Email:** marlonsilva840@gmail.com

**Link do projeto:** [Sistema de Gerenciamento do Apoio Pedagógico - SIGApoio](https://github.com/tgo-mas/SIGApoio)

## 9

###  Testes de Unidade: 
Os testes de software são uma atividade muito importante no desenvolvimento e na manutenção de um software. São usados para garantir a qualidade de um software, verificar se funcoina corretamente, se atende aos requisitos definidos, além de identificar eventuais erros. Os testes de unidade por sua vez são um dos tipos de testes de software, como seu próprio nome indica está relacionado às menores unidades do código ou seja as funções e/ou os métodos de forma isolada. Seu principal objetivo é identificar se cada um desses elementos estão funcionando corretamente. Entre suas maiores vantagens estão, o isolamento visto que cada teste é executado isoladamente, sem dependências externas, a possibilidade de automatização para permitir execuções rápidas e repetitivas, facilitando a detecção de erros logo nas fases iniciais do desenvolvimento, o fato de serem geralmente rápidos de executar e simples de escrever, além de servirem como uma forma de documentação viva do comportamento esperado do código.

### Linguagem de programação e stack para o projeto

Para o desenvolvimento do projeto da disciplina foi escolhida a linguagem de programação Python, juntamente com o framework Django. Com uma aplicação monolítica a fim de aproveitar ao máximo as ferramentas disponibilizadas pelo framework.

#### Python: 
É uma linguagem bastante popular, de fácil aprendizado e com uma ampla comunidade garantindo seu suporte e manutenção. É versátil possuindo usos para as mais diversas situações, desde aplicações de Inteligencia Artificial, automações, analise de dados e até mesmo o desenvolvimento web, sendo este o foco desse projeto.

#### Django:
Django é um framework de desenvolvimento web em Python, conhecido por sua capacidade de permitir a construção rápida e eficiente de aplicativos web. Possui uma comunidade fortemente ativa, bibliotecas e ferramentas que ajudam na implementação de funcionalidades comuns, como autenticação de usuários, administração de conteúdo e gerenciamento de sessões.

### Pytest
O Pytest é uma ferramenta poderosa e popular para realizar testes em Python. Ele simplifica a criação e execução de testes, tornando o processo mais eficiente e confiável. Ele conta com uma sintaxe bastante simples, geralmente as verificações são feitas apenas por meio da palavra-chave 'assert' seguida da operação lógica a ser verificada. Ele pode ser utilizado tanto para testes de unidade, quanto para testes de integração mais complexos. <br>
Outras informações à respeito podem ser encontradas no [Site oficial do pytest](https://docs.pytest.org/en/stable/) além de exemplos práticos no
[tutorial de pytest](https://medium.com/assertqualityassurance/tutorial-de-pytest-para-iniciantes-cbdd81c6d761).


### IDE utilizada (VS Code)

O Visual Studio Code (VS Code) é um editor de código-fonte leve, poderoso e altamente personalizável, desenvolvido pela Microsoft. Ele se tornou um dos editores de código mais populares entre desenvolvedores devido à sua interface intuitiva, extensibilidade e ampla gama de recursos. Oferece ferramentas integradas de debug e controle de versão. <br> Para debug, ele suporta pontos de interrupção, inspeção de variáveis e console interativo. <br> Para controle de versão, tem uma interface intuitiva para o Git, indicadores visuais de alterações e integração com o GitHub. <br> Em resumo, o Visual Studio Code oferece ferramentas de debug poderosas e uma integração perfeita com sistemas de controle de versão, tornando-o uma escolha popular entre desenvolvedores para projetos de software de qualquer tamanho.


### Tutorial CRUD + testes
Um exemplo de [tutorial](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Django/Introduction) bastante completo com relação ao django, desde a introdução para quem nunca teve contato com o framework, até a implementação de [testes](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Django/Testing). Alem desse tutorial também há outros exemplos como:<br>
[Curso Django:](https://www.udemy.com/course/introducao-ao-django-4-crud-completo-com-banco-de-dados/) curso gratuito, aprenda o básico sobre o Django fraemwork através de uma abordagem prática e hands on onde você desenvolverá um CRUD.

### Mocks Objects
Os mocks são objetos simulados que imitam o comportamento de objetos reais dentro dos testes de unidade. Eles são criados para representar bancos de dados, APIs externas, funções e métodos, permitindo isolar a lógica a ser testada sem depender da infraestrutura real. Ao definir o comportamento desses Mocks e quais valores devem ser retornados, é possível testar cenários específicos e comportamentos sem a necessidade de componentes reais. Isso facilita a detecção de erros e a garantia de que o código funciona conforme esperado, mesmo em condições controladas.

## 10

### a)
O CRUD pelo qual eu sou responsável É o crud de Chamado, vinculado diretamente às Reservas possuindo algumas operações como listagem e consultas em comum. Dentro do escopo do projeto, no momento em que um usuário está com um local reservado em determinado horário, durante o período em que a reserva está ativa, pode ser necessário a solicitação de um chamado para os bolsistas do setor responsável. <br>
Sendo assim o chamado consiste em uma mensagem vinculada à uma reserva, de forma que uma reserva pode ter nenhum ou mais de um chamado vinculado à ela, e cada chamado pode ter o status de pendente ou resolvido.


### b)
Implementar os testes foi uma experiência nova visto que não se havia o hábito de o fazer em outros projetos. O uso de Mock Objects facilitou a simulação das interações, permitindo que os testes se concentrassem em verificar a lógica de chamada dos métodos e o tratamento de dados sem a necessidade de uma implementação real. Como nosso aplicativo é monolítico, testamos principalmente os códigos HTTP recebidos das solicitações, além do tipo de payload e método que deve ser enviado em cada URL. Os testes do nosso projeto se encontram [nesse link](https://github.com/tgo-mas/SIGApoio/blob/main/proj_SIGApoio/app/tests.py).

### c)

Diferentemente dos testes de unidade, que focam em testar partes isoladas do código, os testes de integração como o nome intuitivamente sugere, testam a integração entre diferentes componentes do sistema, tendo o objetivo de garantir que essas partes funcionem juntas corretamente. 

exemplo de teste de integração:

    def test_efetuar_chamado_post(self):
        res = self.client.post(reverse('efetuar-chamado'), data={
            'chamado':'HDMI não funciona!',
            'reserva':1})
        self.assertEqual(res.status_code, status.HTTP_200_OK)