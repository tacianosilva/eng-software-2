
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

## Passo 2: Criar conta no servidor do sonar no LABENS

Criar conta no nosso servidor sonar: http://labens.dct.ufrn.br/sonarqube.

## Passo 3: Criar token de acesso do projeto

Os líderes técnicos devem criar o Token de acesso no seu perfil no sonar.
O TOKEN_PROJETO é criado na sua conta em **My Account --> Security**.

## Passo 4: 

O TOKEN_PROJETO é criado na sua conta em *My Account --> Security".
A PASTA_PROJETO é o caminho do diretório do projeto onde o arquivo sonar-project.properties fica.

```bash
docker run --rm -e SONAR_HOST_URL="http://labens.dct.ufrn.br/sonarqube" \
           -v "PASTA_PROJETO:/usr/src" sonarsource/sonar-scanner-cli -Dsonar.login=TOKEN_PROJETO
```
