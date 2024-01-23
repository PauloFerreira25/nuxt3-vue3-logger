import { LogLevels } from "vuejs3-logger/dist/enum/log-levels";

export default defineAppConfig({
    nuxt3Vuejs3Logger: {
        isEnabled: true,
        logLevel : LogLevels.DEBUG,
        stringifyArguments : false,
        showLogLevel : true,
        showMethodName : true,
        separator: '|',
        showConsoleColors: true
    }
  })