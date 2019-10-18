/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  let res = null;
  helper(root, val);
  return res;

  function helper(node, val) {
    if (!node) return;
    if (node.val === val) {
      return (res = node);
    }
    helper(node.left, val);
    helper(node.right, val);
  }
};
