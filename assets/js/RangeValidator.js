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
    if (typeof from !== "number") {
      throw new SyntaxError("input value should be an integer");
    }
    if (from > this.to) {
      throw new RangeError("FROM is larger than TO");
    }
    this._from = from;
  }

  get to() {
    return this._to;
  }

  set to(to) {
    if (typeof to !== "number") {
      throw new SyntaxError("input value should be an integer");
    }
    if (to < this.from) {
      throw new RangeError("TO is smaller than FROM");
    }
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
