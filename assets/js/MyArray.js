"use strict";

class MyArray {
  constructor() {
    this.length = 0;
  }
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
      return this.length;
    }
  }

  pop() {
    const lastIndex = this.length - 1;
    const lastItem = this[lastIndex];
    delete this[lastIndex];
    --this.length;
    return lastItem;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  concat(array) {
    let result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }

    for (let i = 0; i < array.length; i++) {
      result.push(array[i]);
    }
    return result;
  }

  flat(depth = 1) {
    if (depth < 0) {
      console.error("depth must be a positive value");
      return;
    }

    let newArr = new MyArray();

    if (depth === 0) {
      return this;
    }

    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {
        const buffer = this[i].flat(depth - 1);

        newArr = newArr.concat(buffer);
      } else if (this[i] !== undefined) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  }

  shift() {
    const { length } = this;
    const firstValue = this[0];

    for (let i = 1; i < length; i++) {
      const value = this[i];
      this[i - 1] = value;
    }

    this.length = length - 1;
    return firstValue;

    
    // let firstElement = this[0];
    // delete this[0];
    // --this.length;
    // for (let i = 1; i < length; i++) {
    //   const value = this[i];
    //   this[i - 1] = value;
    // }
    // this.length = length - 1;
    // return firstElement;
  }

  unshift(...elements) {
    elements.forEach((element) => this.push(element));
    return this.length;
  }
}

export { MyArray };
