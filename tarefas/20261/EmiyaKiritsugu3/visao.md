# Documento de Visão - NextGym

## 1. Introdução
O **NextGym** é um sistema moderno de gestão e gamificação para academias de pequeno e médio porte. Seu foco principal não é apenas gerir pagamentos e alunos, mas proporcionar um ambiente onde o aluno engaja mais com seus treinos através de um sistema de experiência (XP), níveis e recompensas, com suporte de geração de treinos baseados em Inteligência Artificial.

## 2. Problema
As academias tradicionais enfrentam uma alta taxa de evasão nos primeiros meses de matrícula, geralmente devido à falta de motivação e acompanhamento personalizado. Os sistemas de gestão existentes focam apenas no administrador (recebimentos, catracas) e oferecem pouca ou nenhuma interação digital direta que retenha o aluno final.

## 3. Descrição dos Usuários
- **Administrador / Recepcionista:** Utiliza o painel web administrativo para matricular alunos, gerenciar planos, validar pagamentos e atualizar cadastros básicos.
- **Instrutor:** Visualiza os alunos ativos, gerencia e cria treinos, além de acompanhar o progresso físico de cada um.
- **Aluno:** Acessa o sistema via web/mobile para visualizar seu treino do dia, registrar séries concluídas, ganhar XP, subir de nível e manter seu "streak" (ofensiva) diário ativo.

## 4. Requisitos Funcionais (RF)
- **RF01:** O sistema deve permitir o CRUD (Criar, Ler, Atualizar, Remover) completo de alunos e funcionários.
- **RF02:** O sistema deve permitir a gestão de planos, matrículas e histórico de pagamentos.
- **RF03:** O sistema deve permitir a criação de bibliotecas de exercícios e prescrição de treinos aos alunos.
- **RF04:** O sistema deve registrar a execução dos treinos no formato de histórico diário (séries concluídas, duração).
- **RF05:** O sistema deve calcular o XP e o nível do aluno ao concluir um treino, aplicando bônus em caso de treinos consecutivos (Streak).
- **RF06:** O sistema deve integrar rotinas de IA para gerar recomendações automatizadas de rotinas com base no perfil físico do aluno.

## 5. Requisitos Não Funcionais (RNF)
- **RNF01:** A aplicação deve ser desenvolvida em **Next.js 15 (App Router)** utilizando Server Components para renderização otimizada.
- **RNF02:** A persistência deve ser feita via PostgreSQL (hospedado no Supabase) gerenciado obrigatoriamente através do **Prisma ORM**.
- **RNF03:** A comunicação frontend-backend deve se dar exclusivamente via **Server Actions** fortemente tipadas. O uso de APIs REST tradicionais no lado cliente está banido.
- **RNF04:** Proteção de rotas e segurança de nível corporativo (*Auth Guards*) devem ser aplicadas na primeira linha de execução de qualquer Server Action.
- **RNF05:** Ferramentas de CI/CD (GitHub Actions) e observabilidade (Sentry) devem estar configuradas em todo o ecossistema.
