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
  duration: 1000,
  direction: 'horizontal',

  transition: BaseTransition,

  get: function (property, module) {
    if (module) {
      return !this[module] ? undefined : this[module][property];
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
