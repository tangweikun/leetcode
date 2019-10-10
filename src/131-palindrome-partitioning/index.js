/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let res = [];
  backtrack(s, []);
  return res;

  function backtrack(str, temp) {
    if (str.length === 0) {
      res.push(temp);
    }

    for (let i = 0; i < str.length; i++) {
      if (isPalindrome(str.slice(0, i + 1))) {
        backtrack(str.slice(i + 1), [...temp, str.slice(0, i + 1)]);
      }
    }
  }

  function isPalindrome(str) {
    return str
      .split('')
      .filter((_, index) => index < str.length / 2)
      .every((num, index) => num === str[str.length - 1 - index]);
  }
};

partition('abb');
