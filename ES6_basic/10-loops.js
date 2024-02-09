export default function appendToEachArrayValue(array, appendString) {
  const newar = [];
  for (const value of array) {
    newar.push(`${appendString}${value}`);
  }

  return newar;
}
