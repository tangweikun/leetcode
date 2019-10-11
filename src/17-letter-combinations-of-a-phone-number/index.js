/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const hash = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];

  const arr = digits.split('').map(n => hash[n]);
  let res = [];
  arr.length > 0 && backtrack(arr, []);

  return res;

  function backtrack(rest, temp) {
    if (rest.length === 0) {
      res.push(temp);
      return;
    }

    const current = rest[0];
    for (let char of current) {
      backtrack(rest.slice(1), temp + char);
    }
  }
};

console.log(letterCombinations(''));
