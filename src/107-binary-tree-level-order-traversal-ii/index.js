/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let res = [];
  helper(root, 0);
  return res.reverse();

  function helper(node, level) {
    if (!node) return;
    res[level] = res[level] || [];
    res[level].push(node.val);
    helper(node.left, level + 1);
    helper(node.right, level + 1);
  }
};
