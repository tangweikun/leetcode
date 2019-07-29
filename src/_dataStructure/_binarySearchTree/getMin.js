export function getMin(node) {
  if (!node) return null;

  while (node.left) {
    node = node.left;
  }

  return node.val;
}
