import { BaseTransition } from '../transitions/BaseTransition';

export const Option = {
  //default value
  selector: '#xslider',
  initialSlideIndex: 0,
  autoplay: false,
  loop: true,
  touchMove: {
    throwable: true,
  },
  renderer: undefined,
  debug: false,
  easing: 0.15,

  transition: BaseTransition,

  get: function (property, module) {
    if (module) {
      if (!this[module]) {
        return undefined;
      } else {
        return this[module][property];
      }
    } else {
      return this[property];
    }
  },
};

Option.Debug = {
  DISPLAY: {
    DOM: 'DEBUG_DISPLAY_DOM',
    SVG: 'DEBUG_DISPLAY_SVG',
    IMG: 'DEBUG_DISPLAY_IMG',
  },
};
