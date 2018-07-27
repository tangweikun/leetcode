import { I_TreeNode } from './../../_interface/index'

export const largestValues = (root: I_TreeNode) => {
  let res: number[] = []
  const getMax = (x: number, y: number = -Infinity) => Math.max(x, y)

  dfs(root, 0)
  return res

  function dfs(node: I_TreeNode, step: number) {
    if (!node) return
    res[step] = getMax(node.val, res[step])
    dfs(node.left, step + 1)
    dfs(node.right, step + 1)
  }
}
