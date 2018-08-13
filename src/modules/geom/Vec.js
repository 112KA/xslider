export class Vec2 {
	constructor(x=0,y=0) {
		this.set(x, y);
	}

	set(x, y) {
		this.data = [x,y];
	}

	get x() { return this.data[0]; }
	get y() { return this.data[1]; }

	set x(v) { this.data[0] = v; }
	set y(v) { this.data[1] = v; }
}

export class Vec3 {
	constructor(x=0,y=0,z=0) {
		this.set(x, y, z);
	}

	set(x, y, z) {
		this.data = [x,y,z];
	}

	get x() { return this.data[0]; }
	get y() { return this.data[1]; }
	get z() { return this.data[2]; }

	set x(v) { this.data[0] = v; }
	set y(v) { this.data[1] = v; }
	set z(v) { this.data[2] = v; }
}

export class Vec4 {
	constructor(x=0,y=0,z=0,w=0) {
		this.set(x, y, z, w);
	}

	set(x, y, z, w) {
		this.data = [x,y,z,w];
	}
	

	set width(v) {
		this.data[2] = v;
	}

	get width() {
		return this.data[2];
	}

	set height(v) {
		this.data[3] = v;
	}

	get height() {
		return this.data[3];
	}

	get x() { return this.data[0]; }
	get y() { return this.data[1]; }
	get z() { return this.data[2]; }
	get w() { return this.data[3]; }

	set x(v) { this.data[0] = v; }
	set y(v) { this.data[1] = v; }
	set z(v) { this.data[2] = v; }
	set w(v) { this.data[3] = v; }

	equals(v) {
		return this.x===v.x&&this.y==v.y&&this.z==v.z&&this.w==v.w;
	}
}