const largestValues = (root) => {
  const res = [];
  dfs(root, 0);
  return res;

  function dfs(node, level) {
    if (!node) return;
    res[level] = res[level] === undefined ? node.val : Math.max(res[level], node.val);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
};
