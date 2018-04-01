import { I_TreeNode } from '../../_interface'

export const pathSum2 = (root: I_TreeNode, sum: number) => {
  let res: number[][] = []
  dfs(root, [])
  return res

  function dfs(node: I_TreeNode, prePath: number[]) {
    if (node) {
      const path = [...prePath, node.val]
      if (!node.left && !node.right) {
        const sumOfPath = path.reduce((acc, x) => acc + x)
        if (sumOfPath === sum) res.push(path)

        return
      }

      dfs(node.left, path)
      dfs(node.right, path)
    }
  }
}
