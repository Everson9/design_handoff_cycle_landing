# STATE

## O que é este projeto
Landing page da **Cycle** (cliente) — consultoria estratégica de conteúdo. **`index.html` é a
produção**: está no ar pela Vercel e é editado direto. Nasceu como pacote de handoff, e o
`README.md` ainda descreve o projeto assim — está desatualizado.
Stack: **HTML + CSS + JS puro**, sem framework e sem bundler.

## Onde parei
- 2026-09-08 — sessão de encaixe no ecossistema. Nenhuma feature nova.
- Escrito `.specs/DESIGN.md`: paleta, escala de texto, escala de movimento, estado de componente,
  tela vazia/erro — destilado do `index.html` + `README.md`.
- Escrito `.specs/codebase/CONVENTIONS.md`: o que não se "conserta" aqui (CSS inline, arquivo único,
  `support.js` gerado, `_ds/`) e o que é proibido.
- Corrigido no `index.html` o que reprovava no piso de legibilidade:
  - `--muted` (#555, 2,6:1) saiu de todo texto de leitura → `--mid` (#888, 5,4:1). 28 usos de
    `color:var(--muted)` + 4 de `#555` literal + `.fan-card-desc` + o copyright do rodapé
    (que era `#2A2A2E`, ~1,2:1). Sobrou **um** uso decorativo de propósito: "Depois de um clique."
  - Texto abaixo de 11px eliminado: 9px (2) e 10px (26) → 11px.
  - `clamp(22px,…)` → `clamp(24px,…)` em 3 displays, para o tracking negativo respeitar o gate
    dos 24px.
- `~/Vault/inventario.md`: entrada duplicada removida; o projeto agora é **LP de cliente**, não
  "LP pessoal dormente".

## Decisões
- **Peso 300 em display fica** — identidade Manrope Light do handoff, aprovada pela Cycle.
  Exceção ao piso da casa (≥600), escrita no `DESIGN.md` com escopo: só display, botão e corpo
  seguem o piso.
- **`--muted` vira cor decorativa**, não cor de texto. Hierarquia de cinza continua em três níveis
  (`--text` / `--mid` / `--muted`), mas o terceiro nível não escreve.
- **Destino Next.js + Tailwind** (padrão do README, cliente ainda não tem codebase).

## 2026-09-08 — saída do runtime do handoff
- Confirmado que o projeto já está em produção: `.vercel/project.json` + histórico do git com ajuste
  fino direto no `index.html` ("Pull fan cards closer to the heading", "Narrow nav padding").
  A regra "protótipo, recriar no destino" do `AGENTS.md` estava errada — foi reescrita.
- **Decidido ficar em HTML puro.** React/Next não resolve nada numa LP de uma tela sem login nem
  dados; o custo seria reescrever `IntersectionObserver` e o scrub de vídeo em `useRef` +
  `requestAnimationFrame`, que é onde isso quebra.
- **Runtime do handoff arrancado:** `support.js` (60 KB), `_ds/_ds_bundle.js` (24 KB), `<x-dc>`,
  `<helmet>` e o `<template id="__bundler_thumbnail">`. Auditado antes: nenhuma tag de design system
  era usada, nenhum atributo `data-dc-*`; o runtime só fornecia `DCLogic` e chamava
  `componentDidMount`. **84 KB de JavaScript a menos.**
- `class Component extends DCLogic` virou `document.addEventListener('DOMContentLoaded', ...)`, e os
  métodos `setupScrub`/`setupFan` viraram funções locais (`this.` eliminado). `node --check` passa,
  tags balanceadas, um `<head>` e um `<body>`.
- `AGENTS.md` e `.specs/codebase/CONVENTIONS.md` reescritos em cima disso.

## 2026-09-08 (parte 2) — cases em vídeo + passada de movimento
- `support.js` e `_ds/` **apagados** do repo (estavam órfãos desde a saída do runtime).
- **Cases embedados.** Esthilion `ub6zUp817z8`, Downtown `D89qBf99R4g` — os dois são **Shorts**,
  vertical 9:16. O mockup era um tablet deitado 16/10: Short ali dentro ficaria com tarja preta em
  ~80% da largura. **Moldura trocada para celular** (`.phone-frame`, 9:16, max-width 300px), que
  além de resolver o corte é o formato em que o cliente final assiste.
- Embed é **facade**: a tela escura com o play continua sendo o repouso, e o `<iframe>`
  (`youtube-nocookie.com`) só entra no clique. Antes disso a página não fala com o YouTube — sem
  player, sem cookie, sem requisição. Acessível por teclado (`role=button`, `tabindex`, Enter/Espaço,
  `:focus-visible`).
- **Passada de movimento** (escopo fechado, não tocou layout/cor/tipografia):
  - 54 transições usavam `ease`, a curva padrão do navegador, e 17 segmentos não declaravam curva
    nenhuma (herdando `ease`). Todos passaram a usar tokens: `--e-ui`
    `cubic-bezier(0.23, 1, 0.32, 1)` e `--e-drawer` `cubic-bezier(0.32, 0.72, 0, 1)` no menu mobile.
    Só a barra de progresso do scrub e a marquee seguem `linear`, onde é o certo.
  - **`prefers-reduced-motion` não existia na página.** Agora existe: sai o deslocamento, fica o
    conteúdo, e o scroll-scrub congela no primeiro frame — vídeo amarrado ao scroll é o pior caso
    pra quem tem sensibilidade vestibular.
- `DESIGN.md` atualizado: tabela de curvas, regra de movimento reduzido, mockup de celular e o
  padrão facade viraram vocabulário travado.

## 2026-09-08 (parte 3) — conteúdo do cliente + passada `impeccable bolder`
- **Planos:** Performance R$ 1.790 (era 2.790) e Presença R$ 2.790 (era 3.790), com as listas
  exatas que o dono passou. Saiu o "Tudo do X incluído" dos dois.
- **"O que você recebe":** de 10 itens para 6 — Diagnóstico, Reunião, Roteirização, Captação,
  Edição, Entrega (sem "estratégico" no nome).
- **Passada de front** com a skill `impeccable` (comando `bolder`, escopo fechado em três alvos;
  paleta, fonte, planos, cases e scrub não foram tocados):
  - **Hero ganhou headline.** Não tinha nenhuma — só vídeo, nav e um rótulo de 12px. Subiu a linha
    que a própria página já tinha na seção 4, *"O conteúdo passa. A percepção permanece."*, no
    display do sistema, ancorada à esquerda na coluna de 1200px. **A seção 4 foi removida**, porque
    passaria a repetir a mesma frase. O hero virou o `<h1>`; o da Percepção virou `<h2>`.
  - **Os seis eyebrows foram deletados.** A craft floor da skill bane rótulo em caps acima de título
    ("no brief earns it back") e era o tique que fazia a página parecer gerada. O único que carregava
    informação ("Incluso em todos os planos") virou subtítulo abaixo do título.
  - **As 6 caixas viraram trilho de etapas** (`.step-track`), o mesmo dispositivo que a página já
    usava em "Como funciona": fio de cabelo, número grande em azul, sem borda em volta.
- Detector da skill: 13 achados → 10. Corrigidos os reais: branco sobre azul dava 2,7:1 nos dois
  CTAs (agora `--bg`, 5,1:1), e a barra do scrub animava `width` (agora `scaleX`). Os 10 que ficam
  são justificados: 11px em label (nosso piso, documentado), marquee proposital, travessão em texto
  em português, e um falso positivo (`background:#000` lido como cor de texto).
- Verificado no browser: sem overflow horizontal, trilho em 6 colunas, h1 em 2 linhas a 88px, e as
  regras de 900px/560px conferidas pelo CSSOM.

## 2026-09-08 (parte 4) — vídeo novo do scrub
- Dono confirmou: **WhatsApp `558293270904` está certo** e a **responsividade está ok**.
- Vídeo novo (`Cycle_logo_rotation_animation_1080p`, 1920×1080, 24fps, 8s, 2,6 MB com áudio AAC)
  entrou no lugar do `camera-scrub.mp4`, agora como `uploads/cycle-logo-scrub.mp4`.
- **Comprimido para 1,8 MB (−31%), SSIM 0,996**, áudio removido. Varredura de 8 variantes:
  CRF 20 com keyframe a cada 0,5s saiu *maior* que o original (2,9 MB) — keyframe denso custa mais
  do que o CRF economiza. CRF 23 com `-g 24` foi o joelho da curva. Frame conferido lado a lado
  contra o original: anéis finos e gradiente das hastes intactos, sem banding.
- `camera-scrub.mp4` (4,8 MB) removido, já substituído. `uploads/` foi de 13 MB para 9,5 MB.
- Receita de compressão gravada no `CONVENTIONS.md`.
- Verificado no browser: o vídeo carrega, `duration` 8s, scrub responde ao scroll.

## 2026-09-08 — NO AR
- `git push` (3 commits) + `vercel --prod` como `everson9`. Deployment
  `dpl_B4Ex6t9JvhMttY54yTGtcvmoRiTm`, `readyState: READY`, target production.
- **https://designhandoffcyclelanding.vercel.app**
- Conferido no ar: `<h1>` "O conteúdo passa. A percepção permanece.", trilho com 6 etapas, 2
  molduras de celular com `data-yt`, scrub apontando pro `cycle-logo-scrub.mp4`, preços 1.790 e
  2.790, e **nenhum resquício de `x-dc`** no HTML servido.
- Assets: `/` 200, vídeos e logo 200, **`support.js` 404** — o runtime do handoff saiu do ar junto.

## 2026-09-08 (parte 5) — ajustes do dono + duas regressões minhas
**Regressões que eu tinha introduzido, ambas achadas por causa do feedback dele:**
1. **A entrada dos fan cards estava morta em produção.** Ao trocar as curvas de `ease` para token,
   meu script quebrou o valor de `transition` na vírgula — e `cubic-bezier(0.34,1.15,0.64,1)` tem
   vírgulas dentro. Virou `cubic-bezier(0.34,1.15 var(--e-ui),0.64 var(--e-ui),1)`, CSS inválido,
   declaração descartada em silêncio. Era a única vítima. Curva restaurada.
2. **Zona morta temporal derrubando metade do JS** (esta rodada, não chegou a produção):
   `let acordarScrub` estava declarado depois de `setupScrub()` ser chamado. O erro estourava dentro
   do `DOMContentLoaded` e matava tudo depois dele — inclusive o `setupFan()`. Declarações movidas
   pro topo do callback. `node --check` não pega nenhuma das duas.

**Ajustes pedidos:**
- Hero: display de `clamp(40px,7vw,96px)` para `clamp(34px,5.4vw,72px)` e ancorado mais embaixo
  (padding de 136px para 88px) — o texto disputava com o assunto do vídeo.
- Painel de abertura do scrub saiu do centro (em cima do logo) para o rodapé do quadro, com o mesmo
  gradiente dos outros painéis, e o título caiu para `clamp(28px,3.6vw,52px)`.
- Seção do scrub de 400vh para 560vh: mais scroll por segundo de vídeo, movimento mais suave.
- Celular dos cases de 300px para 392px, **com a capa real do Short** (`oardefault.jpg` 1080×1920
  baixado do YouTube, reescalado para 720px e servido do próprio domínio — assim a página continua
  sem falar com o YouTube antes do clique).

**Performance (a queixa de "travado"):** o `scrubLoop` rodava `requestAnimationFrame` a 60fps
**a página inteira, do load até fechar a aba**, mesmo com a seção a várias telas de distância. Agora
dorme fora da seção e ao chegar no alvo. Medido no browser, parado no topo da página:
**121 rAF/s antes → 0 depois.** O `tick()` também parou de reescrever `opacity`/`transform`/
`pointerEvents` dos 3 painéis a cada frame (9 escritas por frame com o mesmo valor); agora só escreve
na troca de estágio. E o `offsetHeight`, que forçava layout todo frame, é medido uma vez e no resize.

Conferido com a página aberta: nenhum erro de JS, scrub em 5,96s a 75% do progresso (exato), barra
em `scaleX(0.75)`, painéis corretos e os 5 fan cards abrindo.

## 2026-09-08 (parte 6) — ajustes finais + teste das skills
- **Hero, terceira passada:** display para `clamp(26px,3.9vw,52px)` (49px na tela) e `padding-bottom`
  de 88px para 56px. Sai de cima do assunto do vídeo.
- **Vídeo do case não parava.** O iframe cobria a tela inteira do celular e não sobrava nada
  clicável. Agora tem botão de fechar (canto superior direito, aparece só tocando), que remove o
  iframe e devolve a capa; `Esc` faz o mesmo, e dá pra reabrir.
- **Scrub 1080p → 720p com keyframe a cada 4 frames.** Mesmo tamanho (1,8 MB), mas a busca decodifica
  no máximo 3 frames em 720p em vez de até 24 em 1080p. É o que faltava pro scrub parar de arrastar.
- **`/impeccable document`:** escreveu `DESIGN.md` na raiz + `.impeccable/design.json` (6 componentes
  com HTML/CSS, 6 regras nomeadas, 8 tokens de movimento). O `.specs/DESIGN.md` da casa **não foi
  tocado** — conferido por hash contra backup. A entrevista qualitativa da Step 3 da skill foi
  pulada porque o dono pediu pra finalizar; o North Star ("A Sala Escura de Projeção") e os nomes de
  cor foram derivados do código, não perguntados.
- **Teste de disparo automático das skills de movimento: passou.** A frase "audita o movimento da LP
  inteira e me diz o que tá ruim", sem citar nome nenhum, carregou a skill de auditoria de animação.

## 2026-09-08 (parte 7) — planos de movimento aplicados
Quatro planos escritos em `plans/` (formato da skill: problema com código verbatim, alvo com valor
exato, convenções do repo, passos, fronteiras, verificação) e aplicados na ordem 001 → 002 → 004 → 003.

- **001 (ALTA):** as 7 regras de `:hover` que deslocam foram para dentro de
  `@media (hover: hover) and (pointer: fine)`. No celular o tap disparava hover falso e o card ficava
  preso elevado — e o celular é onde esta LP vive. Hover que só troca cor ficou fora do gate.
- **002 (ALTA):** `:active` com `scale(0.97)` em `--d-press` no CTA da navbar, botão de play, botão
  de fechar e CTA de WhatsApp (que ganhou a classe `.wa-cta`). A página tinha **zero** `:active`:
  nenhum botão confirmava o toque.
- **003 (MÉDIA):** o bloco de movimento reduzido zerava toda transição com seletor universal —
  padrão que a própria doutrina desaconselha. Agora troca `transition-property` por uma lista sem
  deslocamento em 200ms: fade e cor ficam, movimento sai. Ganhou também `.fan-card`, que escapava do
  seletor universal por receber `transform` via JavaScript.
- **004 (MÉDIA):** 5 tokens de duração (`--d-press/state/enter/travel/panel`) e escalonamento de 80ms
  no trilho de etapas e nos cartões de plano, via modificador `.fi.stagger` no observer que já
  existia. Durações de uso único ficaram literais de propósito.

Verificado no browser contra a seção de verificação de cada plano: 1 bloco de gate com 7 regras,
`.nav-cta` transicionando `transform`, 1 `.wa-cta`, 2 `.fi.stagger`, `transition-delay` de 0.24s na
quarta célula, 6 células visíveis, bloco de movimento reduzido preservando opacidade e cor e cortando
transform, 6 hovers neutralizados, zero erro de JS, sem overflow horizontal.

## 2026-09-08 (parte 8) — corte do vídeo: diagnóstico errado meu, revertido
- O dono reportou o logo cortado. Eu medi brilho nas bordas do quadro, vi valores altos em
  5,00–5,25s e 6,75–7,00s, concluí que a exportação cortava, e **cortei o vídeo em 4,6s**.
- **O diagnóstico estava errado.** Olhando os quadros inteiros do original, o logo **não está
  cortado em momento nenhum**: o que a medição pegou era o *brilho dos rastros de luz* sangrando até
  a borda, que é intencional. Brilho na borda não é sinal de corte numa animação com glow.
- O que o dono via cortado era o `object-fit: cover` (recorta ~23% em janela mais larga que alta).
  A troca para `contain` já tinha resolvido; o corte do vídeo foi correção em cima de correção.
- **Revertido:** vídeo de volta aos 8s completos, reencodado do original em 720p g4 crf22 (1,8 MB).
  O clímax com os rastros orbitando voltou.
- **O original 1080p agora fica em `uploads/ORIGINAL-cycle-logo-1080p.mp4`**, fora do git
  (`.gitignore`), para nunca mais depender de o arquivo estar na pasta de Downloads do dono.
- Regra corrigida no `CONVENTIONS.md`: a única verificação válida de enquadramento é olhar o quadro,
  não medir brilho de borda.

## 2026-09-08 (parte 9) — limpeza de assets, ciclo e destaque de plano
- **6,1 MB de órfãos apagados** (`Design sem nome.mp4`, `hero-video.mp4`, `Apresentacao inicial.mp4`
  e os dois PNGs do ElevenLabs). O site publicava 9,5 MB e passa a publicar **3,4 MB** — 64% do peso
  era arquivo que ninguém referenciava. Nenhuma referência quebrada.
- **A seção de entregas virou o ciclo.** Era um trilho horizontal que o dono achou simples demais.
  Agora são as 6 etapas em volta de um anel que se desenha ao entrar na tela, marcos acendendo em
  cascata, e a frase de apoio no miolo. O argumento: a marca se chama Cycle e o logo é um círculo de
  raios — o processo passa a ser a identidade em vez de uma lista. Abaixo de 760px vira coluna com
  fio vertical descendo.
- **Destaque de plano movido para o Presença** (R$ 2.790). Estava no Performance, o mais barato, o
  que contradizia a aposta de ticket. Trocaram borda, badge, rótulo e a cor das bolinhas de item.
- Plano Essencial: dono confirmou que existe, sob consulta. A nota do rodapé fica.

## Próximo passo
- **Conferir no celular de verdade.** Esta build do `agent-browser` não tem emulação de viewport
  (`viewport` e `mobile` não existem), então o mobile foi conferido pelo CSSOM e não renderizado.
- **6,1 MB de assets órfãos em `uploads/`** (nenhum referenciado no HTML): `Design sem nome.mp4`
  (2,3 MB), `hero-video.mp4` e `Apresentacao inicial.mp4` (860 KB cada, sobras do hero antigo) e
  dois PNGs do ElevenLabs (2,2 MB). Apagar depende do dono dizer que não vai usar.
- Esperando do dono: arquivo novo do vídeo de scroll-scrub (câmera 3D).
- Número de WhatsApp do CTA (`558293270904`) por confirmar com o cliente.
- Tracking negativo em display (`-0.02em` a `-0.03em`) passa de -0,5px em tamanhos grandes:
  assumido junto com o peso 300, mas marcado como "a confirmar" no `DESIGN.md`.
