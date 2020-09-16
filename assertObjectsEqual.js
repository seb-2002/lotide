// this function compares two objects to see if they have the same number of keys and returns 'true' if they do
const sameNumberOfKeys = function (obj1, obj2) {
  // declare a variable equal to the array of keys of object 1
  const keyChain1 = Object.keys(obj1);
  // declare a variable equal to the array of keys of object 2
  const keyChain2 = Object.keys(obj2);
  // if the length of arr1 !== length arr2
  if (keyChain1.length !== keyChain2.length) {
    return false;
  } else return true;
};

// this function compares two objects and if the value for each key in one object is the same as the value for that same key in the other object, the function returns true
const compareValues = function (obj1, obj2) {
  // for each key in object 1
  for (const key in obj1) {
    //if object1.key is an array
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    }
    // if object1.key !== object2.key, return false
    else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  // for each key in object 2
  for (const key in obj2) {
    //if object2.key is an array
    if (Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    }
    // if object1.key !== object2.key, return false
    else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  // otherwise, return true
  return true;
};

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

const eqObjects = function (actual, expected) {
  // Do these objects have the same number of keys?
  if (!sameNumberOfKeys(actual, expected)) {
    return false;
    // Do these objects hold the same values for the same keys?
  } else if (!compareValues(actual, expected)) {
    return false;
  } else {
    return true;
  }
};

// this function compares two simple objects. If they have the same number of keys and the value for each key in one object is the same as the value for that same key in the other object, the function returns 'true
const assertObjectsEqual = function (actual, expected) {
  //import inspect
  const inspect = require('util').inspect;
  // Do these objects have the same number of keys?
  if (!eqObjects(actual, expected)) {
    console.log(`🚧🚧 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 🚧🚧`);
  } else {
    console.log(`🌈🌈 Assertion Passed: ${inspect(actual)} === ${inspect(expected)} 🌈🌈`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
