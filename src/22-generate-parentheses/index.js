/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  let temp = "";
  dfs(temp, 0, 0);
  return res;

  function dfs(temp, left, right) {
    if (left < right || left > n || right > n) {
      return;
    }
    if (left === n && right === n) {
      res.push(temp);
      return;
    }
    dfs(temp + "(", left + 1, right);
    dfs(temp + ")", left, right + 1);
  }
};

console.log(generateParenthesis(3));
