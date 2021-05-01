import { Event, TouchEvent } from './core/Event';
// import {Bench} from './components/debug/Bench'
import { wait } from './components/Utils';
import { AutoPlay, Indexer, Resize, Tick, Touch } from './services/index';
import { TouchInteractor, StageInteractor, SlideInteractor } from './usecases/index';
import { IndexPresenter, StagePresenter } from './presenters/index';

export class Controller {
  constructor(state, view) {
    this.state = state;
    this.view = view;

    this.services = {
      indexer: new Indexer(state),
      autoplay: new AutoPlay(state),
      resize: new Resize(state, view),
      tick: new Tick(state),
      touch: new Touch(state, view),
    };

    this.usecases = {
      stage: new StageInteractor(this.state, this.services),
      slide: new SlideInteractor(this.state, this.services),
      touch: new TouchInteractor(this.state, this.services),
    };

    this.presenters = {
      stage: new StagePresenter(this.state, this.view),
      index: new IndexPresenter(this.state, this.view),
    };
  }

  async setup() {
    await this.usecases.stage.setup();
    await this.presenters.stage.setup();

    const { autoplay, indexer, touch } = this.services;
    autoplay.on(Event.AUTOPLAY_NEXT, this.usecases.slide.next);
    indexer.on('complete', this.usecases.slide.complete);
    touch.on(TouchEvent.START, this.usecases.touch.start);
    touch.on(TouchEvent.MOVE, this.usecases.touch.move);
    touch.on(TouchEvent.END, this.usecases.touch.end);

    this.view.pager?.on('index', this.usecases.slide.index);
    this.view.prev?.on('click', this.usecases.slide.prev);
    this.view.next?.on('click', this.usecases.slide.next);

    this.state.on('resize', this.presenters.stage.resize);
    this.state.on('index', this.presenters.index.index);
    this.state.on('head', this.presenters.index.head);
    this.state.on('tail', this.presenters.index.tail);
    this.state.on('time', this.presenters.stage.time);
    this.state.on('isDrag', this.presenters.stage.drag);

    this.usecases.stage.start();
  }

  dispose() {
    this.usecases.stage.dispose();

    const { autoplay, indexer, touch } = this.services;
    autoplay.off(Event.AUTOPLAY_NEXT, this.usecases.slide.next);
    indexer.off('complete', this.usecases.slide.complete);
    touch.off(TouchEvent.MOVE, this.usecases.touch.move);
    touch.off(TouchEvent.END, this.usecases.touch.end);

    this.view.pager?.off('index', this.usecases.slide.index);
    this.view.prev?.off('click', this.usecases.slide.prev);
    this.view.next?.off('click', this.usecases.slide.next);

    this.state.off('index', this.presenters.index.index);
    this.state.off('head', this.presenters.index.head);
    this.state.off('tail', this.presenters.index.tail);
    this.state.off('time', this.presenters.stage.time);
    this.state.off('resize', this.presenters.stage.resize);
    this.state.off('isDrag', this.presenters.stage.drag);
  }
}
