const middle = require('../middle');
const assert = require('chai').assert

let arr1 = [1, 2, 3, 4, 5, 6, 7]; // expected output --> [4]
let arr2 = [1, 2, 3, 4, 5, 6]; // expected output --> [3, 4]

describe('#middle', () => {
  it ('returns a one-element array containing middle element of an array of odd length', () => {
    assert.deepEqual(middle(arr1), [4]);
  });
  
  it ('returns an array of the two central elements of an even-length array', () => {
    assert.deepEqual(middle(arr2), [3,4]);
  });
});