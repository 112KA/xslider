export class TouchInteractor {
  constructor(state, services) {
    this.state = state;
    this.services = services;
  }

  start() {
    const { indexer, ticker, autoplay } = this.services;
    indexer.down();
    ticker.start();
    autoplay.stop();
  }

  move(dx) {
    const { indexer } = this.services;
    indexer.move(-dx);
  }

  end() {
    const { indexer } = this.services;
    indexer.up();
  }
}
