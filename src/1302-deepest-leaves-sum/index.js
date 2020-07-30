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
var deepestLeavesSum = function (root) {
  let res = [];
  dfs(root, 0);
  return res.slice(-1)[0];

  function dfs(node, depth = 0) {
    if (node === null) return;
    if (node.left === null && node.right === null) {
      res[depth] = ~~res[depth] + node.val;
      return;
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
};
