(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
typeof define === 'function' && define.amd ? define(factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.XSlider = factory());
}(this, (function () { 'use strict';

var XSLIDER_VERSION = "1.1.0"

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$1 = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var descriptors = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

var f$6 = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;
var objectPropertyIsEnumerable = {
  f: f$6
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString$1 = {}.toString;

var classofRaw = function (it) {
  return toString$1.call(it).slice(8, -1);
};

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string

var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var hasOwnProperty = {}.hasOwnProperty;

var has$1 = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var document$3 = global$1.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document$3) && isObject(document$3.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$3.createElement(it) : {};
};

var ie8DomDefine = !descriptors && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

var f$5 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (ie8DomDefine) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has$1(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};
var objectGetOwnPropertyDescriptor = {
  f: f$5
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

var f$4 = descriptors ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
var objectDefineProperty = {
  f: f$4
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global$1, key, value);
  } catch (error) {
    global$1[key] = value;
  }

  return value;
};

var SHARED = '__core-js_shared__';
var store$1 = global$1[SHARED] || setGlobal(SHARED, {});
var sharedStore = store$1;

var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof sharedStore.inspectSource != 'function') {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap$1 = global$1.WeakMap;
var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));

var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.10.1',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });
});

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var keys$1 = shared('keys');

var sharedKey = function (key) {
  return keys$1[key] || (keys$1[key] = uid(key));
};

var hiddenKeys$1 = {};

var WeakMap = global$1.WeakMap;
var set$2, get$1, has;

var enforce = function (it) {
  return has(it) ? get$1(it) : set$2(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get$1(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (nativeWeakMap) {
  var store = sharedStore.state || (sharedStore.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set$2 = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };

  get$1 = function (it) {
    return wmget.call(store, it) || {};
  };

  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$1[STATE] = true;

  set$2 = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get$1 = function (it) {
    return has$1(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return has$1(it, STATE);
  };
}

var internalState = {
  set: set$2,
  get: get$1,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var redefine = createCommonjsModule(function (module) {
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(String).split('String');
  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;

    if (typeof value == 'function') {
      if (typeof key == 'string' && !has$1(value, 'name')) {
        createNonEnumerableProperty(value, 'name', key);
      }

      state = enforceInternalState(value);

      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }

    if (O === global$1) {
      if (simple) O[key] = value;else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }

    if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
  });
});

var path = global$1;

var aFunction$1 = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global$1[namespace]) : path[namespace] && path[namespace][method] || global$1[namespace] && global$1[namespace][method];
};

var ceil = Math.ceil;
var floor$3 = Math.floor; // `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger

var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$3 : ceil)(argument);
};

var min$6 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength = function (argument) {
  return argument > 0 ? min$6(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max$2 = Math.max;
var min$5 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max$2(integer + length, 0) : min$5(integer, length);
};

var createMethod$3 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$3(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$3(false)
};

var indexOf = arrayIncludes.indexOf;

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !has$1(hiddenKeys$1, key) && has$1(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if (has$1(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }

  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys);
};

var objectGetOwnPropertyNames = {
  f: f$3
};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
var f$2 = Object.getOwnPropertySymbols;
var objectGetOwnPropertySymbols = {
  f: f$2
};

var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has$1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/

var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$1;
  } else if (STATIC) {
    target = global$1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$1[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe

var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

// https://tc39.es/ecma262/#sec-toobject

var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

var defineProperty$4 = Object.defineProperty; // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign

var objectAssign = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (descriptors && $assign({
    b: 1
  }, $assign(defineProperty$4({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$4(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  var A = {};
  var B = {}; // eslint-disable-next-line es/no-symbol -- safe

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  var propertyIsEnumerable = objectPropertyIsEnumerable.f;

  while (argumentsLength > index) {
    var S = indexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing

_export({
  target: 'Object',
  stat: true,
  forced: Object.assign !== objectAssign
}, {
  assign: objectAssign
});

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

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

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
createCommonjsModule(function (module) {
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function (record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

var aFunction = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

var functionBindContext = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

var engineIsNode = classofRaw(global$1.process) == 'process';

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process$3 = global$1.process;
var versions = process$3 && process$3.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  // eslint-disable-next-line es/no-symbol -- required for testing
  return !Symbol.sham && ( // Chrome 38 Symbol has incorrect toString conversion
  // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  engineIsNode ? engineV8Version === 38 : engineV8Version > 37 && engineV8Version < 41);
});

/* eslint-disable es/no-symbol -- required for testing */
var useSymbolAsUid = nativeSymbol && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global$1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!has$1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (nativeSymbol && has$1(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  }

  return WellKnownSymbolsStore[name];
};

var SPECIES$5 = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate = function (originalArray, length) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES$5];
      if (C === null) C = undefined;
    }
  }

  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation

var createMethod$2 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return value;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              push.call(target, value);
            // filter
          } else switch (TYPE) {
            case 4:
              return false;
            // every

            case 7:
              push.call(target, value);
            // filterOut
          }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$2(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$2(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$2(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$2(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$2(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$2(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$2(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod$2(7)
};

var arrayMethodIsStrict = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

var $forEach$1 = arrayIteration.forEach;
var STRICT_METHOD$4 = arrayMethodIsStrict('forEach'); // `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach

var arrayForEach = !STRICT_METHOD$4 ? function forEach(callbackfn
/* , thisArg */
) {
  return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe


_export({
  target: 'Array',
  proto: true,
  forced: [].forEach != arrayForEach
}, {
  forEach: arrayForEach
});

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

for (var COLLECTION_NAME$1 in domIterables) {
  var Collection$1 = global$1[COLLECTION_NAME$1];
  var CollectionPrototype$1 = Collection$1 && Collection$1.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

  if (CollectionPrototype$1 && CollectionPrototype$1.forEach !== arrayForEach) try {
    createNonEnumerableProperty(CollectionPrototype$1, 'forEach', arrayForEach);
  } catch (error) {
    CollectionPrototype$1.forEach = arrayForEach;
  }
}

var slice$1 = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']'; // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only


    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  }

  return factories[argsLength](C, args);
}; // `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind


var functionBind = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction(this);
  var partArgs = slice$1.call(arguments, 1);

  var boundFunction = function bound()
  /* args... */
  {
    var args = partArgs.concat(slice$1.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };

  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};

// https://tc39.es/ecma262/#sec-function.prototype.bind

_export({
  target: 'Function',
  proto: true
}, {
  bind: functionBind
});

var $some$1 = arrayIteration.some;
var STRICT_METHOD$3 = arrayMethodIsStrict('some'); // `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some

_export({
  target: 'Array',
  proto: true,
  forced: !STRICT_METHOD$3
}, {
  some: function some(callbackfn
  /* , thisArg */
  ) {
    return $some$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var createProperty = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var SPECIES$4 = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return engineV8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$4] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('splice');
var max$1 = Math.max;
var min$4 = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species

_export({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$2
}, {
  splice: function splice(start, deleteCount
  /* , ...items */
  ) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;

    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min$4(max$1(toInteger(deleteCount), 0), len - actualStart);
    }

    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }

    A = arraySpeciesCreate(O, actualDeleteCount);

    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }

    A.length = actualDeleteCount;

    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];else delete O[to];
      }

      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];else delete O[to];
      }
    }

    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }

    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});

var EventDispatcher = /*#__PURE__*/function () {
  function EventDispatcher() {
    _classCallCheck(this, EventDispatcher);

    this._listeners = {};
    this._properties = {};

    this._bindMethods(['_onBubble']);
  }

  _createClass(EventDispatcher, [{
    key: "_bindMethods",
    value: function _bindMethods(methods) {
      var _this = this;

      methods.forEach(function (fn) {
        return _this[fn] = _this[fn].bind(_this);
      });
    }
  }, {
    key: "listeners",
    get: function get() {
      return this._listeners;
    }
  }, {
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
      var _this2 = this;

      if (type) {
        if (!listener) {
          delete this._listeners[type];
        } else if (this._listeners.hasOwnProperty(type)) {
          this._listeners[type].some(function (elem, i) {
            if (elem.listener == listener) _this2._listeners[type].splice(i, 1);
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
    key: "_onBubble",
    value: function _onBubble(e) {
      this.dispatch(e.type, e);
    }
  }]);

  return EventDispatcher;
}();

var Environment = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(Environment, _EventDispatcher);

  var _super = _createSuper(Environment);

  function Environment() {
    var _this;

    _classCallCheck(this, Environment);

    _this = _super.call(this);
    console.info('xslider ver.', XSLIDER_VERSION); // if(!THREE) {
    // 	console.error("xslider depend on three.js");
    // }
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
}(EventDispatcher);

Environment.support = {
  touch: 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch,
  pointer: window.navigator.pointerEnabled,
  MSPointer: window.navigator.msPointerEnabled
};
var env = new Environment();

var types = [];

if (env.support.touch) {
  types.push('touchstart', 'touchmove', 'touchend');
} else if (env.support.pointer) {
  types.push('pointerdown', 'pointermove', 'pointerup');
} else if (env.support.MSPointer) {
  types.push('MSPointerDown', 'MSPointerMove', 'MSPointerUp');
} else {
  types.push('mousedown', 'mousemove', 'mouseup');
}

var TouchEvent = {
  START: types[0],
  MOVE: types[1],
  END: types[2]
};

var nativePromiseConstructor = global$1.Promise;

var redefineAll = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);

  return target;
};

var defineProperty$3 = objectDefineProperty.f;
var TO_STRING_TAG$4 = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC) {
  if (it && !has$1(it = STATIC ? it : it.prototype, TO_STRING_TAG$4)) {
    defineProperty$3(it, TO_STRING_TAG$4, {
      configurable: true,
      value: TAG
    });
  }
};

var SPECIES$3 = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES$3]) {
    defineProperty(Constructor, SPECIES$3, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};

var anInstance = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  }

  return it;
};

var iterators = {};

var ITERATOR$6 = wellKnownSymbol('iterator');
var ArrayPrototype$1 = Array.prototype; // check on default Array iterator

var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$6] === it);
};

var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG$3] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag'); // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof = toStringTagSupport ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

var ITERATOR$5 = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$5] || it['@@iterator'] || iterators[classof(it)];
};

var iteratorClose = function (iterator) {
  var returnMethod = iterator['return'];

  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }

    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      }

      return new Result(false);
    }

    iterator = iterFn.call(iterable);
  }

  next = iterator.next;

  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }

    if (typeof result == 'object' && result && result instanceof Result) return result;
  }

  return new Result(false);
};

var ITERATOR$4 = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return {
        done: !!called++
      };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };

  iteratorWithReturn[ITERATOR$4] = function () {
    return this;
  }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


  Array.from(iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {
  /* empty */
}

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;

  try {
    var object = {};

    object[ITERATOR$4] = function () {
      return {
        next: function () {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };

    exec(object);
  } catch (error) {
    /* empty */
  }

  return ITERATION_SUPPORT;
};

var SPECIES$2 = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$2]) == undefined ? defaultConstructor : aFunction(S);
};

var html = getBuiltIn('document', 'documentElement');

var engineIsIos = /(?:iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent);

var location = global$1.location;
var set$1 = global$1.setImmediate;
var clear = global$1.clearImmediate;
var process$2 = global$1.process;
var MessageChannel = global$1.MessageChannel;
var Dispatch = global$1.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global$1.postMessage(id + '', location.protocol + '//' + location.host);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!set$1 || !clear) {
  set$1 = function setImmediate(fn) {
    var args = [];
    var i = 1;

    while (arguments.length > i) args.push(arguments[i++]);

    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };

    defer(counter);
    return counter;
  };

  clear = function clearImmediate(id) {
    delete queue[id];
  }; // Node.js 0.8-


  if (engineIsNode) {
    defer = function (id) {
      process$2.nextTick(runner(id));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    }; // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624

  } else if (MessageChannel && !engineIsIos) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = functionBindContext(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global$1.addEventListener && typeof postMessage == 'function' && !global$1.importScripts && location && location.protocol !== 'file:' && !fails(post)) {
    defer = post;
    global$1.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
    defer = function (id) {
      html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    }; // Rest old browsers

  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set$1,
  clear: clear
};

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent);

var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var MutationObserver = global$1.MutationObserver || global$1.WebKitMutationObserver;
var document$2 = global$1.document;
var process$1 = global$1.process;
var Promise$1 = global$1.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$1, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var flush, head, last, notify$1, toggle, node, promise, then; // modern engines have queueMicrotask method

if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (engineIsNode && (parent = process$1.domain)) parent.exit();

    while (head) {
      fn = head.fn;
      head = head.next;

      try {
        fn();
      } catch (error) {
        if (head) notify$1();else last = undefined;
        throw error;
      }
    }

    last = undefined;
    if (parent) parent.enter();
  }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898


  if (!engineIsIos && !engineIsNode && !engineIsWebosWebkit && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, {
      characterData: true
    });

    notify$1 = function () {
      node.data = toggle = !toggle;
    }; // environments with maybe non-completely correct, but existent Promise

  } else if (Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    then = promise.then;

    notify$1 = function () {
      then.call(promise, flush);
    }; // Node.js without promises

  } else if (engineIsNode) {
    notify$1 = function () {
      process$1.nextTick(flush);
    }; // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout

  } else {
    notify$1 = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$1, flush);
    };
  }
}

var microtask = queueMicrotask || function (fn) {
  var task = {
    fn: fn,
    next: undefined
  };
  if (last) last.next = task;

  if (!head) {
    head = task;
    notify$1();
  }

  last = task;
};

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}; // 25.4.1.5 NewPromiseCapability(C)


var f$1 = function (C) {
  return new PromiseCapability(C);
};

var newPromiseCapability$1 = {
  f: f$1
};

var promiseResolve = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability$1.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var hostReportErrors = function (a, b) {
  var console = global$1.console;

  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};

var perform = function (exec) {
  try {
    return {
      error: false,
      value: exec()
    };
  } catch (error) {
    return {
      error: true,
      value: error
    };
  }
};

var task = task$1.set;
var SPECIES$1 = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState$3 = internalState.get;
var setInternalState$3 = internalState.set;
var getInternalPromiseState = internalState.getterFor(PROMISE);
var PromiseConstructor = nativePromiseConstructor;
var TypeError$1 = global$1.TypeError;
var document$1 = global$1.document;
var process = global$1.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapability$1.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$1.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
var FORCED$4 = isForced_1(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);

  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (engineV8Version === 66) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

    if (!engineIsNode && !NATIVE_REJECTION_EVENT) return true;
  } // We need Promise#finally in the pure version for preventing prototype pollution
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679

  if (engineV8Version >= 51 && /native code/.test(PromiseConstructor)) return false; // Detect correctness of subclassing with @@species support

  var promise = PromiseConstructor.resolve(1);

  var FakePromise = function (exec) {
    exec(function () {
      /* empty */
    }, function () {
      /* empty */
    });
  };

  var constructor = promise.constructor = {};
  constructor[SPECIES$1] = FakePromise;
  return !(promise.then(function () {
    /* empty */
  }) instanceof FakePromise);
});
var INCORRECT_ITERATION = FORCED$4 || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () {
    /* empty */
  });
}); // helpers

var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0; // variable length - can't use forEach

    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;

      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }

          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // can throw

            if (domain) {
              domain.exit();
              exited = true;
            }
          }

          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }

    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;

  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$1.dispatchEvent(event);
  } else event = {
    promise: promise,
    reason: reason
  };

  if (!NATIVE_REJECTION_EVENT && (handler = global$1['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global$1, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;

    if (IS_UNHANDLED) {
      result = perform(function () {
        if (engineIsNode) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

      state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global$1, function () {
    var promise = state.facade;

    if (engineIsNode) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;

  try {
    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);

    if (then) {
      microtask(function () {
        var wrapper = {
          done: false
        };

        try {
          then.call(value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({
      done: false
    }, error, state);
  }
}; // constructor polyfill


if (FORCED$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState$3(this);

    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  }; // eslint-disable-next-line no-unused-vars -- required for `.length`


  Internal = function Promise(executor) {
    setInternalState$3(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = engineIsNode ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState$3(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapability$1.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };

  if (typeof nativePromiseConstructor == 'function') {
    nativeThen = nativePromiseConstructor.prototype.then; // wrap native Promise#then for native async functions

    redefine(nativePromiseConstructor.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
    }, {
      unsafe: true
    }); // wrap fetch result

    if (typeof $fetch == 'function') _export({
      global: true,
      enumerable: true,
      forced: true
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      fetch: function fetch(input
      /* , init */
      ) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global$1, arguments));
      }
    });
  }
}

_export({
  global: true,
  wrap: true,
  forced: FORCED$4
}, {
  Promise: PromiseConstructor
});
setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);
PromiseWrapper = getBuiltIn(PROMISE); // statics

_export({
  target: PROMISE,
  stat: true,
  forced: FORCED$4
}, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});
_export({
  target: PROMISE,
  stat: true,
  forced: FORCED$4
}, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});
_export({
  target: PROMISE,
  stat: true,
  forced: INCORRECT_ITERATION
}, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

// https://tc39.es/ecma262/#sec-object.prototype.tostring


var objectToString = toStringTagSupport ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

// https://tc39.es/ecma262/#sec-object.prototype.tostring

if (!toStringTagSupport) {
  redefine(Object.prototype, 'toString', objectToString, {
    unsafe: true
  });
}

var InteractiveObject = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(InteractiveObject, _EventDispatcher);

  var _super = _createSuper(InteractiveObject);

  function InteractiveObject() {
    var _this;

    _classCallCheck(this, InteractiveObject);

    _this = _super.call(this);

    _this._bindMethods(['_onChangeTarget', '_onTouch', '_onTouchStart']);

    _this.on('target', _this._onChangeTarget);

    return _this;
  }

  _createClass(InteractiveObject, [{
    key: "dispose",
    value: function dispose() {
      this.off();
    }
  }, {
    key: "on",
    value: function on(type, listener, options) {
      _get(_getPrototypeOf(InteractiveObject.prototype), "on", this).call(this, type, listener, options);

      var target = this.get('target');

      this._autoAddListener(target, type);

      return this;
    }
  }, {
    key: "off",
    value: function off(type, listener) {
      _get(_getPrototypeOf(InteractiveObject.prototype), "off", this).call(this, type, listener);

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
          case TouchEvent.START:
          case TouchEvent.MOVE:
          case TouchEvent.END:
            target.addEventListener(type, this._onTouch);
            break;

          case 'click':
            target.addEventListener(type, this._onBubble);
            break;
        }

        if (type == TouchEvent.MOVE) {
          target.addEventListener(TouchEvent.START, this._onTouchStart);
        }
      }
    }
  }, {
    key: "_autoRemoveListener",
    value: function _autoRemoveListener(target, type) {
      if (!target) return;

      if (!this._listeners[type] || this._listeners[type].length == 0) {
        switch (type) {
          case TouchEvent.START:
          case TouchEvent.MOVE:
          case TouchEvent.END:
            target.removeEventListener(type, this._onTouch);
            break;

          case 'click':
            target.removeEventListener(type, this._onBubble);
            break;
        }

        if (type == TouchEvent.MOVE) {
          target.removeEventListener(TouchEvent.START, this._onTouchStart);
        }
      }
    }
  }, {
    key: "_onChangeTarget",
    value: function _onChangeTarget(o) {
      if (o.value0) {
        for (var type in this._listeners) {
          this._autoRemoveListener(o.value0, type);
        }
      }

      this.off();
    }
  }, {
    key: "_onTouch",
    value: function _onTouch(e) {
      if (env.support.touch) {
        var touch = e.touches[0];

        if (touch) {
          e.clientX = touch.clientX;
          e.clientY = touch.clientY;
        } else {
          e.clientX = this.clientX0;
          e.clientY = this.clientY0;
        }
      }

      if (!this.clientX0) {
        this.clientX0 = e.clientX;
        this.clientY0 = e.clientY;
      }

      e.clientX0 = this.clientX0;
      e.clientY0 = this.clientY0;
      this.clientX0 = e.clientX;
      this.clientY0 = e.clientY;
      this.dispatch(e.type, e);
    }
  }, {
    key: "_onTouchStart",
    value: function _onTouchStart(e) {
      this.clientX0 = this.clientY0 = undefined;
    }
  }]);

  return InteractiveObject;
}(EventDispatcher);

// https://tc39.es/ecma262/#sec-date.now

_export({
  target: 'Date',
  stat: true
}, {
  now: function now() {
    return new Date().getTime();
  }
});

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime; // `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring

if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this); // eslint-disable-next-line no-self-compare -- NaN check

    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}

var Ticker = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(Ticker, _EventDispatcher);

  var _super = _createSuper(Ticker);

  function Ticker() {
    var _this;

    _classCallCheck(this, Ticker);

    _this = _super.call(this);
    _this.fps = 30;

    _this._defineFunctions();

    return _this;
  }

  _createClass(Ticker, [{
    key: "_defineFunctions",
    value: function _defineFunctions() {
      var _this2 = this;

      var prefixes = ['ms', 'moz', 'webkit', 'o'];
      var i = prefixes.length;

      while (--i > -1 && !window.requestAnimationFrame) {
        window.requestAnimationFrame = window[prefixes[i] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[prefixes[i] + 'CancelAnimationFrame'] || window[prefixes[i] + 'CancelRequestAnimationFrame'];
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
  }]);

  return Ticker;
}(EventDispatcher);

var Stage = /*#__PURE__*/function (_InteractiveObject) {
  _inherits(Stage, _InteractiveObject);

  var _super = _createSuper(Stage);

  function Stage() {
    var _this;

    _classCallCheck(this, Stage);

    _this = _super.call(this);
    _this.ticker = new Ticker();

    _this.set({
      target: window
    });

    return _this;
  }

  _createClass(Stage, [{
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
    key: "width",
    get: function get() {
      return window.innerWidth || document.documentElement.clientWidth || 0;
    }
  }, {
    key: "height",
    get: function get() {
      return window.innerHeight || document.documentElement.clientHeight || 0;
    }
  }, {
    key: "_autoAddListener",
    value: function _autoAddListener(target, type) {
      if (!target) return;

      _get(_getPrototypeOf(Stage.prototype), "_autoAddListener", this).call(this, target, type);

      if (this._listeners[type].length == 1) {
        switch (type) {
          case 'tick':
            this.ticker.on(type, this._onBubble);
            this.ticker.start();
            break;

          case 'resize':
            target.addEventListener(type, this._onBubble);
            break;
        }
      }
    }
  }, {
    key: "_autoRemoveListener",
    value: function _autoRemoveListener(target, type) {
      if (!target) return;

      _get(_getPrototypeOf(Stage.prototype), "_autoRemoveListener", this).call(this, target, type);

      if (!this._listeners[type] || this._listeners[type].length == 0) {
        switch (type) {
          case 'tick':
            this.ticker.off(type, this._onBubble);
            this.ticker.stop();
            break;

          case 'resize':
            target.removeEventListener(type, this._onBubble);
            break;
        }
      }
    }
  }]);

  return Stage;
}(InteractiveObject); //singleton


var stage = new Stage();

var AutoPlay = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(AutoPlay, _EventDispatcher);

  var _super = _createSuper(AutoPlay);

  function AutoPlay() {
    var _this;

    _classCallCheck(this, AutoPlay);

    _this = _super.call(this);

    _this._bindMethods(['_onTick']);

    return _this;
  }

  _createClass(AutoPlay, [{
    key: "enabled",
    get: function get() {
      return this.option != undefined;
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
        stage.on('tick', this._onTick);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.enabled) {
        stage.off('tick', this._onTick);
      }
    }
  }, {
    key: "_onTick",
    value: function _onTick(e) {
      if (e.time > this.option.delay) {
        this.dispatch(AutoPlay.EVENT.TICK);
      }
    }
  }]);

  return AutoPlay;
}(EventDispatcher);
AutoPlay.EVENT = {
  TICK: 'autoplay_tick'
};

var Indexer = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(Indexer, _EventDispatcher);

  var _super = _createSuper(Indexer);

  function Indexer() {
    _classCallCheck(this, Indexer);

    return _super.apply(this, arguments);
  }

  _createClass(Indexer, [{
    key: "setup",
    value: function setup(dom, option) {
      this.dom = dom;
      this.option = option;
      this._target = option.initialSlideIndex;
      this._v = this._target - 1;
      this._length = this.dom.pages.length;
      this._state = Indexer.STATE.DEFAULT;
      this.progress = 0;
      this.head = false;
      this.tail = false;
      !this.option.loop && (this._target = this.constrain(this._target));
      this.tick();
    }
  }, {
    key: "prev",
    value: function prev() {
      this._target--;
      !this.option.loop && (this._target = this.constrain(this._target));
    }
  }, {
    key: "next",
    value: function next() {
      this._target++;
      !this.option.loop && (this._target = this.constrain(this._target));
    }
  }, {
    key: "to",
    value: function to(index) {
      if (this.option.loop) {
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
      !this.option.loop && (this._v = this.constrain(this._v));
      this._target = this._v;
    }
  }, {
    key: "up",
    value: function up() {
      this._state = Indexer.STATE.UP;
      !this.option.get('throwable', 'touchMove') && (this._move = 0);
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
  }, {
    key: "constrain",
    value: function constrain(v) {
      var ret = v < 0 ? 0 : this._length - 1 < v ? this._length - 1 : v;
      this.head = ret === 0;
      this.tail = ret === this._length - 1; // console.log(ret == 0, ret == this._length - 1);

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
          !this.option.loop && (this._target = this.constrain(this._target));
          this._move *= 0.95;
          this._v = this._target;

          if (Math.abs(this._move) < 0.01) {
            this._target = Math.round(this._v);
            this._state = Indexer.STATE.DEFAULT;
          }

          break;

        default:
          !this.option.loop && (this._target = this.constrain(this._target));
          this._v += (this._target - this._v) * this.option.easing;

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
  }]);

  return Indexer;
}(EventDispatcher);
Indexer.STATE = {
  DEFAULT: 'DEFAULT',
  DOWN: 'DOWN',
  UP: 'UP'
};

var SlideInteractor = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(SlideInteractor, _EventDispatcher);

  var _super = _createSuper(SlideInteractor);

  function SlideInteractor(state, services) {
    var _this;

    _classCallCheck(this, SlideInteractor);

    _this = _super.call(this);
    _this.state = state;
    _this.services = services;

    _this._bindMethods(['index', 'next', 'prev', 'complete']);

    return _this;
  }

  _createClass(SlideInteractor, [{
    key: "index",
    value: function index(e) {
      var _this$services = this.services,
          indexer = _this$services.indexer,
          ticker = _this$services.ticker;
      indexer.to(e.value);
      ticker.start();
    }
  }, {
    key: "next",
    value: function next(e) {
      e.preventDefault && e.preventDefault();
      var _this$services2 = this.services,
          indexer = _this$services2.indexer,
          ticker = _this$services2.ticker,
          autoplay = _this$services2.autoplay,
          listeners = _this$services2.listeners;
      listeners.touchStart.remove();
      indexer.next();
      ticker.start();
      autoplay.stop();
    }
  }, {
    key: "prev",
    value: function prev(e) {
      e.preventDefault && e.preventDefault();
      var _this$services3 = this.services,
          indexer = _this$services3.indexer,
          ticker = _this$services3.ticker,
          autoplay = _this$services3.autoplay,
          listeners = _this$services3.listeners;
      listeners.touchStart.remove();
      indexer.prev();
      ticker.start();
      autoplay.stop();
    }
  }, {
    key: "complete",
    value: function complete() {
      var _this$services4 = this.services,
          ticker = _this$services4.ticker,
          autoplay = _this$services4.autoplay,
          listeners = _this$services4.listeners;
      listeners.touchStart.add();
      autoplay.start();
      ticker.stop();
    }
  }]);

  return SlideInteractor;
}(EventDispatcher);

var $map$1 = arrayIteration.map;
var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species

_export({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$1
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var nativeJoin = [].join;
var ES3_STRINGS = indexedObject != Object;
var STRICT_METHOD$2 = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join

_export({
  target: 'Array',
  proto: true,
  forced: ES3_STRINGS || !STRICT_METHOD$2
}, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};

var correctPrototypeGetter = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var IE_PROTO$1 = sharedKey('IE_PROTO');
var ObjectPrototype$2 = Object.prototype; // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe

var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has$1(O, IE_PROTO$1)) return O[IE_PROTO$1];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectPrototype$2 : null;
};

var ITERATOR$3 = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

var returnThis$2 = function () {
  return this;
}; // `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object


var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
  var test = {}; // FF44- legacy iterators case

  return IteratorPrototype$2[ITERATOR$3].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

if (!has$1(IteratorPrototype$2, ITERATOR$3)) {
  createNonEnumerableProperty(IteratorPrototype$2, ITERATOR$3, returnThis$2);
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe

var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);

  return O;
};

var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys$1[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : objectDefineProperties(result, Properties);
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

var returnThis$1 = function () {
  return this;
};

var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
  iterators[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var aPossiblePrototype = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  }

  return it;
};

/* eslint-disable no-proto -- safe */
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe

var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var IteratorPrototype = iteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$2 = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () {
  return this;
};

var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$2] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (objectSetPrototypeOf) {
          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR$2] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$2, returnThis);
        }
      } // Set @@toStringTag to native iterators


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;

    defaultIterator = function values() {
      return nativeIterator.call(this);
    };
  } // define iterator


  if (IterablePrototype[ITERATOR$2] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR$2, defaultIterator);
  }

  iterators[NAME] = defaultIterator; // export additional methods

  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else _export({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  }

  return methods;
};

var charAt$1 = stringMultibyte.charAt;
var STRING_ITERATOR = 'String Iterator';
var setInternalState$2 = internalState.set;
var getInternalState$2 = internalState.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator

defineIterator(String, 'String', function (iterated) {
  setInternalState$2(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  }); // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$2(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return {
    value: undefined,
    done: true
  };
  point = charAt$1(string, index);
  state.index += point.length;
  return {
    value: point,
    done: false
  };
});

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
} // add a key to Array.prototype[@@unscopables]


var addToUnscopables = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$1 = internalState.set;
var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator

var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$1(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject

iterators.Arguments = iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var ITERATOR$1 = wellKnownSymbol('iterator');
var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
var ArrayValues = es_array_iterator.values;

for (var COLLECTION_NAME in domIterables) {
  var Collection = global$1[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;

  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$1] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR$1, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$1] = ArrayValues;
    }

    if (!CollectionPrototype[TO_STRING_TAG$1]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$1, COLLECTION_NAME);
    }

    if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
      }
    }
  }
}

// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


var regexpFlags = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

// so we use an intermediate function.


function RE(s, f) {
  return RegExp(s, f);
}

var UNSUPPORTED_Y$2 = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});
var BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});
var regexpStickyHelpers = {
  UNSUPPORTED_Y: UNSUPPORTED_Y$2,
  BROKEN_CARET: BROKEN_CARET
};

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');

      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

var regexpExec = patchedExec;

// https://tc39.es/ecma262/#sec-regexp.prototype.exec


_export({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== regexpExec
}, {
  exec: regexpExec
});

var SPECIES = wellKnownSymbol('species');
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
}); // IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0

var REPLACE_KEEPS_$0 = function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
}();

var REPLACE = wellKnownSymbol('replace'); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string

var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }

  return false;
}(); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper


var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === RegExp.prototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];
    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return regexMethod.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return regexMethod.call(string, this);
    });
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};

var charAt = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex

var advanceStringIndex = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

var floor$2 = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // https://tc39.es/ecma262/#sec-getsubstitution

var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }

  return replace.call(replacement, symbols, function (match, ch) {
    var capture;

    switch (ch.charAt(0)) {
      case '$':
        return '$';

      case '&':
        return matched;

      case '`':
        return str.slice(0, position);

      case "'":
        return str.slice(tailPos);

      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;

      default:
        // \d\d?
        var n = +ch;
        if (n === 0) return match;

        if (n > m) {
          var f = floor$2(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }

        capture = captures[n - 1];
    }

    return capture === undefined ? '' : capture;
  });
};

// https://tc39.es/ecma262/#sec-regexpexec

var regexpExecAbstract = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classofRaw(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

var max = Math.max;
var min$3 = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
}; // @@replace logic


fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
  return [// `String.prototype.replace` method
  // https://tc39.es/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
    return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
  function (regexp, replaceValue) {
    if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;
    }

    var rx = anObject(regexp);
    var S = String(this);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regexpExecAbstract(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max(min$3(toInteger(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + S.slice(nextSourcePosition);
  }];
});

var $filter$1 = arrayIteration.filter;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species

_export({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
var sameValue = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

fixRegexpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [// `String.prototype.search` method
  // https://tc39.es/ecma262/#sec-string.prototype.search
  function search(regexp) {
    var O = requireObjectCoercible(this);
    var searcher = regexp == undefined ? undefined : regexp[SEARCH];
    return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, // `RegExp.prototype[@@search]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
  function (regexp) {
    var res = maybeCallNative(nativeSearch, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var previousLastIndex = rx.lastIndex;
    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
    var result = regexpExecAbstract(rx, S);
    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
    return result === null ? -1 : result.index;
  }];
});

/* eslint-disable es/no-object-getownpropertynames -- safe */
var $getOwnPropertyNames = objectGetOwnPropertyNames.f;
var toString = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


var f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
};

var objectGetOwnPropertyNamesExternal = {
  f: f
};

var getOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f; // eslint-disable-next-line es/no-object-getownpropertynames -- required for testing

var FAILS_ON_PRIMITIVES$1 = fails(function () {
  return !Object.getOwnPropertyNames(1);
}); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames

_export({
  target: 'Object',
  stat: true,
  forced: FAILS_ON_PRIMITIVES$1
}, {
  getOwnPropertyNames: getOwnPropertyNames$1
});

var Cloner = /*#__PURE__*/function () {
  function Cloner() {
    _classCallCheck(this, Cloner);
  }

  _createClass(Cloner, [{
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

var slice = [].slice;
var MSIE = /MSIE .\./.test(engineUserAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout
  /* , ...arguments */
  ) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
}; // ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers


_export({
  global: true,
  bind: true,
  forced: MSIE
}, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global$1.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global$1.setInterval)
});

var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
};

var UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y;
var arrayPush = [].push;
var min$2 = Math.min;
var MAX_UINT32 = 0xFFFFFFFF; // @@split logic

fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegexp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output.length > lim ? output.slice(0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (regexp, limit) {
    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
      var z = regexpExecAbstract(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
      var e;

      if (z === null || (e = min$2(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    A.push(S.slice(p));
    return A;
  }];
}, UNSUPPORTED_Y);

var Net = /*#__PURE__*/function () {
  function Net() {
    _classCallCheck(this, Net);

    /*
     * Only WOFF and EOT mime types for fonts are 'real'
     * see http://www.iana.org/assignments/media-types/media-types.xhtml
     */
    var WOFF = 'application/font-woff';
    var JPEG = 'image/jpeg';
    this.mimes = {
      woff: WOFF,
      woff2: WOFF,
      ttf: 'application/font-truetype',
      eot: 'application/vnd.ms-fontobject',
      png: 'image/png',
      jpg: JPEG,
      jpeg: JPEG,
      gif: 'image/gif',
      tiff: 'image/tiff',
      svg: 'image/svg+xml'
    };
  }

  _createClass(Net, [{
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
          _this.inlinedFontString = inlinedFontStrings.join(' '); // this.inlinedFontString = inlinedFontStrings.join("\n");
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
    return cloner.cloneNode(node).then(this.inlineImage.bind(this));
  },
  _inline: function _inline(string) {
    // console.log('string', string)
    var urls = this.searchUrls(string);
    var arr = [];
    urls.map(function (url) {
      var p = net.getDataURI(url).then(function (dataURI) {
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
      net.getDataURI(node.src).then(function (dataURI) {
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

var StageInteractor = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(StageInteractor, _EventDispatcher);

  var _super = _createSuper(StageInteractor);

  function StageInteractor(state, services) {
    var _this;

    _classCallCheck(this, StageInteractor);

    _this = _super.call(this);
    _this.state = state;
    _this.services = services;

    _this._bindMethods(['tick']);

    return _this;
  }

  _createClass(StageInteractor, [{
    key: "ready",
    value: function () {
      var _ready = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$services, ticker, listeners;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$services = this.services, ticker = _this$services.ticker, _this$services.autoplay, listeners = _this$services.listeners;
                _context.prev = 1;
                _context.next = 4;
                return Inliner.resolveFonts();

              case 4:
                // autoplay.start();
                ticker.start();
                listeners.touchStart.add();
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.warn('first ready rejected : ', _context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      function ready() {
        return _ready.apply(this, arguments);
      }

      return ready;
    }()
  }, {
    key: "dispose",
    value: function dispose() {
      var _this$services2 = this.services,
          ticker = _this$services2.ticker,
          autoplay = _this$services2.autoplay,
          listeners = _this$services2.listeners;
      ticker.stop();
      autoplay.stop();
      listeners.touchStart.remove();
    }
  }, {
    key: "tick",
    value: function tick(e) {
      var indexer = this.services.indexer;
      indexer.tick();
      var i0 = indexer.i0,
          i1 = indexer.i1,
          progress = indexer.progress,
          current = indexer.current,
          head = indexer.head,
          tail = indexer.tail;
      this.state.set({
        i0: i0,
        i1: i1,
        progress: progress,
        index: current,
        time: e.time,
        head: head,
        tail: tail
      });
    }
  }, {
    key: "resize",
    value: function resize() {}
  }]);

  return StageInteractor;
}(EventDispatcher);

var TouchInteractor = /*#__PURE__*/function () {
  function TouchInteractor(state, services) {
    _classCallCheck(this, TouchInteractor);

    this.state = state;
    this.services = services;
  }

  _createClass(TouchInteractor, [{
    key: "start",
    value: function start() {
      var _this$services = this.services,
          indexer = _this$services.indexer,
          ticker = _this$services.ticker,
          autoplay = _this$services.autoplay;
      indexer.down();
      ticker.start();
      autoplay.stop();
    }
  }, {
    key: "move",
    value: function move(dx) {
      var indexer = this.services.indexer;
      indexer.move(-dx);
    }
  }, {
    key: "end",
    value: function end() {
      var indexer = this.services.indexer;
      indexer.up();
    }
  }]);

  return TouchInteractor;
}();

var IndexPresenter = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(IndexPresenter, _EventDispatcher);

  var _super = _createSuper(IndexPresenter);

  function IndexPresenter(state, view) {
    var _this;

    _classCallCheck(this, IndexPresenter);

    _this = _super.call(this);
    _this.state = state;
    _this.view = view;

    _this._bindMethods(['index', 'head', 'tail']);

    return _this;
  }

  _createClass(IndexPresenter, [{
    key: "index",
    value: function () {
      var _index = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$view, pager, index;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$view = this.view, pager = _this$view.pager, _this$view.slide, index = this.state.get('index');
                pager.index = index;

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function index() {
        return _index.apply(this, arguments);
      }

      return index;
    }()
  }, {
    key: "head",
    value: function head() {
      var prev = this.view.prev;
      prev && (prev.active = !this.state.get('head'));
    }
  }, {
    key: "tail",
    value: function tail() {
      var next = this.view.next;
      next && (next.active = !this.state.get('tail'));
    }
  }]);

  return IndexPresenter;
}(EventDispatcher);

var Vec2 = /*#__PURE__*/function () {
  function Vec2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vec2);

    this.set(x, y);
  }

  _createClass(Vec2, [{
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
var Vec3 = /*#__PURE__*/function () {
  function Vec3() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Vec3);

    this.set(x, y, z);
  }

  _createClass(Vec3, [{
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
var Vec4 = /*#__PURE__*/function () {
  function Vec4() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Vec4);

    this.set(x, y, z, w);
  }

  _createClass(Vec4, [{
    key: "set",
    value: function set(x, y, z, w) {
      this.data = [x, y, z, w];
    }
  }, {
    key: "width",
    get: function get() {
      return this.data[2];
    },
    set: function set(v) {
      this.data[2] = v;
    }
  }, {
    key: "height",
    get: function get() {
      return this.data[3];
    },
    set: function set(v) {
      this.data[3] = v;
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
  }, {
    key: "equals",
    value: function equals(v) {
      return this.x === v.x && this.y == v.y && this.z == v.z && this.w == v.w;
    }
  }]);

  return Vec4;
}();

var Vec = /*#__PURE__*/Object.freeze({
__proto__: null,
Vec2: Vec2,
Vec3: Vec3,
Vec4: Vec4
});

var BaseTransition = {
  vertexShader: "\nattribute vec2 position;\n\nvoid main(void) {\n\tgl_Position = vec4(position, 0.0, 1.0);\n}\n",
  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 uv = gl_FragCoord.xy /resolution.xy;\n\tvec4 color0 = texture2D(texture0, uv);\n\tvec4 color1 = texture2D(texture1, uv);\n\tfloat v = smoothstep(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-uv.x)*gradient.x+uv.y*gradient.y));\n\tgl_FragColor = mix(color0, color1, v);\n}\n",
  uniforms: {
    gradient: {
      value: new Vec2(1.0, 1.0)
    }
  },
  extend: function extend(o) {
    return Object.assign({}, this, o);
  }
};

var Option = {
  //default value
  selector: '#xslider',
  initialSlideIndex: 0,
  autoplay: false,
  loop: true,
  touchMove: {
    throwable: true
  },
  renderer: undefined,
  debug: false,
  easing: 0.15,
  transition: BaseTransition,
  get: function get(property, module) {
    if (module) {
      return !this[module] ? undefined : this[module][property];
    } else {
      return this[property];
    }
  }
};
Option.Debug = {
  DISPLAY: {
    DOM: 'DEBUG_DISPLAY_DOM',
    SVG: 'DEBUG_DISPLAY_SVG',
    IMG: 'DEBUG_DISPLAY_IMG'
  }
};

var StagePresenter = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(StagePresenter, _EventDispatcher);

  var _super = _createSuper(StagePresenter);

  function StagePresenter(state, view) {
    var _this;

    _classCallCheck(this, StagePresenter);

    _this = _super.call(this);
    _this.state = state;
    _this.view = view;

    _this._bindMethods(['time', 'resize']);

    return _this;
  }

  _createClass(StagePresenter, [{
    key: "setup",
    value: function setup() {
      var _this$view = this.view;
          _this$view.dom;
          _this$view.slide;

      if (this.state.option.debug == Option.Debug.DISPLAY.DOM) {
        this.dom.container.classList.add('xslider-debug');
      }
    }
  }, {
    key: "time",
    value: function () {
      var _time = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$view2, renderer, slide, i0, i1, progress, time;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$view2 = this.view, renderer = _this$view2.renderer, slide = _this$view2.slide, i0 = this.state.get('i0'), i1 = this.state.get('i1'), progress = this.state.get('progress'), time = this.state.get('time');
                _context.next = 3;
                return slide.ready(i0, i1);

              case 3:
                slide.uniforms.progress.value = progress;

                if (slide.uniforms.time) {
                  slide.uniforms.time.value = time;
                }

                renderer["default"].render(i0, i1, progress);
                renderer.gl.render(i0, i1, progress);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function time() {
        return _time.apply(this, arguments);
      }

      return time;
    }()
  }, {
    key: "resize",
    value: function () {
      var _resize = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this$view3, renderer, slide, dom, width, height, i0, i1, progress;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$view3 = this.view, renderer = _this$view3.renderer, slide = _this$view3.slide, dom = _this$view3.dom, width = dom.width, height = dom.height, i0 = this.state.get('i0'), i1 = this.state.get('i1'), progress = this.state.get('progress');
                dom.canvas.setAttribute('width', width);
                dom.canvas.setAttribute('height', height);
                renderer["default"].resize(width, height);
                renderer.gl.resize(width, height);
                _context2.next = 7;
                return slide.resize(width, height);

              case 7:
                renderer["default"].render(i0, i1, progress);
                renderer.gl.render(i0, i1, progress);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function resize() {
        return _resize.apply(this, arguments);
      }

      return resize;
    }()
  }]);

  return StagePresenter;
}(EventDispatcher);

var Controller = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(Controller, _EventDispatcher);

  var _super = _createSuper(Controller);

  function Controller(state, view) {
    var _this;

    _classCallCheck(this, Controller);

    _this = _super.call(this);
    _this.state = state;
    _this.view = view;

    _this._bindMethods(['_onTouch', '_addTouchStartListener', '_removeTouchStartListener']);

    _this.services = {
      indexer: new Indexer(),
      ticker: new Ticker(),
      autoplay: new AutoPlay(),
      listeners: {
        touchStart: {
          add: _this._addTouchStartListener,
          remove: _this._removeTouchStartListener
        }
      }
    };
    _this.usecases = {
      stage: new StageInteractor(_this.state, _this.services),
      slide: new SlideInteractor(_this.state, _this.services),
      touch: new TouchInteractor(_this.state, _this.services)
    };
    _this.presenters = {
      index: new IndexPresenter(_this.state, _this.view),
      stage: new StagePresenter(_this.state, _this.view)
    };
    return _this;
  }

  _createClass(Controller, [{
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$view$pager, _this$view$prev, _this$view$next;

        var _this$services, indexer, ticker, autoplay;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$services = this.services, indexer = _this$services.indexer, ticker = _this$services.ticker, autoplay = _this$services.autoplay;
                this.dom = this.view.dom;
                indexer.setup(this.dom, this.state.option);
                _context.next = 5;
                return this.usecases.stage.ready();

              case 5:
                (_this$view$pager = this.view.pager) === null || _this$view$pager === void 0 ? void 0 : _this$view$pager.on('index', this.usecases.slide.index);
                (_this$view$prev = this.view.prev) === null || _this$view$prev === void 0 ? void 0 : _this$view$prev.on('click', this.usecases.slide.prev);
                (_this$view$next = this.view.next) === null || _this$view$next === void 0 ? void 0 : _this$view$next.on('click', this.usecases.slide.next);
                indexer.on('complete', this.usecases.slide.complete);
                autoplay.on(AutoPlay.EVENT.TICK, this.usecases.slide.next);
                autoplay.setup(this.state.option.autoplay);
                ticker.on('tick', this.usecases.stage.tick);
                this.state.on('index', this.presenters.index.index);
                this.state.on('head', this.presenters.index.head);
                this.state.on('tail', this.presenters.index.tail);
                this.state.on('time', this.presenters.stage.time);
                this.dom.on('resize', this.presenters.stage.resize);
                this.presenters.stage.resize();

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
  }, {
    key: "dispose",
    value: function dispose() {
      var _this$view$pager2, _this$view$prev2, _this$view$next2;

      var _this$services2 = this.services,
          indexer = _this$services2.indexer,
          ticker = _this$services2.ticker,
          autoplay = _this$services2.autoplay;
      this.usecases.stage.dispose();
      (_this$view$pager2 = this.view.pager) === null || _this$view$pager2 === void 0 ? void 0 : _this$view$pager2.off('index', this.usecases.slide.index);
      (_this$view$prev2 = this.view.prev) === null || _this$view$prev2 === void 0 ? void 0 : _this$view$prev2.off('click', this.usecases.slide.prev);
      (_this$view$next2 = this.view.next) === null || _this$view$next2 === void 0 ? void 0 : _this$view$next2.off('click', this.usecases.slide.next);
      stage.off(TouchEvent.MOVE, this._onTouch);
      stage.off(TouchEvent.END, this._onTouch);
      indexer.off('complete', this.usecases.slide.complete);
      autoplay.off(AutoPlay.EVENT.TICK, this.usecases.slide.next);
      ticker.off('tick', this.usecases.stage.tick);
      this.state.off('index', this.presenters.index.index);
      this.state.off('head', this.presenters.index.head);
      this.state.off('tail', this.presenters.index.tail);
      this.state.off('time', this.presenters.stage.time);
      this.dom.off('resize', this.presenters.stage.resize);
    }
  }, {
    key: "_onTouch",
    value: function _onTouch(e) {
      switch (e.type) {
        case TouchEvent.START:
          stage.on(TouchEvent.MOVE, this._onTouch);
          stage.on(TouchEvent.END, this._onTouch);
          this.usecases.touch.start();
          break;

        case TouchEvent.MOVE:
          var dx = (e.clientX - e.clientX0) / this.dom.width;
          this.usecases.touch.move(dx);
          break;

        case TouchEvent.END:
          stage.off(TouchEvent.MOVE, this._onTouch);
          stage.off(TouchEvent.END, this._onTouch);
          this.usecases.touch.end();
          break;
      }
    }
  }, {
    key: "_addTouchStartListener",
    value: function _addTouchStartListener() {
      this.state.option.get('touchMove') && this.view.slide.on(TouchEvent.START, this._onTouch);
    }
  }, {
    key: "_removeTouchStartListener",
    value: function _removeTouchStartListener() {
      this.state.option.get('touchMove') && this.view.slide.off(TouchEvent.START, this._onTouch);
    }
  }]);

  return Controller;
}(EventDispatcher);

var State = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(State, _EventDispatcher);

  var _super = _createSuper(State);

  function State() {
    var _this;

    _classCallCheck(this, State);

    _this = _super.call(this);

    _this.set({
      i0: 0,
      i1: 1,
      progress: 0,
      width: 0,
      height: 0,
      head: false,
      tail: false,
      time: 0
    });

    return _this;
  }

  _createClass(State, [{
    key: "setup",
    value: function setup(options) {
      this.option = Object.assign({}, Option, options);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.option = undefined;
    }
  }]);

  return State;
}(EventDispatcher);

var Button = /*#__PURE__*/function (_InteractiveObject) {
  _inherits(Button, _InteractiveObject);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.call(this);
  }

  _createClass(Button, [{
    key: "setup",
    value: function setup(dom) {
      this.set({
        target: dom
      });
    }
  }, {
    key: "active",
    set: function set(flag) {
      var target = this.get('target');

      if (flag) {
        target.classList.remove('xslider-disabled');
      } else {
        target.classList.add('xslider-disabled');
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.active = true;
    }
  }]);

  return Button;
}(InteractiveObject);

/* eslint-disable es/no-array-prototype-indexof -- required for testing */


var $indexOf$1 = arrayIncludes.indexOf;
var nativeIndexOf = [].indexOf;
var NEGATIVE_ZERO$1 = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD$1 = arrayMethodIsStrict('indexOf'); // `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof

_export({
  target: 'Array',
  proto: true,
  forced: NEGATIVE_ZERO$1 || !STRICT_METHOD$1
}, {
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    return NEGATIVE_ZERO$1 // convert -0 to +0
    ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf$1(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var Pager = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(Pager, _EventDispatcher);

  var _super = _createSuper(Pager);

  function Pager() {
    var _this;

    _classCallCheck(this, Pager);

    _this = _super.call(this);

    _this._bindMethods(['_onClick', '_onChangeIndex']);

    return _this;
  }

  _createClass(Pager, [{
    key: "setup",
    value: function setup(dom) {
      this.element = dom.pager;
      this.list = [];
      var length = dom.pages.length;

      for (var i = 0; i < length; i++) {
        var span = document.createElement('span');
        this.element.appendChild(span);
        span.addEventListener('click', this._onClick);
        this.list.push(span);
      }

      this.on('index', this._onChangeIndex);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _this2 = this;

      this.off('index', this._onChangeIndex);
      this.set({
        index: undefined
      });
      this.list.forEach(function (span) {
        span.removeEventListener('click', _this2._onClick);

        _this2.element.removeChild(span);
      });
    }
  }, {
    key: "_onClick",
    value: function _onClick(e) {
      var index = this.list.indexOf(e.target);
      this.set({
        index: index
      });
    }
  }, {
    key: "_onChangeIndex",
    value: function _onChangeIndex(e) {
      this.index = e.value;
    }
  }, {
    key: "index",
    set: function set(value) {
      this.list.forEach(function (span) {
        return span.classList.remove('xslider-active');
      });
      this.list[value].classList.add('xslider-active');
    }
  }]);

  return Pager;
}(EventDispatcher);

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
    var svg = this.parser.parseFromString(svgString, 'text/xml'),
        styleNode = document.createElement('style');
    styleNode.appendChild(document.createTextNode(Inliner.inlinedFontString));
    node.appendChild(styleNode);
    var o = svg.getElementsByTagName('foreignObject')[0];
    o.appendChild(node); // console.log('svg: ', svg.childNodes[0]);

    return svg;
  }
};

var Page = /*#__PURE__*/function () {
  function Page(page, debug) {
    _classCallCheck(this, Page);

    this.element = page; // this.debug = debug;

    this.canvas = document.createElement('canvas');
    this.image = new Image();
    this.layer = {
      gl: page.querySelector('.xslider-layer-gl'),
      ui: page.querySelector('.xslider-layer-ui')
    }; // if (this.debug == Option.Debug.DISPLAY.IMG) {
    //   this.element.insertBefore(this.image, this.layer.gl);
    // }
    // this.element.insertBefore(this.canvas, this.layer.gl);

    this.inlinedNode = undefined;
    this.needsResize = false;
  }

  _createClass(Page, [{
    key: "dispose",
    value: function dispose() {
      this.layer.gl && this.layer.gl.classList.remove('xslider-capture');
    }
  }, {
    key: "ready",
    value: function () {
      var _ready = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!this.isReadied && this.hasTexture)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return Inliner.inlineNode(this.layer.gl);

              case 3:
                this.inlinedNode = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function ready() {
        return _ready.apply(this, arguments);
      }

      return ready;
    }()
  }, {
    key: "loadSvg",
    value: function loadSvg(w, h) {
      this.svg = converter.convert(this.inlinedNode, w, h);
      var string = new XMLSerializer().serializeToString(this.svg); // console.log('string', string)
      // string = string.replace(/#/g, '%23').replace(/\n/g, '%0A')

      var uri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(string); // if (this.debug == Option.Debug.DISPLAY.SVG) {
      //   if (this._svg0 === undefined) {
      //     this._svg0 = this.element.insertBefore(this.svg.childNodes[0], this.layer.gl);
      //   } else {
      //     const node = this.svg.childNodes[0];
      //     this.element.replaceChild(node, this._svg0);
      //     this._svg0 = node;
      //   }
      // }

      return net.loadImage(this.image, uri);
    }
  }, {
    key: "resize",
    value: function () {
      var _resize = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(w, h) {
        var c;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.needsResize) {
                  _context2.next = 13;
                  break;
                }

                this.needsResize = false;
                this.canvas.width = w;
                this.canvas.height = h;

                if (!this.hasTexture) {
                  _context2.next = 13;
                  break;
                }

                this.layer.gl.classList.add('xslider-capture');
                cloner.cloneStyle(this.layer.gl, this.inlinedNode, Page.EXCLUDES);
                this.layer.gl.classList.remove('xslider-capture');
                _context2.next = 10;
                return this.loadSvg(w, h);

              case 10:
                c = this.canvas.getContext('2d');
                c.clearRect(0, 0, w, h);
                c.drawImage(this.image, 0, 0, w, h); // console.log(this.image, w, h);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function resize(_x, _x2) {
        return _resize.apply(this, arguments);
      }

      return resize;
    }()
    /**
     * 準備ができたかどうか
     */

  }, {
    key: "isReadied",
    get: function get() {
      return this.inlinedNode !== undefined;
    }
    /**
     * textureありかどうか
     */

  }, {
    key: "hasTexture",
    get: function get() {
      return this.layer.gl !== undefined;
    }
  }]);

  return Page;
}();
Page.EXCLUDES = ['background', 'left', 'right', 'width', 'height'];
var Slide = /*#__PURE__*/function (_InteractiveObject) {
  _inherits(Slide, _InteractiveObject);

  var _super = _createSuper(Slide);

  function Slide() {
    var _this;

    _classCallCheck(this, Slide);

    _this = _super.call(this);
    _this.list = [];
    _this.width = _this.height = -1;

    _this._bindMethods(['_onChangePage']);

    return _this;
  }

  _createClass(Slide, [{
    key: "setup",
    value: function setup(dom, mesh) {
      var _this2 = this;

      this.set({
        target: dom.list
      });
      dom.pages.forEach(function (element) {
        _this2.list.push(new Page(element));
      });
      this.mesh = mesh;
      this.mesh && (this.uniforms = this.mesh.material.uniforms);
      this.on('page0', this._onChangePage);
      this.on('page1', this._onChangePage);
    }
  }, {
    key: "ready",
    value: function () {
      var _ready2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(i0, i1) {
        var page0, page1, arr;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                page0 = this.list[i0];
                page1 = undefined;
                arr = [page0.ready()];

                if (i1 !== undefined) {
                  page1 = this.list[i1];
                  arr.push(page1.ready());
                }

                _context3.next = 6;
                return Promise.all(arr);

              case 6:
                this.set({
                  page0: page0,
                  page1: page1
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function ready(_x3, _x4) {
        return _ready2.apply(this, arguments);
      }

      return ready;
    }()
  }, {
    key: "dispose",
    value: function dispose() {
      this.list.forEach(function (page) {
        page.dispose();
      });
      this.off('page0', this._onChangePage);
      this.off('page1', this._onChangePage);
      var page0 = this.get('page0');
      var page1 = this.get('page1');
      page0.element.classList.remove('xslider-page-active');
      page1 && page1.element.classList.remove('xslider-page-active');
    }
  }, {
    key: "resize",
    value: function resize(w, h) {
      this.width = w;
      this.height = h;

      if (this.mesh) {
        this.uniforms.resolution.value.set(w, h);
      }

      this.list.forEach(function (page) {
        page.needsResize = true;
      });
      return Promise.all([this.updatePage(0), this.updatePage(1)]);
    }
  }, {
    key: "updatePage",
    value: function () {
      var _updatePage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(pageIndex) {
        var page, texture;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(this.width == -1 && this.height == -1)) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                page = this.get('page' + pageIndex);

                if (!page) {
                  _context4.next = 7;
                  break;
                }

                page.element.classList.add('xslider-page-active');
                _context4.next = 7;
                return page.resize(this.width, this.height);

              case 7:
                if (this.uniforms) {
                  texture = this.uniforms['texture' + pageIndex].value;
                  texture.image = page ? page.canvas : undefined;
                  texture.needsUpdate = true;
                }

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updatePage(_x5) {
        return _updatePage.apply(this, arguments);
      }

      return updatePage;
    }()
  }, {
    key: "_onChangePage",
    value: function _onChangePage(e) {
      var removeOld = false;

      switch (e.type) {
        case 'page0':
          this.updatePage(0);
          removeOld = e.value0 !== undefined;
          break;

        case 'page1':
          this.updatePage(1);
          removeOld = e.value0 !== undefined && e.value0 !== this.get('page0');
          break;
      }

      if (removeOld) {
        e.value0.element.classList.remove('xslider-page-active');
      }
    }
  }]);

  return Slide;
}(InteractiveObject);

var Dom = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(Dom, _EventDispatcher);

  var _super = _createSuper(Dom);

  function Dom() {
    var _this;

    _classCallCheck(this, Dom);

    _this = _super.call(this);

    _this._bindMethods(['_onResize']);

    return _this;
  }

  _createClass(Dom, [{
    key: "width",
    get: function get() {
      return this.container.clientWidth;
    }
  }, {
    key: "height",
    get: function get() {
      return this.container.clientHeight;
    }
  }, {
    key: "setup",
    value: function setup(selector) {
      this.container = document.querySelector(selector);
      this.container.classList.add('xslider-container');
      this.list = this.container.querySelector('.xslider-slide');
      this.pages = this.list.querySelectorAll('.xslider-page');
      this.pager = this.container.querySelector('.xslider-pager');
      this.prev = this.container.querySelector('.xslider-prev');
      this.next = this.container.querySelector('.xslider-next');
      this.canvas = document.createElement('canvas');
      this.container.insertBefore(this.canvas, this.list);
      stage.on('resize', this._onResize);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._width = this._height = undefined;
      stage.off('resize', this._onResize);
      this.container.classList.remove('xslider-container', 'xslider-debug');
      this.container.removeChild(this.canvas);
    }
  }, {
    key: "_onResize",
    value: function _onResize(e) {
      if (this._width != this.width || this._height != this.height) {
        this._width = this.width;
        this._height = this.height;
        this.dispatch('resize', {
          type: 'resize',
          width: this._width,
          height: this._height
        });
      }
    }
  }]);

  return Dom;
}(EventDispatcher);

var BaseRenderer = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(BaseRenderer, _EventDispatcher);

  var _super = _createSuper(BaseRenderer);

  function BaseRenderer() {
    _classCallCheck(this, BaseRenderer);

    return _super.call(this);
  }

  _createClass(BaseRenderer, [{
    key: "setup",
    value: function setup(option, slide) {
      this.option = option;
      this.slide = slide;
    }
  }, {
    key: "dispose",
    value: function dispose() {}
  }, {
    key: "render",
    value: function render(i0, i1, progress) {}
  }, {
    key: "resize",
    value: function resize(w, h) {
      this.width = w;
      this.height = h;
    }
  }]);

  return BaseRenderer;
}(EventDispatcher);

var DefaultRenderer = /*#__PURE__*/function (_BaseRenderer) {
  _inherits(DefaultRenderer, _BaseRenderer);

  var _super = _createSuper(DefaultRenderer);

  function DefaultRenderer() {
    var _this;

    _classCallCheck(this, DefaultRenderer);

    _this = _super.call(this);
    _this.dx = 0;
    return _this;
  }

  _createClass(DefaultRenderer, [{
    key: "render",
    value: function render(i0, i1, progress) {
      _get(_getPrototypeOf(DefaultRenderer.prototype), "render", this).call(this, i0, i1, progress);

      var page0 = this.slide.list[i0],
          page1 = this.slide.list[i1]; // let opacity = 1.0 - Utils.clamp(progress, 0, 0.5) / 0.5;

      var dx = -progress * this.width;
      this.updatePage(page0, dx
      /*, opacity*/
      );

      if (page0 != page1) {
        // opacity = Utils.clamp(progress - 0.5, 0, 0.5) / 0.5;
        dx = (1 - progress) * this.width;
        this.updatePage(page1, dx
        /*, opacity*/
        );
      }
    }
  }, {
    key: "updatePage",
    value: function updatePage(slide, dx, opacity) {
      if (!slide || !slide.layer.ui) return;
      slide.layer.ui.style.webkitTransform = 'translate(' + dx + 'px, 0) scale(1)'; // slide.layer.ui.style.opacity = opacity;
    }
  }]);

  return DefaultRenderer;
}(BaseRenderer);

// eslint-disable-next-line es/no-typed-arrays -- safe
var arrayBufferNative = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

var defineProperty$2 = objectDefineProperty.f;
var Int8Array$3 = global$1.Int8Array;
var Int8ArrayPrototype = Int8Array$3 && Int8Array$3.prototype;
var Uint8ClampedArray = global$1.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array$3 && objectGetPrototypeOf(Int8Array$3);
var TypedArrayPrototype = Int8ArrayPrototype && objectGetPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype$1 = Object.prototype;
var isPrototypeOf = ObjectPrototype$1.isPrototypeOf;
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG'); // Fixing native typed arrays in Opera Presto crashes the browser, see #595

var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferNative && !!objectSetPrototypeOf && classof(global$1.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME$1;
var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};
var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView' || has$1(TypedArrayConstructorsList, klass) || has$1(BigIntArrayConstructorsList, klass);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return has$1(TypedArrayConstructorsList, klass) || has$1(BigIntArrayConstructorsList, klass);
};

var aTypedArray$m = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor$4 = function (C) {
  if (objectSetPrototypeOf) {
    if (isPrototypeOf.call(TypedArray, C)) return C;
  } else for (var ARRAY in TypedArrayConstructorsList) if (has$1(TypedArrayConstructorsList, NAME$1)) {
    var TypedArrayConstructor = global$1[ARRAY];

    if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
      return C;
    }
  }

  throw TypeError('Target is not a typed array constructor');
};

var exportTypedArrayMethod$n = function (KEY, property, forced) {
  if (!descriptors) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global$1[ARRAY];

    if (TypedArrayConstructor && has$1(TypedArrayConstructor.prototype, KEY)) {
      delete TypedArrayConstructor.prototype[KEY];
    }
  }

  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$1 && Int8ArrayPrototype[KEY] || property);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!descriptors) return;

  if (objectSetPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$1[ARRAY];

      if (TypedArrayConstructor && has$1(TypedArrayConstructor, KEY)) {
        delete TypedArrayConstructor[KEY];
      }
    }

    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$1 && Int8Array$3[KEY] || property);
      } catch (error) {
        /* empty */
      }
    } else return;
  }

  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global$1[ARRAY];

    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME$1 in TypedArrayConstructorsList) {
  if (!global$1[NAME$1]) NATIVE_ARRAY_BUFFER_VIEWS$1 = false;
} // WebKit bug - typed arrays constructors prototype is Object.prototype


if (!NATIVE_ARRAY_BUFFER_VIEWS$1 || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };

  if (NATIVE_ARRAY_BUFFER_VIEWS$1) for (NAME$1 in TypedArrayConstructorsList) {
    if (global$1[NAME$1]) objectSetPrototypeOf(global$1[NAME$1], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS$1 || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype$1) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS$1) for (NAME$1 in TypedArrayConstructorsList) {
    if (global$1[NAME$1]) objectSetPrototypeOf(global$1[NAME$1].prototype, TypedArrayPrototype);
  }
} // WebKit bug - one more object in Uint8ClampedArray prototype chain


if (NATIVE_ARRAY_BUFFER_VIEWS$1 && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (descriptors && !has$1(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQIRED = true;
  defineProperty$2(TypedArrayPrototype, TO_STRING_TAG, {
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });

  for (NAME$1 in TypedArrayConstructorsList) if (global$1[NAME$1]) {
    createNonEnumerableProperty(global$1[NAME$1], TYPED_ARRAY_TAG, NAME$1);
  }
}

var arrayBufferViewCore = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$1,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray$m,
  aTypedArrayConstructor: aTypedArrayConstructor$4,
  exportTypedArrayMethod: exportTypedArrayMethod$n,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};

/* eslint-disable no-new -- required for testing */
var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var ArrayBuffer$2 = global$1.ArrayBuffer;
var Int8Array$2 = global$1.Int8Array;
var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array$2(1);
}) || !fails(function () {
  new Int8Array$2(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array$2();
  new Int8Array$2(null);
  new Int8Array$2(1.5);
  new Int8Array$2(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array$2(new ArrayBuffer$2(2), 1, undefined).length !== 1;
});

// https://tc39.es/ecma262/#sec-toindex

var toIndex = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length or index');
  return length;
};

// IEEE754 conversions based on https://github.com/feross/ieee754
var abs = Math.abs;
var pow = Math.pow;
var floor$1 = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = new Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number); // eslint-disable-next-line no-self-compare -- NaN check

  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor$1(log(number) / LN2);

    if (number * (c = pow(2, -exponent)) < 1) {
      exponent--;
      c *= 2;
    }

    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }

    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }

    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }

  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);

  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;

  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);

  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;

  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);

  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;

  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);

  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  }

  return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

var ieee754 = {
  pack: pack,
  unpack: unpack
};

// https://tc39.es/ecma262/#sec-array.prototype.fill


var arrayFill = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) O[index++] = value;

  return O;
};

var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var defineProperty$1 = objectDefineProperty.f;
var getInternalState = internalState.get;
var setInternalState = internalState.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global$1[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var $DataView = global$1[DATA_VIEW];
var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var RangeError$1 = global$1.RangeError;
var packIEEE754 = ieee754.pack;
var unpackIEEE754 = ieee754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty$1(Constructor[PROTOTYPE], key, {
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = bytes.slice(start, start + count);
  return isLittleEndian ? pack : pack.reverse();
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);

  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!arrayBufferNative) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    setInternalState(this, {
      bytes: arrayFill.call(new Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!descriptors) this.byteLength = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = getInternalState(buffer).byteLength;
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError$1('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError$1(WRONG_LENGTH);
    setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });

    if (!descriptors) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  if (descriptors) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset
    /* , littleEndian */
    ) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset
    /* , littleEndian */
    ) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  /* eslint-disable no-new -- required for testing */
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1);
  }) || fails(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return NativeArrayBuffer.name != ARRAY_BUFFER;
  })) {
    /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new NativeArrayBuffer(toIndex(length));
    };

    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];

    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }

    ArrayBufferPrototype.constructor = $ArrayBuffer;
  } // WebKit bug - the same parent prototype for typed arrays and data view


  if (objectSetPrototypeOf && objectGetPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
    objectSetPrototypeOf($DataViewPrototype, ObjectPrototype);
  } // iOS Safari 7.x bug


  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataViewPrototype.setInt8;
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, {
    unsafe: true
  });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
var arrayBuffer = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};

var toPositiveInteger = function (it) {
  var result = toInteger(it);
  if (result < 0) throw RangeError("The argument can't be less than 0");
  return result;
};

var toOffset = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw RangeError('Wrong offset');
  return offset;
};

var aTypedArrayConstructor$3 = arrayBufferViewCore.aTypedArrayConstructor;

var typedArrayFrom = function from(source
/* , mapfn, thisArg */
) {
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, step, iterator, next;

  if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    O = [];

    while (!(step = next.call(iterator)).done) {
      O.push(step.value);
    }
  }

  if (mapping && argumentsLength > 2) {
    mapfn = functionBindContext(mapfn, arguments[2], 2);
  }

  length = toLength(O.length);
  result = new (aTypedArrayConstructor$3(this))(length);

  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }

  return result;
};

var inheritIfRequired = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if ( // it can work only with native `setPrototypeOf`
  objectSetPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) objectSetPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var typedArrayConstructor = createCommonjsModule(function (module) {

  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var forEach = arrayIteration.forEach;
  var getInternalState = internalState.get;
  var setInternalState = internalState.set;
  var nativeDefineProperty = objectDefineProperty.f;
  var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var round = Math.round;
  var RangeError = global$1.RangeError;
  var ArrayBuffer = arrayBuffer.ArrayBuffer;
  var DataView = arrayBuffer.DataView;
  var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
  var TYPED_ARRAY_TAG = arrayBufferViewCore.TYPED_ARRAY_TAG;
  var TypedArray = arrayBufferViewCore.TypedArray;
  var TypedArrayPrototype = arrayBufferViewCore.TypedArrayPrototype;
  var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
  var isTypedArray = arrayBufferViewCore.isTypedArray;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var WRONG_LENGTH = 'Wrong length';

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor(C))(length);

    while (length > index) result[index] = list[index++];

    return result;
  };

  var addGetter = function (it, key) {
    nativeDefineProperty(it, key, {
      get: function () {
        return getInternalState(this)[key];
      }
    });
  };

  var isArrayBuffer = function (it) {
    var klass;
    return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
  };

  var isTypedArrayIndex = function (target, key) {
    return isTypedArray(target) && typeof key != 'symbol' && key in target && String(+key) == String(key);
  };

  var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
    return isTypedArrayIndex(target, key = toPrimitive(key, true)) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
  };

  var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
    if (isTypedArrayIndex(target, key = toPrimitive(key, true)) && isObject(descriptor) && has$1(descriptor, 'value') && !has$1(descriptor, 'get') && !has$1(descriptor, 'set') // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable && (!has$1(descriptor, 'writable') || descriptor.writable) && (!has$1(descriptor, 'enumerable') || descriptor.enumerable)) {
      target[key] = descriptor.value;
      return target;
    }

    return nativeDefineProperty(target, key, descriptor);
  };

  if (descriptors) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      objectGetOwnPropertyDescriptor.f = wrappedGetOwnPropertyDescriptor;
      objectDefineProperty.f = wrappedDefineProperty;
      addGetter(TypedArrayPrototype, 'buffer');
      addGetter(TypedArrayPrototype, 'byteOffset');
      addGetter(TypedArrayPrototype, 'byteLength');
      addGetter(TypedArrayPrototype, 'length');
    }

    _export({
      target: 'Object',
      stat: true,
      forced: !NATIVE_ARRAY_BUFFER_VIEWS
    }, {
      getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
      defineProperty: wrappedDefineProperty
    });

    module.exports = function (TYPE, wrapper, CLAMPED) {
      var BYTES = TYPE.match(/\d+$/)[0] / 8;
      var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + TYPE;
      var SETTER = 'set' + TYPE;
      var NativeTypedArrayConstructor = global$1[CONSTRUCTOR_NAME];
      var TypedArrayConstructor = NativeTypedArrayConstructor;
      var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
      var exported = {};

      var getter = function (that, index) {
        var data = getInternalState(that);
        return data.view[GETTER](index * BYTES + data.byteOffset, true);
      };

      var setter = function (that, index, value) {
        var data = getInternalState(that);
        if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
        data.view[SETTER](index * BYTES + data.byteOffset, value, true);
      };

      var addElement = function (that, index) {
        nativeDefineProperty(that, index, {
          get: function () {
            return getter(this, index);
          },
          set: function (value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };

      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
          anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
          var index = 0;
          var byteOffset = 0;
          var buffer, byteLength, length;

          if (!isObject(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new ArrayBuffer(byteLength);
          } else if (isArrayBuffer(data)) {
            buffer = data;
            byteOffset = toOffset(offset, BYTES);
            var $len = data.byteLength;

            if ($length === undefined) {
              if ($len % BYTES) throw RangeError(WRONG_LENGTH);
              byteLength = $len - byteOffset;
              if (byteLength < 0) throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength($length) * BYTES;
              if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
            }

            length = byteLength / BYTES;
          } else if (isTypedArray(data)) {
            return fromList(TypedArrayConstructor, data);
          } else {
            return typedArrayFrom.call(TypedArrayConstructor, data);
          }

          setInternalState(that, {
            buffer: buffer,
            byteOffset: byteOffset,
            byteLength: byteLength,
            length: length,
            view: new DataView(buffer)
          });

          while (index < length) addElement(that, index++);
        });
        if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
        TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = objectCreate(TypedArrayPrototype);
      } else if (typedArrayConstructorsRequireWrappers) {
        TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
          anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
          return inheritIfRequired(function () {
            if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
            if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
            if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
            return typedArrayFrom.call(TypedArrayConstructor, data);
          }(), dummy, TypedArrayConstructor);
        });
        if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
        forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
          if (!(key in TypedArrayConstructor)) {
            createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
          }
        });
        TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
      }

      if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
      }

      if (TYPED_ARRAY_TAG) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
      }

      exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
      _export({
        global: true,
        forced: TypedArrayConstructor != NativeTypedArrayConstructor,
        sham: !NATIVE_ARRAY_BUFFER_VIEWS
      }, exported);

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
        createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
      }

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
      }

      setSpecies(CONSTRUCTOR_NAME);
    };
  } else module.exports = function () {
    /* empty */
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var min$1 = Math.min; // `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe

var arrayCopyWithin = [].copyWithin || function copyWithin(target
/* = 0 */
, start
/* = 0, end = @length */
) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min$1((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;

  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }

  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }

  return O;
};

var aTypedArray$l = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$m = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin

exportTypedArrayMethod$m('copyWithin', function copyWithin(target, start
/* , end */
) {
  return arrayCopyWithin.call(aTypedArray$l(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});

var $every = arrayIteration.every;
var aTypedArray$k = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$l = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every

exportTypedArrayMethod$l('every', function every(callbackfn
/* , thisArg */
) {
  return $every(aTypedArray$k(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

var aTypedArray$j = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$k = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
// eslint-disable-next-line no-unused-vars -- required for `.length`

exportTypedArrayMethod$k('fill', function fill(value
/* , start, end */
) {
  return arrayFill.apply(aTypedArray$j(this), arguments);
});

var aTypedArrayConstructor$2 = arrayBufferViewCore.aTypedArrayConstructor;

var typedArrayFromSpeciesAndList = function (instance, list) {
  var C = speciesConstructor(instance, instance.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor$2(C))(length);

  while (length > index) result[index] = list[index++];

  return result;
};

var $filter = arrayIteration.filter;
var aTypedArray$i = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$j = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter

exportTypedArrayMethod$j('filter', function filter(callbackfn
/* , thisArg */
) {
  var list = $filter(aTypedArray$i(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return typedArrayFromSpeciesAndList(this, list);
});

var $find = arrayIteration.find;
var aTypedArray$h = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$i = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find

exportTypedArrayMethod$i('find', function find(predicate
/* , thisArg */
) {
  return $find(aTypedArray$h(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

var $findIndex = arrayIteration.findIndex;
var aTypedArray$g = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$h = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex

exportTypedArrayMethod$h('findIndex', function findIndex(predicate
/* , thisArg */
) {
  return $findIndex(aTypedArray$g(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

var $forEach = arrayIteration.forEach;
var aTypedArray$f = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$g = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach

exportTypedArrayMethod$g('forEach', function forEach(callbackfn
/* , thisArg */
) {
  $forEach(aTypedArray$f(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

var $includes = arrayIncludes.includes;
var aTypedArray$e = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$f = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes

exportTypedArrayMethod$f('includes', function includes(searchElement
/* , fromIndex */
) {
  return $includes(aTypedArray$e(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});

var $indexOf = arrayIncludes.indexOf;
var aTypedArray$d = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$e = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof

exportTypedArrayMethod$e('indexOf', function indexOf(searchElement
/* , fromIndex */
) {
  return $indexOf(aTypedArray$d(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array$2 = global$1.Uint8Array;
var arrayValues = es_array_iterator.values;
var arrayKeys = es_array_iterator.keys;
var arrayEntries = es_array_iterator.entries;
var aTypedArray$c = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$d = arrayBufferViewCore.exportTypedArrayMethod;
var nativeTypedArrayIterator = Uint8Array$2 && Uint8Array$2.prototype[ITERATOR];
var CORRECT_ITER_NAME = !!nativeTypedArrayIterator && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

var typedArrayValues = function values() {
  return arrayValues.call(aTypedArray$c(this));
}; // `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries


exportTypedArrayMethod$d('entries', function entries() {
  return arrayEntries.call(aTypedArray$c(this));
}); // `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys

exportTypedArrayMethod$d('keys', function keys() {
  return arrayKeys.call(aTypedArray$c(this));
}); // `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values

exportTypedArrayMethod$d('values', typedArrayValues, !CORRECT_ITER_NAME); // `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator

exportTypedArrayMethod$d(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);

var aTypedArray$b = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$c = arrayBufferViewCore.exportTypedArrayMethod;
var $join = [].join; // `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
// eslint-disable-next-line no-unused-vars -- required for `.length`

exportTypedArrayMethod$c('join', function join(separator) {
  return $join.apply(aTypedArray$b(this), arguments);
});

/* eslint-disable es/no-array-prototype-lastindexof -- safe */


var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED$3 = NEGATIVE_ZERO || !STRICT_METHOD; // `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof

var arrayLastIndexOf = FORCED$3 ? function lastIndexOf(searchElement
/* , fromIndex = @[*-1] */
) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return $lastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;

  for (; index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;

  return -1;
} : $lastIndexOf;

var aTypedArray$a = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$b = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
// eslint-disable-next-line no-unused-vars -- required for `.length`

exportTypedArrayMethod$b('lastIndexOf', function lastIndexOf(searchElement
/* , fromIndex */
) {
  return arrayLastIndexOf.apply(aTypedArray$a(this), arguments);
});

var $map = arrayIteration.map;
var aTypedArray$9 = arrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod$a = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map

exportTypedArrayMethod$a('map', function map(mapfn
/* , thisArg */
) {
  return $map(aTypedArray$9(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (aTypedArrayConstructor$1(speciesConstructor(O, O.constructor)))(length);
  });
});

var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = indexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }

      index += i;

      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }

    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }

    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

var $reduce = arrayReduce.left;
var aTypedArray$8 = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$9 = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce

exportTypedArrayMethod$9('reduce', function reduce(callbackfn
/* , initialValue */
) {
  return $reduce(aTypedArray$8(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});

var $reduceRight = arrayReduce.right;
var aTypedArray$7 = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$8 = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.reduceRicht` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright

exportTypedArrayMethod$8('reduceRight', function reduceRight(callbackfn
/* , initialValue */
) {
  return $reduceRight(aTypedArray$7(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});

var aTypedArray$6 = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$7 = arrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor; // `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse

exportTypedArrayMethod$7('reverse', function reverse() {
  var that = this;
  var length = aTypedArray$6(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;

  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  }

  return that;
});

var aTypedArray$5 = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$6 = arrayBufferViewCore.exportTypedArrayMethod;
var FORCED$2 = fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  new Int8Array(1).set({});
}); // `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set

exportTypedArrayMethod$6('set', function set(arrayLike
/* , offset */
) {
  aTypedArray$5(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var length = this.length;
  var src = toObject(arrayLike);
  var len = toLength(src.length);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');

  while (index < len) this[offset + index] = src[index++];
}, FORCED$2);

var aTypedArray$4 = arrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod$5 = arrayBufferViewCore.exportTypedArrayMethod;
var $slice$1 = [].slice;
var FORCED$1 = fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  new Int8Array(1).slice();
}); // `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice

exportTypedArrayMethod$5('slice', function slice(start, end) {
  var list = $slice$1.call(aTypedArray$4(this), start, end);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);

  while (length > index) result[index] = list[index++];

  return result;
}, FORCED$1);

var $some = arrayIteration.some;
var aTypedArray$3 = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$4 = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some

exportTypedArrayMethod$4('some', function some(callbackfn
/* , thisArg */
) {
  return $some(aTypedArray$3(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

var aTypedArray$2 = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$3 = arrayBufferViewCore.exportTypedArrayMethod;
var $sort = [].sort; // `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort

exportTypedArrayMethod$3('sort', function sort(comparefn) {
  return $sort.call(aTypedArray$2(this), comparefn);
});

var aTypedArray$1 = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$2 = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray

exportTypedArrayMethod$2('subarray', function subarray(begin, end) {
  var O = aTypedArray$1(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  return new (speciesConstructor(O, O.constructor))(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));
});

var Int8Array$1 = global$1.Int8Array;
var aTypedArray = arrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;
var $slice = [].slice; // iOS Safari 6.x fails here

var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails(function () {
  $toLocaleString.call(new Int8Array$1(1));
});
var FORCED = fails(function () {
  return [1, 2].toLocaleString() != new Int8Array$1([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array$1.prototype.toLocaleString.call([1, 2]);
}); // `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring

exportTypedArrayMethod$1('toLocaleString', function toLocaleString() {
  return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
}, FORCED);

var exportTypedArrayMethod = arrayBufferViewCore.exportTypedArrayMethod;
var Uint8Array$1 = global$1.Uint8Array;
var Uint8ArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype || {};
var arrayToString = [].toString;
var arrayJoin = [].join;

if (fails(function () {
  arrayToString.call({});
})) {
  arrayToString = function toString() {
    return arrayJoin.call(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString; // `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring

exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);

var ArrayBuffer$1 = arrayBuffer.ArrayBuffer;
var DataView$1 = arrayBuffer.DataView;
var nativeArrayBufferSlice = ArrayBuffer$1.prototype.slice;
var INCORRECT_SLICE = fails(function () {
  return !new ArrayBuffer$1(2).slice(1, undefined).byteLength;
}); // `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice

_export({
  target: 'ArrayBuffer',
  proto: true,
  unsafe: true,
  forced: INCORRECT_SLICE
}, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice !== undefined && end === undefined) {
      return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
    }

    var length = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new (speciesConstructor(this, ArrayBuffer$1))(toLength(fin - first));
    var viewSource = new DataView$1(this);
    var viewTarget = new DataView$1(result);
    var index = 0;

    while (first < fin) {
      viewTarget.setUint8(index++, viewSource.getUint8(first++));
    }

    return result;
  }
});

var defineProperty = objectDefineProperty.f;
var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name'; // Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name

if (descriptors && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Int8', function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Int16', function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Uint16', function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Int32', function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Uint32', function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// https://tc39.es/ecma262/#sec-typedarray-objects

typedArrayConstructor('Float32', function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var Asset = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(Asset, _EventDispatcher);

  var _super = _createSuper(Asset);

  function Asset() {
    var _this;

    _classCallCheck(this, Asset);

    _this = _super.call(this);
    _this.needsUpdate = true;
    _this.location = undefined;
    return _this;
  }

  return Asset;
}(EventDispatcher);

var VarFormat = {
  Byte: 'BYTE',
  UnsignedByte: 'UNSIGNED_BYTE',
  Short: 'SHORT',
  UnsignedShort: 'UNSIGNED_SHORT',
  Int: 'INT',
  UnsignedInt: 'UNSIGNED_INT',
  Float: 'FLOAT'
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

var Buffer = /*#__PURE__*/function (_Asset) {
  _inherits(Buffer, _Asset);

  var _super = _createSuper(Buffer);

  function Buffer(format, bufferType, usage) {
    var _this;

    _classCallCheck(this, Buffer);

    _this = _super.call(this);
    _this.format = format;
    _this.bufferType = bufferType;
    _this.usage = usage;
    _this.data = getTypedArrayByFormat(_this.format, 1);
    return _this;
  }

  _createClass(Buffer, [{
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
}(Asset);
Buffer.Usage = {
  Static: 'STATIC_DRAW',
  Dynamic: 'DYNAMIC_DRAW',
  Stream: 'STREAM_DRAW'
};
Buffer.Type = {
  Interleaved: 'Interleaved',
  Index: 'Index'
};
var IndexBuffer = /*#__PURE__*/function (_Buffer) {
  _inherits(IndexBuffer, _Buffer);

  var _super2 = _createSuper(IndexBuffer);

  function IndexBuffer(drawMode) {
    var _this2;

    _classCallCheck(this, IndexBuffer);

    _this2 = _super2.call(this, VarFormat.UnsignedShort, Buffer.Type.Index, Buffer.Usage.Static);
    _this2.drawMode = drawMode;
    return _this2;
  }

  return IndexBuffer;
}(Buffer);
IndexBuffer.DrawMode = {
  Triangles: 'TRIANGLES'
};

var Texture = /*#__PURE__*/function (_Asset) {
  _inherits(Texture, _Asset);

  var _super = _createSuper(Texture);

  function Texture(src) {
    var _this;

    _classCallCheck(this, Texture);

    _this = _super.call(this);
    _this.image = undefined;

    if (src) {
      _this.setup(src);
    }

    return _this;
  }

  _createClass(Texture, [{
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
}(Asset);

var Matrix3 = /*#__PURE__*/function () {
  function Matrix3() {
    _classCallCheck(this, Matrix3);

    this.identity();
  }

  _createClass(Matrix3, [{
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
var Matrix4 = /*#__PURE__*/function () {
  function Matrix4() {
    _classCallCheck(this, Matrix4);

    this.identity();
  }

  _createClass(Matrix4, [{
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

var Matrix = /*#__PURE__*/Object.freeze({
__proto__: null,
Matrix3: Matrix3,
Matrix4: Matrix4
});

var ShaderVarFormat = {
  Int: 'Int',
  Float: 'Float',
  Vector2: 'Vector2',
  Vector3: 'Vector3',
  Vector4: 'Vector4',
  Matrix3: 'Matrix3',
  Matrix4: 'Matrix4'
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

var ShaderVar = /*#__PURE__*/function (_Asset) {
  _inherits(ShaderVar, _Asset);

  var _super = _createSuper(ShaderVar);

  function ShaderVar(name, varFormat, shaderVarFormat) {
    var _this;

    _classCallCheck(this, ShaderVar);

    _this = _super.call(this);
    _this.name = name;
    _this.format = varFormat;
    _this.shaderVarFormat = shaderVarFormat;
    _this.offset = 0;
    _this.size = getSizeFromShaderVarFormat(shaderVarFormat);
    return _this;
  }

  return ShaderVar;
}(Asset);
var Uniform = /*#__PURE__*/function (_ShaderVar) {
  _inherits(Uniform, _ShaderVar);

  var _super2 = _createSuper(Uniform);

  function Uniform(name, valueObject) {
    var _this2;

    var textureUnit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

    _classCallCheck(this, Uniform);

    var varFormat;
    var shaderVarFormat;

    if (valueObject) {
      varFormat = VarFormat.Float;

      switch (valueObject.value.constructor) {
        case Texture:
          varFormat = VarFormat.Int;
          shaderVarFormat = ShaderVarFormat.Int;
          break;

        case Matrix3:
          shaderVarFormat = ShaderVarFormat.Matrix3;
          break;

        case Matrix4:
          shaderVarFormat = ShaderVarFormat.Matrix4;
          break;

        case Vec2:
          shaderVarFormat = ShaderVarFormat.Vector2;
          break;

        case Vec3:
          shaderVarFormat = ShaderVarFormat.Vector3;
          break;

        case Vec4:
          shaderVarFormat = ShaderVarFormat.Vector4;
          break;

        default:
          shaderVarFormat = ShaderVarFormat.Float;
      }
    }

    _this2 = _super2.call(this, name, varFormat, shaderVarFormat);
    _this2.valueObject = valueObject;
    _this2.textureUnit = textureUnit;
    return _this2;
  }

  return Uniform;
}(ShaderVar);
Uniform.Binding = {
  Projection: 'projectionMatrix',
  ModelView: 'modelViewMatrix'
};
var Shader = /*#__PURE__*/function (_Asset2) {
  _inherits(Shader, _Asset2);

  var _super3 = _createSuper(Shader);

  function Shader(type) {
    var _this3;

    _classCallCheck(this, Shader);

    _this3 = _super3.call(this);
    _this3.type = type;
    return _this3;
  }

  _createClass(Shader, [{
    key: "updateSource",
    value: function updateSource(source) {
      this.source = source;
    }
  }]);

  return Shader;
}(Asset);
Shader.VERTEX = 'VERTEX_SHADER';
Shader.FRAGMENT = 'FRAGMENT_SHADER';
var Program = /*#__PURE__*/function (_Asset3) {
  _inherits(Program, _Asset3);

  var _super4 = _createSuper(Program);

  function Program() {
    var _this4;

    _classCallCheck(this, Program);

    _this4 = _super4.call(this);
    _this4.vertex = new Shader(Shader.VERTEX);
    _this4.fragment = new Shader(Shader.FRAGMENT);
    _this4.attributes = [];
    _this4.uniforms = [];
    _this4.stride = 0; // this.uniformBuffer = new Buffer(VarFormat.Float, Buffer.Type.Interleaved, Buffer.Usage.Static);
    // this.uniformBuffserSize = 0;

    return _this4;
  }

  _createClass(Program, [{
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
}(Asset);

var GraphicsContext = {
  bound: {
    sceneContext: undefined,
    program: undefined,
    viewport: new Vec4()
  },
  test: {
    depth: false,
    stensil: false
  },
  reset: function reset() {
    this.bound = {
      sceneContext: undefined,
      program: undefined,
      viewport: new Vec4()
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
    this._gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);

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

    gl.activeTexture(gl['TEXTURE' + textureUnit]);
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
        throw new Error('Could not initialise shaders');
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
        throw new Error('attribute ' + a.name + ' undefined.');
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
      case Uniform.Binding.ModelView:
        gl.uniformMatrix4fv(uniform.location, false, bound.model.matrix.local.data);
        break;

      case Uniform.Binding.Projection:
        gl.uniformMatrix4fv(uniform.location, false, bound.camera.matrix.projection.data);
        break;

      default:
        if (uniform.valueObject.value instanceof Texture) {
          this.updateTexture(uniform.valueObject.value, uniform.textureUnit);
          gl.uniform1i(uniform.location, uniform.textureUnit);
        } else {
          switch (uniform.shaderVarFormat) {
            case ShaderVarFormat.Int:
              gl.uniform1i(uniform.location, uniform.valueObject.value);
              break;

            case ShaderVarFormat.Float:
              gl.uniform1f(uniform.location, uniform.valueObject.value);
              break;

            case ShaderVarFormat.Vector2:
              gl.uniform2fv(uniform.location, uniform.valueObject.value.data);
              break;

            case ShaderVarFormat.Vector3:
              gl.uniform3fv(uniform.location, uniform.valueObject.value.data);
              break;

            case ShaderVarFormat.Vector4:
              gl.uniform4fv(uniform.location, uniform.valueObject.value.data);
              break;

            case ShaderVarFormat.Matrix3:
              gl.uniformMatrix3fv(uniform.location, uniform.valueObject.value.data);
              break;

            case ShaderVarFormat.Matrix4:
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

    if (buffer.bufferType !== Buffer.Type.Index) {
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

var Color = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);

    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 1;
  }

  _createClass(Color, [{
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

var Mesh = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(Mesh, _EventDispatcher);

  var _super = _createSuper(Mesh);

  function Mesh() {
    var _this;

    _classCallCheck(this, Mesh);

    _this = _super.call(this);
    _this.vertexBuffer = new Buffer(VarFormat.Float, Buffer.Type.Interleaved, Buffer.Usage.Static);
    _this.indexBuffer = new IndexBuffer(IndexBuffer.DrawMode.Triangles);
    return _this;
  }

  return Mesh;
}(EventDispatcher);

var Node = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(Node, _EventDispatcher);

  var _super = _createSuper(Node);

  function Node() {
    var _this;

    _classCallCheck(this, Node);

    _this = _super.call(this);
    _this.children = [];
    _this.matrix = {};
    return _this;
  }

  _createClass(Node, [{
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
}(EventDispatcher); // export class Node2D extends Node {
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

var Model = /*#__PURE__*/function (_Node) {
  _inherits(Model, _Node);

  var _super2 = _createSuper(Model);

  function Model() {
    var _this2;

    _classCallCheck(this, Model);

    _this2 = _super2.call(this);
    _this2.mesh = new Mesh();
    return _this2;
  }

  return Model;
}(Node);
var Camera = /*#__PURE__*/function (_Node2) {
  _inherits(Camera, _Node2);

  var _super3 = _createSuper(Camera);

  function Camera() {
    var _this3;

    _classCallCheck(this, Camera);

    _this3 = _super3.call(this);
    _this3.viewport = new Vec4(); // this.matrix.projection = new Matrix4();
    // this.matrix.view = new Matrix4();
    // this.matrix.viewProjection = new Matrix4();

    return _this3;
  } // perspective(fov, aspect, near, far) {
  //     this.matrix.projection.perspective(fov, aspect, near, far);
  // }


  _createClass(Camera, [{
    key: "setViewport",
    value: function setViewport(x, y, width, height) {
      this.viewport.set(x, y, width, height); // this.perspective(60, width/height, 0.1, 100);
    }
  }]);

  return Camera;
}(Node);

var SceneContext = function SceneContext() {
  _classCallCheck(this, SceneContext);

  this.clear = {
    color: true,
    depth: false,
    stencil: false
  };
  this.test = {
    depth: false,
    stencil: false
  };
  this.color = new Color();
};
var Scene3D = /*#__PURE__*/function (_Node) {
  _inherits(Scene3D, _Node);

  var _super = _createSuper(Scene3D);

  function Scene3D() {
    var _this;

    _classCallCheck(this, Scene3D);

    _this = _super.call(this);
    _this.context = new SceneContext();
    _this.camera = new Camera();
    return _this;
  }

  _createClass(Scene3D, [{
    key: "addChild",
    value: function addChild(node) {
      if (node.parent) {
        node.parent.removeChild(node);
      }

      _get(_getPrototypeOf(Scene3D.prototype), "addChild", this).call(this, node);

      node.scene = this;
    }
  }, {
    key: "removeChild",
    value: function removeChild(node) {
      _get(_getPrototypeOf(Scene3D.prototype), "removeChild", this).call(this, node);

      node.scene = undefined;
    }
  }]);

  return Scene3D;
}(Node);

var FAILS_ON_PRIMITIVES = fails(function () {
  objectKeys(1);
}); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys

_export({
  target: 'Object',
  stat: true,
  forced: FAILS_ON_PRIMITIVES
}, {
  keys: function keys(it) {
    return objectKeys(toObject(it));
  }
});

var Material = function Material(option) {
  var _this = this;

  _classCallCheck(this, Material);

  this.program = new Program();
  this.program.vertex.updateSource(option.vertexShader);
  this.program.fragment.updateSource(option.fragmentShader);
  this.uniforms = option.uniforms;

  if (this.uniforms) {
    var textureCount = -1;
    Object.keys(this.uniforms).forEach(function (key) {
      var o = _this.uniforms[key];

      if (o.value instanceof Texture) {
        _this.program.addUniform(new Uniform(key, o, ++textureCount));
      } else {
        _this.program.addUniform(new Uniform(key, o));
      }
    });
  }
};

var XMaterial = /*#__PURE__*/function (_Material) {
  _inherits(XMaterial, _Material);

  var _super = _createSuper(XMaterial);

  function XMaterial(option) {
    var _this;

    _classCallCheck(this, XMaterial);

    _this = _super.call(this, option);

    _this.program.addAttribute(new ShaderVar('position', VarFormat.Float, ShaderVarFormat.Vector2));

    return _this;
  }

  return XMaterial;
}(Material);
var XModel = /*#__PURE__*/function (_Model) {
  _inherits(XModel, _Model);

  var _super2 = _createSuper(XModel);

  function XModel() {
    var _this2;

    _classCallCheck(this, XModel);

    _this2 = _super2.call(this);
    var vertices = [-1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0];

    _this2.mesh.vertexBuffer.allocate(vertices.length);

    _this2.mesh.vertexBuffer.put(vertices);

    var indices = [0, 1, 2, 0, 2, 3];

    _this2.mesh.indexBuffer.allocate(indices.length);

    _this2.mesh.indexBuffer.put(indices);

    return _this2;
  }

  _createClass(XModel, [{
    key: "material",
    set: function set(material) {
      this.mesh.material = material;
    }
  }]);

  return XModel;
}(Model);

var XRenderer = /*#__PURE__*/function (_BaseRenderer) {
  _inherits(XRenderer, _BaseRenderer);

  var _super = _createSuper(XRenderer);

  function XRenderer(canvas) {
    var _this;

    _classCallCheck(this, XRenderer);

    _this = _super.call(this);
    _this.canvas = canvas;
    _this.scene = new Scene3D(); // this.scene.context.color.b = 1;

    _this.model = new XModel();
    _this.mesh = _this.model.mesh;

    _this.scene.addChild(_this.model);

    _this._uniform0 = {
      texture0: {
        value: new Texture()
      },
      texture1: {
        value: new Texture()
      },
      progress: {
        value: 0
      },
      resolution: {
        value: new Vec2(0.0, 0.0)
      }
    };
    return _this;
  }

  _createClass(XRenderer, [{
    key: "setup",
    value: function setup(option) {
      _get(_getPrototypeOf(XRenderer.prototype), "setup", this).call(this, option, undefined);

      GLGraphics.setup(this.canvas);
      var transition = option.transition;
      this.mesh.material = new XMaterial({
        vertexShader: transition.vertexShader,
        fragmentShader: transition.fragmentShader,
        uniforms: Object.assign({}, this._uniform0, transition.uniforms)
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      _get(_getPrototypeOf(XRenderer.prototype), "dispose", this).call(this);

      GLGraphics.deleteProgram(this.mesh.material.program);
      this.mesh.material = undefined;
    }
  }, {
    key: "render",
    value: function render(i0, i1, progress) {
      GLGraphics.clear(this.scene.context);
      GLGraphics.renderModel(this.model);
    }
  }, {
    key: "resize",
    value: function resize(w, h) {
      this.scene.camera.setViewport(0, 0, w, h);
    }
  }]);

  return XRenderer;
}(BaseRenderer);

var View = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(View, _EventDispatcher);

  var _super = _createSuper(View);

  function View() {
    var _this;

    _classCallCheck(this, View);

    _this = _super.call(this);
    _this.dom = new Dom();
    _this.slide = new Slide();
    _this.renderer = {
      "default": new DefaultRenderer(),
      gl: undefined
    };
    return _this;
  }

  _createClass(View, [{
    key: "setup",
    value: function setup(selector, option) {
      this.dom.setup(selector);

      if (this.dom.pager) {
        this.pager = this.pager || new Pager();
        this.pager.setup(this.dom);
      }

      if (this.dom.prev) {
        this.prev = this.prev || new Button();
        this.prev.setup(this.dom.prev);
      }

      if (this.dom.next) {
        this.next = this.next || new Button();
        this.next.setup(this.dom.next);
      }

      this.renderer["default"].setup(option, this.slide);
      this.renderer.gl = this.selectRenderer(option);
      this.renderer.gl.setup(option, this.slide);
      this.slide.setup(this.dom, this.renderer.gl.mesh);
    }
  }, {
    key: "selectRenderer",
    value: function selectRenderer(option) {
      //TODO: ie fallback
      if (option.debug) {
        return new DefaultRenderer();
      } else {
        // return option.renderer || new ThreeRenderer(this.dom.canvas);
        return option.renderer || new XRenderer(this.dom.canvas);
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this.pager) {
        this.pager.off('index', this._onBubble);
        this.pager.dispose();
      }

      if (this.prev) {
        this.prev.dispose();
      }

      if (this.next) {
        this.next.dispose();
      }

      this.slide.dispose();
      this.renderer.gl.dispose();
      this.renderer["default"].dispose();
      this.dom.dispose();
    }
  }, {
    key: "resize",
    value: function () {
      var _resize = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var w, h;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                w = this.dom.width, h = this.dom.height;
                this.dom.canvas.setAttribute('width', w);
                this.dom.canvas.setAttribute('height', h);
                this.renderer["default"].resize(w, h);
                this.renderer.gl.resize(w, h);
                _context.next = 7;
                return this.slide.resize(w, h);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function resize() {
        return _resize.apply(this, arguments);
      }

      return resize;
    }()
  }]);

  return View;
}(EventDispatcher);

var XSlider = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(XSlider, _EventDispatcher);

  var _super = _createSuper(XSlider);

  function XSlider() {
    var _this2;

    var _this;

    _classCallCheck(this, XSlider);

    _this = _super.call(this);
    _this.state = new State();
    _this.view = new View();
    _this.controller = new Controller(_this.state, _this.view);
    Object.assign(_assertThisInitialized(_this), {
      prev: _this.controller._onPrev,
      next: _this.controller._onNext,
      autoplay: {
        start: _this.controller.services.autoplay.start,
        stop: _this.controller.services.autoplay.stop
      }
    });

    (_this2 = _this).setup.apply(_this2, arguments);

    return _this;
  }

  _createClass(XSlider, [{
    key: "setup",
    value: function setup() {
      // console.log('args: ', args);
      if (this.isSetup) this.dispose();
      this.isSetup = true;
      this.state.setup(arguments.length <= 1 ? undefined : arguments[1]);
      this.view.setup(arguments.length <= 0 ? undefined : arguments[0], this.state.option);
      this.controller.setup();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.isSetup = false;
      this.controller.dispose();
      this.view.dispose();
      this.state.dispose();
    }
  }]);

  return XSlider;
}(EventDispatcher);

/**
 * It's based on {@link https://gl-transitions.com/editor/crosswarp crosswarp by Eke Péter}.
 */

var CrossWarpTransition = BaseTransition.extend({
  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tfloat v = mix(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-p.x)*gradient.x+p.y*gradient.y));\n\tv = clamp(v, 0.0, 1.0);\n\n\tvec2 p0 = p;\n\tvec2 p1 = p;\n\n\tp0 -= 0.5;\n\tp0 *= (1.0 - v);\n\tp0 += 0.5;\n\n\tp1 -= 0.5;\n\tp1 *= v;\n\tp1 += 0.5;\n\n\tvec4 color0 = texture2D(texture0, p0);\n\tvec4 color1 = texture2D(texture1, p1);\n\n\tgl_FragColor = mix(color0, color1, v);\n}\n",
  uniforms: {
    gradient: {
      value: new Vec2(0.5, 0.5)
    }
  }
});

/**
 * It's based on {@link https://gl-transitions.com/editor/CrossZoom CrossZoom by rectalogic}.
 */

var CrossZoomTransition = BaseTransition.extend({
  fragmentShader: "\nprecision highp float;\n\n#define PI 3.141592653589793\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\nuniform float strength;\n\n\nfloat Linear_ease(in float begin, in float change, in float duration, in float time) {\n    return change * time / duration + begin;\n}\n\nfloat Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {\n    if (time == 0.0)\n        return begin;\n    else if (time == duration)\n        return begin + change;\n    time = time / (duration / 2.0);\n    if (time < 1.0)\n        return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;\n    return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;\n}\n\nfloat Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {\n    return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;\n}\n\n/* random number between 0 and 1 */\nfloat hash(in vec3 scale, in float seed) {\n    /* use the fragment position for randomness */\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvec3 crossFade(in vec2 uv, in float dissolve) {\n    return mix(texture2D(texture0, uv).rgb, texture2D(texture1, uv).rgb, dissolve);\n}\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tvec2 center = vec2(Linear_ease(0.25, 0.5, 1.0, progress), 0.5);\n\tfloat dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);\n\tfloat strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);\n\tvec3 color = vec3(0.0);\n\tfloat total = 0.0;\n\tvec2 toCenter = center - p;\n\tfloat offset = hash(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n\tfor (float t = 0.0; t <= 40.0; t++) {\n\t  float percent = (t + offset) / 40.0;\n\t  float weight = 4.0 * (percent - percent * percent);\n\t  color += crossFade(p + toCenter * percent * strength, dissolve) * weight;\n\t  total += weight;\n\t  gl_FragColor = vec4(color / total, 1.0);\n\t}\n}\n",
  uniforms: {
    strength: {
      value: 1.0
    }
  }
});

/**
 * It's based on {@link https://gl-transitions.com/editor/cube cube by gre}.
 */

var CubeTransition = BaseTransition.extend({
  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec4 bgColor;\n\nuniform float floating;\nuniform float unzoom;\nuniform float perspective;\nuniform float reflection;\n\n\nvec2 project (vec2 p) {\n  return p * vec2(1.0, -1.2) + vec2(0.0, -floating/100.0);\n}\n\nbool inBounds (vec2 p) {\n  return all(lessThan(vec2(0.0), p)) && all(lessThan(p, vec2(1.0)));\n}\n\n/**\n * persp 0-1 1:\u6B63\u5BFE\n * center 1.0:from 0.0:to\n */\nvec2 xskew (vec2 p, float persp, float center) {\n  float x = mix(p.x, 1.0-p.x, center);\n  float d = distance(center, 0.5);\n  return (\n    (vec2( x, (p.y - 0.5 * (1.0 - persp) * x) / (1.0 + (persp - 1.0) * x)) - vec2(0.5 - d, 0.0))\n    * vec2(0.5 / d * -sign(center-0.5), 1.0)\n    + vec2(center, 0.0)\n  );\n}\n\nvoid main(void) {\n\tvec2 uv = gl_FragCoord.xy /resolution.xy;\n\n\tfloat uz = unzoom * 2.0 * (0.5 - distance(0.5, progress));\n\tvec2 p = -uz * 0.5 + (1.0 + uz) * uv;\n\n\tvec2 fromP, toP;\n\n\tfromP = xskew(\n\t\tp / vec2(1.0-progress, 1.0),\n\t\tmix(1.0-progress, 1.0, perspective),\n\t\t1.0\n\t);\n\n\ttoP = xskew(\n\t\t(p - vec2(1.0-progress, 0.0)) / vec2(progress, 1.0),\n\t\t1.0 - mix(1.0-progress, 0.0, perspective),\n\t\t0.0\n\t);\n\n\tif (inBounds(fromP)) {\n\t\tgl_FragColor = texture2D(texture0, fromP);\n\t}\n\telse if (inBounds(toP)) {\n\t\tgl_FragColor = texture2D(texture1, toP);\n\t}\n\telse {\n\t\tfromP = project(fromP);\n\t\ttoP = project(toP);\n\n\t\tvec4 color0 = texture2D(texture0, fromP);\n\t\tvec4 color1 = texture2D(texture1, toP);\n\n\t\tgl_FragColor = bgColor\n\t\t\t+ float(inBounds(fromP)) * mix(bgColor, color0, reflection * mix(1.0, 0.0, fromP.y))\n\t\t\t+ float(inBounds(toP)) * mix(bgColor, color1, reflection * mix(1.0, 0.0, toP.y));\n\t}\n\n\n\n\n}\n",
  uniforms: {
    bgColor: {
      value: new Vec4(0.1, 0.1, 0.1, 1.0)
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

/**
 * It's based on {@link https://gl-transitions.com/editor/morph morph by paniq}.
 */

var MorphTransition = BaseTransition.extend({
  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\nuniform float strength;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\tvec2 oa = (((c0.rg + c0.b) * 0.5) * 2.0 - 1.0);\n\tvec2 ob = (((c1.rg + c1.b) * 0.5) * 2.0 - 1.0);\n\tvec2 oc = mix(oa,ob,0.5)*strength;\n\n\t// float v = smoothstep(0.0, 1.0, progress * (1.0+fade.x+fade.y) - ((1.0-p.x)*fade.x+p.y*fade.y));\n\tfloat v = progress;\n\n\tc0 = texture2D(texture0, p + oc * v);\n\tc1 = texture2D(texture1, p - oc * (1.0 - v));\n\n\tgl_FragColor = mix(c0, c1, v);\n}\n",
  uniforms: {
    strength: {
      value: 1.0
    }
  }
});

var _uniforms;
/**
 * It's based on {@link https://logik-matchbook.org/shader/crok_transitions crok_transitions by Gaëtan Renaudeau}.
 */

var NoiseTransition = BaseTransition.extend({
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
  }, _defineProperty(_uniforms, "dark_low", {
    value: 200
  }), _defineProperty(_uniforms, "dark_high", {
    value: 255
  }), _defineProperty(_uniforms, "contrast", {
    value: 1
  }), _defineProperty(_uniforms, "brightness", {
    value: 1
  }), _defineProperty(_uniforms, "saturation", {
    value: 100
  }), _defineProperty(_uniforms, "light_tint", {
    value: new Vec3(0.5, 0.5, 0.5)
  }), _defineProperty(_uniforms, "dark_tint", {
    value: new Vec3(0.2, 0.2, 0.2)
  }), _defineProperty(_uniforms, "t_amount", {
    value: 0.5
  }), _defineProperty(_uniforms, "exposure", {
    value: 30
  }), _defineProperty(_uniforms, "horzFuzzOpt", {
    value: 10
  }), _defineProperty(_uniforms, "rgbOffsetOpt", {
    value: 20
  }), _uniforms)
});

var PixelateTransition = BaseTransition.extend({
  fragmentShader: "\nprecision highp float;\n\n\n#define N 10.0\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution;\t//0.0-1.0\n\tfloat aspect = resolution.x / resolution.y;\n\tfloat v = min(progress, 1.0 - progress) * 2.0;\t//0.0-1.0\n\tv = floor(v * 30.0) / 30.0;\n\n\tif(v > 0.0) {\n\t\tvec2 steps = vec2(aspect, 1.0) * N / v;\n\t\n\t\tp -= 0.5;\n\t\n\t\tsteps = min(steps, resolution.xy);\n\t\tp = (floor(p * steps) + 0.5) / steps;\n\t\n\t\tp += 0.5;\n\t}\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\tgl_FragColor = mix(c0, c1, progress);\n}\n",
  uniforms: {}
});

var PixelateWipeTransition = BaseTransition.extend({
  fragmentShader: "\n\nprecision highp float;\n\n#define N 10.0\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution;\n\tfloat aspect = resolution.x / resolution.y;\n\n\tfloat v = mix(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-p.x)*gradient.x+p.y*gradient.y));\n\tv = clamp(v, 0.0, 1.0);\n\tv = floor(v * 16.0) / 16.0;\n\n\tif(v!=0.0) {\n\t\tp -= 0.5;\n\t\n\t\tfloat pv = min(v, 1.0 - v) * 2.0;\t//0.0-1.0\n\t\tvec2 steps = vec2(aspect, 1.0) * N / pv;\n\t\tsteps = min(steps, resolution.xy);\n\t\tp = (floor(p * steps) + 0.5) / steps;\n\t\n\t\tp += 0.5;\n\t}\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\t// v = step(0.5, v);\n\n\tgl_FragColor = mix(c0, c1, v);\n}\n",
  uniforms: {
    gradient: {
      value: new Vec2(0.5, 0)
    }
  }
});

var transitions = /*#__PURE__*/Object.freeze({
__proto__: null,
BaseTransition: BaseTransition,
CrossWarpTransition: CrossWarpTransition,
CrossZoomTransition: CrossZoomTransition,
CubeTransition: CubeTransition,
MorphTransition: MorphTransition,
NoiseTransition: NoiseTransition,
PixelateTransition: PixelateTransition,
PixelateWipeTransition: PixelateWipeTransition
});

XSlider.stage = stage;
Object.assign(XSlider, transitions, Vec, Matrix);
XSlider.Debug = Option.Debug;

if (typeof window !== 'undefined') {
  window.XSlider = XSlider;
}

return XSlider;

})));
