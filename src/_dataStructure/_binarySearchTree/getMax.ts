export function getMax(node: any) {
  if (!node) return null

  while (node.right) {
    node = node.right
  }

  return node.data
}
