import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  get gamount() {
    return this._amount;
  }

  set gamount(am) {
    if (typeof am !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = am;
  }

  get curr() {
    return this._currency;
  }

  set curr(valc) {
    if (valc instanceof Currency) {
      throw new TypeError('currency must be a Currency');
    }
    return this._currency = valc;
  }

  static convertPrice(amount = 0, conversionRate = 0) {
    return amount * conversionRate;
  }
}
