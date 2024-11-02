import ArrayBufferConverter from "../arrayBufferConverter";


function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

const bufferEmulator = getBuffer();

test('should load the buffer', () => {
  const bufferConverter = new ArrayBufferConverter();
  const result = bufferConverter.load(bufferEmulator);
  const expected = new Uint16Array(bufferEmulator);

  expect(result).toEqual(expected);
});

test('should convert the buffer to the string', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(bufferEmulator);
  const result = bufferConverter.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(result).toBe(expected);
});
