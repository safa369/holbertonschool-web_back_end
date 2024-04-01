export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  } else {
    const Buffer = new ArrayBuffer(length);
    const dataView = new DataView(Buffer, 0, length);
    const newArray = new Int8Array(Buffer);
    newArray[position] = value;
    return dataView;
  }
}
