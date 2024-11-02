export default class ArrayBufferConverter {
  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
    return this.bufferView;
  }

  toString() {
    return [...this.bufferView].map(symbolCode => String.fromCharCode(symbolCode)).join("");
  }
}
