// HELP:
// Time Complexity: O(n)
// Space Complexity: O(n)

export function trimBST(root, L, R) {
  if (root == null) return root;
  if (root.val > R) return trimBST(root.left, L, R);
  if (root.val < L) return trimBST(root.right, L, R);

  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  return root;
}
