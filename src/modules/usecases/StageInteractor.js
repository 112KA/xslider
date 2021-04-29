import { Inliner } from '../components/converter/Inliner';
// import { wait } from '../components/Utils';

export class StageInteractor {
  constructor(state, services) {
    this.state = state;
    this.services = services;
  }

  async ready() {
    try {
      await Inliner.resolveFonts();

      const { indexer, resize, tick, touch } = this.services;

      indexer.setup();
      tick.setup(indexer);
      // tick.start();
      touch.start('on');
      const { i0, i1 } = indexer;
      this.state.set({ i0, i1 });
      // resize.setup();
    } catch (err) {
      console.warn('first ready rejected : ', err);
    }
  }

  dispose() {
    const { autoplay, resize, tick, touch } = this.services;

    autoplay.stop();
    resize.dispose();
    tick.stop();
    touch.start('off');
  }
}
