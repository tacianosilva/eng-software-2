
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

### Executando o passo 4 com o executável do SonarScanner (sem docker)

Baixe o zip com o sonarscanner-cli acessando a página [Docs SonarSouce](https://docs.sonarsource.com/sonarqube-server/10.8/analyzing-source-code/scanners/sonarscanner). Extraia o arquivo baixado no diretório de sua preferência.

Adicione o diretório `<INSTALL_DIRECTORY>/bin` ao seu path.

Verifique sua instalação abrindo um novo terminal e executando o comando sonar-scanner -h, ou sonar-scanner.bat -h no Windows. Você deve obter uma saída como esta:

```zsh
usage: sonar-scanner [options]
Options:
-D,--define <arg> Define property
-h,--help Display help information
-v,--version Display version information
-X,--debug Produce execution debug output
```

Se precisar de mais informações de depuração, você pode adicionar um dos seguintes elementos à sua linha de comando: -X, --verbose, ou -Dsonar.verbose=true.

Execute o seguinte comando a partir do diretório base do projeto para iniciar a análise e passar o seu token de autenticação:

#### Cenário 1: Se você já adicionou o bin ao seu PATH (Recomendado)

```bash
sonar-scanner \
  -Dsonar.host.url="http://labens.dct.ufrn.br/sonarqube" \
  -Dsonar.token="TOKEN_PROJETO"
```

#### Cenário 2: Se você NÃO adicionou ao PATH (Caminho Direto)

Se você apenas extraiu o .zip e quer rodar direto sem configurar variáveis de ambiente, vá até a raiz da pasta do seu projeto e aponte para o executável dentro da pasta onde o arquivo foi extraído:

```zsh
/caminho/para/sonar-scanner-versao/bin/sonar-scanner \
  -Dsonar.host.url="http://labens.dct.ufrn.br/sonarqube" \
  -Dsonar.token="TOKEN_PROJETO"
```

Alternativamente, em vez de passar o token na sua linha de comando, você pode criar a variável de ambiente SONAR_TOKEN e definir o token como o valor dela antes de iniciar a análise.

Fonte: [sonarscanner#running-from-zip-file](https://docs.sonarsource.com/sonarqube-server/10.8/analyzing-source-code/scanners/sonarscanner#running-from-zip-file)
