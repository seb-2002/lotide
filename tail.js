//TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌈🌈 Assertion Passed: ${actual} === ${expected} 🌈🌈`);
  } else {
    console.log(`🚧🚧 Assertion Failed: ${actual} !== ${expected} 🚧🚧`);
  }
};


//TAIL FUNCTION
const tail = function(arr) {
  let tailArr = [];
  for (let i = arr.length - 1; i > 0; i--) {
    tailArr.unshift(arr[i]);
  }
  return tailArr;
};


//ARR ASSERT EQUAL
const assertArray = function(actual, answer) {
  let actualStr = "";
  let answerStr = "";
  for (let elm of actual) {
    actualStr += elm;
  }
  for (let val of answer) {
    answerStr += val;
  }
  assertEqual(actualStr, answerStr);
};

