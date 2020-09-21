const assert = require('chai').assert;
const countLetters = require('../countLetters');

let string = 'hello'
let stringObject = {h : 1, e : 1, l : 2, o : 1};

describe('#countLetters', () => {
  it("takes a string and returns an object in which each letter appearing in the string is a key and a count is the value", () => {
    assert.deepEqual(countLetters(string), stringObject);
  });
});