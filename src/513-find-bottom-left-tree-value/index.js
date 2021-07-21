// Depth-First-Search

export const findBottomLeftValue = (root) => {
  const res = [];
  dfs(root, 0);
  return res[res.length - 1];

  function dfs(node, step) {
    if (res[step] === undefined) res[step] = node.val;

    node.left && dfs(node.left, step + 1);
    node.right && dfs(node.right, step + 1);
  }
};
