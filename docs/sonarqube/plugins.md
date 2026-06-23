# Plugins

## O que é um plugin do SonarQube?

Plugins são extensões que adicionam funcionalidades ao SonarQube, como
suporte a novas linguagens, regras de qualidade, métricas, ou integrações
com ferramentas externas. A Community Edition permite a instalação manual
de plugins comunitários (free e open source), enquanto funcionalidades
exclusivas das edições pagas não estão disponíveis.

## Onde encontrar plugins

- **Marketplace oficial** — Disponível em *Administration > Marketplace*
  no próprio servidor SonarQube.
- **Plugin version matrix** —
  [downloads.sonarsource.com](https://downloads.sonarsource.com/sonarqube/update/plugins/compatibility-matrix.html)
  — Tabela de compatibilidade entre versões do SonarQube e plugins.
- **sonarplugins.com** — Índice comunitário não oficial com plugins
  free e comerciais.
- **GitHub** — Repositórios como `SonarOpenCommunity`, `mc1arke`,
  `dependency-check`, entre outros.

## Versão do servidor no LABENS

**Atual:** SonarQube Community Build v25.12.0.117093

**Planejado:** SonarQube Community Build v26.6.0.123539 (Junho/2026)
— [Download](https://www.sonarsource.com/products/sonarqube/downloads/)

A atualização segue o ciclo mensal de releases do Community Build.
Antes de atualizar, consulte as [notas de release](https://docs.sonarsource.com/sonarqube-community-build/server-update-and-maintenance/release-notes.html)
e o [guia de upgrade](https://docs.sonarsource.com/sonarqube-community-build/server-update-and-maintenance/upgrade.html).

## Plugins instalados no LABENS

- **[insideapp-oss/sonar-flutter](dart-flutter.md)** — Análise de Dart
  e Flutter (Community Edition não tem suporte nativo).

## Plugins open source recomendados

Abaixo, plugins interessantes para o contexto do LABENS, onde as
linguagens mais utilizadas são Python (Django), JavaScript/TypeScript
(VueJS, ReactJS), Java (Spring), Kotlin (Spring) e Dart/Flutter.

| Plugin | Utilidade | Licença | Atualização |
|---|---|---|---|
| **Dependency-Check** | Análise de vulnerabilidades em dependências (OWASP) | Apache-2.0 | Ativo |
| **Community Branch Plugin** | Análise de branches e PR decoration na Community Edition | LGPL-3.0 | Ativo |
| **ecoCode** | Regras de eco-design/sustentabilidade para Python, Java, JS, C#, PHP | LGPL-3.0 | Ativo |
| **Hadolint Plugin** | Análise e boas práticas de Dockerfile | — | Ativo |
| **ShellCheck Analyzer** | Análise de scripts shell | LGPL-3.0 | Ativo |
| **YAML Analyzer** | Análise de arquivos YAML | — | Ativo |
| **ErrorAway** | Regras extras do Error Prone para Java | — | Ativo |
| **sonar-text-plugin** | Regras customizadas via regex em arquivos de texto | Apache-2.0 | Ativo |

### Detalhamento

#### Dependency-Check
- **Repositório:** [dependency-check/dependency-check-sonar-plugin](https://github.com/dependency-check/dependency-check-sonar-plugin)
- **Descrição:** Integra relatórios do OWASP Dependency-Check no
  SonarQube, identificando dependências com vulnerabilidades conhecidas.
  Útil para projetos Python, Java, JavaScript e Kotlin.

#### Community Branch Plugin
- **Repositório:** [mc1arke/sonarqube-community-branch-plugin](https://github.com/mc1arke/sonarqube-community-branch-plugin)
- **Descrição:** Adiciona suporte a análise de branches e decoração de
  pull requests na Community Edition. A versão do plugin deve coincidir
  com a versão do SonarQube (ex.: plugin `25.4.0` para SonarQube 25.4.x).
  Requer configuração adicional no `sonar.properties`.

#### ecoCode
- **Repositório:** [cnumr/ecoCode](https://github.com/cnumr/ecoCode)
- **Descrição:** Conjunto de regras para identificar práticas que
  impactam o consumo de energia e recursos, promovendo um código mais
  sustentável. Disponível para Python, Java, JavaScript, C# e PHP.

#### Hadolint Plugin
- **Repositório:** [hugo43/sonar-hadolint](https://github.com/hugo43/sonar-hadolint)
- **Descrição:** Analisa arquivos `Dockerfile` com base no Hadolint,
  apontando más práticas na construção de imagens Docker.

#### ShellCheck Analyzer
- **Repositório:** [sonar-shellcheck/sonar-shellcheck](https://github.com/sonarsource/sonar-shellcheck)
- **Descrição:** Análise de scripts shell com a ferramenta ShellCheck.

#### YAML Analyzer
- **Repositório:** [vitalibo/sonar-yaml](https://github.com/vitalibo/sonar-yaml)
- **Descrição:** Análise de arquivos YAML (configurações, CI/CD, etc.).

#### ErrorAway
- **Repositório:** [ErrorAway](https://github.com/ErrorAway/ErrorAway)
- **Descrição:** Integra o Error Prone (Google) ao SonarQube, adicionando
  centenas de regras de boas práticas para Java.

#### sonar-text-plugin
- **Repositório:** [gjd6640/sonar-text-plugin](https://github.com/gjd6640/sonar-text-plugin)
- **Descrição:** Permite criar regras customizadas via expressões
  regulares em arquivos de texto, útil para validar padrões específicos
  do projeto.

## Sobre o sonar-scm-stats

O plugin [SonarQubeCommunity/sonar-scm-stats](https://github.com/SonarQubeCommunity/sonar-scm-stats)
computava métricas como commits por autor, hora, dia da semana e mês.

**Situação:** Última versão (0.3.1) lançada em **2013**, incompatível com
versões modernas do SonarQube (compatível apenas até a versão 5.1.2). O
plugin está **deprecated** e não há substituto direto na forma de plugin.

**Alternativas:**

- O SonarQube já captura dados SCM (autor, data, blame) nativamente por
  meio do provedor SCM configurado no projeto (`sonar.scm.provider`),
  exibindo informações como cobertura por linha e alterações recentes.
- Para estatísticas avançadas de commits (gráficos por autor, hora do dia,
  dia da semana, etc.), recomenda-se o uso de ferramentas externas:
  - Comandos `git log` com scripts próprios
  - [`git-contributor-stats`](https://www.npmjs.com/package/git-contributor-stats)
    (CLI Node.js)
  - [`Local Git Insights`](https://github.com/AhmedE404/local-git-insights)
    (CLI Node.js, zero dependências)
