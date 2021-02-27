import { Asset } from './Asset';

export const VarFormat = {
  Byte: 'BYTE',
  UnsignedByte: 'UNSIGNED_BYTE',
  Short: 'SHORT',
  UnsignedShort: 'UNSIGNED_SHORT',
  Int: 'INT',
  UnsignedInt: 'UNSIGNED_INT',
  Float: 'FLOAT',
};

const getTypedArrayByFormat = (format, length) => {
  switch (format) {
    case VarFormat.Byte:
      return new Int8Array(length);
    case VarFormat.UnsignedByte:
      return new Uint8Array(length);
    case VarFormat.Short:
      return new Int16Array(length);
    case VarFormat.UnsignedShort:
      return new Uint16Array(length);
    case VarFormat.Int:
      return new Int32Array(length);
    case VarFormat.UnsignedInt:
      return new Uint32Array(length);
    case VarFormat.Float:
      return new Float32Array(length);
  }
  return undefined;
};

export class Buffer extends Asset {
  constructor(format, bufferType, usage) {
    super();

    this.format = format;
    this.bufferType = bufferType;
    this.usage = usage;

    this.data = getTypedArrayByFormat(this.format, 1);
  }

  clear() {
    this.position = 0;
    this.limit = 0;
    this.needsUpdate = true;
  }

  allocate(length) {
    if (this.data.length < length) {
      this.extend(length);
    }
    this.clear();
  }

  get(offset, length = 1) {
    return this.data.subarray(offset, length);
  }

  put(original) {
    if (original instanceof Array || original instanceof Float32Array) {
      this.data.set(original, this.position);
      this.position += original.length;
    } else {
      this.data[this.position] = original;
      this.position += 1;
    }

    this.limit = this.position;

    this.needsUpdate = true;
  }

  update(original, offset) {
    if (original instanceof Array || original instanceof Float32Array) {
      this.data.set(original, offset);
    } else {
      this.data[offset] = original;
    }

    this.needsUpdate = true;
  }

  extend(length) {
    const tmp = this.data;
    let v = tmp.length;
    while (v < length) {
      v *= 2;
    }
    this.data = getTypedArrayByFormat(this.format, v);
    this.data.set(tmp);
  }
}

Buffer.Usage = {
  Static: 'STATIC_DRAW',
  Dynamic: 'DYNAMIC_DRAW',
  Stream: 'STREAM_DRAW',
};

Buffer.Type = {
  Interleaved: 'Interleaved',
  Index: 'Index',
};

export class IndexBuffer extends Buffer {
  constructor(drawMode) {
    super(VarFormat.UnsignedShort, Buffer.Type.Index, Buffer.Usage.Static);

    this.drawMode = drawMode;
  }
}

IndexBuffer.DrawMode = {
  Triangles: 'TRIANGLES',
};
