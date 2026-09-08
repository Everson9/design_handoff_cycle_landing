# Planos de movimento — LP da Cycle

Gerados pela auditoria de movimento sobre `index.html` no commit `4893933`.

**Todos aplicados e verificados no browser em 2026-09-08.**

Ordem de execução: 001 e 002 são independentes entre si; 003 vem depois de 002 (precisa saber que o
retorno de toque existe, para não desligá-lo); 004 vem por último porque também escreve no bloco de
movimento reduzido que 003 reescreve.

| # | Plano | Severidade | Depende de | Status |
| --- | --- | --- | --- | --- |
| 001 | [Gatear hover atrás de hover: hover](001-gate-hover-ponteiro.md) | HIGH | — | DONE |
| 002 | [Retorno de toque nos controles](002-retorno-de-toque.md) | HIGH | — | DONE |
| 003 | [Movimento reduzido sem nuke](003-movimento-reduzido.md) | MEDIUM | 002 | DONE |
| 004 | [Tokens de duração e escalonamento](004-tokens-e-escalonamento.md) | MEDIUM | 003 | DONE |

## O que a auditoria NÃO encontrou

Vale registrar, porque limita o escopo de futuras rodadas: zero `transition: all`, zero `ease-in`,
zero `scale(0)`, nenhuma propriedade de layout animada, marquee em `linear` (correto), curvas já
tokenizadas, e escalonamento já existente nas colunas de comparação e nos fan cards.
