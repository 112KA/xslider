(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
typeof define === 'function' && define.amd ? define(factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.XSlider = factory());
}(this, (function () { 'use strict';

var XSLIDER_VERSION = "1.0.10"

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

  getQuery: function getQuery(key, cached) {
    if ( cached === void 0 ) cached = true;

    if (!this._query || !cached) {
      this._query = {};
      //最初の?を除いた文字列を取得
      var query = window.location.search.substring(1);
      var parameters = query.split('&');
      for (var i = 0; i < parameters.length; i++) {
        var element = parameters[i].split('=');
        var paramName = decodeURIComponent(element[0]);
        var paramValue = decodeURIComponent(element[1]);
        this._query[paramName] = paramValue;
      }
    }
    return this._query[key];
  },

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

var Vec2 = function Vec2(x, y) {
  if ( x === void 0 ) x = 0;
  if ( y === void 0 ) y = 0;

  this.set(x, y);
};

var prototypeAccessors = { x: { configurable: true },y: { configurable: true } };

Vec2.prototype.set = function set (x, y) {
  this.data = [x, y];
};

prototypeAccessors.x.get = function () {
  return this.data[0];
};
prototypeAccessors.y.get = function () {
  return this.data[1];
};

prototypeAccessors.x.set = function (v) {
  this.data[0] = v;
};
prototypeAccessors.y.set = function (v) {
  this.data[1] = v;
};

Object.defineProperties( Vec2.prototype, prototypeAccessors );

var Vec3 = function Vec3(x, y, z) {
  if ( x === void 0 ) x = 0;
  if ( y === void 0 ) y = 0;
  if ( z === void 0 ) z = 0;

  this.set(x, y, z);
};

var prototypeAccessors$1 = { x: { configurable: true },y: { configurable: true },z: { configurable: true } };

Vec3.prototype.set = function set (x, y, z) {
  this.data = [x, y, z];
};

prototypeAccessors$1.x.get = function () {
  return this.data[0];
};
prototypeAccessors$1.y.get = function () {
  return this.data[1];
};
prototypeAccessors$1.z.get = function () {
  return this.data[2];
};

prototypeAccessors$1.x.set = function (v) {
  this.data[0] = v;
};
prototypeAccessors$1.y.set = function (v) {
  this.data[1] = v;
};
prototypeAccessors$1.z.set = function (v) {
  this.data[2] = v;
};

Object.defineProperties( Vec3.prototype, prototypeAccessors$1 );

var Vec4 = function Vec4(x, y, z, w) {
  if ( x === void 0 ) x = 0;
  if ( y === void 0 ) y = 0;
  if ( z === void 0 ) z = 0;
  if ( w === void 0 ) w = 0;

  this.set(x, y, z, w);
};

var prototypeAccessors$2 = { width: { configurable: true },height: { configurable: true },x: { configurable: true },y: { configurable: true },z: { configurable: true },w: { configurable: true } };

Vec4.prototype.set = function set (x, y, z, w) {
  this.data = [x, y, z, w];
};

prototypeAccessors$2.width.set = function (v) {
  this.data[2] = v;
};

prototypeAccessors$2.width.get = function () {
  return this.data[2];
};

prototypeAccessors$2.height.set = function (v) {
  this.data[3] = v;
};

prototypeAccessors$2.height.get = function () {
  return this.data[3];
};

prototypeAccessors$2.x.get = function () {
  return this.data[0];
};
prototypeAccessors$2.y.get = function () {
  return this.data[1];
};
prototypeAccessors$2.z.get = function () {
  return this.data[2];
};
prototypeAccessors$2.w.get = function () {
  return this.data[3];
};

prototypeAccessors$2.x.set = function (v) {
  this.data[0] = v;
};
prototypeAccessors$2.y.set = function (v) {
  this.data[1] = v;
};
prototypeAccessors$2.z.set = function (v) {
  this.data[2] = v;
};
prototypeAccessors$2.w.set = function (v) {
  this.data[3] = v;
};

Vec4.prototype.equals = function equals (v) {
  return this.x === v.x && this.y == v.y && this.z == v.z && this.w == v.w;
};

Object.defineProperties( Vec4.prototype, prototypeAccessors$2 );

var BaseTransition = {
  vertexShader: "\nattribute vec2 position;\n\nvoid main(void) {\n\tgl_Position = vec4(position, 0.0, 1.0);\n}\n",

  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 uv = gl_FragCoord.xy /resolution.xy;\n\tvec4 color0 = texture2D(texture0, uv);\n\tvec4 color1 = texture2D(texture1, uv);\n\tfloat v = smoothstep(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-uv.x)*gradient.x+uv.y*gradient.y));\n\tgl_FragColor = mix(color0, color1, v);\n}\n",

  uniforms: {
    gradient: { value: new Vec2(1.0, 1.0) },
  },

  extend: function extend(o) {
    return Utils.extend(this, o);
  },
};

var Option = {
  //default value
  selector: '#xslider',
  initialSlideIndex: 0,
  autoplay: false,
  loop: true,
  touchMove: {
    throwable: true,
  },
  renderer: undefined,
  debug: false,
  easing: 0.15,

  transition: BaseTransition,

  get: function (property, module) {
    if (module) {
      if (!this[module]) {
        return undefined;
      } else {
        return this[module][property];
      }
    } else {
      return this[property];
    }
  },
};

Option.Debug = {
  DISPLAY: {
    DOM: 'DEBUG_DISPLAY_DOM',
    SVG: 'DEBUG_DISPLAY_SVG',
    IMG: 'DEBUG_DISPLAY_IMG',
  },
};

var EventDispatcher = function EventDispatcher() {
  this._listeners = {};
  this._properties = {};
};

var prototypeAccessors$3 = { listeners: { configurable: true } };

prototypeAccessors$3.listeners.get = function () {
  return this._listeners;
};

EventDispatcher.prototype.get = function get (key) {
  return this._properties[key];
};

EventDispatcher.prototype.set = function set (properties) {
  if (!properties) { return; }

  for (var key in properties) {
    if (
      (this._properties[key] === undefined && properties[key] !== undefined) ||
      this._properties[key] !== properties[key]
    ) {
      var v0 = this._properties[key];
      this._properties[key] = properties[key];

      this.dispatch(key, {
        type: key,
        value: this._properties[key],
        value0: v0,
      });
    }
  }
};

EventDispatcher.prototype.dispatch = function dispatch (type, options) {
  if (this._listeners.hasOwnProperty(type)) {
    this._listeners[type].forEach(function (o) {
      var tmp = options || { type: type };
      o.listener(tmp);
    });
  }
};

EventDispatcher.prototype.on = function on (type, listener) {
  this.off(type, listener);

  if (!this._listeners.hasOwnProperty(type)) {
    this._listeners[type] = [];
  }

  this._listeners[type].push({ type: type, listener: listener });

  return this;
};

EventDispatcher.prototype.off = function off (type, listener) {
    var this$1 = this;

  if (type) {
    if (!listener) {
      delete this._listeners[type];
    } else if (this._listeners.hasOwnProperty(type)) {
      this._listeners[type].some(function (elem, i) {
        if (elem.listener == listener) { this$1._listeners[type].splice(i, 1); }
      });
      if (this._listeners[type].length == 0) {
        delete this._listeners[type];
      }
    }
  } else {
    for (var type$1 in this._listeners) {
      delete this._listeners[type$1];
    }
  }

  return this;
};

Object.defineProperties( EventDispatcher.prototype, prototypeAccessors$3 );

var Environment = /*@__PURE__*/(function (EventDispatcher) {
  function Environment() {
    EventDispatcher.call(this);

    console.info('xslider ver.', XSLIDER_VERSION);
    // if(!THREE) {
    // 	console.error("xslider depend on three.js");
    // }
    // if(!domtoimage) {
    // 	console.error("xslider depend on dom-to-image");
    // }
  }

  if ( EventDispatcher ) Environment.__proto__ = EventDispatcher;
  Environment.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  Environment.prototype.constructor = Environment;

  var prototypeAccessors = { support: { configurable: true } };

  prototypeAccessors.support.get = function () {
    return Environment.support;
  };

  Object.defineProperties( Environment.prototype, prototypeAccessors );

  return Environment;
}(EventDispatcher));

Environment.support = {
  touch: 'ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch),
  pointer: window.navigator.pointerEnabled,
  MSPointer: window.navigator.msPointerEnabled,
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
  END: types[2],
};

var InteractiveObject = /*@__PURE__*/(function (EventDispatcher) {
  function InteractiveObject() {
    EventDispatcher.call(this);

    this._defineHandlers();

    this.on('target', this._on.changeTarget);
  }

  if ( EventDispatcher ) InteractiveObject.__proto__ = EventDispatcher;
  InteractiveObject.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  InteractiveObject.prototype.constructor = InteractiveObject;

  InteractiveObject.prototype._defineHandlers = function _defineHandlers () {
    var this$1 = this;

    this._on = {
      bubble: function (e) {
        this$1.dispatch(e.type, e);
      },

      changeTarget: function (o) {
        if (o.value0) {
          for (var type in this$1._listeners) {
            this$1._autoRemoveListener(o.value0, type);
          }
        }
        this$1.off();
      },

      touch: function (e) {
        if (env.support.touch) {
          var touch = e.touches[0];
          if (touch) {
            e.clientX = touch.clientX;
            e.clientY = touch.clientY;
          } else {
            e.clientX = this$1.clientX0;
            e.clientY = this$1.clientY0;
          }
        }

        if (!this$1.clientX0) {
          this$1.clientX0 = e.clientX;
          this$1.clientY0 = e.clientY;
        }

        e.clientX0 = this$1.clientX0;
        e.clientY0 = this$1.clientY0;

        this$1.clientX0 = e.clientX;
        this$1.clientY0 = e.clientY;

        this$1.dispatch(e.type, e);
      },

      touchStart: function (e) {
        this$1.clientX0 = this$1.clientY0 = undefined;
      },
    };
  };

  InteractiveObject.prototype.dispose = function dispose () {
    this.off();
  };

  InteractiveObject.prototype.on = function on (type, listener, options) {
    EventDispatcher.prototype.on.call(this, type, listener, options);

    var target = this.get('target');
    this._autoAddListener(target, type);

    return this;
  };

  InteractiveObject.prototype.off = function off (type, listener) {
    EventDispatcher.prototype.off.call(this, type, listener);

    var target = this.get('target');
    this._autoRemoveListener(target, type);

    return this;
  };

  InteractiveObject.prototype._autoAddListener = function _autoAddListener (target, type) {
    if (!target) { return; }

    if (this._listeners[type].length == 1) {
      switch (type) {
        case TouchEvent.START:
        case TouchEvent.MOVE:
        case TouchEvent.END:
          target.addEventListener(type, this._on.touch);
          break;
        case 'click':
          target.addEventListener(type, this._on.bubble);
          break;
      }

      if (type == TouchEvent.MOVE) {
        target.addEventListener(TouchEvent.START, this._on.touchStart);
      }
    }
  };

  InteractiveObject.prototype._autoRemoveListener = function _autoRemoveListener (target, type) {
    if (!target) { return; }

    if (!this._listeners[type] || this._listeners[type].length == 0) {
      switch (type) {
        case TouchEvent.START:
        case TouchEvent.MOVE:
        case TouchEvent.END:
          target.removeEventListener(type, this._on.touch);
          break;
        case 'click':
          target.removeEventListener(type, this._on.bubble);
          break;
      }

      if (type == TouchEvent.MOVE) {
        target.removeEventListener(TouchEvent.START, this._on.touchStart);
      }
    }
  };

  return InteractiveObject;
}(EventDispatcher));

var Ticker = /*@__PURE__*/(function (EventDispatcher) {
  function Ticker() {
    EventDispatcher.call(this);

    this.fps = 30;

    this._defineFunctions();
  }

  if ( EventDispatcher ) Ticker.__proto__ = EventDispatcher;
  Ticker.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  Ticker.prototype.constructor = Ticker;

  var prototypeAccessors = { fps: { configurable: true },time: { configurable: true } };

  Ticker.prototype._defineFunctions = function _defineFunctions () {
    var this$1 = this;

    var prefixes = ['ms', 'moz', 'webkit', 'o'];
    var i = prefixes.length;

    while (--i > -1 && !window.requestAnimationFrame) {
      window.requestAnimationFrame = window[prefixes[i] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame =
        window[prefixes[i] + 'CancelAnimationFrame'] ||
        window[prefixes[i] + 'CancelRequestAnimationFrame'];
    }

    this._tickHandler = function () {
      this$1._requestId = window.requestAnimationFrame(this$1._tickHandler);

      this$1._lastMs = this$1.time;

      var overlap = this$1._lastMs - this$1._nextMs;

      if (overlap >= 0) {
        var t0 = this$1._nextMs;
        this$1._nextMs += overlap + (overlap >= this$1._gap ? 1 : this$1._gap - overlap);
        this$1.dispatch('tick', {
          type: 'tick',
          time: this$1._lastMs - this$1._startMs,
          dt: this$1._nextMs - t0,
        });
      }
    };
  };

  prototypeAccessors.fps.get = function () {
    return this._fps;
  };

  prototypeAccessors.fps.set = function (v) {
    this._fps = v;
    this._gap = (1 / (v || 60)) * 1000;
  };

  prototypeAccessors.time.get = function () {
    return Date.now() || new Date().getTime();
  };

  Ticker.prototype.start = function start () {
    this._startMs = this.time;
    this._nextMs = this._startMs + this._gap;
    this._requestId = window.requestAnimationFrame(this._tickHandler);
  };

  Ticker.prototype.stop = function stop () {
    window.cancelAnimationFrame(this._requestId);
  };

  Object.defineProperties( Ticker.prototype, prototypeAccessors );

  return Ticker;
}(EventDispatcher));

var Stage = /*@__PURE__*/(function (InteractiveObject) {
  function Stage() {
    InteractiveObject.call(this);

    this.ticker = new Ticker();

    this.set({ target: window });
  }

  if ( InteractiveObject ) Stage.__proto__ = InteractiveObject;
  Stage.prototype = Object.create( InteractiveObject && InteractiveObject.prototype );
  Stage.prototype.constructor = Stage;

  var prototypeAccessors = { width: { configurable: true },height: { configurable: true } };

  Stage.prototype.ready = function ready () {
    return new Promise(function (resolve, reject) {
      var loaded = function () {
        document.removeEventListener('DOMContentLoaded', loaded),
          window.removeEventListener('load', loaded);

        resolve();
      };

      if (document.readyState === 'complete') {
        resolve();
      } else {
        document.addEventListener('DOMContentLoaded', loaded),
          window.addEventListener('load', loaded);
      }
    });
  };

  prototypeAccessors.width.get = function () {
    return window.innerWidth || document.documentElement.clientWidth || 0;
  };

  prototypeAccessors.height.get = function () {
    return window.innerHeight || document.documentElement.clientHeight || 0;
  };

  Stage.prototype._autoAddListener = function _autoAddListener (target, type) {
    if (!target) { return; }

    InteractiveObject.prototype._autoAddListener.call(this, target, type);

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
  };

  Stage.prototype._autoRemoveListener = function _autoRemoveListener (target, type) {
    if (!target) { return; }

    InteractiveObject.prototype._autoRemoveListener.call(this, target, type);

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
  };

  Object.defineProperties( Stage.prototype, prototypeAccessors );

  return Stage;
}(InteractiveObject));

//singleton
var stage = new Stage();

var Dom = /*@__PURE__*/(function (EventDispatcher) {
  function Dom() {
    EventDispatcher.call(this);

    this._defineHandlers();

    // this.canvas = document.createElement('canvas');
  }

  if ( EventDispatcher ) Dom.__proto__ = EventDispatcher;
  Dom.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  Dom.prototype.constructor = Dom;

  var prototypeAccessors = { width: { configurable: true },height: { configurable: true } };

  Dom.prototype._defineHandlers = function _defineHandlers () {
    var this$1 = this;

    this._onResize = function (e) {
      if (this$1._width != this$1.width || this$1._height != this$1.height) {
        this$1._width = this$1.width;
        this$1._height = this$1.height;
        this$1.dispatch('resize', { type: 'resize', width: this$1._width, height: this$1._height });
      }
    };
  };

  prototypeAccessors.width.get = function () {
    return this.container.clientWidth;
  };

  prototypeAccessors.height.get = function () {
    return this.container.clientHeight;
  };

  Dom.prototype.setup = function setup (selector) {
    this.container = document.querySelector(selector);
    this.container.classList.add('xslider-container');

    this.view = this.container.querySelector('.xslider-view');
    this.slides = this.view.querySelectorAll('.xslider-slide');

    this.pager = this.container.querySelector('.xslider-pager');
    this.prev = this.container.querySelector('.xslider-prev');
    this.next = this.container.querySelector('.xslider-next');

    stage.on('resize', this._onResize);
  };

  Dom.prototype.dispose = function dispose () {
    this._width = this._height = undefined;
    stage.off('resize', this._onResize);
    this.container.classList.remove('xslider-container', 'xslider-debug');
  };

  Object.defineProperties( Dom.prototype, prototypeAccessors );

  return Dom;
}(EventDispatcher));

var Net = function Net() {
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
    svg: 'image/svg+xml',
  };
};

Net.prototype.loadImage = function loadImage (image, src) {
  return new Promise(function (resolve, reject) {
    var check = function () {
      if (!image.complete) {
        setTimeout(check, 10);
      } else {
        resolve();
      }
    };

    image.src = src;

    check();
  });
};

Net.prototype.get = function get (url, responseType) {
  return new Promise(function (resolve, reject) {
    var onChange = function () {
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

    var onTimeout = function () {
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
};

// async getDataURI(url) {
// 	let blob;
// 	blob = await this.get(url, 'blob');
// 	blob = await this.readBlob(blob);
// 	return blob;
// }
Net.prototype.getDataURI = function getDataURI (url) {
    var this$1 = this;

  var ext = this.parseExtension(url);

  return this.get(url, 'blob').then(function (blob) {
    return this$1.readBlob.bind(this$1)(blob, ext);
  });
};

Net.prototype.parseExtension = function parseExtension (url) {
  var match = /\.([^\.\/]*?)$/g.exec(url);
  if (match) { return match[1]; }
  else { return null; }
};

Net.prototype.getMimeType = function getMimeType (ext) {};

Net.prototype.readBlob = function readBlob (blob, ext) {
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
};

var net = new Net();

var Cloner = function Cloner() {};

Cloner.prototype.copyStyle = function copyStyle (original, target, excludes) {
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
    for (var i$1 = 0; i$1 < original.length; i$1++) {
      var name$1 = original[i$1];
      target.setProperty(
        name$1,
        original.getPropertyValue(name$1),
        original.getPropertyPriority(name$1)
      );
    }
  }

  Object.getOwnPropertyNames(o).forEach(function (name) {
    target.setProperty(name, o[name]);
  });
};

Cloner.prototype.cloneNode = function cloneNode (original) {
    var this$1 = this;

  var clone = original.cloneNode(false);

  return new Promise(function (resolve, reject) {
    if (!(original instanceof Element)) {
      resolve(clone);
    } else {
      this$1.copyStyle(window.getComputedStyle(original), clone.style);

      if (original.hasChildNodes()) {
        var children = original.childNodes;

        var arr = [];

        children.forEach(function (child, i, list) {
          var p = this$1.cloneNode(child).then(function (childClone) {
            // clone.appendChild(childClone);
            this$1.insertChildAtIndex(clone, childClone, i);
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
};

Cloner.prototype.insertChildAtIndex = function insertChildAtIndex (parent, child, index) {
  if (!index) { index = 0; }
  if (index >= parent.childNodes.length) {
    parent.appendChild(child);
  } else {
    parent.insertBefore(child, parent.childNodes[index]);
  }
};

Cloner.prototype.cloneStyle = function cloneStyle (original, target, excludes) {
    var this$1 = this;

  if (!(original instanceof Element)) { return target; }

  this.copyStyle(window.getComputedStyle(original), target.style, excludes);

  if (original.hasChildNodes()) {
    var children = original.childNodes;
    children.forEach(function (child, i, list) {
      this$1.cloneStyle(child, target.childNodes[i], excludes);
    });
  } else {
    return target;
  }
};

var cloner = new Cloner();

var Inliner = {
  URL_REGEX: /url\(['"]?([^'"]+?)['"]?\)/g,

  resolveFonts: function resolveFonts() {
    var this$1 = this;

    return new Promise(function (resolve, reject) {
      if (this$1.inlinedFontString) {
        resolve();
      } else {
        var fontStrings = this$1.readFontRules().map(function (rule) { return rule.cssText; });
        this$1.inlineFonts(fontStrings).then(function (inlinedFontStrings) {
          this$1.inlinedFontString = inlinedFontStrings.join(' ');
          // this.inlinedFontString = inlinedFontStrings.join("\n");
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
    }

    // console.log("fontRules", fontRules)

    return fontRules;
  },

  inlineFonts: function inlineFonts(fontStrings) {
    var this$1 = this;

    var arr = fontStrings.map(function (string) { return this$1._inline(string); });
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

    return Promise.all(arr).then(function () { return string; });
  },

  searchUrls: function searchUrls(string) {
    var this$1 = this;

    var result = [];
    var match;
    while ((match = this.URL_REGEX.exec(string)) !== null) {
      result.push(match[1]);
    }
    return result.filter(function (url) {
      return this$1.isDataURI(url);
    });
  },

  inlineImage: function inlineImage(node) {
    var this$1 = this;

    return new Promise(function (resolve, reject) {
      Promise.resolve(node)
        .then(this$1.inlineImageElement.bind(this$1))
        .then(this$1.inlineBackgroundImage.bind(this$1))
        .then(function () {
          if (node.hasChildNodes()) {
            var children = node.childNodes;
            var arr = [];

            children.forEach(function (child, i, list) {
              var p = this$1.inlineImage(child);
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

  inlineImageElement: function (node) {
    if (!(node instanceof HTMLImageElement)) { return node; }

    if (this.isDataURI(node.src)) { return node; }

    // return node;

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
    if (!(node instanceof Element)) { return node; }

    var background = node.style.getPropertyValue('background');
    if (!background) { return node; }

    return this._inline(background).then(function (inlined) {
      node.style.setProperty('background', inlined);
      return node;
    });
  },

  isDataURI: function isDataURI(string) {
    return string.search(/^(data:)/) === -1;
  },
};

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

    var svgString =
      "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" +
      width +
      "\" height=\"" +
      height +
      "\">\n\t\t<foreignObject x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">\n\t\t</foreignObject>\n\t\t</svg>";

    var svg = this.parser.parseFromString(svgString, 'text/xml'),
      styleNode = document.createElement('style');

    styleNode.appendChild(document.createTextNode(Inliner.inlinedFontString));
    node.appendChild(styleNode);

    var o = svg.getElementsByTagName('foreignObject')[0];
    o.appendChild(node);

    // console.log('svg: ', svg.childNodes[0]);

    return svg;
  },
};

var Slide = function Slide(slide, debug) {
  this.element = slide;
  this.debug = debug;
  this.canvas = document.createElement('canvas');
  this.image = new Image();
  this.layer = {
    gl: slide.querySelector('.xslider-layer-gl'),
    ui: slide.querySelector('.xslider-layer-ui'),
  };

  if (this.debug == Option.Debug.DISPLAY.IMG) {
    this.element.insertBefore(this.image, this.layer.gl);
  }

  // this.element.insertBefore(this.canvas, this.layer.gl);

  this.inlinedNode = undefined;
  this.needsResize = false;
};

Slide.prototype.dispose = function dispose () {
  this.layer.gl && this.layer.gl.classList.remove('xslider-capture');
};

Slide.prototype.ready = function ready () {
    var this$1 = this;

  return new Promise(function (resolve, reject) {
    //処理済
    if (this$1.inlinedNode) {
      resolve();
    }
    //textureなし
    else if (!this$1.layer.gl) {
      resolve();
    } else {
      Inliner.inlineNode(this$1.layer.gl).then(function (inlined) {
        this$1.inlinedNode = inlined;

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
};

Slide.prototype.loadSvg = function loadSvg (w, h) {
  this.svg = converter.convert(this.inlinedNode, w, h);

  var string = new XMLSerializer().serializeToString(this.svg);
  // console.log('string', string)
  // string = string.replace(/#/g, '%23').replace(/\n/g, '%0A')
  var uri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(string);

  if (this.debug == Option.Debug.DISPLAY.SVG) {
    if (this._svg0 === undefined) {
      this._svg0 = this.element.insertBefore(this.svg.childNodes[0], this.layer.gl);
    } else {
      var node = this.svg.childNodes[0];
      this.element.replaceChild(node, this._svg0);
      this._svg0 = node;
    }
  }
  return net.loadImage(this.image, uri);
};

Slide.prototype.resize = function resize (w, h) {
    var this$1 = this;

  return new Promise(function (resolve, reject) {
    if (!this$1.needsResize) {
      resolve();
    } else {
      this$1.needsResize = false;

      this$1.canvas.width = w;
      this$1.canvas.height = h;

      if (this$1.layer.gl) {
        this$1.layer.gl.classList.add('xslider-capture');

        cloner.cloneStyle(this$1.layer.gl, this$1.inlinedNode, Slide.EXCLUDES);

        this$1.layer.gl.classList.remove('xslider-capture');

        this$1.loadSvg(w, h).then(function () {
          var c = this$1.canvas.getContext('2d');
          c.clearRect(0, 0, w, h);
          c.drawImage(this$1.image, 0, 0, w, h);
          // console.log(this.image, w, h);

          resolve();
        });
      } else {
        resolve();
      }
    }
  });
};

Slide.EXCLUDES = ['background', 'left', 'right', 'width', 'height'];

var SlideContainer = /*@__PURE__*/(function (EventDispatcher) {
  function SlideContainer() {
    EventDispatcher.call(this);

    this._defineHandlers();

    this.width = this.height = -1;
  }

  if ( EventDispatcher ) SlideContainer.__proto__ = EventDispatcher;
  SlideContainer.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  SlideContainer.prototype.constructor = SlideContainer;

  SlideContainer.prototype._defineHandlers = function _defineHandlers () {
    var this$1 = this;

    this._onChangeSlide = function (e) {
      // console.log(e);

      var removeOld = false;

      switch (e.type) {
        case 'slide0':
          this$1.updateSlide(0);
          removeOld = e.value0 !== undefined;
          break;
        case 'slide1':
          this$1.updateSlide(1);
          removeOld = e.value0 !== undefined && e.value0 !== this$1.get('slide0');
          break;
      }

      if (removeOld) {
        e.value0.element.classList.remove('xslider-slide-active');
      }
    };
  };

  SlideContainer.prototype.ready = function ready (indexer) {
    var this$1 = this;

    var slide0 = indexer.data.list[indexer.i0];
    var slide1 = undefined;

    var arr = [slide0.ready()];

    if (indexer.i1 !== undefined) {
      slide1 = indexer.data.list[indexer.i1];
      arr.push(slide1.ready());
    }

    return Promise.all(arr).then(function () {
      this$1.set({ slide0: slide0, slide1: slide1 });
    });
  };

  SlideContainer.prototype.setup = function setup (mesh) {
    this.mesh = mesh;
    if (this.mesh) {
      this.uniforms = this.mesh.material.uniforms;
    }

    this.on('slide0', this._onChangeSlide);
    this.on('slide1', this._onChangeSlide);
  };

  SlideContainer.prototype.dispose = function dispose () {
    this.off('slide0', this._onChangeSlide);
    this.off('slide1', this._onChangeSlide);

    var slide0 = this.get('slide0');
    var slide1 = this.get('slide1');
    slide0.element.classList.remove('xslider-slide-active');
    slide1 && slide1.element.classList.remove('xslider-slide-active');
  };

  SlideContainer.prototype.resize = function resize (w, h) {
    this.width = w;
    this.height = h;

    if (this.mesh) {
      this.uniforms.resolution.value.set(w, h);
    }

    return Promise.all([this.updateSlide(0), this.updateSlide(1)]);
  };

  SlideContainer.prototype.updateSlide = function updateSlide (slideIndex) {
    var this$1 = this;

    if (this.width == -1 && this.height == -1) { return; }

    var slide = this.get('slide' + slideIndex);

    return new Promise(function (resolve, reject) {
      // console.log(this.uniforms);
      // console.log(this.uniforms.texture0.value.image);
      // console.log(this.uniforms.texture1.value.image);
      // console.log(slide);
      // console.log(slideIndex, this.uniforms.texture0.value.image == this.uniforms.texture1.value.image);

      if (!slide) {
        if (this$1.uniforms) {
          var texture = this$1.uniforms['texture' + slideIndex].value;
          texture.image = undefined;
          texture.needsUpdate = true;
        }
        resolve();
      }

      slide.element.classList.add('xslider-slide-active');

      slide.resize(this$1.width, this$1.height).then(function () {
        if (this$1.uniforms) {
          var texture = this$1.uniforms['texture' + slideIndex].value;
          texture.image = slide.canvas;
          texture.needsUpdate = true;
        }

        resolve();
      });
    });
  };

  return SlideContainer;
}(EventDispatcher));

var BaseRenderer = /*@__PURE__*/(function (EventDispatcher) {
  function BaseRenderer() {
    EventDispatcher.call(this);
  }

  if ( EventDispatcher ) BaseRenderer.__proto__ = EventDispatcher;
  BaseRenderer.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  BaseRenderer.prototype.constructor = BaseRenderer;

  BaseRenderer.prototype.setup = function setup (data, container) {
    this.data = data;
    this.container = container;
  };

  BaseRenderer.prototype.dispose = function dispose () {};

  BaseRenderer.prototype.render = function render (indexer) {};

  BaseRenderer.prototype.resize = function resize (w, h) {
    this.width = w;
    this.height = h;
  };

  return BaseRenderer;
}(EventDispatcher));

var GLRenderer = /*@__PURE__*/(function (BaseRenderer) {
  function GLRenderer() {
    BaseRenderer.call(this);

    this.canvas = document.createElement('canvas');

    this._defineHandlers();
  }

  if ( BaseRenderer ) GLRenderer.__proto__ = BaseRenderer;
  GLRenderer.prototype = Object.create( BaseRenderer && BaseRenderer.prototype );
  GLRenderer.prototype.constructor = GLRenderer;

  GLRenderer.prototype._defineHandlers = function _defineHandlers () {};

  GLRenderer.prototype.setup = function setup (data, container) {
    BaseRenderer.prototype.setup.call(this, data, container);

    data.dom.container.insertBefore(this.canvas, data.dom.view);
  };

  GLRenderer.prototype.dispose = function dispose () {
    BaseRenderer.prototype.dispose.call(this);

    this.container.off('updateTexture', this._onUpdateTexture);

    this.data.dom.container.removeChild(this.canvas);
  };

  GLRenderer.prototype.render = function render (indexer) {
    BaseRenderer.prototype.render.call(this, indexer);

    this.container.uniforms.progress.value = indexer.progress;
    if (this.container.uniforms.time) {
      this.container.uniforms.time.value = this.data.time;
    }
  };

  GLRenderer.prototype.resize = function resize (w, h) {
    BaseRenderer.prototype.resize.call(this, w, h);
  };

  return GLRenderer;
}(BaseRenderer));

var DefaultRenderer = /*@__PURE__*/(function (BaseRenderer) {
  function DefaultRenderer() {
    BaseRenderer.call(this);

    this._defineHandlers();
  }

  if ( BaseRenderer ) DefaultRenderer.__proto__ = BaseRenderer;
  DefaultRenderer.prototype = Object.create( BaseRenderer && BaseRenderer.prototype );
  DefaultRenderer.prototype.constructor = DefaultRenderer;

  DefaultRenderer.prototype._defineHandlers = function _defineHandlers () {
    var this$1 = this;

    this.dx = 0;
    this._onTick = function (e) {
      console.log('e: ', e);

      this$1.dx = 30 * Math.sin(e.time / 1000);

      var slide0 = this$1.data.list[0];
      if (slide0) {
        slide0.layer.ui.style.webkitTransform = 'translate(' + this$1.dx + 'px, 0)';
      }
    };
  };

  DefaultRenderer.prototype.setup = function setup (data, container) {
    BaseRenderer.prototype.setup.call(this, data, container);
  };

  DefaultRenderer.prototype.dispose = function dispose () {
    BaseRenderer.prototype.dispose.call(this);
  };

  DefaultRenderer.prototype.render = function render (indexer) {
    BaseRenderer.prototype.render.call(this, indexer);

    var slide0 = this.data.list[indexer.i0],
      slide1 = this.data.list[indexer.i1];

    var opacity = 1.0 - Utils.clamp(indexer.progress, 0, 0.5) / 0.5;
    var dx = -indexer.progress * this.width;
    this.updateSlide(slide0, opacity, dx);

    if (slide0 != slide1) {
      opacity = Utils.clamp(indexer.progress - 0.5, 0, 0.5) / 0.5;
      dx = (1 - indexer.progress) * this.width;
      this.updateSlide(slide1, opacity, dx);
    }

    // stage.on("tick", this._onTick);
  };

  DefaultRenderer.prototype.resize = function resize (w, h) {
    BaseRenderer.prototype.resize.call(this, w, h);
  };

  DefaultRenderer.prototype.updateSlide = function updateSlide (slide, opacity, dx) {
    if (!slide || !slide.layer.ui) { return; }

    slide.layer.ui.style.webkitTransform = 'translate(' + dx + 'px, 0) scale(1)';
    // slide.layer.ui.style.opacity = opacity;
  };

  return DefaultRenderer;
}(BaseRenderer));

var Asset = /*@__PURE__*/(function (EventDispatcher) {
  function Asset() {
    EventDispatcher.call(this);

    this.needsUpdate = true;

    this.location = undefined;
  }

  if ( EventDispatcher ) Asset.__proto__ = EventDispatcher;
  Asset.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  Asset.prototype.constructor = Asset;

  return Asset;
}(EventDispatcher));

var VarFormat = {
  Byte: 'BYTE',
  UnsignedByte: 'UNSIGNED_BYTE',
  Short: 'SHORT',
  UnsignedShort: 'UNSIGNED_SHORT',
  Int: 'INT',
  UnsignedInt: 'UNSIGNED_INT',
  Float: 'FLOAT',
};

var getTypedArrayByFormat = function (format, length) {
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

var Buffer = /*@__PURE__*/(function (Asset) {
  function Buffer(format, bufferType, usage) {
    Asset.call(this);

    this.format = format;
    this.bufferType = bufferType;
    this.usage = usage;

    this.data = getTypedArrayByFormat(this.format, 1);
  }

  if ( Asset ) Buffer.__proto__ = Asset;
  Buffer.prototype = Object.create( Asset && Asset.prototype );
  Buffer.prototype.constructor = Buffer;

  Buffer.prototype.clear = function clear () {
    this.position = 0;
    this.limit = 0;
    this.needsUpdate = true;
  };

  Buffer.prototype.allocate = function allocate (length) {
    if (this.data.length < length) {
      this.extend(length);
    }
    this.clear();
  };

  Buffer.prototype.get = function get (offset, length) {
    if ( length === void 0 ) length = 1;

    return this.data.subarray(offset, length);
  };

  Buffer.prototype.put = function put (original) {
    if (original instanceof Array || original instanceof Float32Array) {
      this.data.set(original, this.position);
      this.position += original.length;
    } else {
      this.data[this.position] = original;
      this.position += 1;
    }

    this.limit = this.position;

    this.needsUpdate = true;
  };

  Buffer.prototype.update = function update (original, offset) {
    if (original instanceof Array || original instanceof Float32Array) {
      this.data.set(original, offset);
    } else {
      this.data[offset] = original;
    }

    this.needsUpdate = true;
  };

  Buffer.prototype.extend = function extend (length) {
    var tmp = this.data;
    var v = tmp.length;
    while (v < length) {
      v *= 2;
    }
    this.data = getTypedArrayByFormat(this.format, v);
    this.data.set(tmp);
  };

  return Buffer;
}(Asset));

Buffer.Usage = {
  Static: 'STATIC_DRAW',
  Dynamic: 'DYNAMIC_DRAW',
  Stream: 'STREAM_DRAW',
};

Buffer.Type = {
  Interleaved: 'Interleaved',
  Index: 'Index',
};

var IndexBuffer = /*@__PURE__*/(function (Buffer) {
  function IndexBuffer(drawMode) {
    Buffer.call(this, VarFormat.UnsignedShort, Buffer.Type.Index, Buffer.Usage.Static);

    this.drawMode = drawMode;
  }

  if ( Buffer ) IndexBuffer.__proto__ = Buffer;
  IndexBuffer.prototype = Object.create( Buffer && Buffer.prototype );
  IndexBuffer.prototype.constructor = IndexBuffer;

  return IndexBuffer;
}(Buffer));

IndexBuffer.DrawMode = {
  Triangles: 'TRIANGLES',
};

var Texture = /*@__PURE__*/(function (Asset) {
  function Texture(src) {
    Asset.call(this);

    this.image = undefined;

    if (src) {
      this.setup(src);
    }
  }

  if ( Asset ) Texture.__proto__ = Asset;
  Texture.prototype = Object.create( Asset && Asset.prototype );
  Texture.prototype.constructor = Texture;

  Texture.prototype.setup = function setup (src) {
    var this$1 = this;

    if (!this.image) {
      this.image = new Image();
    }
    return new Promise(function (resolve, reject) {
      if (this$1.image.src != src) {
        this$1.needsUpdate = false;
        this$1.image.src = src;
        this$1.image.onload = function () {
          this$1.needsUpdate = true;
          resolve();
        };
      } else {
        resolve();
      }
    });
  };

  return Texture;
}(Asset));

var Matrix3 = function Matrix3() {
  this.identity();
};

Matrix3.prototype.identity = function identity () {
  this.data = [1, 0, 0, 0, 1, 0, 0, 0, 1];
};

Matrix3.prototype.copy = function copy (dst) {
  for (var i = 0; i < this.data.length; i++) {
    dst.data[i] = this.data.length;
  }
};

Matrix3.prototype.translate = function translate () {};

Matrix3.prototype.rotate = function rotate () {};

Matrix3.prototype.update = function update (x, y, r, sx, sy) {
  var s = Math.sin(r);
  var c = Math.cos(r);

  var data = this.data;
  data[0] = c * sx;
  data[1] = s * sx;

  data[3] = -s * sy;
  data[4] = c * sy;

  data[6] = x;
  data[7] = y;
};

var Matrix4 = function Matrix4() {
  this.identity();
};

Matrix4.prototype.identity = function identity () {
  this.data = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
};

Matrix4.prototype.copy = function copy (dst) {
  for (var i = 0; i < this.data.length; i++) {
    dst.data[i] = this.data.length;
  }
};

Matrix4.prototype.perspective = function perspective (fov, aspect, near, far) {
  var n2 = near * 2;
  fov = (fov * Math.PI) / 180;

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
};

Matrix4.prototype.update = function update (x, y, z, rx, ry, rz, sx, sy, sz) {
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
};

var ShaderVarFormat = {
  Int: 'Int',
  Float: 'Float',
  Vector2: 'Vector2',
  Vector3: 'Vector3',
  Vector4: 'Vector4',
  Matrix3: 'Matrix3',
  Matrix4: 'Matrix4',
};

var getSizeFromShaderVarFormat = function (format) {
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

var ShaderVar = /*@__PURE__*/(function (Asset) {
  function ShaderVar(name, varFormat, shaderVarFormat) {
    Asset.call(this);

    this.name = name;
    this.format = varFormat;
    this.shaderVarFormat = shaderVarFormat;

    this.offset = 0;
    this.size = getSizeFromShaderVarFormat(shaderVarFormat);
  }

  if ( Asset ) ShaderVar.__proto__ = Asset;
  ShaderVar.prototype = Object.create( Asset && Asset.prototype );
  ShaderVar.prototype.constructor = ShaderVar;

  return ShaderVar;
}(Asset));

var Uniform = /*@__PURE__*/(function (ShaderVar) {
  function Uniform(name, valueObject, textureUnit) {
    if ( textureUnit === void 0 ) textureUnit = -1;

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

    ShaderVar.call(this, name, varFormat, shaderVarFormat);

    this.valueObject = valueObject;
    this.textureUnit = textureUnit;
  }

  if ( ShaderVar ) Uniform.__proto__ = ShaderVar;
  Uniform.prototype = Object.create( ShaderVar && ShaderVar.prototype );
  Uniform.prototype.constructor = Uniform;

  return Uniform;
}(ShaderVar));

Uniform.Binding = {
  Projection: 'projectionMatrix',
  ModelView: 'modelViewMatrix',
};

var Shader = /*@__PURE__*/(function (Asset) {
  function Shader(type) {
    Asset.call(this);

    this.type = type;
  }

  if ( Asset ) Shader.__proto__ = Asset;
  Shader.prototype = Object.create( Asset && Asset.prototype );
  Shader.prototype.constructor = Shader;

  Shader.prototype.updateSource = function updateSource (source) {
    this.source = source;
  };

  return Shader;
}(Asset));

Shader.VERTEX = 'VERTEX_SHADER';
Shader.FRAGMENT = 'FRAGMENT_SHADER';

var Program = /*@__PURE__*/(function (Asset) {
  function Program() {
    Asset.call(this);

    this.vertex = new Shader(Shader.VERTEX);
    this.fragment = new Shader(Shader.FRAGMENT);

    this.attributes = [];
    this.uniforms = [];

    this.stride = 0;

    // this.uniformBuffer = new Buffer(VarFormat.Float, Buffer.Type.Interleaved, Buffer.Usage.Static);
    // this.uniformBuffserSize = 0;
  }

  if ( Asset ) Program.__proto__ = Asset;
  Program.prototype = Object.create( Asset && Asset.prototype );
  Program.prototype.constructor = Program;

  Program.prototype.addAttribute = function addAttribute (attribute) {
    this.attributes.push(attribute);
    this.needsUpdate = true;
  };

  Program.prototype.addUniform = function addUniform (uniform) {
    this.uniforms.push(uniform);
    this.needsUpdate = true;
  };

  Program.prototype.update = function update () {
    this.stride = 0;

    var bytes_per_float = 4;

    for (var i = 0; i < this.attributes.length; i++) {
      var a = this.attributes[i];
      a.offset = this.stride;
      this.stride += bytes_per_float * a.size;
    }

    // this.uniformBuffserSize = 0;
    // for(let i=0; i<this.uniforms.length; i++) {
    //     let u = this.uniforms[i];
    //     u.offset = this.uniformBuffserSize;
    //     this.uniformBufferSize += bytes_per_float * u.size;
    // }

    // this.uniformBuffer.allocate(this.uniformBufferSize);
  };

  return Program;
}(Asset));

var GraphicsContext = {
  bound: {
    sceneContext: undefined,
    program: undefined,
    viewport: new Vec4(),
  },

  test: {
    depth: false,
    stensil: false,
  },

  reset: function () {
    this.bound = {
      sceneContext: undefined,
      program: undefined,
      viewport: new Vec4(),
    };

    this.test = {
      depth: false,
      stensil: false,
    };
  },
};

var GLGraphics = {
  setup: function (canvas) {
    var params = {
      alpha: true,
      premultipliedAlpha: false,
    };
    this._gl =
      canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);
    if (!this.context) {
      this.context = GraphicsContext;
    } else {
      this.context.reset();
    }
  },

  updateTexture: function (texture, textureUnit) {
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
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          1,
          1,
          0,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          new Uint8Array([0, 0, 0, 0])
        );
      }
    }
  },

  deleteTexture: function (texture) {
    if (texture.location) {
      this._gl.deleteTexture(texture.location);
      texture.location = undefined;
    }
  },

  updateProgram: function (program) {
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

    for (var i$1 = 0; i$1 < program.uniforms.length; i$1++) {
      this.updateUniform(program.uniformBuffer, program.uniforms[i$1]);
    }
  },

  deleteProgram: function (program) {
    var gl = this._gl;

    if (program.location) {
      gl.deleteProgram(program.location);
    }
  },

  updateShader: function (shader) {
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

  deleteShader: function (shader) {
    var gl = this._gl;

    if (shader.location) {
      gl.deleteShader(shader.location);
      shader.location = undefined;
    }
  },

  updateAttribute: function (attribute, stride) {
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

  updateUniform: function (buffer, uniform) {
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

  updateBuffer: function (buffer) {
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

  updateSceneContext: function (sceneContext) {
    if (this.context.bound.sceneContext === sceneContext) { return; }

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

  updateCamera: function (camera) {
    this.context.bound.camera = camera;

    var v = camera.viewport;

    if (!this.context.bound.viewport.equals(v)) {
      this.context.bound.viewport.set(v.x, v.y, v.z, v.w);
      this._gl.viewport(v.x, v.y, v.width, v.height);
    }
  },

  clear: function (sceneContext) {
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

  renderModel: function (model) {
    this.context.bound.model = model;

    if (model.scene) {
      this.updateSceneContext(model.scene.context);
    }

    this.updateCamera(model.scene.camera);

    this.renderMesh(model.mesh);
  },

  renderMesh: function (mesh, mat) {
    var gl = this._gl;

    this.updateBuffer(mesh.vertexBuffer);
    this.updateProgram(mesh.material.program);

    var bf = mesh.indexBuffer;

    this.updateBuffer(bf);
    gl.drawElements(gl[bf.drawMode], bf.limit, gl[bf.format], 0);
  },
};

var Color = function Color() {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 1;
};

Color.prototype.set = function set (r, g, b, a) {
  this.r = r;
  this.g = g;
  this.b = b;
  this.a = a;
};

var Mesh = /*@__PURE__*/(function (EventDispatcher) {
  function Mesh() {
    EventDispatcher.call(this);

    this.vertexBuffer = new Buffer(VarFormat.Float, Buffer.Type.Interleaved, Buffer.Usage.Static);
    this.indexBuffer = new IndexBuffer(IndexBuffer.DrawMode.Triangles);
  }

  if ( EventDispatcher ) Mesh.__proto__ = EventDispatcher;
  Mesh.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  Mesh.prototype.constructor = Mesh;

  return Mesh;
}(EventDispatcher));

// import {Matrix3, Matrix4} from '../../../geom/Matrix'

var Node = /*@__PURE__*/(function (EventDispatcher) {
  function Node() {
    EventDispatcher.call(this);

    this.children = [];

    this.matrix = {};
  }

  if ( EventDispatcher ) Node.__proto__ = EventDispatcher;
  Node.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  Node.prototype.constructor = Node;

  Node.prototype.addChild = function addChild (node) {
    this.children.push(node);
    node.parent = this;
  };

  Node.prototype.removeChild = function removeChild (node) {
    node.parent = undefined;

    var index = this.children.indexOf(node);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  };

  return Node;
}(EventDispatcher));

// export class Node2D extends Node {
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

var Model = /*@__PURE__*/(function (Node) {
  function Model() {
    Node.call(this);

    this.mesh = new Mesh();
  }

  if ( Node ) Model.__proto__ = Node;
  Model.prototype = Object.create( Node && Node.prototype );
  Model.prototype.constructor = Model;

  return Model;
}(Node));

var Camera = /*@__PURE__*/(function (Node) {
  function Camera() {
    Node.call(this);

    this.viewport = new Vec4();

    // this.matrix.projection = new Matrix4();
    // this.matrix.view = new Matrix4();
    // this.matrix.viewProjection = new Matrix4();
  }

  if ( Node ) Camera.__proto__ = Node;
  Camera.prototype = Object.create( Node && Node.prototype );
  Camera.prototype.constructor = Camera;

  // perspective(fov, aspect, near, far) {
  //     this.matrix.projection.perspective(fov, aspect, near, far);
  // }

  Camera.prototype.setViewport = function setViewport (x, y, width, height) {
    this.viewport.set(x, y, width, height);
    // this.perspective(60, width/height, 0.1, 100);
  };

  return Camera;
}(Node));

var SceneContext = function SceneContext() {
  this.clear = {
    color: true,
    depth: false,
    stencil: false,
  };

  this.test = {
    depth: false,
    stencil: false,
  };

  this.color = new Color();
};

var Scene3D = /*@__PURE__*/(function (Node) {
  function Scene3D() {
    Node.call(this);

    this.context = new SceneContext();

    this.camera = new Camera();
  }

  if ( Node ) Scene3D.__proto__ = Node;
  Scene3D.prototype = Object.create( Node && Node.prototype );
  Scene3D.prototype.constructor = Scene3D;

  Scene3D.prototype.addChild = function addChild (node) {
    if (node.parent) {
      node.parent.removeChild(node);
    }

    Node.prototype.addChild.call(this, node);

    node.scene = this;
  };

  Scene3D.prototype.removeChild = function removeChild (node) {
    Node.prototype.removeChild.call(this, node);

    node.scene = undefined;
  };

  return Scene3D;
}(Node));

var Material = function Material(option) {
  var this$1 = this;

  this.program = new Program();
  this.program.vertex.updateSource(option.vertexShader);
  this.program.fragment.updateSource(option.fragmentShader);

  this.uniforms = option.uniforms;

  if (this.uniforms) {
    var textureCount = -1;
    Object.keys(this.uniforms).forEach(function (key) {
      var o = this$1.uniforms[key];
      if (o.value instanceof Texture) {
        this$1.program.addUniform(new Uniform(key, o, ++textureCount));
      } else {
        this$1.program.addUniform(new Uniform(key, o));
      }
    });
  }
};

var XMaterial = /*@__PURE__*/(function (Material) {
  function XMaterial(option) {
    Material.call(this, option);

    this.program.addAttribute(new ShaderVar('position', VarFormat.Float, ShaderVarFormat.Vector2));
  }

  if ( Material ) XMaterial.__proto__ = Material;
  XMaterial.prototype = Object.create( Material && Material.prototype );
  XMaterial.prototype.constructor = XMaterial;

  return XMaterial;
}(Material));

var XModel = /*@__PURE__*/(function (Model) {
  function XModel() {
    Model.call(this);

    var vertices = [-1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0];

    this.mesh.vertexBuffer.allocate(vertices.length);
    this.mesh.vertexBuffer.put(vertices);

    var indices = [0, 1, 2, 0, 2, 3];
    this.mesh.indexBuffer.allocate(indices.length);
    this.mesh.indexBuffer.put(indices);
  }

  if ( Model ) XModel.__proto__ = Model;
  XModel.prototype = Object.create( Model && Model.prototype );
  XModel.prototype.constructor = XModel;

  var prototypeAccessors = { material: { configurable: true } };

  prototypeAccessors.material.set = function (material) {
    this.mesh.material = material;
  };

  Object.defineProperties( XModel.prototype, prototypeAccessors );

  return XModel;
}(Model));

var XRenderer = /*@__PURE__*/(function (GLRenderer) {
  function XRenderer() {
    GLRenderer.call(this);

    this.scene = new Scene3D();
    // this.scene.context.color.b = 1;
    this.model = new XModel();
    this.mesh = this.model.mesh;

    this.scene.addChild(this.model);

    this._uniform0 = {
      texture0: { value: new Texture() },
      texture1: { value: new Texture() },
      progress: { value: 0 },
      resolution: { value: new Vec2(0.0, 0.0) },
    };
  }

  if ( GLRenderer ) XRenderer.__proto__ = GLRenderer;
  XRenderer.prototype = Object.create( GLRenderer && GLRenderer.prototype );
  XRenderer.prototype.constructor = XRenderer;

  XRenderer.prototype.setup = function setup (data, container) {
    GLRenderer.prototype.setup.call(this, data, container);

    GLGraphics.setup(this.canvas);

    var transition = data.option.transition;

    this.mesh.material = new XMaterial({
      vertexShader: transition.vertexShader,
      fragmentShader: transition.fragmentShader,
      uniforms: Utils.extend(transition.uniforms, this._uniform0),
    });
  };

  XRenderer.prototype.dispose = function dispose () {
    GLRenderer.prototype.dispose.call(this);

    GLGraphics.deleteProgram(this.mesh.material.program);
    this.mesh.material = undefined;
  };

  XRenderer.prototype.render = function render (indexer) {
    GLRenderer.prototype.render.call(this, indexer);

    GLGraphics.clear(this.scene.context);
    GLGraphics.renderModel(this.model);
  };

  XRenderer.prototype.resize = function resize (w, h) {
    GLRenderer.prototype.resize.call(this, w, h);

    this.canvas.setAttribute('width', w);
    this.canvas.setAttribute('height', h);

    this.scene.camera.setViewport(0, 0, w, h);
  };

  return XRenderer;
}(GLRenderer));

var Data = function Data() {
  this.dom = new Dom();
  this.time = 0;
};

Data.prototype.setup = function setup () {
    var this$1 = this;
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

  this.option = Utils.extend(Option, args[1] || {});

  this.dom.setup(args[0]);

  if (this.option.debug == Option.Debug.DISPLAY.DOM) {
    this.dom.container.classList.add('xslider-debug');
  }

  this.list = [];

  this.dom.slides.forEach(function (element) {
    this$1.list.push(new Slide(element, this$1.option.debug));
  });
};

Data.prototype.dispose = function dispose () {
  if (!this.option) { return; }

  this.list.forEach(function (slide) {
    slide.dispose();
  });
  this.dom.dispose();

  this.option = undefined;
};

Data.prototype.getRenderer = function getRenderer () {
  if (this.option.debug) {
    return new DefaultRenderer();
  } else {
    // return this.option.renderer || new ThreeRenderer();
    return this.option.renderer || new XRenderer();
  }
};

var AutoPlay = /*@__PURE__*/(function (EventDispatcher) {
  function AutoPlay() {
    EventDispatcher.call(this);

    this._defineHandlers();
  }

  if ( EventDispatcher ) AutoPlay.__proto__ = EventDispatcher;
  AutoPlay.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  AutoPlay.prototype.constructor = AutoPlay;

  var prototypeAccessors = { enabled: { configurable: true } };

  AutoPlay.prototype._defineHandlers = function _defineHandlers () {
    var this$1 = this;

    this._on = {
      tick: function (e) {
        if (e.time > this$1.option.delay) {
          this$1.dispatch(AutoPlay.EVENT.TICK);
        }
      },
    };
  };

  prototypeAccessors.enabled.get = function () {
    return this.option != undefined;
  };

  AutoPlay.prototype.setup = function setup (option) {
    this.option = option;
  };

  AutoPlay.prototype.start = function start () {
    if (this.enabled) {
      stage.on('tick', this._on.tick);
    }
  };

  AutoPlay.prototype.stop = function stop () {
    if (this.enabled) {
      stage.off('tick', this._on.tick);
    }
  };

  Object.defineProperties( AutoPlay.prototype, prototypeAccessors );

  return AutoPlay;
}(EventDispatcher));

AutoPlay.EVENT = {
  TICK: 'autoplay_tick',
};

var Indexer = /*@__PURE__*/(function (EventDispatcher) {
  function Indexer() {
    EventDispatcher.call(this);
  }

  if ( EventDispatcher ) Indexer.__proto__ = EventDispatcher;
  Indexer.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  Indexer.prototype.constructor = Indexer;

  var prototypeAccessors = { current: { configurable: true },i0: { configurable: true },i1: { configurable: true } };

  Indexer.prototype.setup = function setup (data) {
    this.data = data;

    this._target = data.option.initialSlideIndex;
    this._v = this._target - 1;
    this._length = data.dom.slides.length;

    this._state = Indexer.STATE.DEFAULT;

    this.progress = 0;

    this.set({
      head: undefined,
      tail: undefined,
    });
    !this.data.option.loop && (this._target = this.constrain(this._target));

    this.tick();
  };

  Indexer.prototype.prev = function prev () {
    this._target--;

    !this.data.option.loop && (this._target = this.constrain(this._target));
  };

  Indexer.prototype.next = function next () {
    this._target++;

    !this.data.option.loop && (this._target = this.constrain(this._target));
  };

  Indexer.prototype.to = function to (index) {
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
  };

  Indexer.prototype.down = function down () {
    this._state = Indexer.STATE.DOWN;
    this._move = 0;
  };

  Indexer.prototype.move = function move (v) {
    this._v += v;
    this._move = v;

    !this.data.option.loop && (this._v = this.constrain(this._v));

    this._target = this._v;
  };

  Indexer.prototype.up = function up () {
    this._state = Indexer.STATE.UP;

    !this.data.option.get('throwable', 'touchMove') && (this._move = 0);
  };

  prototypeAccessors.current.get = function () {
    var v = (this._target % this._length) + this._length;
    return Math.round(v) % this._length;
  };

  prototypeAccessors.i0.get = function () {
    return this._i0;
  };

  prototypeAccessors.i1.get = function () {
    return this._i1;
  };

  Indexer.prototype.constrain = function constrain (v) {
    var ret = v < 0 ? 0 : this._length - 1 < v ? this._length - 1 : v;
    this.set({
      head: ret == 0,
      tail: ret == this._length - 1,
    });
    return ret;
  };

  Indexer.prototype.tick = function tick () {
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

    var v = (this._v % this._length) + this._length;
    this.progress = v % 1;
    this._i0 = Math.floor(v) % this._length;
    var i1 = Math.ceil(v) % this._length;
    this._i1 = this._i0 !== i1 ? i1 : undefined;

    complete && this.dispatch('complete');
  };

  Object.defineProperties( Indexer.prototype, prototypeAccessors );

  return Indexer;
}(EventDispatcher));

Indexer.STATE = {
  DEFAULT: 'DEFAULT',
  DOWN: 'DOWN',
  UP: 'UP',
};

var Button = /*@__PURE__*/(function (InteractiveObject) {
  function Button() {
    InteractiveObject.call(this);
  }

  if ( InteractiveObject ) Button.__proto__ = InteractiveObject;
  Button.prototype = Object.create( InteractiveObject && InteractiveObject.prototype );
  Button.prototype.constructor = Button;

  var prototypeAccessors = { active: { configurable: true } };

  Button.prototype.setup = function setup (dom) {
    this.set({ target: dom });
  };

  prototypeAccessors.active.set = function (flag) {
    var target = this.get('target');
    if (flag) {
      target.classList.remove('xslider-disabled');
    } else {
      target.classList.add('xslider-disabled');
    }
  };

  Button.prototype.dispose = function dispose () {
    this.active = true;
  };

  Object.defineProperties( Button.prototype, prototypeAccessors );

  return Button;
}(InteractiveObject));

var Pager = /*@__PURE__*/(function (EventDispatcher) {
  function Pager() {
    EventDispatcher.call(this);

    this._defineHandlers();
  }

  if ( EventDispatcher ) Pager.__proto__ = EventDispatcher;
  Pager.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  Pager.prototype.constructor = Pager;

  Pager.prototype._defineHandlers = function _defineHandlers () {
    var this$1 = this;

    this._onClick = function (e) {
      var index = this$1.list.indexOf(e.target);
      this$1.set({ index: index });
    };

    this._onChangeIndex = function (e) {
      if (e.value0 !== undefined) {
        this$1.list[e.value0].classList.remove('xslider-active');
      }

      this$1.list[e.value].classList.add('xslider-active');
    };
  };

  Pager.prototype.setup = function setup (data) {
    this.container = data.dom.pager;
    this.list = [];

    var length = data.dom.slides.length;

    for (var i = 0; i < length; i++) {
      var span = document.createElement('span');
      this.container.appendChild(span);

      span.addEventListener('click', this._onClick);
      this.list.push(span);
    }

    this.on('index', this._onChangeIndex);
    this.set({ index: data.option.initialSlideIndex });
  };

  Pager.prototype.dispose = function dispose () {
    var this$1 = this;

    this.off('index', this._onChangeIndex);
    this.set({ index: undefined });

    this.list.forEach(function (span) {
      span.removeEventListener('click', this$1._onClick);
      this$1.container.removeChild(span);
    });
  };

  return Pager;
}(EventDispatcher));

var UI = /*@__PURE__*/(function (InteractiveObject) {
  function UI() {
    InteractiveObject.call(this);
  }

  if ( InteractiveObject ) UI.__proto__ = InteractiveObject;
  UI.prototype = Object.create( InteractiveObject && InteractiveObject.prototype );
  UI.prototype.constructor = UI;

  UI.prototype._defineHandlers = function _defineHandlers () {
    var this$1 = this;

    InteractiveObject.prototype._defineHandlers.call(this);

    this._onPrev = function (e) {
      e.preventDefault();
      this$1.dispatch(UI.EVENT.PREV);
    };

    this._onNext = function (e) {
      e.preventDefault();
      this$1.dispatch(UI.EVENT.NEXT);
    };
  };

  UI.prototype.setup = function setup (data) {
    var dom = data.dom;

    this.set({ target: dom.view });

    if (dom.pager) {
      this.pager = this.pager || new Pager();
      this.pager.setup(data);
      this.pager.on('index', this._on.bubble);
    }

    if (dom.prev) {
      this.prev = this.prev || new Button();
      this.prev.setup(dom.prev);
      this.prev.on('click', this._onPrev);
    }

    if (dom.next) {
      this.next = this.next || new Button();
      this.next.setup(dom.next);
      this.next.on('click', this._onNext);
    }
  };

  UI.prototype.dispose = function dispose () {
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
  };

  return UI;
}(InteractiveObject));

UI.EVENT = {
  PREV: 'ui_prev',
  NEXT: 'ui_next',
};

var SlideController = /*@__PURE__*/(function (EventDispatcher) {
  function SlideController() {
    EventDispatcher.call(this);

    this.indexer = new Indexer();

    this.renderer = {
      default: new DefaultRenderer(),
      gl: undefined,
    };

    this.ui = new UI();
    this.autoplay = new AutoPlay();

    this.container = new SlideContainer();

    this._defineHandlers();
  }

  if ( EventDispatcher ) SlideController.__proto__ = EventDispatcher;
  SlideController.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  SlideController.prototype.constructor = SlideController;

  SlideController.prototype._defineHandlers = function _defineHandlers () {
    var this$1 = this;

    this._onResize = function (e) {
      var w = this$1.dom.width,
        h = this$1.dom.height;

      this$1.data.list.forEach(function (slide) {
        slide.needsResize = true;
      });

      this$1.renderer.default.resize(w, h);
      this$1.renderer.gl.resize(w, h);

      return this$1.container.resize(w, h).then(function () {
        this$1.renderer.gl.render(this$1.indexer);
      });
    };

    this._onCompleteSlide = function () {
      stage.off('tick', this$1._onTick);
      this$1.data.option.get('touchMove') && this$1.ui.on(TouchEvent.START, this$1._onChange);
      this$1.ui.on('index', this$1._onChange);

      this$1.autoplay.start();
    };

    this._onTick = function (e) {
      this$1.data.time = e.time;
      this$1.indexer.tick();
      this$1.renderer.default.render(this$1.indexer);
      this$1.container.ready(this$1.indexer).then(
        function () {
          this$1.renderer.gl.render(this$1.indexer);
        },
        function (message) {
          console.log('reject ::', message);
        }
      );
      this$1.ui.pager.set({ index: this$1.indexer.current });
    };

    this._onChange = function (e) {
      switch (e.type) {
        case UI.EVENT.PREV:
          this$1.prev();
          break;

        case UI.EVENT.NEXT:
        case AutoPlay.EVENT.TICK:
          this$1.next();
          break;

        case 'index':
          this$1.indexer.to(e.value);

          this$1.container.ready(this$1.indexer).then(
            function () {
              stage.on('tick', this$1._onTick);
            },
            function (message) {
              console.log('on index rejected : ', message);
            }
          );
          break;

        case 'head':
          this$1.ui.prev && (this$1.ui.prev.active = !this$1.indexer.get('head'));
          break;

        case 'tail':
          this$1.ui.next && (this$1.ui.next.active = !this$1.indexer.get('tail'));
          break;

        case TouchEvent.START:
          stage.on(TouchEvent.MOVE, this$1._onChange);
          stage.on(TouchEvent.END, this$1._onChange);

          this$1.ui.off('index', this$1._onChange);

          this$1.indexer.down();

          this$1.autoplay.stop();

          stage.on('tick', this$1._onTick);
          break;

        case TouchEvent.MOVE:
          var dx = (e.clientX - e.clientX0) / this$1.dom.width;
          this$1.indexer.move(-dx);
          break;

        case TouchEvent.END:
          stage.off(TouchEvent.MOVE, this$1._onChange);
          stage.off(TouchEvent.END, this$1._onChange);

          this$1.indexer.up();
          break;
      }
    };
  };

  SlideController.prototype.setup = function setup (renderer, data) {
    var this$1 = this;

    this.renderer.gl = renderer;

    this.data = data;
    this.dom = data.dom;

    this.renderer.default.setup(this.data);

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

    this.autoplay.on(AutoPlay.EVENT.TICK, this._onChange);
    this.autoplay.setup(this.data.option.autoplay);

    this.dom.on('resize', this._onResize);

    Inliner.resolveFonts()
      .then(function () { return this$1.container.ready(this$1.indexer); })
      .then(this._onResize)
      .then(
        function () {
          this$1.ui.on('index', this$1._onChange);
          this$1.ui.on(UI.EVENT.PREV, this$1._onChange);
          this$1.ui.on(UI.EVENT.NEXT, this$1._onChange);

          this$1.data.option.get('touchMove') && this$1.ui.on(TouchEvent.START, this$1._onChange);

          this$1.autoplay.start();

          stage.on('tick', this$1._onTick);
        },
        function (message) {
          console.log('first ready rejected : ', message);
        }
      );
  };

  SlideController.prototype.prev = function prev () {
    this.data.option.get('touchMove') && this.ui.off(TouchEvent.START, this._onChange);
    this.autoplay.stop();
    this.indexer.prev();
    this.ui.pager.set({ index: this.indexer.current });
  };

  SlideController.prototype.next = function next () {
    this.data.option.get('touchMove') && this.ui.off(TouchEvent.START, this._onChange);
    this.autoplay.stop();
    this.indexer.next();
    this.ui.pager.set({ index: this.indexer.current });
  };

  SlideController.prototype.dispose = function dispose () {
    if (!this.data) { return; }

    stage.off('tick', this._onTick);
    stage.off(TouchEvent.MOVE, this._onChange);
    stage.off(TouchEvent.END, this._onChange);

    this.ui.off('index', this._onChange);
    this.ui.off(UI.EVENT.PREV, this._onChange);
    this.ui.off(UI.EVENT.NEXT, this._onChange);

    this.data.option.get('touchMove') && this.ui.off(TouchEvent.START, this._onChange);

    this.ui.dispose();

    this.dom.off('resize', this._onResize);

    this.indexer.off('complete', this._onCompleteSlide);

    if (!this.data.option.loop) {
      this.indexer.off('head', this._onChange);
      this.indexer.off('tail', this._onChange);
    }

    this.renderer.gl.dispose();
    this.renderer.default.dispose();

    this.container.dispose();

    this.data = undefined;
  };

  return SlideController;
}(EventDispatcher));

var XSlider = /*@__PURE__*/(function (EventDispatcher) {
  function XSlider() {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    EventDispatcher.call(this);

    this.data = new Data();
    this.controller = new SlideController();

    Utils.delegate(this, {
      prev: this.controller.prev,
      next: this.controller.next,
      autoplay: {
        start: this.controller.autoplay.start,
        stop: this.controller.autoplay.stop,
      },
    });

    (ref = this).setup.apply(ref, args);
  }

  if ( EventDispatcher ) XSlider.__proto__ = EventDispatcher;
  XSlider.prototype = Object.create( EventDispatcher && EventDispatcher.prototype );
  XSlider.prototype.constructor = XSlider;

  XSlider.prototype.setup = function setup () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    // console.log('args: ', args);

    this.dispose();

    (ref = this.data).setup.apply(ref, args);

    this.controller.setup(this.renderer, this.data);
  };

  XSlider.prototype.dispose = function dispose () {
    this.controller.dispose();
    this.data.dispose();
  };

  return XSlider;
}(EventDispatcher));

/**
 * It's based on {@link https://gl-transitions.com/editor/crosswarp crosswarp by Eke Péter}.
 */
var CrossWarpTransition = BaseTransition.extend({
  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tfloat v = mix(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-p.x)*gradient.x+p.y*gradient.y));\n\tv = clamp(v, 0.0, 1.0);\n\n\tvec2 p0 = p;\n\tvec2 p1 = p;\n\n\tp0 -= 0.5;\n\tp0 *= (1.0 - v);\n\tp0 += 0.5;\n\n\tp1 -= 0.5;\n\tp1 *= v;\n\tp1 += 0.5;\n\n\tvec4 color0 = texture2D(texture0, p0);\n\tvec4 color1 = texture2D(texture1, p1);\n\n\tgl_FragColor = mix(color0, color1, v);\n}\n",

  uniforms: {
    gradient: { value: new Vec2(0.5, 0.5) },
  },
});

/**
 * It's based on {@link https://gl-transitions.com/editor/CrossZoom CrossZoom by rectalogic}.
 */
var CrossZoomTransition = BaseTransition.extend({
  fragmentShader: "\nprecision highp float;\n\n#define PI 3.141592653589793\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\nuniform float strength;\n\n\nfloat Linear_ease(in float begin, in float change, in float duration, in float time) {\n    return change * time / duration + begin;\n}\n\nfloat Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {\n    if (time == 0.0)\n        return begin;\n    else if (time == duration)\n        return begin + change;\n    time = time / (duration / 2.0);\n    if (time < 1.0)\n        return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;\n    return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;\n}\n\nfloat Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {\n    return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;\n}\n\n/* random number between 0 and 1 */\nfloat hash(in vec3 scale, in float seed) {\n    /* use the fragment position for randomness */\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvec3 crossFade(in vec2 uv, in float dissolve) {\n    return mix(texture2D(texture0, uv).rgb, texture2D(texture1, uv).rgb, dissolve);\n}\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tvec2 center = vec2(Linear_ease(0.25, 0.5, 1.0, progress), 0.5);\n\tfloat dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);\n\tfloat strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);\n\tvec3 color = vec3(0.0);\n\tfloat total = 0.0;\n\tvec2 toCenter = center - p;\n\tfloat offset = hash(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n\tfor (float t = 0.0; t <= 40.0; t++) {\n\t  float percent = (t + offset) / 40.0;\n\t  float weight = 4.0 * (percent - percent * percent);\n\t  color += crossFade(p + toCenter * percent * strength, dissolve) * weight;\n\t  total += weight;\n\t  gl_FragColor = vec4(color / total, 1.0);\n\t}\n}\n",

  uniforms: {
    strength: { value: 1.0 },
  },
});

/**
 * It's based on {@link https://gl-transitions.com/editor/cube cube by gre}.
 */
var CubeTransition = BaseTransition.extend({
  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec4 bgColor;\n\nuniform float floating;\nuniform float unzoom;\nuniform float perspective;\nuniform float reflection;\n\n\nvec2 project (vec2 p) {\n  return p * vec2(1.0, -1.2) + vec2(0.0, -floating/100.0);\n}\n\nbool inBounds (vec2 p) {\n  return all(lessThan(vec2(0.0), p)) && all(lessThan(p, vec2(1.0)));\n}\n\n/**\n * persp 0-1 1:正対\n * center 1.0:from 0.0:to\n */\nvec2 xskew (vec2 p, float persp, float center) {\n  float x = mix(p.x, 1.0-p.x, center);\n  float d = distance(center, 0.5);\n  return (\n    (vec2( x, (p.y - 0.5 * (1.0 - persp) * x) / (1.0 + (persp - 1.0) * x)) - vec2(0.5 - d, 0.0))\n    * vec2(0.5 / d * -sign(center-0.5), 1.0)\n    + vec2(center, 0.0)\n  );\n}\n\nvoid main(void) {\n\tvec2 uv = gl_FragCoord.xy /resolution.xy;\n\n\tfloat uz = unzoom * 2.0 * (0.5 - distance(0.5, progress));\n\tvec2 p = -uz * 0.5 + (1.0 + uz) * uv;\n\n\tvec2 fromP, toP;\n\n\tfromP = xskew(\n\t\tp / vec2(1.0-progress, 1.0),\n\t\tmix(1.0-progress, 1.0, perspective),\n\t\t1.0\n\t);\n\n\ttoP = xskew(\n\t\t(p - vec2(1.0-progress, 0.0)) / vec2(progress, 1.0),\n\t\t1.0 - mix(1.0-progress, 0.0, perspective),\n\t\t0.0\n\t);\n\n\tif (inBounds(fromP)) {\n\t\tgl_FragColor = texture2D(texture0, fromP);\n\t}\n\telse if (inBounds(toP)) {\n\t\tgl_FragColor = texture2D(texture1, toP);\n\t}\n\telse {\n\t\tfromP = project(fromP);\n\t\ttoP = project(toP);\n\n\t\tvec4 color0 = texture2D(texture0, fromP);\n\t\tvec4 color1 = texture2D(texture1, toP);\n\n\t\tgl_FragColor = bgColor\n\t\t\t+ float(inBounds(fromP)) * mix(bgColor, color0, reflection * mix(1.0, 0.0, fromP.y))\n\t\t\t+ float(inBounds(toP)) * mix(bgColor, color1, reflection * mix(1.0, 0.0, toP.y));\n\t}\n\n\n\n\n}\n",

  uniforms: {
    bgColor: { value: new Vec4(0.1, 0.1, 0.1, 1.0) },
    unzoom: { value: 0.3 },
    floating: { value: 3.0 },
    perspective: { value: 0.7 },
    reflection: { value: 0.4 },
  },
});

/**
 * It's based on {@link https://gl-transitions.com/editor/morph morph by paniq}.
 */
var MorphTransition = BaseTransition.extend({
  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\nuniform float strength;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution.xy;\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\tvec2 oa = (((c0.rg + c0.b) * 0.5) * 2.0 - 1.0);\n\tvec2 ob = (((c1.rg + c1.b) * 0.5) * 2.0 - 1.0);\n\tvec2 oc = mix(oa,ob,0.5)*strength;\n\n\t// float v = smoothstep(0.0, 1.0, progress * (1.0+fade.x+fade.y) - ((1.0-p.x)*fade.x+p.y*fade.y));\n\tfloat v = progress;\n\n\tc0 = texture2D(texture0, p + oc * v);\n\tc1 = texture2D(texture1, p - oc * (1.0 - v));\n\n\tgl_FragColor = mix(c0, c1, v);\n}\n",

  uniforms: {
    strength: { value: 1.0 },
  },
});

/**
 * It's based on {@link https://logik-matchbook.org/shader/crok_transitions crok_transitions by Gaëtan Renaudeau}.
 */
var NoiseTransition = BaseTransition.extend({
  fragmentShader: "\nprecision highp float;\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n// uniform vec2 fade;\n\nuniform float dark_low, dark_high, light_low, light_high;\nuniform float brightness, contrast, saturation;\nuniform vec3 light_tint, dark_tint;\n\nuniform float rgbOffsetOpt;\nuniform float horzFuzzOpt;\nuniform float zoom;\nuniform float time;\n\nuniform float t_amount, exposure;\n\nconst vec3 lumc = vec3(0.2125, 0.7154, 0.0721);\nconst vec3 avg_lum = vec3(0.5, 0.5, 0.5);\n\n\nvec3 tint(vec3 col)\n{\n\tfloat bri = (col.x + col.y + col.z)/3.0;\n\n\tfloat v = smoothstep(dark_low, dark_high, bri);\n\tcol = mix(dark_tint * bri, col, v);\n\n\tv = smoothstep(light_low, light_high, bri);\n\tcol = mix(col, min(light_tint * col, 1.0), v);\n\n\tvec3 intensity = vec3(dot(col.rgb, lumc));\n\tvec3 sat_color = mix(intensity, col.rgb, saturation);\n\tvec3 con_color = mix(avg_lum, sat_color, contrast);\n\t\n\treturn (con_color - 1.0 + brightness) * exposure;\n}\n\n// Noise generation functions borrowed from:\n// https://github.com/ashima/webgl-noise/blob/master/src/noise2D.glsl\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n\t// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n\t// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n\t// Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n\t\t+ i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n\t// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n\t// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n\t// Normalise gradients implicitly by scaling m\n\t// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n\t// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nvoid main(void) {\n\n\tvec2 p =  gl_FragCoord.xy/resolution.xy;\n\tvec2 p0 = p;\n\tvec2 p1 = p;\n\n\tp0 -= 0.5;\n\tp1 -= 0.5;\n\tp0 *= 1.0 - progress * zoom;\n\tp1 *= 1.0 - (1.0 - progress) * zoom;\n\tp0 += 0.5;\n\tp1 += 0.5;\n\n\tfloat v = min(progress, 1.0 - progress) * 2.0;\t//0.0-1.0\n\n\tfloat fuzzOffset = snoise(vec2(time*15.0, p.y * 20.0)) * 0.0015;\n\tfloat largeFuzzOffset = snoise(vec2(time*1.0, p.y * 1.0)) * (0.003 + v * 0.01);\n\tfloat f_xoff = (fuzzOffset + largeFuzzOffset) * horzFuzzOpt * progress;\n    float b_xoff = (fuzzOffset + largeFuzzOffset) * horzFuzzOpt * (1.0 - progress);\n    \n    // float rgbOffset = rgbOffsetOpt * fuzzOffset * 300.0;\n    // float rgbOffset = rgbOffsetOpt;\n    float rgbOffset = snoise(vec2(time*15.0, 1.0)) * rgbOffsetOpt;\n\n\tvec3 f_col = vec3(\n\t\ttexture2D(texture0,\tvec2(p0.x + f_xoff -0.01 * rgbOffset * progress, p0.y)).r,\n\t\ttexture2D(texture0, vec2(p0.x + f_xoff,\t  p0.y)).g,\n\t\ttexture2D(texture0, vec2(p0.x + f_xoff +0.01 * rgbOffset * progress, p0.y)).b\n\t);\n\n\tvec3 b_col = vec3(\n\t\ttexture2D(texture1, vec2(p1.x + b_xoff -0.01 * rgbOffset * (1.0 - progress), p1.y)).r,\n\t\ttexture2D(texture1, vec2(p1.x + b_xoff,\t  p1.y)).g,\n\t\ttexture2D(texture1, vec2(p1.x + b_xoff +0.01 * rgbOffset * (1.0 - progress), p1.y)).b\n\t);\n\n\tvec3 ff_col = f_col;\n\tff_col = tint(ff_col);\n\tff_col = mix(f_col, ff_col, t_amount * progress);\n\n\tvec3 bb_col = b_col;\n\tbb_col = tint(bb_col);\n\tbb_col = mix(b_col, bb_col, t_amount * (1.0 - progress));\n\n\tgl_FragColor = vec4(mix(ff_col, bb_col, progress), 1.0);\n}\n",

  uniforms: {
    time: { value: 0 },

    zoom: { value: 0.3 },

    dark_low: { value: 100 },
    dark_high: { value: 200 },
    dark_low: { value: 200 },
    dark_high: { value: 255 },
    contrast: { value: 1 },
    brightness: { value: 1 },
    saturation: { value: 100 },
    light_tint: { value: new Vec3(0.5, 0.5, 0.5) },
    dark_tint: { value: new Vec3(0.2, 0.2, 0.2) },
    t_amount: { value: 0.5 },
    exposure: { value: 30 },
    horzFuzzOpt: { value: 10 },
    rgbOffsetOpt: { value: 20 },
  },
});

var PixelateTransition = BaseTransition.extend({
  fragmentShader: "\nprecision highp float;\n\n\n#define N 10.0\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution;\t//0.0-1.0\n\tfloat aspect = resolution.x / resolution.y;\n\tfloat v = min(progress, 1.0 - progress) * 2.0;\t//0.0-1.0\n\tv = floor(v * 30.0) / 30.0;\n\n\tif(v > 0.0) {\n\t\tvec2 steps = vec2(aspect, 1.0) * N / v;\n\t\n\t\tp -= 0.5;\n\t\n\t\tsteps = min(steps, resolution.xy);\n\t\tp = (floor(p * steps) + 0.5) / steps;\n\t\n\t\tp += 0.5;\n\t}\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\tgl_FragColor = mix(c0, c1, progress);\n}\n",

  uniforms: {},
});

var PixelateWipeTransition = BaseTransition.extend({
  fragmentShader: "\n\nprecision highp float;\n\n#define N 10.0\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float progress;\nuniform vec2 resolution;\nuniform vec2 gradient;\n\nvoid main(void) {\n\tvec2 p = gl_FragCoord.xy /resolution;\n\tfloat aspect = resolution.x / resolution.y;\n\n\tfloat v = mix(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-p.x)*gradient.x+p.y*gradient.y));\n\tv = clamp(v, 0.0, 1.0);\n\tv = floor(v * 16.0) / 16.0;\n\n\tif(v!=0.0) {\n\t\tp -= 0.5;\n\t\n\t\tfloat pv = min(v, 1.0 - v) * 2.0;\t//0.0-1.0\n\t\tvec2 steps = vec2(aspect, 1.0) * N / pv;\n\t\tsteps = min(steps, resolution.xy);\n\t\tp = (floor(p * steps) + 0.5) / steps;\n\t\n\t\tp += 0.5;\n\t}\n\n\tvec4 c0 = texture2D(texture0, p);\n\tvec4 c1 = texture2D(texture1, p);\n\n\t// v = step(0.5, v);\n\n\tgl_FragColor = mix(c0, c1, v);\n}\n",

  uniforms: {
    gradient: { value: new Vec2(0.5, 0) },
  },
});

//exports
XSlider.stage = stage;

XSlider.BaseTransition = BaseTransition;
XSlider.CrossWarpTransition = CrossWarpTransition;
XSlider.CrossZoomTransition = CrossZoomTransition;
XSlider.CubeTransition = CubeTransition;
XSlider.MorphTransition = MorphTransition;
XSlider.NoiseTransition = NoiseTransition;
XSlider.PixelateTransition = PixelateTransition;
XSlider.PixelateWipeTransition = PixelateWipeTransition;

XSlider.Vec2 = Vec2;
XSlider.Vec3 = Vec3;
XSlider.Vec4 = Vec4;
XSlider.Matrix3 = Matrix3;
XSlider.Matrix4 = Matrix4;

XSlider.Utils = Utils;
XSlider.Debug = Option.Debug;

if (typeof window !== 'undefined') {
  window.XSlider = XSlider;
}

return XSlider;

})));
