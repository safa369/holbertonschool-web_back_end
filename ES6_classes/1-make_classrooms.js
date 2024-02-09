import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const a1 = new ClassRoom(19);
  const a2 = new ClassRoom(20);
  const a3 = new ClassRoom(34);
  const tab = [a1, a2, a3];
  return tab;
}
