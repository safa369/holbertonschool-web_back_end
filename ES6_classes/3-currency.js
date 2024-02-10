export default class Currency {
  constructor(code = '', name = '0') {
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  get code() {
    return this._code;
  }

  set code(c) {
    this._code = c;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    this._name = n;
  }
}
