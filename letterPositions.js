
const countLetters = function(string) {
  // declare an output object
  const output = {};
  // loop through the string
  for (let i = 0; i < string.length; i++) {
    // declare a variable thisChar equivalent to the character at index i
    const thisChar = string[i];
    // if there is no corresponding key in output and thisChar is not a space, output[thisChar] = an array containing the index position;
    if (!output[thisChar] && thisChar !== " ") {
      output[thisChar] = [i];
      // loop through the string again, starting at the next index
      for (let j = i + 1; j < string.length; j++) {
        // if string[j] === thisChar, push j to output[thisChar]
        if (string[j] === thisChar) {
          output[thisChar].push(j);
        }
      }
    }
  }
  return output;
};

