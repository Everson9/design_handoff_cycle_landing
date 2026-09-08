# 002 — Dar retorno de toque (`:active`) aos controles

- **Status**: DONE (aplicado em 2026-09-08, verificado no browser)
- **Commit**: 4893933
- **Severity**: HIGH
- **Category**: Fisicalidade (AUDIT.md §3)
- **Estimated scope**: 1 arquivo (`index.html`), 4 controles

## Problema

O arquivo tem **zero** ocorrências de `:active`. Nenhum botão da página responde ao momento do
toque: o usuário aperta e nada acontece até a ação terminar. Numa LP cujo único objetivo é o clique
no CTA de WhatsApp, esse é o controle que mais precisa confirmar que registrou o toque.

Controles sem retorno de pressão:

```css
/* index.html:40 — CTA da navbar */
.nav-cta { ...;padding:10px 24px;border-radius:100px;transition:background 0.3s var(--e-ui),color 0.3s var(--e-ui); }
/* index.html:106 — botão de play do case */
.play-btn { width:52px;height:52px;border-radius:50%;...;transition:border-color 0.3s var(--e-ui),background 0.3s var(--e-ui); }
/* index.html:128 — botão de fechar o vídeo */
.phone-close { position:absolute;top:10px;right:10px;...;transition:background 0.3s var(--e-ui),border-color 0.3s var(--e-ui); }
```

E o CTA de WhatsApp, que é um elemento `a` inline no markup com `background:var(--blue)` e
`border-radius:100px`.

## Alvo

`scale(0.97)` no `:active`, com transição de `160ms` na curva de UI da casa. Valor exato de
AUDIT.md §3 (faixa permitida 0.95–0.98).

```css
/* target — bloco novo, depois de .phone-close:focus-visible */
.nav-cta:active, .play-btn:active, .phone-close:active, .wa-cta:active { transform:scale(0.97); }
```

Cada um dos quatro precisa ter `transform 0.16s var(--e-ui)` **acrescentado** à lista de
`transition` que já existe na sua regra — nunca substituindo a lista.

O CTA de WhatsApp não tem classe hoje. Adicionar `class="wa-cta"` ao elemento `a` que aponta para
`wa.me` na seção de CTA final — é a única mudança de markup autorizada por este plano. Ele tem
`style=` inline; adicionar a `transition` de transform lá dentro.

## Convenções do repo a seguir

- Curvas são token: `var(--e-ui)` = `cubic-bezier(0.23, 1, 0.32, 1)`. **Nunca** escrever a curva
  literal numa regra nova.
- Exemplar de transição já correta no arquivo: a regra de `.step-cell`, que transiciona só
  `background` em `0.3s var(--e-ui)`.
- Estilos de componente ficam no `<style>` do `<head>`; o markup usa classe quando o estilo se
  repete e `style=` inline quando é de uso único.

## Passos

1. Adicionar `class="wa-cta"` ao elemento `a` do WhatsApp na seção de CTA final (o que tem
   `background:var(--blue)` e `padding:16px 40px`). Não remover nem alterar o resto do `style=`.
2. No `style=` inline desse mesmo elemento, acrescentar `transform 0.16s var(--e-ui)` à `transition`
   que já está lá.
3. Acrescentar `transform 0.16s var(--e-ui)` à lista de `transition` de `.nav-cta`, `.play-btn` e
   `.phone-close`, nas regras que já existem.
4. Adicionar, logo depois da regra `.phone-close:focus-visible`, a linha:
   `.nav-cta:active, .play-btn:active, .phone-close:active, .wa-cta:active { transform:scale(0.97); }`
5. **Não** neutralizar esse `:active` sob movimento reduzido. Retorno de pressão é feedback, não
   deslocamento decorativo; AUDIT.md §6 manda preservá-lo.

## Fronteiras

- NÃO adicionar `:active` a link de navegação, card ou qualquer coisa que não seja botão/CTA.
- NÃO mudar cor, tamanho, padding ou raio de nenhum controle.
- NÃO passar de `scale(0.97)`; 0.9 vira brinquedo.
- NÃO tocar em JavaScript.
- Se `.wa-cta` já existir no arquivo, PARAR e reportar.

## Verificação

- **Mecânica**: no console, a contagem de `.wa-cta` deve ser 1, e a `transitionProperty` computada
  de `.nav-cta` deve conter `transform`.
- **Feel check**: segurar o mouse pressionado sobre o CTA da navbar e confirmar que ele encolhe de
  leve e volta ao soltar. No DevTools > Animations com playback a 10%, confirmar que o encolhimento
  não passa de 160ms e não tem bounce.
- **Done when**: os 4 controles respondem ao pressionar, e nada mais na página mudou.
