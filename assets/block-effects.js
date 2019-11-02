/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/block-effects.js":
/*!*********************************!*\
  !*** ./src/js/block-effects.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Animate elements with CSS as they appear in the viewport via custom classes.
 *
 * Add a single custom class to a block's Advanced field in the block editor:
 * - fade-in
 * - fade-in-up
 *
 * Blocks will be hidden but then animate into view when their top or bottom
 * appears between the viewport top and bottom.
 *
 * Enqueueing this file at the bottom of your site's body element is enough to
 * make the effects available. No further configuration or CSS is required.
 *
 * @author StudioPress
 * @link https://www.studiopress.com/
 * @version 1.0.0
 * @license GPL-2.0-or-later
 */
var studiopress = studiopress || {};

studiopress.blockEffects = function () {
  'use strict'; // Classes that can be applied to elements.

  var effectClasses = ['.fade-in', '.fade-in-up']; // Whether a position check is running or not.

  var ticking = false;
  /**
   * Injects effects CSS into the page dynamically.
   * @since 1.0.0
   */

  var addCSS = function addCSS() {
    var style = document.createElement('style');
    style.classList.add('studiopress-block-effects-js'); // To help identify where inline styles are coming from.

    style.innerHTML = // Hide elements with effects on page load, set up animation duration.
    '.fade-in, .fade-in-up { opacity: 0; -webkit-animation-duration: 1s; animation-duration: 1s; -webkit-animation-fill-mode: both; animation-fill-mode: both; -webkit-animation-timing-function: ease-in-out; animation-timing-function: ease-in-out; } ' + // Do not apply effects when pages are printed.
    '@media print { .fade-in, .fade-in-up { opacity: 1 !important; -webkit-animation: unset !important; animation: unset !important; -webkit-transition: none !important; transition: none !important; } } ' + // Fade in effect.
    '@-webkit-keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } ' + '@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } ' + '.fade-in.in-viewport { -webkit-animation-name: fadeIn; animation-name: fadeIn; } ' + // Fade in up effect.
    '@-webkit-keyframes fadeInUp { from { opacity: 0; -webkit-transform: translate3d(0, 20px, 0); transform: translate3d(0, 20px, 0); } ' + 'to { opacity: 1; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } } ' + '@keyframes fadeInUp { from { opacity: 0; -webkit-transform: translate3d(0, 20px, 0); transform: translate3d(0, 20px, 0); } ' + 'to { opacity: 1; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } } ' + '.fade-in-up.in-viewport { -webkit-animation-name: fadeInUp; animation-name: fadeInUp; } ';
    document.body.appendChild(style);
  };
  /**
   * Checks if the top or bottom of the given element is within the viewport.
   * Uses top and bottom bounds only and ignores left and right position.
   * @since 1.0.0
   * @param {object} elem The element to check.
   * @returns {bool}
   */


  var isInViewport = function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return 0 <= bounding.top && bounding.top <= (window.innerHeight || document.documentElement.clientHeight) || 0 <= bounding.bottom && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  };
  /**
   * Iterates over elements with effect classes.
   * Applies in-viewport class when in viewport.
   * @since 1.0.0
   */


  var addInViewPortClass = function addInViewPortClass() {
    var i, j, elements;

    for (i = 0; i < effectClasses.length; ++i) {
      elements = document.querySelectorAll(effectClasses[i]);

      for (j = 0; j < elements.length; ++j) {
        if (isInViewport(elements[j])) {
          elements[j].classList.add('in-viewport');
        }
      }
    }

    ticking = false;
  };
  /**
   * Triggers a new animation frame request if none are running.
   * @since 1.0.0
   */


  var update = function update() {
    if (!ticking) {
      window.requestAnimationFrame(addInViewPortClass);
      ticking = true;
    }
  };

  return {
    /**
     * Adds CSS and sets up viewport check.
     * Runs on ready to fade as early as possible, on load to account for
     * reflow that moves content into the viewport, and on scroll or resize
     * to show elements that are moved into the viewport by the user.
     * @since 1.0.0
     */
    init: function init() {
      addCSS();
      update();
      window.addEventListener('load', update, false);
      window.addEventListener('scroll', update, false);
      window.addEventListener('resize', update, false);
    }
  };
}();

studiopress.blockEffects.init();

/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./src/js/block-effects.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jullweber/Sites/wp-local695/wp-content/themes/local695/src/js/block-effects.js */"./src/js/block-effects.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2NrLWVmZmVjdHMuanMiXSwibmFtZXMiOlsic3R1ZGlvcHJlc3MiLCJibG9ja0VmZmVjdHMiLCJlZmZlY3RDbGFzc2VzIiwidGlja2luZyIsImFkZENTUyIsInN0eWxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwiaXNJblZpZXdwb3J0IiwiZWxlbSIsImJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJib3R0b20iLCJhZGRJblZpZXdQb3J0Q2xhc3MiLCJpIiwiaiIsImVsZW1lbnRzIiwibGVuZ3RoIiwicXVlcnlTZWxlY3RvckFsbCIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJC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LEVBQXdDLEtBQXhDO0FBQ0FYLFlBQU0sQ0FBQ2MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NILE1BQWxDLEVBQTBDLEtBQTFDO0FBQ0FYLFlBQU0sQ0FBQ2MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NILE1BQWxDLEVBQTBDLEtBQTFDO0FBQ0Q7QUFkSSxHQUFQO0FBZ0JELENBdkcwQixFQUEzQjs7QUF5R0E3QixXQUFXLENBQUNDLFlBQVosQ0FBeUI4QixJQUF6QixHIiwiZmlsZSI6Ii9hc3NldHMvYmxvY2stZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIvKipcbiAqIEFuaW1hdGUgZWxlbWVudHMgd2l0aCBDU1MgYXMgdGhleSBhcHBlYXIgaW4gdGhlIHZpZXdwb3J0IHZpYSBjdXN0b20gY2xhc3Nlcy5cbiAqXG4gKiBBZGQgYSBzaW5nbGUgY3VzdG9tIGNsYXNzIHRvIGEgYmxvY2sncyBBZHZhbmNlZCBmaWVsZCBpbiB0aGUgYmxvY2sgZWRpdG9yOlxuICogLSBmYWRlLWluXG4gKiAtIGZhZGUtaW4tdXBcbiAqXG4gKiBCbG9ja3Mgd2lsbCBiZSBoaWRkZW4gYnV0IHRoZW4gYW5pbWF0ZSBpbnRvIHZpZXcgd2hlbiB0aGVpciB0b3Agb3IgYm90dG9tXG4gKiBhcHBlYXJzIGJldHdlZW4gdGhlIHZpZXdwb3J0IHRvcCBhbmQgYm90dG9tLlxuICpcbiAqIEVucXVldWVpbmcgdGhpcyBmaWxlIGF0IHRoZSBib3R0b20gb2YgeW91ciBzaXRlJ3MgYm9keSBlbGVtZW50IGlzIGVub3VnaCB0b1xuICogbWFrZSB0aGUgZWZmZWN0cyBhdmFpbGFibGUuIE5vIGZ1cnRoZXIgY29uZmlndXJhdGlvbiBvciBDU1MgaXMgcmVxdWlyZWQuXG4gKlxuICogQGF1dGhvciBTdHVkaW9QcmVzc1xuICogQGxpbmsgaHR0cHM6Ly93d3cuc3R1ZGlvcHJlc3MuY29tL1xuICogQHZlcnNpb24gMS4wLjBcbiAqIEBsaWNlbnNlIEdQTC0yLjAtb3ItbGF0ZXJcbiAqL1xuXG52YXIgc3R1ZGlvcHJlc3MgPSBzdHVkaW9wcmVzcyB8fCB7fTtcblxuc3R1ZGlvcHJlc3MuYmxvY2tFZmZlY3RzID0gKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQ2xhc3NlcyB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGVsZW1lbnRzLlxuICB2YXIgZWZmZWN0Q2xhc3NlcyA9IFsnLmZhZGUtaW4nLCAnLmZhZGUtaW4tdXAnXTtcblxuICAvLyBXaGV0aGVyIGEgcG9zaXRpb24gY2hlY2sgaXMgcnVubmluZyBvciBub3QuXG4gIHZhciB0aWNraW5nID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEluamVjdHMgZWZmZWN0cyBDU1MgaW50byB0aGUgcGFnZSBkeW5hbWljYWxseS5cbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICB2YXIgYWRkQ1NTID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5jbGFzc0xpc3QuYWRkKCdzdHVkaW9wcmVzcy1ibG9jay1lZmZlY3RzLWpzJyk7IC8vIFRvIGhlbHAgaWRlbnRpZnkgd2hlcmUgaW5saW5lIHN0eWxlcyBhcmUgY29taW5nIGZyb20uXG5cbiAgICBzdHlsZS5pbm5lckhUTUwgPVxuICAgICAgLy8gSGlkZSBlbGVtZW50cyB3aXRoIGVmZmVjdHMgb24gcGFnZSBsb2FkLCBzZXQgdXAgYW5pbWF0aW9uIGR1cmF0aW9uLlxuICAgICAgJy5mYWRlLWluLCAuZmFkZS1pbi11cCB7IG9wYWNpdHk6IDA7IC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsgYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoOyBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoOyAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgfSAnICtcbiAgICAgIC8vIERvIG5vdCBhcHBseSBlZmZlY3RzIHdoZW4gcGFnZXMgYXJlIHByaW50ZWQuXG4gICAgICAnQG1lZGlhIHByaW50IHsgLmZhZGUtaW4sIC5mYWRlLWluLXVwIHsgb3BhY2l0eTogMSAhaW1wb3J0YW50OyAtd2Via2l0LWFuaW1hdGlvbjogdW5zZXQgIWltcG9ydGFudDsgYW5pbWF0aW9uOiB1bnNldCAhaW1wb3J0YW50OyAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDsgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50OyB9IH0gJyArXG4gICAgICAvLyBGYWRlIGluIGVmZmVjdC5cbiAgICAgICdALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6IDA7IH0gdG8geyBvcGFjaXR5OiAxOyB9IH0gJyArXG4gICAgICAnQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTogMDsgfSB0byB7IG9wYWNpdHk6IDE7IH0gfSAnICtcbiAgICAgICcuZmFkZS1pbi5pbi12aWV3cG9ydCB7IC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjsgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjsgfSAnICtcbiAgICAgIC8vIEZhZGUgaW4gdXAgZWZmZWN0LlxuICAgICAgJ0Atd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcCB7IGZyb20geyBvcGFjaXR5OiAwOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7IH0gJyArXG4gICAgICAndG8geyBvcGFjaXR5OiAxOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH0gfSAnICtcbiAgICAgICdAa2V5ZnJhbWVzIGZhZGVJblVwIHsgZnJvbSB7IG9wYWNpdHk6IDA7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTsgfSAnICtcbiAgICAgICd0byB7IG9wYWNpdHk6IDE7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfSB9ICcgK1xuICAgICAgJy5mYWRlLWluLXVwLmluLXZpZXdwb3J0IHsgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXA7IGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDsgfSAnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgdG9wIG9yIGJvdHRvbSBvZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyB3aXRoaW4gdGhlIHZpZXdwb3J0LlxuICAgKiBVc2VzIHRvcCBhbmQgYm90dG9tIGJvdW5kcyBvbmx5IGFuZCBpZ25vcmVzIGxlZnQgYW5kIHJpZ2h0IHBvc2l0aW9uLlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICogQHBhcmFtIHtvYmplY3R9IGVsZW0gVGhlIGVsZW1lbnQgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sfVxuICAgKi9cbiAgdmFyIGlzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICB2YXIgYm91bmRpbmcgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAoXG4gICAgICAoMCA8PSBib3VuZGluZy50b3AgJiZcbiAgICAgICAgYm91bmRpbmcudG9wIDw9XG4gICAgICAgICAgKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSkgfHxcbiAgICAgICgwIDw9IGJvdW5kaW5nLmJvdHRvbSAmJlxuICAgICAgICBib3VuZGluZy5ib3R0b20gPD1cbiAgICAgICAgICAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpKVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIG92ZXIgZWxlbWVudHMgd2l0aCBlZmZlY3QgY2xhc3Nlcy5cbiAgICogQXBwbGllcyBpbi12aWV3cG9ydCBjbGFzcyB3aGVuIGluIHZpZXdwb3J0LlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gIHZhciBhZGRJblZpZXdQb3J0Q2xhc3MgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgaiwgZWxlbWVudHM7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZWZmZWN0Q2xhc3Nlcy5sZW5ndGg7ICsraSkge1xuICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVmZmVjdENsYXNzZXNbaV0pO1xuXG4gICAgICBmb3IgKGogPSAwOyBqIDwgZWxlbWVudHMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgaWYgKGlzSW5WaWV3cG9ydChlbGVtZW50c1tqXSkpIHtcbiAgICAgICAgICBlbGVtZW50c1tqXS5jbGFzc0xpc3QuYWRkKCdpbi12aWV3cG9ydCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGlja2luZyA9IGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBhIG5ldyBhbmltYXRpb24gZnJhbWUgcmVxdWVzdCBpZiBub25lIGFyZSBydW5uaW5nLlxuICAgKiBAc2luY2UgMS4wLjBcbiAgICovXG4gIHZhciB1cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYWRkSW5WaWV3UG9ydENsYXNzKTtcbiAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIEFkZHMgQ1NTIGFuZCBzZXRzIHVwIHZpZXdwb3J0IGNoZWNrLlxuICAgICAqIFJ1bnMgb24gcmVhZHkgdG8gZmFkZSBhcyBlYXJseSBhcyBwb3NzaWJsZSwgb24gbG9hZCB0byBhY2NvdW50IGZvclxuICAgICAqIHJlZmxvdyB0aGF0IG1vdmVzIGNvbnRlbnQgaW50byB0aGUgdmlld3BvcnQsIGFuZCBvbiBzY3JvbGwgb3IgcmVzaXplXG4gICAgICogdG8gc2hvdyBlbGVtZW50cyB0aGF0IGFyZSBtb3ZlZCBpbnRvIHRoZSB2aWV3cG9ydCBieSB0aGUgdXNlci5cbiAgICAgKiBAc2luY2UgMS4wLjBcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgIGFkZENTUygpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHVwZGF0ZSwgZmFsc2UpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZSwgZmFsc2UpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSwgZmFsc2UpO1xuICAgIH0sXG4gIH07XG59KSgpO1xuXG5zdHVkaW9wcmVzcy5ibG9ja0VmZmVjdHMuaW5pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==