/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function (S) {
  let stack = [];
  let i = 0;
  while (i < S.length) {
    stack.push(S[i]);
    if (stack.slice(-3).join('') === 'abc') {
      stack.splice(-3, 3);
    }
    i++;
  }

  return stack.length === 0;
};
