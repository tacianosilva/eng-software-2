# Tarefa 02 - Teste de Unidade

**Anulo:** José Salustiano Neto Júnior
**Usuário do GitHub:** josesalustiano
**E-mail:** jose.salustiano.166@ufrn.edu.br
**Link do meu fork do repositório da disciplina:** https://github.com/josesalustiano/from_taciano_engenharia_software_2
**Link do meu fork do repositório do projeto da disciplina:** https://github.com/josesalustiano/oficina

## Questão 9 (Pesquisa sobre Testes)

**a. Resumo sobre Testes de Software focados em Testes de Unidade:**
Testes de software são etapas fundamentais para garantir a qualidade, segurança e o funcionamento correto de um sistema antes de ele ir para produção. O Teste de Unidade (Unit Testing) é a base dessa prática. Ele foca em testar as menores partes possíveis e isoladas do código, como uma única função ou método de uma classe. O objetivo é garantir que cada "pequena engrenagem" do sistema funcione perfeitamente sozinha.

**b. Linguagem e Stack do Projeto:**
O projeto da oficina está sendo desenvolvido utilizando a linguagem **Python**. Como framework web para o backend, estamos utilizando o **Django** em conjunto com o **Django REST Framework (DRF)** para a construção e roteamento da nossa API.

**c. Framework de Testes:**
Para realizar os testes no nosso backend, utilizei a classe `APITestCase` fornecida pelo próprio Django REST Framework. Por baixo dos panos, ela herda as funcionalidades da biblioteca nativa `unittest` do Python e adiciona um cliente de testes (`APIClient`) específico para fazer requisições HTTP na nossa API, além de criar um banco de dados temporário na memória para rodar os testes com segurança.

**d. IDE utilizada e o processo de Debug:**
Eu utilizo o **Visual Studio Code (VS Code)**. O processo de debug (depuração) nele é bastante intuitivo. Para inspecionar o código, basta clicar ao lado da numeração da linha para adicionar um *Breakpoint* (uma bolinha vermelha). Em seguida, inicio o projeto usando a opção "Run and Debug" (ou F5). Quando o código atinge aquela linha, a execução é pausada, permitindo que eu navegue passo a passo e visualize os valores reais das variáveis e dos objetos naquele exato momento, facilitando a identificação de erros lógicos.

**f. Mock Objects:**
*Mock Objects* (Objetos Falsos ou Simulados) são instâncias que imitam o comportamento de objetos ou funções reais de um sistema de forma controlada. Em testes de unidade, eles são usados para isolar o código que está sendo testado. Por exemplo, se uma função precisa fazer uma requisição externa ou exigir um login complexo, nós "mockamos" esse comportamento para que o teste foque apenas na lógica principal, ganhando velocidade e evitando erros externos. No meu projeto, usei o `force_authenticate` para "mockar" um usuário administrador, permitindo testar o CRUD sem precisar gerar tokens reais a cada execução.

---

## Questão 10 (Implementação Prática)

**a. O CRUD Implementado:**
O CRUD testado foi o de **Clientes** (Referente à US02 - Manter Cliente). A implementação gerencia o cadastro dos clientes da oficina e conta com as operações completas: Cadastrar cliente (POST), Consultar cliente específico e Listagem geral (GET), Atualizar dados do cliente (PUT) e Excluir cliente de forma lógica (DELETE), mudando o status de `is_active` para falso.