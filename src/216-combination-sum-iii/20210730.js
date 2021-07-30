/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = [];
  backtracking(0, [], 1);
  return res;

  function backtracking(sum, temp, index) {
    if (temp.length > k || sum > n || index > 10) {
      return;
    }

    if (temp.length === k) {
      if (sum === n) {
        res.push(temp);
      }
      return;
    }

    backtracking(sum + index, [...temp, index], index + 1);
    backtracking(sum, temp, index + 1);
  }
};

console.log(combinationSum3(9, 45));
