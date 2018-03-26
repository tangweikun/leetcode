import { I_TreeNode } from './../../_interface/index'
// Time complexity: O(m*n)
// Space complexity: O(n)
// HELP:

export const isSubtree = (s: I_TreeNode, t: I_TreeNode) => traverse(s, t)

function isEqual(x: any, y: any): boolean {
  if (x && y) {
    return (
      x.val === y.val && isEqual(x.left, y.left) && isEqual(x.right, y.right)
    )
  }

  return x === y
}

const traverse = (a: any, b: any): boolean =>
  a !== null && (isEqual(a, b) || traverse(a.left, b) || traverse(a.right, b))
