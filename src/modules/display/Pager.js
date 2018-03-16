import {EventDispatcher} from '../core/EventDispatcher'

export class Pager extends EventDispatcher {
	constructor() {
		super();

		this._defineHandlers();
	}

	_defineHandlers() {
		
		this._onClick = (e) => {
			const index = this.list.indexOf(e.target);
			this.set({index:index});
		}

		this._onChangeIndex = (e) => {
			if(e.value0 !== undefined) {
				this.list[e.value0].classList.remove("xslider-active");
			}

			this.list[e.value].classList.add("xslider-active");
		}
	}


	setup(data) {
		this.container = data.dom.pager;
		this.list = [];

		const length = data.dom.slides.length;

		for(let i=0; i<length; i++) {
			let span = document.createElement('span');
			this.container.appendChild(span);

			span.addEventListener('click', this._onClick);
			this.list.push(span);
		}

		this.on("index", this._onChangeIndex);
		this.set({index:data.option.initialSlideIndex});
	}


	dispose() {
		this.off("index", this._onChangeIndex);
		this.set({index:undefined});

		this.list.forEach((span) => {
			span.removeEventListener('click', this._onClick);
			this.container.removeChild(span);
		})
	}
}