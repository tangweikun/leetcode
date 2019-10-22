// HELP:

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
  if (N % 2 === 0) return [];
  if (N === 1) return [new TreeNode(0)];
  let res = [];
  for (let i = 1; i <= N - 1; i += 2) {
    for (let l of allPossibleFBT(i)) {
      for (let r of allPossibleFBT(N - 1 - i)) {
        const root = new TreeNode(0);
        root.left = l;
        root.right = r;
        res.push(root);
      }
    }
  }
  return res;
};
