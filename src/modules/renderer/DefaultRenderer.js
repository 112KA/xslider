import { BaseRenderer } from './BaseRenderer';
import { Utils } from '../components/Utils';
import { stage } from '../core/Stage';

export class DefaultRenderer extends BaseRenderer {
  constructor() {
    super();

    this._defineHandlers();
  }

  _defineHandlers() {
    this.dx = 0;
    this._onTick = e => {
      console.log('e: ', e);

      this.dx = 30 * Math.sin(e.time / 1000);

      const slide0 = this.data.list[0];
      if (slide0) {
        slide0.layer.ui.style.webkitTransform = 'translate(' + this.dx + 'px, 0)';
      }
    };
  }

  setup(data, container) {
    super.setup(data, container);
  }

  dispose() {
    super.dispose();
  }

  render(indexer) {
    super.render(indexer);

    const slide0 = this.data.list[indexer.i0],
      slide1 = this.data.list[indexer.i1];

    let opacity = 1.0 - Utils.clamp(indexer.progress, 0, 0.5) / 0.5;
    let dx = -indexer.progress * this.width;
    this.updateSlide(slide0, opacity, dx);

    if (slide0 != slide1) {
      opacity = Utils.clamp(indexer.progress - 0.5, 0, 0.5) / 0.5;
      dx = (1 - indexer.progress) * this.width;
      this.updateSlide(slide1, opacity, dx);
    }

    // stage.on("tick", this._onTick);
  }

  resize(w, h) {
    super.resize(w, h);
  }

  updateSlide(slide, opacity, dx) {
    if (!slide || !slide.layer.ui) return;

    slide.layer.ui.style.webkitTransform = 'translate(' + dx + 'px, 0) scale(1)';
    // slide.layer.ui.style.opacity = opacity;
  }
}
