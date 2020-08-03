export const sumNumbers = function(root) {
  if (!root) return 0;
  const res = [];
  dfs(root, 0, res);
  return res.reduce((acc, val) => acc + val, 0);
};

function dfs(node, pre, nums) {
  if (!node) return;
  if (!node.left && !node.right) {
    return nums.push(+`${pre}${node.val}`);
  }

  dfs(node.left, +`${pre}${node.val}`, nums);
  dfs(node.right, +`${pre}${node.val}`, nums);
}
