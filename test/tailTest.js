const assert = require('chai').assert
const tail = require('../tail');

let array = [1, 2, 3, 4, "lion"];
let arrayTail = [2, 3, 4, "lion"];

describe('#tail', () => {
  it ('returns all but the first element of an array', () => {
    assert.deepEqual(tail(array), arrayTail);
  });
});


