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
var pruneTree = function(root) {
  return helper(root);

  // 从最下面开始剪
  function helper(node) {
    if (node === null) {
      return null;
    }

    node.left = helper(node.left);
    node.right = helper(node.right);
    if (node.left === null && node.right === null && node.val === 0) {
      return null; // 从最下面一个一个开始剪，而不是剪一整个枝
    }
    return node;
  }
};
