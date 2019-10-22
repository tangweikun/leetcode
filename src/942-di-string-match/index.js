/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  const arr = Array.from({ length: S.length + 1 }, (_, index) => index);
  let res = [];

  for (let char of S) {
    res.push(char === 'I' ? arr.shift() : arr.pop());
  }

  return res.concat(arr);
};
