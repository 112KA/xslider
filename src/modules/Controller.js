import { TouchEvent } from './core/Event';
import { EventDispatcher } from './core/EventDispatcher';
import { stage } from './core/Stage';
// import {Bench} from './components/debug/Bench'
import { AutoPlay, Indexer, Ticker } from './services/index';
import { TouchInteractor, StageInteractor, SlideInteractor } from './usecases/index';
import { IndexPresenter, StagePresenter } from './presenters/index';

export class Controller extends EventDispatcher {
  constructor(state, view) {
    super();

    this.state = state;
    this.view = view;

    this._bindMethods(['_onTouch', '_addTouchStartListener', '_removeTouchStartListener']);

    this.services = {
      indexer: new Indexer(),
      ticker: new Ticker(),
      autoplay: new AutoPlay(),
      listeners: {
        touchStart: {
          add: this._addTouchStartListener,
          remove: this._removeTouchStartListener,
        },
      },
    };

    this.usecases = {
      stage: new StageInteractor(this.state, this.services),
      slide: new SlideInteractor(this.state, this.services),
      touch: new TouchInteractor(this.state, this.services),
    };

    this.presenters = {
      index: new IndexPresenter(this.state, this.view),
      stage: new StagePresenter(this.state, this.view),
    };
  }

  async setup() {
    const { indexer, ticker, autoplay } = this.services;

    this.dom = this.view.dom;
    indexer.setup(this.dom, this.state.option);

    await this.usecases.stage.ready();

    this.view.pager?.on('index', this.usecases.slide.index);
    this.view.prev?.on('click', this.usecases.slide.prev);
    this.view.next?.on('click', this.usecases.slide.next);

    indexer.on('complete', this.usecases.slide.complete);

    autoplay.on(AutoPlay.EVENT.TICK, this.usecases.slide.next);
    autoplay.setup(this.state.option.autoplay);

    ticker.on('tick', this.usecases.stage.tick);

    this.state.on('index', this.presenters.index.index);
    this.state.on('head', this.presenters.index.head);
    this.state.on('tail', this.presenters.index.tail);
    this.state.on('time', this.presenters.stage.time);

    this.dom.on('resize', this.presenters.stage.resize);
    this.presenters.stage.resize();
  }

  dispose() {
    const { indexer, ticker, autoplay } = this.services;

    this.usecases.stage.dispose();

    this.view.pager?.off('index', this.usecases.slide.index);
    this.view.prev?.off('click', this.usecases.slide.prev);
    this.view.next?.off('click', this.usecases.slide.next);

    stage.off(TouchEvent.MOVE, this._onTouch);
    stage.off(TouchEvent.END, this._onTouch);

    indexer.off('complete', this.usecases.slide.complete);

    autoplay.off(AutoPlay.EVENT.TICK, this.usecases.slide.next);

    ticker.off('tick', this.usecases.stage.tick);

    this.state.off('index', this.presenters.index.index);
    this.state.off('head', this.presenters.index.head);
    this.state.off('tail', this.presenters.index.tail);
    this.state.off('time', this.presenters.stage.time);

    this.dom.off('resize', this.presenters.stage.resize);
  }

  _onTouch(e) {
    switch (e.type) {
      case TouchEvent.START:
        stage.on(TouchEvent.MOVE, this._onTouch);
        stage.on(TouchEvent.END, this._onTouch);

        this.usecases.touch.start();
        break;

      case TouchEvent.MOVE:
        const dx = (e.clientX - e.clientX0) / this.dom.width;
        this.usecases.touch.move(dx);
        break;

      case TouchEvent.END:
        stage.off(TouchEvent.MOVE, this._onTouch);
        stage.off(TouchEvent.END, this._onTouch);
        this.usecases.touch.end();
        break;
    }
  }

  _addTouchStartListener() {
    this.state.option.get('touchMove') && this.view.slide.on(TouchEvent.START, this._onTouch);
  }

  _removeTouchStartListener() {
    this.state.option.get('touchMove') && this.view.slide.off(TouchEvent.START, this._onTouch);
  }
}
