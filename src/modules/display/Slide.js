import {net} from '../components/Net'
import {cloner} from '../components/converter/Cloner'
import {Inliner} from '../components/converter/Inliner'
import {converter} from '../components/converter/SvgConverter'
import {Bench} from '../components/debug/Bench'

export class Slide {

	constructor(slide) {
		this.container = slide;
		this.canvas = document.createElement('canvas');
		this.image = new Image();
		this.layer = {
			"texture" : slide.querySelector(".xslider-layer-texture")
			, "ui" : slide.querySelector(".xslider-layer-ui")
		}

		// this.container.insertBefore(this.image, this.layer.texture);

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
		const string = new XMLSerializer().serializeToString(this.svg);
		const uri = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(string);

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

				cloner.cloneStyle(this.layer.texture, this.inlinedNode, ['background']);

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