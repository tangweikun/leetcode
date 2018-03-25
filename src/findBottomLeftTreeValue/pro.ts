import { I_TreeNode } from './../_interface/index'
// Depth-First-Search
// HELP:

export const findBottomLeftValue = (root: I_TreeNode) => {
  const queue: any[] = [root]
  let res = root

  while (queue.length) {
    res = queue.shift()
    if (res.right) queue.push(res.right)
    if (res.left) queue.push(res.left)
  }

  return res.val
}
