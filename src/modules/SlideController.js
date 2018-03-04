
import {Event, TouchEvent} from './core/Event'
import {stage} from './core/Stage'
import {InteractiveObject} from './display/InteractiveObject'
import {Pager} from './display/Pager'
import {DefaultRenderer} from './renderer/DefaultRenderer'
import {Indexer} from './utils/Indexer'
import {Bench} from './debug/Bench'


export class SlideController extends InteractiveObject {

	constructor() {
		super();

		this.indexer = new Indexer();

		this.renderer = {
			default : new DefaultRenderer()
			, gl : undefined
		};
	}

	_defineHandlers() {

		super._defineHandlers();

		this._onResize = (e) => {

			this.data.list.forEach((slide) => {
				slide.needsResize = true;
			});

			this.renderer.default.resize(e);
			this.renderer.gl.resize(e);
		}

		this._onPrev = (e) => {
			this.indexer.prev();
			this.pager.set({index:this.indexer.current});
		}

		this._onNext = (e) => {
			this.indexer.next();
			this.pager.set({index:this.indexer.current});
		}


		this._onCompleteSlide = () => {
			stage.off('tick', this._onTick);
			this.pager.on('index', this._onChangePagerIndex);
		}

		this._onTick = (e) => {
			this.data.time = e.time;
			this.indexer.tick();
			this.renderer.default.render(this.indexer);
			this.ready()
				.then(() => {
					this.renderer.gl.render(this.indexer);
				});
			
			this.pager.set({index:this.indexer.current});
		}

		this._onTouch = (e) => {

			switch(e.type) {
				case TouchEvent.START:
					stage.on(TouchEvent.MOVE, this._onTouch);
					stage.on(TouchEvent.END, this._onTouch);

					this.pager.off('index', this._onChangePagerIndex);

					this.indexer.down();

					stage.on('tick', this._onTick);
					break;
				case TouchEvent.MOVE:
					const dx = (e.clientX - e.clientX0) / this.dom.width;
					this.indexer.move(-dx);

					break;
				case TouchEvent.END:
					stage.off(TouchEvent.MOVE, this._onTouch);
					stage.off(TouchEvent.END, this._onTouch);

					this.indexer.up();
					break;
			}
		}

		this._onChangePagerIndex = (o) => {
			this.indexer.to(o.value);

			this.ready().then(() => {
				stage.on('tick', this._onTick);
			});
		}
	}

	setup(renderer, data) {
		this.renderer.gl = renderer;

		this.data = data;
		this.dom = data.dom;

		this.set({target:this.dom.view});

		this.indexer.setup(this.data);
		this.renderer.default.setup(this.data);

		if(this.dom.pager) {
			this.pager = this.pager || new Pager();
			this.pager.setup(this.data);
		}

		this.indexer.on('complete', this._onCompleteSlide);

		this.dom.on('resize', this._onResize);

		this.dom.prev && this.dom.prev.addEventListener('click', this._onPrev);
		this.dom.next && this.dom.next.addEventListener('click', this._onNext);

		this.pager.on('index', this._onChangePagerIndex);

		this.on(TouchEvent.START, this._onTouch);

		this.ready().then(() => {
			stage.on('tick', this._onTick);
			this.dom._onResize();
		});
	}

	ready() {
		const slide0 = this.data.list[this.indexer.i0]
		, slide1 = this.data.list[this.indexer.i1];

		return Promise.all([slide0.ready(), slide1.ready()]);
	}

	dispose() {

		stage.off('tick', this._onTick);
		stage.off(TouchEvent.MOVE, this._onTouch);
		stage.off(TouchEvent.END, this._onTouch);

		this.off(TouchEvent.START, this._onTouch);

		this.dom.prev && this.dom.prev.removeEventListener('click', this._onPrev);
		this.dom.next && this.dom.next.removeEventListener('click', this._onNext);

		this.dom.off('resize', this._onResize);

		this.indexer.off('complete', this._onCompleteSlide);

		this.pager.off('index', this._onChangePagerIndex);

		this.renderer.gl.dispose();
		this.renderer.default.dispose();
	}
}

