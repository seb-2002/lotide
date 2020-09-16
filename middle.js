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

// TEST FUNCTION
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🌈🌈 Assertion Passed: ${actual} === ${expected} 🌈🌈`);
  } else {
    console.log(`🚧🚧 Assertion Failed: ${actual} !== ${expected} 🚧🚧`);
  }
};

// Middle.js take and array and outputs an array of the middle element (if it has an odd length) or elements
const middle = function(arr) {
  // declare an output array
  const output = [];
  // declare a variable that is equal to the length of the array
  const howLong = arr.length;
  // if the array length is greater than 2 and odd, 
  if (howLong > 2 && howLong % 2 !== 0) {
    // declare an index equal to half of the length, rounded down
    let index = Math.floor(howLong/2);
    // push the value of the array at the index to the output array
    output.push(arr[index]);
  }
  // if the array length is greater than two and even, 
  else if (howLong > 2) {
    // declare an index that's equal to half of the length
    let index = .5 * howLong;
    index --;
    // push the value of the array at the index to the output array
    output.push(arr[index]);
    // decrement the index
    index ++;
    // push the value of the array at the index to the output array
    output.push(arr[index]);
  }
  return output;
}

