import { EventDispatcher } from '../../../core/EventDispatcher';

export class Asset extends EventDispatcher {
  constructor() {
    super();

    this.needsUpdate = true;

    this.location = undefined;
  }
}
