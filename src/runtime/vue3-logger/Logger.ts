import { ILoggerOptions } from "./interfaces/logger-options"

export class Logger {
    moduleName = undefined
    initialized = false
    methodName = undefined
    options: ILoggerOptions
    logLevels: string[]



    public constructor(options: ILoggerOptions, logLevels: string[]) {
        this.options = options
        this.logLevels = logLevels
        logLevels.forEach((logLevel) => {
            if (logLevels.indexOf(logLevel) >= logLevels.indexOf(this.options.logLevel) && this.options.isEnabled) {
                this[logLevel] = (...args) => this.log(logLevel, ...args);
            } else {
                this[logLevel] = () => undefined;
            }
        })
    }



    public init(name?: string, method?: string) {
        const log = new Logger(this.options, this.logLevels)
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

    private log(logLevel, ...args) {
        const methodName = this.getMethodName();
        const methodNamePrefix = this.options.showMethodName ? `method:${methodName}` + ` ${this.options.separator}` : "";
        const moduleName = this.moduleName ? `module:${this.moduleName}` + ` ${this.options.separator} ` : "";
        const logLevelPrefix = this.options.showLogLevel ? logLevel + ` ${this.options.separator} ` : "";
        const formattedArguments = this.options.stringifyArguments ? args.map((a) => JSON.stringify(a)) : args;
        const logMessage = `${logLevelPrefix}${moduleName}${methodNamePrefix}`;
        this.printLogMessage(logLevel, logMessage, this.options.showConsoleColors, formattedArguments);
        return `${logMessage} ${formattedArguments.toString()}`;
    }

    private printLogMessage(logLevel: string, logMessage: string, showConsoleColors: boolean, formattedArguments: any) {
        if (showConsoleColors && (logLevel === "warn" || logLevel === "error" || logLevel === "fatal")) {
            console[logLevel === "fatal" ? "error" : logLevel](logMessage, ...formattedArguments);
        } else {
            console.log(logMessage, ...formattedArguments);
        }
    }
}