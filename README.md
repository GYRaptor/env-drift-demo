# env-drift-demo

An interactive web demo demonstrating [`@gyraptor/env-drift`](https://www.npmjs.com/package/@gyraptor/env-drift), a lightweight utility to find drift between `.env.example` and `.env` files (missing, empty, and extra keys).

Live demo: https://env-drift-demo.vercel.app

## Features

- Compares expected `.env.example` vs actual `.env`
- Highlights missing variables required by template
- Identifies empty variables
- Detects untracked extra variables
- Powered by [`@gyraptor/env-drift`](https://www.npmjs.com/package/@gyraptor/env-drift)

## How It Works

The demo passes environment configuration strings to the serverless endpoint `/api/check`, which uses `@gyraptor/env-drift`:

```js
const { parseEnv, compare } = require('@gyraptor/env-drift');

const expected = parseEnv(exampleText);
const actual = parseEnv(envText);
const result = compare(expected, actual);
// => { missing: [...], extra: [...], empty: [...], ok: boolean }
```

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local Vercel dev server:
   ```bash
   npx vercel dev
   ```

3. Open your browser at `http://localhost:3000`.

## Links

- [NPM Package](https://www.npmjs.com/package/@gyraptor/env-drift)
- [GitHub Repository](https://github.com/GYRaptor/env-drift)

## License

MIT
