// HELP:

export const makeSquare = nums => {
  if (nums.length === 0) return false;

  const total = nums.reduce((acc, x) => acc + x, 0);
  const sideLength = total / 4;
  let res = false;
  let hash = [];
  dfs(0, 0, 0);

  return res;

  function dfs(pos, sum, count) {
    if (res) return;
    if (count === 3) {
      res = true;
      return;
    }

    if (sum === sideLength) dfs(0, 0, count + 1);

    for (let i = pos; i < nums.length; i++) {
      if (hash[i] || sum + nums[i] > sideLength) continue;

      hash[i] = true;
      dfs(i + 1, sum + nums[i], count);
      hash[i] = false;
    }
  }
};
