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

## GATILHOS (agir automático, sem pedir detalhes)
Quando o usuário disser "encerra", "vou fechar", "fim", "tchau", "vou sair", "salva aí" ou "parar por aqui":
executar os 6 passos acima SOZINHO. Não perguntar "quer que eu atualize o STATE?" — o gatilho JÁ é a autorização.

Quando disser "por onde paramos", "oi", "resume" ou "bom dia": ler o STATE e dar contexto + próximo passo,
sem ele precisar pedir os detalhes.

## Ecossistema
Memória em `~/Vault` (backup: github hxdgDES/vault-cerebro). Notas deste projeto em `~/Vault/design-handoff/`.
Painel de controle do ecossistema: `~/Desktop/jarvis`. Guia de uso: `~/Vault/COMO-USAR.md`.
