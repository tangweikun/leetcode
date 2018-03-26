import { I_TreeNode } from './../../_interface/index'

export function isSameTree(p: I_TreeNode, q: I_TreeNode): any {
  if (p && q) {
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }

  return !p && !q
}
