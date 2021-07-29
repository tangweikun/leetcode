// HELP:
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];

  let temp = "";
  let left = 0;
  let right = 0;

  backtrack(temp, left, right, n);
  return res;

  function backtrack(temp, left, right, n) {
    // 减枝
    if (left < right || left > n || right > n) {
      return;
    }
    // 命中
    if (left == n && right == n) {
      res.push(temp);
      return;
    }
    // 递归
    backtrack(temp + "(", left + 1, right, n);
    backtrack(temp + ")", left, right + 1, n);
  }
};
