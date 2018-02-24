export function getMin(node: any) {
  if (!node) return null

  while (node.left) {
    node = node.left
  }

  return node.data
}
