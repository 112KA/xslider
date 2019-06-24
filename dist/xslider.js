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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/xslider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/modules/SlideController.js":
/*!****************************************!*\
  !*** ./src/modules/SlideController.js ***!
  \****************************************/
/*! exports provided: SlideController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideController", function() { return SlideController; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_Event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/Event */ "./src/modules/core/Event.js");
/* harmony import */ var _core_EventDispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/EventDispatcher */ "./src/modules/core/EventDispatcher.js");
/* harmony import */ var _core_Stage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/Stage */ "./src/modules/core/Stage.js");
/* harmony import */ var _components_AutoPlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/AutoPlay */ "./src/modules/components/AutoPlay.js");
/* harmony import */ var _components_Indexer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Indexer */ "./src/modules/components/Indexer.js");
/* harmony import */ var _components_converter_Inliner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/converter/Inliner */ "./src/modules/components/converter/Inliner.js");
/* harmony import */ var _display_Slide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./display/Slide */ "./src/modules/display/Slide.js");
/* harmony import */ var _display_UI__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./display/UI */ "./src/modules/display/UI.js");
/* harmony import */ var _renderer_DefaultRenderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./renderer/DefaultRenderer */ "./src/modules/renderer/DefaultRenderer.js");










 // import {Bench} from './components/debug/Bench'




var SlideController =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SlideController, _EventDispatcher);

  function SlideController() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SlideController);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SlideController).call(this));
    _this.indexer = new _components_Indexer__WEBPACK_IMPORTED_MODULE_9__["Indexer"]();
    _this.renderer = {
      "default": new _renderer_DefaultRenderer__WEBPACK_IMPORTED_MODULE_13__["DefaultRenderer"](),
      gl: undefined
    };
    _this.ui = new _display_UI__WEBPACK_IMPORTED_MODULE_12__["UI"]();
    _this.autoplay = new _components_AutoPlay__WEBPACK_IMPORTED_MODULE_8__["AutoPlay"]();
    _this.container = new _display_Slide__WEBPACK_IMPORTED_MODULE_11__["SlideContainer"]();

    _this._defineHandlers();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SlideController, [{
    key: "_defineHandlers",
    value: function _defineHandlers() {
      var _this2 = this;

      this._onResize = function (e) {
        var w = _this2.dom.width,
            h = _this2.dom.height;

        _this2.data.list.forEach(function (slide) {
          slide.needsResize = true;
        });

        _this2.renderer["default"].resize(w, h);

        _this2.renderer.gl.resize(w, h);

        return _this2.container.resize(w, h).then(function () {
          _this2.renderer.gl.render(_this2.indexer);
        });
      };

      this._onCompleteSlide = function () {
        _core_Stage__WEBPACK_IMPORTED_MODULE_7__["stage"].off('tick', _this2._onTick);
        _this2.data.option.get('touchMove') && _this2.ui.on(_core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].START, _this2._onChange);

        _this2.ui.on('index', _this2._onChange);

        _this2.autoplay.start();
      };

      this._onTick = function (e) {
        _this2.data.time = e.time;

        _this2.indexer.tick();

        _this2.renderer["default"].render(_this2.indexer);

        _this2.container.ready(_this2.indexer).then(function () {
          _this2.renderer.gl.render(_this2.indexer);
        }, function (message) {
          console.log("reject ::", message);
        });

        _this2.ui.pager.set({
          index: _this2.indexer.current
        });
      };

      this._onChange = function (e) {
        switch (e.type) {
          case _display_UI__WEBPACK_IMPORTED_MODULE_12__["UI"].EVENT.PREV:
            _this2.prev();

            break;

          case _display_UI__WEBPACK_IMPORTED_MODULE_12__["UI"].EVENT.NEXT:
          case _components_AutoPlay__WEBPACK_IMPORTED_MODULE_8__["AutoPlay"].EVENT.TICK:
            _this2.next();

            break;

          case 'index':
            _this2.indexer.to(e.value);

            _this2.container.ready(_this2.indexer).then(function () {
              _core_Stage__WEBPACK_IMPORTED_MODULE_7__["stage"].on('tick', _this2._onTick);
            }, function (message) {
              console.log('on index rejected : ', message);
            });

            break;

          case 'head':
            _this2.ui.prev && (_this2.ui.prev.active = !_this2.indexer.get('head'));
            break;

          case 'tail':
            _this2.ui.next && (_this2.ui.next.active = !_this2.indexer.get('tail'));
            break;

          case _core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].START:
            _core_Stage__WEBPACK_IMPORTED_MODULE_7__["stage"].on(_core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].MOVE, _this2._onChange);
            _core_Stage__WEBPACK_IMPORTED_MODULE_7__["stage"].on(_core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].END, _this2._onChange);

            _this2.ui.off('index', _this2._onChange);

            _this2.indexer.down();

            _this2.autoplay.stop();

            _core_Stage__WEBPACK_IMPORTED_MODULE_7__["stage"].on('tick', _this2._onTick);
            break;

          case _core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].MOVE:
            var dx = (e.clientX - e.clientX0) / _this2.dom.width;

            _this2.indexer.move(-dx);

            break;

          case _core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].END:
            _core_Stage__WEBPACK_IMPORTED_MODULE_7__["stage"].off(_core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].MOVE, _this2._onChange);
            _core_Stage__WEBPACK_IMPORTED_MODULE_7__["stage"].off(_core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].END, _this2._onChange);

            _this2.indexer.up();

            break;
        }
      };
    }
  }, {
    key: "setup",
    value: function setup(renderer, data) {
      var _this3 = this;

      this.renderer.gl = renderer;
      this.data = data;
      this.dom = data.dom;
      this.renderer["default"].setup(this.data);
      this.renderer.gl = this.data.getRenderer();
      this.renderer.gl.setup(this.data, this.container);
      this.container.setup(this.renderer.gl.mesh);
      this.ui.setup(this.data);
      this.indexer.setup(this.data);
      this.indexer.on('complete', this._onCompleteSlide);

      if (!this.data.option.loop) {
        this.indexer.on('head', this._onChange);
        this.indexer.on('tail', this._onChange);
      }

      this.autoplay.on(_components_AutoPlay__WEBPACK_IMPORTED_MODULE_8__["AutoPlay"].EVENT.TICK, this._onChange);
      this.autoplay.setup(this.data.option.autoplay);
      this.dom.on('resize', this._onResize);
      _components_converter_Inliner__WEBPACK_IMPORTED_MODULE_10__["Inliner"].resolveFonts().then(function () {
        return _this3.container.ready(_this3.indexer);
      }).then(this._onResize).then(function () {
        _this3.ui.on('index', _this3._onChange);

        _this3.ui.on(_display_UI__WEBPACK_IMPORTED_MODULE_12__["UI"].EVENT.PREV, _this3._onChange);

        _this3.ui.on(_display_UI__WEBPACK_IMPORTED_MODULE_12__["UI"].EVENT.NEXT, _this3._onChange);

        _this3.data.option.get('touchMove') && _this3.ui.on(_core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].START, _this3._onChange);

        _this3.autoplay.start();

        _core_Stage__WEBPACK_IMPORTED_MODULE_7__["stage"].on('tick', _this3._onTick);
      }, function (message) {
        console.log("first ready rejected : ", message);
      });
    }
  }, {
    key: "prev",
    value: function prev() {
      this.data.option.get('touchMove') && this.ui.off(_core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].START, this._onChange);
      this.autoplay.stop();
      this.indexer.prev();
      this.ui.pager.set({
        index: this.indexer.current
      });
    }
  }, {
    key: "next",
    value: function next() {
      this.data.option.get('touchMove') && this.ui.off(_core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].START, this._onChange);
      this.autoplay.stop();
      this.indexer.next();
      this.ui.pager.set({
        index: this.indexer.current
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (!this.data) return;
      _core_Stage__WEBPACK_IMPORTED_MODULE_7__["stage"].off('tick', this._onTick);
      _core_Stage__WEBPACK_IMPORTED_MODULE_7__["stage"].off(_core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].MOVE, this._onChange);
      _core_Stage__WEBPACK_IMPORTED_MODULE_7__["stage"].off(_core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].END, this._onChange);
      this.ui.off('index', this._onChange);
      this.ui.off(_display_UI__WEBPACK_IMPORTED_MODULE_12__["UI"].EVENT.PREV, this._onChange);
      this.ui.off(_display_UI__WEBPACK_IMPORTED_MODULE_12__["UI"].EVENT.NEXT, this._onChange);
      this.data.option.get('touchMove') && this.ui.off(_core_Event__WEBPACK_IMPORTED_MODULE_5__["TouchEvent"].START, this._onChange);
      this.ui.dispose();
      this.dom.off('resize', this._onResize);
      this.indexer.off('complete', this._onCompleteSlide);

      if (!this.data.option.loop) {
        this.indexer.off('head', this._onChange);
        this.indexer.off('tail', this._onChange);
      }

      this.renderer.gl.dispose();
      this.renderer["default"].dispose();
      this.container.dispose();
      this.data = undefined;
    }
  }]);

  return SlideController;
}(_core_EventDispatcher__WEBPACK_IMPORTED_MODULE_6__["EventDispatcher"]);

/***/ }),

/***/ "./src/modules/components/AutoPlay.js":
/*!********************************************!*\
  !*** ./src/modules/components/AutoPlay.js ***!
  \********************************************/
/*! exports provided: AutoPlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoPlay", function() { return AutoPlay; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_EventDispatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/EventDispatcher */ "./src/modules/core/EventDispatcher.js");
/* harmony import */ var _core_Stage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Stage */ "./src/modules/core/Stage.js");







var AutoPlay =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AutoPlay, _EventDispatcher);

  function AutoPlay() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AutoPlay);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AutoPlay).call(this));

    _this._defineHandlers();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AutoPlay, [{
    key: "_defineHandlers",
    value: function _defineHandlers() {
      var _this2 = this;

      this._on = {
        tick: function tick(e) {
          if (e.time > _this2.option.delay) {
            _this2.dispatch(AutoPlay.EVENT.TICK);
          }
        }
      };
    }
  }, {
    key: "setup",
    value: function setup(option) {
      this.option = option;
    }
  }, {
    key: "start",
    value: function start() {
      if (this.enabled) {
        _core_Stage__WEBPACK_IMPORTED_MODULE_6__["stage"].on('tick', this._on.tick);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.enabled) {
        _core_Stage__WEBPACK_IMPORTED_MODULE_6__["stage"].off('tick', this._on.tick);
      }
    }
  }, {
    key: "enabled",
    get: function get() {
      return this.option != undefined;
    }
  }]);

  return AutoPlay;
}(_core_EventDispatcher__WEBPACK_IMPORTED_MODULE_5__["EventDispatcher"]);
AutoPlay.EVENT = {
  TICK: "autoplay_tick"
};

/***/ }),

/***/ "./src/modules/components/Data.js":
/*!****************************************!*\
  !*** ./src/modules/components/Data.js ***!
  \****************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option */ "./src/modules/components/Option.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "./src/modules/components/Utils.js");
/* harmony import */ var _display_Dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../display/Dom */ "./src/modules/display/Dom.js");
/* harmony import */ var _display_Slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../display/Slide */ "./src/modules/display/Slide.js");
/* harmony import */ var _renderer_DefaultRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renderer/DefaultRenderer */ "./src/modules/renderer/DefaultRenderer.js");
/* harmony import */ var _renderer_XRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderer/XRenderer */ "./src/modules/renderer/XRenderer.js");






 // import {ThreeRenderer} from '../renderer/ThreeRenderer'


var Data =
/*#__PURE__*/
function () {
  function Data() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Data);

    this.dom = new _display_Dom__WEBPACK_IMPORTED_MODULE_4__["Dom"]();
    this.time = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Data, [{
    key: "setup",
    value: function setup() {
      var _this = this;

      this.option = _Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].extend(_Option__WEBPACK_IMPORTED_MODULE_2__["Option"], (arguments.length <= 1 ? undefined : arguments[1]) || {});
      this.dom.setup(arguments.length <= 0 ? undefined : arguments[0]);

      if (this.option.debug == _Option__WEBPACK_IMPORTED_MODULE_2__["Option"].Debug.DISPLAY.DOM) {
        this.dom.container.classList.add("xslider-debug");
      }

      this.list = [];
      this.dom.slides.forEach(function (element) {
        _this.list.push(new _display_Slide__WEBPACK_IMPORTED_MODULE_5__["Slide"](element, _this.option.debug));
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (!this.option) return;
      this.list.forEach(function (slide) {
        slide.dispose();
      });
      this.dom.dispose();
      this.option = undefined;
    }
  }, {
    key: "getRenderer",
    value: function getRenderer() {
      if (this.option.debug) {
        return new _renderer_DefaultRenderer__WEBPACK_IMPORTED_MODULE_6__["DefaultRenderer"]();
      } else {
        // return this.option.renderer || new ThreeRenderer();
        return this.option.renderer || new _renderer_XRenderer__WEBPACK_IMPORTED_MODULE_7__["XRenderer"]();
      }
    }
  }]);

  return Data;
}();

/***/ }),

/***/ "./src/modules/components/Indexer.js":
/*!*******************************************!*\
  !*** ./src/modules/components/Indexer.js ***!
  \*******************************************/
/*! exports provided: Indexer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indexer", function() { return Indexer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_EventDispatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/EventDispatcher */ "./src/modules/core/EventDispatcher.js");






var Indexer =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Indexer, _EventDispatcher);

  function Indexer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Indexer);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Indexer).call(this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Indexer, [{
    key: "setup",
    value: function setup(data) {
      this.data = data;
      this._target = data.option.initialSlideIndex;
      this._v = this._target - 1;
      this._length = data.dom.slides.length;
      this._state = Indexer.STATE.DEFAULT;
      this.progress = 0;
      this.set({
        'head': undefined,
        'tail': undefined
      });
      !this.data.option.loop && (this._target = this.constrain(this._target));
      this.tick();
    }
  }, {
    key: "prev",
    value: function prev() {
      this._target--;
      !this.data.option.loop && (this._target = this.constrain(this._target));
    }
  }, {
    key: "next",
    value: function next() {
      this._target++;
      !this.data.option.loop && (this._target = this.constrain(this._target));
    }
  }, {
    key: "to",
    value: function to(index) {
      if (this.data.option.loop) {
        var d0 = index - this.current,
            d1,
            diff;

        if (d0 > 0) {
          d1 = d0 - this._length;
          diff = d0 > -d1 ? d1 : d0;
        } else {
          d1 = d0 + this._length;
          diff = -d0 > d1 ? d1 : d0;
        }

        this._target += diff;
      } else {
        this._target = index;
      }
    }
  }, {
    key: "down",
    value: function down() {
      this._state = Indexer.STATE.DOWN;
      this._move = 0;
    }
  }, {
    key: "move",
    value: function move(v) {
      this._v += v;
      this._move = v;
      !this.data.option.loop && (this._v = this.constrain(this._v));
      this._target = this._v;
    }
  }, {
    key: "up",
    value: function up() {
      this._state = Indexer.STATE.UP;
      !this.data.option.get('throwable', 'touchMove') && (this._move = 0);
    }
  }, {
    key: "constrain",
    value: function constrain(v) {
      var ret = v < 0 ? 0 : this._length - 1 < v ? this._length - 1 : v;
      this.set({
        'head': ret == 0,
        'tail': ret == this._length - 1
      });
      return ret;
    }
  }, {
    key: "tick",
    value: function tick() {
      var complete = false;

      switch (this._state) {
        case Indexer.STATE.DOWN:
          break;

        case Indexer.STATE.UP:
          this._target += this._move;
          !this.data.option.loop && (this._target = this.constrain(this._target));
          this._move *= 0.95;
          this._v = this._target;

          if (Math.abs(this._move) < 0.01) {
            this._target = Math.round(this._v);
            this._state = Indexer.STATE.DEFAULT;
          }

          break;

        default:
          !this.data.option.loop && (this._target = this.constrain(this._target));
          this._v += (this._target - this._v) * this.data.option.easing;

          if (Math.abs(this._target - this._v) < 0.001) {
            this._v = this._target;
            complete = true;
          }

          break;
      }

      var v = this._v % this._length + this._length;
      this.progress = v % 1;
      this._i0 = Math.floor(v) % this._length;

      var i1 = Math.ceil(v) % this._length;

      this._i1 = this._i0 !== i1 ? i1 : undefined;
      complete && this.dispatch('complete');
    }
  }, {
    key: "current",
    get: function get() {
      var v = this._target % this._length + this._length;
      return Math.round(v) % this._length;
    }
  }, {
    key: "i0",
    get: function get() {
      return this._i0;
    }
  }, {
    key: "i1",
    get: function get() {
      return this._i1;
    }
  }]);

  return Indexer;
}(_core_EventDispatcher__WEBPACK_IMPORTED_MODULE_5__["EventDispatcher"]);
Indexer.STATE = {
  DEFAULT: 'DEFAULT',
  DOWN: 'DOWN',
  UP: 'UP'
};

/***/ }),

/***/ "./src/modules/components/Net.js":
/*!***************************************!*\
  !*** ./src/modules/components/Net.js ***!
  \***************************************/
/*! exports provided: net */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "net", function() { return net; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Net =
/*#__PURE__*/
function () {
  function Net() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Net);

    /*
     * Only WOFF and EOT mime types for fonts are 'real'
     * see http://www.iana.org/assignments/media-types/media-types.xhtml
     */
    var WOFF = 'application/font-woff';
    var JPEG = 'image/jpeg';
    this.mimes = {
      'woff': WOFF,
      'woff2': WOFF,
      'ttf': 'application/font-truetype',
      'eot': 'application/vnd.ms-fontobject',
      'png': 'image/png',
      'jpg': JPEG,
      'jpeg': JPEG,
      'gif': 'image/gif',
      'tiff': 'image/tiff',
      'svg': 'image/svg+xml'
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Net, [{
    key: "loadImage",
    value: function loadImage(image, src) {
      return new Promise(function (resolve, reject) {
        var check = function check() {
          if (!image.complete) {
            setTimeout(check, 10);
          } else {
            resolve();
          }
        };

        image.src = src;
        check();
      });
    }
  }, {
    key: "get",
    value: function get(url, responseType) {
      return new Promise(function (resolve, reject) {
        var onChange = function onChange() {
          switch (xhr.readyState) {
            case 4:
              if (xhr.status == 200 || xhr.status == 304) {
                resolve(xhr.response);
              } else {
                reject();
              }

              break;
          }
        };

        var onTimeout = function onTimeout() {
          reject();
        };

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = onChange;
        xhr.ontimeout = onTimeout;
        xhr.responseType = responseType;
        xhr.timeout = 30000;
        xhr.open('GET', url, true);
        xhr.send(null);
      });
    } // async getDataURI(url) {
    // 	let blob;
    // 	blob = await this.get(url, 'blob');
    // 	blob = await this.readBlob(blob);
    // 	return blob;
    // }

  }, {
    key: "getDataURI",
    value: function getDataURI(url) {
      var _this = this;

      var ext = this.parseExtension(url);
      return this.get(url, 'blob').then(function (blob) {
        return _this.readBlob.bind(_this)(blob, ext);
      });
    }
  }, {
    key: "parseExtension",
    value: function parseExtension(url) {
      var match = /\.([^\.\/]*?)$/g.exec(url);
      if (match) return match[1];else return null;
    }
  }, {
    key: "getMimeType",
    value: function getMimeType(ext) {}
  }, {
    key: "readBlob",
    value: function readBlob(blob, ext) {
      var reader = new FileReader(),
          mimeType = ext ? this.mimes[ext] : null;
      return new Promise(function (resolve, reject) {
        reader.onloadend = function () {
          var ret = reader.result;

          if (mimeType) {
            ret = ret.split(',')[1];
            ret = 'data:' + mimeType + ';base64,' + ret;
          }

          resolve(ret);
        };

        reader.readAsDataURL(blob);
      });
    }
  }]);

  return Net;
}();

var net = new Net();

/***/ }),

/***/ "./src/modules/components/Option.js":
/*!******************************************!*\
  !*** ./src/modules/components/Option.js ***!
  \******************************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony import */ var _transitions_BaseTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transitions/BaseTransition */ "./src/modules/transitions/BaseTransition.js");

var Option = {
  //default value
  selector: "#xslider",
  initialSlideIndex: 0,
  autoplay: false,
  loop: true,
  touchMove: {
    throwable: true
  },
  renderer: undefined,
  debug: false,
  easing: 0.15,
  transition: _transitions_BaseTransition__WEBPACK_IMPORTED_MODULE_0__["BaseTransition"],
  get: function get(property, module) {
    if (module) {
      if (!this[module]) {
        return undefined;
      } else {
        return this[module][property];
      }
    } else {
      return this[property];
    }
  }
};
Option.Debug = {
  DISPLAY: {
    DOM: "DEBUG_DISPLAY_DOM",
    SVG: "DEBUG_DISPLAY_SVG",
    IMG: "DEBUG_DISPLAY_IMG"
  }
};

/***/ }),

/***/ "./src/modules/components/Utils.js":
/*!*****************************************!*\
  !*** ./src/modules/components/Utils.js ***!
  \*****************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = {
  extend: function extend(base, o) {
    var ret = {};
    Object.assign(ret, base);
    var entries = Object.entries(o);
    entries.forEach(function (entry) {
      ret[entry[0]] = entry[1];
    });
    return ret;
  },
  delegate: function delegate(base, o) {
    var entries = Object.entries(o);
    entries.forEach(function (entry) {
      base[entry[0]] = entry[1];
    });
  },
  clamp: function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  },
  getQuery: function getQuery(key) {
    var cached = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (!this._query || !cached) {
      this._query = {}; //最初の?を除いた文字列を取得

      var query = window.location.search.substring(1);
      var parameters = query.split('&');

      for (var i = 0; i < parameters.length; i++) {
        var element = parameters[i].split("=");
        var paramName = decodeURIComponent(element[0]);
        var paramValue = decodeURIComponent(element[1]);
        this._query[paramName] = paramValue;
      }
    }

    return this._query[key];
  } // toSvg(dom) {
  // 	return new Promise((resolve, reject) => {
  // 		domtoimage.toSvg(dom)
  // 			.then((uri) => {
  // 				// console.log('uri: ', uri);
  // 				const svgString = uri.replace("data:image/svg+xml;charset=utf-8,","");
  // 				const parser = new DOMParser();
  // 				const svg = parser.parseFromString(svgString, "image/svg+xml");
  // 				resolve(svg);
  // 			});
  // 	});
  // }

};

/***/ }),

/***/ "./src/modules/components/converter/Cloner.js":
/*!****************************************************!*\
  !*** ./src/modules/components/converter/Cloner.js ***!
  \****************************************************/
/*! exports provided: cloner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloner", function() { return cloner; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Cloner =
/*#__PURE__*/
function () {
  function Cloner() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Cloner);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Cloner, [{
    key: "copyStyle",
    value: function copyStyle(original, target, excludes) {
      var o = {};

      if (excludes && excludes.length > 0) {
        for (var i = 0; i < excludes.length; i++) {
          var name = excludes[i];
          o[name] = target.getPropertyValue(name);
        }
      }

      if (original.cssText) {
        target.cssText = original.cssText; //remove fontStrech
        // const matches = target.cssText.match(/font:( [^ ;]+)+;/);
        // if(matches) {
        // 	const removeFontStrech = s => {
        // 		let arr = s.split(" ");
        // 		arr.splice(3, 1);
        // 		return arr.join(" ");
        // 	};
        // 	for(let i=0; i<matches.length; i++) {
        // 		target.cssText = target.cssText.replace(matches[i], removeFontStrech(matches[i]));
        // 	}
        // }
      } else {
        for (var _i = 0; _i < original.length; _i++) {
          var _name = original[_i];
          target.setProperty(_name, original.getPropertyValue(_name), original.getPropertyPriority(_name));
        }
      }

      Object.getOwnPropertyNames(o).forEach(function (name) {
        target.setProperty(name, o[name]);
      });
    }
  }, {
    key: "cloneNode",
    value: function cloneNode(original) {
      var _this = this;

      var clone = original.cloneNode(false);
      return new Promise(function (resolve, reject) {
        if (!(original instanceof Element)) {
          resolve(clone);
        } else {
          _this.copyStyle(window.getComputedStyle(original), clone.style);

          if (original.hasChildNodes()) {
            var children = original.childNodes;
            var arr = [];
            children.forEach(function (child, i, list) {
              var p = _this.cloneNode(child).then(function (childClone) {
                // clone.appendChild(childClone);
                _this.insertChildAtIndex(clone, childClone, i);
              });

              arr.push(p);
            });
            Promise.all(arr).then(function () {
              resolve(clone);
            });
          } else {
            resolve(clone);
          }
        }
      });
    }
  }, {
    key: "insertChildAtIndex",
    value: function insertChildAtIndex(parent, child, index) {
      if (!index) index = 0;

      if (index >= parent.childNodes.length) {
        parent.appendChild(child);
      } else {
        parent.insertBefore(child, parent.childNodes[index]);
      }
    }
  }, {
    key: "cloneStyle",
    value: function cloneStyle(original, target, excludes) {
      var _this2 = this;

      if (!(original instanceof Element)) return target;
      this.copyStyle(window.getComputedStyle(original), target.style, excludes);

      if (original.hasChildNodes()) {
        var children = original.childNodes;
        children.forEach(function (child, i, list) {
          _this2.cloneStyle(child, target.childNodes[i], excludes);
        });
      } else {
        return target;
      }
    }
  }]);

  return Cloner;
}();

var cloner = new Cloner();

/***/ }),

/***/ "./src/modules/components/converter/Inliner.js":
/*!*****************************************************!*\
  !*** ./src/modules/components/converter/Inliner.js ***!
  \*****************************************************/
/*! exports provided: Inliner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inliner", function() { return Inliner; });
/* harmony import */ var _Cloner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cloner */ "./src/modules/components/converter/Cloner.js");
/* harmony import */ var _Net__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Net */ "./src/modules/components/Net.js");


var Inliner = {
  URL_REGEX: /url\(['"]?([^'"]+?)['"]?\)/g,
  resolveFonts: function resolveFonts() {
    var _this = this;

    return new Promise(function (resolve, reject) {
      if (_this.inlinedFontString) {
        resolve();
      } else {
        var fontStrings = _this.readFontRules().map(function (rule) {
          return rule.cssText;
        });

        _this.inlineFonts(fontStrings).then(function (inlinedFontStrings) {
          _this.inlinedFontString = inlinedFontStrings.join(" "); // this.inlinedFontString = inlinedFontStrings.join("\n");
          // console.log("this.inlinedFontString", this.inlinedFontString)

          resolve();
        });
      }
    });
  },
  readFontRules: function readFontRules() {
    var fontRules = [];
    var list = document.styleSheets;

    for (var j = 0; j < list.length; j++) {
      var ss = list[j];

      if (ss.cssRules) {
        for (var i = 0; i < ss.cssRules.length; i++) {
          var rule = ss.cssRules[i];

          if (rule.type === CSSRule.FONT_FACE_RULE) {
            fontRules.push(rule);
          }
        }
      }
    } // console.log("fontRules", fontRules)


    return fontRules;
  },
  inlineFonts: function inlineFonts(fontStrings) {
    var _this2 = this;

    var arr = fontStrings.map(function (string) {
      return _this2._inline(string);
    });
    return Promise.all(arr);
  },
  inlineNode: function inlineNode(node) {
    return _Cloner__WEBPACK_IMPORTED_MODULE_0__["cloner"].cloneNode(node).then(this.inlineImage.bind(this));
  },
  _inline: function _inline(string) {
    // console.log('string', string)
    var urls = this.searchUrls(string);
    var arr = [];
    urls.map(function (url) {
      var p = _Net__WEBPACK_IMPORTED_MODULE_1__["net"].getDataURI(url).then(function (dataURI) {
        string = string.replace(url, dataURI);
      });
      arr.push(p);
    });
    return Promise.all(arr).then(function () {
      return string;
    });
  },
  searchUrls: function searchUrls(string) {
    var _this3 = this;

    var result = [];
    var match;

    while ((match = this.URL_REGEX.exec(string)) !== null) {
      result.push(match[1]);
    }

    return result.filter(function (url) {
      return _this3.isDataURI(url);
    });
  },
  inlineImage: function inlineImage(node) {
    var _this4 = this;

    return new Promise(function (resolve, reject) {
      Promise.resolve(node).then(_this4.inlineImageElement.bind(_this4)).then(_this4.inlineBackgroundImage.bind(_this4)).then(function () {
        if (node.hasChildNodes()) {
          var children = node.childNodes;
          var arr = [];
          children.forEach(function (child, i, list) {
            var p = _this4.inlineImage(child);

            arr.push(p);
          });
          Promise.all(arr).then(function () {
            resolve(node);
          });
        } else {
          resolve(node);
        }
      });
    });
  },
  inlineImageElement: function inlineImageElement(node) {
    if (!(node instanceof HTMLImageElement)) return node;
    if (this.isDataURI(node.src)) return node; // return node;

    return new Promise(function (resolve, reject) {
      _Net__WEBPACK_IMPORTED_MODULE_1__["net"].getDataURI(node.src).then(function (dataURI) {
        node.onload = function () {
          resolve(node);
        };

        node.onerror = reject;
        node.src = dataURI;
      });
    });
  },
  inlineBackgroundImage: function inlineBackgroundImage(node) {
    if (!(node instanceof Element)) return node;
    var background = node.style.getPropertyValue('background');
    if (!background) return node;
    return this._inline(background).then(function (inlined) {
      node.style.setProperty('background', inlined);
      return node;
    });
  },
  isDataURI: function isDataURI(string) {
    return string.search(/^(data:)/) === -1;
  }
};

/***/ }),

/***/ "./src/modules/components/converter/SvgConverter.js":
/*!**********************************************************!*\
  !*** ./src/modules/components/converter/SvgConverter.js ***!
  \**********************************************************/
/*! exports provided: converter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "converter", function() { return converter; });
/* harmony import */ var _Inliner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inliner */ "./src/modules/components/converter/Inliner.js");

/**
 * It's based on {@link https://github.com/tsayen/dom-to-image dom-to-image by Anatolii Saienko}.
 */

var converter = {
  parser: new DOMParser(),
  convert: function convert(node, width, height) {
    /*
    		const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="`+width+`" height="`+height+`">
    	<foreignObject x="0" y="0" width="100%" height="100%">
    		<body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;">
    			<style>`+Inliner.inlinedFontString+`</style>
    		</body>
    	</foreignObject>
    </svg>
    		`
    		// console.log('--')
    		// console.log(Inliner.inlinedFontString)
    		const svg = this.parser.parseFromString(svgString, "text/xml");
    		let o = svg.getElementsByTagName('body')[0];
    		o.appendChild(node);
    */
    node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
    var svgString = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + width + "\" height=\"" + height + "\">\n\t\t<foreignObject x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">\n\t\t</foreignObject>\n\t\t</svg>";
    var svg = this.parser.parseFromString(svgString, "text/xml"),
        styleNode = document.createElement('style');
    styleNode.appendChild(document.createTextNode(_Inliner__WEBPACK_IMPORTED_MODULE_0__["Inliner"].inlinedFontString));
    node.appendChild(styleNode);
    var o = svg.getElementsByTagName('foreignObject')[0];
    o.appendChild(node); // console.log('svg: ', svg.childNodes[0]);

    return svg;
  }
};

/***/ }),

/***/ "./src/modules/components/graphics/GLGraphics.js":
/*!*******************************************************!*\
  !*** ./src/modules/components/graphics/GLGraphics.js ***!
  \*******************************************************/
/*! exports provided: GLGraphics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLGraphics", function() { return GLGraphics; });
/* harmony import */ var _assets_Buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/Buffer */ "./src/modules/components/graphics/assets/Buffer.js");
/* harmony import */ var _assets_Program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/Program */ "./src/modules/components/graphics/assets/Program.js");
/* harmony import */ var _assets_Texture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/Texture */ "./src/modules/components/graphics/assets/Texture.js");
/* harmony import */ var _geom_Vec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geom/Vec */ "./src/modules/geom/Vec.js");




var GraphicsContext = {
  bound: {
    sceneContext: undefined,
    program: undefined,
    viewport: new _geom_Vec__WEBPACK_IMPORTED_MODULE_3__["Vec4"]()
  },
  test: {
    depth: false,
    stensil: false
  },
  reset: function reset() {
    this.bound = {
      sceneContext: undefined,
      program: undefined,
      viewport: new _geom_Vec__WEBPACK_IMPORTED_MODULE_3__["Vec4"]()
    };
    this.test = {
      depth: false,
      stensil: false
    };
  }
};
var GLGraphics = {
  setup: function setup(canvas) {
    var params = {
      alpha: true,
      premultipliedAlpha: false
    };
    this._gl = canvas.getContext("webgl", params) || canvas.getContext("experimental-webgl", params);

    if (!this.context) {
      this.context = GraphicsContext;
    } else {
      this.context.reset();
    }
  },
  updateTexture: function updateTexture(texture, textureUnit) {
    var gl = this._gl;

    if (!texture.location) {
      texture.location = gl.createTexture();
    }

    gl.activeTexture(gl["TEXTURE" + textureUnit]);
    gl.bindTexture(gl.TEXTURE_2D, texture.location);

    if (texture.needsUpdate) {
      texture.needsUpdate = false;
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

      if (texture.image) {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
      } else {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
      }
    }
  },
  deleteTexture: function deleteTexture(texture) {
    if (texture.location) {
      this._gl.deleteTexture(texture.location);

      texture.location = undefined;
    }
  },
  updateProgram: function updateProgram(program) {
    var gl = this._gl;

    if (!program.location) {
      program.location = gl.createProgram();
      this.updateShader(program.vertex);
      gl.attachShader(program.location, program.vertex.location);
      this.updateShader(program.fragment);
      gl.attachShader(program.location, program.fragment.location);
      gl.linkProgram(program.location);
      this.deleteShader(program.vertex);
      this.deleteShader(program.fragment);

      if (!gl.getProgramParameter(program.location, gl.LINK_STATUS)) {
        throw new Error("Could not initialise shaders");
      }
    }

    gl.useProgram(program.location);
    this.context.bound.program = program;

    if (program.needsUpdate) {
      program.update();
      program.needsUpdate = false;
    }

    for (var i = 0; i < program.attributes.length; i++) {
      this.updateAttribute(program.attributes[i], program.stride);
    }

    for (var _i = 0; _i < program.uniforms.length; _i++) {
      this.updateUniform(program.uniformBuffer, program.uniforms[_i]);
    }
  },
  deleteProgram: function deleteProgram(program) {
    var gl = this._gl;

    if (program.location) {
      gl.deleteProgram(program.location);
    }
  },
  updateShader: function updateShader(shader) {
    var gl = this._gl;

    if (!shader.location) {
      shader.location = gl.createShader(gl[shader.type]);
    }

    gl.shaderSource(shader.location, shader.source);
    gl.compileShader(shader.location);

    if (!gl.getShaderParameter(shader.location, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(shader.location));
    }
  },
  deleteShader: function deleteShader(shader) {
    var gl = this._gl;

    if (shader.location) {
      gl.deleteShader(shader.location);
      shader.location = undefined;
    }
  },
  updateAttribute: function updateAttribute(attribute, stride) {
    var gl = this._gl;
    var a = attribute;

    if (!a.location) {
      a.location = gl.getAttribLocation(this.context.bound.program.location, a.name);

      if (a.location < 0) {
        throw new Error("attribute " + a.name + " undefined.");
      }

      gl.enableVertexAttribArray(a.location);
    }

    gl.vertexAttribPointer(a.location, a.size, gl[a.format], gl.FALSE, stride, a.offset);
  },
  updateUniform: function updateUniform(buffer, uniform) {
    var gl = this._gl;

    if (!uniform.location) {
      uniform.location = gl.getUniformLocation(this.context.bound.program.location, uniform.name);
    }

    switch (uniform.name) {
      case _assets_Program__WEBPACK_IMPORTED_MODULE_1__["Uniform"].Binding.ModelView:
        gl.uniformMatrix4fv(uniform.location, false, bound.model.matrix.local.data);
        break;

      case _assets_Program__WEBPACK_IMPORTED_MODULE_1__["Uniform"].Binding.Projection:
        gl.uniformMatrix4fv(uniform.location, false, bound.camera.matrix.projection.data);
        break;

      default:
        if (uniform.valueObject.value instanceof _assets_Texture__WEBPACK_IMPORTED_MODULE_2__["Texture"]) {
          this.updateTexture(uniform.valueObject.value, uniform.textureUnit);
          gl.uniform1i(uniform.location, uniform.textureUnit);
        } else {
          switch (uniform.shaderVarFormat) {
            case _assets_Program__WEBPACK_IMPORTED_MODULE_1__["ShaderVarFormat"].Int:
              gl.uniform1i(uniform.location, uniform.valueObject.value);
              break;

            case _assets_Program__WEBPACK_IMPORTED_MODULE_1__["ShaderVarFormat"].Float:
              gl.uniform1f(uniform.location, uniform.valueObject.value);
              break;

            case _assets_Program__WEBPACK_IMPORTED_MODULE_1__["ShaderVarFormat"].Vector2:
              gl.uniform2fv(uniform.location, uniform.valueObject.value.data);
              break;

            case _assets_Program__WEBPACK_IMPORTED_MODULE_1__["ShaderVarFormat"].Vector3:
              gl.uniform3fv(uniform.location, uniform.valueObject.value.data);
              break;

            case _assets_Program__WEBPACK_IMPORTED_MODULE_1__["ShaderVarFormat"].Vector4:
              gl.uniform4fv(uniform.location, uniform.valueObject.value.data);
              break;

            case _assets_Program__WEBPACK_IMPORTED_MODULE_1__["ShaderVarFormat"].Matrix3:
              gl.uniformMatrix3fv(uniform.location, uniform.valueObject.value.data);
              break;

            case _assets_Program__WEBPACK_IMPORTED_MODULE_1__["ShaderVarFormat"].Matrix4:
              gl.uniformMatrix4fv(uniform.location, uniform.valueObject.value.data);
              break;
          }
        }

    }
  },
  updateBuffer: function updateBuffer(buffer) {
    var gl = this._gl;

    if (!buffer.location) {
      buffer.location = gl.createBuffer();
    }

    var target;

    if (buffer.bufferType !== _assets_Buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].Type.Index) {
      target = gl.ARRAY_BUFFER;
    } else {
      target = gl.ELEMENT_ARRAY_BUFFER;
    }

    gl.bindBuffer(target, buffer.location);

    if (buffer.needsUpdate) {
      gl.bufferData(target, buffer.data, gl[buffer.usage]);
      buffer.needsUpdate = false;
    }
  },
  updateSceneContext: function updateSceneContext(sceneContext) {
    if (this.context.bound.sceneContext === sceneContext) return;
    var gl = this._gl;

    if (this.context.test.depth != sceneContext.test.depth) {
      sceneContext.test.depth ? gl.enable(gl.DEPTH_TEST) : gl.disable(gl.DEPTH_TEST);
      this.context.test.depth = sceneContext.test.depth;
    }

    if (this.context.test.stencil != sceneContext.test.stencil) {
      sceneContext.test.stencil ? gl.enable(gl.STENCIL_TEST) : gl.disable(gl.STENCIL_TEST);
      this.context.test.stencil = sceneContext.test.stencil;
    }

    this.context.bound.sceneContext = sceneContext;
  },
  updateCamera: function updateCamera(camera) {
    this.context.bound.camera = camera;
    var v = camera.viewport;

    if (!this.context.bound.viewport.equals(v)) {
      this.context.bound.viewport.set(v.x, v.y, v.z, v.w);

      this._gl.viewport(v.x, v.y, v.width, v.height);
    }
  },
  clear: function clear(sceneContext) {
    var gl = this._gl;
    var c = sceneContext;
    var bits = 0;

    if (c.clear.color) {
      gl.clearColor(c.color.r, c.color.g, c.color.b, c.color.a);
      bits |= gl.COLOR_BUFFER_BIT;
    }

    if (c.clear.depth) {
      bits |= gl.DEPTH_BUFFER_BIT;
    }

    if (c.clear.stencil) {
      bits |= gl.STENCIL_BUFFER_BIT;
    }

    gl.clear(bits);
  },
  renderModel: function renderModel(model) {
    this.context.bound.model = model;

    if (model.scene) {
      this.updateSceneContext(model.scene.context);
    }

    this.updateCamera(model.scene.camera);
    this.renderMesh(model.mesh);
  },
  renderMesh: function renderMesh(mesh, mat) {
    var gl = this._gl;
    this.updateBuffer(mesh.vertexBuffer);
    this.updateProgram(mesh.material.program);
    var bf = mesh.indexBuffer;
    this.updateBuffer(bf);
    gl.drawElements(gl[bf.drawMode], bf.limit, gl[bf.format], 0);
  }
};

/***/ }),

/***/ "./src/modules/components/graphics/Material.js":
/*!*****************************************************!*\
  !*** ./src/modules/components/graphics/Material.js ***!
  \*****************************************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_Program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/Program */ "./src/modules/components/graphics/assets/Program.js");
/* harmony import */ var _assets_Texture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/Texture */ "./src/modules/components/graphics/assets/Texture.js");



var Material = function Material(option) {
  var _this = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Material);

  this.program = new _assets_Program__WEBPACK_IMPORTED_MODULE_1__["Program"]();
  this.program.vertex.updateSource(option.vertexShader);
  this.program.fragment.updateSource(option.fragmentShader);
  this.uniforms = option.uniforms;

  if (this.uniforms) {
    var textureCount = -1;
    Object.keys(this.uniforms).forEach(function (key) {
      var o = _this.uniforms[key];

      if (o.value instanceof _assets_Texture__WEBPACK_IMPORTED_MODULE_2__["Texture"]) {
        _this.program.addUniform(new _assets_Program__WEBPACK_IMPORTED_MODULE_1__["Uniform"](key, o, ++textureCount));
      } else {
        _this.program.addUniform(new _assets_Program__WEBPACK_IMPORTED_MODULE_1__["Uniform"](key, o));
      }
    });
  }
};

/***/ }),

/***/ "./src/modules/components/graphics/Mesh.js":
/*!*************************************************!*\
  !*** ./src/modules/components/graphics/Mesh.js ***!
  \*************************************************/
/*! exports provided: Mesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return Mesh; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_EventDispatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/EventDispatcher */ "./src/modules/core/EventDispatcher.js");
/* harmony import */ var _assets_Buffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/Buffer */ "./src/modules/components/graphics/assets/Buffer.js");






var Mesh =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Mesh, _EventDispatcher);

  function Mesh() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Mesh);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Mesh).call(this));
    _this.vertexBuffer = new _assets_Buffer__WEBPACK_IMPORTED_MODULE_5__["Buffer"](_assets_Buffer__WEBPACK_IMPORTED_MODULE_5__["VarFormat"].Float, _assets_Buffer__WEBPACK_IMPORTED_MODULE_5__["Buffer"].Type.Interleaved, _assets_Buffer__WEBPACK_IMPORTED_MODULE_5__["Buffer"].Usage.Static);
    _this.indexBuffer = new _assets_Buffer__WEBPACK_IMPORTED_MODULE_5__["IndexBuffer"](_assets_Buffer__WEBPACK_IMPORTED_MODULE_5__["IndexBuffer"].DrawMode.Triangles);
    return _this;
  }

  return Mesh;
}(_core_EventDispatcher__WEBPACK_IMPORTED_MODULE_4__["EventDispatcher"]);

/***/ }),

/***/ "./src/modules/components/graphics/assets/Asset.js":
/*!*********************************************************!*\
  !*** ./src/modules/components/graphics/assets/Asset.js ***!
  \*********************************************************/
/*! exports provided: Asset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return Asset; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_EventDispatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/EventDispatcher */ "./src/modules/core/EventDispatcher.js");





var Asset =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Asset, _EventDispatcher);

  function Asset() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Asset);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Asset).call(this));
    _this.needsUpdate = true;
    _this.location = undefined;
    return _this;
  }

  return Asset;
}(_core_EventDispatcher__WEBPACK_IMPORTED_MODULE_4__["EventDispatcher"]);

/***/ }),

/***/ "./src/modules/components/graphics/assets/Buffer.js":
/*!**********************************************************!*\
  !*** ./src/modules/components/graphics/assets/Buffer.js ***!
  \**********************************************************/
/*! exports provided: VarFormat, Buffer, IndexBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VarFormat", function() { return VarFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buffer", function() { return Buffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexBuffer", function() { return IndexBuffer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Asset */ "./src/modules/components/graphics/assets/Asset.js");






var VarFormat = {
  Byte: "BYTE",
  UnsignedByte: "UNSIGNED_BYTE",
  Short: "SHORT",
  UnsignedShort: "UNSIGNED_SHORT",
  Int: "INT",
  UnsignedInt: "UNSIGNED_INT",
  Float: "FLOAT"
};

var getTypedArrayByFormat = function getTypedArrayByFormat(format, length) {
  switch (format) {
    case VarFormat.Byte:
      return new Int8Array(length);

    case VarFormat.UnsignedByte:
      return new Uint8Array(length);

    case VarFormat.Short:
      return new Int16Array(length);

    case VarFormat.UnsignedShort:
      return new Uint16Array(length);

    case VarFormat.Int:
      return new Int32Array(length);

    case VarFormat.UnsignedInt:
      return new Uint32Array(length);

    case VarFormat.Float:
      return new Float32Array(length);
  }

  return undefined;
};

var Buffer =
/*#__PURE__*/
function (_Asset) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Buffer, _Asset);

  function Buffer(format, bufferType, usage) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Buffer);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Buffer).call(this));
    _this.format = format;
    _this.bufferType = bufferType;
    _this.usage = usage;
    _this.data = getTypedArrayByFormat(_this.format, 1);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Buffer, [{
    key: "clear",
    value: function clear() {
      this.position = 0;
      this.limit = 0;
      this.needsUpdate = true;
    }
  }, {
    key: "allocate",
    value: function allocate(length) {
      if (this.data.length < length) {
        this.extend(length);
      }

      this.clear();
    }
  }, {
    key: "get",
    value: function get(offset) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return this.data.subarray(offset, length);
    }
  }, {
    key: "put",
    value: function put(original) {
      if (original instanceof Array || original instanceof Float32Array) {
        this.data.set(original, this.position);
        this.position += original.length;
      } else {
        this.data[this.position] = original;
        this.position += 1;
      }

      this.limit = this.position;
      this.needsUpdate = true;
    }
  }, {
    key: "update",
    value: function update(original, offset) {
      if (original instanceof Array || original instanceof Float32Array) {
        this.data.set(original, offset);
      } else {
        this.data[offset] = original;
      }

      this.needsUpdate = true;
    }
  }, {
    key: "extend",
    value: function extend(length) {
      var tmp = this.data;
      var v = tmp.length;

      while (v < length) {
        v *= 2;
      }

      this.data = getTypedArrayByFormat(this.format, v);
      this.data.set(tmp);
    }
  }]);

  return Buffer;
}(_Asset__WEBPACK_IMPORTED_MODULE_5__["Asset"]);
Buffer.Usage = {
  Static: "STATIC_DRAW",
  Dynamic: "DYNAMIC_DRAW",
  Stream: "STREAM_DRAW"
};
Buffer.Type = {
  Interleaved: "Interleaved",
  Index: "Index"
};
var IndexBuffer =
/*#__PURE__*/
function (_Buffer) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(IndexBuffer, _Buffer);

  function IndexBuffer(drawMode) {
    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, IndexBuffer);

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(IndexBuffer).call(this, VarFormat.UnsignedShort, Buffer.Type.Index, Buffer.Usage.Static));
    _this2.drawMode = drawMode;
    return _this2;
  }

  return IndexBuffer;
}(Buffer);
IndexBuffer.DrawMode = {
  Triangles: "TRIANGLES"
};

/***/ }),

/***/ "./src/modules/components/graphics/assets/Program.js":
/*!***********************************************************!*\
  !*** ./src/modules/components/graphics/assets/Program.js ***!
  \***********************************************************/
/*! exports provided: ShaderVarFormat, ShaderVar, Uniform, Shader, Program */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderVarFormat", function() { return ShaderVarFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderVar", function() { return ShaderVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uniform", function() { return Uniform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shader", function() { return Shader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return Program; });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Asset */ "./src/modules/components/graphics/assets/Asset.js");
/* harmony import */ var _Buffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Buffer */ "./src/modules/components/graphics/assets/Buffer.js");
/* harmony import */ var _Texture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Texture */ "./src/modules/components/graphics/assets/Texture.js");
/* harmony import */ var _geom_Matrix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../geom/Matrix */ "./src/modules/geom/Matrix.js");
/* harmony import */ var _geom_Vec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../geom/Vec */ "./src/modules/geom/Vec.js");










var ShaderVarFormat = {
  Int: "Int",
  Float: "Float",
  Vector2: "Vector2",
  Vector3: "Vector3",
  Vector4: "Vector4",
  Matrix3: "Matrix3",
  Matrix4: "Matrix4"
};

var getSizeFromShaderVarFormat = function getSizeFromShaderVarFormat(format) {
  switch (format) {
    case ShaderVarFormat.Int:
    case ShaderVarFormat.Float:
      return 1;

    case ShaderVarFormat.Vector2:
      return 2;

    case ShaderVarFormat.Vector3:
      return 3;

    case ShaderVarFormat.Vector4:
      return 4;

    case ShaderVarFormat.Matrix3:
      return 9;

    case ShaderVarFormat.Matrix4:
      return 16;

    default:
      return 0;
  }
};

var ShaderVar =
/*#__PURE__*/
function (_Asset) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ShaderVar, _Asset);

  function ShaderVar(name, varFormat, shaderVarFormat) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ShaderVar);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ShaderVar).call(this));
    _this.name = name;
    _this.format = varFormat;
    _this.shaderVarFormat = shaderVarFormat;
    _this.offset = 0;
    _this.size = getSizeFromShaderVarFormat(shaderVarFormat);
    return _this;
  }

  return ShaderVar;
}(_Asset__WEBPACK_IMPORTED_MODULE_5__["Asset"]);
var Uniform =
/*#__PURE__*/
function (_ShaderVar) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Uniform, _ShaderVar);

  function Uniform(name, valueObject) {
    var _this2;

    var textureUnit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Uniform);

    var varFormat;
    var shaderVarFormat;

    if (valueObject) {
      varFormat = _Buffer__WEBPACK_IMPORTED_MODULE_6__["VarFormat"].Float;

      switch (valueObject.value.constructor) {
        case _Texture__WEBPACK_IMPORTED_MODULE_7__["Texture"]:
          varFormat = _Buffer__WEBPACK_IMPORTED_MODULE_6__["VarFormat"].Int;
          shaderVarFormat = ShaderVarFormat.Int;
          break;

        case _geom_Matrix__WEBPACK_IMPORTED_MODULE_8__["Matrix3"]:
          shaderVarFormat = ShaderVarFormat.Matrix3;
          break;

        case _geom_Matrix__WEBPACK_IMPORTED_MODULE_8__["Matrix4"]:
          shaderVarFormat = ShaderVarFormat.Matrix4;
          break;

        case _geom_Vec__WEBPACK_IMPORTED_MODULE_9__["Vec2"]:
          shaderVarFormat = ShaderVarFormat.Vector2;
          break;

        case _geom_Vec__WEBPACK_IMPORTED_MODULE_9__["Vec3"]:
          shaderVarFormat = ShaderVarFormat.Vector3;
          break;

        case _geom_Vec__WEBPACK_IMPORTED_MODULE_9__["Vec4"]:
          shaderVarFormat = ShaderVarFormat.Vector4;
          break;

        default:
          shaderVarFormat = ShaderVarFormat.Float;
      }
    }

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Uniform).call(this, name, varFormat, shaderVarFormat));
    _this2.valueObject = valueObject;
    _this2.textureUnit = textureUnit;
    return _this2;
  }

  return Uniform;
}(ShaderVar);
Uniform.Binding = {
  Projection: "projectionMatrix",
  ModelView: "modelViewMatrix"
};
var Shader =
/*#__PURE__*/
function (_Asset2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Shader, _Asset2);

  function Shader(type) {
    var _this3;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Shader);

    _this3 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Shader).call(this));
    _this3.type = type;
    return _this3;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(Shader, [{
    key: "updateSource",
    value: function updateSource(source) {
      this.source = source;
    }
  }]);

  return Shader;
}(_Asset__WEBPACK_IMPORTED_MODULE_5__["Asset"]);
Shader.VERTEX = "VERTEX_SHADER";
Shader.FRAGMENT = "FRAGMENT_SHADER";
var Program =
/*#__PURE__*/
function (_Asset3) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Program, _Asset3);

  function Program() {
    var _this4;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Program);

    _this4 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Program).call(this));
    _this4.vertex = new Shader(Shader.VERTEX);
    _this4.fragment = new Shader(Shader.FRAGMENT);
    _this4.attributes = [];
    _this4.uniforms = [];
    _this4.stride = 0; // this.uniformBuffer = new Buffer(VarFormat.Float, Buffer.Type.Interleaved, Buffer.Usage.Static);
    // this.uniformBuffserSize = 0;

    return _this4;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(Program, [{
    key: "addAttribute",
    value: function addAttribute(attribute) {
      this.attributes.push(attribute);
      this.needsUpdate = true;
    }
  }, {
    key: "addUniform",
    value: function addUniform(uniform) {
      this.uniforms.push(uniform);
      this.needsUpdate = true;
    }
  }, {
    key: "update",
    value: function update() {
      this.stride = 0;
      var bytes_per_float = 4;

      for (var i = 0; i < this.attributes.length; i++) {
        var a = this.attributes[i];
        a.offset = this.stride;
        this.stride += bytes_per_float * a.size;
      } // this.uniformBuffserSize = 0;
      // for(let i=0; i<this.uniforms.length; i++) {
      //     let u = this.uniforms[i];
      //     u.offset = this.uniformBuffserSize;
      //     this.uniformBufferSize += bytes_per_float * u.size;
      // }
      // this.uniformBuffer.allocate(this.uniformBufferSize);

    }
  }]);

  return Program;
}(_Asset__WEBPACK_IMPORTED_MODULE_5__["Asset"]);

/***/ }),

/***/ "./src/modules/components/graphics/assets/Texture.js":
/*!***********************************************************!*\
  !*** ./src/modules/components/graphics/assets/Texture.js ***!
  \***********************************************************/
/*! exports provided: Texture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return Texture; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Asset */ "./src/modules/components/graphics/assets/Asset.js");






var Texture =
/*#__PURE__*/
function (_Asset) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Texture, _Asset);

  function Texture(src) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Texture);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Texture).call(this));
    _this.image = undefined;

    if (src) {
      _this.setup(src);
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Texture, [{
    key: "setup",
    value: function setup(src) {
      var _this2 = this;

      if (!this.image) {
        this.image = new Image();
      }

      return new Promise(function (resolve, reject) {
        if (_this2.image.src != src) {
          _this2.needsUpdate = false;
          _this2.image.src = src;

          _this2.image.onload = function () {
            _this2.needsUpdate = true;
            resolve();
          };
        } else {
          resolve();
        }
      });
    }
  }]);

  return Texture;
}(_Asset__WEBPACK_IMPORTED_MODULE_5__["Asset"]);

/***/ }),

/***/ "./src/modules/components/graphics/nodes/Node.js":
/*!*******************************************************!*\
  !*** ./src/modules/components/graphics/nodes/Node.js ***!
  \*******************************************************/
/*! exports provided: Node, Model, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_EventDispatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/EventDispatcher */ "./src/modules/core/EventDispatcher.js");
/* harmony import */ var _Mesh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Mesh */ "./src/modules/components/graphics/Mesh.js");
/* harmony import */ var _geom_Vec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../geom/Vec */ "./src/modules/geom/Vec.js");







 // import {Matrix3, Matrix4} from '../../../geom/Matrix'

var Node =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Node, _EventDispatcher);

  function Node() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Node);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Node).call(this));
    _this.children = [];
    _this.matrix = {};
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Node, [{
    key: "addChild",
    value: function addChild(node) {
      this.children.push(node);
      node.parent = this;
    }
  }, {
    key: "removeChild",
    value: function removeChild(node) {
      node.parent = undefined;
      var index = this.children.indexOf(node);

      if (index > -1) {
        this.children.splice(index, 1);
      }
    }
  }]);

  return Node;
}(_core_EventDispatcher__WEBPACK_IMPORTED_MODULE_5__["EventDispatcher"]); // export class Node2D extends Node {
//     constructor() {
//         super();
//         this.matrix.local = new Matrix3();
//     }
// }
// export class Node3D extends Node {
//     constructor() {
//         super();
//         this.matrix.local = new Matrix4();
//     }
// }

var Model =
/*#__PURE__*/
function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Model, _Node);

  function Model() {
    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Model);

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Model).call(this));
    _this2.mesh = new _Mesh__WEBPACK_IMPORTED_MODULE_6__["Mesh"]();
    return _this2;
  }

  return Model;
}(Node);
var Camera =
/*#__PURE__*/
function (_Node2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Camera, _Node2);

  function Camera() {
    var _this3;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Camera);

    _this3 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Camera).call(this));
    _this3.viewport = new _geom_Vec__WEBPACK_IMPORTED_MODULE_7__["Vec4"](); // this.matrix.projection = new Matrix4();
    // this.matrix.view = new Matrix4();
    // this.matrix.viewProjection = new Matrix4();

    return _this3;
  } // perspective(fov, aspect, near, far) {
  //     this.matrix.projection.perspective(fov, aspect, near, far);
  // }


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Camera, [{
    key: "setViewport",
    value: function setViewport(x, y, width, height) {
      this.viewport.set(x, y, width, height); // this.perspective(60, width/height, 0.1, 100);
    }
  }]);

  return Camera;
}(Node);

/***/ }),

/***/ "./src/modules/components/graphics/nodes/Scene.js":
/*!********************************************************!*\
  !*** ./src/modules/components/graphics/nodes/Scene.js ***!
  \********************************************************/
/*! exports provided: SceneContext, Scene3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneContext", function() { return SceneContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene3D", function() { return Scene3D; });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _geom_Color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../geom/Color */ "./src/modules/geom/Color.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Node */ "./src/modules/components/graphics/nodes/Node.js");








var SceneContext = function SceneContext() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, SceneContext);

  this.clear = {
    color: true,
    depth: false,
    stencil: false
  };
  this.test = {
    depth: false,
    stencil: false
  };
  this.color = new _geom_Color__WEBPACK_IMPORTED_MODULE_6__["Color"]();
};
var Scene3D =
/*#__PURE__*/
function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Scene3D, _Node);

  function Scene3D() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Scene3D);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Scene3D).call(this));
    _this.context = new SceneContext();
    _this.camera = new _Node__WEBPACK_IMPORTED_MODULE_7__["Camera"]();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(Scene3D, [{
    key: "addChild",
    value: function addChild(node) {
      if (node.parent) {
        node.parent.removeChild(node);
      }

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Scene3D.prototype), "addChild", this).call(this, node);

      node.scene = this;
    }
  }, {
    key: "removeChild",
    value: function removeChild(node) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Scene3D.prototype), "removeChild", this).call(this, node);

      node.scene = undefined;
    }
  }]);

  return Scene3D;
}(_Node__WEBPACK_IMPORTED_MODULE_7__["Node"]);

/***/ }),

/***/ "./src/modules/core/Environment.js":
/*!*****************************************!*\
  !*** ./src/modules/core/Environment.js ***!
  \*****************************************/
/*! exports provided: env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventDispatcher */ "./src/modules/core/EventDispatcher.js");







var Environment =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Environment, _EventDispatcher);

  function Environment() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Environment);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Environment).call(this));
    console.info("xslider ver.", "1.0.10"); // if(!THREE) {
    // 	console.error("xslider depend on three.js");
    // }
    // if(!domtoimage) {
    // 	console.error("xslider depend on dom-to-image");
    // }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Environment, [{
    key: "support",
    get: function get() {
      return Environment.support;
    }
  }]);

  return Environment;
}(_EventDispatcher__WEBPACK_IMPORTED_MODULE_5__["EventDispatcher"]);

Environment.support = {
  touch: 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch,
  pointer: window.navigator.pointerEnabled,
  MSPointer: window.navigator.msPointerEnabled
};
var env = new Environment();

/***/ }),

/***/ "./src/modules/core/Event.js":
/*!***********************************!*\
  !*** ./src/modules/core/Event.js ***!
  \***********************************/
/*! exports provided: Event, TouchEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchEvent", function() { return TouchEvent; });
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Environment */ "./src/modules/core/Environment.js");

var Event = {
  CHANGE: 'change'
};
var types = [];

if (_Environment__WEBPACK_IMPORTED_MODULE_0__["env"].support.touch) {
  types.push('touchstart', 'touchmove', 'touchend');
} else if (_Environment__WEBPACK_IMPORTED_MODULE_0__["env"].support.pointer) {
  types.push('pointerdown', 'pointermove', 'pointerup');
} else if (_Environment__WEBPACK_IMPORTED_MODULE_0__["env"].support.MSPointer) {
  types.push('MSPointerDown', 'MSPointerMove', 'MSPointerUp');
} else {
  types.push('mousedown', 'mousemove', 'mouseup');
}

var TouchEvent = {
  START: types[0],
  MOVE: types[1],
  END: types[2]
};

/***/ }),

/***/ "./src/modules/core/EventDispatcher.js":
/*!*********************************************!*\
  !*** ./src/modules/core/EventDispatcher.js ***!
  \*********************************************/
/*! exports provided: EventDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var EventDispatcher =
/*#__PURE__*/
function () {
  function EventDispatcher() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EventDispatcher);

    this._listeners = {};
    this._properties = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EventDispatcher, [{
    key: "get",
    value: function get(key) {
      return this._properties[key];
    }
  }, {
    key: "set",
    value: function set(properties) {
      if (!properties) return;

      for (var key in properties) {
        if (this._properties[key] === undefined && properties[key] !== undefined || this._properties[key] !== properties[key]) {
          var v0 = this._properties[key];
          this._properties[key] = properties[key];
          this.dispatch(key, {
            type: key,
            value: this._properties[key],
            value0: v0
          });
        }
      }
    }
  }, {
    key: "dispatch",
    value: function dispatch(type, options) {
      if (this._listeners.hasOwnProperty(type)) {
        this._listeners[type].forEach(function (o) {
          var tmp = options || {
            type: type
          };
          o.listener(tmp);
        });
      }
    }
  }, {
    key: "on",
    value: function on(type, listener) {
      this.off(type, listener);

      if (!this._listeners.hasOwnProperty(type)) {
        this._listeners[type] = [];
      }

      this._listeners[type].push({
        type: type,
        listener: listener
      });

      return this;
    }
  }, {
    key: "off",
    value: function off(type, listener) {
      var _this = this;

      if (type) {
        if (!listener) {
          delete this._listeners[type];
        } else if (this._listeners.hasOwnProperty(type)) {
          this._listeners[type].some(function (elem, i) {
            if (elem.listener == listener) _this._listeners[type].splice(i, 1);
          });

          if (this._listeners[type].length == 0) {
            delete this._listeners[type];
          }
        }
      } else {
        for (var _type in this._listeners) {
          delete this._listeners[_type];
        }
      }

      return this;
    }
  }, {
    key: "listeners",
    get: function get() {
      return this._listeners;
    }
  }]);

  return EventDispatcher;
}();
;

/***/ }),

/***/ "./src/modules/core/InteractiveObject.js":
/*!***********************************************!*\
  !*** ./src/modules/core/InteractiveObject.js ***!
  \***********************************************/
/*! exports provided: InteractiveObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveObject", function() { return InteractiveObject; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Environment */ "./src/modules/core/Environment.js");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Event */ "./src/modules/core/Event.js");
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EventDispatcher */ "./src/modules/core/EventDispatcher.js");









var InteractiveObject =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(InteractiveObject, _EventDispatcher);

  function InteractiveObject() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InteractiveObject);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(InteractiveObject).call(this));

    _this._defineHandlers();

    _this.on('target', _this._on.changeTarget);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InteractiveObject, [{
    key: "_defineHandlers",
    value: function _defineHandlers() {
      var _this2 = this;

      this._on = {
        bubble: function bubble(e) {
          _this2.dispatch(e.type, e);
        },
        changeTarget: function changeTarget(o) {
          if (o.value0) {
            for (var type in _this2._listeners) {
              _this2._autoRemoveListener(o.value0, type);
            }
          }

          _this2.off();
        },
        touch: function touch(e) {
          if (_Environment__WEBPACK_IMPORTED_MODULE_6__["env"].support.touch) {
            var touch = e.touches[0];

            if (touch) {
              e.clientX = touch.clientX;
              e.clientY = touch.clientY;
            } else {
              e.clientX = _this2.clientX0;
              e.clientY = _this2.clientY0;
            }
          }

          if (!_this2.clientX0) {
            _this2.clientX0 = e.clientX;
            _this2.clientY0 = e.clientY;
          }

          e.clientX0 = _this2.clientX0;
          e.clientY0 = _this2.clientY0;
          _this2.clientX0 = e.clientX;
          _this2.clientY0 = e.clientY;

          _this2.dispatch(e.type, e);
        },
        touchStart: function touchStart(e) {
          _this2.clientX0 = _this2.clientY0 = undefined;
        }
      };
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.off();
    }
  }, {
    key: "on",
    value: function on(type, listener, options) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(InteractiveObject.prototype), "on", this).call(this, type, listener, options);

      var target = this.get('target');

      this._autoAddListener(target, type);

      return this;
    }
  }, {
    key: "off",
    value: function off(type, listener) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(InteractiveObject.prototype), "off", this).call(this, type, listener);

      var target = this.get('target');

      this._autoRemoveListener(target, type);

      return this;
    }
  }, {
    key: "_autoAddListener",
    value: function _autoAddListener(target, type) {
      if (!target) return;

      if (this._listeners[type].length == 1) {
        switch (type) {
          case _Event__WEBPACK_IMPORTED_MODULE_7__["TouchEvent"].START:
          case _Event__WEBPACK_IMPORTED_MODULE_7__["TouchEvent"].MOVE:
          case _Event__WEBPACK_IMPORTED_MODULE_7__["TouchEvent"].END:
            target.addEventListener(type, this._on.touch);
            break;

          case 'click':
            target.addEventListener(type, this._on.bubble);
            break;
        }

        if (type == _Event__WEBPACK_IMPORTED_MODULE_7__["TouchEvent"].MOVE) {
          target.addEventListener(_Event__WEBPACK_IMPORTED_MODULE_7__["TouchEvent"].START, this._on.touchStart);
        }
      }
    }
  }, {
    key: "_autoRemoveListener",
    value: function _autoRemoveListener(target, type) {
      if (!target) return;

      if (!this._listeners[type] || this._listeners[type].length == 0) {
        switch (type) {
          case _Event__WEBPACK_IMPORTED_MODULE_7__["TouchEvent"].START:
          case _Event__WEBPACK_IMPORTED_MODULE_7__["TouchEvent"].MOVE:
          case _Event__WEBPACK_IMPORTED_MODULE_7__["TouchEvent"].END:
            target.removeEventListener(type, this._on.touch);
            break;

          case 'click':
            target.removeEventListener(type, this._on.bubble);
            break;
        }

        if (type == _Event__WEBPACK_IMPORTED_MODULE_7__["TouchEvent"].MOVE) {
          target.removeEventListener(_Event__WEBPACK_IMPORTED_MODULE_7__["TouchEvent"].START, this._on.touchStart);
        }
      }
    }
  }]);

  return InteractiveObject;
}(_EventDispatcher__WEBPACK_IMPORTED_MODULE_8__["EventDispatcher"]);

/***/ }),

/***/ "./src/modules/core/Stage.js":
/*!***********************************!*\
  !*** ./src/modules/core/Stage.js ***!
  \***********************************/
/*! exports provided: stage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stage", function() { return stage; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_Event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Event */ "./src/modules/core/Event.js");
/* harmony import */ var _core_InteractiveObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/InteractiveObject */ "./src/modules/core/InteractiveObject.js");
/* harmony import */ var _core_Environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/Environment */ "./src/modules/core/Environment.js");
/* harmony import */ var _Ticker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Ticker */ "./src/modules/core/Ticker.js");











var Stage =
/*#__PURE__*/
function (_InteractiveObject) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Stage, _InteractiveObject);

  function Stage() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Stage);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Stage).call(this));
    _this.ticker = new _Ticker__WEBPACK_IMPORTED_MODULE_9__["Ticker"]();

    _this.set({
      target: window
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Stage, [{
    key: "ready",
    value: function ready() {
      return new Promise(function (resolve, reject) {
        var loaded = function loaded() {
          document.removeEventListener('DOMContentLoaded', loaded), window.removeEventListener('load', loaded);
          resolve();
        };

        if (document.readyState === 'complete') {
          resolve();
        } else {
          document.addEventListener('DOMContentLoaded', loaded), window.addEventListener('load', loaded);
        }
      });
    }
  }, {
    key: "_autoAddListener",
    value: function _autoAddListener(target, type) {
      if (!target) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Stage.prototype), "_autoAddListener", this).call(this, target, type);

      if (this._listeners[type].length == 1) {
        switch (type) {
          case 'tick':
            this.ticker.on(type, this._on.bubble);
            this.ticker.start();
            break;

          case 'resize':
            target.addEventListener(type, this._on.bubble);
            break;
        }
      }
    }
  }, {
    key: "_autoRemoveListener",
    value: function _autoRemoveListener(target, type) {
      if (!target) return;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Stage.prototype), "_autoRemoveListener", this).call(this, target, type);

      if (!this._listeners[type] || this._listeners[type].length == 0) {
        switch (type) {
          case 'tick':
            this.ticker.off(type, this._on.bubble);
            this.ticker.stop();
            break;

          case 'resize':
            target.removeEventListener(type, this._on.bubble);
            break;
        }
      }
    }
  }, {
    key: "width",
    get: function get() {
      return window.innerWidth || document.documentElement.clientWidth || 0;
    }
  }, {
    key: "height",
    get: function get() {
      return window.innerHeight || document.documentElement.clientHeight || 0;
    }
  }]);

  return Stage;
}(_core_InteractiveObject__WEBPACK_IMPORTED_MODULE_7__["InteractiveObject"]); //singleton


var stage = new Stage();

/***/ }),

/***/ "./src/modules/core/Ticker.js":
/*!************************************!*\
  !*** ./src/modules/core/Ticker.js ***!
  \************************************/
/*! exports provided: Ticker, TweenMaxTicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticker", function() { return Ticker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMaxTicker", function() { return TweenMaxTicker; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_EventDispatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/EventDispatcher */ "./src/modules/core/EventDispatcher.js");






var Ticker =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Ticker, _EventDispatcher);

  function Ticker() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Ticker);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Ticker).call(this));
    _this.fps = 30;

    _this._defineFunctions();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Ticker, [{
    key: "_defineFunctions",
    value: function _defineFunctions() {
      var _this2 = this;

      var prefixes = ["ms", "moz", "webkit", "o"];
      var i = prefixes.length;

      while (--i > -1 && !window.requestAnimationFrame) {
        window.requestAnimationFrame = window[prefixes[i] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[prefixes[i] + "CancelAnimationFrame"] || window[prefixes[i] + "CancelRequestAnimationFrame"];
      }

      this._tickHandler = function () {
        _this2._requestId = window.requestAnimationFrame(_this2._tickHandler);
        _this2._lastMs = _this2.time;
        var overlap = _this2._lastMs - _this2._nextMs;

        if (overlap >= 0) {
          var t0 = _this2._nextMs;
          _this2._nextMs += overlap + (overlap >= _this2._gap ? 1 : _this2._gap - overlap);

          _this2.dispatch('tick', {
            type: 'tick',
            time: _this2._lastMs - _this2._startMs,
            dt: _this2._nextMs - t0
          });
        }
      };
    }
  }, {
    key: "start",
    value: function start() {
      this._startMs = this.time;
      this._nextMs = this._startMs + this._gap;
      this._requestId = window.requestAnimationFrame(this._tickHandler);
    }
  }, {
    key: "stop",
    value: function stop() {
      window.cancelAnimationFrame(this._requestId);
    }
  }, {
    key: "fps",
    get: function get() {
      return this._fps;
    },
    set: function set(v) {
      this._fps = v;
      this._gap = 1 / (v || 60) * 1000;
    }
  }, {
    key: "time",
    get: function get() {
      return Date.now() || new Date().getTime();
    }
  }]);

  return Ticker;
}(_core_EventDispatcher__WEBPACK_IMPORTED_MODULE_5__["EventDispatcher"]);
var TweenMaxTicker =
/*#__PURE__*/
function (_Ticker) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TweenMaxTicker, _Ticker);

  function TweenMaxTicker() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TweenMaxTicker);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TweenMaxTicker).call(this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TweenMaxTicker, [{
    key: "setFps",
    value: function setFps() {}
  }, {
    key: "start",
    value: function start() {}
  }, {
    key: "stop",
    value: function stop() {}
  }]);

  return TweenMaxTicker;
}(Ticker);

/***/ }),

/***/ "./src/modules/display/Button.js":
/*!***************************************!*\
  !*** ./src/modules/display/Button.js ***!
  \***************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_InteractiveObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/InteractiveObject */ "./src/modules/core/InteractiveObject.js");






var Button =
/*#__PURE__*/
function (_InteractiveObject) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Button, _InteractiveObject);

  function Button() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Button);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Button).call(this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Button, [{
    key: "setup",
    value: function setup(dom) {
      this.set({
        target: dom
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.active = true;
    }
  }, {
    key: "active",
    set: function set(flag) {
      var target = this.get('target');

      if (flag) {
        target.classList.remove("xslider-disabled");
      } else {
        target.classList.add("xslider-disabled");
      }
    }
  }]);

  return Button;
}(_core_InteractiveObject__WEBPACK_IMPORTED_MODULE_5__["InteractiveObject"]);

/***/ }),

/***/ "./src/modules/display/Dom.js":
/*!************************************!*\
  !*** ./src/modules/display/Dom.js ***!
  \************************************/
/*! exports provided: Dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dom", function() { return Dom; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_EventDispatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/EventDispatcher */ "./src/modules/core/EventDispatcher.js");
/* harmony import */ var _core_Stage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Stage */ "./src/modules/core/Stage.js");







var Dom =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Dom, _EventDispatcher);

  function Dom() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dom);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Dom).call(this));

    _this._defineHandlers(); // this.canvas = document.createElement('canvas');


    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Dom, [{
    key: "_defineHandlers",
    value: function _defineHandlers() {
      var _this2 = this;

      this._onResize = function (e) {
        if (_this2._width != _this2.width || _this2._height != _this2.height) {
          _this2._width = _this2.width;
          _this2._height = _this2.height;

          _this2.dispatch('resize', {
            type: 'resize',
            width: _this2._width,
            height: _this2._height
          });
        }
      };
    }
  }, {
    key: "setup",
    value: function setup(selector) {
      this.container = document.querySelector(selector);
      this.container.classList.add("xslider-container");
      this.view = this.container.querySelector(".xslider-view");
      this.slides = this.view.querySelectorAll(".xslider-slide");
      this.pager = this.container.querySelector(".xslider-pager");
      this.prev = this.container.querySelector(".xslider-prev");
      this.next = this.container.querySelector(".xslider-next");
      _core_Stage__WEBPACK_IMPORTED_MODULE_6__["stage"].on('resize', this._onResize);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._width = this._height = undefined;
      _core_Stage__WEBPACK_IMPORTED_MODULE_6__["stage"].off('resize', this._onResize);
      this.container.classList.remove("xslider-container", "xslider-debug");
    }
  }, {
    key: "width",
    get: function get() {
      return this.container.clientWidth;
    }
  }, {
    key: "height",
    get: function get() {
      return this.container.clientHeight;
    }
  }]);

  return Dom;
}(_core_EventDispatcher__WEBPACK_IMPORTED_MODULE_5__["EventDispatcher"]);

/***/ }),

/***/ "./src/modules/display/Pager.js":
/*!**************************************!*\
  !*** ./src/modules/display/Pager.js ***!
  \**************************************/
/*! exports provided: Pager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pager", function() { return Pager; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_EventDispatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/EventDispatcher */ "./src/modules/core/EventDispatcher.js");






var Pager =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Pager, _EventDispatcher);

  function Pager() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Pager);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Pager).call(this));

    _this._defineHandlers();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Pager, [{
    key: "_defineHandlers",
    value: function _defineHandlers() {
      var _this2 = this;

      this._onClick = function (e) {
        var index = _this2.list.indexOf(e.target);

        _this2.set({
          index: index
        });
      };

      this._onChangeIndex = function (e) {
        if (e.value0 !== undefined) {
          _this2.list[e.value0].classList.remove("xslider-active");
        }

        _this2.list[e.value].classList.add("xslider-active");
      };
    }
  }, {
    key: "setup",
    value: function setup(data) {
      this.container = data.dom.pager;
      this.list = [];
      var length = data.dom.slides.length;

      for (var i = 0; i < length; i++) {
        var span = document.createElement('span');
        this.container.appendChild(span);
        span.addEventListener('click', this._onClick);
        this.list.push(span);
      }

      this.on("index", this._onChangeIndex);
      this.set({
        index: data.option.initialSlideIndex
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _this3 = this;

      this.off("index", this._onChangeIndex);
      this.set({
        index: undefined
      });
      this.list.forEach(function (span) {
        span.removeEventListener('click', _this3._onClick);

        _this3.container.removeChild(span);
      });
    }
  }]);

  return Pager;
}(_core_EventDispatcher__WEBPACK_IMPORTED_MODULE_5__["EventDispatcher"]);

/***/ }),

/***/ "./src/modules/display/Slide.js":
/*!**************************************!*\
  !*** ./src/modules/display/Slide.js ***!
  \**************************************/
/*! exports provided: Slide, SlideContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideContainer", function() { return SlideContainer; });
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Net */ "./src/modules/components/Net.js");
/* harmony import */ var _components_converter_Cloner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/converter/Cloner */ "./src/modules/components/converter/Cloner.js");
/* harmony import */ var _components_converter_Inliner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/converter/Inliner */ "./src/modules/components/converter/Inliner.js");
/* harmony import */ var _components_converter_SvgConverter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/converter/SvgConverter */ "./src/modules/components/converter/SvgConverter.js");
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Option */ "./src/modules/components/Option.js");
/* harmony import */ var _core_EventDispatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/EventDispatcher */ "./src/modules/core/EventDispatcher.js");








 // import {Bench} from '../components/debug/Bench'



var Slide =
/*#__PURE__*/
function () {
  function Slide(slide, debug) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Slide);

    this.element = slide;
    this.debug = debug;
    this.canvas = document.createElement('canvas');
    this.image = new Image();
    this.layer = {
      "gl": slide.querySelector(".xslider-layer-gl"),
      "ui": slide.querySelector(".xslider-layer-ui")
    };

    if (this.debug == _components_Option__WEBPACK_IMPORTED_MODULE_9__["Option"].Debug.DISPLAY.IMG) {
      this.element.insertBefore(this.image, this.layer.gl);
    } // this.element.insertBefore(this.canvas, this.layer.gl);


    this.inlinedNode = undefined;
    this.needsResize = false;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Slide, [{
    key: "dispose",
    value: function dispose() {
      this.layer.gl && this.layer.gl.classList.remove("xslider-capture");
    }
  }, {
    key: "ready",
    value: function ready() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        //処理済
        if (_this.inlinedNode) {
          resolve();
        } //textureなし
        else if (!_this.layer.gl) {
            resolve();
          } else {
            _components_converter_Inliner__WEBPACK_IMPORTED_MODULE_7__["Inliner"].inlineNode(_this.layer.gl).then(function (inlined) {
              _this.inlinedNode = inlined;
              resolve();
            }); // // Utils.toSvg(this.layer.gl)
            // converter.from(this.layer.gl)
            // 	.then((svg) => {
            // 		this.svg = svg;
            // 		this.layer.gl.classList.remove("xslider-capture");
            // 		this.needsResize = true;
            // 		// document.querySelector('#xslider').appendChild(this.svg.documentElement.cloneNode(true));
            // 		resolve();
            // 	});
          }
      });
    }
  }, {
    key: "loadSvg",
    value: function loadSvg(w, h) {
      this.svg = _components_converter_SvgConverter__WEBPACK_IMPORTED_MODULE_8__["converter"].convert(this.inlinedNode, w, h);
      var string = new XMLSerializer().serializeToString(this.svg); // console.log('string', string)
      // string = string.replace(/#/g, '%23').replace(/\n/g, '%0A')

      var uri = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(string);

      if (this.debug == _components_Option__WEBPACK_IMPORTED_MODULE_9__["Option"].Debug.DISPLAY.SVG) {
        if (this._svg0 === undefined) {
          this._svg0 = this.element.insertBefore(this.svg.childNodes[0], this.layer.gl);
        } else {
          var node = this.svg.childNodes[0];
          this.element.replaceChild(node, this._svg0);
          this._svg0 = node;
        }
      }

      return _components_Net__WEBPACK_IMPORTED_MODULE_5__["net"].loadImage(this.image, uri);
    }
  }, {
    key: "resize",
    value: function resize(w, h) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!_this2.needsResize) {
          resolve();
        } else {
          _this2.needsResize = false;
          _this2.canvas.width = w;
          _this2.canvas.height = h;

          if (_this2.layer.gl) {
            _this2.layer.gl.classList.add("xslider-capture");

            _components_converter_Cloner__WEBPACK_IMPORTED_MODULE_6__["cloner"].cloneStyle(_this2.layer.gl, _this2.inlinedNode, Slide.EXCLUDES);

            _this2.layer.gl.classList.remove("xslider-capture");

            _this2.loadSvg(w, h).then(function () {
              var c = _this2.canvas.getContext('2d');

              c.clearRect(0, 0, w, h);
              c.drawImage(_this2.image, 0, 0, w, h); // console.log(this.image, w, h);

              resolve();
            });
          } else {
            resolve();
          }
        }
      });
    }
  }]);

  return Slide;
}();
Slide.EXCLUDES = ['background', 'left', 'right', 'width', 'height'];
var SlideContainer =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(SlideContainer, _EventDispatcher);

  function SlideContainer() {
    var _this3;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, SlideContainer);

    _this3 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1___default()(SlideContainer).call(this));

    _this3._defineHandlers();

    _this3.width = _this3.height = -1;
    return _this3;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(SlideContainer, [{
    key: "_defineHandlers",
    value: function _defineHandlers() {
      var _this4 = this;

      this._onChangeSlide = function (e) {
        // console.log(e);
        var removeOld = false;

        switch (e.type) {
          case 'slide0':
            _this4.updateSlide(0);

            removeOld = e.value0 !== undefined;
            break;

          case 'slide1':
            _this4.updateSlide(1);

            removeOld = e.value0 !== undefined && e.value0 !== _this4.get('slide0');
            break;
        }

        if (removeOld) {
          e.value0.element.classList.remove("xslider-slide-active");
        }
      };
    }
  }, {
    key: "ready",
    value: function ready(indexer) {
      var _this5 = this;

      var slide0 = indexer.data.list[indexer.i0];
      var slide1 = undefined;
      var arr = [slide0.ready()];

      if (indexer.i1 !== undefined) {
        slide1 = indexer.data.list[indexer.i1];
        arr.push(slide1.ready());
      }

      return Promise.all(arr).then(function () {
        _this5.set({
          slide0: slide0,
          slide1: slide1
        });
      });
    }
  }, {
    key: "setup",
    value: function setup(mesh) {
      this.mesh = mesh;

      if (this.mesh) {
        this.uniforms = this.mesh.material.uniforms;
      }

      this.on('slide0', this._onChangeSlide);
      this.on('slide1', this._onChangeSlide);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.off('slide0', this._onChangeSlide);
      this.off('slide1', this._onChangeSlide);
      var slide0 = this.get('slide0');
      var slide1 = this.get('slide1');
      slide0.element.classList.remove("xslider-slide-active");
      slide1 && slide1.element.classList.remove("xslider-slide-active");
    }
  }, {
    key: "resize",
    value: function resize(w, h) {
      this.width = w;
      this.height = h;

      if (this.mesh) {
        this.uniforms.resolution.value.set(w, h);
      }

      return Promise.all([this.updateSlide(0), this.updateSlide(1)]);
    }
  }, {
    key: "updateSlide",
    value: function updateSlide(slideIndex) {
      var _this6 = this;

      if (this.width == -1 && this.height == -1) return;
      var slide = this.get('slide' + slideIndex);
      return new Promise(function (resolve, reject) {
        // console.log(this.uniforms);
        // console.log(this.uniforms.texture0.value.image);
        // console.log(this.uniforms.texture1.value.image);
        // console.log(slide);
        // console.log(slideIndex, this.uniforms.texture0.value.image == this.uniforms.texture1.value.image);
        if (!slide) {
          if (_this6.uniforms) {
            var texture = _this6.uniforms['texture' + slideIndex].value;
            texture.image = undefined;
            texture.needsUpdate = true;
          }

          resolve();
        }

        slide.element.classList.add("xslider-slide-active");
        slide.resize(_this6.width, _this6.height).then(function () {
          if (_this6.uniforms) {
            var _texture = _this6.uniforms['texture' + slideIndex].value;
            _texture.image = slide.canvas;
            _texture.needsUpdate = true;
          }

          resolve();
        });
      });
    }
  }]);

  return SlideContainer;
}(_core_EventDispatcher__WEBPACK_IMPORTED_MODULE_10__["EventDispatcher"]);

/***/ }),

/***/ "./src/modules/display/UI.js":
/*!***********************************!*\
  !*** ./src/modules/display/UI.js ***!
  \***********************************/
/*! exports provided: UI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return UI; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_InteractiveObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/InteractiveObject */ "./src/modules/core/InteractiveObject.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./src/modules/display/Button.js");
/* harmony import */ var _Pager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pager */ "./src/modules/display/Pager.js");









var UI =
/*#__PURE__*/
function (_InteractiveObject) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UI, _InteractiveObject);

  function UI() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UI);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UI).call(this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UI, [{
    key: "_defineHandlers",
    value: function _defineHandlers() {
      var _this = this;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UI.prototype), "_defineHandlers", this).call(this);

      this._onPrev = function (e) {
        e.preventDefault();

        _this.dispatch(UI.EVENT.PREV);
      };

      this._onNext = function (e) {
        e.preventDefault();

        _this.dispatch(UI.EVENT.NEXT);
      };
    }
  }, {
    key: "setup",
    value: function setup(data) {
      var dom = data.dom;
      this.set({
        target: dom.view
      });

      if (dom.pager) {
        this.pager = this.pager || new _Pager__WEBPACK_IMPORTED_MODULE_8__["Pager"]();
        this.pager.setup(data);
        this.pager.on('index', this._on.bubble);
      }

      if (dom.prev) {
        this.prev = this.prev || new _Button__WEBPACK_IMPORTED_MODULE_7__["Button"]();
        this.prev.setup(dom.prev);
        this.prev.on('click', this._onPrev);
      }

      if (dom.next) {
        this.next = this.next || new _Button__WEBPACK_IMPORTED_MODULE_7__["Button"]();
        this.next.setup(dom.next);
        this.next.on('click', this._onNext);
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this.pager) {
        this.pager.off('index', this._on.bubble);
        this.pager.dispose();
      }

      if (this.prev) {
        this.prev.off('click', this._offPrev);
        this.prev.dispose();
      }

      if (this.next) {
        this.next.off('click', this._onNext);
        this.next.dispose();
      }
    }
  }]);

  return UI;
}(_core_InteractiveObject__WEBPACK_IMPORTED_MODULE_6__["InteractiveObject"]);
UI.EVENT = {
  PREV: "ui_prev",
  NEXT: "ui_next"
};

/***/ }),

/***/ "./src/modules/display/XModel.js":
/*!***************************************!*\
  !*** ./src/modules/display/XModel.js ***!
  \***************************************/
/*! exports provided: XMaterial, XModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMaterial", function() { return XMaterial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XModel", function() { return XModel; });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_graphics_Material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/graphics/Material */ "./src/modules/components/graphics/Material.js");
/* harmony import */ var _components_graphics_nodes_Node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/graphics/nodes/Node */ "./src/modules/components/graphics/nodes/Node.js");
/* harmony import */ var _components_graphics_assets_Buffer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/graphics/assets/Buffer */ "./src/modules/components/graphics/assets/Buffer.js");
/* harmony import */ var _components_graphics_assets_Program__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/graphics/assets/Program */ "./src/modules/components/graphics/assets/Program.js");









var XMaterial =
/*#__PURE__*/
function (_Material) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(XMaterial, _Material);

  function XMaterial(option) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, XMaterial);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(XMaterial).call(this, option));

    _this.program.addAttribute(new _components_graphics_assets_Program__WEBPACK_IMPORTED_MODULE_8__["ShaderVar"]("position", _components_graphics_assets_Buffer__WEBPACK_IMPORTED_MODULE_7__["VarFormat"].Float, _components_graphics_assets_Program__WEBPACK_IMPORTED_MODULE_8__["ShaderVarFormat"].Vector2));

    return _this;
  }

  return XMaterial;
}(_components_graphics_Material__WEBPACK_IMPORTED_MODULE_5__["Material"]);
var XModel =
/*#__PURE__*/
function (_Model) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(XModel, _Model);

  function XModel() {
    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, XModel);

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(XModel).call(this));
    var vertices = [-1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0];

    _this2.mesh.vertexBuffer.allocate(vertices.length);

    _this2.mesh.vertexBuffer.put(vertices);

    var indices = [0, 1, 2, 0, 2, 3];

    _this2.mesh.indexBuffer.allocate(indices.length);

    _this2.mesh.indexBuffer.put(indices);

    return _this2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(XModel, [{
    key: "material",
    set: function set(material) {
      this.mesh.material = material;
    }
  }]);

  return XModel;
}(_components_graphics_nodes_Node__WEBPACK_IMPORTED_MODULE_6__["Model"]);

/***/ }),

/***/ "./src/modules/geom/Color.js":
/*!***********************************!*\
  !*** ./src/modules/geom/Color.js ***!
  \***********************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var Color =
/*#__PURE__*/
function () {
  function Color() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Color);

    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 1;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Color, [{
    key: "set",
    value: function set(r, g, b, a) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    }
  }]);

  return Color;
}();

/***/ }),

/***/ "./src/modules/geom/Matrix.js":
/*!************************************!*\
  !*** ./src/modules/geom/Matrix.js ***!
  \************************************/
/*! exports provided: Matrix3, Matrix4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix3", function() { return Matrix3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix4", function() { return Matrix4; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var Matrix3 =
/*#__PURE__*/
function () {
  function Matrix3() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Matrix3);

    this.identity();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Matrix3, [{
    key: "identity",
    value: function identity() {
      this.data = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    }
  }, {
    key: "copy",
    value: function copy(dst) {
      for (var i = 0; i < this.data.length; i++) {
        dst.data[i] = this.data.length;
      }
    }
  }, {
    key: "translate",
    value: function translate() {}
  }, {
    key: "rotate",
    value: function rotate() {}
  }, {
    key: "update",
    value: function update(x, y, r, sx, sy) {
      var s = Math.sin(r);
      var c = Math.cos(r);
      var data = this.data;
      data[0] = c * sx;
      data[1] = s * sx;
      data[3] = -s * sy;
      data[4] = c * sy;
      data[6] = x;
      data[7] = y;
    }
  }]);

  return Matrix3;
}();
var Matrix4 =
/*#__PURE__*/
function () {
  function Matrix4() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Matrix4);

    this.identity();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Matrix4, [{
    key: "identity",
    value: function identity() {
      this.data = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    }
  }, {
    key: "copy",
    value: function copy(dst) {
      for (var i = 0; i < this.data.length; i++) {
        dst.data[i] = this.data.length;
      }
    }
  }, {
    key: "perspective",
    value: function perspective(fov, aspect, near, far) {
      var n2 = near * 2;
      fov = fov * Math.PI / 180;
      var nf = 1 / (near - far);
      var T = Math.tan(fov / 2) * near;
      var B = -T;
      var L = aspect * B;
      var R = -L;
      var data = this.data;
      data[0] = n2 / (R - L);
      data[5] = n2 / (T - B);
      data[10] = (far + near) * nf;
      data[11] = -1;
      data[14] = n2 * far * nf;
      data[15] = 0;
    }
  }, {
    key: "update",
    value: function update(x, y, z, rx, ry, rz, sx, sy, sz) {
      var sinX = Math.sin(rx);
      var cosX = Math.cos(rx);
      var sinY = Math.sin(ry);
      var cosY = Math.cos(ry);
      var sinZ = Math.sin(rz);
      var cosZ = Math.cos(rz);
      var sinYsinX = sinY * sinX;
      var sinYcosX = sinY * cosX;
      var data = this.data;
      data[0] = cosZ * cosY * sx;
      data[1] = sinZ * cosY * sx;
      data[2] = -sinY * sx;
      data[4] = (cosZ * sinYsinX - sinZ * cosX) * sy;
      data[5] = (sinZ * sinYsinX + cosZ * cosX) * sy;
      data[6] = cosY * sinX * sy;
      data[8] = (cosZ * sinYcosX + sinZ * sinX) * sz;
      data[9] = (sinZ * sinYcosX - cosZ * sinX) * sz;
      data[10] = cosY * cosX * sz;
      data[12] = x;
      data[13] = y;
      data[14] = z;
    }
  }]);

  return Matrix4;
}();

/***/ }),

/***/ "./src/modules/geom/Vec.js":
/*!*********************************!*\
  !*** ./src/modules/geom/Vec.js ***!
  \*********************************/
/*! exports provided: Vec2, Vec3, Vec4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return Vec2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return Vec3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec4", function() { return Vec4; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var Vec2 =
/*#__PURE__*/
function () {
  function Vec2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Vec2);

    this.set(x, y);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Vec2, [{
    key: "set",
    value: function set(x, y) {
      this.data = [x, y];
    }
  }, {
    key: "x",
    get: function get() {
      return this.data[0];
    },
    set: function set(v) {
      this.data[0] = v;
    }
  }, {
    key: "y",
    get: function get() {
      return this.data[1];
    },
    set: function set(v) {
      this.data[1] = v;
    }
  }]);

  return Vec2;
}();
var Vec3 =
/*#__PURE__*/
function () {
  function Vec3() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Vec3);

    this.set(x, y, z);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Vec3, [{
    key: "set",
    value: function set(x, y, z) {
      this.data = [x, y, z];
    }
  }, {
    key: "x",
    get: function get() {
      return this.data[0];
    },
    set: function set(v) {
      this.data[0] = v;
    }
  }, {
    key: "y",
    get: function get() {
      return this.data[1];
    },
    set: function set(v) {
      this.data[1] = v;
    }
  }, {
    key: "z",
    get: function get() {
      return this.data[2];
    },
    set: function set(v) {
      this.data[2] = v;
    }
  }]);

  return Vec3;
}();
var Vec4 =
/*#__PURE__*/
function () {
  function Vec4() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Vec4);

    this.set(x, y, z, w);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Vec4, [{
    key: "set",
    value: function set(x, y, z, w) {
      this.data = [x, y, z, w];
    }
  }, {
    key: "equals",
    value: function equals(v) {
      return this.x === v.x && this.y == v.y && this.z == v.z && this.w == v.w;
    }
  }, {
    key: "width",
    set: function set(v) {
      this.data[2] = v;
    },
    get: function get() {
      return this.data[2];
    }
  }, {
    key: "height",
    set: function set(v) {
      this.data[3] = v;
    },
    get: function get() {
      return this.data[3];
    }
  }, {
    key: "x",
    get: function get() {
      return this.data[0];
    },
    set: function set(v) {
      this.data[0] = v;
    }
  }, {
    key: "y",
    get: function get() {
      return this.data[1];
    },
    set: function set(v) {
      this.data[1] = v;
    }
  }, {
    key: "z",
    get: function get() {
      return this.data[2];
    },
    set: function set(v) {
      this.data[2] = v;
    }
  }, {
    key: "w",
    get: function get() {
      return this.data[3];
    },
    set: function set(v) {
      this.data[3] = v;
    }
  }]);

  return Vec4;
}();

/***/ }),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return XSlider; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Data */ "./src/modules/components/Data.js");
/* harmony import */ var _SlideController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SlideController */ "./src/modules/SlideController.js");
/* harmony import */ var _core_EventDispatcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/EventDispatcher */ "./src/modules/core/EventDispatcher.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Utils */ "./src/modules/components/Utils.js");











var XSlider =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(XSlider, _EventDispatcher);

  function XSlider() {
    var _this2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, XSlider);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(XSlider).call(this));
    _this.data = new _components_Data__WEBPACK_IMPORTED_MODULE_6__["Data"]();
    _this.controller = new _SlideController__WEBPACK_IMPORTED_MODULE_7__["SlideController"]();
    _components_Utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].delegate(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), {
      prev: _this.controller.prev,
      next: _this.controller.next,
      autoplay: {
        start: _this.controller.autoplay.start,
        stop: _this.controller.autoplay.stop
      }
    });

    (_this2 = _this).setup.apply(_this2, arguments);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(XSlider, [{
    key: "setup",
    value: function setup() {
      var _this$data;

      // console.log('args: ', args);
      this.dispose();

      (_this$data = this.data).setup.apply(_this$data, arguments);

      this.controller.setup(this.renderer, this.data);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.controller.dispose();
      this.data.dispose();
    }
  }]);

  return XSlider;
}(_core_EventDispatcher__WEBPACK_IMPORTED_MODULE_8__["EventDispatcher"]);



/***/ }),

/***/ "./src/modules/renderer/BaseRenderer.js":
/*!**********************************************!*\
  !*** ./src/modules/renderer/BaseRenderer.js ***!
  \**********************************************/
/*! exports provided: BaseRenderer, GLRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRenderer", function() { return BaseRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLRenderer", function() { return GLRenderer; });
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_EventDispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/EventDispatcher */ "./src/modules/core/EventDispatcher.js");







var BaseRenderer =
/*#__PURE__*/
function (_EventDispatcher) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BaseRenderer, _EventDispatcher);

  function BaseRenderer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BaseRenderer);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BaseRenderer).call(this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BaseRenderer, [{
    key: "setup",
    value: function setup(data, container) {
      this.data = data;
      this.container = container;
    }
  }, {
    key: "dispose",
    value: function dispose() {}
  }, {
    key: "render",
    value: function render(indexer) {}
  }, {
    key: "resize",
    value: function resize(w, h) {
      this.width = w;
      this.height = h;
    }
  }]);

  return BaseRenderer;
}(_core_EventDispatcher__WEBPACK_IMPORTED_MODULE_6__["EventDispatcher"]);
var GLRenderer =
/*#__PURE__*/
function (_BaseRenderer) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(GLRenderer, _BaseRenderer);

  function GLRenderer() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GLRenderer);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(GLRenderer).call(this));
    _this.canvas = document.createElement('canvas');

    _this._defineHandlers();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GLRenderer, [{
    key: "_defineHandlers",
    value: function _defineHandlers() {}
  }, {
    key: "setup",
    value: function setup(data, container) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(GLRenderer.prototype), "setup", this).call(this, data, container);

      data.dom.container.insertBefore(this.canvas, data.dom.view);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(GLRenderer.prototype), "dispose", this).call(this);

      this.container.off('updateTexture', this._onUpdateTexture);
      this.data.dom.container.removeChild(this.canvas);
    }
  }, {
    key: "render",
    value: function render(indexer) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(GLRenderer.prototype), "render", this).call(this, indexer);

      this.container.uniforms.progress.value = indexer.progress;

      if (this.container.uniforms.time) {
        this.container.uniforms.time.value = this.data.time;
      }
    }
  }, {
    key: "resize",
    value: function resize(w, h) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(GLRenderer.prototype), "resize", this).call(this, w, h);
    }
  }]);

  return GLRenderer;
}(BaseRenderer);

/***/ }),

/***/ "./src/modules/renderer/DefaultRenderer.js":
/*!*************************************************!*\
  !*** ./src/modules/renderer/DefaultRenderer.js ***!
  \*************************************************/
/*! exports provided: DefaultRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRenderer", function() { return DefaultRenderer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BaseRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseRenderer */ "./src/modules/renderer/BaseRenderer.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Utils */ "./src/modules/components/Utils.js");
/* harmony import */ var _core_Stage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/Stage */ "./src/modules/core/Stage.js");









var DefaultRenderer =
/*#__PURE__*/
function (_BaseRenderer) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DefaultRenderer, _BaseRenderer);

  function DefaultRenderer() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DefaultRenderer);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DefaultRenderer).call(this));

    _this._defineHandlers();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DefaultRenderer, [{
    key: "_defineHandlers",
    value: function _defineHandlers() {
      var _this2 = this;

      this.dx = 0;

      this._onTick = function (e) {
        console.log('e: ', e);
        _this2.dx = 30 * Math.sin(e.time / 1000);
        var slide0 = _this2.data.list[0];

        if (slide0) {
          slide0.layer.ui.style.webkitTransform = "translate(" + _this2.dx + "px, 0)";
        }
      };
    }
  }, {
    key: "setup",
    value: function setup(data, container) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DefaultRenderer.prototype), "setup", this).call(this, data, container);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DefaultRenderer.prototype), "dispose", this).call(this);
    }
  }, {
    key: "render",
    value: function render(indexer) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DefaultRenderer.prototype), "render", this).call(this, indexer);

      var slide0 = this.data.list[indexer.i0],
          slide1 = this.data.list[indexer.i1];
      var opacity = 1.0 - _components_Utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].clamp(indexer.progress, 0, 0.5) / 0.5;
      var dx = -indexer.progress * this.width;
      this.updateSlide(slide0, opacity, dx);

      if (slide0 != slide1) {
        opacity = _components_Utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].clamp(indexer.progress - 0.5, 0, 0.5) / 0.5;
        dx = (1 - indexer.progress) * this.width;
        this.updateSlide(slide1, opacity, dx);
      } // stage.on("tick", this._onTick);

    }
  }, {
    key: "resize",
    value: function resize(w, h) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DefaultRenderer.prototype), "resize", this).call(this, w, h);
    }
  }, {
    key: "updateSlide",
    value: function updateSlide(slide, opacity, dx) {
      if (!slide || !slide.layer.ui) return;
      slide.layer.ui.style.webkitTransform = "translate(" + dx + "px, 0) scale(1)"; // slide.layer.ui.style.opacity = opacity;
    }
  }]);

  return DefaultRenderer;
}(_BaseRenderer__WEBPACK_IMPORTED_MODULE_6__["BaseRenderer"]);

/***/ }),

/***/ "./src/modules/renderer/XRenderer.js":
/*!*******************************************!*\
  !*** ./src/modules/renderer/XRenderer.js ***!
  \*******************************************/
/*! exports provided: XRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XRenderer", function() { return XRenderer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BaseRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseRenderer */ "./src/modules/renderer/BaseRenderer.js");
/* harmony import */ var _components_graphics_GLGraphics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/graphics/GLGraphics */ "./src/modules/components/graphics/GLGraphics.js");
/* harmony import */ var _components_graphics_nodes_Scene__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/graphics/nodes/Scene */ "./src/modules/components/graphics/nodes/Scene.js");
/* harmony import */ var _display_XModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../display/XModel */ "./src/modules/display/XModel.js");
/* harmony import */ var _components_graphics_assets_Texture__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/graphics/assets/Texture */ "./src/modules/components/graphics/assets/Texture.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Utils */ "./src/modules/components/Utils.js");
/* harmony import */ var _geom_Vec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geom/Vec */ "./src/modules/geom/Vec.js");













var XRenderer =
/*#__PURE__*/
function (_GLRenderer) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(XRenderer, _GLRenderer);

  function XRenderer() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, XRenderer);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(XRenderer).call(this));
    _this.scene = new _components_graphics_nodes_Scene__WEBPACK_IMPORTED_MODULE_8__["Scene3D"](); // this.scene.context.color.b = 1;

    _this.model = new _display_XModel__WEBPACK_IMPORTED_MODULE_9__["XModel"]();
    _this.mesh = _this.model.mesh;

    _this.scene.addChild(_this.model);

    _this._uniform0 = {
      texture0: {
        value: new _components_graphics_assets_Texture__WEBPACK_IMPORTED_MODULE_10__["Texture"]()
      },
      texture1: {
        value: new _components_graphics_assets_Texture__WEBPACK_IMPORTED_MODULE_10__["Texture"]()
      },
      progress: {
        value: 0
      },
      resolution: {
        value: new _geom_Vec__WEBPACK_IMPORTED_MODULE_12__["Vec2"](0.0, 0.0)
      }
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(XRenderer, [{
    key: "setup",
    value: function setup(data, container) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(XRenderer.prototype), "setup", this).call(this, data, container);

      _components_graphics_GLGraphics__WEBPACK_IMPORTED_MODULE_7__["GLGraphics"].setup(this.canvas);
      var transition = data.option.transition;
      this.mesh.material = new _display_XModel__WEBPACK_IMPORTED_MODULE_9__["XMaterial"]({
        vertexShader: transition.vertexShader,
        fragmentShader: transition.fragmentShader,
        uniforms: _components_Utils__WEBPACK_IMPORTED_MODULE_11__["Utils"].extend(transition.uniforms, this._uniform0)
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(XRenderer.prototype), "dispose", this).call(this);

      _components_graphics_GLGraphics__WEBPACK_IMPORTED_MODULE_7__["GLGraphics"].deleteProgram(this.mesh.material.program);
      this.mesh.material = undefined;
    }
  }, {
    key: "render",
    value: function render(indexer) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(XRenderer.prototype), "render", this).call(this, indexer);

      _components_graphics_GLGraphics__WEBPACK_IMPORTED_MODULE_7__["GLGraphics"].clear(this.scene.context);
      _components_graphics_GLGraphics__WEBPACK_IMPORTED_MODULE_7__["GLGraphics"].renderModel(this.model);
    }
  }, {
    key: "resize",
    value: function resize(w, h) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(XRenderer.prototype), "resize", this).call(this, w, h);

      this.canvas.setAttribute("width", w);
      this.canvas.setAttribute("height", h);
      this.scene.camera.setViewport(0, 0, w, h);
    }
  }]);

  return XRenderer;
}(_BaseRenderer__WEBPACK_IMPORTED_MODULE_6__["GLRenderer"]);

/***/ }),

/***/ "./src/modules/transitions/BaseTransition.js":
/*!***************************************************!*\
  !*** ./src/modules/transitions/BaseTransition.js ***!
  \***************************************************/
/*! exports provided: BaseTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTransition", function() { return BaseTransition; });
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Utils */ "./src/modules/components/Utils.js");
/* harmony import */ var _geom_Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geom/Vec */ "./src/modules/geom/Vec.js");


var BaseTransition = {
  vertexShader: "\nattribute vec2 position;\n\nvoid main(void) {\n\tgl_Position = vec4(position, 0.0, 1.0);\n}\n",
  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 uv = gl_FragCoord.xy /resolution.xy;\n\tvec4 color0 = texture2D(texture0, uv);\n\tvec4 color1 = texture2D(texture1, uv);\n\tfloat v = smoothstep(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-uv.x)*gradient.x+uv.y*gradient.y));\n\tgl_FragColor = mix(color0, color1, v);\n}\n",
  uniforms: {
    gradient: {
      value: new _geom_Vec__WEBPACK_IMPORTED_MODULE_1__["Vec2"](1.0, 1.0)
    }
  },
  extend: function extend(o) {
    return _components_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].extend(this, o);
  }
};

/***/ }),

/***/ "./src/modules/transitions/CrossWarpTransition.js":
/*!********************************************************!*\
  !*** ./src/modules/transitions/CrossWarpTransition.js ***!
  \********************************************************/
/*! exports provided: CrossWarpTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossWarpTransition", function() { return CrossWarpTransition; });
/* harmony import */ var _BaseTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseTransition */ "./src/modules/transitions/BaseTransition.js");
/* harmony import */ var _geom_Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geom/Vec */ "./src/modules/geom/Vec.js");


/**
 * It's based on {@link https://gl-transitions.com/editor/crosswarp crosswarp by Eke Péter}.
 */

var CrossWarpTransition = _BaseTransition__WEBPACK_IMPORTED_MODULE_0__["BaseTransition"].extend({
  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tfloat v = mix(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-p.x)*gradient.x+p.y*gradient.y));\n\tv = clamp(v, 0.0, 1.0);\n\n\tvec2 p0 = p;\n\tvec2 p1 = p;\n\n\tp0 -= 0.5;\n\tp0 *= (1.0 - v);\n\tp0 += 0.5;\n\n\tp1 -= 0.5;\n\tp1 *= v;\n\tp1 += 0.5;\n\n\tvec4 color0 = texture2D(texture0, p0);\n\tvec4 color1 = texture2D(texture1, p1);\n\n\tgl_FragColor = mix(color0, color1, v);\n}\n",
  uniforms: {
    gradient: {
      value: new _geom_Vec__WEBPACK_IMPORTED_MODULE_1__["Vec2"](0.5, 0.5)
    }
  }
});

/***/ }),

/***/ "./src/modules/transitions/CrossZoomTransition.js":
/*!********************************************************!*\
  !*** ./src/modules/transitions/CrossZoomTransition.js ***!
  \********************************************************/
/*! exports provided: CrossZoomTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossZoomTransition", function() { return CrossZoomTransition; });
/* harmony import */ var _BaseTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseTransition */ "./src/modules/transitions/BaseTransition.js");
/* harmony import */ var _geom_Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geom/Vec */ "./src/modules/geom/Vec.js");


/**
 * It's based on {@link https://gl-transitions.com/editor/CrossZoom CrossZoom by rectalogic}.
 */

var CrossZoomTransition = _BaseTransition__WEBPACK_IMPORTED_MODULE_0__["BaseTransition"].extend({
  fragmentShader: "\nprecision highp float;\n\n#define PI 3.141592653589793\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\nuniform float strength;\n\n\nfloat Linear_ease(in float begin, in float change, in float duration, in float time) {\n    return change * time / duration + begin;\n}\n\nfloat Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {\n    if (time == 0.0)\n        return begin;\n    else if (time == duration)\n        return begin + change;\n    time = time / (duration / 2.0);\n    if (time < 1.0)\n        return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;\n    return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;\n}\n\nfloat Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {\n    return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;\n}\n\n/* random number between 0 and 1 */\nfloat hash(in vec3 scale, in float seed) {\n    /* use the fragment position for randomness */\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvec3 crossFade(in vec2 uv, in float dissolve) {\n    return mix(texture2D(texture0, uv).rgb, texture2D(texture1, uv).rgb, dissolve);\n}\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tvec2 center = vec2(Linear_ease(0.25, 0.5, 1.0, progress), 0.5);\n\tfloat dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);\n\tfloat strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);\n\tvec3 color = vec3(0.0);\n\tfloat total = 0.0;\n\tvec2 toCenter = center - p;\n\tfloat offset = hash(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n\tfor (float t = 0.0; t <= 40.0; t++) {\n\t  float percent = (t + offset) / 40.0;\n\t  float weight = 4.0 * (percent - percent * percent);\n\t  color += crossFade(p + toCenter * percent * strength, dissolve) * weight;\n\t  total += weight;\n\t  gl_FragColor = vec4(color / total, 1.0);\n\t}\n}\n",
  uniforms: {
    strength: {
      value: 1.0
    }
  }
});

/***/ }),

/***/ "./src/modules/transitions/CubeTransition.js":
/*!***************************************************!*\
  !*** ./src/modules/transitions/CubeTransition.js ***!
  \***************************************************/
/*! exports provided: CubeTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeTransition", function() { return CubeTransition; });
/* harmony import */ var _BaseTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseTransition */ "./src/modules/transitions/BaseTransition.js");
/* harmony import */ var _geom_Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geom/Vec */ "./src/modules/geom/Vec.js");


/**
 * It's based on {@link https://gl-transitions.com/editor/cube cube by gre}.
 */

var CubeTransition = _BaseTransition__WEBPACK_IMPORTED_MODULE_0__["BaseTransition"].extend({
  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec4 bgColor;\n\nuniform float floating;\nuniform float unzoom;\nuniform float perspective;\nuniform float reflection;\n\n\nvec2 project (vec2 p) {\n  return p * vec2(1.0, -1.2) + vec2(0.0, -floating/100.0);\n}\n\nbool inBounds (vec2 p) {\n  return all(lessThan(vec2(0.0), p)) && all(lessThan(p, vec2(1.0)));\n}\n\n/**\n * persp 0-1 1:\u6B63\u5BFE\n * center 1.0:from 0.0:to\n */\nvec2 xskew (vec2 p, float persp, float center) {\n  float x = mix(p.x, 1.0-p.x, center);\n  float d = distance(center, 0.5);\n  return (\n    (vec2( x, (p.y - 0.5 * (1.0 - persp) * x) / (1.0 + (persp - 1.0) * x)) - vec2(0.5 - d, 0.0))\n    * vec2(0.5 / d * -sign(center-0.5), 1.0)\n    + vec2(center, 0.0)\n  );\n}\n\nvoid main(void) {\n\tvec2 uv = gl_FragCoord.xy /resolution.xy;\n\n\tfloat uz = unzoom * 2.0 * (0.5 - distance(0.5, progress));\n\tvec2 p = -uz * 0.5 + (1.0 + uz) * uv;\n\n\tvec2 fromP, toP;\n\n\tfromP = xskew(\n\t\tp / vec2(1.0-progress, 1.0),\n\t\tmix(1.0-progress, 1.0, perspective),\n\t\t1.0\n\t);\n\n\ttoP = xskew(\n\t\t(p - vec2(1.0-progress, 0.0)) / vec2(progress, 1.0),\n\t\t1.0 - mix(1.0-progress, 0.0, perspective),\n\t\t0.0\n\t);\n\n\tif (inBounds(fromP)) {\n\t\tgl_FragColor = texture2D(texture0, fromP);\n\t}\n\telse if (inBounds(toP)) {\n\t\tgl_FragColor = texture2D(texture1, toP);\n\t}\n\telse {\n\t\tfromP = project(fromP);\n\t\ttoP = project(toP);\n\n\t\tvec4 color0 = texture2D(texture0, fromP);\n\t\tvec4 color1 = texture2D(texture1, toP);\n\n\t\tgl_FragColor = bgColor\n\t\t\t+ float(inBounds(fromP)) * mix(bgColor, color0, reflection * mix(1.0, 0.0, fromP.y))\n\t\t\t+ float(inBounds(toP)) * mix(bgColor, color1, reflection * mix(1.0, 0.0, toP.y));\n\t}\n\n\n\n\n}\n",
  uniforms: {
    bgColor: {
      value: new _geom_Vec__WEBPACK_IMPORTED_MODULE_1__["Vec4"](0.1, 0.1, 0.1, 1.0)
    },
    unzoom: {
      value: 0.3
    },
    floating: {
      value: 3.0
    },
    perspective: {
      value: 0.7
    },
    reflection: {
      value: 0.4
    }
  }
});

/***/ }),

/***/ "./src/modules/transitions/MorphTransition.js":
/*!****************************************************!*\
  !*** ./src/modules/transitions/MorphTransition.js ***!
  \****************************************************/
/*! exports provided: MorphTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorphTransition", function() { return MorphTransition; });
/* harmony import */ var _BaseTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseTransition */ "./src/modules/transitions/BaseTransition.js");
/* harmony import */ var _geom_Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geom/Vec */ "./src/modules/geom/Vec.js");


/**
 * It's based on {@link https://gl-transitions.com/editor/morph morph by paniq}.
 */

var MorphTransition = _BaseTransition__WEBPACK_IMPORTED_MODULE_0__["BaseTransition"].extend({
  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\nuniform float strength;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\tvec2 oa = (((c0.rg + c0.b) * 0.5) * 2.0 - 1.0);\n\tvec2 ob = (((c1.rg + c1.b) * 0.5) * 2.0 - 1.0);\n\tvec2 oc = mix(oa,ob,0.5)*strength;\n\n\t// float v = smoothstep(0.0, 1.0, progress * (1.0+fade.x+fade.y) - ((1.0-p.x)*fade.x+p.y*fade.y));\n\tfloat v = progress;\n\n\tc0 = texture2D(texture0, p + oc * v);\n\tc1 = texture2D(texture1, p - oc * (1.0 - v));\n\n\tgl_FragColor = mix(c0, c1, v);\n}\n",
  uniforms: {
    strength: {
      value: 1.0
    }
  }
});

/***/ }),

/***/ "./src/modules/transitions/NoiseTransition.js":
/*!****************************************************!*\
  !*** ./src/modules/transitions/NoiseTransition.js ***!
  \****************************************************/
/*! exports provided: NoiseTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiseTransition", function() { return NoiseTransition; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseTransition */ "./src/modules/transitions/BaseTransition.js");
/* harmony import */ var _geom_Vec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geom/Vec */ "./src/modules/geom/Vec.js");


var _uniforms;



/**
 * It's based on {@link https://logik-matchbook.org/shader/crok_transitions crok_transitions by Gaëtan Renaudeau}.
 */

var NoiseTransition = _BaseTransition__WEBPACK_IMPORTED_MODULE_1__["BaseTransition"].extend({
  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\n\nuniform float dark_low, dark_high, light_low, light_high;\nuniform float brightness, contrast, saturation;\nuniform vec3 light_tint, dark_tint;\n\nuniform float rgbOffsetOpt;\nuniform float horzFuzzOpt;\nuniform float zoom;\nuniform float time;\n\nuniform float t_amount, exposure;\n\nconst vec3 lumc = vec3(0.2125, 0.7154, 0.0721);\nconst vec3 avg_lum = vec3(0.5, 0.5, 0.5);\n\n\nvec3 tint(vec3 col)\n{\n\tfloat bri = (col.x + col.y + col.z)/3.0;\n\n\tfloat v = smoothstep(dark_low, dark_high, bri);\n\tcol = mix(dark_tint * bri, col, v);\n\n\tv = smoothstep(light_low, light_high, bri);\n\tcol = mix(col, min(light_tint * col, 1.0), v);\n\n\tvec3 intensity = vec3(dot(col.rgb, lumc));\n\tvec3 sat_color = mix(intensity, col.rgb, saturation);\n\tvec3 con_color = mix(avg_lum, sat_color, contrast);\n\t\n\treturn (con_color - 1.0 + brightness) * exposure;\n}\n\n// Noise generation functions borrowed from:\n// https://github.com/ashima/webgl-noise/blob/master/src/noise2D.glsl\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n\t// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n\t// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n\t// Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n\t\t+ i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n\t// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n\t// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n\t// Normalise gradients implicitly by scaling m\n\t// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n\t// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nvoid main(void) {\n\n\tvec2 p =  gl_FragCoord.xy/resolution.xy;\n\tvec2 p0 = p;\n\tvec2 p1 = p;\n\n\tp0 -= 0.5;\n\tp1 -= 0.5;\n\tp0 *= 1.0 - progress * zoom;\n\tp1 *= 1.0 - (1.0 - progress) * zoom;\n\tp0 += 0.5;\n\tp1 += 0.5;\n\n\tfloat v = min(progress, 1.0 - progress) * 2.0;\t//0.0-1.0\n\n\tfloat fuzzOffset = snoise(vec2(time*15.0, p.y * 20.0)) * 0.0015;\n\tfloat largeFuzzOffset = snoise(vec2(time*1.0, p.y * 1.0)) * (0.003 + v * 0.01);\n\tfloat f_xoff = (fuzzOffset + largeFuzzOffset) * horzFuzzOpt * progress;\n    float b_xoff = (fuzzOffset + largeFuzzOffset) * horzFuzzOpt * (1.0 - progress);\n    \n    // float rgbOffset = rgbOffsetOpt * fuzzOffset * 300.0;\n    // float rgbOffset = rgbOffsetOpt;\n    float rgbOffset = snoise(vec2(time*15.0, 1.0)) * rgbOffsetOpt;\n\n\tvec3 f_col = vec3(\n\t\ttexture2D(texture0,\tvec2(p0.x + f_xoff -0.01 * rgbOffset * progress, p0.y)).r,\n\t\ttexture2D(texture0, vec2(p0.x + f_xoff,\t  p0.y)).g,\n\t\ttexture2D(texture0, vec2(p0.x + f_xoff +0.01 * rgbOffset * progress, p0.y)).b\n\t);\n\n\tvec3 b_col = vec3(\n\t\ttexture2D(texture1, vec2(p1.x + b_xoff -0.01 * rgbOffset * (1.0 - progress), p1.y)).r,\n\t\ttexture2D(texture1, vec2(p1.x + b_xoff,\t  p1.y)).g,\n\t\ttexture2D(texture1, vec2(p1.x + b_xoff +0.01 * rgbOffset * (1.0 - progress), p1.y)).b\n\t);\n\n\tvec3 ff_col = f_col;\n\tff_col = tint(ff_col);\n\tff_col = mix(f_col, ff_col, t_amount * progress);\n\n\tvec3 bb_col = b_col;\n\tbb_col = tint(bb_col);\n\tbb_col = mix(b_col, bb_col, t_amount * (1.0 - progress));\n\n\tgl_FragColor = vec4(mix(ff_col, bb_col, progress), 1.0);\n}\n",
  uniforms: (_uniforms = {
    time: {
      value: 0
    },
    zoom: {
      value: 0.3
    },
    dark_low: {
      value: 100
    },
    dark_high: {
      value: 200
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uniforms, "dark_low", {
    value: 200
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uniforms, "dark_high", {
    value: 255
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uniforms, "contrast", {
    value: 1
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uniforms, "brightness", {
    value: 1
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uniforms, "saturation", {
    value: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uniforms, "light_tint", {
    value: new _geom_Vec__WEBPACK_IMPORTED_MODULE_2__["Vec3"](0.5, 0.5, 0.5)
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uniforms, "dark_tint", {
    value: new _geom_Vec__WEBPACK_IMPORTED_MODULE_2__["Vec3"](0.2, 0.2, 0.2)
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uniforms, "t_amount", {
    value: 0.5
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uniforms, "exposure", {
    value: 30
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uniforms, "horzFuzzOpt", {
    value: 10
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_uniforms, "rgbOffsetOpt", {
    value: 20
  }), _uniforms)
});

/***/ }),

/***/ "./src/modules/transitions/PixelateTransition.js":
/*!*******************************************************!*\
  !*** ./src/modules/transitions/PixelateTransition.js ***!
  \*******************************************************/
/*! exports provided: PixelateTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelateTransition", function() { return PixelateTransition; });
/* harmony import */ var _BaseTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseTransition */ "./src/modules/transitions/BaseTransition.js");
/* harmony import */ var _geom_Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geom/Vec */ "./src/modules/geom/Vec.js");


var PixelateTransition = _BaseTransition__WEBPACK_IMPORTED_MODULE_0__["BaseTransition"].extend({
  fragmentShader: "\nprecision highp float;\n\n\n#define N 10.0\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution;\t//0.0-1.0\n\tfloat aspect = resolution.x / resolution.y;\n\tfloat v = min(progress, 1.0 - progress) * 2.0;\t//0.0-1.0\n\tv = floor(v * 30.0) / 30.0;\n\n\tif(v > 0.0) {\n\t\tvec2 steps = vec2(aspect, 1.0) * N / v;\n\t\n\t\tp -= 0.5;\n\t\n\t\tsteps = min(steps, resolution.xy);\n\t\tp = (floor(p * steps) + 0.5) / steps;\n\t\n\t\tp += 0.5;\n\t}\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\tgl_FragColor = mix(c0, c1, progress);\n}\n",
  uniforms: {}
});

/***/ }),

/***/ "./src/modules/transitions/PixelateWipeTransition.js":
/*!***********************************************************!*\
  !*** ./src/modules/transitions/PixelateWipeTransition.js ***!
  \***********************************************************/
/*! exports provided: PixelateWipeTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelateWipeTransition", function() { return PixelateWipeTransition; });
/* harmony import */ var _BaseTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseTransition */ "./src/modules/transitions/BaseTransition.js");
/* harmony import */ var _geom_Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geom/Vec */ "./src/modules/geom/Vec.js");


var PixelateWipeTransition = _BaseTransition__WEBPACK_IMPORTED_MODULE_0__["BaseTransition"].extend({
  fragmentShader: "\n\nprecision highp float;\n\n#define N 10.0\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution;\n\tfloat aspect = resolution.x / resolution.y;\n\n\tfloat v = mix(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-p.x)*gradient.x+p.y*gradient.y));\n\tv = clamp(v, 0.0, 1.0);\n\tv = floor(v * 16.0) / 16.0;\n\n\tif(v!=0.0) {\n\t\tp -= 0.5;\n\t\n\t\tfloat pv = min(v, 1.0 - v) * 2.0;\t//0.0-1.0\n\t\tvec2 steps = vec2(aspect, 1.0) * N / pv;\n\t\tsteps = min(steps, resolution.xy);\n\t\tp = (floor(p * steps) + 0.5) / steps;\n\t\n\t\tp += 0.5;\n\t}\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\t// v = step(0.5, v);\n\n\tgl_FragColor = mix(c0, c1, v);\n}\n",
  uniforms: {
    gradient: {
      value: new _geom_Vec__WEBPACK_IMPORTED_MODULE_1__["Vec2"](0.5, 0)
    }
  }
});

/***/ }),

/***/ "./src/xslider.js":
/*!************************!*\
  !*** ./src/xslider.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _xslider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xslider.scss */ "./src/xslider.scss");
/* harmony import */ var _xslider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xslider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main.js */ "./src/modules/main.js");
/* harmony import */ var _modules_core_Stage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/core/Stage.js */ "./src/modules/core/Stage.js");
/* harmony import */ var _modules_transitions_BaseTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/transitions/BaseTransition */ "./src/modules/transitions/BaseTransition.js");
/* harmony import */ var _modules_transitions_CrossWarpTransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/transitions/CrossWarpTransition */ "./src/modules/transitions/CrossWarpTransition.js");
/* harmony import */ var _modules_transitions_CrossZoomTransition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/transitions/CrossZoomTransition */ "./src/modules/transitions/CrossZoomTransition.js");
/* harmony import */ var _modules_transitions_CubeTransition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/transitions/CubeTransition */ "./src/modules/transitions/CubeTransition.js");
/* harmony import */ var _modules_transitions_MorphTransition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/transitions/MorphTransition */ "./src/modules/transitions/MorphTransition.js");
/* harmony import */ var _modules_transitions_NoiseTransition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/transitions/NoiseTransition */ "./src/modules/transitions/NoiseTransition.js");
/* harmony import */ var _modules_transitions_PixelateTransition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/transitions/PixelateTransition */ "./src/modules/transitions/PixelateTransition.js");
/* harmony import */ var _modules_transitions_PixelateWipeTransition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/transitions/PixelateWipeTransition */ "./src/modules/transitions/PixelateWipeTransition.js");
/* harmony import */ var _modules_components_Option__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/components/Option */ "./src/modules/components/Option.js");
/* harmony import */ var _modules_components_Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/components/Utils */ "./src/modules/components/Utils.js");
/* harmony import */ var _modules_geom_Vec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/geom/Vec */ "./src/modules/geom/Vec.js");
/* harmony import */ var _modules_geom_Matrix__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/geom/Matrix */ "./src/modules/geom/Matrix.js");
 // const XSlider = require('./modules/main.js').default;
// const XSlider = require('./modules/main.js')














 //exports

_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].stage = _modules_core_Stage_js__WEBPACK_IMPORTED_MODULE_2__["stage"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].BaseTransition = _modules_transitions_BaseTransition__WEBPACK_IMPORTED_MODULE_3__["BaseTransition"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].CrossWarpTransition = _modules_transitions_CrossWarpTransition__WEBPACK_IMPORTED_MODULE_4__["CrossWarpTransition"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].CrossZoomTransition = _modules_transitions_CrossZoomTransition__WEBPACK_IMPORTED_MODULE_5__["CrossZoomTransition"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].CubeTransition = _modules_transitions_CubeTransition__WEBPACK_IMPORTED_MODULE_6__["CubeTransition"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].MorphTransition = _modules_transitions_MorphTransition__WEBPACK_IMPORTED_MODULE_7__["MorphTransition"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].NoiseTransition = _modules_transitions_NoiseTransition__WEBPACK_IMPORTED_MODULE_8__["NoiseTransition"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].PixelateTransition = _modules_transitions_PixelateTransition__WEBPACK_IMPORTED_MODULE_9__["PixelateTransition"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].PixelateWipeTransition = _modules_transitions_PixelateWipeTransition__WEBPACK_IMPORTED_MODULE_10__["PixelateWipeTransition"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].Vec2 = _modules_geom_Vec__WEBPACK_IMPORTED_MODULE_13__["Vec2"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].Vec3 = _modules_geom_Vec__WEBPACK_IMPORTED_MODULE_13__["Vec3"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].Vec4 = _modules_geom_Vec__WEBPACK_IMPORTED_MODULE_13__["Vec4"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].Matrix3 = _modules_geom_Matrix__WEBPACK_IMPORTED_MODULE_14__["Matrix3"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].Matrix4 = _modules_geom_Matrix__WEBPACK_IMPORTED_MODULE_14__["Matrix4"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].Utils = _modules_components_Utils__WEBPACK_IMPORTED_MODULE_12__["Utils"];
_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].Debug = _modules_components_Option__WEBPACK_IMPORTED_MODULE_11__["Option"].Debug;

if (typeof window !== 'undefined') {
  window.XSlider = _modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"];
} else if (typeof global !== 'undefined') {
  global.XSlider = _modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"];
} // window.XSlider = XSlider;
// export { XSlider }
// export XSlider


/* harmony default export */ __webpack_exports__["default"] = (_modules_main_js__WEBPACK_IMPORTED_MODULE_1__["default"]); // exports { XSlider };
// module.exports = XSlider
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/xslider.scss":
/*!**************************!*\
  !*** ./src/xslider.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=xslider.js.map