// Depth-First-Search
// HELP:

export const findSecondMinimumValue = root => {
  const uniques = new Set();
  dfs(root, uniques);
  let min = root.val;
  let ans = Infinity;

  uniques.forEach(v => {
    if (min < v && v < ans) ans = v;
  });
  return ans < Infinity ? ans : -1;

  function dfs(t, uniques) {
    if (t) {
      uniques.add(t.val);
      dfs(t.left, uniques);
      dfs(t.right, uniques);
    }
  }
};
