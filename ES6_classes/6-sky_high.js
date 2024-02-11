import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.sqft = sqft;
    this.floors = floors;
  }

  get gsqft() {
    return this._sqft;
  }

  set gsqft(s) {
    this._sqft = s;
  }

  get floors() {
    return this._floors;
  }

  set floors(val) {
    this._floors = val;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
