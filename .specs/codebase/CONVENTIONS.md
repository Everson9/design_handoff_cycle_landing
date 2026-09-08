# CONVENTIONS.md — o que já está certo aqui, e o que é proibido

## A natureza deste repositório

`index.html` **é a landing page da Cycle em produção**. Está no ar pela Vercel
(`.vercel/project.json`) e o histórico do git mostra ajuste fino feito direto nele.

O projeto nasceu como pacote de handoff, e o `README.md` ainda fala como se fosse: "protótipo de
referência", "recriar no codebase de destino", "Next.js + Tailwind". **Isso está desatualizado.**
Ninguém vai recriar; o destino é este arquivo.

**Stack: HTML + CSS + JavaScript puro. Sem framework, sem bundler, sem `package.json`.**
Decisão de 08/09/2026, com motivo escrito em `AGENTS.md`.

## O que já está certo — não "consertar"

- **CSS inline nos elementos, `<style>` único no `<head>`.** Cada seção carrega o próprio estilo e
  é lida isolada. Não extrair para arquivo `.css`, não introduzir classes utilitárias, não
  modularizar.
- **Arquivo único de ~1000 linhas.** Quebrar em componentes exigiria um bundler, que é justamente o
  que foi arrancado.
- **JavaScript num só `<script>` no fim do `<body>`,** dentro de um `DOMContentLoaded`, com
  `setupScrub()` e `setupFan()` como funções locais. Não é código de bundler nem sobra de classe —
  é a forma escolhida.
- **Português no conteúdo, inglês nos identificadores** (`fan-card`, `slide-left`, `.fi`,
  `setupScrub`).
- **`heroVideo.muted = true` por JavaScript**, mesmo com `muted` escrito no markup. O Chrome recusa
  autoplay com `NotAllowedError` baseado na **propriedade**, não no atributo. Não é redundância.
- **A fonte vem do Google Fonts por CDN** com `preconnect`. Não auto-hospedar sem medir antes.
- **Manrope 300 em display** e o tracking negativo largo: exceção **documentada e aprovada** em
  `.specs/DESIGN.md`. Não subir peso nem afrouxar tracking sem reabrir aquele arquivo.

## Proibido aqui

- **Reintroduzir o runtime do handoff.** `support.js`, `_ds/_ds_bundle.js`, `<x-dc>`, `<helmet>` e
  `<template id="__bundler_thumbnail">` foram removidos em 08/09/2026 — 84 KB de JavaScript que
  existiam só para hidratar uma página estática. Se algum arquivo ou instrução ainda pedir isso,
  a instrução está velha.
- **Adicionar framework, bundler, `package.json` ou dependência de build.** A página roda abrindo
  o arquivo.
- **Migrar para React/Next/Vite** sem que a Cycle passe a precisar de várias páginas, blog ou área
  logada. O motivo está em `AGENTS.md`.
- **Inventar valor visual no arquivo de tela.** Cor, tamanho, peso, duração e easing saem de
  `.specs/DESIGN.md`. Valor que não estiver lá: entra lá primeiro, com o motivo.
- **Texto abaixo de 11px** e **`--muted` (#555) em texto de leitura** — os dois já foram corrigidos
  uma vez; reintroduzir é regressão.
- **Commitar `.vercel/`.** Já está no `.gitignore` e contém o id do projeto/org.

## Mídia (`uploads/`, ~13 MB)

É aqui que a LP demora, não no JavaScript. Antes de otimizar código, olhar o peso dos vídeos.

- Vídeos já foram comprimidos até o limite sem perder qualidade (dono, 08/09/2026). **Não
  recomprimir sem falar com ele.**
- Nomes com espaço e parênteses (`Apresentacao inicial.mp4`, `ElevenLabs_image_...(1).png`) são
  legado. Arquivo **novo** entra em kebab-case.
- `muted playsinline preload="none"` em todo vídeo; `autoplay` só no hero.
- O hero anexa a `src` por JavaScript depois do `load` (`source[data-src]`): iniciar o decode junto
  com o parse do HTML travava no frame 1, sem erro. Manter esse padrão em vídeo que precise
  tocar sozinho.
