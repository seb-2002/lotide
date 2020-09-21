const eqArrays = require('../eqArrays');
const assert = require("chai").assert;

describe('#eqArrays', () => {
  it('returns true when given two equal arrays', () => {
    assert.isTrue(eqArrays(myArray, myArray));
  });
  it('returns false when passed two unequal arrays', () => {
    assert.isFalse(eqArrays(myArray, my2ndArray));
  });
});

let myArray = [1, 2, 3, 4];
let my2ndArray = [1, 2, 3, 5];

