/**
 * UTILS module - contains a number of general methods.
 * Inspired by http://javascript.crockford.com/remedial.html
 * Created by anatr on 1/14/15.
 */
(function (define) {
    "use strict";

    if (!String.prototype.supplant) {
        /**
         * Python like string formatting
         *
         * i.e.:
         *
         * >>> s = 'hello {name}'
         * >>> s.supplan({name: 'ana'})
         * >>> 'hello ana'
         * */

        console.debug('Adding supplant to String object');

        String.prototype.supplant = function (o) {
            return this.replace(
                /\{([^{}]*)\}/g,
                function (a, b) {
                    var r = o[b];
                    return typeof r === 'string' || typeof r === 'number' ? r : a;
                }
            );
        };
    }

    define(['jQuery'], function ($) {

        console.debug('Initializing UTILS module');

        //var UTILS = function () {
        /**
         * Improved typeof method, distinguishes <array> and <null> from object
         */
        function typeOf(value) {
            var s = typeof value;
            if (s === 'object') {
                if (value) {
                    if (Object.prototype.toString.call(value) === '[object Array]') {
                        s = 'array';
                    }
                } else {
                    s = 'null';
                }
            }
            return s;
        }

        /**
         * Check if the object/array/string is empty.
         */
        function isEmpty(o) {
            var i, v, t = typeOf(o);
            if (t === 'object') {
                for (i in o) {
                    v = o[i];
                    if (v !== undefined && typeOf(v) !== 'function') {
                        return false;
                    }
                }
                return true;
            }
            if (t === 'string' || t === 'array') {
                return o.length === 0;
            }
            if (t === 'number') {
                return false;
            }
            if (t === 'undefined') {
                return undefined;
            }
            return t === 'null';
        }

        /***
         * Detect is the element is in the viewport
         * @param viewportSelector - selector for viewport
         * @param ele - selector for the element in question
         * @returns {boolean}
         */
        function isElementInViewPort(viewportSelector, ele) {
            if ($ === undefined) {
                console.error('This method requires jQuery');
                return false;
            }
            var eleBoundaries, viewport, $win;
            $win = $(viewportSelector);
            viewport = {
                top: $win.scrollTop(),
                left: $win.scrollLeft(),
                right: $win.scrollLeft() + $win.width(),
                bottom: $win.scrollTop() + $win.height()
            };
            ele = $(ele);
            eleBoundaries = ele.offset();
            eleBoundaries.right = eleBoundaries.left + ele.outerWidth();
            eleBoundaries.bottom = eleBoundaries.top + ele.outerHeight();
            return !(viewport.right < eleBoundaries.left || viewport.left > eleBoundaries.right || viewport.bottom < eleBoundaries.top || viewport.top > eleBoundaries.bottom);
        }

        /***
         * Check if mouse is hovering over the element
         * @param ele - DOM node to be checked
         * @param event - event object, needed to get mouse position
         * @returns {boolean}
         */
        function isHover(ele, event) {
            var eleRect, x, y;
            eleRect = ele.getBoundingClientRect();
            x = event.pageX || event.clientX;
            y = event.pageY || event.clientY;
            if (((eleRect.left <= x && x <= eleRect.right)) && ((eleRect.top <= y && y <= eleRect.bottom))) {
                return true;
            }
            return false;
        }

        return {
            typeOf: typeOf,
            isEmpty: isEmpty,
            isElementInViewPort: isElementInViewPort,
            isHover: isHover
        };
    });

}(define));