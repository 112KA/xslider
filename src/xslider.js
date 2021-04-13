import './xslider.scss';
import XSlider from './modules/main.js';
import { stage } from './modules/core/Stage.js';
import * as transitions from './modules/transitions/index';
import * as Vec from './modules/geom/Vec';
import * as Matrix from './modules/geom/Matrix';
import { Option } from './modules/domain/Option';

//exports
XSlider.stage = stage;

Object.assign(XSlider, transitions, Vec, Matrix);

XSlider.Debug = Option.Debug;

if (typeof window !== 'undefined') {
  window.XSlider = XSlider;
}
export default XSlider;
