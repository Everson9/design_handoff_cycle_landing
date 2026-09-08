# DESIGN.md — Cycle (landing page de cliente)

Vocabulário visual travado deste projeto. Layout, hierarquia e composição continuam sendo decisão
da sessão — o que está aqui é o **vocabulário**: valor visual que não estiver neste arquivo não se
inventa no arquivo de tela. Ou entra aqui primeiro, com o motivo, ou usa o que já existe.

Fonte da verdade do design: o protótipo hifi `index.html` + `README.md`, entregue e aprovado pela
Cycle. Este arquivo destila o que estava espalhado em CSS inline.

---

## Paleta

| Token | Hex | Uso | Contraste sobre `--bg` |
|-------|-----|-----|------------------------|
| `--bg` | `#0B0B0D` | fundo geral | — |
| `--surface` | `#101012` | cards e superfícies | — |
| `--border` | `#1C1C20` | bordas e divisores | — |
| `--text` | `#F5F5F5` | texto principal | ~18:1 ✓ |
| `--mid` | `#888888` | **todo texto de apoio** (labels, corpo secundário, links de rodapé, numeração) | 5,4:1 ✓ |
| `--muted` | `#555555` | **decorativo apenas** — ênfase negativa, nunca texto que precisa ser lido | 2,6:1 ✗ |
| `--blue` | `#3D7EFF` | acento, CTA, destaque de plano/coluna | 5,0:1 sobre `--surface` ✓ |

**Texto sobre preenchimento azul é `--bg` (#0B0B0D), nunca branco.** Branco sobre `--blue` dá 2,7:1
e reprova; o escuro dá 5,1:1. Vale para o botão de WhatsApp, o hover do CTA da navbar e o badge do
plano — que já fazia certo e virou a regra.

**Regra do `--muted`:** ele existe para *apagar* uma palavra de propósito, não para escrever com ela.
Hoje tem exatamente um uso legítimo: `"Depois de um clique."` na seção Percepção, onde o texto sumir
é o efeito pretendido. Qualquer outro uso em texto é bug.

Superfície escura extra: `#0F0F18` (corpo dos fan cards), `#0A0A0D` + borda `#2A2A32` (moldura tablet
dos cases). São locais, não viram token.

---

## Tipografia

Família: **Manrope** (Google Fonts), pesos 300/400/500/600/700/800.
`line-height` base do corpo: **1.6**. Corpo longo centralizado: 1.85.

### Escala

| Papel | Tamanho | Peso | Tracking |
|-------|---------|------|----------|
| Display hero | `clamp(36px,5.5vw,72px)` | 300 | `-0.025em` |
| Display statement | `clamp(40px,7vw,100px)` | 300 | `-0.03em` |
| Display CTA final | `clamp(32px,5.5vw,80px)` | 300 | `-0.03em` |
| Título de seção | `clamp(28px,3.5vw,48px)` | 300 | `-0.02em` |
| Subtítulo de seção | `clamp(24px,2.5vw,38px)` | 300 | `-0.02em` |
| Preço | `52px` | 700 | `-0.02em` |
| Corpo | `15px` / `16px` | 400–500 | 0 |
| Apoio | `12px` / `13px` | 400–500 | 0 a `0.06em` |
| Label / eyebrow | `11px` uppercase | 600–700 | `0.14em` a `0.2em` |

**Piso: 11px.** Nada de texto abaixo disso. (O protótipo original tinha 9px e 10px em labels,
navbar mobile e numeração; foi tudo subido para 11px.)

### Exceções ao piso da casa — assumidas, com motivo

1. **Peso 300 em todo display (≥24px).** O piso da casa é ≥600 em título. Aqui fica 300: é a
   identidade Manrope Light do handoff hifi, **aprovada pela Cycle**. O escopo da exceção é só
   display; **botão, label e corpo seguem o piso** (600–700 em botão/label, 400–500 em corpo).
2. **Tracking negativo acima de -0.5px em display.** O piso da casa é -0.5px, só acima de 24px.
   Os clamps mínimos foram subidos de 22px para 24px, então o gate dos 24px está respeitado; o que
   sobra é a amplitude: `-0.02em` em 72px dá ≈ -1,4px. É parte da mesma identidade display do item 1.
   **A confirmar com o cliente** se algum dia o design for reaberto.

Fora display, tracking negativo é proibido.

---

## Composição — o que é proibido aqui

- **Eyebrow (rótulo pequeno em caps acima de um título) não existe nesta página.** Havia seis, um por
  seção, e eram o principal motivo de a LP parecer template gerado. O título carrega o próprio peso.
  Informação que só o rótulo dava vira **subtítulo abaixo do título**, em corpo, cor `--mid`.
  Rótulo *dentro* de um componente (badge de plano, label de fan card, cabeçalho de coluna) é outra
  coisa e continua valendo.
- **Caixa não é estrutura.** Grade de cards iguais com uma palavra dentro lê como placeholder. Quando
  o conteúdo é uma sequência, ele usa o dispositivo de trilho (abaixo), não seis bordas.

## Dispositivos estruturais

- **Trilho de etapas (`.step-track` / `.step-cell`)** — sequência numerada sem caixa: fio de cabelo
  no topo, células separadas por fio vertical, número em `38px/700` `--blue`, nome em `16px/600`.
  6 colunas → 3 (≤900px) → 2 (≤560px). É o mesmo dispositivo do "Como funciona" no scroll-scrub;
  sequência nova nasce assim.
- **Hero (`.hero-copy`)** — a linha da marca em `clamp(34px,5.4vw,72px)`, peso 300, tracking
  `-0.03em`, ancorada à esquerda na mesma coluna de 1200px do resto da página, com o subtítulo em
  `16px` `#C9C9CE` logo abaixo. O gradiente do vídeo fecha em `rgba(11,11,13,0.9)` embaixo
  justamente para o display ter contraste.
- **Texto sobre vídeo fica no rodapé do quadro, nunca no centro.** O centro é onde o assunto do
  vídeo está; texto ali disputa com a imagem e perde. Vale para o hero e para o painel de abertura
  do scroll-scrub, que era centralizado em cima do logo e desceu.
- **Mockup de case:** `max-width:392px` (320px abaixo de 900px) e **capa do vídeo obrigatória**
  (`.phone-poster`, servida do próprio domínio). Tela preta com um play não diz o que é o case.

## Escala de movimento

Tudo disparado por `IntersectionObserver`, nunca por timer.

| Nome | Estado de repouso | Ativo | Transição |
|------|-------------------|-------|-----------|
| `.fi` (fade-in padrão) | `opacity:0; translateY(24px)` | `opacity:1; translateY(0)` | `0.4s var(--e-ui)` |
| `.slide-left` | `opacity:0; translateX(-72px)` | `translateX(0)` | `0.45s var(--e-ui)` |
| `.slide-right` | `opacity:0; translateX(72px)` | `translateX(0)` | `0.45s var(--e-ui)` |
| Fan cards (entrada) | `opacity:0; translateY(200px)` | neutro | stagger `90ms` |
| Navbar (scroll >60px) | transparente | `rgba(11,11,13,0.95)` + `blur(16px)` | `0.4s var(--e-ui)` |
| Hover de card | — | `translateY(-5px)` + sombra | `0.3s var(--e-ui)` |
| Hover de fan card | — | `translateY(-32px) scale(1.18)` | `0.3s var(--e-ui)`; a **entrada** do fan card usa `0.55s var(--e-pop)` |

Stagger padrão entre irmãos: **60ms** (cards de coluna), **90ms** (fan).
As animações de coluna são **bidirecionais** — saem ao rolar de volta. As demais, uma vez só.

Escala de duração: `0.3s` (hover/estado) · `0.4s` (entrada) · `0.45s` (deslocamento maior) · `0.55s`–`0.6s` (**só** entrada de fan card e revelação grande de seção). Acima de 300ms porque isto é **entrada de LP**, não controle de app — a regra dos 300ms da casa vale pra UI que responde a clique, e essas transições são disparadas por scroll. Hover e estado, que SÃO resposta a ação, ficam em 0.3s.

### Curvas

| Token | Valor | Uso |
|-------|-------|-----|
| `--e-ui` | `cubic-bezier(0.23, 1, 0.32, 1)` | tudo que é controle e entrada: hover, fade, slide, nav |
| `--e-drawer` | `cubic-bezier(0.32, 0.72, 0, 1)` | menu mobile — painel que cobre a tela |
| `--e-pop` | `cubic-bezier(0.34,1.15,0.64,1)` | **só** a entrada do fan card — passa de 1 e volta (overshoot). Curva de chegada, nunca de hover nem de controle |
| `linear` | — | só a barra de progresso do scrub e a marquee, onde velocidade constante é o certo |

**`ease` puro é proibido.** É a curva padrão do navegador: desacelera de menos e faz
qualquer transição parecer mais lenta do que é. `ease-in` também não entra em UI —
começar devagar faz o elemento parecer travado no clique.

Não introduzir curva nova sem emendar este arquivo.

### Movimento reduzido

`@media (prefers-reduced-motion: reduce)` é **obrigatório**, não opcional: movimento
grande dispara enjoo e enxaqueca em quem tem sensibilidade vestibular, e esta página é
quase toda movimento. O que sai é o **deslocamento**, não o conteúdo — os elementos
continuam aparecendo, só que sem viajar pela tela. O scroll-scrub congela no primeiro
frame, porque vídeo amarrado ao scroll é o pior caso dessa lista.

**Scroll-scrub:** a seção de câmera 3D amarra `video.currentTime` ao progresso do scroll
(`height:500vh`, filho `sticky` de `100vh`). É a única animação dirigida por scroll contínuo.

---

## Estado de componente

- **Link de navbar:** repouso `#666` → hover `--text`. Transição `0.3s`.
- **CTA navbar:** repouso `--text` sobre `--bg` (pill invertido) → hover `--blue` com texto branco.
- **Card (incluso / plano):** repouso borda `--border` → hover `translateY(-5px)` +
  `box-shadow: 0 12px 32px rgba(0,0,0,0.4)`.
- **Plano em destaque:** borda `--blue` e badge preenchido; o outro fica com badge outlined.
  A diferença entre planos é **borda + badge**, não tamanho.
- **Mockup de case (`.phone-frame`):** moldura de **celular, `aspect-ratio:9/16`**, `max-width:300px`
  (250px abaixo de 900px). Os cases são Shorts — vertical é o formato nativo do conteúdo e o
  formato em que o cliente final assiste. Era um tablet 16/10; trocado em 08/09/2026.
- **Vídeo de case:** *facade*. Repouso é a tela escura `#0D0D11` com o botão play em anel; no
  clique, o `<iframe>` do YouTube entra e o play some. A página **não fala com o YouTube antes do
  clique** — sem player, sem cookie, sem requisição.
- **Foco:** anel de 2px `--blue` com 2px de offset (`:focus-visible`). Já aplicado no
  `.phone-screen`; **todo controle novo nasce com ele**.
- **Barra de progresso do scrub:** anima `transform: scaleX()` com `transform-origin:left`, nunca
  `width` — largura recalcula layout a cada frame do scroll.

## Tela vazia / erro

A LP não tem estado vazio nem erro de dados. Os dois casos reais são de mídia:

- **Vídeo que não carrega:** o fundo continua sendo `--bg` sólido e o texto por cima permanece
  legível. Nunca deixar texto claro dependendo do vídeo para ter contraste.
- **Vídeo de case ainda não inserido:** placeholder é a moldura tablet com tela `#0A0A0D` e botão
  play centralizado — o mesmo do estado final, sem o vídeo.

---

## Pendente de conteúdo (não é design)

- Vídeos dos cases (Esthilion, Downtown) ainda são placeholder.
- Número de WhatsApp do CTA: hoje `558293270904` — confirmar com o cliente.
