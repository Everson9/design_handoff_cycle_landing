# Design Handoff — Cycle Landing Page

Este arquivo carrega em toda sessão — teto ~150 linhas; detalhe por assunto em `.specs/doutrina/`.

| arquivo | assunto | a regra que mais pega |
|---|---|---|
| `.specs/doutrina/01-front-inline.md` | doutrina de front (piso de legibilidade, movimento, skills, fonte) | tela/estilo/visual: ler front.md antes da primeira linha, sem o dono pedir; DESIGN.md trava vocabulario |
| `.specs/doutrina/02-custo-investimento.md` | custo/upgrade de plano (investimento.js): obrigatorio, escala, vale a pena, comprovantes, revisao | custo de cartao nao vira pendencia: registrar na hora com investimento.js add, sem chutar preco (omitir --custo) |


Pacote de handoff da landing da Cycle (consultoria de conteúdo premium): posicionamento, sistema de
trabalho, planos, cases e CTA pro WhatsApp. No ecossistema aparece como **design-handoff**.

## Contexto automático (ler no início da sessão, sem o usuário pedir)
1. Ler o `README.md` (é o handoff em si: fidelidade, assets, estrutura).
2. Design system em `_ds/`, imagens em `uploads/`.

- **Vídeos trazidos pelo dono:** ler `~/Vault/design-handoff/videos.md` se existir — links de YouTube/Instagram que a skill
  `video-nota` transcreveu e classificou pra este projeto. Cada entrada aponta pro `.md` completo em `~/Vault/_inbox/videos/`;
  É **pauta pra discutir com o dono**, não regra pra aplicar: ele decide ali o que entra, o que adapta e o que descarta. Abrir a transcrição só quando a conversa pedir. Gatilho: "tem vídeo pra discutir", "o que eu trouxe do radar", "vamos ver aquele vídeo".
- **Antes de codar feature nova:** feature nova, mudança de schema em banco com dado real,
  cobrança/assinatura, auth/permissão, migração ou integração nova com terceiro **não começa
  em código** — dispara a skill `plano-sob-fogo`: interrogatório de uma pergunta por vez, com
  `AskUserQuestion`, até fechar o `PLAN.md` em `.specs/planos/<slug>.md` (com **Fora de escopo**
  escrito) e o dono aprovar. Bug, ajuste de texto, rename e revisão de código pronto seguem
  direto, sem plano. Gatilhos: "me interroga", "testa meu plano", "planeja antes", "não codifica ainda".
- **FRONT — vale pra qualquer porta de entrada.** Conversa tocou em tela, estilo, cor, tipografia, animação ou "tá feio"? Ler `~/Vault/front.md` ANTES da primeira linha, sem o dono pedir; ler também `.specs/DESIGN.md` (sem ele e com front, escrever um antes de mexer). O dono NUNCA digita comando nem cita skill. Texto integral antigo: `.specs/doutrina/01-front-inline.md`.


## Regra que define este projeto
- **`index.html` É a produção.** Nasceu como pacote de handoff, mas a LP da Cycle está no ar a partir
  deste arquivo (Vercel, `.vercel/project.json`), e o histórico do git mostra ajuste fino feito direto
  nele. Editar aqui é editar o site.
- **Fica em HTML/CSS/JS puro. Decidido em 08/09/2026, não reabrir sem motivo novo.** Uma landing de
  uma tela, sem login, sem dados e sem estado não ganha nada com React/Next: o custo real seria
  reescrever as animações de scroll (`IntersectionObserver` e o scrub de vídeo por `currentTime`) em
  `useRef` + `requestAnimationFrame`, que é exatamente onde esse tipo de coisa quebra em React.
  Só reabrir se a Cycle virar site de várias páginas, blog ou área logada.
- **O runtime do handoff foi arrancado** (08/09/2026): `support.js` (60 KB), `_ds/_ds_bundle.js`
  (24 KB), as tags `<x-dc>`/`<helmet>` e o `<template id="__bundler_thumbnail">`. Existiam só para
  hidratar uma página estática. **Não reintroduzir**, e não tratar mais `support.js` como intocável:
  ele não existe.
- O gargalo desta LP é **peso de mídia**, não JavaScript. Antes de "otimizar" código, olhar `uploads/`.

## Ao encerrar / pausar (fazer sem o usuário pedir)
1. Atualizar `.specs/STATE.md`: o que foi feito, o que ficou aberto, próximo passo.
2. Atualizar `~/Vault/pendencias.md` (seção deste projeto) — **ler o arquivo antes de escrever.** Item que já está `[x]` ou sumiu de lá foi fechado pelo dono no painel (vem carimbado *feita pelo dono no painel*): é palavra final — não reabrir nem recriar a partir do STATE; refletir o fechamento no STATE do projeto. Antes de escrever pendência nova, **reler cada `[ ]` da seção contra o que o STATE diz que foi feito hoje**: item que o STATE fecha, o vault fecha junto, com nota do que provou (commit/migration/arquivo) — senão STATE e vault discordam (aconteceu em 28/08: DPAs feitos no commit, `[ ]` no vault). O `encerra.js` cruza `[ ]` × commits × STATE e solta `AVISO` por item suspeito: responder a cada um, fechando ou dizendo por que fica, e rodar de novo com `--avisos-lidos` (sem isso AVISO é FALTA). Item novo: uma linha só, sem quebrar em 80 colunas. **Mexer nisso é pelo `pend.js`, não editando o arquivo à mão:** `node ~/Vault/scripts/pend.js listar --projeto design-handoff` (ver o que está aberto), `pend.js feito "<trecho>" --nota "<o que provou>"` (fechar — ele recusa sem a prova), `pend.js add "<texto>" --projeto design-handoff` (abrir, sempre na seção canônica do projeto), `pend.js pular|mover|apagar`. Ele acha o item pelo texto, para quando ficar ambíguo e regenera o painel; edição à mão em 850 linhas foi como o vault e o painel se desencontraram.
3. Aprendizado reusável → `~/Vault/design-handoff/RESUMO.md` (a regra destilada, com o porquê).
4. **Rodar `node ~/Vault/scripts/encerra.js --msg "<o que mudou e por quê>"`** — gate mecânico: confere se STATE e pendências foram tocados, roda o sync (backup no GitHub + painel) e commita/empurra o projeto com essa mensagem. Linha `FALTA` na saída = corrigir e rodar de novo; **não** dizer que encerrou enquanto houver FALTA.
5. Repassar as linhas do `encerra.js` ao dono.
6. Mostrar em 3 linhas o que gravou, pra confirmar.

## Custo / upgrade de plano — vai pro PAINEL, não pras pendências
Algo que se resolve com CARTÃO e não com código: registrar na hora, sem perguntar. Detalhe (3 leituras, assinei/paguei, comprovantes, revisão): `.specs/doutrina/02-custo-investimento.md`.

```
node ~/Vault/scripts/investimento.js add "<o quê>" --projeto design-handoff --plataforma "<serviço>" --gatilho "<o que faz o custo aparecer>" --quando agora|lancamento|crescer|futuro [--custo N --moeda USD|BRL] [--ciclo unico|mensal|anual|variavel] [--de "<plano de hoje>" --para "<plano depois>"] [--porque "<por quê>"] [--conferir]
```

- **Não sabe o preço: omitir `--custo`.** `--gatilho` é obrigatório. Isso **não** entra no `pendencias.md`.

## GATILHOS (agir automático, sem pedir detalhes)
- **Pendência mexe NA HORA, pelo `pend.js`** — fechou algo agora: `node ~/Vault/scripts/pend.js feito "<trecho>" --nota "<o que provou>"`; apareceu coisa nova: `pend.js add "<texto>" --projeto design-handoff`; "o que tá aberto": `pend.js listar --projeto design-handoff`. Não guardar pro encerramento: sessão que acaba sem "encerra" leva junto tudo que só estava na cabeça dela.
Quando o usuário disser "encerra", "vou fechar", "fim", "tchau", "vou sair", "salva aí" ou "parar por aqui":
executar os 6 passos acima SOZINHO. Não perguntar "quer que eu atualize o STATE?" — o gatilho JÁ é a autorização.

Quando disser "por onde paramos", "oi", "resume" ou "bom dia": ler o STATE e dar contexto + próximo passo,
sem ele precisar pedir os detalhes.

## Ecossistema
Memória em `~/Vault` (backup: github hxdgDES/vault-cerebro). Notas deste projeto em `~/Vault/design-handoff/`.
Painel de controle do ecossistema: `~/Desktop/jarvis`. Guia de uso: `~/Vault/COMO-USAR.md`.

## Outro motor — quando NÃO é o Claude que faz
Doutrina: `~/Vault/delegacao.md`. Um lembrete mecânico dispara sozinho (`delegar.js hook`), mas a decisão é sua.
- **Revisar código → sempre outro motor.** `codex exec "revisa <alvo>: bug, regressão, segurança"`
  ou o subagente `codex:codex-rescue`. Auto-revisão é o pior caso conhecido: o autor defende o que escreveu.
- **Changelog / doc externa / versão nova → `opencode run "<pergunta>"`** (Nemotron, fora da cota do plano).
- **Varredura ampla → script primeiro.** Extrai e filtra com grep/script; o modelo julga a lista curta.
- **Classificar/extrair/resumir em lote → `node ~/Vault/scripts/roteador.js <classe> --prompt - --json`.**
- **Paralelo só com contrato fechado**, um escritor por pasta (worktree). `~/Vault` é compartilhado.

**Dentro da Orca, delegacao abre TERMINAL — nao roda escondido na sessao.**

```
node ~/Vault/scripts/delegar-terminal.js abrir codex "revisa <alvo>: bug, regressao, seguranca"
node ~/Vault/scripts/delegar-terminal.js abrir opencode "<pergunta longa / changelog / doc>"
```

Duas razoes, as duas medidas: no app **mobile** da Orca a chamada do Codex por dentro da
sessao **travava a tela**; e delegacao invisivel nao se audita — o dono lia "chamei o Codex"
e tinha que acreditar. No terminal ele le a saida inteira, rola, copia e mata se quiser.
Um terminal por motor/worktree, reusado a sessao toda; o `encerra.js` fecha o que abriu.
Fora da Orca (sem `ORCA_TERMINAL_HANDLE`), segue valendo `codex exec` / `opencode run` direto.

