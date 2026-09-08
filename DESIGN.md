---
name: Cycle
description: Landing page da Cycle, consultoria estratégica de conteúdo premium.
colors:
  ink: "#0B0B0D"
  surface: "#101012"
  hairline: "#1C1C20"
  paper: "#F5F5F5"
  ash: "#888888"
  smoke: "#555555"
  signal: "#3D7EFF"
  signal-veil: "rgba(61,126,255,0.12)"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(26px, 3.9vw, 52px)"
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(28px, 3.5vw, 48px)"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  hair: "3px"
  sm: "8px"
  md: "16px"
  screen: "30px"
  device: "38px"
  pill: "100px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "36px"
  lg: "64px"
  xl: "120px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "16px 40px"
    typography: "{typography.label}"
  nav-cta:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
  nav-cta-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  plan-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "44px"
  plan-card-highlight:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
  step-cell:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "32px 20px 36px 0"
---

# Design System: Cycle

## Overview

**Creative North Star: "A Sala Escura de Projeção"**

O sistema se comporta como uma sala de exibição: o ambiente desaparece para que a imagem apareça. O
fundo quase-preto (`#0B0B0D`) não é uma escolha de moda por tema escuro — é a parede atrás da tela.
Tudo que a Cycle vende é imagem em movimento, e cada decisão aqui existe para tirar o cenário da
frente do conteúdo: superfícies separadas por um fio de 1px em vez de caixas, um único azul que
funciona como a luz do projetor, e tipografia de display em peso Light que ocupa muito espaço sem
pesar.

A densidade é baixa e deliberada. Seções respiram em 120px de padding vertical, e a página aceita
grandes áreas vazias como parte do argumento: uma consultoria que fala sobre percepção não pode se
apresentar entulhada. O contraponto dessa calma é a escala — quando algo importa, ele é grande de
verdade, não um pouco maior.

A página rejeita explicitamente a estética de "LP escura genérica": nada de rótulo em caixa alta
acima de título, nada de grade de cards iguais com um ícone e uma palavra, nada de gradiente em
texto.

**Key Characteristics:**
- Fundo quase-preto como parede, não como tema
- Um acento só, usado com parcimônia
- Fio de 1px no lugar de caixa
- Display em peso 300, corpo em 400–600
- Vazio como argumento, não como sobra

## Colors

Uma escala de cinzas frios sobre quase-preto, cortada por um único azul de sinal.

### Primary
- **Signal Blue** (`#3D7EFF`): o único acento da página. Numeração de etapa, borda do plano em
  destaque, coluna "empresa estratégica", preenchimento do CTA de WhatsApp, anel de foco. É a luz
  que aponta para onde olhar.

### Neutral
- **Ink** (`#0B0B0D`): fundo de tudo. Também é a cor do texto quando ele cai sobre preenchimento azul.
- **Surface** (`#101012`): cards de plano e superfícies elevadas por tom, não por sombra.
- **Hairline** (`#1C1C20`): a divisão. Faz o trabalho que uma caixa faria.
- **Paper** (`#F5F5F5`): texto principal e display. 18:1 sobre Ink.
- **Ash** (`#888888`): todo texto de apoio — subtítulo, label, link de rodapé, numeração. 5,4:1.
- **Smoke** (`#555555`): 2,6:1. Não é cor de texto.

### Named Rules

**A Regra da Fumaça.** `Smoke` (`#555`) existe para *apagar* uma palavra de propósito, nunca para
escrever com ela. Hoje tem exatamente um uso legítimo na página inteira: "Depois de um clique.", na
seção Percepção, onde o texto sumir é o efeito. Qualquer outro uso em texto é bug de acessibilidade.

**A Regra do Texto Sobre Azul.** Texto sobre preenchimento `Signal` é `Ink`, nunca branco. Branco
sobre esse azul dá 2,7:1 e reprova; `Ink` dá 5,1:1.

## Typography

**Display Font:** Manrope (com `sans-serif`)
**Body Font:** Manrope (com `sans-serif`)

**Character:** Uma família só, trabalhada por peso e escala em vez de contraste de família. Manrope
tem terminais retos e um `g` de andar único que sustenta bem o peso 300 em tamanho grande sem virar
decoração; nos pesos altos ela fecha e vira interface.

### Hierarchy
- **Display** (300, `clamp(26px, 3.9vw, 52px)`, 1.12, `-0.02em`): a frase da marca no hero e nos
  painéis do scroll-scrub.
- **Headline** (300, `clamp(28px, 3.5vw, 48px)`, 1.2, `-0.02em`): abertura de seção.
- **Title** (600, `16px`, 1.4): nome de etapa, título de card.
- **Body** (400, `15px`/`16px`, 1.6): parágrafo. Medida de 42–46ch no hero, 65ch em texto corrido.
- **Label** (700, `11px`, `0.2em`, caixa alta): numeração, badge, link de rodapé.
- **Price** (700, `52px`, `-0.02em`): exceção de um uso só, nos cartões de plano.

### Named Rules

**A Regra dos 11 Pixels.** Nada de texto abaixo de 11px, em nenhum lugar, nem label nem legenda.

**A Regra do Peso Leve Grande.** Peso 300 só existe a partir de 24px. Abaixo disso a página usa
400 para corpo e 600–700 para interface. Light pequeno é ilegível no celular, que é onde esta LP é
vista.

**A Regra do Título Sozinho.** Título não recebe rótulo em caixa alta acima dele. Se há informação
que só o rótulo dava, ela vira subtítulo em corpo, embaixo. Esse é o tique que fazia a página
parecer gerada por máquina, e ele está banido.

## Layout

Coluna única de `max-width: 1200px` com `padding: 0 40px` (24px em ≤900px, 16px em ≤560px). Seções
respiram `120px` no eixo vertical; o CTA final abre para `160px`.

Grades de duas colunas (`1fr 1fr`) com `gap: 2px` — o gap é fino de propósito, para que a divisão
leia como um corte e não como espaçamento. Comparações e planos usam esse padrão.

Breakpoints: `1150px` (fan de cards vira faixa rolável), `900px` (grades colapsam, trilho de 6 vai a
3), `700px` / `4:5` (vídeo troca `cover` por `contain`), `560px` (navbar vira menu, trilho vai a 2).

Ritmo de espaçamento: `8 / 16 / 36 / 64 / 120`.

## Elevation & Depth

O sistema é **tonal, não sombreado**. Profundidade em repouso vem de camada de cor — `Ink` ao fundo,
`Surface` uma etapa acima, `Hairline` marcando a borda entre as duas. Nenhuma superfície em repouso
tem sombra.

Sombra aqui é **resposta a estado**, não hierarquia.

### Shadow Vocabulary
- **Lift de card** (`box-shadow: 0 12px 32px rgba(0,0,0,0.4)`): hover de card de etapa e de plano.
- **Lift de imagem** (`box-shadow: 0 16px 40px rgba(0,0,0,0.5)`): hover em elemento com imagem.
- **Dispositivo em repouso** (`box-shadow: 0 0 0 1px #1A1A22, 0 32px 80px rgba(0,0,0,0.7)`): a
  moldura de celular dos cases é o único objeto que nasce com sombra, porque precisa ler como objeto
  físico sobre a parede.
- **Dispositivo em hover** (`box-shadow: 0 0 0 1px #1A1A22, 0 40px 100px rgba(0,0,0,0.8)`).

### Named Rules

**A Regra do Plano Chato.** Superfície em repouso é chata. Sombra só aparece quando o usuário faz
alguma coisa. A única exceção é a moldura de celular, que é um objeto e não uma superfície.

## Shapes

Duas linguagens de canto, e elas significam coisas diferentes.

Elementos de **interface** são retos ou levemente arredondados: card de plano e trilho de etapa em
`8px`, card do fan em `16px`. Elementos de **ação** são pílula completa (`100px`): CTA da navbar,
botão de WhatsApp, badge de plano. O contorno diz se algo é para ler ou para clicar.

**Objetos** ganham raio grande: a moldura de celular em `38px` com a tela em `30px`, proporção que
imita hardware real. O notch é uma barra de `3px`.

A borda é sempre `1px solid Hairline`, exceto a moldura de dispositivo (`2px solid #2A2A32`) e o
plano em destaque (`1px solid Signal`).

## Components

### Buttons
- **Shape:** pílula completa (`100px`)
- **Primary (WhatsApp):** preenchimento `Signal`, texto `Ink`, `16px 40px`, label 12px/700 em caixa
  alta com `0.18em`
- **Nav CTA:** repouso invertido (`Paper` sobre `Ink`); hover vira `Signal` com texto `Ink`
- **Hover / Focus:** transição de `0.3s` na curva de UI; foco é anel de `2px Signal` com `2px` de
  offset, via `:focus-visible`

### Cards / Containers
- **Corner Style:** `8px` em plano, `16px` no card do fan
- **Background:** `Surface` sobre `Ink`
- **Shadow Strategy:** nenhuma em repouso (ver Elevation & Depth)
- **Border:** `1px Hairline`; o plano em destaque troca para `1px Signal` e ganha badge preenchido —
  a diferença entre planos é borda e badge, nunca tamanho
- **Internal Padding:** `44px` em plano

### Navigation
- Fixa no topo, transparente sobre o hero; após 60px de scroll ganha `rgba(11,11,13,0.95)` com
  `backdrop-filter: blur(16px)` e borda inferior `Hairline`
- Links em `12px/500`, `#666` em repouso, `Paper` no hover
- Abaixo de 560px vira menu de tela cheia com `blur(12px)`

### Trilho de etapas (assinatura)
Sequência numerada **sem caixa**: fio de cabelo no topo, células divididas por fio vertical, número
em `38px/700 Signal`, nome em `16px/600`. 6 colunas → 3 (≤900px) → 2 (≤560px). É o dispositivo
estrutural da casa para qualquer sequência.

### Moldura de celular (assinatura)
`aspect-ratio: 9/16`, `max-width: 392px`, raio `38px`, tela `30px`, notch de `3px`. Sempre com capa
real do vídeo servida do próprio domínio; play em anel de `52px` que some ao tocar, e um botão de
fechar que devolve a capa.

## Do's and Don'ts

### Do:
- **Do** usar `Ash` (`#888`) para todo texto de apoio; ele passa em 5,4:1.
- **Do** separar superfícies com fio de `1px Hairline` antes de considerar uma caixa.
- **Do** usar o trilho de etapas para qualquer sequência numerada nova.
- **Do** dar `:focus-visible` a todo controle novo, com anel de `2px Signal`.
- **Do** pôr texto sobre vídeo no rodapé do quadro, não no centro — o centro é onde o assunto está.

### Don't:
- **Don't** pôr rótulo em caixa alta acima de um título. Nunca.
- **Don't** usar `Smoke` (`#555`) em texto que precisa ser lido.
- **Don't** usar branco sobre o azul de sinal.
- **Don't** montar grade de cards iguais com uma palavra dentro; isso lê como placeholder.
- **Don't** usar peso 300 abaixo de 24px, nem qualquer texto abaixo de 11px.
- **Don't** dar sombra a superfície em repouso.
