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
var increasingBST = function(root) {
  let res = new TreeNode(null);
  let cur = res;
  helper(root);

  return res.right;

  function helper(node) {
    if (node == null) return null;
    helper(node.left);
    cur.right = new TreeNode(val);
    cur = cur.right;
    helper(node.right);
  }
};
