export const isBalanced = root => {
  let res = true;
  dfs(root);
  return res;

  function dfs(node) {
    if (!node) return 0;
    const a = dfs(node.left);
    const b = dfs(node.right);
    if (Math.abs(a - b) > 1) res = false;
    return Math.max(a, b) + 1;
  }
};
