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
- [x] Full GM REST API coverage
  - [x] POST `/gm/levels/:level`
  - [x] POST `/gm/instances/:instance/restart`
  - [x] POST `/gm/instances/:instance/stop`
  - [x] POST `/gm/instances/:instance/resume`
  - [x] GET `/gm/instances/:instance`
- [ ] Level solutions
  - [x] 1
  - [x] 2
  - [x] 3
  - [ ] 4
  - [ ] 5
  - [ ] 6
