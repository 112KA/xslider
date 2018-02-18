import {BaseRenderer} from './BaseRenderer'
import {Utils} from '../utils/Utils'
import {stage} from '../core/Stage'

export class DefaultRenderer extends BaseRenderer {
	constructor() {
		super();

		this._defineHandlers();
	}

	_defineHandlers() {

		// this._onChangeSlide = (e) => {

		// 	if(e.value0 !== undefined) {
		// 		this.data.list[e.value0].container.classList.remove("xslider-slide-active");
		// 	}

		// 	this.data.list[e.value].container.classList.add("xslider-slide-active");
		// }


		this.dx = 0;
		this._onTick = (e) => {
			console.log('e: ', e);

			this.dx = 30 * Math.sin(e.time/1000);

			const slide0 = this.data.list[0];
			if(slide0) {
				slide0.layer.ui.style.webkitTransform = "translate("+this.dx+"px, 0)";
			}
		}
	}
	
	setup(data) {
		super.setup(data);

		this.on('index', this._onChangeSlide);
	}

	dispose() {
		super.dispose();

		this.off('index', this._onChangeSlide);
	}

	render(indexer) {
		super.render(indexer);

		const slide0 = this.data.list[indexer.i0]
		, slide1 = this.data.list[indexer.i1];

		// console.log('indexer.progress: ', indexer.progress);

		let opacity = 1.0 - Utils.clamp(indexer.progress,0,0.5) / 0.5;
		let dx = -indexer.progress * this.width;
		this.updateSlide(slide0, opacity, dx);

		if(slide0 != slide1) {
			opacity = Utils.clamp(indexer.progress-0.5,0,0.5) / 0.5;
			dx = (1-indexer.progress) * this.width;
			this.updateSlide(slide1, opacity, dx);
		}

		// stage.on("tick", this._onTick);
		
	}

	resize(e) {
		super.resize(e);
	}

	updateSlide(slide, opacity, dx) {

		if(!slide || !slide.layer.ui)  return;

		slide.layer.ui.style.webkitTransform = "translate("+dx+"px, 0) scale(1)";
		// slide.layer.ui.style.opacity = opacity;

	}
}