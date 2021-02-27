import { Material } from '../components/graphics/Material';
import { Model } from '../components/graphics/nodes/Node';
import { VarFormat } from '../components/graphics/assets/Buffer';
import { ShaderVar, ShaderVarFormat } from '../components/graphics/assets/Program';

export class XMaterial extends Material {
  constructor(option) {
    super(option);

    this.program.addAttribute(new ShaderVar('position', VarFormat.Float, ShaderVarFormat.Vector2));
  }
}

export class XModel extends Model {
  constructor() {
    super();

    const vertices = [-1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0];

    this.mesh.vertexBuffer.allocate(vertices.length);
    this.mesh.vertexBuffer.put(vertices);

    const indices = [0, 1, 2, 0, 2, 3];
    this.mesh.indexBuffer.allocate(indices.length);
    this.mesh.indexBuffer.put(indices);
  }

  set material(material) {
    this.mesh.material = material;
  }
}
