// HELP:

export function averageOfLevels(root: any) {
  const levels: any = []
  visit(root, 0)

  function visit(node: any, height: number) {
    if (node == null) return

    if (levels.length < height + 1) levels.push([])
    levels[height].push(node.data)

    visit(node.left, height + 1)
    visit(node.right, height + 1)
  }

  return levels.map((x: any[]) => x.reduce((a, b) => a + b) / x.length)
}
