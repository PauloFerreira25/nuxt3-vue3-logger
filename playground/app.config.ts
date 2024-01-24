import { LogLevels } from "../src/runtime/vue3-logger/enum/log-levels";


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