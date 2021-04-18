import { Controller } from './Controller';
import { EventDispatcher } from './core/EventDispatcher';
import { State } from './domain/State';
import { View } from './display/View';
// import { Utils } from './components/Utils';

export default class XSlider extends EventDispatcher {
  constructor(...args) {
    super();

    this.state = new State();
    this.view = new View();
    this.controller = new Controller(this.state, this.view);

    Object.assign(this, {
      prev: this.controller.usecases.slide.prev,
      next: this.controller.usecases.slide.next,
      autoplay: {
        start: this.controller.services.autoplay.start,
        stop: this.controller.services.autoplay.stop,
      },
    });

    this.setup(...args);
  }

  setup(...args) {
    // console.log('args: ', args);

    if (this.isSetup) this.dispose();
    this.isSetup = true;

    this.state.setup(args[1]);
    this.view.setup(args[0], this.state);
    this.controller.setup();
  }

  dispose() {
    this.isSetup = false;
    this.controller.dispose();
    this.view.dispose();
    this.state.dispose();
  }
}
