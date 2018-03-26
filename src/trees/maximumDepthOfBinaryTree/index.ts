import { I_TreeNode } from './../../_interface/index'
// HELP:

export function maxDepth(treeNode: I_TreeNode): any {
  if (!treeNode) return 0
  return Math.max(maxDepth(treeNode.left), maxDepth(treeNode.right)) + 1
}
