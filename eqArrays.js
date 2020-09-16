//TEST FUNCTION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🌈🌈 Assertion Passed: ${actual} === ${expected} 🌈🌈`);
  } else {
    console.log(`🚧🚧 Assertion Failed: ${actual} !== ${expected} 🚧🚧`);
  }
};

// This function compares arrays and returns a boolean value if they are equivalent
const eqArrays = function (arr1, arr2) {
  // Define a boolean value as true
  let equality = true;
  // declare an index counter
  let index = -1
  // as long as the index is less than the length of the array and the boolean remains true ...
  while (index < arr1.length && equality) {
    // increment the index
    index++
    // then see if the elements at the index are not the same in both arrays. If they are not...
    if (arr1[index] !== arr2[index]) {
      equality = false;
    }
  }
  return equality;
}












