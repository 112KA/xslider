import './xslider.scss';

import {XSlider} from './modules/main.js'
import {stage} from './modules/core/Stage.js'
import {BaseTransition} from './modules/transitions/BaseTransition'
import {CrossWarpTransition} from './modules/transitions/CrossWarpTransition'
import {CrossZoomTransition} from './modules/transitions/CrossZoomTransition'
import {CubeTransition} from './modules/transitions/CubeTransition'
import {MorphTransition} from './modules/transitions/MorphTransition'
import {PixelateTransition} from './modules/transitions/PixelateTransition'
import {TestTransition} from './modules/transitions/TestTransition'
import {Utils} from './modules/utils/Utils'


//exports
XSlider.stage = stage;

XSlider.transition = {
	Base : BaseTransition
	, CrossWarp : CrossWarpTransition
	, CrossZoom : CrossZoomTransition
	, Cube : CubeTransition
	, Morph : MorphTransition
	, Pixelate : PixelateTransition
	, Test : TestTransition
};

XSlider.Utils = Utils;

window.XSlider = XSlider;