import { expoOut } from './Utils';

class TweenProperty {
  constructor(targetObject, key, value) {
    this.targetObject = targetObject;
    this.key = key;
    this.startValue = targetObject[key];
    this.diff = value - this.startValue;
  }

  update(t) {
    this.targetObject[this.key] = this.startValue + this.diff * expoOut(t);
  }

  complete() {
    this.targetObject[this.key] = this.startValue + this.diff;
  }
}

export class Tween {
  to(targetObject, duration, props) {
    this.running = true;
    this._duration = duration;
    this._startMs = this.time;
    this._props = [];
    Object.keys(props).forEach(key => {
      this._props.push(new TweenProperty(targetObject, key, props[key]));
    });
  }

  tick() {
    this._time = this.time - this._startMs;

    const t = this._time / this._duration;
    if (t < 1) {
      this._props.forEach(p => p.update(t));
    } else {
      this._props.forEach(p => p.complete());
      this.running = false;
      return true;
    }
    return false;
  }

  get time() {
    return Date.now() || new Date().getTime();
  }
}
