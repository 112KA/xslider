import {net} from '../components/Net'
import {cloner} from '../components/converter/Cloner'
import {Inliner} from '../components/converter/Inliner'
import {converter} from '../components/converter/SvgConverter'
import {Bench} from '../components/debug/Bench'
import {Debug} from '../components/debug/Debug'

export class Slide {

	constructor(slide) {
		this.container = slide;
		this.canvas = document.createElement('canvas');
		this.image = new Image();
		this.layer = {
			"gl" : slide.querySelector(".xslider-layer-gl")
			, "ui" : slide.querySelector(".xslider-layer-ui")
		}

		if(Debug.display == Debug.DISPLAY_IMG) {
			this.container.insertBefore(this.image, this.layer.gl);
		}

		this.needsResize = false;
	}

	dispose() {
		this.layer.gl && this.layer.gl.classList.remove("xslider-capture");
	}

	ready() {

		return new Promise((resolve, reject) => {

			//処理済
			if(this.svg) {
				resolve();
			}
			//textureなし
			else if(!this.layer.gl) {
				resolve();
			}
			//処理中
			else if(this.layer.gl.classList.contains("xslider-capture")) {
				reject("in process");
			}
			else {
				this.layer.gl.classList.add("xslider-capture");

				const dom = this.layer.gl;
				const w = dom.scrollWidth;
				const h = dom.scrollHeight;

				Inliner.resolveFonts()
					.then(() => Inliner.inlineNode(dom))
					.then(inlined => {
						this.inlinedNode = inlined;

						this.svg = converter.convert(this.inlinedNode, w, h);
						this.layer.gl.classList.remove("xslider-capture");

						resolve();
					});

				// // Utils.toSvg(this.layer.gl)
				// converter.from(this.layer.gl)
				// 	.then((svg) => {
				// 		this.svg = svg;
				// 		this.layer.gl.classList.remove("xslider-capture");
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

		if(Debug.display == Debug.DISPLAY_SVG) {

			if(this._svg0 === undefined) {
				this._svg0 = this.container.insertBefore(this.svg.childNodes[0], this.layer.gl);
			}
			else {
				const node = this.svg.childNodes[0];
				this.container.replaceChild(node, this._svg0);
				this._svg0 = node;
			}
		}

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

				if(this.layer.gl) {
					this.layer.gl.classList.add("xslider-capture");
	
					cloner.cloneStyle(this.layer.gl, this.inlinedNode, ['background']);
	
					this.layer.gl.classList.remove("xslider-capture");

					this.svg = converter.convert(this.inlinedNode, w, h);
	
					this.loadSvg().then(() => {
						const c = this.canvas.getContext('2d');
						c.drawImage(this.image,0,0,w,h);
	
						resolve();
					});
				}
				else {
					resolve();
				}
			}
		});
	}
}