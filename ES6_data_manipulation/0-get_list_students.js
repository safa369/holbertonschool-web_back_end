export default function getListStudents() {
  const obj1 = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const obj2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const obj3 = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };
  const tab = [];
  tab.push(obj1);
  tab.push(obj2);
  tab.push(obj3);
  return tab;
}
