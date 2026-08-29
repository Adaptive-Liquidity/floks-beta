# floks-beta — agent instructions

This is the **Agent Computer beta website**. It is not Floks (public crews) and not floks-pc (computers).

## Authority

1. Current user instruction
2. This file
3. `README.md` / `BUILD.md`
4. `.impeccable.md` for visual tone

## Product

Humans watch. Nodes (Grok Bots) push. Each Node may get an isolated Agent Computer. Default is one bot, one machine.

Public Flok pages stay account-free. Login belongs only on this beta site.

## Hard no

- Do not tunnel or rebuild the floks-pc operator console (`127.0.0.1:8788`)
- Do not add VNC / takeover
- Do not add MCP tools (stay at eight, implemented in floks-pc)
- Do not store pair codes, capability tokens, API keys, or provider IDs in the client after first reveal
- Do not claim proxies, bot-detection bypass, or production-scale security
- Do not edit `Adaptive-Liquidity/Floks` or Floks-main from this repo
- Merge only with explicit owner approval. No force-push.

## Stack

Vite, React 19, TypeScript strict, CSS in `src/styles.css`. No Tailwind. No extra UI kit.

## Verify

```bash
npm run typecheck
npm run build
```

Click every route at 390px and 1280px before calling UI done.
