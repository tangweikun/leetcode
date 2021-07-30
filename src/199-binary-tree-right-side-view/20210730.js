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
var rightSideView = function (root) {
  const res = [];
  dfs(root, 0);
  return res;

  function dfs(node, level) {
    if (!node) return;

    res[level] = node.val;
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
};
