/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  if (!root) return true;
  let val = root.val;
  let res = true;
  helper(root);
  return res;

  function helper(node) {
    if (!res || !node) return;
    if (node.val !== val) {
      return (res = false);
    }
    helper(node.left);
    helper(node.right);
  }
};
