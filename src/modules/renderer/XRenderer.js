import { GLRenderer } from './BaseRenderer';

import { GLGraphics } from '../components/graphics/GLGraphics';
import { Scene3D } from '../components/graphics/nodes/Scene';
import { XModel, XMaterial } from '../display/XModel';
import { Texture } from '../components/graphics/assets/Texture';
import { Utils } from '../components/Utils';
import { Vec2 } from '../geom/Vec';

export class XRenderer extends GLRenderer {
  constructor() {
    super();

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

  setup(data, container) {
    super.setup(data, container);

    GLGraphics.setup(this.canvas);

    const transition = data.option.transition;

    this.mesh.material = new XMaterial({
      vertexShader: transition.vertexShader,
      fragmentShader: transition.fragmentShader,
      uniforms: Utils.extend(transition.uniforms, this._uniform0),
    });
  }

  dispose() {
    super.dispose();

    GLGraphics.deleteProgram(this.mesh.material.program);
    this.mesh.material = undefined;
  }

  render(indexer) {
    super.render(indexer);

    GLGraphics.clear(this.scene.context);
    GLGraphics.renderModel(this.model);
  }

  resize(w, h) {
    super.resize(w, h);

    this.canvas.setAttribute('width', w);
    this.canvas.setAttribute('height', h);

    this.scene.camera.setViewport(0, 0, w, h);
  }
}
