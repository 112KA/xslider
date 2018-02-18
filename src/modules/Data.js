
import {Dom} from './display/Dom'
import {DefaultRenderer} from './renderer/DefaultRenderer'
import {ThreeRenderer} from './renderer/ThreeRenderer'
import {Option} from './utils/Option'
import {Utils} from './utils/Utils'
import {Bench} from './debug/Bench'


export class SlideData {
	constructor(slide) {
		this.container = slide;
		this.canvas = document.createElement('canvas');
		this.image = new Image();
		this.layer = {
			"texture" : slide.querySelector(".xslider-layer-texture")
			, "ui" : slide.querySelector(".xslider-layer-ui")
		}

		this.needsResize = false;

		this.tag = this.layer.ui.textContent;
	}

	ready() {

		this.container.classList.add("xslider-slide-active");

		return new Promise((resolve, reject) => {

			//処理済
			if(this.svg) {
				resolve();
			}
			//処理中
			else if(this.layer.texture.classList.contains("xslider-texture-capture")) {
				reject();
			}
			else {
				this.layer.texture.classList.add("xslider-texture-capture");

				Utils.toSvg(this.layer.texture)
					.then((svg) => {
						this.svg = svg;
						// console.log('svg: ', svg);
						this.layer.texture.classList.remove("xslider-texture-capture");
						this.needsResize = true;
						// document.querySelector('#xslider').appendChild(this.svg.documentElement.cloneNode(true));
						resolve();
					});
			}
		})
	}

	loadSvg() {
		const uri = "data:image/svg+xml;charset=utf-8," + new XMLSerializer().serializeToString(this.svg);

		return Utils.loadImage(this.image, uri);
	}

	resize(w, h) {

		return new Promise((resolve, reject) => {

			if(!this.needsResize) {
				resolve();
			}
			else {
				this.needsResize = false;

				this.canvas.width = w;
				this.canvas.height = h;

				this.svg.documentElement.setAttribute("width", w);
				this.svg.documentElement.setAttribute("height", h);
				const div = this.svg.querySelector(".xslider-layer-texture");
				div.style.width = w+"px";
				div.style.height = h+"px";

				this.loadSvg()
					.then(() => {
						const c = this.canvas.getContext('2d');
						c.drawImage(this.image,0,0,w,h);

						resolve();
					});
			}
		});



		// Bench.end(this.tag, "resize");

		// let s, d;
		// let sx, sy, sw, sh;

		// if(this.aspect > w / h) {
		// 	s = this.height / h;

		// 	sx = (this.width - w*s)/2;
		// 	sy = 0;
		// 	sw = w*s;
		// 	sh = this.height;
		// }
		// else {
		// 	s = this.width / w;

		// 	sx = 0;
		// 	sy = (this.height - h*s)/2;
		// 	sw = this.width;
		// 	sh = h*s;
		// }
	}
}

export class Data {
	constructor() {
		this.dom = new Dom();
	}

	setup(...args) {

		this.option = Utils.extend(Option, args[0]);

		this.dom.setup(this.option.selector);

		this.list = [];

		for(const slide of this.dom.slides) {
			this.list.push(new SlideData(slide));
		}
	}

	dispose() {
		this.dom.dispose();
	}

	getRenderer() {
		if(this.option.debug) {
			return new DefaultRenderer();
		}
		else {
			return this.option.renderer || new ThreeRenderer();
		}
	}
}