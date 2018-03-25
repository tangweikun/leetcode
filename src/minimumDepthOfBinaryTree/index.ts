// Depth-First-Search
// HELP:

import { I_TreeNode } from './../_interface/index'

export const minDepth = function(root: I_TreeNode) {
  let min = Infinity
  dfs(root, 1)
  return min === Infinity ? 0 : min

  function dfs(node: I_TreeNode, depth: number) {
    if (!node || depth >= min) return
    if (!node.left && !node.right) {
      min = depth
      return
    }

    if (node.left) dfs(node.left, depth + 1)
    if (node.right) dfs(node.right, depth + 1)
  }
}
