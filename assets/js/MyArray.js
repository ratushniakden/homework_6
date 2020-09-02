"use strict";

class MyArray {
  constructor() {
    this.length = 0;
  }
  push(...args) {
    for (const item of args) {
      this[this.length++] = item;
    }
    return this.length;
  }

  pop() {
    const lastElement = this[this.length - 1];
    delete this[this.length - 1];
    --this.length;
    return lastElement;
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
    if (this.length === 0) {
      return;
    }

    const deletedElement = this[0];

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }

    delete this[this.length - 1];
    this.length--;
    return deletedElement;
  }

  unshift(...items) {
    const newLength = this.length + items.length;

    for (let i = newLength; i > items.length; i--) {
      this[i - 1] = this[i - items.length - 1];
    }

    for (let i = 0; i < items.length; i++) {
      this[i] = items[i];
    }

    this.length = newLength;
    return this.length;
  }
}

export { MyArray };
