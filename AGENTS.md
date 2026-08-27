# Design Handoff — Cycle Landing Page

Pacote de handoff da landing da Cycle (consultoria de conteúdo premium): posicionamento, sistema de
trabalho, planos, cases e CTA pro WhatsApp. No ecossistema aparece como **design-handoff**.

## Contexto automático (ler no início da sessão, sem o usuário pedir)
1. Ler o `README.md` (é o handoff em si: fidelidade, assets, estrutura).
2. Design system em `_ds/`, imagens em `uploads/`.

## Regra que define este projeto
- **O HTML aqui é protótipo de referência, NÃO é código de produção.** `index.html` e `support.js` existem
  pra mostrar o resultado pixel-perfect — cor, tipografia, espaçamento, interação.
- A tarefa é **recriar** esse design no codebase de destino, com as bibliotecas que ele já usa.
  Copiar o HTML direto pra produção é usar o handoff errado.
- Sem codebase de destino definido, o padrão recomendado é **Next.js + Tailwind**.

## Ao encerrar / pausar (fazer sem o usuário pedir)
1. Atualizar `.specs/STATE.md`: o que foi feito, o que ficou aberto, próximo passo.
2. Atualizar `~/Vault/pendencias.md` (seção deste projeto).
3. Aprendizado reusável → `~/Vault/design-handoff/RESUMO.md` (a regra destilada, com o porquê).
4. **Rodar `node ~/Vault/scripts/sync-vault.js`.** Sem isto, tudo que a sessão gravou fica só nesta máquina, sem backup no GitHub.
5. Se houve mudança versionável no projeto, commitar e empurrar.
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
Quando o usuário disser "encerra", "vou fechar", "fim", "tchau", "vou sair", "salva aí" ou "parar por aqui":
executar os 6 passos acima SOZINHO. Não perguntar "quer que eu atualize o STATE?" — o gatilho JÁ é a autorização.

Quando disser "por onde paramos", "oi", "resume" ou "bom dia": ler o STATE e dar contexto + próximo passo,
sem ele precisar pedir os detalhes.

## Ecossistema
Memória em `~/Vault` (backup: github hxdgDES/vault-cerebro). Notas deste projeto em `~/Vault/design-handoff/`.
Painel de controle do ecossistema: `~/Desktop/jarvis`. Guia de uso: `~/Vault/COMO-USAR.md`.
