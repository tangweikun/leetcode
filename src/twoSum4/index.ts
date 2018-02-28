export function findTarget(root: any, k: number) {
  const HASH = new Set()
  let res = false
  recurse(root)

  function recurse(currentNode: any) {
    if (!currentNode || res) return

    if (HASH.has(currentNode.val)) res = true
    else HASH.add(k - currentNode.val)

    recurse(currentNode.left)
    recurse(currentNode.right)
  }

  return res
}
