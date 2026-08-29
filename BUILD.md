# Build

## Shipped

| Page | Status |
|------|--------|
| `/` landing | yes |
| `/how` pairing | yes |
| `/computer` what it is | yes |
| `/limitations` honest no | yes |
| `/beta` local email note | mock only (localStorage) |

## Not shipped

| Work | Notes |
|------|--------|
| Magic-link auth | Register / login. Better Auth or equivalent. |
| Durable waitlist | Server + human approve. Form must not provision. |
| Desk | One computer, screenshot, state, cost warning. |
| Pair once | MCP URL + code shown once. Never show capability token. |
| HTTPS glue to floks-pc | User API, not operator routes. |
| Hosting / domain | `beta.` or `computers.` hostname. |

## Order

Landing (done) → real `/beta` auth → waitlist API → desk → pair → host.
