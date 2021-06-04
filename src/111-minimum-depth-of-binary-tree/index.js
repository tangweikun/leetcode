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
  let res = Infinity;
  dfs(root, 0);
  return res === Infinity ? 0 : res;

  function dfs(node, count) {
    if (!node) return;
    if (!node.left && !node.right) {
      res = Math.min(res, count + 1);
    }
    dfs(node.left, count + 1);
    dfs(node.right, count + 1);
  }
};
