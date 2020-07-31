/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];
  dfs(root);
  return res;

  function dfs(node) {
    if (!node) return;

    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
};
