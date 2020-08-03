/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  var res = [];
  var deleteSet = new Set(to_delete);
  dfs(null, root);
  if (!deleteSet.has(root.val)) res.push(root);
  return res;

  function dfs(parent, node) {
    if (!node) return;
    dfs(node, node.left);
    dfs(node, node.right);
    if (deleteSet.has(node.val)) {
      if (parent != null && parent.left == node) parent.left = null;
      else if (parent != null && parent.right == node) parent.right = null;

      if (node.left) res.push(node.left);
      if (node.right) res.push(node.right);
    }
  }
};
