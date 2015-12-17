# Stockfighter

Node.js lib and solutions for [Stockfighter](https://www.stockfighter.io).

## Todo

- [ ] Full REST API coverage
  - [x] GET `/heartbeat`
  - [x] GET `/venues/:venue/heartbeat`
  - [x] GET `/venues/:venue/stocks`
  - [x] GET `/venues/:venue/stocks/:stock`
  - [ ] POST `/venues/:venue/stocks/:stock/orders`
  - [x] GET `/venues/:venue/stocks/:stock/quote`
  - [ ] GET `/venues/:venue/stocks/:stock/orders/:order`
  - [ ] GET `/venues/:venue/stocks/:stock/orders/:id`
  - [ ] DELETE `/venues/:venue/stocks/:stock/orders/:id`
  - [ ] GET `/venues/:venue/accounts/:account/orders`
  - [ ] GET `/venues/:venue/accounts/:account/stocks/:stock/orders`
- [ ] Full WS API coverage
  - [x] `/ws/:trading_account/venues/:venue/tickertape`
  - [ ] `/ws/:trading_account/venues/:venue/executions`
- [ ] Level solutions
  - [ ] 1
  - [ ] 2
  - [ ] 3
