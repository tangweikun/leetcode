import { I_TreeNode } from './../../_interface/index'
// HELP:
// Depth-First Search

export function findDuplicateSubtrees(root: I_TreeNode) {
  const count = new Map()
  const ans: any = []
  lookup(root)
  return ans

  function lookup(node: I_TreeNode) {
    if (node === null) return '#'

    const serial: string = lookup(node.left) + lookup(node.right) + node.val
    count.set(serial, ~~count.get(serial) + 1)
    if (count.get(serial) === 2) ans.push(node)

    return serial
  }
}
