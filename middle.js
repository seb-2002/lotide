
// Middle.js take an array and outputs an array of the middle element (if it has an odd length)
// or elements if its even
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

module.exports = middle;

