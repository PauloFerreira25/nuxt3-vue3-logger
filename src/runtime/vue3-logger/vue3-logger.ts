import { Logger } from "./Logger";
import { LogLevels } from "./enum/log-levels";
import { ILogger } from "./interfaces/logger";
import { ILoggerOptions } from "./interfaces/logger-options";

class VueLogger implements ILogger {

    private errorMessage: string = "Provided options for nuxt3-vue3-logger are not valid.";
    private logLevels: string[] = Object.keys(LogLevels).map((l) => l.toLowerCase());


    public install(Vue: any, options: ILoggerOptions) {
        options = Object.assign(this.getDefaultOptions(), options);

        if (this.isValidOptions(options, this.logLevels)) {
            Vue.$log = this.initLoggerInstance(options, this.logLevels);
            Vue.provide('nuxt3-vue3-logger', Vue.$log);
            Vue.config.globalProperties.$log = Vue.$log;
        } else {
            throw new Error(this.errorMessage);
        }
    }

    public isValidOptions(options: ILoggerOptions, logLevels: string[]): boolean {
        if (!(options.logLevel && typeof options.logLevel === "string" && logLevels.indexOf(options.logLevel) > -1)) {
            return false;
        }
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

    private initLoggerInstance(options: ILoggerOptions, logLevels: string[]) {
        return new Logger(options, logLevels);
    }

    private getDefaultOptions(): ILoggerOptions {
        return {
            isEnabled: true,
            logLevel: LogLevels.DEBUG,
            separator: "|",
            showConsoleColors: false,
            showLogLevel: false,
            showMethodName: false,
            stringifyArguments: false,
        };
    }
}

export default new VueLogger();
