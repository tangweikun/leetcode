export function isSameTree(p, q) {
  if (p && q) {
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  return !p && !q;
}
