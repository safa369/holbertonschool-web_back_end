export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
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
    this._currency = valc;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
