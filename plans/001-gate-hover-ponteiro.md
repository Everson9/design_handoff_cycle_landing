# 001 — Gatear todo hover com movimento atrás de `@media (hover: hover)`

- **Status**: DONE (aplicado em 2026-09-08, verificado no browser)
- **Commit**: 4893933
- **Severity**: HIGH
- **Category**: Acessibilidade (AUDIT.md §6)
- **Estimated scope**: 1 arquivo (`index.html`), 7 regras CSS

## Problema

Sete regras de `:hover` aplicam `transform` sem gate de capacidade de ponteiro. Em telas de toque o
navegador dispara um hover falso no tap e **o elemento fica preso no estado elevado** até o usuário
tocar em outro lugar. Esta LP vende conteúdo social e é vista majoritariamente no celular, então o
estado preso é a experiência principal, não a exceção.

```css
/* index.html:72 — atual */
.slide-left:hover, .slide-right:hover { transform:translateX(0) translateY(-5px)!important;box-shadow:0 12px 32px rgba(0,0,0,0.4); }
/* index.html:74 */
.plan-card:hover { transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,0,0,0.5); }
/* index.html:76 */
.phone-frame:hover { transform:translateY(-6px);box-shadow:0 0 0 1px #1A1A22,0 40px 100px rgba(0,0,0,0.8)!important; }
/* index.html:78 */
.step-row:hover { background:rgba(61,126,255,0.03);transform:translateX(4px); }
/* index.html:121 */
.phone-screen:hover .phone-poster { transform:scale(1.03); }
/* index.html:134 */
.process-item:hover { background:rgba(61,126,255,0.06); transform:translateY(-4px); }
/* index.html:137 */
.diff-card:hover { background:rgba(61,126,255,0.1); border-color:rgba(61,126,255,0.4); transform:translateY(-4px); }
```

O arquivo não tem nenhum `@media (hover: hover)` hoje.

## Alvo

Todo hover que **move** o elemento passa a viver dentro de um bloco único:

```css
@media (hover: hover) and (pointer: fine) {
  .slide-left:hover, .slide-right:hover { transform:translateX(0) translateY(-5px)!important;box-shadow:0 12px 32px rgba(0,0,0,0.4); }
  .plan-card:hover { transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,0,0,0.5); }
  .phone-frame:hover { transform:translateY(-6px);box-shadow:0 0 0 1px #1A1A22,0 40px 100px rgba(0,0,0,0.8)!important; }
  .step-row:hover { background:rgba(61,126,255,0.03);transform:translateX(4px); }
  .phone-screen:hover .phone-poster { transform:scale(1.03); }
  .process-item:hover { background:rgba(61,126,255,0.06); transform:translateY(-4px); }
  .diff-card:hover { background:rgba(61,126,255,0.1); border-color:rgba(61,126,255,0.4); transform:translateY(-4px); }
}
```

**Hover que só muda cor, borda ou fundo fica fora do gate** — mudança de cor no toque é inofensiva e
some sozinha. Não mover: `.nav-link:hover`, `.nav-cta:hover`, `.step-cell:hover`,
`.phone-screen:hover .play-btn`, `.ig-cta:hover`, `.phone-close:hover`, `.case-video:hover`.

## Convenções do repo a seguir

- Todo o CSS vive num único `<style>` no `<head>` do `index.html`. Não criar arquivo `.css`.
- As media queries existentes ficam agrupadas depois das regras de componente, na ordem
  `1150px → 900px → 560px → 700px/aspect → prefers-reduced-motion`. Inserir o novo bloco
  **imediatamente antes** de `@media (max-width: 1150px)`.
- Exemplar de bloco de media query já correto no arquivo: o bloco
  `@media (prefers-reduced-motion: reduce)`.

## Passos

1. Em `index.html`, remover as 7 regras listadas em Problema de onde estão hoje.
2. Inserir, imediatamente antes da linha `@media (max-width: 1150px) {`, o bloco
   `@media (hover: hover) and (pointer: fine) { ... }` com exatamente essas 7 regras, na mesma ordem.
3. Conferir que o `!important` de `.slide-left:hover` e `.phone-frame:hover` foi preservado
   caractere por caractere — eles vencem regras de breakpoint que dependem disso.
4. Conferir que a regra `.phone-frame:hover { transform:none !important; }` dentro de
   `@media (prefers-reduced-motion: reduce)` **continua fora** do novo bloco.

## Fronteiras

- NÃO tocar em JavaScript.
- NÃO mexer em hover que só muda cor/fundo/borda.
- NÃO alterar valores de transform, sombra ou duração — só mover as regras para dentro do gate.
- NÃO adicionar dependência.
- Se alguma das 7 regras não bater com o texto acima, PARAR e reportar em vez de improvisar.

## Verificação

- **Mecânica**: abrir a página e contar, via CSSOM, as regras cujo `conditionText` seja
  `(hover: hover) and (pointer: fine)`. Deve existir 1 bloco, com 7 regras dentro.
- **Feel check**: no DevTools, emular um dispositivo de toque (Device Toolbar), tocar num cartão de
  plano e confirmar que ele **não** sobe nem fica preso elevado. No desktop com mouse, confirmar que
  o hover continua funcionando igual.
- **Done when**: nas 7 regras, o movimento só existe com mouse; nenhuma mudança visual no desktop.
