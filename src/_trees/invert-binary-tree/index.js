// HELP:
// Time Complexity: O(n)
// Space Complexity: O(n)

export function invertTree(root) {
  if (root === null) return null;
  const right = invertTree(root.right);
  const left = invertTree(root.left);
  root.left = right;
  root.right = left;
  return root;
}
