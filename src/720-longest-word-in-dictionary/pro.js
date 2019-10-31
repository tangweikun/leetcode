/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  const hash = {};
  let res = [];
  let maxLength = 0;

  for (let letter of words) {
    hash[letter] = true;
  }

  for (let letter of words) {
    if (letter.length < maxLength) {
      continue;
    }
    let flag = true;
    for (let i = 1; i < letter.length; i++) {
      if (!hash[letter.slice(0, i)]) {
        flag = false;
        continue;
      }
    }
    if (flag) {
      maxLength = letter.length;
      res = [...res, letter].filter(item => item.length === maxLength);
    }
  }

  res.sort();
  return res[0] || '';
};
