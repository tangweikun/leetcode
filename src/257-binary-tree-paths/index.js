// Depth-First-Search

export const binaryTreePaths = function (root) {
  const res = [];
  dfs(root, []);
  return res;

  function dfs(node, prePath) {
    if (!node) return;

    if (!node.left && !node.right) {
      res.push([...prePath, node.val].join('->'));
    }

    dfs(node.left, [...prePath, node.val]);
    dfs(node.right, [...prePath, node.val]);
  }
};
