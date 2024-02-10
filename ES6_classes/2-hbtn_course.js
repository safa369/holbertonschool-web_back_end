export default class HolbertonCourse {
  constructor(nam = '', length = 0, students = []) {
    this._name = name;
    this._length = length;
    this._students = students;
    }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = n;
  }

  get length() {
    return this._length;
  }

  set length(l) {
    if (typeof l !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = l;
  }

  get stud() {
    return this._students;
  }

  set stud(s) {
    if (!Array.isArray(s)) {
      throw new TypeError('Students must be an array');
    }
    this._students = s;
  }
}
