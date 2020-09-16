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




// without.js takes a source array and an itemsToRemove array. It outputs a new array with only those items in source which were not in itemsToRemove (source WITHOUT itemsToRemove)
const without = function (source, itemsToRemove) {
  // declare a new empty array where to push the elements which are not to remove
  const output = [];
  // loop through source
  for (let elm of source) {
    // is this an element to add to the output? A boolean to keep track ...
    let toAdd = true;
    // loop through the removal list looking for matches
    for (let item of itemsToRemove) {
      if (elm === item) {
        // if there's a match, it is not to add!
        toAdd = false;
      }
    }
    // if the element is to add...
    if (toAdd) {
      output.push(elm);
    }
  }
  return output;
}
  
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);