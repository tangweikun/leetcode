// HELP:

var pruneTree = function(root) {
  if (root == null) return null;
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  if (root.val === 0 && root.left === null && root.right === null) return null;
  return root;
};
