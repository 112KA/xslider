import {EventDispatcher} from '../core/EventDispatcher'
import {stage} from '../core/Stage'

export class AutoPlay extends EventDispatcher {
    constructor() {
        super();

		this._defineHandlers();
    }


	_defineHandlers() {
        this._on = {
            tick : (e) => {
                if(e.time > this.option.duration) {
                    this.dispatch(AutoPlay.EVENT.COMPLETE);
                    this.stopTimer();
                }
            }
        }
    }

    get enabled() {
        return this.option != undefined;
    }

    setup(option) {
        this.option = option;
    }


    startTimer() {
        if(this.enabled) {
            stage.on('tick', this._on.tick);
        }
    }


    stopTimer() {
        if(this.enabled) {
            stage.off('tick', this._on.tick);
        }
    }


}

AutoPlay.EVENT = {
    COMPLETE:"autoplay_complete"
}