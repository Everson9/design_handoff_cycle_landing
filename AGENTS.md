# Design Handoff — Cycle Landing Page

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
- **FRONT — vale pra qualquer porta de entrada.** Se a conversa envolve tela, componente,
  layout, estilo, cor, tipografia, animação, ícone, responsivo ou "tá feio/genérico" —
  **em qualquer forma**: reparo de bug visual, ajuste, restyle, reimplementação, refatoração,
  feature nova, tela nova, componente novo, projeto novo, ou o dono só comentando o visual —
  a sessão **carrega o contexto de front ANTES de escrever a primeira linha**, sem o dono pedir:
  1. **`.specs/DESIGN.md`** — paleta, escala de texto, escala de movimento, estado de componente,
     tela vazia/erro. Valor visual que não está lá **não se inventa no arquivo de tela**: ou entra
     no `DESIGN.md` primeiro (com o motivo), ou usa o que já existe.
     **Não existe `DESIGN.md` e o projeto tem front? Escrever um ANTES de mexer** — extraindo do
     código o que já está decidido e perguntando ao dono o que falta, com a skill `plano-sob-fogo`.
  2. **`.specs/codebase/CONVENTIONS.md`** — o que já está certo neste projeto e não se "conserta",
     e o que é proibido aqui.
  3. **Skill certa pro caso:** `frontend-design` (direção visual de tela ou fluxo novo) ·
     `svg-draw` (ícone, ilustração, mascote, diagrama, dar vida a elemento) · `svg-animations`
     (consulta de sintaxe SVG/SMIL) · `animate` (motion de UI: entra/sai, hover, drawer, toast, transição — decide SE anima antes de escrever) · `improve-animations` (auditar o movimento de uma tela/app pronto e sair com plano) · `review-animations` (revisar diff de motion, só sob pedido) ·
     `web-perf` (tela lenta, Core Web Vitals) ·
     `agent-browser` / `agent-browser-dogfood` (conferir a tela depois de pronta, nunca antes).
  **Piso de legibilidade — vale em TODO projeto, o modelo não fura sem perguntar.**
  A estética que a IA produz por padrão é fina, pequena, com tracking negativo largo e
  cinza sobre cinza: fica bonita em print e é ruim de ler no celular. Aqui não entra.
  - **Peso mínimo 600.** Peso 300 e 400 são proibidos em título e em botão.
  - **Corpo nunca abaixo de 15px**; texto de apoio nunca abaixo de 11px.
  - **`letterSpacing` negativo no máximo -0.5px**, e só acima de 24px.
  - **Contraste do texto principal ≥ 4.5:1.** Cinza sobre cinza é reprovado.
  - **`line-height` 1.4 no corpo.**
  Quer furar o piso num caso específico? **Pergunta antes**, com o motivo — não fura calado.
  **Piso de movimento — vale em TODO projeto** (tabelas do Emil Kowalski, skills `animate`/`review-animations`): ação vista 100+ vezes/dia ou disparada por teclado **não anima**; entra/sai usa `ease-out` (**`ease-in` em UI é proibido**), movimento na tela usa `ease-in-out`; curva forte, não a do navegador — `cubic-bezier(0.23, 1, 0.32, 1)` em UI, `cubic-bezier(0.32, 0.72, 0, 1)` em drawer; **UI abaixo de 300ms** (tooltip 125–200, dropdown 150–250, modal/drawer 200–500); **nunca `scale(0)`** — entra de `scale(0.9–0.97)` + opacity, e popover escala a partir do gatilho (modal fica no centro); `prefers-reduced-motion` sai junto com a animação, nunca depois. Valor de movimento decidido num projeto vira degrau da **escala de movimento** no `.specs/DESIGN.md`, não fica solto no arquivo de tela.
**O dono NUNCA digita comando nem cita nome de skill.** "faz essa feature", "muda isso na LP", "cria uma LP nova", "tá feio" — o pedido já É o gatilho: a sessão carrega `DESIGN.md`/`CONVENTIONS.md` e as skills sozinha, e se o projeto não tem `DESIGN.md` ela escreve antes de tocar em tela. **Antes de dar tela por pronta**, ela mesma revisa o movimento contra o piso (skill `review-animations`) e o texto contra o piso de legibilidade, e conserta o que reprovar — sem pedir, sem perguntar se pode. **Medido em 08/09: a `description` do `improve-animations` NAO dispara sozinha** — pedido do tipo "as animacoes tao ruins, me diz o que ta errado" foi respondido sem a skill. Entao a sessao **carrega ela explicitamente** sempre que o pedido for auditar, melhorar ou reclamar de movimento ("ta duro", "ta travado", "anima feio", "audita o movimento"), em vez de esperar o gatilho automatico. **Neste projeto, e só aqui, o `impeccable` está EM TESTE** (`.claude/skills/impeccable/`, fora do git): quando a sessão terminar uma tela ou um bloco visual, ela roda sozinha a crítica dele (`/impeccable critique <alvo>`) e trata o resultado como **parecer, não ordem** — o que contradiz o `.specs/DESIGN.md` ou o piso da casa é descartado com uma linha de motivo, o que acrescenta vira emenda no `.specs/DESIGN.md`. O `DESIGN.md` que ele quiser escrever na raiz fica separado, como material do teste; **o arquivo com autoridade continua sendo `.specs/DESIGN.md`**. O veredito do teste se fecha no `RADAR.md`.
  **Escolha de fonte, quando não existe `DESIGN.md`:** herda o que a casa já usa —
  **Barlow Condensed** em app/produto, **Poppins** em LP de venda, **pilha do sistema**
  em painel interno. Fonte diferente disso **não entra sozinha**: a sessão pergunta antes,
  mostrando 2 ou 3 opções com amostra do texto real do projeto.
  **O `DESIGN.md` trava vocabulário, não composição.** Layout, hierarquia, o que é grande e o que
  some, o que se move e por quê, densidade, quebrar a grade de propósito — é tudo da sessão, e ela
  deve ousar. Achou que a escala atrapalha o que a tela precisa ser? O defeito é da escala: propor
  a emenda no `DESIGN.md`, nunca contornar no arquivo de tela.

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
Quando aparecer algo que se resolve com CARTÃO e não com código — conta de loja, plano que vai ter
que subir (Free → Pro), domínio, taxa de gateway, ferramenta paga, limite de plano chegando perto —
registrar na hora, sem perguntar:

```
node ~/Vault/scripts/investimento.js add "<o quê>" --projeto design-handoff --plataforma "<serviço>" --gatilho "<o que faz o custo aparecer>" --quando agora|lancamento|crescer|futuro [--custo N --moeda USD|BRL] [--ciclo unico|mensal|anual|variavel] [--de "<plano de hoje>" --para "<plano depois>"] [--porque "<por quê>"] [--conferir]
```

- **Não sabe o preço: omitir `--custo`.** O item entra sem valor, fica fora das somas e o painel diz
  quantos ficaram de fora. Chutar valor estraga o único número que essa tela tem pra dar.
- Preço lembrado de cabeça: `--conferir`, que marca "conferir preço" na tela.
- `--gatilho` é obrigatório: é ele que diz se o custo é de hoje ou de um dia. Sem ele a lista vira medo.
- Isso **não** entra no `pendencias.md`. Pendência se fecha com código; isso se fecha pagando, e no dia certo.
- O comando já regenera o `PAINEL.html`: aparece na aba **Investimentos** e no card **custo que vem** deste projeto.


**Três leituras diferentes — declarar qual delas o item responde:**

- **Obrigatório** (`--obrigatorio`): sem isso o app não lança nem pode cobrar. Não há decisão a
  tomar, só a data de pagar. Ex: conta da Play, Vercel Pro (o Hobby proíbe uso comercial).
- **Escala** (`--assinantes N`): só entra quando a base chegar em N assinaturas **ativas**.
  Enquanto não chega, esse dinheiro não existe. O painel monta a escada e mostra o total de cada
  degrau já somado ao obrigatório.
- **Vale a pena** (nem um nem outro): é decisão de produto, e ela se toma AQUI dentro, olhando o
  SaaS — não no painel. Quando decidir, gravar o veredito com o motivo:

```
node ~/Vault/scripts/investimento.js decidir "<parte do nome>" --vale sim|nao|depois --porque "<o motivo, olhando este produto>" --quando "<o que faz revisitar>" --por "sessão design-handoff"
```

`--porque` é obrigatório: veredito sem motivo escrito volta como dúvida daqui a duas semanas. O
painel mostra o selo (vale a pena / não vale / fica pra depois) e o motivo junto do item, e conta
quantos ainda estão **sem veredito** — é o que sobra pra decidir.


**Gatilho — "faz o plano financeiro de plataformas" / "monta o plano de custos":**

1. `node ~/Vault/scripts/investimento.js plano --projeto design-handoff` — cria a base inteira já
   classificada (obrigatório / escala / decisão), com gatilho e motivo em cada item. Não duplica:
   pula o que já existe pra aquela plataforma.
2. `node ~/Vault/scripts/investimento.js revisar --projeto design-handoff --medir` — mede o banco de
   produção e separa o que só o dono confirma. **Perguntar o que não dá pra medir**, e corrigir os
   itens (`add` com o mesmo nome atualiza).
3. O que for decisão de produto: decidir aqui dentro e gravar com `decidir --vale ... --porque ...`.
4. Fechar em três linhas: obrigatório pra lançar, primeiro degrau de escala, o que ficou sem decidir.

**Gatilho — "assinei X" / "paguei X" / "contratei X":**

```
node ~/Vault/scripts/investimento.js assinei "<parte do nome>" --em AAAA-MM-DD [--valor N] [--proximo AAAA-MM-DD]
node ~/Vault/scripts/investimento.js paguei  "<parte do nome>" [--em AAAA-MM-DD] [--valor N]
```

Isso muda o item de previsão pra **cobrança viva**: entra no calendário de 12 meses do painel e
passa a avisar por notificação do Windows 60, 30, 10, 5, 3, 2 e 1 dia antes quando é **anual** (domínio, conta de loja: renovar leva dias, e domínio que expira derruba o app junto) e 5, 3, 2 e 1 dia antes quando é mensal — no dia, e todo dia enquanto
estiver atrasado (tarefa `Cobrancas_9h`). Sem a data, o painel marca o item como *sem data de
cobrança* e diz, na cara, que o aviso não sai — pago sem data é pior que não registrado.

Ver o que vem: `node ~/Vault/scripts/investimento.js vencimentos --projeto design-handoff`.


**Antes de perguntar preço/data ao dono: procurar o comprovante.**

```
python ~/Vault/scripts/comprovantes.py --dias 540 [--plataforma hostinger] [--conta gmail-pessoal.json]
```

Varre a caixa por IMAP atrás de recibo de plataforma (Hostinger, Play, Vercel, Supabase, Expo,
Apple, Stripe/Asaas, Cloudflare, Brevo) e devolve **data + valor**. O dado de "quanto pagou e
quando" não está no código nem no banco: está no recibo. Perguntar isso pro dono é o pior
caminho — ele não lembra, e o que lembra costuma vir errado.

Achou? Grava com `investimento.js paguei "<item>" --em <data> --valor <N>`. **Confira o valor no
próprio email antes de gravar** — o número é extraído por padrão de texto e pode pegar o valor errado
(imposto, total de outra linha). Não achou, não invente: pergunte, e diga onde procurou.

O cofre padrão (`~/.jarvis-secrets/gmail.json`) é a caixa do SaaS. Recibo de domínio e de loja
costuma cair no email **pessoal** — nesse caso é preciso um segundo cofre e `--conta`.

**Gatilho — "revisa os custos" / "o que eu tenho que pagar" / "quanto isso vai me custar":**

1. `node ~/Vault/scripts/investimento.js revisar --projeto design-handoff --medir`
   O `--medir` consulta o banco de produção pela Supabase CLI linkada (sem senha) e diz o quão
   longe o gatilho do plano Free está — tamanho do banco e usuários ativos em 30 dias. Em projeto
   sem Supabase linkada, essa parte só avisa que a query não rodou; o resto da revisão vale igual.
2. A lista **[1]** é o que só o dono confirma: preço de hoje na conta da plataforma e se a conta já
   existe. Perguntar, não chutar — e o que dá pra medir, medir.
3. Corrigir com `investimento.js add "<nome exato>"` (mesmo nome atualiza, não duplica) ou
   `investimento.js pago "<parte do nome>"`. O painel se regenera sozinho.
4. Fechar em três linhas: o que muda hoje, o que muda no lançamento, o que ainda não dá pra saber.

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

