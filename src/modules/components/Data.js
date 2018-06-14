import {Option} from './Option'
import {Utils} from './Utils'
import {Debug} from './debug/Debug'
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

		this.option = Utils.extend(Option, args[1] || {});
		Debug.display = this.option.debug;

		this.dom.setup(args[0]);

		this.list = [];

		for(const element of this.dom.slides) {
			this.list.push(new Slide(element));
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
			return this.option.renderer || new ThreeRenderer();
		}
	}
}