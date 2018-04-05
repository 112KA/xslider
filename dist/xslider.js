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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BaseTransition = undefined;

var _Utils = __webpack_require__(2);

var BaseTransition = exports.BaseTransition = {

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 uv = gl_FragCoord.xy /resolution.xy;\n\tvec4 color0 = texture2D(texture0, uv);\n\tvec4 color1 = texture2D(texture1, uv);\n\tfloat v = smoothstep(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-uv.x)*gradient.x+uv.y*gradient.y));\n\tgl_FragColor = mix(color0, color1, v);\n}\n',

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		uv0: { value: new THREE.Vector4(0, 0, 1, 1) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		uv1: { value: new THREE.Vector4(0, 0, 1, 1) },
		progress: { value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		gradient: { value: new THREE.Vector2(1.0, 1.0) }
	},

	extend: function extend(o) {
		return _Utils.Utils.extend(this, o);
	}
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventDispatcher = exports.EventDispatcher = function () {
	function EventDispatcher() {
		_classCallCheck(this, EventDispatcher);

		this._listeners = {};
		this._properties = {};
	}

	_createClass(EventDispatcher, [{
		key: "get",
		value: function get(key) {
			return this._properties[key];
		}
	}, {
		key: "set",
		value: function set(properties) {
			if (!properties) return;

			for (var key in properties) {

				if (this._properties[key] == undefined || this._properties[key] != properties[key]) {
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
					for (var _iterator = this._listeners[type][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Utils = exports.Utils = {
	extend: function extend(base, o) {
		var ret = {};
		Object.assign(ret, base);

		var entries = Object.entries(o);
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
		var entries = Object.entries(o);
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = entries[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.stage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Event = __webpack_require__(4);

var _InteractiveObject2 = __webpack_require__(6);

var _Environment = __webpack_require__(5);

var _Ticker = __webpack_require__(20);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stage = function (_InteractiveObject) {
	_inherits(Stage, _InteractiveObject);

	function Stage() {
		_classCallCheck(this, Stage);

		var _this = _possibleConstructorReturn(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this));

		_this.ticker = new _Ticker.Ticker();

		_this.set({ target: window });
		return _this;
	}

	_createClass(Stage, [{
		key: 'ready',
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
		key: '_autoAddListener',
		value: function _autoAddListener(target, type) {

			if (!target) return;

			_get(Stage.prototype.__proto__ || Object.getPrototypeOf(Stage.prototype), '_autoAddListener', this).call(this, target, type);

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

			_get(Stage.prototype.__proto__ || Object.getPrototypeOf(Stage.prototype), '_autoRemoveListener', this).call(this, target, type);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TouchEvent = exports.Event = undefined;

var _Environment = __webpack_require__(5);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.env = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Environment = function (_EventDispatcher) {
	_inherits(Environment, _EventDispatcher);

	function Environment() {
		_classCallCheck(this, Environment);

		var _this = _possibleConstructorReturn(this, (Environment.__proto__ || Object.getPrototypeOf(Environment)).call(this));

		console.info("xslider ver.", "1.0.0");
		if (!THREE) {
			console.error("xslider depend on three.js");
		}
		// if(!domtoimage) {
		// 	console.error("xslider depend on dom-to-image");
		// }
		return _this;
	}

	_createClass(Environment, [{
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InteractiveObject = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Environment = __webpack_require__(5);

var _Event = __webpack_require__(4);

var _EventDispatcher2 = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InteractiveObject = exports.InteractiveObject = function (_EventDispatcher) {
	_inherits(InteractiveObject, _EventDispatcher);

	function InteractiveObject() {
		_classCallCheck(this, InteractiveObject);

		var _this = _possibleConstructorReturn(this, (InteractiveObject.__proto__ || Object.getPrototypeOf(InteractiveObject)).call(this));

		_this._defineHandlers();

		_this.on('target', _this._on.changeTarget);
		return _this;
	}

	_createClass(InteractiveObject, [{
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

			_get(InteractiveObject.prototype.__proto__ || Object.getPrototypeOf(InteractiveObject.prototype), 'on', this).call(this, type, listener, options);

			var target = this.get('target');
			this._autoAddListener(target, type);

			return this;
		}
	}, {
		key: 'off',
		value: function off(type, listener) {

			_get(InteractiveObject.prototype.__proto__ || Object.getPrototypeOf(InteractiveObject.prototype), 'off', this).call(this, type, listener);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bench = exports.Bench = function () {
	function Bench() {
		_classCallCheck(this, Bench);
	}

	_createClass(Bench, null, [{
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Net = function () {
	function Net() {
		_classCallCheck(this, Net);
	}

	_createClass(Net, [{
		key: 'construcor',
		value: function construcor() {}
	}, {
		key: 'loadImage',
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
		key: 'get',
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
			return new Promise(function (resolve, reject) {
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
						value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cloner = function () {
						function Cloner() {
												_classCallCheck(this, Cloner);
						}

						_createClass(Cloner, [{
												key: 'cloneNode',
												value: function cloneNode(original) {
																		var _this = this;

																		var clone = original.cloneNode(false);

																		return new Promise(function (resolve, reject) {
																								if (original.hasChildNodes()) {
																														var children = original.childNodes;

																														var style = window.getComputedStyle(original);
																														clone.style.cssText = style.cssText;

																														var arr = [];

																														children.forEach(function (child, i, list) {
																																				var p = _this.cloneNode(child).then(function (childClone) {
																																										clone.appendChild(childClone);
																																				});
																																				arr.push(p);
																														});

																														Promise.all(arr).then(function () {
																																				resolve(clone);
																														});
																								} else {
																														resolve(clone);
																								}
																		});
												}
						}, {
												key: 'copyStyleExcludeBackground',
												value: function copyStyleExcludeBackground(original, target) {
																		var _this2 = this;

																		if (!(original instanceof Element)) return target;

																		var style = window.getComputedStyle(original);
																		var background = target.style.getPropertyValue('background');
																		target.style.cssText = style.cssText;

																		if (background) {
																								target.style.setProperty('background', background);
																		}

																		if (original.hasChildNodes()) {

																								var children = original.childNodes;
																								children.forEach(function (child, i, list) {
																														_this2.copyStyleExcludeBackground(child, target.childNodes[i]);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Inliner = undefined;

var _Cloner = __webpack_require__(9);

var _Net = __webpack_require__(8);

var Inliner = exports.Inliner = {

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
		return Promise.all(arr);
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

		return Promise.all(arr).then(function () {
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

		if (this.isDataURI(node.src)) return node;

		return node;

		return new Promise(function (resolve, reject) {

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DefaultRenderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseRenderer2 = __webpack_require__(12);

var _Utils = __webpack_require__(2);

var _Stage = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultRenderer = exports.DefaultRenderer = function (_BaseRenderer) {
	_inherits(DefaultRenderer, _BaseRenderer);

	function DefaultRenderer() {
		_classCallCheck(this, DefaultRenderer);

		var _this = _possibleConstructorReturn(this, (DefaultRenderer.__proto__ || Object.getPrototypeOf(DefaultRenderer)).call(this));

		_this._defineHandlers();
		return _this;
	}

	_createClass(DefaultRenderer, [{
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
		value: function setup(data) {
			_get(DefaultRenderer.prototype.__proto__ || Object.getPrototypeOf(DefaultRenderer.prototype), 'setup', this).call(this, data);
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			_get(DefaultRenderer.prototype.__proto__ || Object.getPrototypeOf(DefaultRenderer.prototype), 'dispose', this).call(this);
		}
	}, {
		key: 'render',
		value: function render(indexer) {
			_get(DefaultRenderer.prototype.__proto__ || Object.getPrototypeOf(DefaultRenderer.prototype), 'render', this).call(this, indexer);

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
			_get(DefaultRenderer.prototype.__proto__ || Object.getPrototypeOf(DefaultRenderer.prototype), 'resize', this).call(this, e);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BaseRenderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseRenderer = exports.BaseRenderer = function (_EventDispatcher) {
	_inherits(BaseRenderer, _EventDispatcher);

	function BaseRenderer() {
		_classCallCheck(this, BaseRenderer);

		return _possibleConstructorReturn(this, (BaseRenderer.__proto__ || Object.getPrototypeOf(BaseRenderer)).call(this));
	}

	_createClass(BaseRenderer, [{
		key: 'setup',
		value: function setup(data) {
			this.data = data;
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InteractiveObject2 = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_InteractiveObject) {
	_inherits(Button, _InteractiveObject);

	function Button() {
		_classCallCheck(this, Button);

		return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));
	}

	_createClass(Button, [{
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(15);

var _main = __webpack_require__(16);

var _Stage = __webpack_require__(3);

var _BaseTransition = __webpack_require__(0);

var _CrossWarpTransition = __webpack_require__(30);

var _CrossZoomTransition = __webpack_require__(31);

var _CubeTransition = __webpack_require__(32);

var _MorphTransition = __webpack_require__(33);

var _NoiseTransition = __webpack_require__(34);

var _PixelateTransition = __webpack_require__(35);

var _PixelateWipeTransition = __webpack_require__(36);

var _TestTransition = __webpack_require__(37);

var _Utils = __webpack_require__(2);

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

window.XSlider = _main.XSlider;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.XSlider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Data = __webpack_require__(17);

var _SlideController = __webpack_require__(25);

var _EventDispatcher2 = __webpack_require__(1);

var _Utils = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XSlider = exports.XSlider = function (_EventDispatcher) {
	_inherits(XSlider, _EventDispatcher);

	function XSlider() {
		_classCallCheck(this, XSlider);

		var _this = _possibleConstructorReturn(this, (XSlider.__proto__ || Object.getPrototypeOf(XSlider)).call(this));

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

	_createClass(XSlider, [{
		key: 'setup',
		value: function setup() {
			var _data;

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			console.log('args: ', args);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Data = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Option = __webpack_require__(18);

var _Utils = __webpack_require__(2);

var _Dom = __webpack_require__(19);

var _Slide = __webpack_require__(21);

var _DefaultRenderer = __webpack_require__(11);

var _ThreeRenderer = __webpack_require__(23);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Data = exports.Data = function () {
	function Data() {
		_classCallCheck(this, Data);

		this.dom = new _Dom.Dom();
		this.time = 0;
	}

	_createClass(Data, [{
		key: 'setup',
		value: function setup() {

			this.option = _Utils.Utils.extend(_Option.Option, arguments.length <= 0 ? undefined : arguments[0]);

			this.dom.setup(this.option.selector);

			this.list = [];

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.dom.slides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = this.list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Option = undefined;

var _BaseTransition = __webpack_require__(0);

var Option = exports.Option = {

	//default value
	selector: "#xslider",
	initialSlideIndex: 0,
	autoplay: false,
	loop: true,
	touchMove: {
		throwable: true
	},
	// throwable : true,
	// allowTouchMove : true,
	renderer: undefined,
	debug: false,

	getTransition: function getTransition() {
		return _BaseTransition.BaseTransition;
	},

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Dom = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(1);

var _Stage = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dom = exports.Dom = function (_EventDispatcher) {
	_inherits(Dom, _EventDispatcher);

	function Dom() {
		_classCallCheck(this, Dom);

		var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));

		_this._defineHandlers();

		// this.canvas = document.createElement('canvas');
		return _this;
	}

	_createClass(Dom, [{
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
			this.container.classList.remove("xslider-container");
		}
	}]);

	return Dom;
}(_EventDispatcher2.EventDispatcher);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TweenMaxTicker = exports.Ticker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ticker = exports.Ticker = function (_EventDispatcher) {
	_inherits(Ticker, _EventDispatcher);

	function Ticker() {
		_classCallCheck(this, Ticker);

		var _this = _possibleConstructorReturn(this, (Ticker.__proto__ || Object.getPrototypeOf(Ticker)).call(this));

		_this.fps = 30;

		_this._defineFunctions();
		return _this;
	}

	_createClass(Ticker, [{
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
					_this2._nextMs += overlap + (overlap >= _this2._gap ? 1 : _this2._gap - overlap);
					_this2.dispatch('tick', { type: 'tick', time: _this2._lastMs - _this2._startMs });
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
	_inherits(TweenMaxTicker, _Ticker);

	function TweenMaxTicker() {
		_classCallCheck(this, TweenMaxTicker);

		return _possibleConstructorReturn(this, (TweenMaxTicker.__proto__ || Object.getPrototypeOf(TweenMaxTicker)).call(this));
	}

	_createClass(TweenMaxTicker, [{
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Slide = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Net = __webpack_require__(8);

var _Cloner = __webpack_require__(9);

var _Inliner = __webpack_require__(10);

var _SvgConverter = __webpack_require__(22);

var _Bench = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slide = exports.Slide = function () {
	function Slide(slide) {
		_classCallCheck(this, Slide);

		this.container = slide;
		this.canvas = document.createElement('canvas');
		this.image = new Image();
		this.layer = {
			"texture": slide.querySelector(".xslider-layer-texture"),
			"ui": slide.querySelector(".xslider-layer-ui")
		};

		this.needsResize = false;

		this.tag = this.layer.ui.textContent;
	}

	_createClass(Slide, [{
		key: 'dispose',
		value: function dispose() {
			this.layer.texture && this.layer.texture.classList.remove("xslider-texture-capture");
		}
	}, {
		key: 'ready',
		value: function ready() {
			var _this = this;

			return new Promise(function (resolve, reject) {

				//処理済
				if (_this.svg) {
					resolve();
				}
				//textureなし
				else if (!_this.layer.texture) {
						resolve();
					}
					//処理中
					else if (_this.layer.texture.classList.contains("xslider-texture-capture")) {
							reject("in process");
						} else {
							_this.layer.texture.classList.add("xslider-texture-capture");

							var dom = _this.layer.texture;
							var w = dom.scrollWidth;
							var h = dom.scrollHeight;

							_Inliner.Inliner.resolveFonts().then(function () {
								return _Inliner.Inliner.inlineNode(dom);
							}).then(function (inlined) {
								_this.inlinedNode = inlined;

								_this.svg = _SvgConverter.converter.convert(_this.inlinedNode, w, h);
								_this.layer.texture.classList.remove("xslider-texture-capture");

								resolve();
							});

							// // Utils.toSvg(this.layer.texture)
							// converter.from(this.layer.texture)
							// 	.then((svg) => {
							// 		this.svg = svg;
							// 		this.layer.texture.classList.remove("xslider-texture-capture");
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
			var uri = "data:image/svg+xml;charset=utf-8," + new XMLSerializer().serializeToString(this.svg);

			return _Net.net.loadImage(this.image, uri);
		}
	}, {
		key: 'resize',
		value: function resize(w, h) {
			var _this2 = this;

			return new Promise(function (resolve, reject) {

				if (!_this2.needsResize) {
					resolve();
				} else {
					_this2.needsResize = false;

					_this2.canvas.width = w;
					_this2.canvas.height = h;

					_this2.layer.texture.classList.add("xslider-texture-capture");

					_Cloner.cloner.copyStyleExcludeBackground(_this2.layer.texture, _this2.inlinedNode);

					_this2.layer.texture.classList.remove("xslider-texture-capture");

					_this2.svg = _SvgConverter.converter.convert(_this2.inlinedNode, w, h);

					_this2.loadSvg().then(function () {
						var c = _this2.canvas.getContext('2d');
						c.drawImage(_this2.image, 0, 0, w, h);

						resolve();
					});
				}
			});
		}
	}]);

	return Slide;
}();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.converter = undefined;

var _Inliner = __webpack_require__(10);

var converter = exports.converter = {
	parser: new DOMParser(),

	convert: function convert(node, width, height) {

		var svgString = '\n\t\t<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">\n\t\t\t<foreignObject x="0" y="0" width="100%" height="100%">\n\t\t\t\t<style>' + _Inliner.Inliner.inlinedFontString + '</style>\n\t\t\t</foreignObject>\n\t\t</svg>\n\t\t';
		var svg = this.parser.parseFromString(svgString, "text/xml");
		var o = svg.getElementsByTagName('foreignObject')[0];
		o.appendChild(node);

		// console.log('svg: ', svg);

		return svg;
	}
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ThreeRenderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseRenderer2 = __webpack_require__(12);

var _SlideModel = __webpack_require__(24);

var _Bench = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThreeRenderer = exports.ThreeRenderer = function (_BaseRenderer) {
	_inherits(ThreeRenderer, _BaseRenderer);

	function ThreeRenderer() {
		_classCallCheck(this, ThreeRenderer);

		var _this = _possibleConstructorReturn(this, (ThreeRenderer.__proto__ || Object.getPrototypeOf(ThreeRenderer)).call(this));

		_this._defineHandlers();

		_this.canvas = document.createElement('canvas');
		return _this;
	}

	_createClass(ThreeRenderer, [{
		key: '_defineHandlers',
		value: function _defineHandlers() {
			var _this2 = this;

			this._onUpdateTexture = function () {
				_this2.renderer.render(_this2.scene, _this2.camera);
			};
		}
	}, {
		key: 'setup',
		value: function setup(data) {
			_get(ThreeRenderer.prototype.__proto__ || Object.getPrototypeOf(ThreeRenderer.prototype), 'setup', this).call(this, data);

			data.dom.container.insertBefore(this.canvas, data.dom.view);

			this.camera = new THREE.PerspectiveCamera(60, 1, 1, 10000);
			this.scene = new THREE.Scene();

			this.renderer = new THREE.WebGLRenderer({
				antialias: false,
				alpha: true,
				canvas: this.canvas
			});

			var transition = data.option.getTransition();

			this.mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1, 1, 1), new THREE.RawShaderMaterial({
				depthTest: false,
				transparent: true,
				vertexShader: transition.vertexShader,
				fragmentShader: transition.fragmentShader,
				uniforms: transition.uniforms
			}));

			this.model = new _SlideModel.SlideModel();
			this.model.setup(this.mesh);
			this.scene.add(this.model.mesh);

			this.model.on('updateTexture', this._onUpdateTexture);
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			_get(ThreeRenderer.prototype.__proto__ || Object.getPrototypeOf(ThreeRenderer.prototype), 'dispose', this).call(this);

			this.model.off('updateTexture', this._onUpdateTexture);
			this.model.dispose();

			this.data.dom.container.removeChild(this.canvas);
		}
	}, {
		key: 'render',
		value: function render(indexer) {
			_get(ThreeRenderer.prototype.__proto__ || Object.getPrototypeOf(ThreeRenderer.prototype), 'render', this).call(this, indexer);

			var slide0 = this.data.list[indexer.i0],
			    slide1 = this.data.list[indexer.i1];

			this.model.set({ slide0: slide0, slide1: slide1 });
			this.model.uniforms.progress.value = indexer.progress;
			if (this.model.uniforms.time) {
				this.model.uniforms.time.value = this.data.time;
			}
			this.renderer.render(this.scene, this.camera);
		}
	}, {
		key: 'resize',
		value: function resize(e) {
			_get(ThreeRenderer.prototype.__proto__ || Object.getPrototypeOf(ThreeRenderer.prototype), 'resize', this).call(this, e);

			var w = this.width,
			    h = this.height;

			this.renderer.setSize(w, h);

			this.camera.aspect = w / h;
			this.camera.position.z = ThreeRenderer.CZ * h;
			this.camera.updateProjectionMatrix();

			this.model.resize(w, h);
		}
	}]);

	return ThreeRenderer;
}(_BaseRenderer2.BaseRenderer);

ThreeRenderer.CZ = 1 / Math.tan(30 * Math.PI / 180) * 0.5;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SlideModel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(1);

var _BaseTransition = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideModel = exports.SlideModel = function (_EventDispatcher) {
	_inherits(SlideModel, _EventDispatcher);

	function SlideModel() {
		_classCallCheck(this, SlideModel);

		var _this = _possibleConstructorReturn(this, (SlideModel.__proto__ || Object.getPrototypeOf(SlideModel)).call(this));

		_this._defineHandlers();

		_this.width = _this.height = 1;
		return _this;
	}

	_createClass(SlideModel, [{
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
			this.geometry = this.mesh.geometry;
			this.material = this.mesh.material;
			this.uniforms = this.material.uniforms;

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
			slide1.container.classList.remove("xslider-slide-active");
		}
	}, {
		key: 'resize',
		value: function resize(w, h) {
			this.width = w;this.height = h;

			this.mesh.scale.set(w, h, 1);
			this.uniforms.resolution.value.set(w, h);

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
				var texture = _this3.uniforms['texture' + slideIndex].value;

				texture.image = slide.canvas;
				texture.needsUpdate = true;

				_this3.dispatch('updateTexture');
			});
		}
	}]);

	return SlideModel;
}(_EventDispatcher2.EventDispatcher);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SlideController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Event = __webpack_require__(4);

var _EventDispatcher2 = __webpack_require__(1);

var _Stage = __webpack_require__(3);

var _AutoPlay = __webpack_require__(26);

var _Indexer = __webpack_require__(27);

var _Bench = __webpack_require__(7);

var _Button = __webpack_require__(13);

var _UI = __webpack_require__(28);

var _DefaultRenderer = __webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideController = exports.SlideController = function (_EventDispatcher) {
	_inherits(SlideController, _EventDispatcher);

	function SlideController() {
		_classCallCheck(this, SlideController);

		var _this = _possibleConstructorReturn(this, (SlideController.__proto__ || Object.getPrototypeOf(SlideController)).call(this));

		_this.indexer = new _Indexer.Indexer();

		_this.renderer = {
			default: new _DefaultRenderer.DefaultRenderer(),
			gl: undefined
		};

		_this.ui = new _UI.UI();
		_this.autoplay = new _AutoPlay.AutoPlay();

		_this._defineHandlers();
		return _this;
	}

	_createClass(SlideController, [{
		key: '_defineHandlers',
		value: function _defineHandlers() {
			var _this2 = this;

			this._onResize = function (e) {

				_this2.data.list.forEach(function (slide) {
					slide.needsResize = true;
				});

				_this2.renderer.default.resize(e);
				_this2.renderer.gl.resize(e);
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
				_this2.ready().then(function () {
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

						_this2.ready().then(function () {
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
			this.renderer.gl.setup(this.data);

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

			this.ready().then(function () {
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
		key: 'ready',
		value: function ready() {
			var slide0 = this.data.list[this.indexer.i0],
			    slide1 = this.data.list[this.indexer.i1];

			return Promise.all([slide0.ready(), slide1.ready()]);
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
		}
	}]);

	return SlideController;
}(_EventDispatcher2.EventDispatcher);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AutoPlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(1);

var _Stage = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoPlay = exports.AutoPlay = function (_EventDispatcher) {
    _inherits(AutoPlay, _EventDispatcher);

    function AutoPlay() {
        _classCallCheck(this, AutoPlay);

        var _this = _possibleConstructorReturn(this, (AutoPlay.__proto__ || Object.getPrototypeOf(AutoPlay)).call(this));

        _this._defineHandlers();
        return _this;
    }

    _createClass(AutoPlay, [{
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Indexer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indexer = exports.Indexer = function (_EventDispatcher) {
	_inherits(Indexer, _EventDispatcher);

	function Indexer() {
		_classCallCheck(this, Indexer);

		return _possibleConstructorReturn(this, (Indexer.__proto__ || Object.getPrototypeOf(Indexer)).call(this));
	}

	_createClass(Indexer, [{
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
			this._i1 = Math.ceil(v) % this._length;

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UI = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _InteractiveObject2 = __webpack_require__(6);

var _Button = __webpack_require__(13);

var _Pager = __webpack_require__(29);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UI = exports.UI = function (_InteractiveObject) {
	_inherits(UI, _InteractiveObject);

	function UI() {
		_classCallCheck(this, UI);

		return _possibleConstructorReturn(this, (UI.__proto__ || Object.getPrototypeOf(UI)).call(this));
	}

	_createClass(UI, [{
		key: '_defineHandlers',
		value: function _defineHandlers() {
			var _this2 = this;

			_get(UI.prototype.__proto__ || Object.getPrototypeOf(UI.prototype), '_defineHandlers', this).call(this);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Pager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pager = exports.Pager = function (_EventDispatcher) {
	_inherits(Pager, _EventDispatcher);

	function Pager() {
		_classCallCheck(this, Pager);

		var _this = _possibleConstructorReturn(this, (Pager.__proto__ || Object.getPrototypeOf(Pager)).call(this));

		_this._defineHandlers();
		return _this;
	}

	_createClass(Pager, [{
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CrossWarpTransition = undefined;

var _BaseTransition = __webpack_require__(0);

var CrossWarpTransition = exports.CrossWarpTransition = _BaseTransition.BaseTransition.extend({

	//Crosswarp Transition 
	//https://gl-transitions.com/editor/crosswarp

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tfloat v = mix(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-p.x)*gradient.x+p.y*gradient.y));\n\tv = clamp(v, 0.0, 1.0);\n\n\tvec2 p0 = p;\n\tvec2 p1 = p;\n\n\tp0 -= 0.5;\n\tp0 *= (1.0 - v);\n\tp0 += 0.5;\n\n\tp1 -= 0.5;\n\tp1 *= v;\n\tp1 += 0.5;\n\n\tvec4 color0 = texture2D(texture0, p0);\n\tvec4 color1 = texture2D(texture1, p1);\n\n\tgl_FragColor = mix(color0, color1, v);\n}\n',

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress: { value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		gradient: { value: new THREE.Vector2(0.5, 0.5) }
	}
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.CrossZoomTransition = undefined;

var _BaseTransition = __webpack_require__(0);

var CrossZoomTransition = exports.CrossZoomTransition = _BaseTransition.BaseTransition.extend({

				vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\n\nvoid main(void) {\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

				fragmentShader: '\nprecision highp float;\n\n#define PI 3.141592653589793\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\nuniform float strength;\n\n\nfloat Linear_ease(in float begin, in float change, in float duration, in float time) {\n    return change * time / duration + begin;\n}\n\nfloat Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {\n    if (time == 0.0)\n        return begin;\n    else if (time == duration)\n        return begin + change;\n    time = time / (duration / 2.0);\n    if (time < 1.0)\n        return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;\n    return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;\n}\n\nfloat Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {\n    return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;\n}\n\n/* random number between 0 and 1 */\nfloat hash(in vec3 scale, in float seed) {\n    /* use the fragment position for randomness */\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvec3 crossFade(in vec2 uv, in float dissolve) {\n    return mix(texture2D(texture0, uv).rgb, texture2D(texture1, uv).rgb, dissolve);\n}\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tvec2 center = vec2(Linear_ease(0.25, 0.5, 1.0, progress), 0.5);\n\tfloat dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);\n\tfloat strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);\n\tvec3 color = vec3(0.0);\n\tfloat total = 0.0;\n\tvec2 toCenter = center - p;\n\tfloat offset = hash(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n\tfor (float t = 0.0; t <= 40.0; t++) {\n\t  float percent = (t + offset) / 40.0;\n\t  float weight = 4.0 * (percent - percent * percent);\n\t  color += crossFade(p + toCenter * percent * strength, dissolve) * weight;\n\t  total += weight;\n\t  gl_FragColor = vec4(color / total, 1.0);\n\t}\n}\n',

				uniforms: {
								texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
								texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
								progress: { value: 0 },
								resolution: { value: new THREE.Vector2(0.0, 0.0) },
								// fade: { value: new THREE.Vector2(0.5, 0.5) },
								strength: { value: 1.0 }
				}

});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CubeTransition = undefined;

var _BaseTransition = __webpack_require__(0);

var CubeTransition = exports.CubeTransition = _BaseTransition.BaseTransition.extend({

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec4 bgColor;\n\nuniform float floating;\nuniform float unzoom;\nuniform float perspective;\nuniform float reflection;\n\n\nvec2 project (vec2 p) {\n  return p * vec2(1.0, -1.2) + vec2(0.0, -floating/100.0);\n}\n\nbool inBounds (vec2 p) {\n  return all(lessThan(vec2(0.0), p)) && all(lessThan(p, vec2(1.0)));\n}\n\n/**\n * persp 0-1 1:\u6B63\u5BFE\n * center 1.0:from 0.0:to\n */\nvec2 xskew (vec2 p, float persp, float center) {\n  float x = mix(p.x, 1.0-p.x, center);\n  float d = distance(center, 0.5);\n  return (\n    (vec2( x, (p.y - 0.5 * (1.0 - persp) * x) / (1.0 + (persp - 1.0) * x)) - vec2(0.5 - d, 0.0))\n    * vec2(0.5 / d * -sign(center-0.5), 1.0)\n    + vec2(center, 0.0)\n  );\n}\n\nvoid main(void) {\n\tvec2 uv = gl_FragCoord.xy /resolution.xy;\n\n\tfloat uz = unzoom * 2.0 * (0.5 - distance(0.5, progress));\n\tvec2 p = -uz * 0.5 + (1.0 + uz) * uv;\n\n\tvec2 fromP, toP;\n\n\tfromP = xskew(\n\t\tp / vec2(1.0-progress, 1.0),\n\t\tmix(1.0-progress, 1.0, perspective),\n\t\t1.0\n\t);\n\n\ttoP = xskew(\n\t\t(p - vec2(1.0-progress, 0.0)) / vec2(progress, 1.0),\n\t\t1.0 - mix(1.0-progress, 0.0, perspective),\n\t\t0.0\n\t);\n\n\tif (inBounds(fromP)) {\n\t\tgl_FragColor = texture2D(texture0, fromP);\n\t}\n\telse if (inBounds(toP)) {\n\t\tgl_FragColor = texture2D(texture1, toP);\n\t}\n\telse {\n\t\tfromP = project(fromP);\n\t\ttoP = project(toP);\n\n\t\tvec4 color0 = texture2D(texture0, fromP);\n\t\tvec4 color1 = texture2D(texture1, toP);\n\n\t\tgl_FragColor = bgColor\n\t\t\t+ float(inBounds(fromP)) * mix(bgColor, color0, reflection * mix(1.0, 0.0, fromP.y))\n\t\t\t+ float(inBounds(toP)) * mix(bgColor, color1, reflection * mix(1.0, 0.0, toP.y));\n\t}\n\n\n\n\n}\n',

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress: { value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		bgColor: { value: new THREE.Vector4(0.1, 0.1, 0.1, 1.0) },
		unzoom: { value: 0.3 },
		floating: { value: 3.0 },
		perspective: { value: 0.7 },
		reflection: { value: 0.4 }
	}
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MorphTransition = undefined;

var _BaseTransition = __webpack_require__(0);

var MorphTransition = exports.MorphTransition = _BaseTransition.BaseTransition.extend({

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\nuniform float strength;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\tvec2 oa = (((c0.rg + c0.b) * 0.5) * 2.0 - 1.0);\n\tvec2 ob = (((c1.rg + c1.b) * 0.5) * 2.0 - 1.0);\n\tvec2 oc = mix(oa,ob,0.5)*strength;\n\n\t// float v = smoothstep(0.0, 1.0, progress * (1.0+fade.x+fade.y) - ((1.0-p.x)*fade.x+p.y*fade.y));\n\tfloat v = progress;\n\n\tc0 = texture2D(texture0, p + oc * v);\n\tc1 = texture2D(texture1, p - oc * (1.0 - v));\n\n\tgl_FragColor = mix(c0, c1, v);\n}\n',

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress: { value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		// fade: { value: new THREE.Vector2(0.5, 0.5) },
		strength: { value: 1.0 }
	}
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NoiseTransition = undefined;

var _uniforms;

var _BaseTransition = __webpack_require__(0);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NoiseTransition = exports.NoiseTransition = _BaseTransition.BaseTransition.extend({

	vertexShader: '\n    precision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\n\nvoid main(void) {\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\n\nuniform float dark_low, dark_high, light_low, light_high;\nuniform float brightness, contrast, saturation;\nuniform vec3 light_tint, dark_tint;\n\nuniform float rgbOffsetOpt;\nuniform float horzFuzzOpt;\nuniform float zoom;\nuniform float time;\n\nuniform float t_amount, exposure;\n\nconst vec3 lumc = vec3(0.2125, 0.7154, 0.0721);\nconst vec3 avg_lum = vec3(0.5, 0.5, 0.5);\n\n\nvec3 tint(vec3 col)\n{\n\tfloat bri = (col.x + col.y + col.z)/3.0;\n\n\tfloat v = smoothstep(dark_low, dark_high, bri);\n\tcol = mix(dark_tint * bri, col, v);\n\n\tv = smoothstep(light_low, light_high, bri);\n\tcol = mix(col, min(light_tint * col, 1.0), v);\n\n\tvec3 intensity = vec3(dot(col.rgb, lumc));\n\tvec3 sat_color = mix(intensity, col.rgb, saturation);\n\tvec3 con_color = mix(avg_lum, sat_color, contrast);\n\t\n\treturn (con_color - 1.0 + brightness) * exposure;\n}\n\n// Noise generation functions borrowed from:\n// https://github.com/ashima/webgl-noise/blob/master/src/noise2D.glsl\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n\t// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n\t// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n\t// Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n\t\t+ i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n\t// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n\t// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n\t// Normalise gradients implicitly by scaling m\n\t// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n\t// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nvoid main(void) {\n\n\tvec2 p =  gl_FragCoord.xy/resolution.xy;\n\tvec2 p0 = p;\n\tvec2 p1 = p;\n\n\tp0 -= 0.5;\n\tp1 -= 0.5;\n\tp0 *= 1.0 - progress * zoom;\n\tp1 *= 1.0 - (1.0 - progress) * zoom;\n\tp0 += 0.5;\n\tp1 += 0.5;\n\n\tfloat v = min(progress, 1.0 - progress) * 2.0;\t//0.0-1.0\n\n\tfloat fuzzOffset = snoise(vec2(time*15.0, p.y * 20.0)) * 0.0015;\n\tfloat largeFuzzOffset = snoise(vec2(time*1.0, p.y * 1.0)) * (0.003 + v * 0.01);\n\tfloat f_xoff = (fuzzOffset + largeFuzzOffset) * horzFuzzOpt * progress;\n    float b_xoff = (fuzzOffset + largeFuzzOffset) * horzFuzzOpt * (1.0 - progress);\n    \n    // float rgbOffset = rgbOffsetOpt * fuzzOffset * 300.0;\n    // float rgbOffset = rgbOffsetOpt;\n    float rgbOffset = snoise(vec2(time*15.0, 1.0)) * rgbOffsetOpt;\n\n\tvec3 f_col = vec3(\n\t\ttexture2D(texture0,\tvec2(p0.x + f_xoff -0.01 * rgbOffset * progress, p0.y)).r,\n\t\ttexture2D(texture0, vec2(p0.x + f_xoff,\t  p0.y)).g,\n\t\ttexture2D(texture0, vec2(p0.x + f_xoff +0.01 * rgbOffset * progress, p0.y)).b\n\t);\n\n\tvec3 b_col = vec3(\n\t\ttexture2D(texture1, vec2(p1.x + b_xoff -0.01 * rgbOffset * (1.0 - progress), p1.y)).r,\n\t\ttexture2D(texture1, vec2(p1.x + b_xoff,\t  p1.y)).g,\n\t\ttexture2D(texture1, vec2(p1.x + b_xoff +0.01 * rgbOffset * (1.0 - progress), p1.y)).b\n\t);\n\n\tvec3 ff_col = f_col;\n\tff_col = tint(ff_col);\n\tff_col = mix(f_col, ff_col, t_amount * progress);\n\n\tvec3 bb_col = b_col;\n\tbb_col = tint(bb_col);\n\tbb_col = mix(b_col, bb_col, t_amount * (1.0 - progress));\n\n\tgl_FragColor = vec4(mix(ff_col, bb_col, progress), 1.0);\n}\n',

	uniforms: (_uniforms = {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress: { value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		// fade: { value: new THREE.Vector2(0.5, 0.5) },
		time: { value: 0 },

		zoom: { value: 0.3 },

		dark_low: { value: 100 },
		dark_high: { value: 200 }
	}, _defineProperty(_uniforms, 'dark_low', { value: 200 }), _defineProperty(_uniforms, 'dark_high', { value: 255 }), _defineProperty(_uniforms, 'contrast', { value: 1 }), _defineProperty(_uniforms, 'brightness', { value: 1 }), _defineProperty(_uniforms, 'saturation', { value: 100 }), _defineProperty(_uniforms, 'light_tint', { value: new THREE.Vector3(0.5, 0.5, 0.5) }), _defineProperty(_uniforms, 'dark_tint', { value: new THREE.Vector3(0.2, 0.2, 0.2) }), _defineProperty(_uniforms, 't_amount', { value: 0.5 }), _defineProperty(_uniforms, 'exposure', { value: 30 }), _defineProperty(_uniforms, 'horzFuzzOpt', { value: 10 }), _defineProperty(_uniforms, 'rgbOffsetOpt', { value: 20 }), _uniforms)

});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PixelateTransition = undefined;

var _BaseTransition = __webpack_require__(0);

var PixelateTransition = exports.PixelateTransition = _BaseTransition.BaseTransition.extend({

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\n\n#define N 10.0\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution;\n\tfloat aspect = resolution.x / resolution.y;\n\tfloat v = min(progress, 1.0 - progress) * 2.0;\t//0.0-1.0\n\tv = floor(v * 30.0) / 30.0;\n\t\n\tvec2 steps = vec2(aspect, 1.0) * N / v;\n\n\tp -= 0.5;\n\n\tsteps = min(steps, resolution.xy);\n\tp = (floor(p * steps) + 0.5) / steps;\n\n\tp += 0.5;\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\tgl_FragColor = mix(c0, c1, progress);\n}\n',

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress: { value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) }
	}
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PixelateWipeTransition = undefined;

var _BaseTransition = __webpack_require__(0);

var PixelateWipeTransition = exports.PixelateWipeTransition = _BaseTransition.BaseTransition.extend({

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\n\nprecision highp float;\n\n#define N 10.0\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution;\n\tfloat aspect = resolution.x / resolution.y;\n\n\tfloat v = mix(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-p.x)*gradient.x+p.y*gradient.y));\n\tv = clamp(v, 0.0, 1.0);\n\tv = floor(v * 16.0) / 16.0;\n\n\tp -= 0.5;\n\n\tfloat pv = min(v, 1.0 - v) * 2.0;\t//0.0-1.0\n\tvec2 steps = vec2(aspect, 1.0) * N / pv;\n\tsteps = min(steps, resolution.xy);\n\tp = (floor(p * steps) + 0.5) / steps;\n\n\tp += 0.5;\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\t// v = step(0.5, v);\n\n\tgl_FragColor = mix(c0, c1, v);\n}\n',

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress: { value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		gradient: { value: new THREE.Vector2(0.5, 0) }
	}
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TestTransition = undefined;

var _BaseTransition = __webpack_require__(0);

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
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		gradient: { value: new THREE.Vector2(0.5, 0.5) },
	}

});
*/

var TestTransition = exports.TestTransition = _BaseTransition.BaseTransition.extend({

	vertexShader: '\nprecision highp float;\n\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main(void) {\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',

	fragmentShader: '\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\tgl_FragColor = mix(c0, c1, progress);\n}\n',

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress: { value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		gradient: { value: new THREE.Vector2(0.5, 0.5) }
	}

});

/***/ })
/******/ ]);
//# sourceMappingURL=xslider.js.map