import {Option} from './Option'
import {Utils} from './Utils'
import {Dom} from '../display/Dom'
import {Slide} from '../display/Slide'
import {DefaultRenderer} from '../renderer/DefaultRenderer'
// import {ThreeRenderer} from '../renderer/ThreeRenderer'
import {XRenderer} from '../renderer/XRenderer'




export class Data {
	constructor() {
		this.dom = new Dom();
		this.time = 0;
	}

	setup(...args) {

		this.option = Utils.extend(Option, args[1] || {});

		this.dom.setup(args[0]);

		if(this.option.display == Option.Debug.DISPLAY.DOM) {
			this.dom.container.classList.add("xslider-debug");
		}

		this.list = [];

		for(const element of this.dom.slides) {
			this.list.push(new Slide(element, this.option.display));
		}
	}

	dispose() {
		if(!this.option) return;

		for(const slide of this.list) {
			slide.dispose();
		}
		this.dom.dispose();

		this.option = undefined;
	}

	getRenderer() {
		if(this.option.debug) {
			return new DefaultRenderer();
		}
		else {
			// return this.option.renderer || new ThreeRenderer();
			return this.option.renderer || new XRenderer();
		}
	}
}