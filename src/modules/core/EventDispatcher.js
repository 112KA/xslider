export class EventDispatcher {
  constructor() {
    this._listeners = {};
    this._properties = {};
  }

  _bindMethods(methods) {
    methods.forEach(fn => (this[fn] = this[fn].bind(this)));
  }

  get listeners() {
    return this._listeners;
  }

  get(key) {
    return this._properties[key];
  }

  set(properties) {
    if (!properties) return;

    for (let key in properties) {
      if (
        (this._properties[key] === undefined && properties[key] !== undefined) ||
        this._properties[key] !== properties[key]
      ) {
        let v0 = this._properties[key];
        this._properties[key] = properties[key];

        this.dispatch(key, {
          type: key,
          value: this._properties[key],
          value0: v0,
        });
      }
    }
  }

  dispatch(type, options) {
    if (this._listeners.hasOwnProperty(type)) {
      this._listeners[type].forEach(o => {
        let tmp = options || { type: type };
        o.listener(tmp);
      });
    }
  }

  on(type, listener) {
    this.off(type, listener);

    if (!this._listeners.hasOwnProperty(type)) {
      this._listeners[type] = [];
    }

    this._listeners[type].push({ type: type, listener: listener });

    return this;
  }

  off(type, listener) {
    if (type) {
      if (!listener) {
        delete this._listeners[type];
      } else if (this._listeners.hasOwnProperty(type)) {
        this._listeners[type].some((elem, i) => {
          if (elem.listener == listener) this._listeners[type].splice(i, 1);
        });
        if (this._listeners[type].length == 0) {
          delete this._listeners[type];
        }
      }
    } else {
      for (let type in this._listeners) {
        delete this._listeners[type];
      }
    }

    return this;
  }
}
