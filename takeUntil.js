const takeUntil = function(array, callback) {
  const result = [];
  for (let elm of array) {
    if (callback(elm)) {
      break;
    } else {
      result.push(elm);
    }
  }
  return result
};
 
module.exports = takeUntil;


