/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  let res = Infinity;
  dfs(root, 0);
  return res;

  function dfs(node, preLevel) {
    if (!node) return;

    if (!node.left && !node.right) {
      res = Math.min(res, preLevel + 1);
      return;
    }

    dfs(node.left, preLevel + 1);
    dfs(node.right, preLevel + 1);
  }
};
