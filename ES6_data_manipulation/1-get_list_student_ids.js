export default function getListStudentIds(par) {
  if (Array.isArray(par)) {
    return par.map((item) => item.id);
  }
  return [];
}
