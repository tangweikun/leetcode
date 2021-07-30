// HELP:

var rob = (root) => {
  const money = dfs(root);
  return Math.max(money[0], money[1]);

  function dfs(root) {
    if (!root) return [0, 0];
    const L = dfs(root.left);
    const R = dfs(root.right);
    return [Math.max(L[0], L[1]) + Math.max(R[0], R[1]), root.val + L[0] + R[0]];
  }
};
