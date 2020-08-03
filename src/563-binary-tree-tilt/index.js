// 后序遍历【Post order Traversal】
// HELP:

export const findTilt = root => {
  let tilt = 0;
  traverse(root);
  return tilt;

  function traverse(root) {
    if (root === null) return 0;
    const left = traverse(root.left);
    const right = traverse(root.right);
    tilt += Math.abs(left - right);
    return left + right + root.val;
  }
};
