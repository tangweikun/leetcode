/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) return 0;
  let max = 0;
  helper(root, 0);
  return max;

  function helper(node, depth) {
    max = Math.max(max, depth + 1);

    for (let ele of node.children) {
      helper(ele, depth + 1);
    }
  }
};
