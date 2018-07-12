import {EventDispatcher} from '../../core/EventDispatcher'
import {Buffer, VarFormat, IndexBuffer} from './assets/Buffer'

export class Mesh extends EventDispatcher {
    constructor() {
        super();

        this.vertexBuffer = new Buffer(VarFormat.Float, Buffer.Type.Interleaved, Buffer.Usage.Static);
        this.indexBuffer = new IndexBuffer(IndexBuffer.DrawMode.Triangles);
    }
}