import { LogLevels } from "#nuxt3-vue3-logger";


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