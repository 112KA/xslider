import {Asset} from './Asset'
import {Buffer, VarFormat} from './Buffer'
import {Texture} from './Texture'
import {Matrix3, Matrix4} from '../../../geom/Matrix'
import { Vec2, Vec3, Vec4 } from '../../../geom/Vec';


export const ShaderVarFormat = {
    Int:"Int",
    Float:"Float",
    Vector2:"Vector2",
    Vector3:"Vector3",
    Vector4:"Vector4",
    Matrix3:"Matrix3",
    Matrix4:"Matrix4"
}

const getSizeFromShaderVarFormat = format => {
    switch(format) {
        case ShaderVarFormat.Int:
        case ShaderVarFormat.Float:
            return 1;
        case ShaderVarFormat.Vector2:
            return 2;
        case ShaderVarFormat.Vector3:
            return 3;
        case ShaderVarFormat.Vector4:
            return 4;
        case ShaderVarFormat.Matrix3:
            return 9;
        case ShaderVarFormat.Matrix4:
            return 16;
        default:
            return 0;
            
    }
}


export class ShaderVar extends Asset {
    constructor(name, varFormat, shaderVarFormat) {
        super();

        this.name = name;
        this.format = varFormat;
        this.shaderVarFormat = shaderVarFormat;

        this.offset = 0;
        this.size = getSizeFromShaderVarFormat(shaderVarFormat);
    }
}


export class Uniform extends ShaderVar {
    constructor(name, valueObject, textureUnit=-1) {

        let varFormat;
        let shaderVarFormat;

        if(valueObject) {
            varFormat = valueObject.value instanceof Texture ? VarFormat.Int : VarFormat.Float;
            shaderVarFormat = ShaderVarFormat.Float;
    
            if(valueObject.value instanceof Texture) {
                shaderVarFormat = ShaderVarFormat.Int;
            }
            else if(valueObject.value instanceof Matrix3) {
                shaderVarFormat = ShaderVarFormat.Matrix3;
            }
            else if(valueObject.value instanceof Matrix4) {
                shaderVarFormat = ShaderVarFormat.Matrix4;
            }
            else if(valueObject.value instanceof Vec2) {
                shaderVarFormat = ShaderVarFormat.Vector2;
            }
            else if(valueObject.value instanceof Vec3) {
                shaderVarFormat = ShaderVarFormat.Vector3;
            }
            else if(valueObject.value instanceof Vec4) {
                shaderVarFormat = ShaderVarFormat.Vector4;
            }
        }

        super(name, varFormat, shaderVarFormat);

        this.valueObject = valueObject;
        this.textureUnit = textureUnit;
    }
}


Uniform.Binding = {
    Projection: "projectionMatrix",
    ModelView: "modelViewMatrix"
}


export class Shader extends Asset {
    constructor(type) {
        super();

        this.type = type;
    }

    updateSource(source) {
        this.source = source;
    }
}

Shader.VERTEX = "VERTEX_SHADER";
Shader.FRAGMENT = "FRAGMENT_SHADER";

export class Program extends Asset {
    constructor() {
        super();

        this.vertex = new Shader(Shader.VERTEX);
        this.fragment = new Shader(Shader.FRAGMENT);

        this.attributes = [];
        this.uniforms = [];

        this.stride = 0;

        // this.uniformBuffer = new Buffer(VarFormat.Float, Buffer.Type.Interleaved, Buffer.Usage.Static);
        // this.uniformBuffserSize = 0;
    }

    addAttribute(attribute) {
        this.attributes.push(attribute);
        this.needsUpdate = true;
    }

    addUniform(uniform) {
        this.uniforms.push(uniform);
        this.needsUpdate = true;
    }

    update() {
        this.stride = 0;

        const bytes_per_float = 4;

        for(let i=0; i<this.attributes.length; i++) {
            let a = this.attributes[i];
            a.offset = this.stride;
            this.stride += bytes_per_float * a.size;
        }

        // this.uniformBuffserSize = 0;
        // for(let i=0; i<this.uniforms.length; i++) {
        //     let u = this.uniforms[i];
        //     u.offset = this.uniformBuffserSize;
        //     this.uniformBufferSize += bytes_per_float * u.size;
        // }

        // this.uniformBuffer.allocate(this.uniformBufferSize);
    }
}