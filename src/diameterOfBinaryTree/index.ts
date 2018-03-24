// Depth-First Search
// HELP:

export const diameterOfBinaryTree = (root: any) => {
  let res = 0
  depth(root)
  return res

  function depth(root: any) {
    if (root === null) return 0
    const L: any = depth(root.left)
    const R: any = depth(root.right)
    res = Math.max(res, L + R)
    return Math.max(L, R) + 1
  }
}
