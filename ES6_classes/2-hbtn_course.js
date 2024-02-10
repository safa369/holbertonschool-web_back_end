export default class HolbertonCourse {
  constructor(name = '', length = 0, students = []) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw new TypeError('TypeError: Name must be a string');
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
      if (!s.every((input) => typeof input !== 'string')) {
        throw new TypeError('Students must be an array');
      }
    }
    this._students = s;
  }
}
