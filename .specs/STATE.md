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

## Próximo passo
- **Conferir no celular de verdade.** Esta build do `agent-browser` não tem emulação de viewport
  (`viewport` e `mobile` não existem), então o mobile foi conferido pelo CSSOM e não renderizado.
- **Deploy não foi feito.** `vercel --prod` está pendente de aprovação do dono.
- **6,1 MB de assets órfãos em `uploads/`** (nenhum referenciado no HTML): `Design sem nome.mp4`
  (2,3 MB), `hero-video.mp4` e `Apresentacao inicial.mp4` (860 KB cada, sobras do hero antigo) e
  dois PNGs do ElevenLabs (2,2 MB). Apagar depende do dono dizer que não vai usar.
- Esperando do dono: arquivo novo do vídeo de scroll-scrub (câmera 3D).
- Número de WhatsApp do CTA (`558293270904`) por confirmar com o cliente.
- Tracking negativo em display (`-0.02em` a `-0.03em`) passa de -0,5px em tamanhos grandes:
  assumido junto com o peso 300, mas marcado como "a confirmar" no `DESIGN.md`.
