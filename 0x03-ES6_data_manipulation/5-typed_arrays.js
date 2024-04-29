export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const int8View = new Int8Array(buffer);

  if (position < int8View.length) {
    int8View[position] = value;
  } else {
    throw new Error("Position outside range");
  }

  return new DataView(buffer);
}
