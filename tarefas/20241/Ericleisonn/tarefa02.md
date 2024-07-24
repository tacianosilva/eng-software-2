# Tarefa 02 - Teste de Unidade

**Username:** [Ericleisonn](https://github.com/Ericleisonn) <p>
**E-mail:** ericleisonrn@gmail.com <p>
**E-mail institucional:** ericleison.camilo.124@ufrn.edu.br <p>
**Repositório do projeto**: [SIGApoio](https://github.com/tgo-mas/SIGApoio)

### Testes de Software 
<style>body {text-align: justify}</style>
* Testes de unidade são uma parte essencial dos testes de software, focando em verificar a funcionalidade de componentes individuais, como funções, métodos ou classes, de forma isolada. Esses testes são caracterizados pela sua granularidade e isolamento, permitindo que cada parte do código seja testada de maneira independente sem interferências externas. <p>
* Automatizados e rápidos, os testes de unidade são cruciais para práticas de desenvolvimento ágil e integração contínua, facilitando a detecção de defeitos e garantindo que cada unidade do código funcione conforme esperado. Os principais benefícios incluem a rápida identificação e correção de bugs, a documentação do comportamento do código e a facilitação de mudanças e refatorações com maior segurança. Assim, os testes de unidade contribuem significativamente para a robustez e a qualidade geral do software.

### Python e Django     
* Django é um framework web de alto nível e open source, escrito em Python, que facilita a construção rápida de aplicações web seguras e escaláveis. Django promove a reutilização de código e uma estrutura limpa e pragmática. O framework fornece uma série de ferramentas e recursos prontos para uso, como um sistema de mapeamento objeto-relacional (ORM), administração automática, autenticação de usuários, formulários e proteção contra vulnerabilidades comuns de segurança.<p>
*  Python, a linguagem de programação utilizada por Django, é conhecida por sua sintaxe clara e legível, o que torna o desenvolvimento com Django acessível tanto para iniciantes quanto para desenvolvedores experientes. A combinação de Django e Python resulta em um ambiente de desenvolvimento produtivo, com código legível e manutenção simplificada, ideal para projetos de todos os tamanhos.

### Pytest
* Pytest é um framework de teste robusto, fácil de usar e extensível para Python. Ele permite escrever testes simples, bem como complexos, de forma intuitiva e eficiente. A simplicidade de pytest vem do fato de que ele permite escrever testes de uma maneira clara e concisa, utilizando funções Python padrão. Além disso, pytest suporta fixtures, que ajudam a gerenciar dependências e configurar o ambiente de teste de forma modular. Pytest é amplamente utilizado pela comunidade Python devido à sua facilidade de uso, flexibilidade e capacidade de lidar com uma ampla gama de necessidades de teste, desde os mais simples até os mais complexos cenários.<p>
[Página Oficial do Pytest](https://docs.pytest.org/en/stable/)<p>
[Introdução ao Pytest](https://medium.com/assertqualityassurance/tutorial-de-pytest-para-iniciantes-cbdd81c6d761)<p>


### IDE Utilizada (VSCode)
* Visual Studio Code (VSCode) é uma das IDEs mais populares e versáteis para desenvolvimento de software. Criada pela Microsoft, é conhecida por sua velocidade, extensibilidade e suporte para uma ampla gama de linguagens de programação.
* O depurador integrado do VSCode é uma ferramenta poderosa que suporta várias linguagens de programação. Para Python, por exemplo, a extensão Python da Microsoft fornece um suporte robusto para debugging.

### Tutorial Django CRUD - DevMedia
* Este tutorial abrange os conceitos básicos para criar uma aplicação CRUD usando Django. Ele guia você pela configuração dos modelos, views e templates, além de incluir instruções sobre como criar, ler, atualizar e deletar registros. Também aborda a execução de migrações, o uso da interface de administração do Django e a criação de um superusuário.<p>
[Link Para tutorial](https://www.devmedia.com.br/curso/python-e-django-primeira-aplicacao-com-acesso-a-dados/1994)

### Mock Objects
* Mock Objects, ou Objetos Mock, são usados em testes de unidade para simular comportamentos e interações de dependências externas de um sistema. Eles permitem que os desenvolvedores isolem o código em teste, verificando se ele interage corretamente com as dependências simuladas sem depender de implementações reais, como bases de dados ou serviços externos. Ao definir expectativas sobre como esses mocks devem ser utilizados e quais valores devem ser retornados, é possível testar cenários específicos e comportamentos sem a necessidade de componentes reais. Isso facilita a detecção de erros e a garantia de que o código funciona conforme esperado, mesmo em condições controladas.
User Story: Manter Usuário

# Sobre o SIGApoio

Como administrador do sistema,
Quero gerenciar os usuários da plataforma,
Para que eu possa garantir que as informações dos usuários estejam sempre atualizadas e que a plataforma funcione corretamente.
Operações:

1. * **Inserir Usuário**<p>
    **Descrição:** Como administrador, quero adicionar um novo usuário ao sistema.<p>
   **Ação:** Preencher um formulário com informações como nome, email, senha e papel (administrador, usuário comum, etc.) e salvar essas informações no banco de dados.<p>
    **Critérios de Aceitação:** O sistema deve validar os dados inseridos (e.g., formato de email válido, senha com requisitos mínimos) e criar uma nova entrada no banco de dados. O usuário deve ser notificado com uma mensagem de sucesso ou erro.

2. * **Atualizar Usuário**<p>
**Descrição:** Como administrador, quero atualizar as informações de um usuário existente.<p>
    **Ação:** Selecionar um usuário existente e modificar informações como nome, email, papel ou outras configurações relevantes e salvar as alterações.<p>
    **Critérios de Aceitação:** O sistema deve validar as alterações e atualizar as informações no banco de dados. O usuário deve ser notificado com uma mensagem de sucesso ou erro. As mudanças devem refletir imediatamente no sistema.

3. * **Deletar Usuário**<p>
    **Descrição:** Como administrador, quero remover um usuário do sistema quando ele não for mais necessário.<p>
    **Ação:** Selecionar um usuário e confirmar a exclusão. O usuário será removido do banco de dados.<p>
    **Critérios de Aceitação:** O sistema deve confirmar a exclusão com o administrador e remover todas as informações relacionadas do banco de dados. O usuário deve ser notificado com uma mensagem de sucesso ou erro. Deve haver uma confirmação para evitar exclusões acidentais.

4. * **Consultar Usuário**
    **Descrição:** Como administrador, quero buscar e visualizar informações sobre usuários existentes.<p>
    **Ação:** Usar uma interface de pesquisa para localizar usuários pelo nome, email ou outros critérios e visualizar detalhes relevantes.<p>
    **Critérios de Aceitação:** O sistema deve permitir a busca eficiente e a visualização das informações dos usuários. Deve exibir os dados de forma clara e precisa. A pesquisa deve ser capaz de lidar com diferentes filtros e critérios.

5. * **Listar Todos os Usuários**<p>
   **Descrição:** Como administrador, quero visualizar uma lista completa de todos os usuários registrados.<p>
    **Ação:** Acessar uma página ou interface que exibe uma lista paginada de todos os usuários com opções de filtragem e ordenação.<p>
    **Critérios de Aceitação:** A lista deve exibir informações básicas de todos os usuários (como nome e email) e permitir a navegação entre páginas. Deve ter opções para filtrar e ordenar os resultados conforme necessário.


## Testes de Unidade do projeto
* Implementar os testes de unidade para cada operação do CRUD foi uma experiência fluida. O uso de Mock Objects facilitou a simulação das interações com o repositório de dados, permitindo que os testes se concentrassem em verificar a lógica de chamada dos métodos e o tratamento de dados sem a necessidade de uma implementação real do repositório. Isso garantiu que cada operação fosse testada isoladamente e ajudou a manter o código modular e testável.

### Exemplo de teste

    def test_cad_local_post(self):
        res = self.client.post(reverse('cad_local'), data={
            'nome':'B3',
            'bloco':'B',
            'capacidade':'45', 
            'tipo':'Sala'})
        self.assertEqual(res.status_code, status.HTTP_200_OK)


## Testes utilizados (integração)
* Os testes utilizados foram de integração, o exemplo que foi dado acima efetuam a criação de novos recursos, o que implica a interação com o backend e o banco de dados. Isso confirma que a API está recebendo e processando os dados corretamente.<p> 
* Os testes estão verificando o funcionamento das rotas e a interação da API com o cliente e o backend, enquanto testes unitários se concentrariam em testar funções e métodos isolados sem a necessidade de interação com o sistema completo.

## Diferença Entre Teste Unitário e Teste de Integração

* **Teste Unitário:** Foca em testar partes específicas e isoladas do código, como funções ou métodos. O objetivo é garantir que cada unidade de código funcione corretamente de forma independente. Os testes unitários geralmente usam mocks para simular dependências e isolar a unidade em teste.

* **Teste de Integração:** Foca em testar a interação entre múltiplas unidades ou componentes do sistema. O objetivo é garantir que diferentes partes do sistema trabalhem juntas corretamente. Esses testes geralmente envolvem a comunicação com o banco de dados, serviços externos e a interação completa de componentes.