"use strict";
import { RangeValidator } from "./RangeValidator.js";
import { MyArray } from "./MyArray.js";

//Task 1

let ara = new MyArray();
console.log(ara);
ara.push(1);
ara.push(2);
ara.push(3);
console.log(ara);
console.log(ara.shift());
console.log(ara);
// console.log(ara.unshift(50));
// console.log(ara);

//Task 2

let a = new RangeValidator(1, 4);
console.log(a.range);
console.log(a.validate(3));

// Array tasks

//Task 3

function checkItem(array, item) {
  return array.includes(item);
}

//Task 4

function lessThenNine(number) {
  if (number === 0) return 0;
  return ((number - 1) % 9) + 1;
}

//Task 5

function noCopies(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}
