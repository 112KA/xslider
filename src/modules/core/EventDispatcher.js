export class EventDispatcher {
  constructor() {
    this._listeners = {};
    this._properties = {};

    this._bindMethods(['_onBubble']);
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

  /**
   * propertiesの値のうちいずれかが更新されていたら、${type}をdispatch
   *
   * @param {String} type - event name
   * @param {Object} properties
   */
  setTogether(type, properties) {
    if (!properties) return;
    let updated = false,
      values = {},
      values0 = {};

    for (let key in properties) {
      if (
        (this._properties[key] === undefined && properties[key] !== undefined) ||
        this._properties[key] !== properties[key]
      ) {
        updated = true;
      }
      values0[key] = this._properties[key];
      values[key] = this._properties[key] = properties[key];
    }

    if (updated) {
      this.dispatch(type, {
        type,
        values,
        values0,
      });
    }
  }

  dispatch(type, options) {
    !type && console.error('invalid Event type', type);
    if (this._listeners.hasOwnProperty(type)) {
      this._listeners[type].forEach(o => {
        let tmp = options || { type };
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

  _onBubble(e) {
    this.dispatch(e.type, e);
  }
}
