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
var inorderTraversal = function (root) {
  let res = [];
  dfs(root);
  return res;

  function dfs(node) {
    if (!node) return;

    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  }
};
