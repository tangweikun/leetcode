/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let res = false;
  dfs(root, 0);
  return res;

  function dfs(node, temp) {
    if (!node) return;
    if (!node.left && !node.right && node.val + temp === targetSum) {
      res = true;
    }
    dfs(node.left, temp + node.val);
    dfs(node.right, temp + node.val);
  }
};
