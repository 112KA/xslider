import {Program, Uniform} from './assets/Program'
import {Texture} from './assets/Texture'

export class Material {
    constructor(option) {
        
        this.program = new Program();
        this.program.vertex.updateSource(option.vertexShader);
        this.program.fragment.updateSource(option.fragmentShader);

        this.uniforms = option.uniforms;

        if(this.uniforms) {
            let textureCount = -1;
            Object.keys(this.uniforms).forEach((key) => {
                let o = this.uniforms[key];
                if(o.value instanceof Texture) {
                    this.program.addUniform(new Uniform(key, o, ++textureCount));
                }
                else {
                    this.program.addUniform(new Uniform(key, o));
                }
            });
        }
    }
}