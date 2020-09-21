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




module.exports = flatten;
