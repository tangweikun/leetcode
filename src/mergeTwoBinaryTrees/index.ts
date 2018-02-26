// HELP:

export function mergeTrees(t1: any, t2: any) {
  if (t1 === null) return t2
  if (t2 === null) return t1

  t1.data += t2.data
  t1.left = mergeTrees(t1.left, t2.left)
  t1.right = mergeTrees(t1.right, t2.right)
  return t1
}
