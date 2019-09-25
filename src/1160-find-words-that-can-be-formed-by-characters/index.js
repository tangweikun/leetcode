/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let hash = {};
  let count = 0;
  for (let char of chars) {
    hash[char] = ~~hash[char] + 1;
  }

  for (let word of words) {
    let valid = true;
    const copyHash = { ...hash };
    for (let letter of word) {
      if (!copyHash[letter]) {
        valid = false;
        break;
      }
      copyHash[letter]--;
    }
    if (valid) {
      count += word.length;
    }
  }

  return count;
};
