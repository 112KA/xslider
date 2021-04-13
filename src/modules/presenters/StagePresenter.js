import { EventDispatcher } from '../core/EventDispatcher';
import { Option } from '../domain/Option';

export class StagePresenter extends EventDispatcher {
  constructor(state, view) {
    super();
    this.state = state;
    this.view = view;

    this._bindMethods(['time', 'resize']);
  }

  setup() {
    const { dom, slide } = this.view;

    if (this.state.option.debug == Option.Debug.DISPLAY.DOM) {
      this.dom.container.classList.add('xslider-debug');
    }
  }

  async time() {
    const { renderer, slide } = this.view,
      i0 = this.state.get('i0'),
      i1 = this.state.get('i1'),
      progress = this.state.get('progress'),
      time = this.state.get('time');

    await slide.ready(i0, i1);

    slide.uniforms.progress.value = progress;
    if (slide.uniforms.time) {
      slide.uniforms.time.value = time;
    }

    renderer.default.render(i0, i1, progress);
    renderer.gl.render(i0, i1, progress);
  }

  async resize() {
    const { renderer, slide, dom } = this.view,
      width = dom.width,
      height = dom.height,
      i0 = this.state.get('i0'),
      i1 = this.state.get('i1'),
      progress = this.state.get('progress');

    dom.canvas.setAttribute('width', width);
    dom.canvas.setAttribute('height', height);

    renderer.default.resize(width, height);
    renderer.gl.resize(width, height);

    await slide.resize(width, height);

    renderer.default.render(i0, i1, progress);
    renderer.gl.render(i0, i1, progress);
  }
}
