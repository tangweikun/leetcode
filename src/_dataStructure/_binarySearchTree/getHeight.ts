export function getHeight(node: any): any {
  if (!node) return 0

  const left = getHeight(node.left)
  const right = getHeight(node.right)
  return Math.max(left, right) + 1
}
