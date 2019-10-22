// HELP:

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  if (preorder.length < 1) return null;
  const [root, ...rest] = preorder;
  const rootNode = new TreeNode(root);
  rootNode.left = bstFromPreorder(rest.filter(n => n < root));
  rootNode.right = bstFromPreorder(rest.filter(n => n > root));

  return rootNode;
};
