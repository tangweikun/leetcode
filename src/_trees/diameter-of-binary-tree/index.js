// Depth-First Search
// HELP:

export const diameterOfBinaryTree = root => {
  let res = 0;
  depth(root);
  return res;

  function depth(root) {
    if (root === null) return 0;
    const L = depth(root.left);
    const R = depth(root.right);
    res = Math.max(res, L + R);
    return Math.max(L, R) + 1;
  }
};
