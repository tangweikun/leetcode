export const sumNumbers = root => dfs(root, 0);

function dfs(node, pre) {
  if (!node) return 0;

  const cur = pre * 10 + node.val;
  if (!node.right && !node.left) return cur;
  return dfs(node.right, cur) + dfs(node.left, cur);
}
