import { Logger, getDefaultOptions } from "./lib/Logger";
import type { ILogger } from "./interfaces/logger";
import type { ILoggerOptions } from "./interfaces/logger-options";

class VueLogger implements ILogger {

    private errorMessage: string = "Provided options for nuxt3-vue3-logger are not valid.";


    public install(Vue: any, options: ILoggerOptions) {
        options = Object.assign(getDefaultOptions(), options);

        if (this.isValidOptions(options)) {
            Vue.$log = this.initLoggerInstance(options);
            Vue.provide('nuxt3-vue3-logger', Vue.$log);
            Vue.config.globalProperties.$log = Vue.$log;
        } else {
            throw new Error(this.errorMessage);
        }
    }

    public isValidOptions(options: ILoggerOptions): boolean {
        if (options.stringifyArguments && typeof options.stringifyArguments !== "boolean") {
            return false;
        }
        if (options.showLogLevel && typeof options.showLogLevel !== "boolean") {
            return false;
        }
        if (options.showConsoleColors && typeof options.showConsoleColors !== "boolean") {
            return false;
        }
        if (options.separator && (typeof options.separator !== "string" || (typeof options.separator === "string" && options.separator.length > 3))) {
            return false;
        }
        if (typeof options.isEnabled !== "boolean") {
            return false;
        }
        return !(options.showMethodName && typeof options.showMethodName !== "boolean");
    }

    private initLoggerInstance(options: ILoggerOptions) {
        const logger = new Logger();
        logger.setOptions(options);
        return logger;
    }


}

export default new VueLogger();
