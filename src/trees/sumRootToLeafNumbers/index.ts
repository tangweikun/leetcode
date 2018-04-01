import { I_TreeNode } from './../../_interface/index'

export const sumNumbers = function(root: I_TreeNode) {
  if (!root) return 0
  const res: number[] = []
  dfs(root, 0, res)
  return res.reduce((acc, val) => acc + val, 0)
}

function dfs(node: I_TreeNode, pre: number, nums: number[]) {
  if (!node) return
  if (!node.left && !node.right) {
    return nums.push(+`${pre}${node.val}`)
  }

  dfs(node.left, +`${pre}${node.val}`, nums)
  dfs(node.right, +`${pre}${node.val}`, nums)
}
