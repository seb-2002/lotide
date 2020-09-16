
// countOnly js take an array and an object. It searches for each instance of a key with a truthy value in the object which appears in the array and outputs a new object with the count of each key
const countOnly = function(arr, obj) {
  // define an output object
  const output = {};
  for (const key in obj) {
    // loop through the object. For each truthy key ...
    if (obj[key]) {
      // define a counter variable set at zero
      let count = 0;
      // loop through the array
      for (const elm of arr) {
        // for each match
        if (key === elm) {
          // increment the count by one
          count ++;
        }
      }
      if (count > 0) {
        output[key] = count;
      }
    }
  }
  return output;
};
