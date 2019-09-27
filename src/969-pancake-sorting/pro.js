// HELP:
/**
 * @param {number[]} A
 * @return {number[]}
 */

var pancakeSort = function(A) {
  let res = [];
  let reverse = function(bound) {
    for (let i = 0, j = bound - 1; i < j; i++, j--) {
      [A[i], A[j]] = [A[j], A[i]];
    }
  };

  for (let n = A.length; n > 0; n--) {
    let i = A.indexOf(n) + 1;
    reverse(i);
    reverse(n);
    res.push(i);
    res.push(n);
  }

  return res;
};
