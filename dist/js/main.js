/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_jquery_modal_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/jquery.modal.min */ "./src/js/library/jquery.modal.min.js");
/* harmony import */ var _library_jquery_modal_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_library_jquery_modal_min__WEBPACK_IMPORTED_MODULE_2__);
// import "%modules%/header/header";




/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");

$(document).ready(function () {
  // modal
  $('.js-modal-init').click(function (event) {
    event.preventDefault();
    $(this).modal({
      fadeDuration: 400
    });
  }); // modal is right

  $('.js-modal-announcement').click(function (event) {
    event.preventDefault();
    $(this).modal({
      fadeDuration: 400,
      blockerClass: 'is-right'
    });
  }); // show/hide menu

  $('.js-toggle-menu').click(function () {
    $(this).toggleClass('is-active');
    $('.header__menu').toggleClass('is-show');
  }); // show/hide search

  $('.js-toggle-search').click(function () {
    $('body').addClass('is-hidden');
    $('.header__search').addClass('is-show');
  });
  $('.js-search-close').click(function () {
    setTimeout(function () {
      $('body').removeClass('is-hidden');
    }, 400);
    $('.header__search').removeClass('is-show');
  }); // slider init

  $('.js-slider-news-init').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $('.js-slider-news-arrows-apend .slider-arrow--prev'),
    nextArrow: $('.js-slider-news-arrows-apend .slider-arrow--next')
  }); // show/hide password

  $('.js-login-switch-password').click(function () {
    $(this).toggleClass('is-active');
    var input = $($(this).next('input'));

    if (input.attr('type') == 'password') {
      input.attr('type', 'text');
    } else {
      input.attr('type', 'password');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/library/jquery.modal.min.js":
/*!********************************************!*\
  !*** ./src/js/library/jquery.modal.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, jQuery) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    Version 0.9.1
*/
!function (o) {
  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? o(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), window, document) : o(jQuery, window, document);
}(function (o, t, i, e) {
  var s = [],
      l = function l() {
    return s.length ? s[s.length - 1] : null;
  },
      n = function n() {
    var o,
        t = !1;

    for (o = s.length - 1; o >= 0; o--) {
      s[o].$blocker && (s[o].$blocker.toggleClass("current", !t).toggleClass("behind", t), t = !0);
    }
  };

  o.modal = function (t, i) {
    var e, n;
    if (this.$body = o("body"), this.options = o.extend({}, o.modal.defaults, i), this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10)), this.$blocker = null, this.options.closeExisting) for (; o.modal.isActive();) {
      o.modal.close();
    }
    if (s.push(this), t.is("a")) {
      if (n = t.attr("href"), this.anchor = t, /^#/.test(n)) {
        if (this.$elm = o(n), 1 !== this.$elm.length) return null;
        this.$body.append(this.$elm), this.open();
      } else this.$elm = o("<div>"), this.$body.append(this.$elm), e = function e(o, t) {
        t.elm.remove();
      }, this.showSpinner(), t.trigger(o.modal.AJAX_SEND), o.get(n).done(function (i) {
        if (o.modal.isActive()) {
          t.trigger(o.modal.AJAX_SUCCESS);
          var s = l();
          s.$elm.empty().append(i).on(o.modal.CLOSE, e), s.hideSpinner(), s.open(), t.trigger(o.modal.AJAX_COMPLETE);
        }
      }).fail(function () {
        t.trigger(o.modal.AJAX_FAIL);
        var i = l();
        i.hideSpinner(), s.pop(), t.trigger(o.modal.AJAX_COMPLETE);
      });
    } else this.$elm = t, this.anchor = t, this.$body.append(this.$elm), this.open();
  }, o.modal.prototype = {
    constructor: o.modal,
    open: function open() {
      var t = this;
      this.block(), this.anchor.blur(), this.options.doFade ? setTimeout(function () {
        t.show();
      }, this.options.fadeDuration * this.options.fadeDelay) : this.show(), o(i).off("keydown.modal").on("keydown.modal", function (o) {
        var t = l();
        27 === o.which && t.options.escapeClose && t.close();
      }), this.options.clickClose && this.$blocker.click(function (t) {
        t.target === this && o.modal.close();
      });
    },
    close: function close() {
      s.pop(), this.unblock(), this.hide(), o.modal.isActive() || o(i).off("keydown.modal");
    },
    block: function block() {
      this.$elm.trigger(o.modal.BEFORE_BLOCK, [this._ctx()]), this.$body.css("overflow", "hidden"), this.$blocker = o('<div class="' + this.options.blockerClass + ' blocker current"></div>').appendTo(this.$body), n(), this.options.doFade && this.$blocker.css("opacity", 0).animate({
        opacity: 1
      }, this.options.fadeDuration), this.$elm.trigger(o.modal.BLOCK, [this._ctx()]);
    },
    unblock: function unblock(t) {
      !t && this.options.doFade ? this.$blocker.fadeOut(this.options.fadeDuration, this.unblock.bind(this, !0)) : (this.$blocker.children().appendTo(this.$body), this.$blocker.remove(), this.$blocker = null, n(), o.modal.isActive() || this.$body.css("overflow", ""));
    },
    show: function show() {
      this.$elm.trigger(o.modal.BEFORE_OPEN, [this._ctx()]), this.options.showClose && (this.closeButton = o('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + "</a>"), this.$elm.append(this.closeButton)), this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker), this.options.doFade ? this.$elm.css({
        opacity: 0,
        display: "inline-block"
      }).animate({
        opacity: 1
      }, this.options.fadeDuration) : this.$elm.css("display", "inline-block"), this.$elm.trigger(o.modal.OPEN, [this._ctx()]);
    },
    hide: function hide() {
      this.$elm.trigger(o.modal.BEFORE_CLOSE, [this._ctx()]), this.closeButton && this.closeButton.remove();
      var t = this;
      this.options.doFade ? this.$elm.fadeOut(this.options.fadeDuration, function () {
        t.$elm.trigger(o.modal.AFTER_CLOSE, [t._ctx()]);
      }) : this.$elm.hide(0, function () {
        t.$elm.trigger(o.modal.AFTER_CLOSE, [t._ctx()]);
      }), this.$elm.trigger(o.modal.CLOSE, [this._ctx()]);
    },
    showSpinner: function showSpinner() {
      this.options.showSpinner && (this.spinner = this.spinner || o('<div class="' + this.options.modalClass + '-spinner"></div>').append(this.options.spinnerHtml), this.$body.append(this.spinner), this.spinner.show());
    },
    hideSpinner: function hideSpinner() {
      this.spinner && this.spinner.remove();
    },
    _ctx: function _ctx() {
      return {
        elm: this.$elm,
        $elm: this.$elm,
        $blocker: this.$blocker,
        options: this.options
      };
    }
  }, o.modal.close = function (t) {
    if (o.modal.isActive()) {
      t && t.preventDefault();
      var i = l();
      return i.close(), i.$elm;
    }
  }, o.modal.isActive = function () {
    return s.length > 0;
  }, o.modal.getCurrent = l, o.modal.defaults = {
    closeExisting: !0,
    escapeClose: !0,
    clickClose: !0,
    closeText: "Close",
    closeClass: "",
    modalClass: "modal",
    blockerClass: "jquery-modal",
    spinnerHtml: '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',
    showSpinner: !0,
    showClose: !0,
    fadeDuration: null,
    fadeDelay: 1
  }, o.modal.BEFORE_BLOCK = "modal:before-block", o.modal.BLOCK = "modal:block", o.modal.BEFORE_OPEN = "modal:before-open", o.modal.OPEN = "modal:open", o.modal.BEFORE_CLOSE = "modal:before-close", o.modal.CLOSE = "modal:close", o.modal.AFTER_CLOSE = "modal:after-close", o.modal.AJAX_SEND = "modal:ajax:send", o.modal.AJAX_SUCCESS = "modal:ajax:success", o.modal.AJAX_FAIL = "modal:ajax:fail", o.modal.AJAX_COMPLETE = "modal:ajax:complete", o.fn.modal = function (t) {
    return 1 === this.length && new o.modal(this, t), this;
  }, o(i).on("click.modal", 'a[rel~="modal:close"]', o.modal.close), o(i).on("click.modal", 'a[rel~="modal:open"]', function (t) {
    t.preventDefault(), o(this).modal();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map