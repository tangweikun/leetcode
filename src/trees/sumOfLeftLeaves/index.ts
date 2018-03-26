import { I_TreeNode } from './../../_interface/index'

// HELP:
export function sumOfLeftLeaves(root: I_TreeNode): any {
  let res = 0

  if (root) {
    if (root.left && !root.left.left && !root.left.right) res += root.left.val
    return res + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
  }

  return res
}
