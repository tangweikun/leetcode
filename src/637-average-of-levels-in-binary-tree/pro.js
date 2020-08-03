// HELP:

export function averageOfLevels(root) {
  if (!root) return [];
  const result = [];
  let nodes = [root];
  let sum = root.val;

  while (nodes.length) {
    result.push(sum / nodes.length);

    const nextNodes = [];
    sum = 0;
    for (let node of nodes) {
      if (node.left) {
        nextNodes.push(node.left);
        sum += node.left.val;
      }
      if (node.right) {
        nextNodes.push(node.right);
        sum += node.right.val;
      }
    }
    nodes = nextNodes;
  }

  return result;
}
