export default function hasValuesFromArray(arrSet, array) {
  return array.every((values) => arrSet.has(values));
}