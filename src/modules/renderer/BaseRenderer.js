import { EventDispatcher } from '../core/EventDispatcher';

export class BaseRenderer extends EventDispatcher {
  constructor() {
    super();
  }

  setup(option, slide) {
    this.option = option;
    this.slide = slide;
  }

  dispose() {}

  render(i0, i1, progress) {}

  resize(w, h) {
    this.width = w;
    this.height = h;
  }
}
