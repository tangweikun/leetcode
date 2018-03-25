import { I_TreeNode } from '../../_interface'
// Depth-First-Search
// HELP:

export const binaryTreePaths = function(node: I_TreeNode) {
  const stack: number[] = []
  const res: string[] = []
  helper(node)
  return res

  function helper(root: I_TreeNode) {
    if (root) {
      stack.push(root.val)
      helper(root.left)
      helper(root.right)
      if (!root.left && !root.right) res.push(stack.join('->'))
      stack.pop()
    }
  }
}
