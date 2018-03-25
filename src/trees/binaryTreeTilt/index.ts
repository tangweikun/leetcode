import { I_TreeNode } from './../../_interface'

// 后序遍历【Post order Traversal】
// HELP:

export const findTilt = (root: I_TreeNode) => {
  let tilt = 0
  traverse(root)
  return tilt

  function traverse(root: I_TreeNode) {
    if (root === null) return 0
    const left: any = traverse(root.left)
    const right: any = traverse(root.right)
    tilt += Math.abs(left - right)
    return left + right + root.val
  }
}
