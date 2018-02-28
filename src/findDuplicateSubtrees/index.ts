// HELP:

export function findDuplicateSubtrees(root: any) {
  const count = new Map()
  const ans: any = []
  collect(root)
  return ans

  function collect(node: any) {
    if (node === null) return '#'
    const serial: string =
      '' + node.val + collect(node.left) + collect(node.right)
    count.set(serial, ~~count.get(serial) + 1)
    if (count.get(serial) === 2) ans.push(node)
    return serial
  }
}
