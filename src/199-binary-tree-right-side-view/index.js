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

  function dfs(node, depth) {
    if (!node) {
      return;
    }

    if (res.length === depth) {
      res.push(node.val);
    }
    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  }
};
