import { I_TreeNode } from './../_interface/index'
// Recursive
// HELP:

export const isSymmetric = (root: I_TreeNode) => {
  return isMirror(root, root)
}

function isMirror(t1: I_TreeNode, t2: I_TreeNode): boolean {
  if (t1 && t2) {
    return (
      t1.val === t2.val &&
      isMirror(t1.right, t2.left) &&
      isMirror(t1.left, t2.right)
    )
  }

  return t1 === t2
}
