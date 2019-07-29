export const largestValues = root => {
  let res = [];
  const getMax = (x, y = -Infinity) => Math.max(x, y);

  dfs(root, 0);
  return res;

  function dfs(node, step) {
    if (!node) return;
    res[step] = getMax(node.val, res[step]);
    dfs(node.left, step + 1);
    dfs(node.right, step + 1);
  }
};
