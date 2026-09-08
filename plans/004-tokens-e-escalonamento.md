# 004 — Tokenizar durações e escalonar as duas entradas em bloco

- **Status**: DONE (aplicado em 2026-09-08, verificado no browser)
- **Commit**: 4893933
- **Severity**: MEDIUM
- **Category**: Coesão e tokens (AUDIT.md §7)
- **Estimated scope**: 1 arquivo (`index.html`), `:root` + 2 seções

## Problema

**(a) Durações soltas.** As curvas viraram token (`--e-ui`, `--e-drawer`, `--e-pop`), mas as
durações continuam literais, com 8 valores distintos espalhados: `0.25s`, `0.3s` (41 usos), `0.35s`,
`0.4s`, `0.45s`, `0.5s`, `0.55s`, `0.6s`. AUDIT.md §7 trata escala de duração não consolidada como
achado de coesão: valores quase iguais digitados à mão divergem com o tempo.

**(b) Entradas em bloco sem escalonamento.** Duas seções onde a ordem *é* o conteúdo aparecem todas
de uma vez, porque a classe `.fi` está no contêiner e não nos filhos: o trilho de etapas
(`class="fi step-track"`, 6 células numeradas de 01 a 06) e os cartões de plano
(`class="fi g2"`, 2 cartões).

O trilho é uma sequência: escalonar conta a história do processo em vez de despejá-la. Os planos são
o momento da decisão: 80ms entre um e outro dá ordem de leitura. A página já faz isso em outros
lugares (`transition-delay` de 60/120/180ms nas colunas de comparação, 100ms entre os fan cards),
então o padrão existe e essas duas seções apenas não o usam.

## Alvo

```css
/* target — junto das curvas em :root */
--d-press: 0.16s;   /* retorno de toque */
--d-state: 0.3s;    /* hover e troca de estado */
--d-enter: 0.4s;    /* entrada por IntersectionObserver */
--d-travel: 0.45s;  /* deslocamento maior */
--d-panel: 0.6s;    /* painel do scroll-scrub */

/* target — escalonamento, logo depois da regra .fi */
.fi.stagger > * { opacity:0;transform:translateY(16px);transition:opacity var(--d-enter) var(--e-ui),transform var(--d-enter) var(--e-ui); }
.fi.stagger.up > * { opacity:1;transform:none; }
.fi.stagger > *:nth-child(2) { transition-delay:80ms; }
.fi.stagger > *:nth-child(3) { transition-delay:160ms; }
.fi.stagger > *:nth-child(4) { transition-delay:240ms; }
.fi.stagger > *:nth-child(5) { transition-delay:320ms; }
.fi.stagger > *:nth-child(6) { transition-delay:400ms; }
```

80ms está dentro da faixa de 30–80ms de AUDIT.md §7. O escalonamento é decorativo e **não pode
bloquear interação**: os filhos só recebem `opacity` e `transform`, nunca `pointer-events`.

## Convenções do repo a seguir

- Tokens ficam em `:root`, no mesmo bloco onde já estão `--e-ui`, `--e-drawer`, `--e-pop`, com
  comentário em português explicando o porquê. Exemplar a imitar: o comentário que já acompanha
  `--e-ui`.
- A classe `.fi` e a classe de estado `.up` já são o mecanismo de entrada do arquivo, aplicado por
  um `IntersectionObserver` compartilhado. **Não criar observer novo** — `.stagger` é só um
  modificador de `.fi` e entra junto com ela.
- `transition-delay` já é usado no arquivo nas colunas de comparação; seguir o mesmo formato, em ms.

## Passos

1. Em `:root`, logo depois de `--e-pop`, adicionar os 5 tokens de duração com o comentário.
2. Substituir as durações literais pelos tokens **apenas onde o mapeamento é exato**:
   `0.3s` para `var(--d-state)`, `0.4s` para `var(--d-enter)`, `0.45s` para `var(--d-travel)`,
   `0.6s` para `var(--d-panel)`. Deixar `0.25s`, `0.35s`, `0.5s`, `0.55s`, `0.08s`, `0.16s` e `1.8s`
   como estão: são valores de uso único, e forçá-los na escala mudaria o movimento em vez de
   consolidá-lo.
3. Adicionar o bloco `.fi.stagger` do alvo logo depois da regra `.fi` existente.
4. No markup, trocar `class="fi step-track"` por `class="fi stagger step-track"`.
5. No markup, trocar `class="fi g2"` por `class="fi stagger g2"` **apenas** no contêiner dos dois
   cartões de plano (o que tem `grid-template-columns:1fr 1fr;gap:2px` e contém `plan-card`).
6. No bloco `@media (prefers-reduced-motion: reduce)`, adicionar
   `.fi.stagger > * { opacity:1 !important;transform:none !important;transition-delay:0ms !important; }`.

## Fronteiras

- NÃO aplicar `.stagger` a nenhum outro `.fi` — só ao trilho e aos planos.
- NÃO trocar duração que não tenha correspondência exata na escala.
- NÃO mexer no `IntersectionObserver` nem em qualquer JavaScript.
- NÃO alterar a ordem dos elementos no markup.
- Se o contêiner dos planos já tiver outra classe além de `fi g2`, PARAR e reportar.

## Verificação

- **Mecânica**: no console, o valor computado de `--d-state` deve ser `0.3s`; deve haver 2
  elementos `.fi.stagger`; e o `transitionDelay` da quarta `.step-cell` deve ser `0.24s`.
- **Feel check**: rolar até "O que você recebe" e confirmar que as 6 células entram em cascata da
  esquerda para a direita, e não juntas. Em DevTools > Animations a 10% de velocidade, confirmar que
  a última célula termina cerca de 400ms depois da primeira. Confirmar que dá para clicar no CTA
  durante a cascata.
- **Done when**: as duas seções entram escalonadas, os tokens de duração existem e nenhum valor de
  movimento mudou fora do escopo.
