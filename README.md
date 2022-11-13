# PliskinBot

Personnal fullstack website to be more organized

## Installation

```bash
cd ./api && npm install
cd ../front && npm install
```

## Environment

In api/mail folder, you will require a .env file with the following variables:

```bash
BOTMAIL_ACCOUNT=acount
BOTMAIL_PASSWORD=password
```

## Usage

CD into api folder and run

```bash
npm start
```

Then CD into front folder and run

```bash
npm start
```

## Tests

### Running tests

```bash
cd ./api && npm test
```

### Coverage

File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------|---------|----------|---------|---------|------------------------------
All files      |   57.04 |    20.83 |   29.16 |   57.04 |
 api           |     100 |       50 |     100 |     100 |
  app.js       |     100 |       50 |     100 |     100 | 40
 api/routes    |   45.53 |    18.18 |   22.72 |   45.53 |
  fitness.js   |   28.57 |        0 |       0 |   28.57 | 7-12,18-29,35-40
  planning.js  |   24.39 |        0 |       0 |   24.39 | 7-12,18-25,32-39,46-53,60-72
  stellaris.js |   54.54 |        0 |       0 |   54.54 | 7-12
  testAPI.js   |     100 |      100 |     100 |     100 |
  todo.js      |   81.48 |    66.66 |     100 |   81.48 | 13-14,27,33,42
