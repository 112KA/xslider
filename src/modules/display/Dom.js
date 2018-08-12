import {EventDispatcher} from '../core/EventDispatcher'
import {stage} from '../core/Stage'
export class Dom extends EventDispatcher {

	constructor() {
		super();

		this._defineHandlers();

		// this.canvas = document.createElement('canvas');
	}

	_defineHandlers() {
		this._onResize = (e) => {
			if(this._width != this.width || this._height != this.height) {
				this._width = this.width;
				this._height = this.height;
				this.dispatch('resize', {type:'resize', width:this._width, height:this._height});
			}
		}
	}

	get width() {
		return this.container.clientWidth;
	}

	get height() {
		return this.container.clientHeight;
	}

	setup(selector) {

		this.container = document.querySelector(selector);
		this.container.classList.add("xslider-container");

		this.view = this.container.querySelector(".xslider-view");
		this.slides = this.view.querySelectorAll(".xslider-slide");

		this.pager = this.container.querySelector(".xslider-pager");
		this.prev = this.container.querySelector(".xslider-prev");
		this.next = this.container.querySelector(".xslider-next");

		stage.on('resize', this._onResize);
	}

	dispose() {
		this._width = this._height = undefined;
		stage.off('resize', this._onResize);
		this.container.classList.remove("xslider-container", "xslider-debug");
	}
}