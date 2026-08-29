# floks-beta

The **membership site** for Floks Agent Computers.

- Public crews stay in [`Adaptive-Liquidity/Floks`](https://github.com/Adaptive-Liquidity/Floks) (no login).
- Isolated machines stay in [`Adaptive-Liquidity/floks-pc`](https://github.com/Adaptive-Liquidity/floks-pc) (MCP, not a website).
- This repo is the front door: explain the product, collect interest, later register / login / desk / pair.

## Now

Shipped here: landing, how pairing works, what a computer is, honest limits, a local waitlist form (browser only).

## Next (do not pretend these work)

1. Magic-link register / login
2. Waitlist → human approve (does not mint a machine)
3. Desk: one computer, screenshot, idle/cost warning
4. One-time pair code for Grok MCP
5. Glue to floks-pc over HTTPS (never publish the operator console)

## Run

```bash
npm install
npm run dev      # http://127.0.0.1:5173
npm run build
```

Do not commit secrets. Do not show capability tokens or provider IDs. Eight MCP tools stay in Grok.
