import './xslider.scss';

import {XSlider} from './modules/main.js'
import {stage} from './modules/core/Stage.js'
import {BaseTransition} from './modules/transitions/BaseTransition'
import {TestTransition} from './modules/transitions/TestTransition'
import {PixelateTransition} from './modules/transitions/PixelateTransition'
import {CrossWarpTransition} from './modules/transitions/CrossWarpTransition'
import {Utils} from './modules/utils/Utils'


//exports
XSlider.stage = stage;
XSlider.transition = {
	BaseTransition : BaseTransition
	, PixelateTransition : PixelateTransition
	, CrossWarpTransition : CrossWarpTransition
	, TestTransition : TestTransition
};

XSlider.Utils = Utils;

window.XSlider = XSlider;