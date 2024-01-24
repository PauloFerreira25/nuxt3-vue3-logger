# nuxt3-vue3-logger

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

nuxt3-vue3-logger for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)


## Features

Fazer um log

## Quick Setup

1. Add `nuxt3-vue3-logger` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt3-vue3-logger

# Using yarn
yarn add --dev nuxt3-vue3-logger

# Using npm
npm install --save-dev nuxt3-vue3-logger
```

2. Add `nuxt3-vue3-logger` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt3-vue3-logger'
  ]
})
```

3. Create `nuxt3Vue3Logger` on `app.config.ts`

```js
import { LogLevels } from "nuxt3-vue3-logger/vue3-logger/enum/log-levels";

export default defineAppConfig({
    nuxt3Vue3Logger: {
        isEnabled: true,
        logLevel : LogLevels.DEBUG,
        stringifyArguments : true,
        showLogLevel : true,
        showMethodName : true,
        separator: '|',
        showConsoleColors: true
    }
  })
```
4. Usage in `.vue`

```html
<script setup>
const logger = inject('nuxt3-vue3-logger').init('app');
onMounted(() => {
  const log = logger.setMethodName('onMounted')
  log.debug('test nada', data.a, 123)
})
</script>
```


That's it! You can now use nuxt3-vue3-logger in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@pauloferreira25/nuxt3-vue3-logger/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@pauloferreira25/nuxt3-vue3-logger

[npm-downloads-src]: https://img.shields.io/npm/dm/@pauloferreira25/nuxt3-vue3-logger.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@pauloferreira25/nuxt3-vue3-logger

[license-src]: https://img.shields.io/npm/l/@pauloferreira25/nuxt3-vue3-logger.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@pauloferreira25/nuxt3-vue3-logger

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
