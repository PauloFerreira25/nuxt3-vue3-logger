import { defineNuxtModule, addPlugin, addImportsDir, createResolver } from '@nuxt/kit'
import { LogLevels } from './runtime/vue3-logger/enum/log-levels'
import type { ILoggerOptions } from './runtime/vue3-logger/interfaces/logger-options'


// Module options TypeScript interface definition
export interface ModuleOptions extends ILoggerOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-vue3-logger',
    configKey: 'nuxt3Vue3Logger'
  },
  defaults: {
    // optional : defaults to true if not specified
    isEnabled: true,
    // required ['debug', 'info', 'warn', 'error', 'fatal']
    logLevel: LogLevels.INFO,
    // optional : defaults to false if not specified
    stringifyArguments: false,
    // optional : defaults to false if not specified
    showLogLevel: false,
    // optional : defaults to false if not specified
    showMethodName: false,
    // optional : defaults to '|' if not specified
    separator: '|',
    // optional : defaults to false if not specified
    showConsoleColors: false
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin({
      src: resolver.resolve('./runtime/plugin'),
      ssr: false,
    })
    addImportsDir(resolver.resolve('./runtime/vue3-logger'))
  }
})
