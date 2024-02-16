export default function getStudentIdsSum(list) {
  const result = list.reduce((sum, item) => sum + item.id, 0);
  return result;
}
