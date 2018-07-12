import {Material} from '../components/graphics/Material'
import {Model3D} from '../components/graphics/nodes/Node'
import {VarFormat} from '../components/graphics/assets/Buffer'
import {ShaderVar, ShaderVarFormat} from '../components/graphics/assets/Program'


export class XModel extends Model3D {
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
            uniforms: option.uniforms
        });

        this.mesh.material.program.addAttribute(new ShaderVar("position", VarFormat.Float, ShaderVarFormat.Vector2));
    }
}