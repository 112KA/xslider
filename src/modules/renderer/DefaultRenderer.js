import { BaseRenderer } from './BaseRenderer';
// import { clamp } from '../components/Utils';
import { Vec2 } from '../geom/Vec';

export class DefaultRenderer extends BaseRenderer {
  setup(option, slide) {
    super.setup(option, slide);
    this.direction = this.option.direction === 'vertical' ? new Vec2(0, 1) : new Vec2(1, 0);
  }

  render(i0, i1, progress) {
    super.render(i0, i1, progress);

    const page0 = this.slide.list[i0],
      page1 = this.slide.list[i1];

    // let opacity = 1.0 - Utils.clamp(progress, 0, 0.5) / 0.5;
    let diff = -progress;
    this._updatePage(page0, diff /*, opacity*/);

    if (page0 != page1) {
      // opacity = Utils.clamp(progress - 0.5, 0, 0.5) / 0.5;
      diff = 1 - progress;
      this._updatePage(page1, diff /*, opacity*/);
    }
  }

  _updatePage(slide, diff, opacity) {
    if (!slide || !slide.layer.ui) return;

    slide.layer.ui.style.webkitTransform = `translate(${this.direction.x * diff * this.width}px, ${
      this.direction.y * diff * this.height
    }px) scale(1)`;
    // slide.layer.ui.style.opacity = opacity;
  }
}
