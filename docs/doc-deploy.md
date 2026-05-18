# Docker

Nesta página colocaremos alguns exemplos de uso do Docker e Docker Componse, para as turmas do curso de Sistemas de Informação.

Há várias maneiras de realizar o deploy de uma aplicação, a maneira mais simples atualmente é utilizando Docker.
A seguir teremos alguns exemplos de arquivos Dockerfile e do docker-compose para implantação de aplicações em várias linguagens.

## Deploy utilizando Docker e Python

A seguir apresentamos um exemplo de arquivo `Dockerfile` para a criação da imagem da nossa aplicação Python com Django:

```Dockerfile
# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.8-slim-buster

EXPOSE 8001
ENV PORT=8001

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

LABEL description="Run Project"

# Install pip requirements
COPY requirements.txt .
RUN python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt

WORKDIR /code
ADD . /code

# Creates a non-root user and adds permission to access the /app folder
# For more info, please refer to https://aka.ms/vscode-docker-python-configure-containers
RUN useradd appuser && chown -R appuser /code
USER appuser

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
# CMD ["gunicorn", "--bind", "0.0.0.0:8000", "telessaude.wsgi"]
```
A seguir apresentamos uma exemplo de docker-compose.yml para a aplicação Django. Neste `docker-compose`, além da execução do SGBD, também estamos executando o **pgAdmin**, cliente do SGBD, e a aplicação Django. A execução do pgAdmin poderia ser removida, pois é utilizada para administração do banco de dados, e não precisa estar no deploy da aplicação.

```yml
version: '3.8'

services:
  postgres:
    container_name: postgres-server
    image: postgres:latest
    volumes:
      - $HOME_DB/postgres/postgresql:/var/lib/postgresql
      - $HOME_DB/postgres/postgresql_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=postgres_db
      - POSTGRES_USER=postgres_user
      - POSTGRES_PASSWORD=password
    restart: always
    ports:
      - 5432:5432

  pgadmin:
    container_name: pgadmin-server
    image: dpage/pgadmin4:latest
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: pgadmin
    ports:
      - 5050:80
    depends_on:
      - postgres

  web:
    container_name: app-web
    image: nome-app
    build:
      context: .
      dockerfile: ./Dockerfile

    command: >
      sh -c  "python manage.py collectstatic --noinput
              python manage.py migrate --noinput
              python manage.py initadmin
              python manage.py initgroups
              python manage.py runserver 0.0.0.0:8001"
    volumes:
      - .:/code
    ports:
      - 8001:8001

networks:
  default:
    external: true
    name: labens-network
```
## 🛑 Correção de Erro 403 Forbidden nos Arquivos Estáticos/Mídia (Apache + Django + SELinux)

### 📋 Descrição do Problema
Ao tentar acessar arquivos estáticos (`/static/`) ou arquivos de upload (`/media/`) de um sistema Django via navegador, o servidor retornava o erro **403 Forbidden**. 

Nos logs de erro do Apache (`/var/log/httpd/error_log`), a falha era registrada com o seguinte código:
> `AH00035: access to /... denied because search permissions are missing on a component of the path`

**Causa Raiz:** O sistema operacional (CentOS/RHEL/Rocky Linux) possui o **SELinux** ativo. Mesmo que as permissões tradicionais do Linux (`chmod 755` ou `chown`) estivessem corretas, o SELinux bloqueava o Apache de acessar qualquer diretório fora do padrão padrão do sistema (`/var/www/`), impedindo a leitura da pasta `/data/projetos/`.

---

### 🛠️ Solução Aplicada (Passo a Passo)

Abaixo estão os comandos necessários para resolver o problema de forma definitiva e automatizada para **todos os projetos atuais e futuros** hospedados sob o diretório pai `/data/projetos/`.

#### Passo 1: Garantir que o Apache pertence ao grupo dos projetos
Como as pastas pertencem ao grupo `webapps`, o usuário do Apache precisa fazer parte dele para ter acesso de leitura física.
```bash
# Adiciona o usuário do apache ao grupo webapps
sudo usermod -aG webapps apache

# Reinicia o serviço do Apache para aplicar a mudança de grupo
sudo systemctl restart httpd
```

#### Passo 2: Configurar Regra Permanente do SELinux para arquivos Estáticos (`static`)
Esta regra instrui o SELinux a permitir que o Apache **leia** qualquer pasta chamada `static` dentro de `/data/projetos/`, não importa a profundidade do projeto.
```bash
# Registra a regra de leitura (httpd_sys_content_t) no banco de dados do SELinux
sudo semanage fcontext -a -t httpd_sys_content_t "/data/projetos(/.*)?/static(/.*)?"
```

#### Passo 3: Configurar Regra Permanente do SELinux para arquivos de Mídia/Uploads (`media`)
Diferente dos estáticos, a pasta de mídia precisa permitir que o backend do Django salve arquivos enviados por usuários. Portanto, configuramos a permissão de **leitura e escrita**.
```bash
# Registra a regra de leitura e escrita (httpd_sys_rw_content_t) no banco de dados do SELinux
sudo semanage fcontext -a -t httpd_sys_rw_content_t "/data/projetos(/.*)?/media(/.*)?"
```

#### Passo 4: Aplicar as novas regras ao sistema de arquivos (Retroativo)
O comando abaixo força o SELinux a varrer o diretório `/data/projetos/` e atualizar os rótulos de segurança de todas as pastas existentes com base nas regras criadas nos passos 2 e 3.
```bash
# Aplica e corrige as permissões de forma recursiva e exibe o progresso na tela
sudo restorecon -R -v /data/projetos/
```

---

### 🔍 Como Validar se Funcionou?

Para garantir que o SELinux aplicou as marcações de segurança corretas em um arquivo específico, execute:

```bash
# Verifica o rótulo de segurança de um arquivo estático (Deve exibir: httpd_sys_content_t)
ls -Z /data/projetos/lais/casulo-api/casulo/run/static/admin/css/responsive.css

# Verifica o rótulo de segurança da pasta de mídia (Deve exibir: httpd_sys_rw_content_t)
ls -Zd /data/projetos/lais/casulo-api/casulo/run/media/
```

### 💡 Notas de Manutenção
* **Novos Projetos:** Ao criar um novo projeto dentro de `/data/projetos/`, as novas pastas `static` e `media` herdarão os contextos automaticamente se criadas corretamente. Caso apresentem erro 403 no futuro, basta rodar o comando de atualização: `sudo restorecon -R -v /data/projetos/`.
* **Segurança Baseada no Menor Privilégio:** Esta abordagem mantém o código-fonte `.py` e arquivos confidenciais `.env` do Django 100% protegidos e invisíveis para o Apache, expondo estritamente apenas o que precisa ser público.
