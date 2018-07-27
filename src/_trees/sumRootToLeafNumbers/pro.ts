import { I_TreeNode } from './../../_interface/index'

export const sumNumbers = (root: I_TreeNode) => dfs(root, 0)

function dfs(node: I_TreeNode, pre: number): number {
  if (!node) return 0

  const cur = pre * 10 + node.val
  if (!node.right && !node.left) return cur
  return dfs(node.right, cur) + dfs(node.left, cur)
}
