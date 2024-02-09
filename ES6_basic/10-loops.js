export default function appendToEachArrayValue(array, appendString) {
  let newar = [];
  for (let value of array) {
    newar.push(`${appendString}${value}`);
  }

  return newar;
}
