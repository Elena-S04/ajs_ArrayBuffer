import getBuffer from "./getBuffer";

export default class ArrayBufferConverter {
  load(buffer) {
    const bufferToParse = getBuffer(buffer);
    this.string = bufferToParse;
  }

  toString() {
    const arrToString = [];
    const buffer = this.string;
    for (let i = 0; i < buffer.length; i += 1) {
      arrToString.push(String.fromCharCode(buffer[i]));
    }
    const string = arrToString.join("");
    return string;
  }
}
