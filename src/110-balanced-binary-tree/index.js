export const isBalanced = (root) => {
  let res = true;
  dfs(root);
  return res;

  function dfs(node) {
    if (!node) return 0;
    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      res = false;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }
};
