// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🌈🌈 Assertion Passed: ${actual} === ${expected} 🌈🌈`);
  } else {
    console.log(`🚧🚧 Assertion Failed: ${actual} !== ${expected} 🚧🚧`);
  }
};


// countOnly js take an array and an object. It searches for each instance of a key with a truthy value in the object which appears in the array and outputs a new object with the count of each key
const countOnly = function(arr, obj) {
  // define an output object
  const output = {};
  for (const key in obj){
    // loop through the object. For each truthy key ...
    if (obj[key]) {
      // define a counter variable set at zero
      let count = 0
      // loop through the array
      for (const elm of arr) {
        // for each match
        if (key === elm) {
          // increment the count by one
          count ++
        }
      }
      if (count > 0) {
        output[key] = count;
      }
    }
  }
  return output;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);