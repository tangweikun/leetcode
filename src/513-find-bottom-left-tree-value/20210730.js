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
var findBottomLeftValue = function (root) {
  const res = [];
  dfs(root, 0);
  return res[res.length - 1];

  function dfs(node, level) {
    if (!node) return;

    if (res[level] === undefined) {
      res[level] = node.val;
    }

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
};
