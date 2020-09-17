const findKey = (object, callback) => {
  // loop through all the keys in the object
  for (let key in object) {
    // feed the value of the key into the callback function.
    // If it's true, return the key.
    if (callback(object[key])) {
      return key;
    }
  }
}


