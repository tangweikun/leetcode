import { I_TreeNode } from '../_interface'
// Depth-First-Search
// HELP:

export const hasPathSum = function(root: I_TreeNode, sum: number): boolean {
  if (!root) return false
  if (!root.left && !root.right) return root.val === sum

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  )
}
