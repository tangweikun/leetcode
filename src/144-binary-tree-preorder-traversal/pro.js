/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];
  const stack = [];
  if (root) stack.push(root);

  while (stack.length > 0) {
    const curNode = stack.pop();
    res.push(curNode.val);

    if (curNode.right) {
      stack.push(curNode.right);
    }

    if (curNode.left) {
      stack.push(curNode.left);
    }
  }

  return res;
};
