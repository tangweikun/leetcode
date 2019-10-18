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
  if (root === null) return false;
  const s = [root];
  const val = root.val;

  while (s.length > 0) {
    const current = s.pop();
    if (current.val !== val) return false;
    if (current.left) s.push(current.left);
    if (current.right) s.push(current.right);
  }
  return true;
};
