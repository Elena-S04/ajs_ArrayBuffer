export default function getBuffer(dataForBuffer) {
  const data = dataForBuffer;
  return ((input) => {
    const buffer = new ArrayBuffer(input.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return bufferView;
  })(data);
}
