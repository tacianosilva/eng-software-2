# Dart e Flutter

O SonarQube Community Edition não oferece suporte nativo para Dart e
Flutter. A SonarSource introduziu a análise nativa de Dart exclusivamente
para os planos pagos, a partir da Developer Edition.

Para analisar projetos Dart e Flutter na Community Edition (gratuita), é
necessário utilizar uma solução alternativa mantida pela comunidade.

## Instalação do plugin comunitário

Baixe o arquivo `.jar` mais recente da página de Releases do GitHub do
projeto [insideapp-oss/sonar-flutter](https://github.com/insideapp-oss/sonar-flutter).

Copie o arquivo `.jar` baixado para o diretório de extensões do seu
SonarQube, localizado em `$SONARQUBE_HOME/extensions/plugins/`.

Reinicie o servidor SonarQube.

## Configuração do projeto

Crie um arquivo `sonar-project.properties` na raiz do seu projeto Flutter
com o seguinte conteúdo:

```properties
# Project Details
sonar.projectKey=your_project_unique_key
sonar.projectName=Your Project Name
sonar.projectVersion=1.0.0

# Paths to Scan
sonar.sources=lib,pubspec.yaml
sonar.tests=test
sonar.sourceEncoding=UTF-8

# Exclude generated files (like Freezed or BuiltValue)
sonar.exclusions=lib/**/*.g.dart,lib/**/*.freezed.dart,test/**/*_test.mocks.dart

# Test Coverage Path
sonar.dart.lcov.reportPaths=coverage/lcov.info
```

## Executando a análise

Execute os comandos abaixo no seu terminal ou pipeline de CI:

1. Instale as dependências do Flutter:
```bash
flutter pub get
```

2. Gere o relatório de cobertura de código:
```bash
flutter test --coverage
```

3. Execute o scanner:
```bash
sonar-scanner
```

## Limitações conhecidas

- **Atualizações da linguagem:** o plugin comunitário pode ficar
  desatualizado em relação a novas sintaxes do Dart/Flutter, gerando
  falsos positivos em padrões novos.
- **Alternativa:** se você quiser suporte oficial gerenciado na nuvem
  sem atualizar o plano do servidor local, avalie os planos gratuitos
  do SonarQube Cloud.

Caso enfrente problemas, informe seu sistema operacional (Docker vs.
máquina local), a versão do SonarQube e os logs de erro do scanner
para auxiliar na resolução.

## Referências

- [How to run SonarQube for Flutter code analysis with a self hosted
  SonarQube server](https://medium.com/@gavaskar96/how-to-run-sonarqube-for-flutter-code-analysis-with-a-self-hosted-sonarqube-server-d1a5c00488d1)
  — demonstra o uso do Dart analyzer com SonarScanner e um script Python
  para enviar os resultados ao SonarQube no formato Generic Issue Data.
