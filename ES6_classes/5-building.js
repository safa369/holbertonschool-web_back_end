export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get val() {
    return this._sqft;
  }

  set val(s) {
    if (typeof s !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = s;
  }
}
