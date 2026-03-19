# Tarefa 01 - Git e GitHub com Markdown

José Guilherme Silva de Araújo - oguiaraujo - guilherme.araujo.702@ufrn.edu.br

# Descrição
O Linkhub é uma plataforma web voltada para o ambiente acadêmico que conecta estudantes universitários a projetos de extensão, pesquisa e iniciação científica dentro de suas próprias instituições. O sistema permite que criadores publiquem projetos com vagas, estudantes se candidatem e recebam notificações sobre o andamento de suas candidaturas — tudo isolado por instituição, garantindo relevância no feed de cada usuário.

Equipe: Guilherme & Kaio

Organização: [Linkhub](https://github.com/linkhub-org)

# Linguagem de Programação
O projeto utiliza duas linguagens principais:

**Python** no backend, com experiência prévia da equipe em disciplinas de programação e scripts acadêmicos. Python foi escolhido pela legibilidade, pela vasta documentação e por ser a linguagem nativa do Django. Guilherme é o principal responsável pelo backend e já possui familiaridade com a linguagem.

**JavaScript** (com TypeScript implícito via JSX) no frontend, por meio do React + Vite. Kaio é o responsável pelo frontend e tem contato com JavaScript no contexto de desenvolvimento web. A equipe reconhece que o domínio de JavaScript ainda está em consolidação, mas a escolha é justificada pela popularidade do ecossistema React e pela quantidade de material de apoio disponível.

# Framework Utilizado

Django REST Framework (DRF) é o principal framework do projeto, utilizado no backend.
Construído sobre o Django, o DRF é uma biblioteca que facilita a criação de APIs RESTful em Python. Ele fornece componentes prontos como serializers (para converter objetos Python em JSON e vice-versa), viewsets (para agrupar operações CRUD em uma única classe), routers (para gerar URLs automaticamente) e um sistema de autenticação plugável.

No frontend, o framework utilizado é o React com Vite, responsável por toda a interface do usuário. O Vite substitui o Create React App como ferramenta de build, oferecendo tempo de inicialização e hot reload significativamente mais rápidos.

# IDE Utilizada
A equipe utiliza o Visual Studio Code (VS Code), editor gratuito da Microsoft e um dos mais populares para desenvolvimento web e Python.

Ferramentas de debug integradas:
O VS Code possui um depurador nativo que permite adicionar breakpoints diretamente no código Python, inspecionar variáveis, acompanhar a pilha de chamadas e executar o programa passo a passo. Para projetos Django, basta configurar o arquivo launch.json com o comando manage.py runserver e o depurador se conecta automaticamente ao servidor de desenvolvimento.

No frontend, o debug é feito via integração com o DevTools do navegador. A extensão React Developer Tools permite inspecionar a árvore de componentes e o estado em tempo real diretamente no Chrome ou Firefox.

Controle de versão integrado:
O VS Code possui um painel de controle de versão nativo (aba Source Control) que exibe arquivos modificados, permite fazer stage, commit e push sem sair do editor. Também mostra o histórico de alterações linha a linha com o recurso de gutter indicators (marcações coloridas nas laterais do código).

# Tutorial de CRUD na Tecnologia Escolhida
Link: https://github.com/gabrielstork/rest-api-crud
Descrição: Tutorial em português que ensina passo a passo como criar uma REST API com operações CRUD usando Django e Django REST Framework. Cobre desde a criação do projeto Django até a definição de models, serializers, viewsets e routers, exatamente a estrutura utilizada no Linkhub.

# Branches, Pull Requests e GitFlow
**Branches** são ramificações independentes do histórico de commits. Elas permitem que diferentes funcionalidades sejam desenvolvidas em paralelo sem interferir no código principal. Cada branch carrega seu próprio conjunto de commits e pode ser mesclada (merged) de volta à branch principal quando o trabalho estiver concluído.
GitFlow é uma estratégia de organização de branches criada por Vincent Driessen que define papéis claros para cada tipo de branch:

**main** — contém apenas código em produção, estável e testado. Cada merge nessa branch representa uma versão entregável.

**develop** — branch de integração. Todas as features concluídas são mescladas aqui antes de irem para a main.

feature/* — criada a partir da develop para desenvolver uma funcionalidade específica. Exemplo: feature/autenticacao-jwt.

release/* — criada quando a develop está pronta para virar uma versão. Permite ajustes finais sem bloquear novas features.

hotfix/* — criada a partir da main para corrigir bugs críticos em produção com urgência.

Pull Request (PR) — também chamado de Merge Request no GitLab — é o mecanismo pelo qual um desenvolvedor solicita a integração de sua branch em outra. No GitHub, ao abrir um PR é possível revisar as alterações linha a linha, adicionar comentários, solicitar mudanças e aprovar o código antes do merge. 