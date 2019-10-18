/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [];
  helper(root, 0);
  return res;

  function helper(node, level) {
    if (!node) return;
    res[level] = res[level] || [];
    res[level].push(node.val);
    for (let ele of node.children) {
      helper(ele, level + 1);
    }
  }
};
