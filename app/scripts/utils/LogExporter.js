/**
 * LogExporter
 * exports angular $log
 *
 * Created by anatr on 1/18/15.
 */

(function (define) {
    "use strict";

    define(['utils/LogEnhancer'], function (LogEnhancer) {
        var prepareLogToConsole = function (method) {
                var console = window.console,
                    isFunction = function (fn) {
                        return (typeof fn === 'function');
                    },
                    isAvailableConsoleFor = function (method) {
                        // NOTE: Tried using this for less logging in the console/terminal, but then logging in IDE is
                        // wiped out as well return console && console[method] && isFunction(console[method]) && isPhantomJS;

                        return console && console[method] && isFunction(console[method]);
                    },
                    logFn = function (message) {
                        if (isAvailableConsoleFor(method)) {
                            try {
                                console[method](message);

                            }
                            catch (e) {
                            }
                        }
                    };

                return logFn;
            },
            $log = {
                log: prepareLogToConsole("log"),
                info: prepareLogToConsole("info"),
                warn: prepareLogToConsole("warn"),
                debug: prepareLogToConsole("debug"),
                error: prepareLogToConsole("error")
            };

        // Publish instance of $log simulator; with enhanced functionality
        return new LogEnhancer($log);
    });
}(define));