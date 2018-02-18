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
			if(this.width != this.container.clientWidth || this.height != this.container.clientHeight) {
				this.width = this.container.clientWidth;
				this.height = this.container.clientHeight;
				this.dispatch('resize', {type:'resize', width:this.width, height:this.height});
			}
		}
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
		stage.off('resize', this._onResize);
		this.container.classList.remove("xslider-container");
	}
}