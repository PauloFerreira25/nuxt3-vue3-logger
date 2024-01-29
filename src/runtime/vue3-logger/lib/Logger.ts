import { LogLevels } from "../enum/log-levels"
import type { ILoggerOptions } from "../interfaces/logger-options"
import type { Log } from "./types";

export const getDefaultOptions = () => {
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

let globalOptions: ILoggerOptions = getDefaultOptions()

export class Logger implements Log {
    moduleName?: string = undefined
    initialized = false
    methodName?: string = undefined
    logLevelsKeys = Object.keys(LogLevels)

    public setOptions(options: ILoggerOptions) {
        globalOptions = options
    }

    public debug(...args: any[]) {
        this.log(LogLevels.DEBUG, args)
    }
    public info(...args: any[]) {
        this.log(LogLevels.INFO, args)

    }
    public warn(...args: any[]) {
        this.log(LogLevels.WARN, args)

    }
    public error(...args: any[]) {
        this.log(LogLevels.ERROR, args)

    }
    public fatal(...args: any[]) {
        this.log(LogLevels.FATAL, args)
    }

    public init(name?: string, method?: string) {
        const log = new Logger()
        log.initialized = true;
        if (name) { log.moduleName = name }
        if (method) { log.methodName = method }
        return log;
    }

    public setMethodName(name: string) {
        const log = this.init()
        log.methodName = name
        return log
    }

    private getMethodName(): string {
        if (this.initialized && this.methodName) {
            return this.methodName
        }
        return 'unknown';
    }

    private log(logLevel: LogLevels, ...args: any[]) {
        if (this.logLevelsKeys.indexOf(logLevel.toLocaleUpperCase()) >= this.logLevelsKeys.indexOf(globalOptions.logLevel.toLocaleUpperCase()) && globalOptions.isEnabled) {
            const methodName = this.getMethodName();
            const methodNamePrefix = globalOptions.showMethodName ? `method:${methodName}` + ` ${globalOptions.separator}` : "";
            const moduleName = this.moduleName ? `module:${this.moduleName}` + ` ${globalOptions.separator} ` : "";
            const logLevelPrefix = globalOptions.showLogLevel ? logLevel + ` ${globalOptions.separator} ` : "";
            const formattedArguments = globalOptions.stringifyArguments ? args.map((a) => JSON.stringify(a)) : args;
            const logMessage = `${logLevelPrefix}${moduleName}${methodNamePrefix}`;
            this.printLogMessage(logLevel, logMessage, globalOptions.showConsoleColors, formattedArguments);
            // return `${logMessage} ${formattedArguments.toString()}`;
        }
    }

    private printLogMessage(logLevel: string, logMessage: string, showConsoleColors: boolean, formattedArguments: any) {
        if (showConsoleColors && (logLevel === "warn" || logLevel === "error" || logLevel === "fatal")) {
            console[logLevel === "fatal" ? "error" : logLevel](logMessage, ...formattedArguments);
        } else {
            console.log(logMessage, ...formattedArguments);
        }
    }
}