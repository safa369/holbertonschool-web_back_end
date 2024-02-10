import Currency from './3-currency';

export default class Pricing {
  constructor(amount = 0, currency = {}) {
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${Currency.name} (${Currency.code})`;
  }

  get gamount() {
    return this._amount;
  }

  set gamount(am) {
    this._amount = am;
  }

  static convertPrice(amount = 0, conversionRate = 0) {
    return amount * conversionRate;
  }
}
