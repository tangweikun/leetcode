// HELP:
[1, 4, 6, 7];

const findSubsequences = function (nums) {
  let res = [];
  dfs(nums, []);
  return res;

  function dfs(arr, pre) {
    if (arr.length === 0) {
      if (pre.length >= 2) {
        res.push(pre);
      }

      return;
    }
    let i = 1;
    while (i < arr.length && arr[i] === arr[i - 1]) {
      i++;
    }
    dfs(arr.slice(i), pre);

    if (arr[0] >= pre[pre.length - 1] || pre.length === 0) {
      dfs(arr.slice(1), [...pre, arr[0]]);
    }
  }
};

console.log(findSubsequences([4, 6, 7, 7]));
