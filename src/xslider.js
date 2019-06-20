import './xslider.scss';
// const XSlider = require('./modules/main.js').default;
// const XSlider = require('./modules/main.js')
import XSlider from './modules/main.js'
import { stage } from './modules/core/Stage.js'
import { BaseTransition } from './modules/transitions/BaseTransition'
import { CrossWarpTransition } from './modules/transitions/CrossWarpTransition'
import { CrossZoomTransition } from './modules/transitions/CrossZoomTransition'
import { CubeTransition } from './modules/transitions/CubeTransition'
import { MorphTransition } from './modules/transitions/MorphTransition'
import { NoiseTransition } from './modules/transitions/NoiseTransition'
import { PixelateTransition } from './modules/transitions/PixelateTransition'
import { PixelateWipeTransition } from './modules/transitions/PixelateWipeTransition'
import { Option } from './modules/components/Option'
import { Utils } from './modules/components/Utils'
import { Vec2, Vec3, Vec4 } from './modules/geom/Vec'
import { Matrix3, Matrix4 } from './modules/geom/Matrix'

console.log('XSlider', XSlider)

//exports
XSlider.stage = stage;

XSlider.BaseTransition = BaseTransition;
XSlider.CrossWarpTransition = CrossWarpTransition;
XSlider.CrossZoomTransition = CrossZoomTransition;
XSlider.CubeTransition = CubeTransition;
XSlider.MorphTransition = MorphTransition;
XSlider.NoiseTransition = NoiseTransition;
XSlider.PixelateTransition = PixelateTransition;
XSlider.PixelateWipeTransition = PixelateWipeTransition;

XSlider.Vec2 = Vec2;
XSlider.Vec3 = Vec3;
XSlider.Vec4 = Vec4;
XSlider.Matrix3 = Matrix3;
XSlider.Matrix4 = Matrix4;

XSlider.Utils = Utils;
XSlider.Debug = Option.Debug;

if (typeof window !== 'undefined') {
  window.XSlider = XSlider;
} else if (typeof global !== 'undefined') {
  global.XSlider = XSlider;
}

// window.XSlider = XSlider;
// export { XSlider }
// export XSlider
export default XSlider;
// exports { XSlider };
// module.exports = XSlider