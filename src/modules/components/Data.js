import {Option} from './Option'
import {Utils} from './Utils'
import {Dom} from '../display/Dom'
import {Slide} from '../display/Slide'
import {DefaultRenderer} from '../renderer/DefaultRenderer'
import {ThreeRenderer} from '../renderer/ThreeRenderer'




export class Data {
	constructor() {
		this.dom = new Dom();
		this.time = 0;
	}

	setup(...args) {

		this.option = Utils.extend(Option, args[0]);

		this.dom.setup(this.option.selector);

		this.list = [];

		for(const element of this.dom.slides) {
			this.list.push(new Slide(element));
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