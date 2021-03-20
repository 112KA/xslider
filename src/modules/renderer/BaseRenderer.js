import { EventDispatcher } from '../core/EventDispatcher';

export class BaseRenderer extends EventDispatcher {
  constructor() {
    super();
  }

  setup(data, container) {
    this.data = data;
    this.container = container;
  }

  dispose() {}

  render(indexer) {}

  resize(w, h) {
    this.width = w;
    this.height = h;
  }
}

export class GLRenderer extends BaseRenderer {
  constructor() {
    super();

    this.canvas = document.createElement('canvas');
  }

  setup(data, container) {
    super.setup(data, container);

    data.dom.container.insertBefore(this.canvas, data.dom.view);
  }

  dispose() {
    super.dispose();

    this.container.off('updateTexture', this._onUpdateTexture);

    this.data.dom.container.removeChild(this.canvas);
  }

  render(indexer) {
    super.render(indexer);

    this.container.uniforms.progress.value = indexer.progress;
    if (this.container.uniforms.time) {
      this.container.uniforms.time.value = this.data.time;
    }
  }

  resize(w, h) {
    super.resize(w, h);
  }
}
