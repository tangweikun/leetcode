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
  let arr = [root];
  while (arr.length) {
    const current = arr.pop();
    for (let i = 0; i < current.children.length; i++) {
      arr.push(current.children[i]);
    }
    res.unshift(current.val);
  }
  return res;
};
