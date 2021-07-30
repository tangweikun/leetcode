/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let count = 0;
  let res = null;
  dfs(
    "",
    Array.from({ length: n }, (_, index) => index + 1)
  );
  return res;

  function dfs(temp, arr) {
    if (count > k) return;

    if (temp.length === n) {
      count++;
      if (count === k) {
        res = temp;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      dfs(temp + arr[i], [...arr.slice(0, i), ...arr.slice(i + 1)]);
    }
  }
};

console.log(getPermutation(4, 9));
