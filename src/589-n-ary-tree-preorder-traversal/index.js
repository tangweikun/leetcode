/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let res = [];
  helper(root);
  return res;

  function helper(root) {
    if (!root) return;
    res.push(root.val);
    for (let node of root.children) {
      helper(node);
    }
  }
};
