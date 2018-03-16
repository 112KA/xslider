
import {cloner} from './converter/Cloner'
import {Inliner} from './converter/Inliner'
import {converter} from './converter/SvgConverter'
import {Dom} from './display/Dom'
import {DefaultRenderer} from './renderer/DefaultRenderer'
import {ThreeRenderer} from './renderer/ThreeRenderer'
import {net} from './utils/Net'
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

	dispose() {
		this.layer.texture && this.layer.texture.classList.remove("xslider-texture-capture");
	}
	

	ready() {

		return new Promise((resolve, reject) => {

			//処理済
			if(this.svg) {
				resolve();
			}
			//textureなし
			else if(!this.layer.texture) {
				resolve();
			}
			//処理中
			else if(this.layer.texture.classList.contains("xslider-texture-capture")) {
				reject("in process");
			}
			else {
				this.layer.texture.classList.add("xslider-texture-capture");

				const dom = this.layer.texture;
				const w = dom.scrollWidth;
				const h = dom.scrollHeight;

				Inliner.resolveFonts()
					.then(() => {
						return Inliner.inlineNode(dom);
					})
					.then((inlined) => {
						this.inlinedNode = inlined;

						this.svg = converter.convert(this.inlinedNode, w, h);
						this.layer.texture.classList.remove("xslider-texture-capture");

						resolve();
					});

				// // Utils.toSvg(this.layer.texture)
				// converter.from(this.layer.texture)
				// 	.then((svg) => {
				// 		this.svg = svg;
				// 		this.layer.texture.classList.remove("xslider-texture-capture");
				// 		this.needsResize = true;
				// 		// document.querySelector('#xslider').appendChild(this.svg.documentElement.cloneNode(true));
				// 		resolve();
				// 	});
			}
		})
	}


	loadSvg() {
		const uri = "data:image/svg+xml;charset=utf-8," + new XMLSerializer().serializeToString(this.svg);

		return net.loadImage(this.image, uri);
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

				this.layer.texture.classList.add("xslider-texture-capture");

				cloner.copyStyleExcludeBackground(this.layer.texture, this.inlinedNode);

				this.layer.texture.classList.remove("xslider-texture-capture");

				this.svg = converter.convert(this.inlinedNode, w, h);

				this.loadSvg().then(() => {
					const c = this.canvas.getContext('2d');
					c.drawImage(this.image,0,0,w,h);

					resolve();
				});
			}
		});
	}
}


export class Data {
	constructor() {
		this.dom = new Dom();
		this.time = 0;
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
		for(const slide of this.list) {
			slide.dispose();
		}
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