import './xslider.scss';

import {XSlider} from './modules/main.js'
import {stage} from './modules/core/Stage.js'
import {BaseTransition} 		from './modules/transitions/BaseTransition'
import {CrossWarpTransition} 	from './modules/transitions/CrossWarpTransition'
import {CrossZoomTransition} 	from './modules/transitions/CrossZoomTransition'
import {CubeTransition} 		from './modules/transitions/CubeTransition'
import {MorphTransition} 		from './modules/transitions/MorphTransition'
import {NoiseTransition} 		from './modules/transitions/NoiseTransition'
import {PixelateTransition} 	from './modules/transitions/PixelateTransition'
import {PixelateWipeTransition} from './modules/transitions/PixelateWipeTransition'
import {TestTransition} 		from './modules/transitions/TestTransition'
import {Debug} from './modules/components/debug/Debug'
import {Utils} from './modules/components/Utils'
import {Vec2, Vec3, Vec4} from './modules/geom/Vec'
import {Matrix3, Matrix4} from './modules/geom/Matrix'


//exports
XSlider.stage = stage;

XSlider.transition = {
	Base : BaseTransition
	, CrossWarp : CrossWarpTransition
	, CrossZoom : CrossZoomTransition
	, Cube : CubeTransition
	, Morph : MorphTransition
	, Noise : NoiseTransition
	, Pixelate : PixelateTransition
	, PixelateWipe : PixelateWipeTransition
	, Test : TestTransition
};

XSlider.Vec2 = Vec2;
XSlider.Vec3 = Vec3;
XSlider.Vec4 = Vec4;
XSlider.Matrix3 = Matrix3;
XSlider.Matrix4 = Matrix4;

XSlider.Utils = Utils;
XSlider.Debug = Debug;

window.XSlider = XSlider;