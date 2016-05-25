// Generated by dts-bundle v0.3.0

declare module 'log4ts' {
    export { default as Logger } from "__log4ts/Logger";
    export { default as LoggerConfig } from "__log4ts/LoggerConfig";
}

declare module '__log4ts/Logger' {
    import LoggerConfig from "__log4ts/LoggerConfig";
    export default class Logger {
        constructor(tag?: string);
        log(message: string, object?: any, deep?: number): void;
        info(message: string, object?: any, deep?: number): void;
        fatal(message: string, object?: any, deep?: number): void;
        error(message: string, object?: any, deep?: number): void;
        debug(message: string, object?: any, deep?: number): void;
        warn(message: string, object?: any, deep?: number): void;
        trace(message: string, object?: any, deep?: number): void;
        static setConfig(config: LoggerConfig): void;
        static getLogger(tag?: string): any;
    }
}

declare module '__log4ts/LoggerConfig' {
    import { IAppender } from "__log4ts/IAppender";
    import { LogLevel } from "__log4ts/LogLevel";
    import { HTMLLayoutColors } from "__log4ts/layouts/HTMLLayout";
    export default class LoggerConfig {
        constructor(appender?: IAppender, level?: LogLevel, tags?: string[]);
        addAppender(appender: IAppender): void;
        setLevel(level: LogLevel): void;
        getAppenders(): IAppender[];
        getLevel(): LogLevel;
        hasTag(tag: string): boolean;
        static createFromJson(json: ConfigJson): LoggerConfig;
    }
    export interface ConfigJson {
        layouts: ConfigJsonLayout[];
        level: "ALL" | "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | "OFF";
        tags: string[];
    }
    export interface ConfigJsonLayout {
        type: "basic" | "html";
        appenders: ConfigJsonAppender[];
        options?: ConfigHtmlLayoutOptions;
    }
    export interface ConfigHtmlLayoutOptions {
        color_scheme?: "LIGHT" | "DARK" | "SOLARIZED" | HTMLLayoutColors;
    }
    export interface ConfigJsonAppender {
        type: "console" | "dom";
        options?: ConfigJsonDomAppenderOptions;
    }
    export interface ConfigJsonDomAppenderOptions {
        container_id: string;
        escape_html?: boolean;
        buffer_size?: number;
    }
}

declare module '__log4ts/IAppender' {
    import { ILayout } from "__log4ts/ILayout";
    import { LogEntry } from "__log4ts/LogEntry";
    import { ILayoutFunction } from "__log4ts/ILayout";
    export interface IAppender {
        setLayout(layout: ILayout): any;
        setLayoutFunction(layout: ILayoutFunction): any;
        append(entry: LogEntry): any;
        clear(): any;
    }
}

declare module '__log4ts/LogLevel' {
    export enum LogLevel {
        ALL = 0,
        TRACE = 1,
        DEBUG = 2,
        INFO = 3,
        WARN = 4,
        ERROR = 5,
        FATAL = 6,
        OFF = 7,
    }
    export function logLevelToString(level: LogLevel): string;
}

declare module '__log4ts/layouts/HTMLLayout' {
    import { ILayout } from "__log4ts/ILayout";
    import { LogEntry } from "__log4ts/LogEntry";
    export interface HTMLLayoutColors {
        tag: string;
        message: string;
        time: string;
        level: string;
    }
    export enum HTMLLayoutColorTheme {
        LIGHT = 0,
        DARK = 1,
        SOLARIZED = 2,
    }
    export default class HTMLLayout implements ILayout {
        constructor(colors_theme?: HTMLLayoutColorTheme | HTMLLayoutColors);
        format(entry: LogEntry): string;
    }
}

declare module '__log4ts/ILayout' {
    import { LogEntry } from "__log4ts/LogEntry";
    export interface ILayout {
        format(entry: LogEntry): string;
    }
    export interface ILayoutFunction {
        (entry: LogEntry): string;
    }
}

declare module '__log4ts/LogEntry' {
    import { LogLevel } from "__log4ts/LogLevel";
    export interface LogEntry {
        level: LogLevel;
        time: Date;
        message: string;
        tag: string;
    }
}

