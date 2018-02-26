// HELP:

export function maxDepth(treeNode: any): any {
  if (!treeNode) return 0
  return Math.max(maxDepth(treeNode.left), maxDepth(treeNode.right)) + 1
}
