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
var zigzagLevelOrder = function (root) {
  let direction = 0;
  let stack = [root];
  const res = [];

  while (stack.length > 0) {
    const temp = [];
    const nextStack = [];
    while (stack.length > 0) {
      const node = stack.shift();
      if (node) {
        if (direction === 0) {
          temp.push(node.val);
        } else {
          temp.unshift(node.val);
        }
        nextStack.push(node.left, node.right);
      }
    }
    direction ^= 1;
    stack = nextStack;
    res.push(temp);
  }

  return res.slice(0, -1);
};
