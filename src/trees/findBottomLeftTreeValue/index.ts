import { I_TreeNode } from './../../_interface/index'
// Depth-First-Search
// HELP:

export const findBottomLeftValue = (root: I_TreeNode) => {
  const res: any = []
  dfs(root, 0)
  return res[res.length - 1]

  function dfs(node: I_TreeNode, step: number) {
    if (res[step] === undefined) res[step] = node.val

    node.left && dfs(node.left, step + 1)
    node.right && dfs(node.right, step + 1)
  }
}
