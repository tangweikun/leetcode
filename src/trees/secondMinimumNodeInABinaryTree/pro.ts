import { I_TreeNode } from './../../_interface/index'
// Depth-First-Search
// HELP:

export const findSecondMinimumValue = (root: I_TreeNode) => {
  let min = root.val
  let ans = Infinity
  dfs(root)
  return ans < Infinity ? ans : -1

  function dfs(t: I_TreeNode) {
    if (t) {
      if (min < t.val && t.val < ans) {
        ans = t.val
      } else if (min === t.val) {
        dfs(t.left)
        dfs(t.right)
      }
    }
  }
}
