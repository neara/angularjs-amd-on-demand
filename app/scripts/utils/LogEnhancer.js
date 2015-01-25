/**
 * @author      Thomas Burleson
 * @date        November, 2013
 *
 * @description
 *
 *      Used within AngularJS to enhance functionality within the AngularJS $log service.
 */
(function () {
    "use strict";

    /**
     * Register the class with RequireJS.
     */
    define([
            "utils/makeTryCatch",
            "utils/DateTime"
        ],
        function (makeTryCatch, DateTime) {
            /**
             * Constructor function
             */
            var enhanceLogger = function ($log) {
                var separator = "::",

                    /**
                     * Capture the original $log functions; for use in enhancedLogFn()
                     */
                    _$log = (function ($log) {
                        return {
                            log: $log.log,
                            info: $log.info,
                            warn: $log.warn,
                            debug: $log.debug,
                            error: $log.error
                        };
                    }($log)),

                    /**
                     * Partial application to pre-capture a logger function
                     */
                    prepareLogFn = function (logFn, className) {
                        /**
                         * Invoke the specified `logFn` with the supplant functionality...
                         */
                        var enhancedLogFn = function () {
                            try {
                                var args = Array.prototype.slice.call(arguments),
                                    now = DateTime.formattedNow();

                                // prepend a timestamp and optional classname to the original output message
                                args.unshift('{time} - {origin}'.supplant({time: now, origin: className}));

                                logFn.apply(null, args);
                            }
                            catch (error) {
                                $log.error("LogEnhancer ERROR: " + error);
                            }

                        };

                        // Only needed to support angular-mocks expectations
                        enhancedLogFn.logs = [];

                        return enhancedLogFn;
                    },

                    /**
                     * Support to generate class-specific logger instance with classname only
                     */
                    getInstance = function (className, customSeparator) {
                        className = (className !== undefined) ? className + (customSeparator || separator) : "";

                        var instance = {
                            log: prepareLogFn(_$log.log, className),
                            info: prepareLogFn(_$log.info, className),
                            warn: prepareLogFn(_$log.warn, className),
                            debug: prepareLogFn(_$log.debug, className),
                            error: prepareLogFn(_$log.error, className) // NO styling of ERROR messages
                        };

                        if (angular.isDefined(angular.makeTryCatch)) {
                            // Attach instance specific tryCatch() functionality...
                            instance.tryCatch = angular.makeTryCatch(instance.error, instance);
                        }

                        return instance;
                    };

                // Add special method to AngularJS $log
                $log.getInstance = getInstance;

                return $log;
            };

            return enhanceLogger;
        });

}());