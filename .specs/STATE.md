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

## Próximo passo
- **Conferir a página no browser.** Duas rodadas de mudança entraram sem revisão visual: as
  correções de contraste/tamanho e a saída do runtime. É o próximo passo antes de qualquer coisa.
- Esperando do dono: arquivo novo do vídeo de scroll-scrub (câmera 3D).
- Número de WhatsApp do CTA (`558293270904`) por confirmar com o cliente.
- Tracking negativo em display (`-0.02em` a `-0.03em`) passa de -0,5px em tamanhos grandes:
  assumido junto com o peso 300, mas marcado como "a confirmar" no `DESIGN.md`.
