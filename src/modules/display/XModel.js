import {Material} from '../components/graphics/Material'
import {Model} from '../components/graphics/nodes/Node'
import {VarFormat} from '../components/graphics/assets/Buffer'
import {ShaderVar, ShaderVarFormat} from '../components/graphics/assets/Program'
import {Texture} from '../components/graphics/assets/Texture'
import {Utils} from '../components/Utils'
import {Vec2} from '../geom/Vec'


export class XModel extends Model {
    constructor(option) {
        super();

        const vertices = [
            -1.0, -1.0, 
             1.0, -1.0, 
             1.0,  1.0, 
            -1.0,  1.0, 
        ];

        this.mesh.vertexBuffer.allocate(vertices.length);
        this.mesh.vertexBuffer.put(vertices);

        const indices = [0, 1, 2, 0, 2, 3];
        this.mesh.indexBuffer.allocate(indices.length);
        this.mesh.indexBuffer.put(indices);

        this.mesh.material = new Material({
            vertexShader:option.vertexShader, 
            fragmentShader:option.fragmentShader,
            uniforms: Utils.extend(option.uniforms, {
				texture0: { value: new Texture() },
				texture1: { value: new Texture() },
				progress:{ value: 0 },
				resolution: { value: new Vec2(0.0, 0.0) },
			})
        });

        this.mesh.material.program.addAttribute(new ShaderVar("position", VarFormat.Float, ShaderVarFormat.Vector2));
    }
}