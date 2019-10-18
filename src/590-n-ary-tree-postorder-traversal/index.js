// HELP:

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
var postorder = function(root) {
  if (!root) return [];

  let res = [];
  help(root);
  return res;

  function help(root) {
    if (!root) return;

    for (let i = 0; i < root.children.length; i++) {
      help(root.children[i]);
    }
    res.push(root.val);
  }
};
