import { EventDispatcher } from '../core/EventDispatcher';
import { Option } from './Option';

export class State extends EventDispatcher {
  constructor() {
    super();

    this.set({
      i0: 0,
      i1: 1,
      progress: 0,
      width: 0,
      height: 0,
      head: false,
      tail: false,
      time: 0,
      numPages: 0,
      isDrag: false,
    });
  }

  setup(options) {
    this.option = Object.assign({}, Option, options);
  }

  dispose() {
    this.option = undefined;
  }
}
