
# Configuração do SonarQube

## Passo 1: Criar o arquivo sonar-project.properties

Crie um arquivo sonar-project.properties na raiz do projeto. Com o seguinte conteúdo mínimo:
```properties
sonar.projectKey=xuxakey
sonar.projectName=Meu projeto da Xuxa
sonar.projectVersion=0.1.0

# Path is relative to the sonar-project.properties file. Replace "\" by "/" on Windows.

sonar.sources=.
sonar.sources.inclusions=**/**.py
sonar.exclusions=**/tests/**, docs/**, sigarte/**, **/static/**, **/templates/**, **/migrations/**, **/__pycache__/**, **/admin.py, **/__init__.*, manage.py

# Language
sonar.language=py

sonar.scm.provider=git

# Encoding of the source code. Default is default system encoding
sonar.sourceEncoding=UTF-8

# Coverage / Unit Tests
sonar.tests=.
sonar.test.inclusions=**/test_**.py, **/tests_**.py, **/tests.py

sonar.python.coverage.reportPaths=coverage.xml
sonar.python.coveragePlugin=cobertura
```

A parte final do arquivo `sonar-project.properties` traz informações de onde encontrar o arquivo `xml` do relatório de cobertura calculado com a ferramenta `covarage` do Python.

```bash
coverage run manage.py test
coverage xml
```

## Passo 2: Acessar o SonarQube com sua conta GitHub

Antes de acessar o SonarQube, certifique-se de que você é membro da organização
[EngSoft-BSI-Hub](https://github.com/EngSoft-BSI-Hub).

Acesse https://labens.dct.ufrn.br/sonarqube/ e clique em **Log in with GitHub**.
Autorize o acesso com sua conta do GitHub.

Após o primeiro login, você será adicionado ao grupo `es2-users`, que concede
permissão para executar a análise com o SonarScanner.

## Passo 3: Criar token de acesso do projeto

Os líderes técnicos devem criar o Token de acesso no seu perfil no sonar.
O TOKEN_PROJETO é criado na sua conta em **My Account --> Security**.

## Passo 4: Executar a análise

A PASTA_PROJETO é o caminho do diretório do projeto onde o arquivo
sonar-project.properties está localizado.

### Opção 1: Utilizando Docker

```bash
docker run --rm -e SONAR_HOST_URL="http://labens.dct.ufrn.br/sonarqube" \
           -v "PASTA_PROJETO:/usr/src" sonarsource/sonar-scanner-cli -Dsonar.login=TOKEN_PROJETO
```

### Opção 2: Utilizando o executável do SonarScanner (sem Docker)

Baixe o zip com o sonar-scanner na página
[Docs SonarSource](https://docs.sonarsource.com/sonarqube-server/10.8/analyzing-source-code/scanners/sonarscanner).
Extraia o arquivo no diretório de sua preferência e adicione
`<INSTALL_DIR>/bin` ao seu PATH.

Verifique a instalação:

```
sonar-scanner -h
```

Execute a análise na raiz do projeto:

**Com o bin no PATH (recomendado):**
```bash
sonar-scanner \
  -Dsonar.host.url="http://labens.dct.ufrn.br/sonarqube" \
  -Dsonar.token="TOKEN_PROJETO"
```

**Sem adicionar ao PATH:**
```bash
/caminho/para/sonar-scanner-X.X/bin/sonar-scanner \
  -Dsonar.host.url="http://labens.dct.ufrn.br/sonarqube" \
  -Dsonar.token="TOKEN_PROJETO"
```

Alternativamente, defina a variável de ambiente `SONAR_TOKEN` com o token
antes de executar.
