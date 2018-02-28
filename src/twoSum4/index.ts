export function findTarget(root: any, k: number) {
  const HASH = new Set()

  function recurse(currentNode: any): any {
    if (!currentNode) return false
    if (HASH.has(currentNode.val)) return true

    HASH.add(k - currentNode.val)
    return recurse(currentNode.left) || recurse(currentNode.right)
  }

  return recurse(root)
}
