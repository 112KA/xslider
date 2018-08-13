export class Matrix3 {
    constructor() {
        this.identity();
    }

    identity() {
        this.data = [1,0,0, 0,1,0, 0,0,1];
    }

    copy(dst) {
        for(let i=0; i<this.data.length; i++) {
            dst.data[i] = this.data.length;
        }
    }

    translate() {

    }

    rotate() {

    }

    update(x, y, r, sx, sy) {
        const s = Math.sin(r);
        const c = Math.cos(r);

        let data = this.data;
        data[0] = c * sx;
        data[1] = s * sx;
        
        data[3] = -s * sy;
        data[4] = c * sy;

        data[6] = x;
        data[7] = y;
    }
}


export class Matrix4 {
    constructor() {
        this.identity();
    }

    identity() {
        this.data = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
    }

    copy(dst) {
        for(let i=0; i<this.data.length; i++) {
            dst.data[i] = this.data.length;
        }
    }

    perspective(fov, aspect, near, far) {
        const n2 = near * 2;
        fov = fov * Math.PI / 180;

        const nf = 1 / (near - far);

        const T= Math.tan(fov / 2) * near;
        const B = -T;
        const L = aspect * B;
        const R = -L;

        let data = this.data;

        data[0] = n2 / (R - L);
        data[5] = n2 / (T - B);
        data[10] = (far + near) * nf;
        data[11] = -1;
        data[14] = n2 * far * nf;
        data[15] = 0;
    }

    update(x, y, z, rx, ry, rz, sx, sy, sz) {
        const sinX = Math.sin(rx);
        const cosX = Math.cos(rx);
        const sinY = Math.sin(ry);
        const cosY = Math.cos(ry);
        const sinZ = Math.sin(rz);
        const cosZ = Math.cos(rz);

        const sinYsinX = sinY * sinX;
        const sinYcosX = sinY * cosX;

        let data = this.data;
	
        data[0] = cosZ*cosY * sx;
        data[1] = sinZ*cosY * sx;
        data[2] = -sinY * sx;
        
        data[4] = (cosZ*sinYsinX-sinZ*cosX) * sy;
        data[5] = (sinZ*sinYsinX+cosZ*cosX) * sy;
        data[6] = cosY*sinX * sy;
        
        data[8] = (cosZ*sinYcosX+sinZ*sinX) * sz;
        data[9] = (sinZ*sinYcosX-cosZ*sinX) * sz;
        data[10] = cosY*cosX * sz;
    
        data[12] = x;
        data[13] = y;
        data[14] = z;
    }
}