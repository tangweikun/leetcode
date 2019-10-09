/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = [];
  const temp = [];
  backtrack(res, temp, 1, n, k);
  return res;

  function backtrack(res, temp, start, end, num) {
    if (temp.length === num) {
      res.push(temp);
      return;
    }

    for (let i = start; i <= end; i++) {
      backtrack(res, [...temp, i], i + 1, end, num);
    }
  }
};

console.log(combine(4, 2));
