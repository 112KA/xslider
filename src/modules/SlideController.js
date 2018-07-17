
import {TouchEvent} from './core/Event'
import {EventDispatcher} from './core/EventDispatcher'
import {stage} from './core/Stage'
import {AutoPlay} from './components/AutoPlay'
import {Indexer} from './components/Indexer'
import {Inliner} from './components/converter/Inliner'
import {Bench} from './components/debug/Bench'
import {SlideContainer} from './display/Slide'
import {UI} from './display/UI'
import {DefaultRenderer} from './renderer/DefaultRenderer'



export class SlideController extends EventDispatcher {

	constructor() {
		super();

		this.indexer = new Indexer();

		this.renderer = {
			default : new DefaultRenderer()
			, gl : undefined
		};

		this.ui = new UI();
		this.autoplay = new AutoPlay();

		this.container = new SlideContainer();

		this._defineHandlers();
	}

	_defineHandlers() {

		this._onResize = (e) => {
			const w = this.dom.width, h = this.dom.height;

			this.data.list.forEach((slide) => {
				slide.needsResize = true;
			});

			this.renderer.default.resize(w, h);
			this.renderer.gl.resize(w, h);

			return this.container.resize(w, h).then(() => {
				this.renderer.gl.render(this.indexer);
			});
		}


		this._onCompleteSlide = () => {
			stage.off('tick', this._onTick);
			this.data.option.get('touchMove') && this.ui.on(TouchEvent.START, this._onChange);
			this.ui.on('index', this._onChange);

			this.autoplay.start();
		}


		this._onTick = (e) => {
			this.data.time = e.time;
			this.indexer.tick();
			this.renderer.default.render(this.indexer);
			this.container.ready(this.indexer)
				.then(() => {
					this.renderer.gl.render(this.indexer);
				},
				(message) => {
					console.log("reject ::", message);
				});
			this.ui.pager.set({index:this.indexer.current});
		}


		this._onChange = (e) => {
			switch(e.type) {
				case UI.EVENT.PREV:
					this.prev();
				break;

				case UI.EVENT.NEXT:
				case AutoPlay.EVENT.TICK:
					this.next();
				break;

				case 'index':
					this.indexer.to(e.value);

					this.container.ready(this.indexer).then(() => {
						stage.on('tick', this._onTick);
					},
					(message) => {
						console.log('on index rejected : ', message);
					});
				break;
				
				case 'head':
					this.ui.prev && (this.ui.prev.active = !this.indexer.get('head'));
				break;

				case 'tail':
					this.ui.next && (this.ui.next.active = !this.indexer.get('tail'));
				break;

				case TouchEvent.START:
					stage.on(TouchEvent.MOVE, this._onChange);
					stage.on(TouchEvent.END, this._onChange);

					this.ui.off('index', this._onChange);

					this.indexer.down();

					this.autoplay.stop();

					stage.on('tick', this._onTick);
				break;

				case TouchEvent.MOVE:
					const dx = (e.clientX - e.clientX0) / this.dom.width;
					this.indexer.move(-dx);
				break;

				case TouchEvent.END:
					stage.off(TouchEvent.MOVE, this._onChange);
					stage.off(TouchEvent.END, this._onChange);

					this.indexer.up();
				break;
			}
		}
	}


	setup(renderer, data) {
		this.renderer.gl = renderer;

		this.data = data;
		this.dom = data.dom;

		this.renderer.default.setup(this.data);

		this.renderer.gl = this.data.getRenderer();
		this.renderer.gl.setup(this.data, this.container);

		this.container.setup(this.renderer.gl.mesh);

		this.ui.setup(this.data);

		this.indexer.setup(this.data);
		this.indexer.on('complete', this._onCompleteSlide);
		if(!this.data.option.loop) {
			this.indexer.on('head', this._onChange);
			this.indexer.on('tail', this._onChange);
		}

		this.autoplay.on(AutoPlay.EVENT.TICK, this._onChange);
		this.autoplay.setup(this.data.option.autoplay);

		this.dom.on('resize', this._onResize);

		Inliner.resolveFonts()
		.then(() => this.container.ready(this.indexer))
		.then(this._onResize)
		.then(() => {

			this.ui.on('index', this._onChange);
			this.ui.on(UI.EVENT.PREV, this._onChange);
			this.ui.on(UI.EVENT.NEXT, this._onChange);

			this.data.option.get('touchMove') && this.ui.on(TouchEvent.START, this._onChange);

			this.autoplay.start();

			stage.on('tick', this._onTick);

		}, (message) => {
			console.log("first ready rejected : ", message);
		});
	}


	prev() {
		this.data.option.get('touchMove') && this.ui.off(TouchEvent.START, this._onChange);
		this.autoplay.stop();
		this.indexer.prev();
		this.ui.pager.set({index:this.indexer.current});
	}


	next() {
		this.data.option.get('touchMove') && this.ui.off(TouchEvent.START, this._onChange);
		this.autoplay.stop();
		this.indexer.next();
		this.ui.pager.set({index:this.indexer.current});
	}


	dispose() {

		if(!this.data) return;

		stage.off('tick', this._onTick);
		stage.off(TouchEvent.MOVE, this._onChange);
		stage.off(TouchEvent.END, this._onChange);

		this.ui.off('index', this._onChange);
		this.ui.off(UI.EVENT.PREV, this._onChange);
		this.ui.off(UI.EVENT.NEXT, this._onChange);

		this.data.option.get('touchMove') && this.ui.off(TouchEvent.START, this._onChange);

		this.ui.dispose();

		this.dom.off('resize', this._onResize);

		this.indexer.off('complete', this._onCompleteSlide);

		if(!this.data.option.loop) {
			this.indexer.off('head', this._onChange);
			this.indexer.off('tail', this._onChange);
		}

		this.renderer.gl.dispose();
		this.renderer.default.dispose();

		this.container.dispose();

		this.data = undefined;
	}
}

