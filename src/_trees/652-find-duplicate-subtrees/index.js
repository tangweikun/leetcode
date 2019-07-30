// HELP:
// Depth-First Search

export function findDuplicateSubtrees(root) {
  const count = new Map();
  const ans = [];
  lookup(root);
  return ans;

  function lookup(node) {
    if (node === null) return '#';

    const serial = lookup(node.left) + lookup(node.right) + node.val;
    count.set(serial, ~~count.get(serial) + 1);
    if (count.get(serial) === 2) ans.push(node);

    return serial;
  }
}
