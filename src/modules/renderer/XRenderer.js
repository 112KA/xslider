import { BaseRenderer } from './BaseRenderer';

import { GLGraphics } from '../components/graphics/GLGraphics';
import { Scene3D } from '../components/graphics/nodes/Scene';
import { XModel, XMaterial } from '../display/XModel';
import { Texture } from '../components/graphics/assets/Texture';
import { Vec2 } from '../geom/Vec';

export class XRenderer extends BaseRenderer {
  constructor(canvas) {
    super();

    this.canvas = canvas;
    this.scene = new Scene3D();
    // this.scene.context.color.b = 1;
    this.model = new XModel();
    this.mesh = this.model.mesh;

    this.scene.addChild(this.model);

    this._uniform0 = {
      texture0: { value: new Texture() },
      texture1: { value: new Texture() },
      progress: { value: 0 },
      resolution: { value: new Vec2(0.0, 0.0) },
    };
  }

  setup(option) {
    super.setup(option, undefined);

    GLGraphics.setup(this.canvas);

    const transition = option.transition;

    this.mesh.material = new XMaterial({
      vertexShader: transition.vertexShader,
      fragmentShader: transition.fragmentShader,
      uniforms: Object.assign({}, this._uniform0, transition.uniforms),
    });
  }

  dispose() {
    super.dispose();

    GLGraphics.deleteProgram(this.mesh.material.program);
    this.mesh.material = undefined;
  }

  render(i0, i1, progress) {
    GLGraphics.clear(this.scene.context);
    GLGraphics.renderModel(this.model);
  }

  resize(w, h) {
    this.scene.camera.setViewport(0, 0, w, h);
  }
}
