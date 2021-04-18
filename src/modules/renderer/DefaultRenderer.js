import { BaseRenderer } from './BaseRenderer';
// import { clamp } from '../components/Utils';

export class DefaultRenderer extends BaseRenderer {
  constructor() {
    super();

    this.dx = 0;
  }

  render(i0, i1, progress) {
    super.render(i0, i1, progress);

    const page0 = this.slide.list[i0],
      page1 = this.slide.list[i1];

    // let opacity = 1.0 - Utils.clamp(progress, 0, 0.5) / 0.5;
    let dx = -progress * this.width;
    this._updatePage(page0, dx /*, opacity*/);

    if (page0 != page1) {
      // opacity = Utils.clamp(progress - 0.5, 0, 0.5) / 0.5;
      dx = (1 - progress) * this.width;
      this._updatePage(page1, dx /*, opacity*/);
    }
  }

  _updatePage(slide, dx, opacity) {
    if (!slide || !slide.layer.ui) return;

    slide.layer.ui.style.webkitTransform = 'translate(' + dx + 'px, 0) scale(1)';
    // slide.layer.ui.style.opacity = opacity;
  }
}
