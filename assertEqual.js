// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌈🌈 Assertion Passed: ${actual} === ${expected} 🌈🌈`);
  } else {
    console.log(`🚧🚧 Assertion Failed: ${actual} !== ${expected} 🚧🚧`);
  }
};


module.exports = assertEqual;


// TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 300);
