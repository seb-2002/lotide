const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

let arr1 = [1, 2, 3, 4, 5, 6, 7]; // expected output --> [4]
let arr2 = [1, 2, 3, 4, 5, 6]; // expected output --> [3, 4]

assertArraysEqual(middle(arr1), [4]);
assertArraysEqual(middle(arr2), [3, 4]);