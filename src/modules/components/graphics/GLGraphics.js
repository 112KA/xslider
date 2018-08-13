import {Buffer} from './assets/Buffer'
import {ShaderVarFormat, Uniform} from './assets/Program'
import {Texture} from './assets/Texture'
import { Vec4 } from '../../geom/Vec';


const GraphicsContext = {
    bound: {
        sceneContext: undefined,
        program: undefined,
        viewport: new Vec4()
    },

    test: {
        depth: false,
        stensil: false
    },

    reset: function() {
        this.bound = {
            sceneContext: undefined,
            program: undefined,
            viewport: new Vec4()
        }

        this.test = {
            depth: false,
            stensil: false
        }
    }
}




export const GLGraphics =  {

    setup: function(canvas) {
        const params = {
            alpha: true,
            premultipliedAlpha: false
        }
        this._gl = canvas.getContext("webgl", params) || canvas.getContext("experimental-webgl", params);
        if(!this.context) {
            this.context = GraphicsContext;
        }
        else {
            this.context.reset();
        }
    },

    updateTexture: function(texture, textureUnit) {
        const gl = this._gl;

        if(!texture.location) {
            texture.location = gl.createTexture();
        }

        gl.activeTexture(gl["TEXTURE"+textureUnit]);
        gl.bindTexture(gl.TEXTURE_2D, texture.location);

        if(texture.needsUpdate) {
            texture.needsUpdate = false;

			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );

            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            if(texture.image) {
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
            }
            else {
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0,0,0,0]));
            }

        }
    },

    deleteTexture: function(texture) {
        if(texture.location) {
            this._gl.deleteTexture(texture.location);
            texture.location = undefined;
        }
    },


    updateProgram: function(program) {
        const gl = this._gl;

        if(!program.location) {
            program.location = gl.createProgram();

            this.updateShader(program.vertex);
            gl.attachShader(program.location, program.vertex.location);

            this.updateShader(program.fragment)
            gl.attachShader(program.location, program.fragment.location);
            
            gl.linkProgram(program.location);
            
            this.deleteShader(program.vertex);
            this.deleteShader(program.fragment);

            if (!gl.getProgramParameter(program.location, gl.LINK_STATUS)) {
                throw new Error("Could not initialise shaders");
            }
        }
        
        gl.useProgram(program.location);
        
        this.context.bound.program = program;

        if(program.needsUpdate) {
            program.update();
            program.needsUpdate = false;
        }

        for(let i=0; i<program.attributes.length; i++) {
            this.updateAttribute(program.attributes[i], program.stride);
        }

        for(let i=0; i<program.uniforms.length; i++) {
            this.updateUniform(program.uniformBuffer, program.uniforms[i]);
        }
    },

    deleteProgram: function(program) {
        const gl = this._gl;

        if(program.location) {
            gl.deleteProgram(program.location);
        }
    },

    updateShader: function(shader) {
        const gl = this._gl;

        if(!shader.location) {
            shader.location = gl.createShader(gl[shader.type]);
        }

        gl.shaderSource(shader.location, shader.source);
        gl.compileShader(shader.location);

        if (!gl.getShaderParameter(shader.location, gl.COMPILE_STATUS)) {
            throw new Error(gl.getShaderInfoLog(shader.location));
        }
    },

    deleteShader: function(shader) {
        const gl = this._gl;

        if(shader.location) {
            gl.deleteShader(shader.location);
            shader.location = undefined;
        }
    },

    updateAttribute: function(attribute, stride) {
        const gl = this._gl;
        const a = attribute;

        if(!a.location) {
            a.location = gl.getAttribLocation(this.context.bound.program.location, a.name);

            if(a.location < 0) {
                throw new Error("attribute " + a.name + " undefined.");
            }
        
            gl.enableVertexAttribArray(a.location);
        }

        gl.vertexAttribPointer(a.location, a.size, gl[a.format], gl.FALSE, stride, a.offset);
    },

    updateUniform: function(buffer, uniform) {
        const gl = this._gl;

        if(!uniform.location) {
            uniform.location = gl.getUniformLocation(this.context.bound.program.location, uniform.name);
        }

        switch(uniform.name) {
            case Uniform.Binding.ModelView:
                gl.uniformMatrix4fv(uniform.location, false, bound.model.matrix.local.data);
            break;
            case Uniform.Binding.Projection:
                gl.uniformMatrix4fv(uniform.location, false, bound.camera.matrix.projection.data);
            break;
            default:
                if(uniform.valueObject.value instanceof Texture) {
                    this.updateTexture(uniform.valueObject.value, uniform.textureUnit);
                    gl.uniform1i(uniform.location, uniform.textureUnit);
                }
                else {
                    switch(uniform.shaderVarFormat) {
                        case ShaderVarFormat.Int:
                        gl.uniform1i(uniform.location, uniform.valueObject.value);
                        break;
        
                        case ShaderVarFormat.Float:
                        gl.uniform1f(uniform.location, uniform.valueObject.value);
                        break;
        
                        case ShaderVarFormat.Vector2:
                        gl.uniform2fv(uniform.location, uniform.valueObject.value.data);
                        break;
        
                        case ShaderVarFormat.Vector3:
                        gl.uniform3fv(uniform.location, uniform.valueObject.value.data);
                        break;
        
                        case ShaderVarFormat.Vector4:
                        gl.uniform4fv(uniform.location, uniform.valueObject.value.data);
                        break;
        
                        case ShaderVarFormat.Matrix3:
                        gl.uniformMatrix3fv(uniform.location, uniform.valueObject.value.data);
                        break;
                        
                        case ShaderVarFormat.Matrix4:
                        gl.uniformMatrix4fv(uniform.location, uniform.valueObject.value.data);
                        break;
                    }
                }
        }

    },


    updateBuffer: function(buffer) {

        const gl = this._gl;

        if(!buffer.location) {
            buffer.location = gl.createBuffer();
        }

        let target;

        if(buffer.bufferType !== Buffer.Type.Index) {
            target = gl.ARRAY_BUFFER;
        }
        else {
            target = gl.ELEMENT_ARRAY_BUFFER;
        }

        gl.bindBuffer(target, buffer.location);

        if(buffer.needsUpdate) {
            gl.bufferData(target, buffer.data, gl[buffer.usage]);
            buffer.needsUpdate = false;
        }
    },


    updateSceneContext: function(sceneContext) {
        if(this.context.bound.sceneContext === sceneContext) return;

        const gl = this._gl;

        if(this.context.test.depth != sceneContext.test.depth) {
            sceneContext.test.depth ? gl.enable(gl.DEPTH_TEST) : gl.disable(gl.DEPTH_TEST);
            this.context.test.depth = sceneContext.test.depth;
        }

        if(this.context.test.stencil != sceneContext.test.stencil) {
            sceneContext.test.stencil ? gl.enable(gl.STENCIL_TEST) : gl.disable(gl.STENCIL_TEST);
            this.context.test.stencil = sceneContext.test.stencil;
        }

        this.context.bound.sceneContext = sceneContext;
    },


    updateCamera: function(camera) {
        this.context.bound.camera = camera;

        const v = camera.viewport;

        if(!this.context.bound.viewport.equals(v)) {
            this.context.bound.viewport.set(v.x, v.y, v.z, v.w);
            this._gl.viewport(v.x, v.y, v.width, v.height);
        }
    },


    clear: function(sceneContext) {
        const gl = this._gl;

        const c = sceneContext;
        let bits = 0;

        if(c.clear.color) {
            gl.clearColor(c.color.r, c.color.g, c.color.b, c.color.a);
            bits |= gl.COLOR_BUFFER_BIT;
        }

        if(c.clear.depth) {
            bits |= gl.DEPTH_BUFFER_BIT;
        }

        if(c.clear.stencil) {
            bits |= gl.STENCIL_BUFFER_BIT;
        }

        gl.clear(bits);
    },


    renderModel: function(model) {
        this.context.bound.model = model;

        if(model.scene) {
            this.updateSceneContext(model.scene.context);
        }

        this.updateCamera(model.scene.camera);

        this.renderMesh(model.mesh);
    },


    renderMesh: function(mesh, mat) {
        const gl = this._gl;

        this.updateBuffer(mesh.vertexBuffer);
        this.updateProgram(mesh.material.program);

        let bf = mesh.indexBuffer;

        this.updateBuffer(bf);
        gl.drawElements(gl[bf.drawMode], bf.limit, gl[bf.format], 0);
    }
}
