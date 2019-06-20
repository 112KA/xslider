import { Option } from './Option'
import { Utils } from './Utils'
import { Dom } from '../display/Dom'
import { Slide } from '../display/Slide'
import { DefaultRenderer } from '../renderer/DefaultRenderer'
// import {ThreeRenderer} from '../renderer/ThreeRenderer'
import { XRenderer } from '../renderer/XRenderer'




export class Data {
	constructor() {
		this.dom = new Dom();
		this.time = 0;
	}

	setup(...args) {

		this.option = Utils.extend(Option, args[1] || {});

		this.dom.setup(args[0]);

		if (this.option.debug == Option.Debug.DISPLAY.DOM) {
			this.dom.container.classList.add("xslider-debug");
		}

		this.list = [];

		this.dom.slides.forEach(element => {
			this.list.push(new Slide(element, this.option.debug));
		})
	}

	dispose() {
		if (!this.option) return;

		this.list.forEach(slide => {
			slide.dispose();
		})
		this.dom.dispose();

		this.option = undefined;
	}

	getRenderer() {
		if (this.option.debug) {
			return new DefaultRenderer();
		}
		else {
			// return this.option.renderer || new ThreeRenderer();
			return this.option.renderer || new XRenderer();
		}
	}
}