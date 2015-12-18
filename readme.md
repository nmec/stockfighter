# Stockfighter

Node.js lib and solutions for [Stockfighter](https://www.stockfighter.io).

## Todo

- [x] Full Trading REST API coverage
  - [x] GET `/heartbeat`
  - [x] GET `/venues/:venue/heartbeat`
  - [x] GET `/venues/:venue/stocks`
  - [x] GET `/venues/:venue/stocks/:stock`
  - [x] POST `/venues/:venue/stocks/:stock/orders`
  - [x] GET `/venues/:venue/stocks/:stock/quote`
  - [x] GET `/venues/:venue/stocks/:stock/orders/:order`
  - [x] DELETE `/venues/:venue/stocks/:stock/orders/:order`
  - [x] GET `/venues/:venue/accounts/:account/orders`
  - [x] GET `/venues/:venue/accounts/:account/stocks/:stock/orders`
- [x] Full Public WS API coverage
  - [x] `/ws/:trading_account/venues/:venue/tickertape`
  - [x] `/ws/:trading_account/venues/:venue/executions`
- [ ] Full GM REST API coverage
  - [ ] POST `/gm/levels/:level`
  - [ ] POST `/gm/instances/:instance/restart`
  - [ ] POST `/gm/instances/:instance/stop`
  - [ ] POST `/gm/instances/:instance/resume`
  - [ ] GET `/gm/instances/:instance`
- [ ] Level solutions
  - [ ] 1
  - [ ] 2
  - [ ] 3
