// HELP:

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0;
  helper(root);
  return root;

  function helper(root) {
    if (root === null) return;
    helper(root.right);
    root.val += sum;
    sum = root.val;
    helper(root.left);
  }
};
