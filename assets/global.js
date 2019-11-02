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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This script adds the jquery effects to the Monochrome Pro Theme.
 *
 * @package Monochrome\JS
 * @author StudioPress
 * @license GPL-2.0-or-later
 */
(function ($) {
  // Cache DOM selectors.
  var $header = $('.site-header'),
      $hsToggle = $('.toggle-header-search'),
      $hsWrap = $('#header-search-wrap'),
      $hsInput = $hsWrap.find('input[type="search"]'),
      $footer = $('.site-footer'),
      $container = $('.site-container'); // Make sure JS class is added.

  $(document).ready(function () {
    $('body').addClass('js');
  }); // Run on page scroll.

  $(window).scroll(function () {
    // Toggle header class after threshold point.
    if (50 < $(document).scrollTop()) {
      $('.site-container').addClass('shadow');
    } else {
      $('.site-container').removeClass('shadow');
    }
  }); // Set the container margin to the footer height for effect.

  $container.css('margin-bottom', $footer.outerHeight()); // Handler for click a show/hide button.

  $hsToggle.on('click', function (event) {
    event.preventDefault();

    if ($(this).hasClass('close')) {
      hideSearch();
    } else {
      showSearch();
    }
  }); // Handler for pressing show/hide button.

  $hsToggle.on('keydown', function (event) {
    // If tabbing from toggle button, and search is hidden, exit early.
    if (9 === event.keyCode && !$header.hasClass('search-visible')) {
      return;
    }

    event.preventDefault();
    handleKeyDown(event);
  }); // Hide search when tabbing or escaping out of the search bar.

  $hsInput.on('keydown', function (event) {
    // Tab: 9, Esc: 27.
    if (9 === event.keyCode || 27 === event.keyCode) {
      hideSearch(event.target);
    }
  }); // Hide search on blur, such as when clicking outside it.

  $hsInput.on('blur', hideSearch); // Helper function to show the search form.

  function showSearch() {
    $header.addClass('search-visible');
    $hsWrap.fadeIn('fast').find('input[type="search"]').focus();
    $hsToggle.attr('aria-expanded', true);
  } // Helper function to hide the search form.


  function hideSearch() {
    $hsWrap.fadeOut('fast').parents('.site-header').removeClass('search-visible');
    $hsToggle.attr('aria-expanded', false);
  } // Keydown handler function for toggling search field visibility.


  function handleKeyDown(event) {
    // Enter/Space, respectively.
    if (13 === event.keyCode || 32 === event.keyCode) {
      event.preventDefault();

      if ($(event.target).hasClass('close')) {
        hideSearch();
      } else {
        showSearch();
      }
    }
  }
})(jQuery);

/***/ }),

/***/ "./src/scss/front-end.scss":
/*!*********************************!*\
  !*** ./src/scss/front-end.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/style-editor.scss":
/*!************************************!*\
  !*** ./src/scss/style-editor.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************************************************!*\
  !*** multi ./src/js/global.js ./src/scss/main.scss ./src/scss/front-end.scss ./src/scss/style-editor.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jullweber/Sites/wp-local695/wp-content/themes/local695/src/js/global.js */"./src/js/global.js");
__webpack_require__(/*! /Users/jullweber/Sites/wp-local695/wp-content/themes/local695/src/scss/main.scss */"./src/scss/main.scss");
__webpack_require__(/*! /Users/jullweber/Sites/wp-local695/wp-content/themes/local695/src/scss/front-end.scss */"./src/scss/front-end.scss");
module.exports = __webpack_require__(/*! /Users/jullweber/Sites/wp-local695/wp-content/themes/local695/src/scss/style-editor.scss */"./src/scss/style-editor.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9mcm9udC1lbmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/NDI2ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS1lZGl0b3Iuc2NzcyJdLCJuYW1lcyI6WyIkIiwiJGhlYWRlciIsIiRoc1RvZ2dsZSIsIiRoc1dyYXAiLCIkaHNJbnB1dCIsImZpbmQiLCIkZm9vdGVyIiwiJGNvbnRhaW5lciIsImRvY3VtZW50IiwicmVhZHkiLCJhZGRDbGFzcyIsIndpbmRvdyIsInNjcm9sbCIsInNjcm9sbFRvcCIsInJlbW92ZUNsYXNzIiwiY3NzIiwib3V0ZXJIZWlnaHQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsImhpZGVTZWFyY2giLCJzaG93U2VhcmNoIiwia2V5Q29kZSIsImhhbmRsZUtleURvd24iLCJ0YXJnZXQiLCJmYWRlSW4iLCJmb2N1cyIsImF0dHIiLCJmYWRlT3V0IiwicGFyZW50cyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7O0FBT0EsQ0FBQyxVQUFTQSxDQUFULEVBQVk7QUFDWDtBQUNBLE1BQUlDLE9BQU8sR0FBR0QsQ0FBQyxDQUFDLGNBQUQsQ0FBZjtBQUFBLE1BQ0VFLFNBQVMsR0FBR0YsQ0FBQyxDQUFDLHVCQUFELENBRGY7QUFBQSxNQUVFRyxPQUFPLEdBQUdILENBQUMsQ0FBQyxxQkFBRCxDQUZiO0FBQUEsTUFHRUksUUFBUSxHQUFHRCxPQUFPLENBQUNFLElBQVIsQ0FBYSxzQkFBYixDQUhiO0FBQUEsTUFJRUMsT0FBTyxHQUFHTixDQUFDLENBQUMsY0FBRCxDQUpiO0FBQUEsTUFLRU8sVUFBVSxHQUFHUCxDQUFDLENBQUMsaUJBQUQsQ0FMaEIsQ0FGVyxDQVNYOztBQUNBQSxHQUFDLENBQUNRLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDM0JULEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVUsUUFBVixDQUFtQixJQUFuQjtBQUNELEdBRkQsRUFWVyxDQWNYOztBQUNBVixHQUFDLENBQUNXLE1BQUQsQ0FBRCxDQUFVQyxNQUFWLENBQWlCLFlBQVc7QUFDMUI7QUFDQSxRQUFJLEtBQUtaLENBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlLLFNBQVosRUFBVCxFQUFrQztBQUNoQ2IsT0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJVLFFBQXJCLENBQThCLFFBQTlCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xWLE9BQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCYyxXQUFyQixDQUFpQyxRQUFqQztBQUNEO0FBQ0YsR0FQRCxFQWZXLENBd0JYOztBQUNBUCxZQUFVLENBQUNRLEdBQVgsQ0FBZSxlQUFmLEVBQWdDVCxPQUFPLENBQUNVLFdBQVIsRUFBaEMsRUF6QlcsQ0EyQlg7O0FBQ0FkLFdBQVMsQ0FBQ2UsRUFBVixDQUFhLE9BQWIsRUFBc0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNwQ0EsU0FBSyxDQUFDQyxjQUFOOztBQUVBLFFBQUluQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvQixRQUFSLENBQWlCLE9BQWpCLENBQUosRUFBK0I7QUFDN0JDLGdCQUFVO0FBQ1gsS0FGRCxNQUVPO0FBQ0xDLGdCQUFVO0FBQ1g7QUFDRixHQVJELEVBNUJXLENBc0NYOztBQUNBcEIsV0FBUyxDQUFDZSxFQUFWLENBQWEsU0FBYixFQUF3QixVQUFTQyxLQUFULEVBQWdCO0FBQ3RDO0FBQ0EsUUFBSSxNQUFNQSxLQUFLLENBQUNLLE9BQVosSUFBdUIsQ0FBQ3RCLE9BQU8sQ0FBQ21CLFFBQVIsQ0FBaUIsZ0JBQWpCLENBQTVCLEVBQWdFO0FBQzlEO0FBQ0Q7O0FBRURGLFNBQUssQ0FBQ0MsY0FBTjtBQUNBSyxpQkFBYSxDQUFDTixLQUFELENBQWI7QUFDRCxHQVJELEVBdkNXLENBaURYOztBQUNBZCxVQUFRLENBQUNhLEVBQVQsQ0FBWSxTQUFaLEVBQXVCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckM7QUFDQSxRQUFJLE1BQU1BLEtBQUssQ0FBQ0ssT0FBWixJQUF1QixPQUFPTCxLQUFLLENBQUNLLE9BQXhDLEVBQWlEO0FBQy9DRixnQkFBVSxDQUFDSCxLQUFLLENBQUNPLE1BQVAsQ0FBVjtBQUNEO0FBQ0YsR0FMRCxFQWxEVyxDQXlEWDs7QUFDQXJCLFVBQVEsQ0FBQ2EsRUFBVCxDQUFZLE1BQVosRUFBb0JJLFVBQXBCLEVBMURXLENBNERYOztBQUNBLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEJyQixXQUFPLENBQUNTLFFBQVIsQ0FBaUIsZ0JBQWpCO0FBQ0FQLFdBQU8sQ0FDSnVCLE1BREgsQ0FDVSxNQURWLEVBRUdyQixJQUZILENBRVEsc0JBRlIsRUFHR3NCLEtBSEg7QUFJQXpCLGFBQVMsQ0FBQzBCLElBQVYsQ0FBZSxlQUFmLEVBQWdDLElBQWhDO0FBQ0QsR0FwRVUsQ0FzRVg7OztBQUNBLFdBQVNQLFVBQVQsR0FBc0I7QUFDcEJsQixXQUFPLENBQ0owQixPQURILENBQ1csTUFEWCxFQUVHQyxPQUZILENBRVcsY0FGWCxFQUdHaEIsV0FISCxDQUdlLGdCQUhmO0FBSUFaLGFBQVMsQ0FBQzBCLElBQVYsQ0FBZSxlQUFmLEVBQWdDLEtBQWhDO0FBQ0QsR0E3RVUsQ0ErRVg7OztBQUNBLFdBQVNKLGFBQVQsQ0FBdUJOLEtBQXZCLEVBQThCO0FBQzVCO0FBQ0EsUUFBSSxPQUFPQSxLQUFLLENBQUNLLE9BQWIsSUFBd0IsT0FBT0wsS0FBSyxDQUFDSyxPQUF6QyxFQUFrRDtBQUNoREwsV0FBSyxDQUFDQyxjQUFOOztBQUVBLFVBQUluQixDQUFDLENBQUNrQixLQUFLLENBQUNPLE1BQVAsQ0FBRCxDQUFnQkwsUUFBaEIsQ0FBeUIsT0FBekIsQ0FBSixFQUF1QztBQUNyQ0Msa0JBQVU7QUFDWCxPQUZELE1BRU87QUFDTEMsa0JBQVU7QUFDWDtBQUNGO0FBQ0Y7QUFDRixDQTVGRCxFQTRGR1MsTUE1RkgsRTs7Ozs7Ozs7Ozs7QUNQQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvYXNzZXRzL2dsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIFRoaXMgc2NyaXB0IGFkZHMgdGhlIGpxdWVyeSBlZmZlY3RzIHRvIHRoZSBNb25vY2hyb21lIFBybyBUaGVtZS5cbiAqXG4gKiBAcGFja2FnZSBNb25vY2hyb21lXFxKU1xuICogQGF1dGhvciBTdHVkaW9QcmVzc1xuICogQGxpY2Vuc2UgR1BMLTIuMC1vci1sYXRlclxuICovXG4oZnVuY3Rpb24oJCkge1xuICAvLyBDYWNoZSBET00gc2VsZWN0b3JzLlxuICB2YXIgJGhlYWRlciA9ICQoJy5zaXRlLWhlYWRlcicpLFxuICAgICRoc1RvZ2dsZSA9ICQoJy50b2dnbGUtaGVhZGVyLXNlYXJjaCcpLFxuICAgICRoc1dyYXAgPSAkKCcjaGVhZGVyLXNlYXJjaC13cmFwJyksXG4gICAgJGhzSW5wdXQgPSAkaHNXcmFwLmZpbmQoJ2lucHV0W3R5cGU9XCJzZWFyY2hcIl0nKSxcbiAgICAkZm9vdGVyID0gJCgnLnNpdGUtZm9vdGVyJyksXG4gICAgJGNvbnRhaW5lciA9ICQoJy5zaXRlLWNvbnRhaW5lcicpO1xuXG4gIC8vIE1ha2Ugc3VyZSBKUyBjbGFzcyBpcyBhZGRlZC5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdqcycpO1xuICB9KTtcblxuICAvLyBSdW4gb24gcGFnZSBzY3JvbGwuXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgLy8gVG9nZ2xlIGhlYWRlciBjbGFzcyBhZnRlciB0aHJlc2hvbGQgcG9pbnQuXG4gICAgaWYgKDUwIDwgJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpIHtcbiAgICAgICQoJy5zaXRlLWNvbnRhaW5lcicpLmFkZENsYXNzKCdzaGFkb3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnNpdGUtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3NoYWRvdycpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU2V0IHRoZSBjb250YWluZXIgbWFyZ2luIHRvIHRoZSBmb290ZXIgaGVpZ2h0IGZvciBlZmZlY3QuXG4gICRjb250YWluZXIuY3NzKCdtYXJnaW4tYm90dG9tJywgJGZvb3Rlci5vdXRlckhlaWdodCgpKTtcblxuICAvLyBIYW5kbGVyIGZvciBjbGljayBhIHNob3cvaGlkZSBidXR0b24uXG4gICRoc1RvZ2dsZS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnY2xvc2UnKSkge1xuICAgICAgaGlkZVNlYXJjaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93U2VhcmNoKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBIYW5kbGVyIGZvciBwcmVzc2luZyBzaG93L2hpZGUgYnV0dG9uLlxuICAkaHNUb2dnbGUub24oJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIElmIHRhYmJpbmcgZnJvbSB0b2dnbGUgYnV0dG9uLCBhbmQgc2VhcmNoIGlzIGhpZGRlbiwgZXhpdCBlYXJseS5cbiAgICBpZiAoOSA9PT0gZXZlbnQua2V5Q29kZSAmJiAhJGhlYWRlci5oYXNDbGFzcygnc2VhcmNoLXZpc2libGUnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGFuZGxlS2V5RG93bihldmVudCk7XG4gIH0pO1xuXG4gIC8vIEhpZGUgc2VhcmNoIHdoZW4gdGFiYmluZyBvciBlc2NhcGluZyBvdXQgb2YgdGhlIHNlYXJjaCBiYXIuXG4gICRoc0lucHV0Lm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBUYWI6IDksIEVzYzogMjcuXG4gICAgaWYgKDkgPT09IGV2ZW50LmtleUNvZGUgfHwgMjcgPT09IGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGhpZGVTZWFyY2goZXZlbnQudGFyZ2V0KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEhpZGUgc2VhcmNoIG9uIGJsdXIsIHN1Y2ggYXMgd2hlbiBjbGlja2luZyBvdXRzaWRlIGl0LlxuICAkaHNJbnB1dC5vbignYmx1cicsIGhpZGVTZWFyY2gpO1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBzaG93IHRoZSBzZWFyY2ggZm9ybS5cbiAgZnVuY3Rpb24gc2hvd1NlYXJjaCgpIHtcbiAgICAkaGVhZGVyLmFkZENsYXNzKCdzZWFyY2gtdmlzaWJsZScpO1xuICAgICRoc1dyYXBcbiAgICAgIC5mYWRlSW4oJ2Zhc3QnKVxuICAgICAgLmZpbmQoJ2lucHV0W3R5cGU9XCJzZWFyY2hcIl0nKVxuICAgICAgLmZvY3VzKCk7XG4gICAgJGhzVG9nZ2xlLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgfVxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBoaWRlIHRoZSBzZWFyY2ggZm9ybS5cbiAgZnVuY3Rpb24gaGlkZVNlYXJjaCgpIHtcbiAgICAkaHNXcmFwXG4gICAgICAuZmFkZU91dCgnZmFzdCcpXG4gICAgICAucGFyZW50cygnLnNpdGUtaGVhZGVyJylcbiAgICAgIC5yZW1vdmVDbGFzcygnc2VhcmNoLXZpc2libGUnKTtcbiAgICAkaHNUb2dnbGUuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgfVxuXG4gIC8vIEtleWRvd24gaGFuZGxlciBmdW5jdGlvbiBmb3IgdG9nZ2xpbmcgc2VhcmNoIGZpZWxkIHZpc2liaWxpdHkuXG4gIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAvLyBFbnRlci9TcGFjZSwgcmVzcGVjdGl2ZWx5LlxuICAgIGlmICgxMyA9PT0gZXZlbnQua2V5Q29kZSB8fCAzMiA9PT0gZXZlbnQua2V5Q29kZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5oYXNDbGFzcygnY2xvc2UnKSkge1xuICAgICAgICBoaWRlU2VhcmNoKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93U2VhcmNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KShqUXVlcnkpO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==