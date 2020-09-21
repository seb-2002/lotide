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
  
module.exports = without;