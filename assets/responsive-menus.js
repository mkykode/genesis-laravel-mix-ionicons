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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/responsive-menus.js":
/*!************************************!*\
  !*** ./src/js/responsive-menus.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This script adds the accessibility-ready responsive menus Genesis Framework child themes.
 *
 * @author StudioPress
 * @link https://github.com/copyblogger/responsive-menus
 * @version 1.1.3
 * @license GPL-2.0-or-later
 */
(function (document, $, undefined) {
  'use strict';

  var genesisMenuParams = typeof genesis_responsive_menu === 'undefined' ? '' : genesis_responsive_menu,
      genesisMenusUnchecked = genesisMenuParams.menuClasses,
      genesisMenus = {},
      menusToCombine = [];
  /**
   * Validate the menus passed by the theme with what's being loaded on the page,
   * and pass the new and accurate information to our new data.
   * @param {genesisMenusUnchecked} Raw data from the localized script in the theme.
   * @return {array} genesisMenus array gets populated with updated data.
   * @return {array} menusToCombine array gets populated with relevant data.
   */

  $.each(genesisMenusUnchecked, function (group) {
    // Mirror our group object to populate.
    genesisMenus[group] = []; // Loop through each instance of the specified menu on the page.

    $.each(this, function (key, value) {
      var menuString = value,
          $menu = $(value); // If there is more than one instance, append the index and update array.

      if ($menu.length > 1) {
        $.each($menu, function (key, value) {
          var newString = menuString + '-' + key;
          $(this).addClass(newString.replace('.', ''));
          genesisMenus[group].push(newString);

          if ('combine' === group) {
            menusToCombine.push(newString);
          }
        });
      } else if ($menu.length == 1) {
        genesisMenus[group].push(menuString);

        if ('combine' === group) {
          menusToCombine.push(menuString);
        }
      }
    });
  }); // Make sure there is something to use for the 'others' array.

  if (typeof genesisMenus.others == 'undefined') {
    genesisMenus.others = [];
  } // If there's only one menu on the page for combining, push it to the 'others' array and nullify our 'combine' variable.


  if (menusToCombine.length == 1) {
    genesisMenus.others.push(menusToCombine[0]);
    genesisMenus.combine = null;
    menusToCombine = null;
  }

  var genesisMenu = {},
      mainMenuButtonClass = 'menu-toggle',
      subMenuButtonClass = 'sub-menu-toggle',
      responsiveMenuClass = 'genesis-responsive-menu'; // Initialize.

  genesisMenu.init = function () {
    // Exit early if there are no menus to do anything.
    if ($(_getAllMenusArray()).length == 0) {
      return;
    }

    var menuIconClass = typeof genesisMenuParams.menuIconClass !== 'undefined' ? genesisMenuParams.menuIconClass : 'dashicons-before dashicons-menu',
        subMenuIconClass = typeof genesisMenuParams.subMenuIconClass !== 'undefined' ? genesisMenuParams.subMenuIconClass : 'dashicons-before dashicons-arrow-down-alt2',
        toggleButtons = {
      menu: $('<button />', {
        "class": mainMenuButtonClass,
        'aria-expanded': false,
        'aria-pressed': false
      }).append(genesisMenuParams.mainMenu),
      submenu: $('<button />', {
        "class": subMenuButtonClass,
        'aria-expanded': false,
        'aria-pressed': false
      }).append($('<span />', {
        "class": 'screen-reader-text',
        text: genesisMenuParams.subMenu
      }))
    }; // Add the responsive menu class to the active menus.

    _addResponsiveMenuClass(); // Add the main nav button to the primary menu, or exit the plugin.


    _addMenuButtons(toggleButtons); // Setup additional classes.


    $('.' + mainMenuButtonClass).addClass(menuIconClass);
    $('.' + subMenuButtonClass).addClass(subMenuIconClass);
    $('.' + mainMenuButtonClass).on('click.genesisMenu-mainbutton', _mainmenuToggle).each(_addClassID);
    $('.' + subMenuButtonClass).on('click.genesisMenu-subbutton', _submenuToggle);
    $(window).on('resize.genesisMenu', _doResize).triggerHandler('resize.genesisMenu');
  };
  /**
   * Add menu toggle button to appropriate menus.
   * @param {toggleButtons} Object of menu buttons to use for toggles.
   */


  function _addMenuButtons(toggleButtons) {
    // Apply sub menu toggle to each sub-menu found in the menuList.
    $(_getMenuSelectorString(genesisMenus)).find('.sub-menu').before(toggleButtons.submenu);

    if (menusToCombine !== null) {
      var menusToToggle = genesisMenus.others.concat(menusToCombine[0]); // Only add menu button the primary menu and navs NOT in the combine variable.

      $(_getMenuSelectorString(menusToToggle)).before(toggleButtons.menu);
    } else {
      // Apply the main menu toggle to all menus in the list.
      $(_getMenuSelectorString(genesisMenus.others)).before(toggleButtons.menu);
    }
  }
  /**
   * Add the responsive menu class.
   */


  function _addResponsiveMenuClass() {
    $(_getMenuSelectorString(genesisMenus)).addClass(responsiveMenuClass);
  }
  /**
   * Execute our responsive menu functions on window resizing.
   */


  function _doResize() {
    var buttons = $('button[id^="genesis-mobile-"]').attr('id');

    if (typeof buttons === 'undefined') {
      return;
    }

    _maybeClose(buttons);

    _superfishToggle(buttons);

    _changeSkipLink(buttons);

    _combineMenus(buttons);
  }
  /**
   * Add the nav- class of the related navigation menu as
   * an ID to associated button (helps target specific buttons outside of context).
   */


  function _addClassID() {
    var $this = $(this),
        nav = $this.next('nav'),
        id = 'class';
    $this.attr('id', 'genesis-mobile-' + $(nav).attr(id).match(/nav-\w*\b/));
  }
  /**
   * Combine our menus if the mobile menu is visible.
   * @params buttons
   */


  function _combineMenus(buttons) {
    // Exit early if there are no menus to combine.
    if (menusToCombine == null) {
      return;
    } // Split up the menus to combine based on order of appearance in the array.


    var primaryMenu = menusToCombine[0],
        combinedMenus = $(menusToCombine).filter(function (index) {
      if (index > 0) {
        return index;
      }
    }); // If the responsive menu is active, append items in 'combinedMenus' object to the 'primaryMenu' object.

    if ('none' !== _getDisplayValue(buttons)) {
      $.each(combinedMenus, function (key, value) {
        $(value).find('.menu > li').addClass('moved-item-' + value.replace('.', '')).appendTo(primaryMenu + ' ul.genesis-nav-menu');
      });
      $(_getMenuSelectorString(combinedMenus)).hide();
    } else {
      $(_getMenuSelectorString(combinedMenus)).show();
      $.each(combinedMenus, function (key, value) {
        $('.moved-item-' + value.replace('.', '')).appendTo(value + ' ul.genesis-nav-menu').removeClass('moved-item-' + value.replace('.', ''));
      });
    }
  }
  /**
   * Action to happen when the main menu button is clicked.
   */


  function _mainmenuToggle() {
    var $this = $(this);

    _toggleAria($this, 'aria-pressed');

    _toggleAria($this, 'aria-expanded');

    $this.toggleClass('activated');
    $this.next('nav').slideToggle('fast');
  }
  /**
   * Action for submenu toggles.
   */


  function _submenuToggle() {
    var $this = $(this),
        others = $this.closest('.menu-item').siblings();

    _toggleAria($this, 'aria-pressed');

    _toggleAria($this, 'aria-expanded');

    $this.toggleClass('activated');
    $this.next('.sub-menu').slideToggle('fast');
    others.find('.' + subMenuButtonClass).removeClass('activated').attr('aria-pressed', 'false');
    others.find('.sub-menu').slideUp('fast');
  }
  /**
   * Activate/deactivate superfish.
   * @params buttons
   */


  function _superfishToggle(buttons) {
    var _superfish = $('.' + responsiveMenuClass + ' .js-superfish'),
        $args = 'destroy';

    if (typeof _superfish.superfish !== 'function') {
      return;
    }

    if ('none' === _getDisplayValue(buttons)) {
      $args = {
        delay: 100,
        animation: {
          opacity: 'show',
          height: 'show'
        },
        dropShadows: false,
        speed: 'fast'
      };
    }

    _superfish.superfish($args);
  }
  /**
   * Modify skip link to match mobile buttons.
   * @param buttons
   */


  function _changeSkipLink(buttons) {
    // Start with an empty array.
    var menuToggleList = _getAllMenusArray(); // Exit out if there are no menu items to update.


    if (!$(menuToggleList).length > 0) {
      return;
    }

    $.each(menuToggleList, function (key, value) {
      var newValue = value.replace('.', ''),
          startLink = 'genesis-' + newValue,
          endLink = 'genesis-mobile-' + newValue;

      if ('none' == _getDisplayValue(buttons)) {
        startLink = 'genesis-mobile-' + newValue;
        endLink = 'genesis-' + newValue;
      }

      var $item = $('.genesis-skip-link a[href="#' + startLink + '"]');

      if (menusToCombine !== null && value !== menusToCombine[0]) {
        $item.toggleClass('skip-link-hidden');
      }

      if ($item.length > 0) {
        var link = $item.attr('href');
        link = link.replace(startLink, endLink);
        $item.attr('href', link);
      } else {
        return;
      }
    });
  }
  /**
   * Close all the menu toggles if buttons are hidden.
   * @param buttons
   */


  function _maybeClose(buttons) {
    if ('none' !== _getDisplayValue(buttons)) {
      return true;
    }

    $('.' + mainMenuButtonClass + ', .' + responsiveMenuClass + ' .sub-menu-toggle').removeClass('activated').attr('aria-expanded', false).attr('aria-pressed', false);
    $('.' + responsiveMenuClass + ', .' + responsiveMenuClass + ' .sub-menu').attr('style', '');
  }
  /**
   * Generic function to get the display value of an element.
   * @param  {id} $id ID to check
   * @return {string}     CSS value of display property
   */


  function _getDisplayValue($id) {
    var element = document.getElementById($id),
        style = window.getComputedStyle(element);
    return style.getPropertyValue('display');
  }
  /**
   * Toggle aria attributes.
   * @param  {button} $this     passed through
   * @param  {aria-xx} attribute aria attribute to toggle
   * @return {bool}           from _ariaReturn
   */


  function _toggleAria($this, attribute) {
    $this.attr(attribute, function (index, value) {
      return 'false' === value;
    });
  }
  /**
   * Helper function to return a comma separated string of menu selectors.
   * @param {itemArray} Array of menu items to loop through.
   * @param {ignoreSecondary} boolean of whether to ignore the 'secondary' menu item.
   * @return {string} Comma-separated string.
   */


  function _getMenuSelectorString(itemArray) {
    var itemString = $.map(itemArray, function (value, key) {
      return value;
    });
    return itemString.join(',');
  }
  /**
   * Helper function to return a group array of all the menus in
   * both the 'others' and 'combine' arrays.
   * @return {array} Array of all menu items as class selectors.
   */


  function _getAllMenusArray() {
    // Start with an empty array.
    var menuList = []; // If there are menus in the 'menusToCombine' array, add them to 'menuList'.

    if (menusToCombine !== null) {
      $.each(menusToCombine, function (key, value) {
        menuList.push(value.valueOf());
      });
    } // Add menus in the 'others' array to 'menuList'.


    $.each(genesisMenus.others, function (key, value) {
      menuList.push(value.valueOf());
    });

    if (menuList.length > 0) {
      return menuList;
    } else {
      return null;
    }
  }

  $(document).ready(function () {
    if (_getAllMenusArray() !== null) {
      genesisMenu.init();
    }
  });
})(document, jQuery);

/***/ }),

/***/ 2:
/*!******************************************!*\
  !*** multi ./src/js/responsive-menus.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jullweber/Sites/wp-local695/wp-content/themes/local695/src/js/responsive-menus.js */"./src/js/responsive-menus.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Jlc3BvbnNpdmUtbWVudXMuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCIkIiwidW5kZWZpbmVkIiwiZ2VuZXNpc01lbnVQYXJhbXMiLCJnZW5lc2lzX3Jlc3BvbnNpdmVfbWVudSIsImdlbmVzaXNNZW51c1VuY2hlY2tlZCIsIm1lbnVDbGFzc2VzIiwiZ2VuZXNpc01lbnVzIiwibWVudXNUb0NvbWJpbmUiLCJlYWNoIiwiZ3JvdXAiLCJrZXkiLCJ2YWx1ZSIsIm1lbnVTdHJpbmciLCIkbWVudSIsImxlbmd0aCIsIm5ld1N0cmluZyIsImFkZENsYXNzIiwicmVwbGFjZSIsInB1c2giLCJvdGhlcnMiLCJjb21iaW5lIiwiZ2VuZXNpc01lbnUiLCJtYWluTWVudUJ1dHRvbkNsYXNzIiwic3ViTWVudUJ1dHRvbkNsYXNzIiwicmVzcG9uc2l2ZU1lbnVDbGFzcyIsImluaXQiLCJfZ2V0QWxsTWVudXNBcnJheSIsIm1lbnVJY29uQ2xhc3MiLCJzdWJNZW51SWNvbkNsYXNzIiwidG9nZ2xlQnV0dG9ucyIsIm1lbnUiLCJhcHBlbmQiLCJtYWluTWVudSIsInN1Ym1lbnUiLCJ0ZXh0Iiwic3ViTWVudSIsIl9hZGRSZXNwb25zaXZlTWVudUNsYXNzIiwiX2FkZE1lbnVCdXR0b25zIiwib24iLCJfbWFpbm1lbnVUb2dnbGUiLCJfYWRkQ2xhc3NJRCIsIl9zdWJtZW51VG9nZ2xlIiwid2luZG93IiwiX2RvUmVzaXplIiwidHJpZ2dlckhhbmRsZXIiLCJfZ2V0TWVudVNlbGVjdG9yU3RyaW5nIiwiZmluZCIsImJlZm9yZSIsIm1lbnVzVG9Ub2dnbGUiLCJjb25jYXQiLCJidXR0b25zIiwiYXR0ciIsIl9tYXliZUNsb3NlIiwiX3N1cGVyZmlzaFRvZ2dsZSIsIl9jaGFuZ2VTa2lwTGluayIsIl9jb21iaW5lTWVudXMiLCIkdGhpcyIsIm5hdiIsIm5leHQiLCJpZCIsIm1hdGNoIiwicHJpbWFyeU1lbnUiLCJjb21iaW5lZE1lbnVzIiwiZmlsdGVyIiwiaW5kZXgiLCJfZ2V0RGlzcGxheVZhbHVlIiwiYXBwZW5kVG8iLCJoaWRlIiwic2hvdyIsInJlbW92ZUNsYXNzIiwiX3RvZ2dsZUFyaWEiLCJ0b2dnbGVDbGFzcyIsInNsaWRlVG9nZ2xlIiwiY2xvc2VzdCIsInNpYmxpbmdzIiwic2xpZGVVcCIsIl9zdXBlcmZpc2giLCIkYXJncyIsInN1cGVyZmlzaCIsImRlbGF5IiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsImhlaWdodCIsImRyb3BTaGFkb3dzIiwic3BlZWQiLCJtZW51VG9nZ2xlTGlzdCIsIm5ld1ZhbHVlIiwic3RhcnRMaW5rIiwiZW5kTGluayIsIiRpdGVtIiwibGluayIsIiRpZCIsImVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJhdHRyaWJ1dGUiLCJpdGVtQXJyYXkiLCJpdGVtU3RyaW5nIiwibWFwIiwiam9pbiIsIm1lbnVMaXN0IiwidmFsdWVPZiIsInJlYWR5IiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiww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V0FBT3dGLFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixHQUFoQixDQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLFdBQVMzRSxpQkFBVCxHQUE2QjtBQUMzQjtBQUNBLFFBQUk0RSxRQUFRLEdBQUcsRUFBZixDQUYyQixDQUkzQjs7QUFDQSxRQUFJL0YsY0FBYyxLQUFLLElBQXZCLEVBQTZCO0FBQzNCUCxPQUFDLENBQUNRLElBQUYsQ0FBT0QsY0FBUCxFQUF1QixVQUFTRyxHQUFULEVBQWNDLEtBQWQsRUFBcUI7QUFDMUMyRixnQkFBUSxDQUFDcEYsSUFBVCxDQUFjUCxLQUFLLENBQUM0RixPQUFOLEVBQWQ7QUFDRCxPQUZEO0FBR0QsS0FUMEIsQ0FXM0I7OztBQUNBdkcsS0FBQyxDQUFDUSxJQUFGLENBQU9GLFlBQVksQ0FBQ2EsTUFBcEIsRUFBNEIsVUFBU1QsR0FBVCxFQUFjQyxLQUFkLEVBQXFCO0FBQy9DMkYsY0FBUSxDQUFDcEYsSUFBVCxDQUFjUCxLQUFLLENBQUM0RixPQUFOLEVBQWQ7QUFDRCxLQUZEOztBQUlBLFFBQUlELFFBQVEsQ0FBQ3hGLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsYUFBT3dGLFFBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUVEdEcsR0FBQyxDQUFDRCxRQUFELENBQUQsQ0FBWXlHLEtBQVosQ0FBa0IsWUFBVztBQUMzQixRQUFJOUUsaUJBQWlCLE9BQU8sSUFBNUIsRUFBa0M7QUFDaENMLGlCQUFXLENBQUNJLElBQVo7QUFDRDtBQUNGLEdBSkQ7QUFLRCxDQW5aRCxFQW1aRzFCLFFBblpILEVBbVphMEcsTUFuWmIsRSIsImZpbGUiOiIvYXNzZXRzL3Jlc3BvbnNpdmUtbWVudXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiLyoqXG4gKiBUaGlzIHNjcmlwdCBhZGRzIHRoZSBhY2Nlc3NpYmlsaXR5LXJlYWR5IHJlc3BvbnNpdmUgbWVudXMgR2VuZXNpcyBGcmFtZXdvcmsgY2hpbGQgdGhlbWVzLlxuICpcbiAqIEBhdXRob3IgU3R1ZGlvUHJlc3NcbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3B5YmxvZ2dlci9yZXNwb25zaXZlLW1lbnVzXG4gKiBAdmVyc2lvbiAxLjEuM1xuICogQGxpY2Vuc2UgR1BMLTIuMC1vci1sYXRlclxuICovXG5cbihmdW5jdGlvbihkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZ2VuZXNpc01lbnVQYXJhbXMgPVxuICAgICAgdHlwZW9mIGdlbmVzaXNfcmVzcG9uc2l2ZV9tZW51ID09PSAndW5kZWZpbmVkJ1xuICAgICAgICA/ICcnXG4gICAgICAgIDogZ2VuZXNpc19yZXNwb25zaXZlX21lbnUsXG4gICAgZ2VuZXNpc01lbnVzVW5jaGVja2VkID0gZ2VuZXNpc01lbnVQYXJhbXMubWVudUNsYXNzZXMsXG4gICAgZ2VuZXNpc01lbnVzID0ge30sXG4gICAgbWVudXNUb0NvbWJpbmUgPSBbXTtcblxuICAvKipcbiAgICogVmFsaWRhdGUgdGhlIG1lbnVzIHBhc3NlZCBieSB0aGUgdGhlbWUgd2l0aCB3aGF0J3MgYmVpbmcgbG9hZGVkIG9uIHRoZSBwYWdlLFxuICAgKiBhbmQgcGFzcyB0aGUgbmV3IGFuZCBhY2N1cmF0ZSBpbmZvcm1hdGlvbiB0byBvdXIgbmV3IGRhdGEuXG4gICAqIEBwYXJhbSB7Z2VuZXNpc01lbnVzVW5jaGVja2VkfSBSYXcgZGF0YSBmcm9tIHRoZSBsb2NhbGl6ZWQgc2NyaXB0IGluIHRoZSB0aGVtZS5cbiAgICogQHJldHVybiB7YXJyYXl9IGdlbmVzaXNNZW51cyBhcnJheSBnZXRzIHBvcHVsYXRlZCB3aXRoIHVwZGF0ZWQgZGF0YS5cbiAgICogQHJldHVybiB7YXJyYXl9IG1lbnVzVG9Db21iaW5lIGFycmF5IGdldHMgcG9wdWxhdGVkIHdpdGggcmVsZXZhbnQgZGF0YS5cbiAgICovXG4gICQuZWFjaChnZW5lc2lzTWVudXNVbmNoZWNrZWQsIGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgLy8gTWlycm9yIG91ciBncm91cCBvYmplY3QgdG8gcG9wdWxhdGUuXG4gICAgZ2VuZXNpc01lbnVzW2dyb3VwXSA9IFtdO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggaW5zdGFuY2Ugb2YgdGhlIHNwZWNpZmllZCBtZW51IG9uIHRoZSBwYWdlLlxuICAgICQuZWFjaCh0aGlzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgbWVudVN0cmluZyA9IHZhbHVlLFxuICAgICAgICAkbWVudSA9ICQodmFsdWUpO1xuXG4gICAgICAvLyBJZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGluc3RhbmNlLCBhcHBlbmQgdGhlIGluZGV4IGFuZCB1cGRhdGUgYXJyYXkuXG4gICAgICBpZiAoJG1lbnUubGVuZ3RoID4gMSkge1xuICAgICAgICAkLmVhY2goJG1lbnUsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgbmV3U3RyaW5nID0gbWVudVN0cmluZyArICctJyArIGtleTtcblxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MobmV3U3RyaW5nLnJlcGxhY2UoJy4nLCAnJykpO1xuXG4gICAgICAgICAgZ2VuZXNpc01lbnVzW2dyb3VwXS5wdXNoKG5ld1N0cmluZyk7XG5cbiAgICAgICAgICBpZiAoJ2NvbWJpbmUnID09PSBncm91cCkge1xuICAgICAgICAgICAgbWVudXNUb0NvbWJpbmUucHVzaChuZXdTdHJpbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCRtZW51Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGdlbmVzaXNNZW51c1tncm91cF0ucHVzaChtZW51U3RyaW5nKTtcblxuICAgICAgICBpZiAoJ2NvbWJpbmUnID09PSBncm91cCkge1xuICAgICAgICAgIG1lbnVzVG9Db21iaW5lLnB1c2gobWVudVN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gTWFrZSBzdXJlIHRoZXJlIGlzIHNvbWV0aGluZyB0byB1c2UgZm9yIHRoZSAnb3RoZXJzJyBhcnJheS5cbiAgaWYgKHR5cGVvZiBnZW5lc2lzTWVudXMub3RoZXJzID09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2VuZXNpc01lbnVzLm90aGVycyA9IFtdO1xuICB9XG5cbiAgLy8gSWYgdGhlcmUncyBvbmx5IG9uZSBtZW51IG9uIHRoZSBwYWdlIGZvciBjb21iaW5pbmcsIHB1c2ggaXQgdG8gdGhlICdvdGhlcnMnIGFycmF5IGFuZCBudWxsaWZ5IG91ciAnY29tYmluZScgdmFyaWFibGUuXG4gIGlmIChtZW51c1RvQ29tYmluZS5sZW5ndGggPT0gMSkge1xuICAgIGdlbmVzaXNNZW51cy5vdGhlcnMucHVzaChtZW51c1RvQ29tYmluZVswXSk7XG4gICAgZ2VuZXNpc01lbnVzLmNvbWJpbmUgPSBudWxsO1xuICAgIG1lbnVzVG9Db21iaW5lID0gbnVsbDtcbiAgfVxuXG4gIHZhciBnZW5lc2lzTWVudSA9IHt9LFxuICAgIG1haW5NZW51QnV0dG9uQ2xhc3MgPSAnbWVudS10b2dnbGUnLFxuICAgIHN1Yk1lbnVCdXR0b25DbGFzcyA9ICdzdWItbWVudS10b2dnbGUnLFxuICAgIHJlc3BvbnNpdmVNZW51Q2xhc3MgPSAnZ2VuZXNpcy1yZXNwb25zaXZlLW1lbnUnO1xuXG4gIC8vIEluaXRpYWxpemUuXG4gIGdlbmVzaXNNZW51LmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBFeGl0IGVhcmx5IGlmIHRoZXJlIGFyZSBubyBtZW51cyB0byBkbyBhbnl0aGluZy5cbiAgICBpZiAoJChfZ2V0QWxsTWVudXNBcnJheSgpKS5sZW5ndGggPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtZW51SWNvbkNsYXNzID1cbiAgICAgICAgdHlwZW9mIGdlbmVzaXNNZW51UGFyYW1zLm1lbnVJY29uQ2xhc3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgPyBnZW5lc2lzTWVudVBhcmFtcy5tZW51SWNvbkNsYXNzXG4gICAgICAgICAgOiAnZGFzaGljb25zLWJlZm9yZSBkYXNoaWNvbnMtbWVudScsXG4gICAgICBzdWJNZW51SWNvbkNsYXNzID1cbiAgICAgICAgdHlwZW9mIGdlbmVzaXNNZW51UGFyYW1zLnN1Yk1lbnVJY29uQ2xhc3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgPyBnZW5lc2lzTWVudVBhcmFtcy5zdWJNZW51SWNvbkNsYXNzXG4gICAgICAgICAgOiAnZGFzaGljb25zLWJlZm9yZSBkYXNoaWNvbnMtYXJyb3ctZG93bi1hbHQyJyxcbiAgICAgIHRvZ2dsZUJ1dHRvbnMgPSB7XG4gICAgICAgIG1lbnU6ICQoJzxidXR0b24gLz4nLCB7XG4gICAgICAgICAgY2xhc3M6IG1haW5NZW51QnV0dG9uQ2xhc3MsXG4gICAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBmYWxzZSxcbiAgICAgICAgICAnYXJpYS1wcmVzc2VkJzogZmFsc2UsXG4gICAgICAgIH0pLmFwcGVuZChnZW5lc2lzTWVudVBhcmFtcy5tYWluTWVudSksXG4gICAgICAgIHN1Ym1lbnU6ICQoJzxidXR0b24gLz4nLCB7XG4gICAgICAgICAgY2xhc3M6IHN1Yk1lbnVCdXR0b25DbGFzcyxcbiAgICAgICAgICAnYXJpYS1leHBhbmRlZCc6IGZhbHNlLFxuICAgICAgICAgICdhcmlhLXByZXNzZWQnOiBmYWxzZSxcbiAgICAgICAgfSkuYXBwZW5kKFxuICAgICAgICAgICQoJzxzcGFuIC8+Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdzY3JlZW4tcmVhZGVyLXRleHQnLFxuICAgICAgICAgICAgdGV4dDogZ2VuZXNpc01lbnVQYXJhbXMuc3ViTWVudSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKSxcbiAgICAgIH07XG5cbiAgICAvLyBBZGQgdGhlIHJlc3BvbnNpdmUgbWVudSBjbGFzcyB0byB0aGUgYWN0aXZlIG1lbnVzLlxuICAgIF9hZGRSZXNwb25zaXZlTWVudUNsYXNzKCk7XG5cbiAgICAvLyBBZGQgdGhlIG1haW4gbmF2IGJ1dHRvbiB0byB0aGUgcHJpbWFyeSBtZW51LCBvciBleGl0IHRoZSBwbHVnaW4uXG4gICAgX2FkZE1lbnVCdXR0b25zKHRvZ2dsZUJ1dHRvbnMpO1xuXG4gICAgLy8gU2V0dXAgYWRkaXRpb25hbCBjbGFzc2VzLlxuICAgICQoJy4nICsgbWFpbk1lbnVCdXR0b25DbGFzcykuYWRkQ2xhc3MobWVudUljb25DbGFzcyk7XG4gICAgJCgnLicgKyBzdWJNZW51QnV0dG9uQ2xhc3MpLmFkZENsYXNzKHN1Yk1lbnVJY29uQ2xhc3MpO1xuICAgICQoJy4nICsgbWFpbk1lbnVCdXR0b25DbGFzcylcbiAgICAgIC5vbignY2xpY2suZ2VuZXNpc01lbnUtbWFpbmJ1dHRvbicsIF9tYWlubWVudVRvZ2dsZSlcbiAgICAgIC5lYWNoKF9hZGRDbGFzc0lEKTtcbiAgICAkKCcuJyArIHN1Yk1lbnVCdXR0b25DbGFzcykub24oXG4gICAgICAnY2xpY2suZ2VuZXNpc01lbnUtc3ViYnV0dG9uJyxcbiAgICAgIF9zdWJtZW51VG9nZ2xlLFxuICAgICk7XG4gICAgJCh3aW5kb3cpXG4gICAgICAub24oJ3Jlc2l6ZS5nZW5lc2lzTWVudScsIF9kb1Jlc2l6ZSlcbiAgICAgIC50cmlnZ2VySGFuZGxlcigncmVzaXplLmdlbmVzaXNNZW51Jyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBtZW51IHRvZ2dsZSBidXR0b24gdG8gYXBwcm9wcmlhdGUgbWVudXMuXG4gICAqIEBwYXJhbSB7dG9nZ2xlQnV0dG9uc30gT2JqZWN0IG9mIG1lbnUgYnV0dG9ucyB0byB1c2UgZm9yIHRvZ2dsZXMuXG4gICAqL1xuICBmdW5jdGlvbiBfYWRkTWVudUJ1dHRvbnModG9nZ2xlQnV0dG9ucykge1xuICAgIC8vIEFwcGx5IHN1YiBtZW51IHRvZ2dsZSB0byBlYWNoIHN1Yi1tZW51IGZvdW5kIGluIHRoZSBtZW51TGlzdC5cbiAgICAkKF9nZXRNZW51U2VsZWN0b3JTdHJpbmcoZ2VuZXNpc01lbnVzKSlcbiAgICAgIC5maW5kKCcuc3ViLW1lbnUnKVxuICAgICAgLmJlZm9yZSh0b2dnbGVCdXR0b25zLnN1Ym1lbnUpO1xuXG4gICAgaWYgKG1lbnVzVG9Db21iaW5lICE9PSBudWxsKSB7XG4gICAgICB2YXIgbWVudXNUb1RvZ2dsZSA9IGdlbmVzaXNNZW51cy5vdGhlcnMuY29uY2F0KG1lbnVzVG9Db21iaW5lWzBdKTtcblxuICAgICAgLy8gT25seSBhZGQgbWVudSBidXR0b24gdGhlIHByaW1hcnkgbWVudSBhbmQgbmF2cyBOT1QgaW4gdGhlIGNvbWJpbmUgdmFyaWFibGUuXG4gICAgICAkKF9nZXRNZW51U2VsZWN0b3JTdHJpbmcobWVudXNUb1RvZ2dsZSkpLmJlZm9yZSh0b2dnbGVCdXR0b25zLm1lbnUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBcHBseSB0aGUgbWFpbiBtZW51IHRvZ2dsZSB0byBhbGwgbWVudXMgaW4gdGhlIGxpc3QuXG4gICAgICAkKF9nZXRNZW51U2VsZWN0b3JTdHJpbmcoZ2VuZXNpc01lbnVzLm90aGVycykpLmJlZm9yZSh0b2dnbGVCdXR0b25zLm1lbnUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIHJlc3BvbnNpdmUgbWVudSBjbGFzcy5cbiAgICovXG4gIGZ1bmN0aW9uIF9hZGRSZXNwb25zaXZlTWVudUNsYXNzKCkge1xuICAgICQoX2dldE1lbnVTZWxlY3RvclN0cmluZyhnZW5lc2lzTWVudXMpKS5hZGRDbGFzcyhyZXNwb25zaXZlTWVudUNsYXNzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlIG91ciByZXNwb25zaXZlIG1lbnUgZnVuY3Rpb25zIG9uIHdpbmRvdyByZXNpemluZy5cbiAgICovXG4gIGZ1bmN0aW9uIF9kb1Jlc2l6ZSgpIHtcbiAgICB2YXIgYnV0dG9ucyA9ICQoJ2J1dHRvbltpZF49XCJnZW5lc2lzLW1vYmlsZS1cIl0nKS5hdHRyKCdpZCcpO1xuICAgIGlmICh0eXBlb2YgYnV0dG9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX21heWJlQ2xvc2UoYnV0dG9ucyk7XG4gICAgX3N1cGVyZmlzaFRvZ2dsZShidXR0b25zKTtcbiAgICBfY2hhbmdlU2tpcExpbmsoYnV0dG9ucyk7XG4gICAgX2NvbWJpbmVNZW51cyhidXR0b25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIG5hdi0gY2xhc3Mgb2YgdGhlIHJlbGF0ZWQgbmF2aWdhdGlvbiBtZW51IGFzXG4gICAqIGFuIElEIHRvIGFzc29jaWF0ZWQgYnV0dG9uIChoZWxwcyB0YXJnZXQgc3BlY2lmaWMgYnV0dG9ucyBvdXRzaWRlIG9mIGNvbnRleHQpLlxuICAgKi9cbiAgZnVuY3Rpb24gX2FkZENsYXNzSUQoKSB7XG4gICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgIG5hdiA9ICR0aGlzLm5leHQoJ25hdicpLFxuICAgICAgaWQgPSAnY2xhc3MnO1xuXG4gICAgJHRoaXMuYXR0cihcbiAgICAgICdpZCcsXG4gICAgICAnZ2VuZXNpcy1tb2JpbGUtJyArXG4gICAgICAgICQobmF2KVxuICAgICAgICAgIC5hdHRyKGlkKVxuICAgICAgICAgIC5tYXRjaCgvbmF2LVxcdypcXGIvKSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbWJpbmUgb3VyIG1lbnVzIGlmIHRoZSBtb2JpbGUgbWVudSBpcyB2aXNpYmxlLlxuICAgKiBAcGFyYW1zIGJ1dHRvbnNcbiAgICovXG4gIGZ1bmN0aW9uIF9jb21iaW5lTWVudXMoYnV0dG9ucykge1xuICAgIC8vIEV4aXQgZWFybHkgaWYgdGhlcmUgYXJlIG5vIG1lbnVzIHRvIGNvbWJpbmUuXG4gICAgaWYgKG1lbnVzVG9Db21iaW5lID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTcGxpdCB1cCB0aGUgbWVudXMgdG8gY29tYmluZSBiYXNlZCBvbiBvcmRlciBvZiBhcHBlYXJhbmNlIGluIHRoZSBhcnJheS5cbiAgICB2YXIgcHJpbWFyeU1lbnUgPSBtZW51c1RvQ29tYmluZVswXSxcbiAgICAgIGNvbWJpbmVkTWVudXMgPSAkKG1lbnVzVG9Db21iaW5lKS5maWx0ZXIoZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgcmVzcG9uc2l2ZSBtZW51IGlzIGFjdGl2ZSwgYXBwZW5kIGl0ZW1zIGluICdjb21iaW5lZE1lbnVzJyBvYmplY3QgdG8gdGhlICdwcmltYXJ5TWVudScgb2JqZWN0LlxuICAgIGlmICgnbm9uZScgIT09IF9nZXREaXNwbGF5VmFsdWUoYnV0dG9ucykpIHtcbiAgICAgICQuZWFjaChjb21iaW5lZE1lbnVzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICQodmFsdWUpXG4gICAgICAgICAgLmZpbmQoJy5tZW51ID4gbGknKVxuICAgICAgICAgIC5hZGRDbGFzcygnbW92ZWQtaXRlbS0nICsgdmFsdWUucmVwbGFjZSgnLicsICcnKSlcbiAgICAgICAgICAuYXBwZW5kVG8ocHJpbWFyeU1lbnUgKyAnIHVsLmdlbmVzaXMtbmF2LW1lbnUnKTtcbiAgICAgIH0pO1xuICAgICAgJChfZ2V0TWVudVNlbGVjdG9yU3RyaW5nKGNvbWJpbmVkTWVudXMpKS5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoX2dldE1lbnVTZWxlY3RvclN0cmluZyhjb21iaW5lZE1lbnVzKSkuc2hvdygpO1xuICAgICAgJC5lYWNoKGNvbWJpbmVkTWVudXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgJCgnLm1vdmVkLWl0ZW0tJyArIHZhbHVlLnJlcGxhY2UoJy4nLCAnJykpXG4gICAgICAgICAgLmFwcGVuZFRvKHZhbHVlICsgJyB1bC5nZW5lc2lzLW5hdi1tZW51JylcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ21vdmVkLWl0ZW0tJyArIHZhbHVlLnJlcGxhY2UoJy4nLCAnJykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdGlvbiB0byBoYXBwZW4gd2hlbiB0aGUgbWFpbiBtZW51IGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgZnVuY3Rpb24gX21haW5tZW51VG9nZ2xlKCkge1xuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgX3RvZ2dsZUFyaWEoJHRoaXMsICdhcmlhLXByZXNzZWQnKTtcbiAgICBfdG9nZ2xlQXJpYSgkdGhpcywgJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAkdGhpcy50b2dnbGVDbGFzcygnYWN0aXZhdGVkJyk7XG4gICAgJHRoaXMubmV4dCgnbmF2Jykuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3Rpb24gZm9yIHN1Ym1lbnUgdG9nZ2xlcy5cbiAgICovXG4gIGZ1bmN0aW9uIF9zdWJtZW51VG9nZ2xlKCkge1xuICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICBvdGhlcnMgPSAkdGhpcy5jbG9zZXN0KCcubWVudS1pdGVtJykuc2libGluZ3MoKTtcbiAgICBfdG9nZ2xlQXJpYSgkdGhpcywgJ2FyaWEtcHJlc3NlZCcpO1xuICAgIF90b2dnbGVBcmlhKCR0aGlzLCAnYXJpYS1leHBhbmRlZCcpO1xuICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdhY3RpdmF0ZWQnKTtcbiAgICAkdGhpcy5uZXh0KCcuc3ViLW1lbnUnKS5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xuXG4gICAgb3RoZXJzXG4gICAgICAuZmluZCgnLicgKyBzdWJNZW51QnV0dG9uQ2xhc3MpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2YXRlZCcpXG4gICAgICAuYXR0cignYXJpYS1wcmVzc2VkJywgJ2ZhbHNlJyk7XG4gICAgb3RoZXJzLmZpbmQoJy5zdWItbWVudScpLnNsaWRlVXAoJ2Zhc3QnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZS9kZWFjdGl2YXRlIHN1cGVyZmlzaC5cbiAgICogQHBhcmFtcyBidXR0b25zXG4gICAqL1xuICBmdW5jdGlvbiBfc3VwZXJmaXNoVG9nZ2xlKGJ1dHRvbnMpIHtcbiAgICB2YXIgX3N1cGVyZmlzaCA9ICQoJy4nICsgcmVzcG9uc2l2ZU1lbnVDbGFzcyArICcgLmpzLXN1cGVyZmlzaCcpLFxuICAgICAgJGFyZ3MgPSAnZGVzdHJveSc7XG4gICAgaWYgKHR5cGVvZiBfc3VwZXJmaXNoLnN1cGVyZmlzaCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoJ25vbmUnID09PSBfZ2V0RGlzcGxheVZhbHVlKGJ1dHRvbnMpKSB7XG4gICAgICAkYXJncyA9IHtcbiAgICAgICAgZGVsYXk6IDEwMCxcbiAgICAgICAgYW5pbWF0aW9uOiB7IG9wYWNpdHk6ICdzaG93JywgaGVpZ2h0OiAnc2hvdycgfSxcbiAgICAgICAgZHJvcFNoYWRvd3M6IGZhbHNlLFxuICAgICAgICBzcGVlZDogJ2Zhc3QnLFxuICAgICAgfTtcbiAgICB9XG4gICAgX3N1cGVyZmlzaC5zdXBlcmZpc2goJGFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZGlmeSBza2lwIGxpbmsgdG8gbWF0Y2ggbW9iaWxlIGJ1dHRvbnMuXG4gICAqIEBwYXJhbSBidXR0b25zXG4gICAqL1xuICBmdW5jdGlvbiBfY2hhbmdlU2tpcExpbmsoYnV0dG9ucykge1xuICAgIC8vIFN0YXJ0IHdpdGggYW4gZW1wdHkgYXJyYXkuXG4gICAgdmFyIG1lbnVUb2dnbGVMaXN0ID0gX2dldEFsbE1lbnVzQXJyYXkoKTtcblxuICAgIC8vIEV4aXQgb3V0IGlmIHRoZXJlIGFyZSBubyBtZW51IGl0ZW1zIHRvIHVwZGF0ZS5cbiAgICBpZiAoISQobWVudVRvZ2dsZUxpc3QpLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkLmVhY2gobWVudVRvZ2dsZUxpc3QsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlLnJlcGxhY2UoJy4nLCAnJyksXG4gICAgICAgIHN0YXJ0TGluayA9ICdnZW5lc2lzLScgKyBuZXdWYWx1ZSxcbiAgICAgICAgZW5kTGluayA9ICdnZW5lc2lzLW1vYmlsZS0nICsgbmV3VmFsdWU7XG5cbiAgICAgIGlmICgnbm9uZScgPT0gX2dldERpc3BsYXlWYWx1ZShidXR0b25zKSkge1xuICAgICAgICBzdGFydExpbmsgPSAnZ2VuZXNpcy1tb2JpbGUtJyArIG5ld1ZhbHVlO1xuICAgICAgICBlbmRMaW5rID0gJ2dlbmVzaXMtJyArIG5ld1ZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGl0ZW0gPSAkKCcuZ2VuZXNpcy1za2lwLWxpbmsgYVtocmVmPVwiIycgKyBzdGFydExpbmsgKyAnXCJdJyk7XG5cbiAgICAgIGlmIChtZW51c1RvQ29tYmluZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gbWVudXNUb0NvbWJpbmVbMF0pIHtcbiAgICAgICAgJGl0ZW0udG9nZ2xlQ2xhc3MoJ3NraXAtbGluay1oaWRkZW4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRpdGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGxpbmsgPSAkaXRlbS5hdHRyKCdocmVmJyk7XG4gICAgICAgIGxpbmsgPSBsaW5rLnJlcGxhY2Uoc3RhcnRMaW5rLCBlbmRMaW5rKTtcblxuICAgICAgICAkaXRlbS5hdHRyKCdocmVmJywgbGluayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgYWxsIHRoZSBtZW51IHRvZ2dsZXMgaWYgYnV0dG9ucyBhcmUgaGlkZGVuLlxuICAgKiBAcGFyYW0gYnV0dG9uc1xuICAgKi9cbiAgZnVuY3Rpb24gX21heWJlQ2xvc2UoYnV0dG9ucykge1xuICAgIGlmICgnbm9uZScgIT09IF9nZXREaXNwbGF5VmFsdWUoYnV0dG9ucykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgICQoXG4gICAgICAnLicgK1xuICAgICAgICBtYWluTWVudUJ1dHRvbkNsYXNzICtcbiAgICAgICAgJywgLicgK1xuICAgICAgICByZXNwb25zaXZlTWVudUNsYXNzICtcbiAgICAgICAgJyAuc3ViLW1lbnUtdG9nZ2xlJyxcbiAgICApXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2YXRlZCcpXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgLmF0dHIoJ2FyaWEtcHJlc3NlZCcsIGZhbHNlKTtcblxuICAgICQoXG4gICAgICAnLicgKyByZXNwb25zaXZlTWVudUNsYXNzICsgJywgLicgKyByZXNwb25zaXZlTWVudUNsYXNzICsgJyAuc3ViLW1lbnUnLFxuICAgICkuYXR0cignc3R5bGUnLCAnJyk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJpYyBmdW5jdGlvbiB0byBnZXQgdGhlIGRpc3BsYXkgdmFsdWUgb2YgYW4gZWxlbWVudC5cbiAgICogQHBhcmFtICB7aWR9ICRpZCBJRCB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICBDU1MgdmFsdWUgb2YgZGlzcGxheSBwcm9wZXJ0eVxuICAgKi9cbiAgZnVuY3Rpb24gX2dldERpc3BsYXlWYWx1ZSgkaWQpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCRpZCksXG4gICAgICBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIHJldHVybiBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5Jyk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGFyaWEgYXR0cmlidXRlcy5cbiAgICogQHBhcmFtICB7YnV0dG9ufSAkdGhpcyAgICAgcGFzc2VkIHRocm91Z2hcbiAgICogQHBhcmFtICB7YXJpYS14eH0gYXR0cmlidXRlIGFyaWEgYXR0cmlidXRlIHRvIHRvZ2dsZVxuICAgKiBAcmV0dXJuIHtib29sfSAgICAgICAgICAgZnJvbSBfYXJpYVJldHVyblxuICAgKi9cbiAgZnVuY3Rpb24gX3RvZ2dsZUFyaWEoJHRoaXMsIGF0dHJpYnV0ZSkge1xuICAgICR0aGlzLmF0dHIoYXR0cmlidXRlLCBmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiAnZmFsc2UnID09PSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0dXJuIGEgY29tbWEgc2VwYXJhdGVkIHN0cmluZyBvZiBtZW51IHNlbGVjdG9ycy5cbiAgICogQHBhcmFtIHtpdGVtQXJyYXl9IEFycmF5IG9mIG1lbnUgaXRlbXMgdG8gbG9vcCB0aHJvdWdoLlxuICAgKiBAcGFyYW0ge2lnbm9yZVNlY29uZGFyeX0gYm9vbGVhbiBvZiB3aGV0aGVyIHRvIGlnbm9yZSB0aGUgJ3NlY29uZGFyeScgbWVudSBpdGVtLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IENvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXG4gICAqL1xuICBmdW5jdGlvbiBfZ2V0TWVudVNlbGVjdG9yU3RyaW5nKGl0ZW1BcnJheSkge1xuICAgIHZhciBpdGVtU3RyaW5nID0gJC5tYXAoaXRlbUFycmF5LCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbVN0cmluZy5qb2luKCcsJyk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHJldHVybiBhIGdyb3VwIGFycmF5IG9mIGFsbCB0aGUgbWVudXMgaW5cbiAgICogYm90aCB0aGUgJ290aGVycycgYW5kICdjb21iaW5lJyBhcnJheXMuXG4gICAqIEByZXR1cm4ge2FycmF5fSBBcnJheSBvZiBhbGwgbWVudSBpdGVtcyBhcyBjbGFzcyBzZWxlY3RvcnMuXG4gICAqL1xuICBmdW5jdGlvbiBfZ2V0QWxsTWVudXNBcnJheSgpIHtcbiAgICAvLyBTdGFydCB3aXRoIGFuIGVtcHR5IGFycmF5LlxuICAgIHZhciBtZW51TGlzdCA9IFtdO1xuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG1lbnVzIGluIHRoZSAnbWVudXNUb0NvbWJpbmUnIGFycmF5LCBhZGQgdGhlbSB0byAnbWVudUxpc3QnLlxuICAgIGlmIChtZW51c1RvQ29tYmluZSAhPT0gbnVsbCkge1xuICAgICAgJC5lYWNoKG1lbnVzVG9Db21iaW5lLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgIG1lbnVMaXN0LnB1c2godmFsdWUudmFsdWVPZigpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCBtZW51cyBpbiB0aGUgJ290aGVycycgYXJyYXkgdG8gJ21lbnVMaXN0Jy5cbiAgICAkLmVhY2goZ2VuZXNpc01lbnVzLm90aGVycywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgbWVudUxpc3QucHVzaCh2YWx1ZS52YWx1ZU9mKCkpO1xuICAgIH0pO1xuXG4gICAgaWYgKG1lbnVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBtZW51TGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgaWYgKF9nZXRBbGxNZW51c0FycmF5KCkgIT09IG51bGwpIHtcbiAgICAgIGdlbmVzaXNNZW51LmluaXQoKTtcbiAgICB9XG4gIH0pO1xufSkoZG9jdW1lbnQsIGpRdWVyeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9