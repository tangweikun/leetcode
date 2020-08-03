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
var maxAncestorDiff = function (root) {
  let res = 0;
  dfs(root, -Infinity, Infinity);
  return res;

  function dfs(node, max, min) {
    if (!node) return;
    max = Math.max(max, node.val);
    min = Math.min(min, node.val);
    res = Math.max(res, Math.abs(max - min));

    dfs(node.left, max, min);
    dfs(node.right, max, min);
  }
};
