> Texto integral que estava no AGENTS.md ate 2026-11-05.

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

