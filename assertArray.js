//TEST FUNCTION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🌈🌈 Assertion Passed: ${actual} === ${expected} 🌈🌈`);
  } else {
    console.log(`🚧🚧 Assertion Failed: ${actual} !== ${expected} 🚧🚧`);
  }
};


//ARR ASSERT EQUAL
const assertArray = function(actual, answer){
  actualStr = "";
  answerStr = "";
  for (let elm of actual) {
    actualStr += elm;
  };
  for (let val of answer){
    answerStr += val;
  }
  assertEqual(actualStr, answerStr);
};