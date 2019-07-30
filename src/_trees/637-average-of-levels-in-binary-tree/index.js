// HELP:

export function averageOfLevels(root) {
  const levels;
  visit(root, 0);

  function visit(node, height) {
    if (node == null) return;

    if (levels.length < height + 1) levels.push([]);
    levels[height].push(node.val);

    visit(node.left, height + 1);
    visit(node.right, height + 1);
  }

  return levels.map((x) => x.reduce((a, b) => a + b) / x.length);
}
