import { I_TreeNode } from '../../_interface'

export const isBalanced = (root: I_TreeNode) => {
  let res = true
  dfs(root)
  return res

  function dfs(node: I_TreeNode): number {
    if (!node) return 0
    const a = dfs(node.left)
    const b = dfs(node.right)
    if (Math.abs(a - b) > 1) res = false
    return Math.max(a, b) + 1
  }
}
