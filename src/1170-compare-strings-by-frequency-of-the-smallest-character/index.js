/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  let lenOfQueries = getLen(queries);
  let lenOfWords = getLen(words);
  let res = [];

  for (let num of lenOfQueries) {
    res.push(lenOfWords.filter(n => n > num).length);
  }

  return res;

  function getLen(arr) {
    let res = [];
    for (let word of arr) {
      let min = Infinity;
      let count = 0;
      for (let i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) === min) {
          count++;
          continue;
        }
        if (word.charCodeAt(i) < min) {
          count = 1;
          min = word.charCodeAt(i);
        }
      }
      res.push(count);
    }
    return res;
  }
};

console.log(numSmallerByFrequency(['vbd'], ['azzaa']));
