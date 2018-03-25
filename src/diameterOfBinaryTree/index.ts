import { I_TreeNode } from './../_interface/index'
// Depth-First Search
// HELP:

export const diameterOfBinaryTree = (root: I_TreeNode) => {
  let res = 0
  depth(root)
  return res

  function depth(root: I_TreeNode) {
    if (root === null) return 0
    const L: any = depth(root.left)
    const R: any = depth(root.right)
    res = Math.max(res, L + R)
    return Math.max(L, R) + 1
  }
}
