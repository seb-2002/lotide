// findKeyByValue take an object and a primitive value. If there are keys which correspond to that value, it returns an a array of keys. If there is only one key in the array, it returns the value of array[0]. If there are no matching keys, it returns "No keys for that value"
const findKeyByValue = function(object, searchItem) {
  // declare an empty array keyChain to hold the keys
  const keyChain = [];
  // loop through the object
  for (const objectKey in object) {
    // if object[objectKey] === searchItem
    if (object[objectKey] === searchItem) {
      // push objectKey to the keyChain
      keyChain.push(objectKey);
    }
  }
  // if keyChain.length === 1
  if (keyChain.length === 1) {
    // result = keysChain[0]
    let result = keyChain[0];
    return result;
  // else if keyChain has nothing in it ...
  } else if (keyChain.length > 1) {
    let result = keyChain;
    return result;
  }
};

module.exports = findKeyByValue;

