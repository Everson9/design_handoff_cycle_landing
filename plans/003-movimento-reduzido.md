# 003 — Movimento reduzido: tirar deslocamento, manter retorno

- **Status**: DONE (aplicado em 2026-09-08, verificado no browser)
- **Commit**: 4893933
- **Severity**: MEDIUM
- **Category**: Acessibilidade (AUDIT.md §6)
- **Estimated scope**: 1 arquivo (`index.html`), 1 bloco de media query

## Problema

O bloco de movimento reduzido zera **toda** transição da página com um seletor universal:

```css
/* index.html — atual */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .fi, .slide-left, .slide-right { opacity:1 !important;transform:none !important; }
  .marquee-track { animation: none !important; }
  .phone-frame:hover { transform:none !important; }
}
```

AUDIT.md §6 é explícito: movimento reduzido significa animação *mais suave e em menor quantidade*,
não zero — transições que ajudam a compreender ficam, mudanças de posição saem. Do jeito que está,
quem marcou a preferência perde também o fade do hover da navbar, a troca de cor dos links, o
aparecimento do botão de fechar o vídeo e o retorno de toque do plano 002 — feedback que **ajuda** a
entender a interface e não causa enjoo. A página passa a piscar de estado em estado.

## Alvo

Matar deslocamento e escala; preservar opacidade e cor.

```css
/* target */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }

  /* Fica: fade e mudança de cor. Sai: qualquer coisa que se desloque. */
  *, *::before, *::after {
    transition-property: opacity, color, background-color, border-color, box-shadow, backdrop-filter !important;
    transition-duration: 0.2s !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }

  .fi, .slide-left, .slide-right { opacity:1 !important;transform:none !important; }
  .marquee-track { animation: none !important; }
  .fan-card { transform:none !important; }
  .phone-frame:hover, .plan-card:hover, .process-item:hover,
  .diff-card:hover, .step-row:hover, .phone-screen:hover .phone-poster { transform:none !important; }
}
```

Trocar `transition-duration: 0.01ms` por uma lista de `transition-property` é o que preserva o fade:
propriedades fora da lista simplesmente não transicionam, e as de dentro continuam suaves em 200ms.

## Convenções do repo a seguir

- O bloco `@media (prefers-reduced-motion: reduce)` é o último do `<style>` e já tem comentário
  explicando o porquê, em português. Manter o comentário e estender a explicação.
- Curvas são token (`var(--e-ui)`), mas aqui a duração é fixa em `0.2s` de propósito: é um atalho de
  acessibilidade, não parte da escala de movimento da casa.

## Passos

1. Substituir o bloco `*, *::before, *::after { ... }` dentro da media query pelo bloco alvo acima.
2. Acrescentar `.fan-card { transform:none !important; }` — hoje os fan cards ainda giram e
   deslizam sob movimento reduzido, porque a animação deles é aplicada por JavaScript em
   `style.transform`, que o seletor universal não alcançava.
3. Estender a lista de `:hover` neutralizados para os 6 seletores que movem (ver alvo).
4. Atualizar o comentário do bloco para dizer que fade e cor ficam, deslocamento sai.

## Fronteiras

- NÃO remover o guarda de `prefersReducedMotion` que já existe no JavaScript (o que congela o
  scroll-scrub e desliga o `translateY` dos painéis). Este plano é só CSS.
- NÃO mexer em `scroll-behavior`.
- NÃO desligar o `:active` de retorno de toque do plano 002 — é feedback, não deslocamento.
- NÃO adicionar dependência.

## Verificação

- **Mecânica**: no DevTools > Rendering, marcar `prefers-reduced-motion: reduce`. A
  `transitionProperty` computada de `.nav-cta` deve listar `opacity` e `color`, e **não**
  `transform`.
- **Feel check**: com movimento reduzido ligado, rolar a página inteira e confirmar que
  (a) nada desliza nem gira, (b) os fan cards aparecem parados, sem arco, (c) o hover do CTA da
  navbar **ainda** troca de cor suavemente, (d) o scroll-scrub fica no primeiro frame.
- **Done when**: zero deslocamento, mas a página ainda dá retorno visual ao mouse e ao toque.
