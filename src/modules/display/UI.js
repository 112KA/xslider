import {InteractiveObject} from '../core/InteractiveObject'
import {Button} from './Button'
import {Pager} from './Pager'


export class UI extends InteractiveObject {

	constructor() {
		super();
	}


	_defineHandlers() {
		super._defineHandlers();

		this._onPrev = (e) => {
			e.preventDefault();
			this.dispatch(UI.EVENT.PREV);
		}

		this._onNext = (e) => {
			e.preventDefault();
			this.dispatch(UI.EVENT.NEXT);
		}
	}


	setup(data) {
		const dom = data.dom;

		this.set({target:dom.view});

		if(dom.pager) {
			this.pager = this.pager || new Pager();
			this.pager.setup(data);
			this.pager.on('index', this._on.bubble);
		}

		if(dom.prev) {
			this.prev = this.prev || new Button();
			this.prev.setup(dom.prev);
			this.prev.on('click', this._onPrev);
		}

		if(dom.next) {
			this.next = this.next || new Button();
			this.next.setup(dom.next);
			this.next.on('click', this._onNext);
		}
	}


	dispose() {
		if(this.pager) {
			this.pager.off('index', this._on.bubble);
			this.pager.dispose();
		}

		if(this.prev) {
			this.prev.off('click', this._offPrev);
			this.prev.dispose();
		}
		
		if(this.next) {
			this.next.off('click', this._onNext);
			this.next.dispose();
		}
	}
}

UI.EVENT = {
    PREV:"ui_prev",
    NEXT:"ui_next"
}