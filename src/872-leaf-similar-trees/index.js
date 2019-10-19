// HELP:

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  let leaves1 = [];
  let leaves2 = [];
  dfs(root1, leaves1);
  dfs(root2, leaves2);

  return JSON.stringify(leaves1) === JSON.stringify(leaves2);

  function dfs(node, leaves) {
    if (!node) return;
    if (node.left === null && node.right === null) {
      return leaves.push(node.val);
    }
    dfs(node.left, leaves);
    dfs(node.right, leaves);
  }
};
