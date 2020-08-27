"use strict";

class RangeValidator {
  constructor(from, to) {
    this._from = from;
    this._to = to;
  }

  get from() {
    return this._from;
  }

  set from(from) {
    this._from = from;
  }

  get to() {
    return this._to;
  }

  set to(to) {
    this._to = to;
  }

  get range() {
    return new Array(this._from, this._to);
  }

  validate(number) {
    return number >= this._from && number <= this._to;
  }
}

export { RangeValidator };
