import { Inliner } from '../components/converter/Inliner';
// import { wait } from '../components/Utils';

export class StageInteractor {
  constructor(state, services) {
    this.state = state;
    this.services = services;
  }

  async setup() {
    try {
      await Inliner.resolveFonts();

      const { indexer, tick } = this.services;

      indexer.setup();
      const { i0, i1 } = indexer;
      this.state.set({ i0, i1 });
      tick.setup(indexer);
    } catch (err) {
      console.warn('first ready rejected : ', err);
    }
  }

  start() {
    const { resize, tick, touch } = this.services;
    touch.start('on');
    tick.start();
    resize.setup();
  }

  dispose() {
    const { autoplay, resize, tick, touch } = this.services;

    autoplay.stop();
    resize.dispose();
    tick.stop();
    touch.start('off');
  }
}
