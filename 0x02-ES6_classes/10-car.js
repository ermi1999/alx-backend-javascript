export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  set brand(newBrand) {
    if (typeof newBrand !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    this._brand = newBrand;
  }

  get brand() {
    return this._brand;
  }

  set motor(newMotor) {
    if (typeof newMotor !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    this._motor = newMotor;
  }

  get motor() {
    return this._motor;
  }

  set color(newColor) {
    if (typeof newColor !== 'string') {
      throw new TypeError('Color must be a string');
    }
    this._color = newColor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
