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
 * @return {number}
 */
var goodNodes = function (root) {
  let res = 0;
  dfs(root, -Infinity);
  return res;

  function dfs(node, max) {
    if (!node) return;
    if (node.val >= max) {
      res++;
      max = node.val;
    }

    dfs(node.left, max);
    dfs(node.right, max);
  }
};
