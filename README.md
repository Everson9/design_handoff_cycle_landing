# Handoff: Cycle Landing Page

## Overview
Landing page completa para a Cycle — consultoria estratégica de conteúdo premium brasileira. A página apresenta o posicionamento, sistema de trabalho, planos, cases de clientes e CTA para WhatsApp.

## About the Design Files
Os arquivos neste pacote são **protótipos de referência criados em HTML** — não são código de produção para copiar diretamente. A tarefa é **recriar estes designs no ambiente do codebase existente** (React, Next.js, Vue, etc.) usando os padrões e bibliotecas já estabelecidos. Se não existir um ambiente, recomendamos **Next.js + Tailwind CSS** para este projeto.

## Fidelity
**High-fidelity (hifi)**: Os protótipos são pixel-perfect com cores finais, tipografia, espaçamentos e interações. O desenvolvedor deve recriar a UI fielmente usando as bibliotecas do codebase.

---

## Stack Técnica do Protótipo
- HTML puro + CSS inline
- Fonte: **Manrope** (Google Fonts)
- Animações: CSS transitions (fade-in 0.4s ease) + JavaScript IntersectionObserver
- Vídeos: arquivos locais (.mp4)
- Sem framework, sem bundler

---

## Design Tokens

### Cores
| Token | Hex | Uso |
|-------|-----|-----|
| Background | `#0B0B0D` | Fundo geral |
| Surface | `#101012` | Cards e superfícies |
| Border | `#1C1C20` | Bordas e divisores |
| Text Primary | `#F5F5F5` | Texto principal |
| Text Muted | `#555555` | Texto secundário |
| Text Mid | `#888888` | Texto terciário |
| Blue Accent | `#3D7EFF` | Destaque, CTAs, números |

### Tipografia
- **Família:** Manrope (Google Fonts)
- **Eyebrows/Labels:** 10px, weight 700, letter-spacing 0.2em, uppercase
- **Body:** 14–16px, weight 400–500
- **Headings:** clamp(28px, 3.5vw, 48px), weight 300, letter-spacing -0.02em
- **Hero/Statement:** clamp(36px, 6vw, 88px), weight 300, letter-spacing -0.03em
- **Números grandes:** 32–52px, weight 700, letter-spacing -0.02em

### Espaçamento
- Section padding: `120px 0` (telas principais), `160px 0` (seções de destaque)
- Container max-width: `1200px`, padding horizontal: `40px`
- Card padding: `44px–56px`
- Gap entre cards: `2px` (grid tight)

### Border Radius
- Cards/seções: `0` (sharp corners)
- Botões pill: `100px`
- Tablet mockup: `20px` (outer), `12px` (inner screen)
- Fan cards: `16px`

---

## Seções

### 1. Hero
- **Layout:** fullscreen `100vh`, vídeo de fundo com `object-fit: cover`
- **Vídeo:** `uploads/Apresentacao inicial.mp4` — autoplay, muted, loop
- **Overlay:** `linear-gradient(to bottom, rgba(11,11,13,0.2), rgba(11,11,13,0.55))`
- **Texto:** "Consultoria Estratégica de Conteúdo" — `position:absolute; bottom:140px`, centered, 12px uppercase muted
- **Scroll indicator:** linha vertical animada, `bottom:48px`

### 2. Percepção
- **Layout:** texto centralizado, max-width `820px`, margin auto
- **Headline:** `clamp(36px,5.5vw,72px)`, weight 300, line-height 1.1
- **Texto em destaque negativo:** `color:#555555` para "Depois de um clique."
- **Subtítulo:** 15px, cor `#888`, max-width 520px

### 3. Problema
- **Layout:** 2 colunas, gap `2px`
- **Coluna esquerda (Empresa Comum):** border `1px solid #1C1C20`, texto `#555`
- **Coluna direita (Empresa Estratégica):** border `1px solid #3D7EFF` (azul), texto `#F5F5F5`
- **Cards dentro:** cada item é uma row com `padding:20px 0`, `border-bottom:1px solid #1C1C20`
- **Animação:** cards da esquerda entram deslizando da esquerda (`translateX(-72px)` → `0`), direita da direita. Animação bidirecional — sai ao voltar no scroll.
- **Transition:** `opacity 0.45s ease, transform 0.45s ease`
- **Stagger:** cada card tem `transition-delay` de `0ms, 60ms, 120ms, 180ms`

### 4. Statement
- **Layout:** fullscreen padding `180px 0`, texto centralizado
- **Texto:** "O conteúdo passa. A percepção permanece." — `clamp(40px,7vw,100px)`, weight 300

### 5. Sistema Cycle (Fan Cards)
- **Layout:** header 2 colunas (título + descrição) + fan de 5 cards
- **Fan wrap:** `height:560px`, posicionamento absoluto dos cards com rotações
- **Card 1:** `rotate(-20deg) translateX(-320px) translateY(40px)`, z-index 1
- **Card 2:** `rotate(-10deg) translateX(-160px) translateY(14px)`, z-index 2
- **Card 3:** `rotate(0deg)`, z-index 3 (centro)
- **Card 4:** `rotate(10deg) translateX(160px) translateY(14px)`, z-index 2
- **Card 5:** `rotate(20deg) translateX(320px) translateY(40px)`, z-index 1
- **Card size:** `220×360px`, border-radius 16px
- **Imagem:** 62% da altura, `object-fit:cover`
- **Body:** 38%, background `#0F0F18`, label azul 9px + desc 11px
- **Animação entrada:** cards saem de `translateY(200px) opacity:0` e entram em stagger 90ms quando seção entra na viewport
- **Animação saída:** reverso — convergem pro centro e descem
- **Hover:** zona do mouse divide wrap em 5 — card correspondente sobe `translateY(-32px)` e escala `1.18`
- **Imagens:** ver arquivos em `uploads/0X-*.png`

### 6. O que está incluso
- **Layout:** grid 2×5, gap `2px`
- **Card:** `padding:36px`, border `1px solid #1C1C20`, número `10px` muted + título `16px` weight 500
- **Hover:** `translateY(-5px)` + `box-shadow: 0 12px 32px rgba(0,0,0,0.4)`

### 7. Planos
- **Layout:** 2 colunas, gap `2px`
- **Performance (destaque):** border `1px solid #3D7EFF`, badge "Performance" preenchido azul
- **Presença:** border normal, badge "Presença" outlined
- **Preço:** `52px`, weight 700, `/mês` em 18px muted
- **Items:** bolinhas azuis `4px` + texto

### 8. Cases (2 seções separadas)
- **Case 1 (Esthilion):** grid 2 colunas — mockup tablet esquerda, info direita
- **Case 2 (Downtown):** grid 2 colunas — info esquerda, mockup tablet direita (invertido)
- **Tablet frame:** background `#0A0A0D`, border-radius 20px, border `2px solid #2A2A32`, padding `10px`, box-shadow complexa
- **Tablet screen:** aspect-ratio `16/10`, border-radius 12px, botão play centralizado
- **TODO:** vídeos YouTube a inserir (atualmente placeholders escuros)

### 9–10. Seção Scroll-Scrub (Câmera 3D)
- **Layout:** `height:500vh`, sticky div interno `height:100vh`
- **Vídeo:** `uploads/kling_*_Camera*.mp4` — scrub controlado por scroll
- **Lógica:** `currentTime = progress * duration`, onde `progress = scrolled / (sectionHeight - viewportHeight)`
- **Panels que sobem:** "Como funciona" aparece em `progress 0.3–0.6`, "Por que a Cycle" em `progress 0.65–1.0`
- **Panels:** `position:absolute; bottom:0`, gradient de fundo, `translateY(80px)→0` ao aparecer
- **Barra progresso:** `height:2px`, azul, na base

### 11. CTA Final
- **Layout:** padding `160px 0`, flex column centrado
- **Headline:** `clamp(32px,5.5vw,80px)`, weight 300
- **Botão WhatsApp:** background `#3D7EFF`, pill, ícone WhatsApp SVG + texto
- **Logo:** `height:32px`, opacity 0.5
- **TODO:** número WhatsApp real

### 12. Footer
- **Logo:** `height:28px`, opacity 0.4
- **Links:** WhatsApp, Instagram, E-mail — `11px`, uppercase, `color:#555`
- **Copyright:** `11px`, `color:#2A2A2E`

---

## Navbar
- **Position:** fixed top, z-index 100
- **Estado inicial (hero):** `background:transparent; border:transparent`
- **Após scroll 60px:** `background:rgba(11,11,13,0.95); backdrop-filter:blur(16px); border-bottom:1px solid #1C1C20`
- **Transition:** `background 0.4s ease, border-color 0.4s ease`
- **Logo:** `height:64px`
- **Links:** 12px, weight 500, `color:#666` → `#F5F5F5` on hover
- **CTA:** pill `background:#F5F5F5; color:#0B0B0D` → `background:#3D7EFF; color:#fff` on hover

---

## Animações Globais

### Fade-in (`.fi`)
```css
opacity: 0;
transform: translateY(24px);
transition: opacity 0.4s ease, transform 0.4s ease;
/* active: */
opacity: 1;
transform: translateY(0);
```
Ativado por IntersectionObserver quando elemento entra na viewport.

### Slide Cards (`.slide-left` / `.slide-right`)
```css
/* left resting: */ transform: translateX(-72px); opacity: 0;
/* right resting: */ transform: translateX(72px); opacity: 0;
/* active: */ transform: translateX(0); opacity: 1;
/* transition: */ 0.45s ease, stagger 60ms por card
```
**Bidirecional** — volta ao sair da viewport.

---

## Assets
| Arquivo | Uso |
|---------|-----|
| `uploads/ChatGPT Image * - Editado.png` | Logo Cycle (fundo transparente) |
| `uploads/logo esthilion.png` | Logo Esthilion (case) |
| `uploads/bg logo png.png` | Logo Downtown Beer Garden |
| `uploads/Apresentacao inicial.mp4` | Vídeo hero de fundo |
| `uploads/kling_*_Camera*.mp4` | Vídeo scroll-scrub câmera 3D |
| `uploads/01-planejamento-estrategico.png` | Fan card 1 |
| `uploads/02-estrategia-conteudo.png` | Fan card 2 |
| `uploads/03-producao-video.png` | Fan card 3 |
| `uploads/04-consistencia-marca.png` | Fan card 4 |
| `uploads/05-analytics-crescimento.png` | Fan card 5 |

---

## TODOs antes de publicar
- [ ] Número WhatsApp real
- [ ] Link Instagram
- [ ] E-mail de contato
- [ ] Links YouTube (vídeos dos cases: Esthilion + Downtown)
- [ ] Confirmar plano Essencial e preço
- [ ] Deploy Vercel

## Arquivos
- `Cycle Landing Page.dc.html` — protótipo principal com todas as seções
