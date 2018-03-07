// HELP:
// Time Complexity: O(n)
// Space Complexity: O(n)

export function trimBST(root: any, L: number, R: number): any {
  if (root == null) return root
  if (root.val > R) return trimBST(root.left, L, R)
  if (root.val < L) return trimBST(root.right, L, R)

  root.left = trimBST(root.left, L, R)
  root.right = trimBST(root.right, L, R)
  return root
}
