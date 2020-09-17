const map = function (array, callback) {
  const results = [];
  for (let element of array) {
   results.push(callback(element));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);

