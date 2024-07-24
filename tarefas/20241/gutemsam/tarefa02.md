# Tarefa 02 - Teste de Unidade
# Projeto: TechCell-Pro

## informações pessoais
- Nome: Samuel Gutemberg Pereira
- Usuário do Github: [Gutemsam](https://github.com/gutemsam)
- Email: <thesam0606@gmail.com>
- 
  **Repositório:** [Link do Repositório] (https://github.com/flaviogui/TechCell-Pro)
## Testes de Software com Foco em Testes de Unidade

### Testes de Unidade

Testes de Unidade são uma prática essencial no desenvolvimento de software que envolve a verificação de partes isoladas do código, chamadas unidades, para garantir que funcionem corretamente. O objetivo principal é validar que cada unidade de código funcione conforme o esperado. Isso ajuda a identificar e corrigir erros precocemente no ciclo de desenvolvimento, facilitando a manutenção e evolução do software. Testes de unidade são geralmente automatizados e escritos pelos próprios desenvolvedores, proporcionando um feedback rápido sobre a integridade do código.

### Linguagem de Programação e Stack para o Projeto

Para o desenvolvimento do projeto da disciplina, utilizaremos a linguagem de programação **Python**. A stack escolhida inclui:

- **Framework Web**: Django
- **Banco de Dados**: SQLite (por padrão com Django, mas pode ser substituído por PostgreSQL, MySQL, etc.)
- **Servidor de Desenvolvimento**: Django Development Server
- **Ferramentas de Teste**: pytest, unittest

### Framework de Testes de Unidade: pytest

#### Resumo sobre pytest

O pytest é um framework de testes robusto e flexível para Python. Ele facilita a escrita de testes de unidade, testes funcionais e até mesmo testes de integração. Algumas características notáveis do pytest incluem a capacidade de detectar automaticamente testes, suporte a fixtures reutilizáveis, plugins para estender funcionalidades e relatórios detalhados de falhas. O pytest é amplamente adotado na comunidade Python devido à sua simplicidade e poder.

#### Links

- [pytest Documentation](https://docs.pytest.org/en/latest/)
- [pytest GitHub](https://github.com/pytest-dev/pytest)

### IDE Utilizada: Visual Studio Code

#### Resumo sobre Visual Studio Code

O Visual Studio Code (VS Code) é uma IDE leve, mas poderosa, para desenvolvimento em várias linguagens de programação. Ele oferece uma ampla gama de extensões que podem ser instaladas para suportar diversas stacks de desenvolvimento. Entre suas funcionalidades, destaca-se o suporte robusto para debugging, integração com sistemas de controle de versão como Git, e a capacidade de personalização do ambiente de desenvolvimento.

#### Ferramentas de Debug Integradas

O VS Code possui um depurador integrado que suporta breakpoints, watch expressions, stepping through code, e inspeção de variáveis. Além disso, ele permite depurar tanto aplicações locais quanto remotas e oferece extensões específicas para depuração de várias linguagens, incluindo Python.

### Tutorial de CRUD com Testes de Software

#### Tutorial: Building a CRUD Application with Django and Testing with pytest

Este tutorial oferece um guia passo a passo para construir uma aplicação CRUD (Create, Read, Update, Delete) usando Django, e inclui a criação de testes de software utilizando pytest. O tutorial cobre desde a configuração inicial do ambiente de desenvolvimento, criação de modelos e views no Django, até a escrita e execução de testes de unidade para validar a funcionalidade do CRUD.

#### Link e Descrição

- **Link**: [Django CRUD with pytest Tutorial](https://realpython.com/testing-in-django-part-1-best-practices-and-examples/)
- **Descrição**: Este tutorial do Real Python aborda as melhores práticas para testes em Django, incluindo a configuração do pytest, criação de testes de unidade, e exemplos práticos de como testar funcionalidades comuns em aplicações web.

## Mock Objects em Testes de Unidade

Mock Objects são objetos simulados que imitam o comportamento de objetos reais de maneira controlada. Eles são usados em testes de unidade para isolar a unidade de código sendo testada e garantir que os testes não dependam de componentes externos ou de partes do sistema que ainda não foram implementadas. Mocks podem ser configurados para retornar valores específicos quando métodos são chamados, e podem verificar se métodos foram chamados com os parâmetros corretos. Isso permite testar o comportamento do código de forma isolada e precisa.

### Resumo sobre Mock Objects

Os Mock Objects são fundamentais para a criação de testes de unidade eficazes, permitindo a simulação de interações complexas e o controle sobre o comportamento de dependências externas. Usando mocks, desenvolvedores podem escrever testes que se concentram exclusivamente na lógica da unidade de código em teste, sem se preocupar com as interações com outras partes do sistema.

### Links

- [Mocking in Python with unittest.mock](https://docs.python.org/3/library/unittest.mock.html)
- [Understanding Mock Objects](https://martinfowler.com/articles/mocksArentStubs.html)

#### CRUD para Gestão de Aparelhos no Projeto `aparelhoApp`

### User Story: Gestão de Aparelhos

## Contexto

Para organizar e gerenciar a manutenção e utilização de aparelhos eletrônicos em uma instituição, foi implementado um sistema CRUD (Create, Read, Update, Delete) utilizando Django, Python e o framework de testes pytest. O sistema permite que os usuários insiram, atualizem, deletem e consultem informações sobre os aparelhos.

## Funcionalidades

1. **Inserir Aparelho**
   - **Descrição**: Como administrador, quero adicionar novos aparelhos ao sistema para que eles sejam monitorados e gerenciados corretamente.
   - **Operação**:
     - Acessar a página de cadastro de aparelhos (`/aparelho/create`).
     - Preencher o formulário com informações do aparelho (nome, marca, modelo, número de série, localização, data de aquisição).
     - Submeter o formulário para salvar o novo aparelho no banco de dados.

2. **Atualizar Aparelho**
   - **Descrição**: Como administrador, quero atualizar as informações dos aparelhos cadastrados para manter os dados atualizados e corrigir quaisquer informações incorretas.
   - **Operação**:
     - Acessar a página de edição de aparelhos (`/aparelho/update/<id>`).
     - Modificar as informações necessárias no formulário.
     - Submeter o formulário para salvar as alterações no banco de dados.

3. **Deletar Aparelho**
   - **Descrição**: Como administrador, quero remover aparelhos do sistema que não estão mais em uso ou que foram descartados.
   - **Operação**:
     - Acessar a página de listagem de aparelhos (`/aparelho/`).
     - Selecionar o aparelho a ser deletado.
     - Confirmar a exclusão para remover o aparelho do banco de dados.

4. **Consultar Aparelho**
   - **Descrição**: Como usuário, quero visualizar a lista de todos os aparelhos cadastrados para monitorar e acessar informações detalhadas sobre cada aparelho.
   - **Operação**:
     - Acessar a página de listagem de aparelhos (`/aparelho/`).
     - Visualizar a lista de aparelhos com suas informações básicas.
     - Clicar em um aparelho específico para ver detalhes adicionais.


#### Implementação de Testes de Unidade para Operações CRUD

### Testes de Unidade Implementados

Foram implementados testes de unidade para verificar as operações CRUD (Criar, Ler, Atualizar e Deletar) no modelo `Aparelho`. Os testes são divididos nas seguintes categorias:

### 1. **Criar (Create)**

O teste `test_aparelho_creation` verifica se um novo objeto `Aparelho` é criado corretamente com os atributos esperados. Este teste assegura que a criação do modelo funciona conforme o esperado, garantindo que os dados sejam armazenados corretamente no banco de dados.

### 2. **Ler (Read)**

Para garantir a leitura correta dos dados, o teste `test_aparelho_creation` também valida a recuperação dos atributos do objeto `Aparelho` criado. Este teste assegura que a leitura dos dados é feita corretamente a partir do banco de dados.

### 3. **Atualizar (Update)**

Os testes de atualização não foram explicitamente cobertos no código fornecido. Normalmente, um teste de atualização verificaria se um objeto `Aparelho` pode ser modificado corretamente e se as mudanças são refletidas no banco de dados.

### 4. **Deletar (Delete)**

Os testes de deletar também não foram incluídos no código fornecido. Um teste típico de exclusão verificaria se um objeto `Aparelho` pode ser removido corretamente do banco de dados e se a exclusão é refletida nas operações subsequentes.

## Experiência de Implementação dos Testes

Implementar os testes de unidade foi uma experiência muito complicada no começo mas com seguidas tentativas e erros, acertos começaram a aparecer e consequentemente foi se tornando menos complicado. 

A implementação dos testes de unidade para o modelo `Aparelho` garantiu que:
- **Os dados são armazenados e recuperados corretamente**: O teste de criação valida se os atributos do modelo são armazenados e recuperados corretamente.
- **Os campos únicos são realmente únicos**: O teste de campos únicos assegura que não há duplicação de dados críticos, como `imei` e `numero_serie`.
- **A representação em string está correta**: O teste de representação em string garante que o modelo é apresentado de forma adequada.
- **As opções de `Meta` estão configuradas corretamente**: O teste de opções de `Meta` valida configurações importantes como `verbose_name` e `ordering`.

Os testes de integração para as URLs e views foram implementados para garantir que as rotas estejam corretamente associadas às views apropriadas, mas não cobrem a funcionalidade interna dos métodos e lógica de negócios.

## Link para o Arquivo de Teste
[Link do arquivo no Repositório](https://github.com/flaviogui/TechCell-Pro/blob/main/projeto/aparelhoApp/tests.py)




