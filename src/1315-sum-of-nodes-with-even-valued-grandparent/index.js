/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function (root) {
  let res = 0;
  dfs(root, -1, -1);
  return res;

  function dfs(node, parent, grandpa) {
    if (node === null) return;
    if (grandpa % 2 === 0) {
      res += node.val;
    }

    dfs(node.left, node.val, parent);
    dfs(node.right, node.val, parent);
  }
};
