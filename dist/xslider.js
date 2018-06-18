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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(59);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(60);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(108);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(112);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(60);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(39)('wks');
var uid = __webpack_require__(30);
var Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(2);
var ctx = __webpack_require__(22);
var hide = __webpack_require__(18);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BaseTransition = undefined;

var _Utils = __webpack_require__(26);

var _Vec = __webpack_require__(12);

var BaseTransition = exports.BaseTransition = {

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 uv = gl_FragCoord.xy /resolution.xy;\n\tvec4 color0 = texture2D(texture0, uv);\n\tvec4 color1 = texture2D(texture1, uv);\n\tfloat v = smoothstep(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-uv.x)*gradient.x+uv.y*gradient.y));\n\tgl_FragColor = mix(color0, color1, v);\n}\n',

	uniforms: {
		gradient: { value: new _Vec.Vec2(1.0, 1.0) }
	},

	extend: function extend(o) {
		return _Utils.Utils.extend(this, o);
	}
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EventDispatcher = undefined;

var _getIterator2 = __webpack_require__(51);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventDispatcher = exports.EventDispatcher = function () {
	function EventDispatcher() {
		(0, _classCallCheck3.default)(this, EventDispatcher);

		this._listeners = {};
		this._properties = {};
	}

	(0, _createClass3.default)(EventDispatcher, [{
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
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = (0, _getIterator3.default)(this._listeners[type]), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var o = _step.value;

						var tmp = options || { type: type };
						o.listener(tmp);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		}
	}, {
		key: "on",
		value: function on(type, listener) {

			this.off(type, listener);

			if (!this._listeners.hasOwnProperty(type)) {
				this._listeners[type] = [];
			}

			this._listeners[type].push({ type: type, listener: listener });

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Vec4 = exports.Vec3 = exports.Vec2 = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vec2 = exports.Vec2 = function Vec2() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	(0, _classCallCheck3.default)(this, Vec2);

	this.x = x;
	this.y = y;
};

var Vec3 = exports.Vec3 = function Vec3() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	(0, _classCallCheck3.default)(this, Vec3);

	this.x = x;
	this.y = y;
	this.z = z;
};

var Vec4 = exports.Vec4 = function Vec4() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	(0, _classCallCheck3.default)(this, Vec4);

	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(58);
var toPrimitive = __webpack_require__(41);
var dP = Object.defineProperty;

exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(19)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(64);
var defined = __webpack_require__(37);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var createDesc = __webpack_require__(33);
module.exports = __webpack_require__(15) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(63);
var enumBugKeys = __webpack_require__(45);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(128), __esModule: true };

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(32);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Utils = undefined;

var _getIterator2 = __webpack_require__(51);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _entries = __webpack_require__(119);

var _entries2 = _interopRequireDefault(_entries);

var _assign = __webpack_require__(123);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Utils = exports.Utils = {
	extend: function extend(base, o) {
		var ret = {};
		(0, _assign2.default)(ret, base);

		var entries = (0, _entries2.default)(o);
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = (0, _getIterator3.default)(entries), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var entry = _step.value;

				ret[entry[0]] = entry[1];
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return ret;
	},
	delegate: function delegate(base, o) {
		var entries = (0, _entries2.default)(o);
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = (0, _getIterator3.default)(entries), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var entry = _step2.value;

				base[entry[0]] = entry[1];
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	},
	clamp: function clamp(v, min, max) {
		return Math.max(min, Math.min(max, v));
	},
	getQuery: function getQuery(key) {
		var cached = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


		if (!this._query || !cached) {
			this._query = {};
			//最初の?を除いた文字列を取得
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
	}

	// toSvg(dom) {


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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.stage = undefined;

var _promise = __webpack_require__(21);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(28);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Event = __webpack_require__(53);

var _InteractiveObject2 = __webpack_require__(55);

var _Environment = __webpack_require__(54);

var _Ticker = __webpack_require__(144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stage = function (_InteractiveObject) {
	(0, _inherits3.default)(Stage, _InteractiveObject);

	function Stage() {
		(0, _classCallCheck3.default)(this, Stage);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Stage.__proto__ || (0, _getPrototypeOf2.default)(Stage)).call(this));

		_this.ticker = new _Ticker.Ticker();

		_this.set({ target: window });
		return _this;
	}

	(0, _createClass3.default)(Stage, [{
		key: 'ready',
		value: function ready() {
			return new _promise2.default(function (resolve, reject) {

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
		key: '_autoAddListener',
		value: function _autoAddListener(target, type) {

			if (!target) return;

			(0, _get3.default)(Stage.prototype.__proto__ || (0, _getPrototypeOf2.default)(Stage.prototype), '_autoAddListener', this).call(this, target, type);

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
		key: '_autoRemoveListener',
		value: function _autoRemoveListener(target, type) {

			if (!target) return;

			(0, _get3.default)(Stage.prototype.__proto__ || (0, _getPrototypeOf2.default)(Stage.prototype), '_autoRemoveListener', this).call(this, target, type);

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
		key: 'width',
		get: function get() {
			return window.innerWidth || document.documentElement.clientWidth || 0;
		}
	}, {
		key: 'height',
		get: function get() {
			return window.innerHeight || document.documentElement.clientHeight || 0;
		}
	}]);
	return Stage;
}(_InteractiveObject2.InteractiveObject);

//singleton


var stage = exports.stage = new Stage();

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(141);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(37);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(2);
var fails = __webpack_require__(19);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(7)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Debug = exports.Debug = {
    DISPLAY_DOM: 'DISPLAY_DOM',
    DISPLAY_SVG: 'DISPLAY_SVG',
    DISPLAY_IMG: 'DISPLAY_IMG',

    display: false
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(39)('keys');
var uid = __webpack_require__(30);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(92)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(61)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(11);
var dPs = __webpack_require__(94);
var enumBugKeys = __webpack_require__(45);
var IE_PROTO = __webpack_require__(38)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(40)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(66).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
var global = __webpack_require__(6);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(23);
var TO_STRING_TAG = __webpack_require__(7)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(7);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(34);
var wksExt = __webpack_require__(47);
var defineProperty = __webpack_require__(13).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(25);
var createDesc = __webpack_require__(33);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(41);
var has = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(58);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(32);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TouchEvent = exports.Event = undefined;

var _Environment = __webpack_require__(54);

var Event = exports.Event = {
	CHANGE: 'change'
};

var types = [];
if (_Environment.env.support.touch) {
	types.push('touchstart', 'touchmove', 'touchend');
} else if (_Environment.env.support.pointer) {
	types.push('pointerdown', 'pointermove', 'pointerup');
} else if (_Environment.env.support.MSPointer) {
	types.push('MSPointerDown', 'MSPointerMove', 'MSPointerUp');
} else {
	types.push('mousedown', 'mousemove', 'mouseup');
}

var TouchEvent = exports.TouchEvent = {
	START: types[0],
	MOVE: types[1],
	END: types[2]
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.env = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventDispatcher2 = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Environment = function (_EventDispatcher) {
	(0, _inherits3.default)(Environment, _EventDispatcher);

	function Environment() {
		(0, _classCallCheck3.default)(this, Environment);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Environment.__proto__ || (0, _getPrototypeOf2.default)(Environment)).call(this));

		console.info("xslider ver.", "0.0.1");
		if (!THREE) {
			console.error("xslider depend on three.js");
		}
		// if(!domtoimage) {
		// 	console.error("xslider depend on dom-to-image");
		// }
		return _this;
	}

	(0, _createClass3.default)(Environment, [{
		key: "support",
		get: function get() {
			return Environment.support;
		}
	}]);
	return Environment;
}(_EventDispatcher2.EventDispatcher);

Environment.support = {
	touch: 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch,
	pointer: window.navigator.pointerEnabled,
	MSPointer: window.navigator.msPointerEnabled
};

var env = exports.env = new Environment();

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InteractiveObject = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(28);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Environment = __webpack_require__(54);

var _Event = __webpack_require__(53);

var _EventDispatcher2 = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InteractiveObject = exports.InteractiveObject = function (_EventDispatcher) {
	(0, _inherits3.default)(InteractiveObject, _EventDispatcher);

	function InteractiveObject() {
		(0, _classCallCheck3.default)(this, InteractiveObject);

		var _this = (0, _possibleConstructorReturn3.default)(this, (InteractiveObject.__proto__ || (0, _getPrototypeOf2.default)(InteractiveObject)).call(this));

		_this._defineHandlers();

		_this.on('target', _this._on.changeTarget);
		return _this;
	}

	(0, _createClass3.default)(InteractiveObject, [{
		key: '_defineHandlers',
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

					if (_Environment.env.support.touch) {
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
		key: 'dispose',
		value: function dispose() {
			this.off();
		}
	}, {
		key: 'on',
		value: function on(type, listener, options) {

			(0, _get3.default)(InteractiveObject.prototype.__proto__ || (0, _getPrototypeOf2.default)(InteractiveObject.prototype), 'on', this).call(this, type, listener, options);

			var target = this.get('target');
			this._autoAddListener(target, type);

			return this;
		}
	}, {
		key: 'off',
		value: function off(type, listener) {

			(0, _get3.default)(InteractiveObject.prototype.__proto__ || (0, _getPrototypeOf2.default)(InteractiveObject.prototype), 'off', this).call(this, type, listener);

			var target = this.get('target');
			this._autoRemoveListener(target, type);

			return this;
		}
	}, {
		key: '_autoAddListener',
		value: function _autoAddListener(target, type) {

			if (!target) return;

			if (this._listeners[type].length == 1) {
				switch (type) {
					case _Event.TouchEvent.START:
					case _Event.TouchEvent.MOVE:
					case _Event.TouchEvent.END:
						target.addEventListener(type, this._on.touch);
						break;
					case 'click':
						target.addEventListener(type, this._on.bubble);
						break;
				}

				if (type == _Event.TouchEvent.MOVE) {
					target.addEventListener(_Event.TouchEvent.START, this._on.touchStart);
				}
			}
		}
	}, {
		key: '_autoRemoveListener',
		value: function _autoRemoveListener(target, type) {

			if (!target) return;

			if (!this._listeners[type] || this._listeners[type].length == 0) {
				switch (type) {
					case _Event.TouchEvent.START:
					case _Event.TouchEvent.MOVE:
					case _Event.TouchEvent.END:
						target.removeEventListener(type, this._on.touch);
						break;
					case 'click':
						target.removeEventListener(type, this._on.bubble);
						break;
				}

				if (type == _Event.TouchEvent.MOVE) {
					target.removeEventListener(_Event.TouchEvent.START, this._on.touchStart);
				}
			}
		}
	}]);
	return InteractiveObject;
}(_EventDispatcher2.EventDispatcher);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Bench = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bench = exports.Bench = function () {
	function Bench() {
		(0, _classCallCheck3.default)(this, Bench);
	}

	(0, _createClass3.default)(Bench, null, [{
		key: "start",
		value: function start(tag, label) {
			var _label = label != undefined ? "start-" + label : "start";
			console.log(tag, _label);
			Bench.list[tag] = Bench.time;
		}
	}, {
		key: "check",
		value: function check(tag, label) {
			var _label = label != undefined ? "check-" + label : "check";
			var dt = Bench.time - Bench.list[tag];
			console.log(tag, _label, dt);
		}
	}, {
		key: "end",
		value: function end(tag, label) {
			var _label = label != undefined ? "end-" + label : "end";
			var dt = Bench.time - Bench.list[tag];
			console.log(tag, _label, dt);
			delete Bench.list[tag];
		}
	}, {
		key: "time",
		get: function get() {
			return Date.now() || new Date().getTime();
		}
	}]);
	return Bench;
}();

Bench.list = {};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(29);
var IE_PROTO = __webpack_require__(38)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(15) && !__webpack_require__(19)(function () {
  return Object.defineProperty(__webpack_require__(40)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(90);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(100);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(34);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(62);
var hide = __webpack_require__(18);
var has = __webpack_require__(17);
var Iterators = __webpack_require__(23);
var $iterCreate = __webpack_require__(93);
var setToStringTag = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(57);
var ITERATOR = __webpack_require__(7)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(16);
var arrayIndexOf = __webpack_require__(95)(false);
var IE_PROTO = __webpack_require__(38)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(43);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(16);
var gOPN = __webpack_require__(68).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(63);
var hiddenKeys = __webpack_require__(45).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(71);
var ITERATOR = __webpack_require__(7)('iterator');
var Iterators = __webpack_require__(23);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(24);
var TAG = __webpack_require__(7)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(11);
var aFunction = __webpack_require__(32);
var SPECIES = __webpack_require__(7)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(22);
var invoke = __webpack_require__(134);
var html = __webpack_require__(66);
var cel = __webpack_require__(40);
var global = __webpack_require__(6);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(24)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var isObject = __webpack_require__(14);
var newPromiseCapability = __webpack_require__(52);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.net = undefined;

var _promise = __webpack_require__(21);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Net = function () {
	function Net() {
		(0, _classCallCheck3.default)(this, Net);
	}

	(0, _createClass3.default)(Net, [{
		key: 'construcor',
		value: function construcor() {}
	}, {
		key: 'loadImage',
		value: function loadImage(image, src) {
			return new _promise2.default(function (resolve, reject) {

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
		key: 'get',
		value: function get(url, responseType) {
			return new _promise2.default(function (resolve, reject) {

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
		}

		// async getDataURI(url) {
		// 	let blob;
		// 	blob = await this.get(url, 'blob');
		// 	blob = await this.readBlob(blob);
		// 	return blob;
		// }

	}, {
		key: 'getDataURI',
		value: function getDataURI(url) {
			return this.get(url, 'blob').then(this.readBlob);
		}
	}, {
		key: 'readBlob',
		value: function readBlob(blob) {
			var reader = new FileReader();
			return new _promise2.default(function (resolve, reject) {
				reader.onloadend = function () {
					resolve(reader.result);
				};
				reader.readAsDataURL(blob);
			});
		}
	}]);
	return Net;
}();

var net = exports.net = new Net();

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.cloner = undefined;

var _promise = __webpack_require__(21);

var _promise2 = _interopRequireDefault(_promise);

var _getOwnPropertyNames = __webpack_require__(146);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cloner = function () {
	function Cloner() {
		(0, _classCallCheck3.default)(this, Cloner);
	}

	(0, _createClass3.default)(Cloner, [{
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
				target.cssText = original.cssText;

				//remove fontStrech
				var matches = target.cssText.match(/font:( [^ ;]+)+;/);
				if (matches) {
					var removeFontStrech = function removeFontStrech(s) {
						var arr = s.split(" ");
						arr.splice(3, 1);
						return arr.join(" ");
					};
					for (var _i = 0; _i < matches.length; _i++) {
						target.cssText = target.cssText.replace(matches[_i], removeFontStrech(matches[_i]));
					}
				}
			} else {
				for (var _i2 = 0; _i2 < original.length; _i2++) {
					var _name = original[_i2];
					target.setProperty(_name, original.getPropertyValue(_name), original.getPropertyPriority(_name));
				}
			}

			(0, _getOwnPropertyNames2.default)(o).forEach(function (name) {
				target.setProperty(name, o[name]);
			});
		}
	}, {
		key: "cloneNode",
		value: function cloneNode(original) {
			var _this = this;

			var clone = original.cloneNode(false);

			return new _promise2.default(function (resolve, reject) {
				if (original.hasChildNodes()) {
					var children = original.childNodes;

					_this.copyStyle(window.getComputedStyle(original), clone.style);

					var arr = [];

					children.forEach(function (child, i, list) {
						var p = _this.cloneNode(child).then(function (childClone) {
							// clone.appendChild(childClone);
							_this.insertChildAtIndex(clone, childClone, i);
						});
						arr.push(p);
					});

					_promise2.default.all(arr).then(function () {
						resolve(clone);
					});
				} else {
					resolve(clone);
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

var cloner = exports.cloner = new Cloner();

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Inliner = undefined;

var _promise = __webpack_require__(21);

var _promise2 = _interopRequireDefault(_promise);

var _Cloner = __webpack_require__(77);

var _Net = __webpack_require__(76);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Inliner = exports.Inliner = {

	URL_REGEX: /url\(['"]?([^'"]+?)['"]?\)/g,

	resolveFonts: function resolveFonts() {
		var _this = this;

		return new _promise2.default(function (resolve, reject) {
			if (_this.inlinedFontString) {
				resolve();
			} else {
				var fontStrings = _this.readFontRules().map(function (rule) {
					return rule.cssText;
				});
				_this.inlineFonts(fontStrings).then(function (inlinedFontStrings) {
					_this.inlinedFontString = inlinedFontStrings.join(" ");
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
		}

		return fontRules;
	},
	inlineFonts: function inlineFonts(fontStrings) {
		var _this2 = this;

		var arr = fontStrings.map(function (string) {
			return _this2._inline(string);
		});
		return _promise2.default.all(arr);
	},
	inlineNode: function inlineNode(node) {
		return _Cloner.cloner.cloneNode(node).then(this.inlineImage.bind(this));
	},
	_inline: function _inline(string) {
		var urls = this.searchUrls(string);

		var arr = [];

		urls.map(function (url) {
			var p = _Net.net.getDataURI(url).then(function (dataURI) {
				string = string.replace(url, dataURI);
			});
			arr.push(p);
		});

		return _promise2.default.all(arr).then(function () {
			return string;
		});
	},
	searchUrls: function searchUrls(string) {
		var _this3 = this;

		var result = [];
		var match = void 0;
		while ((match = this.URL_REGEX.exec(string)) !== null) {
			result.push(match[1]);
		}
		return result.filter(function (url) {
			return _this3.isDataURI(url);
		});
	},
	inlineImage: function inlineImage(node) {
		var _this4 = this;

		return new _promise2.default(function (resolve, reject) {
			_promise2.default.resolve(node).then(_this4.inlineImageElement.bind(_this4)).then(_this4.inlineBackgroundImage.bind(_this4)).then(function () {
				if (node.hasChildNodes()) {
					var children = node.childNodes;
					var arr = [];

					children.forEach(function (child, i, list) {
						var p = _this4.inlineImage(child);
						arr.push(p);
					});

					_promise2.default.all(arr).then(function () {
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

		if (this.isDataURI(node.src)) return node;

		// return node;

		return new _promise2.default(function (resolve, reject) {

			_Net.net.getDataURI(node.src).then(function (dataURI) {
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DefaultRenderer = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(28);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseRenderer2 = __webpack_require__(80);

var _Utils = __webpack_require__(26);

var _Stage = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultRenderer = exports.DefaultRenderer = function (_BaseRenderer) {
	(0, _inherits3.default)(DefaultRenderer, _BaseRenderer);

	function DefaultRenderer() {
		(0, _classCallCheck3.default)(this, DefaultRenderer);

		var _this = (0, _possibleConstructorReturn3.default)(this, (DefaultRenderer.__proto__ || (0, _getPrototypeOf2.default)(DefaultRenderer)).call(this));

		_this._defineHandlers();
		return _this;
	}

	(0, _createClass3.default)(DefaultRenderer, [{
		key: '_defineHandlers',
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
		key: 'setup',
		value: function setup(data, model) {
			(0, _get3.default)(DefaultRenderer.prototype.__proto__ || (0, _getPrototypeOf2.default)(DefaultRenderer.prototype), 'setup', this).call(this, data, model);
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			(0, _get3.default)(DefaultRenderer.prototype.__proto__ || (0, _getPrototypeOf2.default)(DefaultRenderer.prototype), 'dispose', this).call(this);
		}
	}, {
		key: 'render',
		value: function render(indexer) {
			(0, _get3.default)(DefaultRenderer.prototype.__proto__ || (0, _getPrototypeOf2.default)(DefaultRenderer.prototype), 'render', this).call(this, indexer);

			var slide0 = this.data.list[indexer.i0],
			    slide1 = this.data.list[indexer.i1];

			var opacity = 1.0 - _Utils.Utils.clamp(indexer.progress, 0, 0.5) / 0.5;
			var dx = -indexer.progress * this.width;
			this.updateSlide(slide0, opacity, dx);

			if (slide0 != slide1) {
				opacity = _Utils.Utils.clamp(indexer.progress - 0.5, 0, 0.5) / 0.5;
				dx = (1 - indexer.progress) * this.width;
				this.updateSlide(slide1, opacity, dx);
			}

			// stage.on("tick", this._onTick);
		}
	}, {
		key: 'resize',
		value: function resize(e) {
			(0, _get3.default)(DefaultRenderer.prototype.__proto__ || (0, _getPrototypeOf2.default)(DefaultRenderer.prototype), 'resize', this).call(this, e);
		}
	}, {
		key: 'updateSlide',
		value: function updateSlide(slide, opacity, dx) {

			if (!slide || !slide.layer.ui) return;

			slide.layer.ui.style.webkitTransform = "translate(" + dx + "px, 0) scale(1)";
			// slide.layer.ui.style.opacity = opacity;
		}
	}]);
	return DefaultRenderer;
}(_BaseRenderer2.BaseRenderer);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BaseRenderer = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventDispatcher2 = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseRenderer = exports.BaseRenderer = function (_EventDispatcher) {
	(0, _inherits3.default)(BaseRenderer, _EventDispatcher);

	function BaseRenderer() {
		(0, _classCallCheck3.default)(this, BaseRenderer);
		return (0, _possibleConstructorReturn3.default)(this, (BaseRenderer.__proto__ || (0, _getPrototypeOf2.default)(BaseRenderer)).call(this));
	}

	(0, _createClass3.default)(BaseRenderer, [{
		key: 'setup',
		value: function setup(data, model) {
			this.data = data;
			this.model = model;
		}
	}, {
		key: 'dispose',
		value: function dispose() {}
	}, {
		key: 'render',
		value: function render(indexer) {}
	}, {
		key: 'resize',
		value: function resize(e) {
			this.width = e.width;
			this.height = e.height;
		}
	}]);
	return BaseRenderer;
}(_EventDispatcher2.EventDispatcher);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SlideModel = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventDispatcher2 = __webpack_require__(10);

var _BaseTransition = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideModel = exports.SlideModel = function (_EventDispatcher) {
	(0, _inherits3.default)(SlideModel, _EventDispatcher);

	function SlideModel() {
		(0, _classCallCheck3.default)(this, SlideModel);

		var _this = (0, _possibleConstructorReturn3.default)(this, (SlideModel.__proto__ || (0, _getPrototypeOf2.default)(SlideModel)).call(this));

		_this._defineHandlers();

		_this.width = _this.height = 1;
		return _this;
	}

	(0, _createClass3.default)(SlideModel, [{
		key: '_defineHandlers',
		value: function _defineHandlers() {
			var _this2 = this;

			this._onChangeSlide = function (e) {

				var removeOld = false;

				switch (e.type) {
					case 'slide0':
						_this2.updateSlide(0);
						removeOld = e.value0 !== undefined;
						break;
					case 'slide1':
						_this2.updateSlide(1);
						removeOld = e.value0 !== undefined && e.value0 !== _this2.get('slide0');
						break;
				}

				if (removeOld) {
					e.value0.container.classList.remove("xslider-slide-active");
				}
			};
		}
	}, {
		key: 'setup',
		value: function setup(mesh) {
			this.mesh = mesh;
			if (this.mesh) {
				this.geometry = this.mesh.geometry;
				this.material = this.mesh.material;
				this.uniforms = this.material.uniforms;
			}

			this.on('slide0', this._onChangeSlide);
			this.on('slide1', this._onChangeSlide);
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			this.off('slide0', this._onChangeSlide);
			this.off('slide1', this._onChangeSlide);

			var slide0 = this.get('slide0');
			var slide1 = this.get('slide1');
			slide0.container.classList.remove("xslider-slide-active");
			slide1 && slide1.container.classList.remove("xslider-slide-active");
		}
	}, {
		key: 'resize',
		value: function resize(w, h) {
			this.width = w;this.height = h;

			if (this.mesh) {
				this.mesh.scale.set(w, h, 1);
				this.uniforms.resolution.value.set(w, h);
			}

			this.updateSlide(0);
			this.updateSlide(1);
		}
	}, {
		key: 'updateSlide',
		value: function updateSlide(slideIndex) {
			var _this3 = this;

			var slide = this.get('slide' + slideIndex);

			if (!slide) return;

			slide.container.classList.add("xslider-slide-active");

			slide.resize(this.width, this.height).then(function () {
				if (_this3.uniforms) {
					var texture = _this3.uniforms['texture' + slideIndex].value;

					texture.image = slide.canvas;
					texture.needsUpdate = true;
				}

				_this3.dispatch('updateTexture');
			});
		}
	}]);
	return SlideModel;
}(_EventDispatcher2.EventDispatcher);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Button = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _InteractiveObject2 = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = exports.Button = function (_InteractiveObject) {
	(0, _inherits3.default)(Button, _InteractiveObject);

	function Button() {
		(0, _classCallCheck3.default)(this, Button);
		return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call(this));
	}

	(0, _createClass3.default)(Button, [{
		key: 'setup',
		value: function setup(dom) {
			this.set({ target: dom });
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			this.active = true;
		}
	}, {
		key: 'active',
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
}(_InteractiveObject2.InteractiveObject);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(84);

var _main = __webpack_require__(85);

var _Stage = __webpack_require__(27);

var _BaseTransition = __webpack_require__(9);

var _CrossWarpTransition = __webpack_require__(159);

var _CrossZoomTransition = __webpack_require__(160);

var _CubeTransition = __webpack_require__(161);

var _MorphTransition = __webpack_require__(162);

var _NoiseTransition = __webpack_require__(163);

var _PixelateTransition = __webpack_require__(165);

var _PixelateWipeTransition = __webpack_require__(166);

var _TestTransition = __webpack_require__(167);

var _Debug = __webpack_require__(36);

var _Utils = __webpack_require__(26);

//exports
_main.XSlider.stage = _Stage.stage;

_main.XSlider.transition = {
	Base: _BaseTransition.BaseTransition,
	CrossWarp: _CrossWarpTransition.CrossWarpTransition,
	CrossZoom: _CrossZoomTransition.CrossZoomTransition,
	Cube: _CubeTransition.CubeTransition,
	Morph: _MorphTransition.MorphTransition,
	Noise: _NoiseTransition.NoiseTransition,
	Pixelate: _PixelateTransition.PixelateTransition,
	PixelateWipe: _PixelateWipeTransition.PixelateWipeTransition,
	Test: _TestTransition.TestTransition
};

_main.XSlider.Utils = _Utils.Utils;
_main.XSlider.Debug = _Debug.Debug;

window.XSlider = _main.XSlider;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.XSlider = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Data = __webpack_require__(115);

var _SlideController = __webpack_require__(154);

var _EventDispatcher2 = __webpack_require__(10);

var _Utils = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XSlider = exports.XSlider = function (_EventDispatcher) {
	(0, _inherits3.default)(XSlider, _EventDispatcher);

	function XSlider() {
		(0, _classCallCheck3.default)(this, XSlider);

		var _this = (0, _possibleConstructorReturn3.default)(this, (XSlider.__proto__ || (0, _getPrototypeOf2.default)(XSlider)).call(this));

		_this.data = new _Data.Data();
		_this.controller = new _SlideController.SlideController();

		_Utils.Utils.delegate(_this, {
			prev: _this.controller.prev,
			next: _this.controller.next,
			autoplay: {
				start: _this.controller.autoplay.start,
				stop: _this.controller.autoplay.stop
			}
		});

		_this.setup.apply(_this, arguments);
		return _this;
	}

	(0, _createClass3.default)(XSlider, [{
		key: 'setup',
		value: function setup() {
			var _data;

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			console.log('args: ', args);

			this.dispose();

			(_data = this.data).setup.apply(_data, args);

			this.controller.setup(this.renderer, this.data);
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			this.controller.dispose();
			this.data.dispose();
		}
	}]);
	return XSlider;
}(_EventDispatcher2.EventDispatcher);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(29);
var $getPrototypeOf = __webpack_require__(57);

__webpack_require__(31)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(15), 'Object', { defineProperty: __webpack_require__(13).f });


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(46);
module.exports = __webpack_require__(47).f('iterator');


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(43);
var defined = __webpack_require__(37);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(44);
var descriptor = __webpack_require__(33);
var setToStringTag = __webpack_require__(35);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(18)(IteratorPrototype, __webpack_require__(7)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var anObject = __webpack_require__(11);
var getKeys = __webpack_require__(20);

module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16);
var toLength = __webpack_require__(65);
var toAbsoluteIndex = __webpack_require__(96);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(43);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(98);
var step = __webpack_require__(99);
var Iterators = __webpack_require__(23);
var toIObject = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(61)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
__webpack_require__(69);
__webpack_require__(106);
__webpack_require__(107);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(6);
var has = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(15);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(62);
var META = __webpack_require__(103).KEY;
var $fails = __webpack_require__(19);
var shared = __webpack_require__(39);
var setToStringTag = __webpack_require__(35);
var uid = __webpack_require__(30);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(47);
var wksDefine = __webpack_require__(48);
var enumKeys = __webpack_require__(104);
var isArray = __webpack_require__(105);
var anObject = __webpack_require__(11);
var isObject = __webpack_require__(14);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(41);
var createDesc = __webpack_require__(33);
var _create = __webpack_require__(44);
var gOPNExt = __webpack_require__(67);
var $GOPD = __webpack_require__(50);
var $DP = __webpack_require__(13);
var $keys = __webpack_require__(20);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(68).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(25).f = $propertyIsEnumerable;
  __webpack_require__(49).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(34)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(30)('meta');
var isObject = __webpack_require__(14);
var has = __webpack_require__(17);
var setDesc = __webpack_require__(13).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(19)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(20);
var gOPS = __webpack_require__(49);
var pIE = __webpack_require__(25);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(24);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('asyncIterator');


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('observable');


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(8);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(111).set });


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(11);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(22)(Function.call, __webpack_require__(50).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(44) });


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Data = undefined;

var _getIterator2 = __webpack_require__(51);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Option = __webpack_require__(118);

var _Utils = __webpack_require__(26);

var _Debug = __webpack_require__(36);

var _Dom = __webpack_require__(127);

var _Slide = __webpack_require__(145);

var _DefaultRenderer = __webpack_require__(79);

var _ThreeRenderer = __webpack_require__(150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Data = exports.Data = function () {
	function Data() {
		(0, _classCallCheck3.default)(this, Data);

		this.dom = new _Dom.Dom();
		this.time = 0;
	}

	(0, _createClass3.default)(Data, [{
		key: 'setup',
		value: function setup() {

			this.option = _Utils.Utils.extend(_Option.Option, (arguments.length <= 1 ? undefined : arguments[1]) || {});
			_Debug.Debug.display = this.option.debug;

			this.dom.setup(arguments.length <= 0 ? undefined : arguments[0]);

			this.list = [];

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = (0, _getIterator3.default)(this.dom.slides), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var element = _step.value;

					this.list.push(new _Slide.Slide(element));
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			if (!this.option) return;

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = (0, _getIterator3.default)(this.list), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var slide = _step2.value;

					slide.dispose();
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			this.dom.dispose();

			this.option = undefined;
		}
	}, {
		key: 'getRenderer',
		value: function getRenderer() {
			if (this.option.debug) {
				return new _DefaultRenderer.DefaultRenderer();
			} else {
				return this.option.renderer || new _ThreeRenderer.ThreeRenderer();
			}
		}
	}]);
	return Data;
}();

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(42);
module.exports = __webpack_require__(117);


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var get = __webpack_require__(70);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Option = undefined;

var _BaseTransition = __webpack_require__(9);

var Option = exports.Option = {

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

	// getTransition : function() {
	// 	return BaseTransition;
	// },
	transition: _BaseTransition.BaseTransition,

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

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
module.exports = __webpack_require__(2).Object.entries;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(8);
var $entries = __webpack_require__(122)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(20);
var toIObject = __webpack_require__(16);
var isEnum = __webpack_require__(25).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(124), __esModule: true };

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(125);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(126) });


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(20);
var gOPS = __webpack_require__(49);
var pIE = __webpack_require__(25);
var toObject = __webpack_require__(29);
var IObject = __webpack_require__(64);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(19)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Dom = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventDispatcher2 = __webpack_require__(10);

var _Stage = __webpack_require__(27);

var _Debug = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dom = exports.Dom = function (_EventDispatcher) {
	(0, _inherits3.default)(Dom, _EventDispatcher);

	function Dom() {
		(0, _classCallCheck3.default)(this, Dom);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Dom.__proto__ || (0, _getPrototypeOf2.default)(Dom)).call(this));

		_this._defineHandlers();

		// this.canvas = document.createElement('canvas');
		return _this;
	}

	(0, _createClass3.default)(Dom, [{
		key: '_defineHandlers',
		value: function _defineHandlers() {
			var _this2 = this;

			this._onResize = function (e) {
				if (_this2.width != _this2.container.clientWidth || _this2.height != _this2.container.clientHeight) {
					_this2.width = _this2.container.clientWidth;
					_this2.height = _this2.container.clientHeight;
					_this2.dispatch('resize', { type: 'resize', width: _this2.width, height: _this2.height });
				}
			};
		}
	}, {
		key: 'setup',
		value: function setup(selector) {

			this.container = document.querySelector(selector);
			this.container.classList.add("xslider-container");

			if (_Debug.Debug.display == _Debug.Debug.DISPLAY_DOM) {
				this.container.classList.add("xslider-debug");
			}

			this.view = this.container.querySelector(".xslider-view");
			this.slides = this.view.querySelectorAll(".xslider-slide");

			this.pager = this.container.querySelector(".xslider-pager");
			this.prev = this.container.querySelector(".xslider-prev");
			this.next = this.container.querySelector(".xslider-next");

			_Stage.stage.on('resize', this._onResize);
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			this.width = this.height = undefined;
			_Stage.stage.off('resize', this._onResize);
			this.container.classList.remove("xslider-container", "xslider-debug");
		}
	}]);
	return Dom;
}(_EventDispatcher2.EventDispatcher);

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
__webpack_require__(42);
__webpack_require__(46);
__webpack_require__(129);
__webpack_require__(139);
__webpack_require__(140);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(34);
var global = __webpack_require__(6);
var ctx = __webpack_require__(22);
var classof = __webpack_require__(71);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(14);
var aFunction = __webpack_require__(32);
var anInstance = __webpack_require__(130);
var forOf = __webpack_require__(131);
var speciesConstructor = __webpack_require__(72);
var task = __webpack_require__(73).set;
var microtask = __webpack_require__(135)();
var newPromiseCapabilityModule = __webpack_require__(52);
var perform = __webpack_require__(74);
var promiseResolve = __webpack_require__(75);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(7)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(136)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(35)($Promise, PROMISE);
__webpack_require__(137)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(138)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(22);
var call = __webpack_require__(132);
var isArrayIter = __webpack_require__(133);
var anObject = __webpack_require__(11);
var toLength = __webpack_require__(65);
var getIterFn = __webpack_require__(70);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(11);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(23);
var ITERATOR = __webpack_require__(7)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 134 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var macrotask = __webpack_require__(73).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(24)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(18);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var core = __webpack_require__(2);
var dP = __webpack_require__(13);
var DESCRIPTORS = __webpack_require__(15);
var SPECIES = __webpack_require__(7)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(7)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(8);
var core = __webpack_require__(2);
var global = __webpack_require__(6);
var speciesConstructor = __webpack_require__(72);
var promiseResolve = __webpack_require__(75);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(52);
var perform = __webpack_require__(74);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(143);
var $Object = __webpack_require__(2).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(16);
var $getOwnPropertyDescriptor = __webpack_require__(50).f;

__webpack_require__(31)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TweenMaxTicker = exports.Ticker = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventDispatcher2 = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ticker = exports.Ticker = function (_EventDispatcher) {
	(0, _inherits3.default)(Ticker, _EventDispatcher);

	function Ticker() {
		(0, _classCallCheck3.default)(this, Ticker);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Ticker.__proto__ || (0, _getPrototypeOf2.default)(Ticker)).call(this));

		_this.fps = 30;

		_this._defineFunctions();
		return _this;
	}

	(0, _createClass3.default)(Ticker, [{
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
					_this2.dispatch('tick', { type: 'tick', time: _this2._lastMs - _this2._startMs, dt: _this2._nextMs - t0 });
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
}(_EventDispatcher2.EventDispatcher);

var TweenMaxTicker = exports.TweenMaxTicker = function (_Ticker) {
	(0, _inherits3.default)(TweenMaxTicker, _Ticker);

	function TweenMaxTicker() {
		(0, _classCallCheck3.default)(this, TweenMaxTicker);
		return (0, _possibleConstructorReturn3.default)(this, (TweenMaxTicker.__proto__ || (0, _getPrototypeOf2.default)(TweenMaxTicker)).call(this));
	}

	(0, _createClass3.default)(TweenMaxTicker, [{
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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Slide = undefined;

var _promise = __webpack_require__(21);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Net = __webpack_require__(76);

var _Cloner = __webpack_require__(77);

var _Inliner = __webpack_require__(78);

var _SvgConverter = __webpack_require__(149);

var _Bench = __webpack_require__(56);

var _Debug = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = exports.Slide = function () {
	function Slide(slide) {
		(0, _classCallCheck3.default)(this, Slide);

		this.container = slide;
		this.canvas = document.createElement('canvas');
		this.image = new Image();
		this.layer = {
			"gl": slide.querySelector(".xslider-layer-gl"),
			"ui": slide.querySelector(".xslider-layer-ui")
		};

		if (_Debug.Debug.display == _Debug.Debug.DISPLAY_IMG) {
			this.container.insertBefore(this.image, this.layer.gl);
		}

		this.needsResize = false;
	}

	(0, _createClass3.default)(Slide, [{
		key: 'dispose',
		value: function dispose() {
			this.layer.gl && this.layer.gl.classList.remove("xslider-capture");
		}
	}, {
		key: 'ready',
		value: function ready() {
			var _this = this;

			return new _promise2.default(function (resolve, reject) {

				//処理済
				if (_this.svg) {
					resolve();
				}
				//textureなし
				else if (!_this.layer.gl) {
						resolve();
					}
					//処理中
					else if (_this.layer.gl.classList.contains("xslider-capture")) {
							reject("in process");
						} else {
							_this.layer.gl.classList.add("xslider-capture");

							var dom = _this.layer.gl;
							var w = dom.scrollWidth;
							var h = dom.scrollHeight;

							_Inliner.Inliner.resolveFonts().then(function () {
								return _Inliner.Inliner.inlineNode(dom);
							}).then(function (inlined) {
								_this.inlinedNode = inlined;

								_this.svg = _SvgConverter.converter.convert(_this.inlinedNode, w, h);
								_this.layer.gl.classList.remove("xslider-capture");

								resolve();
							});

							// // Utils.toSvg(this.layer.gl)
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
		key: 'loadSvg',
		value: function loadSvg() {
			var string = new XMLSerializer().serializeToString(this.svg);
			var uri = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(string);

			if (_Debug.Debug.display == _Debug.Debug.DISPLAY_SVG) {

				if (this._svg0 === undefined) {
					this._svg0 = this.container.insertBefore(this.svg.childNodes[0], this.layer.gl);
				} else {
					var node = this.svg.childNodes[0];
					this.container.replaceChild(node, this._svg0);
					this._svg0 = node;
				}
			}

			return _Net.net.loadImage(this.image, uri);
		}
	}, {
		key: 'resize',
		value: function resize(w, h) {
			var _this2 = this;

			return new _promise2.default(function (resolve, reject) {

				if (!_this2.needsResize) {
					resolve();
				} else {
					_this2.needsResize = false;

					_this2.canvas.width = w;
					_this2.canvas.height = h;

					if (_this2.layer.gl) {
						_this2.layer.gl.classList.add("xslider-capture");

						_Cloner.cloner.cloneStyle(_this2.layer.gl, _this2.inlinedNode, ['background']);

						_this2.layer.gl.classList.remove("xslider-capture");

						_this2.svg = _SvgConverter.converter.convert(_this2.inlinedNode, w, h);

						_this2.loadSvg().then(function () {
							var c = _this2.canvas.getContext('2d');
							c.drawImage(_this2.image, 0, 0, w, h);

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

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(148);
var $Object = __webpack_require__(2).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(31)('getOwnPropertyNames', function () {
  return __webpack_require__(67).f;
});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.converter = undefined;

var _Inliner = __webpack_require__(78);

/**
 * It's based on {@link https://github.com/tsayen/dom-to-image dom-to-image by Anatolii Saienko}.
 */
var converter = exports.converter = {
	parser: new DOMParser(),

	convert: function convert(node, width, height) {

		var svgString = '\n<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">\n\t<foreignObject x="0" y="0" width="100%" height="100%">\n\t\t<style>' + _Inliner.Inliner.inlinedFontString + '</style>\n\t</foreignObject>\n</svg>\n\t\t';
		var svg = this.parser.parseFromString(svgString, "text/xml");
		var o = svg.getElementsByTagName('foreignObject')[0];
		o.appendChild(node);

		// console.log('svg: ', svg);

		return svg;
	}
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ThreeRenderer = undefined;

var _keys = __webpack_require__(151);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(28);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseRenderer2 = __webpack_require__(80);

var _SlideModel = __webpack_require__(81);

var _Bench = __webpack_require__(56);

var _Vec = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThreeRenderer = exports.ThreeRenderer = function (_BaseRenderer) {
	(0, _inherits3.default)(ThreeRenderer, _BaseRenderer);

	function ThreeRenderer() {
		(0, _classCallCheck3.default)(this, ThreeRenderer);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ThreeRenderer.__proto__ || (0, _getPrototypeOf2.default)(ThreeRenderer)).call(this));

		_this._defineHandlers();

		_this.canvas = document.createElement('canvas');
		return _this;
	}

	(0, _createClass3.default)(ThreeRenderer, [{
		key: '_defineHandlers',
		value: function _defineHandlers() {
			var _this2 = this;

			this._onUpdateTexture = function () {
				_this2.renderer.render(_this2.scene, _this2.camera);
			};
		}
	}, {
		key: 'setup',
		value: function setup(data, model) {
			(0, _get3.default)(ThreeRenderer.prototype.__proto__ || (0, _getPrototypeOf2.default)(ThreeRenderer.prototype), 'setup', this).call(this, data, model);

			data.dom.container.insertBefore(this.canvas, data.dom.view);

			this.camera = new THREE.PerspectiveCamera(60, 1, 1, 10000);
			this.scene = new THREE.Scene();

			this.renderer = new THREE.WebGLRenderer({
				antialias: false,
				alpha: true,
				canvas: this.canvas
			});

			// const transition = data.option.getTransition();
			var transition = data.option.transition;

			this.mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1, 1, 1), new THREE.RawShaderMaterial({
				depthTest: false,
				transparent: true,
				vertexShader: transition.vertexShader,
				fragmentShader: transition.fragmentShader,
				uniforms: this._createUniforms(transition.uniforms)
			}));

			this.scene.add(this.mesh);

			// this.model.setup(this.mesh);

			this.model.on('updateTexture', this._onUpdateTexture);
		}
	}, {
		key: '_createUniforms',
		value: function _createUniforms(setting) {
			var ret = {
				texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
				texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
				progress: { value: 0 },
				resolution: { value: new THREE.Vector2(0.0, 0.0) }
			};

			(0, _keys2.default)(setting).forEach(function (key) {
				var v = setting[key];
				if (v instanceof _Vec.Vec4) {
					ret[key] = new THREE.Vector4(v.x, v.y, v.z, v.w);
				} else if (v instanceof _Vec.Vec3) {
					ret[key] = new THREE.Vector3(v.x, v.y, v.z);
				} else if (v instanceof _Vec.Vec2) {
					ret[key] = new THREE.Vector2(v.x, v.y);
				} else {
					ret[key] = v;
				}
			});

			return ret;
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			(0, _get3.default)(ThreeRenderer.prototype.__proto__ || (0, _getPrototypeOf2.default)(ThreeRenderer.prototype), 'dispose', this).call(this);

			this.model.off('updateTexture', this._onUpdateTexture);

			this.data.dom.container.removeChild(this.canvas);
		}
	}, {
		key: 'render',
		value: function render(indexer) {
			(0, _get3.default)(ThreeRenderer.prototype.__proto__ || (0, _getPrototypeOf2.default)(ThreeRenderer.prototype), 'render', this).call(this, indexer);

			this.model.uniforms.progress.value = indexer.progress;
			if (this.model.uniforms.time) {
				this.model.uniforms.time.value = this.data.time;
			}
			this.renderer.render(this.scene, this.camera);
		}
	}, {
		key: 'resize',
		value: function resize(e) {
			(0, _get3.default)(ThreeRenderer.prototype.__proto__ || (0, _getPrototypeOf2.default)(ThreeRenderer.prototype), 'resize', this).call(this, e);

			var w = this.width,
			    h = this.height;

			this.renderer.setSize(w, h);

			this.camera.aspect = w / h;
			this.camera.position.z = ThreeRenderer.CZ * h;
			this.camera.updateProjectionMatrix();
		}
	}]);
	return ThreeRenderer;
}(_BaseRenderer2.BaseRenderer);

ThreeRenderer.CZ = 1 / Math.tan(30 * Math.PI / 180) * 0.5;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(152), __esModule: true };

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(153);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(29);
var $keys = __webpack_require__(20);

__webpack_require__(31)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SlideController = undefined;

var _promise = __webpack_require__(21);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Event = __webpack_require__(53);

var _EventDispatcher2 = __webpack_require__(10);

var _Stage = __webpack_require__(27);

var _AutoPlay = __webpack_require__(155);

var _Indexer = __webpack_require__(156);

var _Bench = __webpack_require__(56);

var _Button = __webpack_require__(82);

var _SlideModel = __webpack_require__(81);

var _UI = __webpack_require__(157);

var _DefaultRenderer = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideController = exports.SlideController = function (_EventDispatcher) {
	(0, _inherits3.default)(SlideController, _EventDispatcher);

	function SlideController() {
		(0, _classCallCheck3.default)(this, SlideController);

		var _this = (0, _possibleConstructorReturn3.default)(this, (SlideController.__proto__ || (0, _getPrototypeOf2.default)(SlideController)).call(this));

		_this.indexer = new _Indexer.Indexer();

		_this.renderer = {
			default: new _DefaultRenderer.DefaultRenderer(),
			gl: undefined
		};

		_this.ui = new _UI.UI();
		_this.autoplay = new _AutoPlay.AutoPlay();

		_this.model = new _SlideModel.SlideModel();

		_this._defineHandlers();
		return _this;
	}

	(0, _createClass3.default)(SlideController, [{
		key: '_defineHandlers',
		value: function _defineHandlers() {
			var _this2 = this;

			this._onResize = function (e) {

				_this2.data.list.forEach(function (slide) {
					slide.needsResize = true;
				});

				_this2.renderer.default.resize(e);
				_this2.renderer.gl.resize(e);

				_this2.model.resize(e.width, e.height);
			};

			this._onCompleteSlide = function () {
				_Stage.stage.off('tick', _this2._onTick);
				_this2.data.option.get('touchMove') && _this2.ui.on(_Event.TouchEvent.START, _this2._onChange);
				_this2.ui.on('index', _this2._onChange);

				_this2.autoplay.start();
			};

			this._onTick = function (e) {
				_this2.data.time = e.time;
				_this2.indexer.tick();
				_this2.renderer.default.render(_this2.indexer);
				_this2.readyModel().then(function () {
					_this2.renderer.gl.render(_this2.indexer);
				}, function (message) {
					console.log("reject ::", message);
				});
				_this2.ui.pager.set({ index: _this2.indexer.current });
			};

			this._onChange = function (e) {
				switch (e.type) {
					case _UI.UI.EVENT.PREV:
						_this2.prev();
						break;

					case _UI.UI.EVENT.NEXT:
					case _AutoPlay.AutoPlay.EVENT.TICK:
						_this2.next();
						break;

					case 'index':
						_this2.indexer.to(e.value);

						_this2.readyModel().then(function () {
							_Stage.stage.on('tick', _this2._onTick);
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

					case _Event.TouchEvent.START:
						_Stage.stage.on(_Event.TouchEvent.MOVE, _this2._onChange);
						_Stage.stage.on(_Event.TouchEvent.END, _this2._onChange);

						_this2.ui.off('index', _this2._onChange);

						_this2.indexer.down();

						_this2.autoplay.stop();

						_Stage.stage.on('tick', _this2._onTick);
						break;

					case _Event.TouchEvent.MOVE:
						var dx = (e.clientX - e.clientX0) / _this2.dom.width;
						_this2.indexer.move(-dx);
						break;

					case _Event.TouchEvent.END:
						_Stage.stage.off(_Event.TouchEvent.MOVE, _this2._onChange);
						_Stage.stage.off(_Event.TouchEvent.END, _this2._onChange);

						_this2.indexer.up();
						break;
				}
			};
		}
	}, {
		key: 'setup',
		value: function setup(renderer, data) {
			var _this3 = this;

			this.renderer.gl = renderer;

			this.data = data;
			this.dom = data.dom;

			this.renderer.default.setup(this.data);

			this.renderer.gl = this.data.getRenderer();
			this.renderer.gl.setup(this.data, this.model);

			this.model.setup(this.renderer.gl.mesh);

			this.ui.setup(this.data);

			if (!this.data.option.loop) {
				this.indexer.on('head', this._onChange);
				this.indexer.on('tail', this._onChange);
			}
			this.indexer.setup(this.data);

			this.indexer.on('complete', this._onCompleteSlide);

			this.autoplay.on(_AutoPlay.AutoPlay.EVENT.TICK, this._onChange);
			this.autoplay.setup(this.data.option.autoplay);

			this.dom.on('resize', this._onResize);

			this.readyModel().then(function () {
				_this3.ui.on('index', _this3._onChange);
				_this3.ui.on(_UI.UI.EVENT.PREV, _this3._onChange);
				_this3.ui.on(_UI.UI.EVENT.NEXT, _this3._onChange);

				_this3.data.option.get('touchMove') && _this3.ui.on(_Event.TouchEvent.START, _this3._onChange);

				_this3.autoplay.start();

				_Stage.stage.on('tick', _this3._onTick);
				_this3.dom._onResize();
			}, function (message) {
				console.log("first ready rejected : ", message);
			});
		}
	}, {
		key: 'readyModel',
		value: function readyModel() {
			var _this4 = this;

			return this.readySlide().then(function () {
				var slide0 = _this4.data.list[_this4.indexer.i0],
				    slide1 = _this4.indexer.i1 !== undefined ? _this4.data.list[_this4.indexer.i1] : undefined;

				_this4.model.set({ slide0: slide0, slide1: slide1 });
			});
		}
	}, {
		key: 'readySlide',
		value: function readySlide() {
			var slide0 = this.data.list[this.indexer.i0];

			if (this.indexer.i1 !== undefined) {
				var slide1 = this.data.list[this.indexer.i1];
				return _promise2.default.all([slide0.ready(), slide1.ready()]);
			} else {
				return slide0.ready();
			}
		}
	}, {
		key: 'prev',
		value: function prev() {
			this.data.option.get('touchMove') && this.ui.off(_Event.TouchEvent.START, this._onChange);
			this.autoplay.stop();
			this.indexer.prev();
			this.ui.pager.set({ index: this.indexer.current });
		}
	}, {
		key: 'next',
		value: function next() {
			this.data.option.get('touchMove') && this.ui.off(_Event.TouchEvent.START, this._onChange);
			this.autoplay.stop();
			this.indexer.next();
			this.ui.pager.set({ index: this.indexer.current });
		}
	}, {
		key: 'dispose',
		value: function dispose() {

			if (!this.data) return;

			_Stage.stage.off('tick', this._onTick);
			_Stage.stage.off(_Event.TouchEvent.MOVE, this._onChange);
			_Stage.stage.off(_Event.TouchEvent.END, this._onChange);

			this.ui.off('index', this._onChange);
			this.ui.off(_UI.UI.EVENT.PREV, this._onChange);
			this.ui.off(_UI.UI.EVENT.NEXT, this._onChange);

			this.data.option.get('touchMove') && this.ui.off(_Event.TouchEvent.START, this._onChange);

			this.ui.dispose();

			this.dom.off('resize', this._onResize);

			this.indexer.off('complete', this._onCompleteSlide);

			if (!this.data.option.loop) {
				this.indexer.off('head', this._onChange);
				this.indexer.off('tail', this._onChange);
			}

			this.renderer.gl.dispose();
			this.renderer.default.dispose();

			this.model.dispose();

			this.data = undefined;
		}
	}]);
	return SlideController;
}(_EventDispatcher2.EventDispatcher);

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AutoPlay = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventDispatcher2 = __webpack_require__(10);

var _Stage = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AutoPlay = exports.AutoPlay = function (_EventDispatcher) {
    (0, _inherits3.default)(AutoPlay, _EventDispatcher);

    function AutoPlay() {
        (0, _classCallCheck3.default)(this, AutoPlay);

        var _this = (0, _possibleConstructorReturn3.default)(this, (AutoPlay.__proto__ || (0, _getPrototypeOf2.default)(AutoPlay)).call(this));

        _this._defineHandlers();
        return _this;
    }

    (0, _createClass3.default)(AutoPlay, [{
        key: '_defineHandlers',
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
        key: 'setup',
        value: function setup(option) {
            this.option = option;
        }
    }, {
        key: 'start',
        value: function start() {
            if (this.enabled) {
                _Stage.stage.on('tick', this._on.tick);
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (this.enabled) {
                _Stage.stage.off('tick', this._on.tick);
            }
        }
    }, {
        key: 'enabled',
        get: function get() {
            return this.option != undefined;
        }
    }]);
    return AutoPlay;
}(_EventDispatcher2.EventDispatcher);

AutoPlay.EVENT = {
    TICK: "autoplay_tick"
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Indexer = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventDispatcher2 = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Indexer = exports.Indexer = function (_EventDispatcher) {
	(0, _inherits3.default)(Indexer, _EventDispatcher);

	function Indexer() {
		(0, _classCallCheck3.default)(this, Indexer);
		return (0, _possibleConstructorReturn3.default)(this, (Indexer.__proto__ || (0, _getPrototypeOf2.default)(Indexer)).call(this));
	}

	(0, _createClass3.default)(Indexer, [{
		key: 'setup',
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
		key: 'prev',
		value: function prev() {
			this._target--;

			!this.data.option.loop && (this._target = this.constrain(this._target));
		}
	}, {
		key: 'next',
		value: function next() {
			this._target++;

			!this.data.option.loop && (this._target = this.constrain(this._target));
		}
	}, {
		key: 'to',
		value: function to(index) {
			if (this.data.option.loop) {
				var d0 = index - this.current,
				    d1 = void 0,
				    diff = void 0;

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
		key: 'down',
		value: function down() {
			this._state = Indexer.STATE.DOWN;
			this._move = 0;
		}
	}, {
		key: 'move',
		value: function move(v) {
			this._v += v;
			this._move = v;

			!this.data.option.loop && (this._v = this.constrain(this._v));

			this._target = this._v;
		}
	}, {
		key: 'up',
		value: function up() {
			this._state = Indexer.STATE.UP;

			!this.data.option.get('throwable', 'touchMove') && (this._move = 0);
		}
	}, {
		key: 'constrain',
		value: function constrain(v) {
			var ret = v < 0 ? 0 : this._length - 1 < v ? this._length - 1 : v;
			this.set({
				'head': ret == 0,
				'tail': ret == this._length - 1
			});
			return ret;
		}
	}, {
		key: 'tick',
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

					this._v += (this._target - this._v) * Indexer.EASING;

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
		key: 'current',
		get: function get() {
			var v = this._target % this._length + this._length;
			return Math.round(v) % this._length;
		}
	}, {
		key: 'i0',
		get: function get() {
			return this._i0;
		}
	}, {
		key: 'i1',
		get: function get() {
			return this._i1;
		}
	}]);
	return Indexer;
}(_EventDispatcher2.EventDispatcher);

Indexer.EASING = 0.15;

Indexer.STATE = {
	DEFAULT: 'DEFAULT',
	DOWN: 'DOWN',
	UP: 'UP'
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UI = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(28);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _InteractiveObject2 = __webpack_require__(55);

var _Button = __webpack_require__(82);

var _Pager = __webpack_require__(158);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UI = exports.UI = function (_InteractiveObject) {
	(0, _inherits3.default)(UI, _InteractiveObject);

	function UI() {
		(0, _classCallCheck3.default)(this, UI);
		return (0, _possibleConstructorReturn3.default)(this, (UI.__proto__ || (0, _getPrototypeOf2.default)(UI)).call(this));
	}

	(0, _createClass3.default)(UI, [{
		key: '_defineHandlers',
		value: function _defineHandlers() {
			var _this2 = this;

			(0, _get3.default)(UI.prototype.__proto__ || (0, _getPrototypeOf2.default)(UI.prototype), '_defineHandlers', this).call(this);

			this._onPrev = function (e) {
				e.preventDefault();
				_this2.dispatch(UI.EVENT.PREV);
			};

			this._onNext = function (e) {
				e.preventDefault();
				_this2.dispatch(UI.EVENT.NEXT);
			};
		}
	}, {
		key: 'setup',
		value: function setup(data) {
			var dom = data.dom;

			this.set({ target: dom.view });

			if (dom.pager) {
				this.pager = this.pager || new _Pager.Pager();
				this.pager.setup(data);
				this.pager.on('index', this._on.bubble);
			}

			if (dom.prev) {
				this.prev = this.prev || new _Button.Button();
				this.prev.setup(dom.prev);
				this.prev.on('click', this._onPrev);
			}

			if (dom.next) {
				this.next = this.next || new _Button.Button();
				this.next.setup(dom.next);
				this.next.on('click', this._onNext);
			}
		}
	}, {
		key: 'dispose',
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
}(_InteractiveObject2.InteractiveObject);

UI.EVENT = {
	PREV: "ui_prev",
	NEXT: "ui_next"
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Pager = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventDispatcher2 = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pager = exports.Pager = function (_EventDispatcher) {
	(0, _inherits3.default)(Pager, _EventDispatcher);

	function Pager() {
		(0, _classCallCheck3.default)(this, Pager);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Pager.__proto__ || (0, _getPrototypeOf2.default)(Pager)).call(this));

		_this._defineHandlers();
		return _this;
	}

	(0, _createClass3.default)(Pager, [{
		key: "_defineHandlers",
		value: function _defineHandlers() {
			var _this2 = this;

			this._onClick = function (e) {
				var index = _this2.list.indexOf(e.target);
				_this2.set({ index: index });
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
			this.set({ index: data.option.initialSlideIndex });
		}
	}, {
		key: "dispose",
		value: function dispose() {
			var _this3 = this;

			this.off("index", this._onChangeIndex);
			this.set({ index: undefined });

			this.list.forEach(function (span) {
				span.removeEventListener('click', _this3._onClick);
				_this3.container.removeChild(span);
			});
		}
	}]);
	return Pager;
}(_EventDispatcher2.EventDispatcher);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CrossWarpTransition = undefined;

var _BaseTransition = __webpack_require__(9);

var _Vec = __webpack_require__(12);

/**
 * It's based on {@link https://gl-transitions.com/editor/crosswarp crosswarp by Eke Péter}.
 */
var CrossWarpTransition = exports.CrossWarpTransition = _BaseTransition.BaseTransition.extend({

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tfloat v = mix(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-p.x)*gradient.x+p.y*gradient.y));\n\tv = clamp(v, 0.0, 1.0);\n\n\tvec2 p0 = p;\n\tvec2 p1 = p;\n\n\tp0 -= 0.5;\n\tp0 *= (1.0 - v);\n\tp0 += 0.5;\n\n\tp1 -= 0.5;\n\tp1 *= v;\n\tp1 += 0.5;\n\n\tvec4 color0 = texture2D(texture0, p0);\n\tvec4 color1 = texture2D(texture1, p1);\n\n\tgl_FragColor = mix(color0, color1, v);\n}\n',

	uniforms: {
		gradient: { value: new _Vec.Vec2(0.5, 0.5) }
	}
});

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.CrossZoomTransition = undefined;

var _BaseTransition = __webpack_require__(9);

var _Vec = __webpack_require__(12);

/**
 * It's based on {@link https://gl-transitions.com/editor/CrossZoom CrossZoom by rectalogic}.
 */
var CrossZoomTransition = exports.CrossZoomTransition = _BaseTransition.BaseTransition.extend({

				vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\n\nvoid main(void) {\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

				fragmentShader: '\nprecision highp float;\n\n#define PI 3.141592653589793\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\nuniform float strength;\n\n\nfloat Linear_ease(in float begin, in float change, in float duration, in float time) {\n    return change * time / duration + begin;\n}\n\nfloat Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {\n    if (time == 0.0)\n        return begin;\n    else if (time == duration)\n        return begin + change;\n    time = time / (duration / 2.0);\n    if (time < 1.0)\n        return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;\n    return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;\n}\n\nfloat Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {\n    return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;\n}\n\n/* random number between 0 and 1 */\nfloat hash(in vec3 scale, in float seed) {\n    /* use the fragment position for randomness */\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvec3 crossFade(in vec2 uv, in float dissolve) {\n    return mix(texture2D(texture0, uv).rgb, texture2D(texture1, uv).rgb, dissolve);\n}\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tvec2 center = vec2(Linear_ease(0.25, 0.5, 1.0, progress), 0.5);\n\tfloat dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);\n\tfloat strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);\n\tvec3 color = vec3(0.0);\n\tfloat total = 0.0;\n\tvec2 toCenter = center - p;\n\tfloat offset = hash(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n\tfor (float t = 0.0; t <= 40.0; t++) {\n\t  float percent = (t + offset) / 40.0;\n\t  float weight = 4.0 * (percent - percent * percent);\n\t  color += crossFade(p + toCenter * percent * strength, dissolve) * weight;\n\t  total += weight;\n\t  gl_FragColor = vec4(color / total, 1.0);\n\t}\n}\n',

				uniforms: {
								strength: { value: 1.0 }
				}

});

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CubeTransition = undefined;

var _BaseTransition = __webpack_require__(9);

var _Vec = __webpack_require__(12);

/**
 * It's based on {@link https://gl-transitions.com/editor/cube cube by gre}.
 */
var CubeTransition = exports.CubeTransition = _BaseTransition.BaseTransition.extend({

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec4 bgColor;\n\nuniform float floating;\nuniform float unzoom;\nuniform float perspective;\nuniform float reflection;\n\n\nvec2 project (vec2 p) {\n  return p * vec2(1.0, -1.2) + vec2(0.0, -floating/100.0);\n}\n\nbool inBounds (vec2 p) {\n  return all(lessThan(vec2(0.0), p)) && all(lessThan(p, vec2(1.0)));\n}\n\n/**\n * persp 0-1 1:\u6B63\u5BFE\n * center 1.0:from 0.0:to\n */\nvec2 xskew (vec2 p, float persp, float center) {\n  float x = mix(p.x, 1.0-p.x, center);\n  float d = distance(center, 0.5);\n  return (\n    (vec2( x, (p.y - 0.5 * (1.0 - persp) * x) / (1.0 + (persp - 1.0) * x)) - vec2(0.5 - d, 0.0))\n    * vec2(0.5 / d * -sign(center-0.5), 1.0)\n    + vec2(center, 0.0)\n  );\n}\n\nvoid main(void) {\n\tvec2 uv = gl_FragCoord.xy /resolution.xy;\n\n\tfloat uz = unzoom * 2.0 * (0.5 - distance(0.5, progress));\n\tvec2 p = -uz * 0.5 + (1.0 + uz) * uv;\n\n\tvec2 fromP, toP;\n\n\tfromP = xskew(\n\t\tp / vec2(1.0-progress, 1.0),\n\t\tmix(1.0-progress, 1.0, perspective),\n\t\t1.0\n\t);\n\n\ttoP = xskew(\n\t\t(p - vec2(1.0-progress, 0.0)) / vec2(progress, 1.0),\n\t\t1.0 - mix(1.0-progress, 0.0, perspective),\n\t\t0.0\n\t);\n\n\tif (inBounds(fromP)) {\n\t\tgl_FragColor = texture2D(texture0, fromP);\n\t}\n\telse if (inBounds(toP)) {\n\t\tgl_FragColor = texture2D(texture1, toP);\n\t}\n\telse {\n\t\tfromP = project(fromP);\n\t\ttoP = project(toP);\n\n\t\tvec4 color0 = texture2D(texture0, fromP);\n\t\tvec4 color1 = texture2D(texture1, toP);\n\n\t\tgl_FragColor = bgColor\n\t\t\t+ float(inBounds(fromP)) * mix(bgColor, color0, reflection * mix(1.0, 0.0, fromP.y))\n\t\t\t+ float(inBounds(toP)) * mix(bgColor, color1, reflection * mix(1.0, 0.0, toP.y));\n\t}\n\n\n\n\n}\n',

	uniforms: {
		bgColor: { value: new _Vec.Vec4(0.1, 0.1, 0.1, 1.0) },
		unzoom: { value: 0.3 },
		floating: { value: 3.0 },
		perspective: { value: 0.7 },
		reflection: { value: 0.4 }
	}
});

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MorphTransition = undefined;

var _BaseTransition = __webpack_require__(9);

var _Vec = __webpack_require__(12);

/**
 * It's based on {@link https://gl-transitions.com/editor/morph morph by paniq}.
 */
var MorphTransition = exports.MorphTransition = _BaseTransition.BaseTransition.extend({

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\nuniform float strength;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\tvec2 oa = (((c0.rg + c0.b) * 0.5) * 2.0 - 1.0);\n\tvec2 ob = (((c1.rg + c1.b) * 0.5) * 2.0 - 1.0);\n\tvec2 oc = mix(oa,ob,0.5)*strength;\n\n\t// float v = smoothstep(0.0, 1.0, progress * (1.0+fade.x+fade.y) - ((1.0-p.x)*fade.x+p.y*fade.y));\n\tfloat v = progress;\n\n\tc0 = texture2D(texture0, p + oc * v);\n\tc1 = texture2D(texture1, p - oc * (1.0 - v));\n\n\tgl_FragColor = mix(c0, c1, v);\n}\n',

	uniforms: {
		strength: { value: 1.0 }
	}
});

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NoiseTransition = undefined;

var _defineProperty2 = __webpack_require__(164);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _uniforms;

var _BaseTransition = __webpack_require__(9);

var _Vec = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * It's based on {@link https://logik-matchbook.org/shader/crok_transitions crok_transitions by Gaëtan Renaudeau}.
 */
var NoiseTransition = exports.NoiseTransition = _BaseTransition.BaseTransition.extend({

	vertexShader: '\n    precision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\n\nvoid main(void) {\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\n\nuniform float dark_low, dark_high, light_low, light_high;\nuniform float brightness, contrast, saturation;\nuniform vec3 light_tint, dark_tint;\n\nuniform float rgbOffsetOpt;\nuniform float horzFuzzOpt;\nuniform float zoom;\nuniform float time;\n\nuniform float t_amount, exposure;\n\nconst vec3 lumc = vec3(0.2125, 0.7154, 0.0721);\nconst vec3 avg_lum = vec3(0.5, 0.5, 0.5);\n\n\nvec3 tint(vec3 col)\n{\n\tfloat bri = (col.x + col.y + col.z)/3.0;\n\n\tfloat v = smoothstep(dark_low, dark_high, bri);\n\tcol = mix(dark_tint * bri, col, v);\n\n\tv = smoothstep(light_low, light_high, bri);\n\tcol = mix(col, min(light_tint * col, 1.0), v);\n\n\tvec3 intensity = vec3(dot(col.rgb, lumc));\n\tvec3 sat_color = mix(intensity, col.rgb, saturation);\n\tvec3 con_color = mix(avg_lum, sat_color, contrast);\n\t\n\treturn (con_color - 1.0 + brightness) * exposure;\n}\n\n// Noise generation functions borrowed from:\n// https://github.com/ashima/webgl-noise/blob/master/src/noise2D.glsl\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n\t// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n\t// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n\t// Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n\t\t+ i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n\t// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n\t// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n\t// Normalise gradients implicitly by scaling m\n\t// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n\t// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nvoid main(void) {\n\n\tvec2 p =  gl_FragCoord.xy/resolution.xy;\n\tvec2 p0 = p;\n\tvec2 p1 = p;\n\n\tp0 -= 0.5;\n\tp1 -= 0.5;\n\tp0 *= 1.0 - progress * zoom;\n\tp1 *= 1.0 - (1.0 - progress) * zoom;\n\tp0 += 0.5;\n\tp1 += 0.5;\n\n\tfloat v = min(progress, 1.0 - progress) * 2.0;\t//0.0-1.0\n\n\tfloat fuzzOffset = snoise(vec2(time*15.0, p.y * 20.0)) * 0.0015;\n\tfloat largeFuzzOffset = snoise(vec2(time*1.0, p.y * 1.0)) * (0.003 + v * 0.01);\n\tfloat f_xoff = (fuzzOffset + largeFuzzOffset) * horzFuzzOpt * progress;\n    float b_xoff = (fuzzOffset + largeFuzzOffset) * horzFuzzOpt * (1.0 - progress);\n    \n    // float rgbOffset = rgbOffsetOpt * fuzzOffset * 300.0;\n    // float rgbOffset = rgbOffsetOpt;\n    float rgbOffset = snoise(vec2(time*15.0, 1.0)) * rgbOffsetOpt;\n\n\tvec3 f_col = vec3(\n\t\ttexture2D(texture0,\tvec2(p0.x + f_xoff -0.01 * rgbOffset * progress, p0.y)).r,\n\t\ttexture2D(texture0, vec2(p0.x + f_xoff,\t  p0.y)).g,\n\t\ttexture2D(texture0, vec2(p0.x + f_xoff +0.01 * rgbOffset * progress, p0.y)).b\n\t);\n\n\tvec3 b_col = vec3(\n\t\ttexture2D(texture1, vec2(p1.x + b_xoff -0.01 * rgbOffset * (1.0 - progress), p1.y)).r,\n\t\ttexture2D(texture1, vec2(p1.x + b_xoff,\t  p1.y)).g,\n\t\ttexture2D(texture1, vec2(p1.x + b_xoff +0.01 * rgbOffset * (1.0 - progress), p1.y)).b\n\t);\n\n\tvec3 ff_col = f_col;\n\tff_col = tint(ff_col);\n\tff_col = mix(f_col, ff_col, t_amount * progress);\n\n\tvec3 bb_col = b_col;\n\tbb_col = tint(bb_col);\n\tbb_col = mix(b_col, bb_col, t_amount * (1.0 - progress));\n\n\tgl_FragColor = vec4(mix(ff_col, bb_col, progress), 1.0);\n}\n',

	uniforms: (_uniforms = {
		time: { value: 0 },

		zoom: { value: 0.3 },

		dark_low: { value: 100 },
		dark_high: { value: 200 }
	}, (0, _defineProperty3.default)(_uniforms, 'dark_low', { value: 200 }), (0, _defineProperty3.default)(_uniforms, 'dark_high', { value: 255 }), (0, _defineProperty3.default)(_uniforms, 'contrast', { value: 1 }), (0, _defineProperty3.default)(_uniforms, 'brightness', { value: 1 }), (0, _defineProperty3.default)(_uniforms, 'saturation', { value: 100 }), (0, _defineProperty3.default)(_uniforms, 'light_tint', { value: new _Vec.Vec3(0.5, 0.5, 0.5) }), (0, _defineProperty3.default)(_uniforms, 'dark_tint', { value: new _Vec.Vec3(0.2, 0.2, 0.2) }), (0, _defineProperty3.default)(_uniforms, 't_amount', { value: 0.5 }), (0, _defineProperty3.default)(_uniforms, 'exposure', { value: 30 }), (0, _defineProperty3.default)(_uniforms, 'horzFuzzOpt', { value: 10 }), (0, _defineProperty3.default)(_uniforms, 'rgbOffsetOpt', { value: 20 }), _uniforms)

});

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(59);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PixelateTransition = undefined;

var _BaseTransition = __webpack_require__(9);

var _Vec = __webpack_require__(12);

var PixelateTransition = exports.PixelateTransition = _BaseTransition.BaseTransition.extend({

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\n\n#define N 10.0\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution;\n\tfloat aspect = resolution.x / resolution.y;\n\tfloat v = min(progress, 1.0 - progress) * 2.0;\t//0.0-1.0\n\tv = floor(v * 30.0) / 30.0;\n\t\n\tvec2 steps = vec2(aspect, 1.0) * N / v;\n\n\tp -= 0.5;\n\n\tsteps = min(steps, resolution.xy);\n\tp = (floor(p * steps) + 0.5) / steps;\n\n\tp += 0.5;\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\tgl_FragColor = mix(c0, c1, progress);\n}\n',

	uniforms: {}
});

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PixelateWipeTransition = undefined;

var _BaseTransition = __webpack_require__(9);

var _Vec = __webpack_require__(12);

var PixelateWipeTransition = exports.PixelateWipeTransition = _BaseTransition.BaseTransition.extend({

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\n\nprecision highp float;\n\n#define N 10.0\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution;\n\tfloat aspect = resolution.x / resolution.y;\n\n\tfloat v = mix(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-p.x)*gradient.x+p.y*gradient.y));\n\tv = clamp(v, 0.0, 1.0);\n\tv = floor(v * 16.0) / 16.0;\n\n\tp -= 0.5;\n\n\tfloat pv = min(v, 1.0 - v) * 2.0;\t//0.0-1.0\n\tvec2 steps = vec2(aspect, 1.0) * N / pv;\n\tsteps = min(steps, resolution.xy);\n\tp = (floor(p * steps) + 0.5) / steps;\n\n\tp += 0.5;\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\t// v = step(0.5, v);\n\n\tgl_FragColor = mix(c0, c1, v);\n}\n',

	uniforms: {
		gradient: { value: new _Vec.Vec2(0.5, 0) }
	}
});

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TestTransition = undefined;

var _BaseTransition = __webpack_require__(9);

var _Vec = __webpack_require__(12);

//glsl transition いっぱい
//https://gl-transitions.com/gallery

//Slices transition effect 
//https://www.shadertoy.com/view/ltVSzd

//Disintegration Transition 
//https://www.shadertoy.com/view/lslSz7


//tiling
//http://glslsandbox.com/e#45579.0

//pixelate
//http://glslsandbox.com/e#45747.0

//from beautifl
//Pixel Wipe
//http://beautifl.net/?id=1229
//SwingingLight forked from: Fluid on the Video
//http://beautifl.net/?id=632
//dora muraken effect
//http://beautifl.net/?id=121

/*
export const TestTransition = BaseTransition.extend({



	vertexShader : `
precision highp float;

attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main(void) {

	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,

fragmentShader : `
precision highp float;

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform float progress;
uniform vec2 resolution;
uniform vec2 gradient;

void main(void) {
	vec2 p = gl_FragCoord.xy /resolution.xy;
	vec4 c0 = texture2D(texture0, p);
	vec4 c1 = texture2D(texture1, p);
	gl_FragColor = mix(c0, c1, progress);
}
`,

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress:{ value: 0 },
		resolution: { value: new Vec2(0.0, 0.0) },
		gradient: { value: new Vec2(0.5, 0.5) },
	}

});
*/

var TestTransition = exports.TestTransition = _BaseTransition.BaseTransition.extend({

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\tgl_FragColor = mix(c0, c1, progress);\n}\n',

	uniforms: {
		gradient: { value: new _Vec.Vec2(0.5, 0.5) }
	}

});

/***/ })
/******/ ]);
//# sourceMappingURL=xslider.js.map