/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = [];
  let temp = [];
  backtrack(res, temp, 0, n, k);
  return res;

  function backtrack(res, temp, count, n, k) {
    if (temp.length === k) {
      res.push(temp);
      return;
    }
    if (n === count) return;
    backtrack(res, [...temp, count + 1], count + 1, n, k);
    backtrack(res, temp, count + 1, n, k);
  }
};

console.log(combine(4, 2));
