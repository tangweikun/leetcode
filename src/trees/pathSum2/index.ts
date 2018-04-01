import { I_TreeNode } from '../../_interface'

export const pathSum2 = (root: I_TreeNode, sum: number) => {
  let res: number[][] = []
  dfs(root, [], sum)
  return res

  function dfs(node: I_TreeNode, prePath: number[], target: number) {
    if (node) {
      const path = [...prePath, node.val]

      if (!node.left && !node.right && node.val === target) {
        res.push(path)
      }
      dfs(node.left, path, target - node.val)
      dfs(node.right, path, target - node.val)
    }
  }
}
