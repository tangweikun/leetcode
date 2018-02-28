export function isSameTree(p: any, q: any): any {
  if (p && q) {
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }

  return !p && !q
}
