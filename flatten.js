// This function compares arrays and returns a boolean value if they are equivalent
const eqArrays = function (arr1, arr2) {
  // Define a boolean value as true
  let equality = true;
  // declare an index counter
  let index = -1;
  // as long as the index is less than the length of the array and the boolean remains true ...
  while (index < arr1.length && equality) {
    // increment the index
    index++;
    // then see if the elements at the index are not the same in both arrays. If they are not...
    if (arr1[index] !== arr2[index]) {
      equality = false;
    }
  }
  return equality;
};

//TEST FUNCTION
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🌈🌈 Assertion Passed: ${actual} === ${expected} 🌈🌈`);
  } else {
    console.log(`🚧🚧 Assertion Failed: ${actual} !== ${expected} 🚧🚧`);
  }
};


const flatten = function(arr) {
  // declare an output array
  const output = [];
  // loop through an array
  for (let elm of arr) {
    // is the array element also an array? If so, loop through this array and push each element to output
    if (Array.isArray(elm)) {
      for (let item of elm) {
        output.push(item);
      }
    } else {
      output.push(elm);
    }
  }
  // otherwise, push the element to output
  return output;
}





