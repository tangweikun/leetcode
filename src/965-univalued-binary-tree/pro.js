var isUnivalTree = function(root) {
  if (!root) return true;
  let left = root.left ? root.left.val : root.val;
  let right = root.right ? root.right.val : root.val;
  if (root.val === left && root.val === right) {
    return isUnivalTree(root.left) && isUnivalTree(root.right);
  }
  return false;
};
