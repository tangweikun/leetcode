export function getMax(node) {
  if (!node) return null;

  while (node.right) {
    node = node.right;
  }

  return node.val;
}
