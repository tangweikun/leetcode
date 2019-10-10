/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let max = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!hasCommon(words[i], words[j])) {
        max = Math.max(max, words[i].length * words[j].length);
      }
    }
  }

  return max;

  function hasCommon(str1, str2) {
    const hash = new Set();
    for (let char of str1) {
      hash.add(char);
    }

    for (let char of str2) {
      if (hash.has(char)) {
        return true;
      }
    }

    return false;
  }
};
