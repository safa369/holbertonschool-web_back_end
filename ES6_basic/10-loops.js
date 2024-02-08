export default function appendToEachArrayValue(array, appendString) {
  const newar = [];
  for (const [idx, value] of array.entries()) {
    newar[idx] = appendString + value;
  }

  return newar;
}
