import {Color} from '../../../geom/Color'
import {Node3D, Camera3D} from './Node'


export class SceneContext {
    constructor() {
        this.clear = {
            color: true,
            depth: false,
            stencil: false
        }

        this.test = {
            depth: false,
            stencil: false
        }

        this.color = new Color();
    }
}

export class Scene3D extends Node3D {
    constructor() {
        super();

        this.context = new SceneContext();

        this.camera = new Camera3D();
    }

    addChild(child) {
        super.addChild(child);

        child.scene = this;
    }
}