# STATE

> Sessões fechadas e seções antigas (texto integral) estão em `.specs/HISTORICO.md`; este arquivo guarda só o estado vivo.

## O que é este projeto
Landing page da **Cycle** (cliente) — consultoria estratégica de conteúdo. **`index.html` é a
produção**: está no ar pela Vercel e é editado direto. Nasceu como pacote de handoff, e o
`README.md` ainda descreve o projeto assim — está desatualizado.
Stack: **HTML + CSS + JS puro**, sem framework e sem bundler.

## Onde parei
- 2026-09-24 — **preço revela por card, não os dois juntos.** O botão global "Ver os valores" saiu;
  cada card tem o próprio "Ver o valor" no rodapé, que revela só aquele preço e depois desce para
  baixo do valor como "Ocultar" (fecha só aquele card). A nota abaixo dos cards volta ao texto
  fechado quando nenhum preço está aberto.
- **Scroll-video encurtado**: 560/420/340vh → 320/260/230vh (desktop / ≤900px / ≤560px). O dono
  achava que rolava demais; a suavidade vem do lerp de 0.12, não da altura. Snap por seção foi
  descartado (sequestra a rolagem, vídeo andaria aos saltos). **Falta o dono sentir no celular** se a
  medida ficou boa.
- **No ar**: deployment `1rsy1cizh`, alias `cycle-agency.vercel.app` reapontado, 200.
- Próximo passo: ajustar a altura do scroll-video se o dono ainda achar longo.
## Decisões
- **Peso 300 em display fica** — identidade Manrope Light do handoff, aprovada pela Cycle.
  Exceção ao piso da casa (≥600), escrita no `DESIGN.md` com escopo: só display, botão e corpo
  seguem o piso.
- **`--muted` vira cor decorativa**, não cor de texto. Hierarquia de cinza continua em três níveis
  (`--text` / `--mid` / `--muted`), mas o terceiro nível não escreve.
- **Destino Next.js + Tailwind** (padrão do README, cliente ainda não tem codebase).

## Próximo passo
- **Conferir no celular de verdade.** Esta build do `agent-browser` não tem emulação de viewport
  (`viewport` e `mobile` não existem), então o mobile foi conferido pelo CSSOM e não renderizado.
- **6,1 MB de assets órfãos em `uploads/`** (nenhum referenciado no HTML): `Design sem nome.mp4`
  (2,3 MB), `hero-video.mp4` e `Apresentacao inicial.mp4` (860 KB cada, sobras do hero antigo) e
  dois PNGs do ElevenLabs (2,2 MB). Apagar depende do dono dizer que não vai usar.
- **Nada pendente do lado do código.** O que resta é decisão de conteúdo com a Cycle: as seções
  "O que você recebe" e "Como funciona" descrevem processos que se sobrepõem (Diagnóstico e Captação
  aparecem nas duas). Visualmente já são bem diferentes — mapa horizontal vs. faixa no scroll-scrub —
  mas o texto ainda concorre. Sugestão: uma vira **o que se entrega** e a outra **como se trabalha**,
  com nomes vindos deles.
- Número de WhatsApp do CTA (`558293270904`) por confirmar com o cliente.
- Tracking negativo em display (`-0.02em` a `-0.03em`) passa de -0,5px em tamanhos grandes:
  assumido junto com o peso 300, mas marcado como "a confirmar" no `DESIGN.md`.
