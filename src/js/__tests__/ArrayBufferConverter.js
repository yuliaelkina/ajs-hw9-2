import getBuffer from "./getBuffer";

class ArrayBufferConverter {

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    let string = '';
    const bufferView = new Uint16Array(this.buffer);
    for (let i = 0; i < this.buffer.byteLength/2; i++) {
      string += String.fromCharCode(bufferView[i]);
    }
    return string;
  }
};

const a = new ArrayBufferConverter;
a.load(getBuffer());
a.toString();