/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  const arr = Array.from({ length: n }, (_, index) => index + 1);
  backtracking([], arr);
  return res;

  function backtracking(temp, arr) {
    if (temp.length === k) {
      res.push(temp);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      backtracking([...temp, arr[i]], arr.slice(i + 1));
    }
  }
};

console.log(combine(4, 2));
