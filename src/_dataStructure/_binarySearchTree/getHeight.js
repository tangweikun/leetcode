export function getHeight(node) {
  if (!node) return 0;

  const left = getHeight(node.left);
  const right = getHeight(node.right);
  return Math.max(left, right) + 1;
}
