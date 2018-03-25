import { I_TreeNode } from '../_interface'
// Depth-First-Search
// HELP:

export const binaryTreePaths = function(root: I_TreeNode) {
  if (!root) return []
  const result: string[] = []
  _depth(root, '', result)
  return result
}

const _depth = function(root: I_TreeNode, str: string, result: string[]) {
  if (root) {
    str += root.val
    if (root.left) _depth(root.left, str + '->', result)
    if (root.right) _depth(root.right, str + '->', result)
    if (root.left === null && root.right === null) result.push(str)
  }
}
