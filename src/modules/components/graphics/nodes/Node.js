import {EventDispatcher} from '../../../core/EventDispatcher'
import {Mesh} from '../Mesh'
import {Vec4} from '../../../geom/Vec'
// import {Matrix3, Matrix4} from '../../../geom/Matrix'

export class Node extends EventDispatcher {
    constructor() {
        super();

        this.children = [];

        this.matrix = {}
    }

    addChild(node) {
        this.children.push(node);
    }
}

// export class Node2D extends Node {
//     constructor() {
//         super();

//         this.matrix.local = new Matrix3();
//     }
// }

// export class Node3D extends Node {
//     constructor() {
//         super();

//         this.matrix.local = new Matrix4();
//     }
// }

export class Model extends Node {
    constructor() {
        super();

        this.mesh = new Mesh();
    }
}

export class Camera extends Node {
    constructor() {
        super();

        this.viewport = new Vec4();

        // this.matrix.projection = new Matrix4();
        // this.matrix.view = new Matrix4();
        // this.matrix.viewProjection = new Matrix4();
    }

    // perspective(fov, aspect, near, far) {
    //     this.matrix.projection.perspective(fov, aspect, near, far);
    // }

    setViewport(x, y, width, height) {
        this.viewport.set(x, y, width, height);
        // this.perspective(60, width/height, 0.1, 100);
    }
}