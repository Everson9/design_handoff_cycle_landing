> Texto integral que estava no AGENTS.md ate 2026-11-05.

- **FRONT — vale pra qualquer porta de entrada.** Se a conversa envolve tela, componente,
  layout, estilo, cor, tipografia, animação, ícone, responsivo ou "tá feio/genérico" —
  **em qualquer forma**: reparo de bug visual, ajuste, restyle, reimplementação, refatoração,
  feature nova, tela nova, componente novo, projeto novo, ou o dono só comentando o visual —
  a sessão **carrega o contexto de front ANTES de escrever a primeira linha**, sem o dono pedir:
  1. **`.specs/DESIGN.md`** — paleta, escala de texto, escala de movimento, estado de componente,
     tela vazia/erro. Valor visual que não está lá **não se inventa no arquivo de tela**: ou entra
     no `DESIGN.md` primeiro (com o motivo), ou usa o que já existe.
     **Não existe `DESIGN.md` e o projeto tem front? Escrever um ANTES de mexer** — extraindo do
     código o que já está decidido e perguntando ao dono o que falta, com a skill `plano-sob-fogo`.
  2. **`.specs/codebase/CONVENTIONS.md`** — o que já está certo neste projeto e não se "conserta",
     e o que é proibido aqui.
  3. **Skill certa pro caso:** `frontend-design` (direção visual de tela ou fluxo novo) ·
     `svg-draw` (ícone, ilustração, mascote, diagrama, dar vida a elemento) · `svg-animations`
     (consulta de sintaxe SVG/SMIL) · `animate` (motion de UI: entra/sai, hover, drawer, toast, transição — decide SE anima antes de escrever) · `improve-animations` (auditar o movimento de uma tela/app pronto e sair com plano) · `review-animations` (revisar diff de motion, só sob pedido) ·
     `web-perf` (tela lenta, Core Web Vitals) ·
     `agent-browser` / `agent-browser-dogfood` (conferir a tela depois de pronta, nunca antes).
  **Piso de legibilidade — vale em TODO projeto, o modelo não fura sem perguntar.**
  A estética que a IA produz por padrão é fina, pequena, com tracking negativo largo e
  cinza sobre cinza: fica bonita em print e é ruim de ler no celular. Aqui não entra.
  - **Peso mínimo 600.** Peso 300 e 400 são proibidos em título e em botão.
  - **Corpo nunca abaixo de 15px**; texto de apoio nunca abaixo de 11px.
  - **`letterSpacing` negativo no máximo -0.5px**, e só acima de 24px.
  - **Contraste do texto principal ≥ 4.5:1.** Cinza sobre cinza é reprovado.
  - **`line-height` 1.4 no corpo.**
  Quer furar o piso num caso específico? **Pergunta antes**, com o motivo — não fura calado.
  **Piso de movimento — vale em TODO projeto** (tabelas do Emil Kowalski, skills `animate`/`review-animations`): ação vista 100+ vezes/dia ou disparada por teclado **não anima**; entra/sai usa `ease-out` (**`ease-in` em UI é proibido**), movimento na tela usa `ease-in-out`; curva forte, não a do navegador — `cubic-bezier(0.23, 1, 0.32, 1)` em UI, `cubic-bezier(0.32, 0.72, 0, 1)` em drawer; **UI abaixo de 300ms** (tooltip 125–200, dropdown 150–250, modal/drawer 200–500); **nunca `scale(0)`** — entra de `scale(0.9–0.97)` + opacity, e popover escala a partir do gatilho (modal fica no centro); `prefers-reduced-motion` sai junto com a animação, nunca depois. Valor de movimento decidido num projeto vira degrau da **escala de movimento** no `.specs/DESIGN.md`, não fica solto no arquivo de tela.
**O dono NUNCA digita comando nem cita nome de skill.** "faz essa feature", "muda isso na LP", "cria uma LP nova", "tá feio" — o pedido já É o gatilho: a sessão carrega `DESIGN.md`/`CONVENTIONS.md` e as skills sozinha, e se o projeto não tem `DESIGN.md` ela escreve antes de tocar em tela. **Antes de dar tela por pronta**, ela mesma revisa o movimento contra o piso (skill `review-animations`) e o texto contra o piso de legibilidade, e conserta o que reprovar — sem pedir, sem perguntar se pode. **Medido em 08/09: a `description` do `improve-animations` NAO dispara sozinha** — pedido do tipo "as animacoes tao ruins, me diz o que ta errado" foi respondido sem a skill. Entao a sessao **carrega ela explicitamente** sempre que o pedido for auditar, melhorar ou reclamar de movimento ("ta duro", "ta travado", "anima feio", "audita o movimento"), em vez de esperar o gatilho automatico. **Neste projeto, e só aqui, o `impeccable` está EM TESTE** (`.claude/skills/impeccable/`, fora do git): quando a sessão terminar uma tela ou um bloco visual, ela roda sozinha a crítica dele (`/impeccable critique <alvo>`) e trata o resultado como **parecer, não ordem** — o que contradiz o `.specs/DESIGN.md` ou o piso da casa é descartado com uma linha de motivo, o que acrescenta vira emenda no `.specs/DESIGN.md`. O `DESIGN.md` que ele quiser escrever na raiz fica separado, como material do teste; **o arquivo com autoridade continua sendo `.specs/DESIGN.md`**. O veredito do teste se fecha no `RADAR.md`.
  **Escolha de fonte, quando não existe `DESIGN.md`:** herda o que a casa já usa —
  **Barlow Condensed** em app/produto, **Poppins** em LP de venda, **pilha do sistema**
  em painel interno. Fonte diferente disso **não entra sozinha**: a sessão pergunta antes,
  mostrando 2 ou 3 opções com amostra do texto real do projeto.
  **O `DESIGN.md` trava vocabulário, não composição.** Layout, hierarquia, o que é grande e o que
  some, o que se move e por quê, densidade, quebrar a grade de propósito — é tudo da sessão, e ela
  deve ousar. Achou que a escala atrapalha o que a tela precisa ser? O defeito é da escala: propor
  a emenda no `DESIGN.md`, nunca contornar no arquivo de tela.
