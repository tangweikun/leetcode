// HELP:
export function findTarget(root, k) {
  const HASH = new Set();

  function recurse(currentNode) {
    if (!currentNode) return false;
    if (HASH.has(currentNode.val)) return true;

    HASH.add(k - currentNode.val);
    return recurse(currentNode.left) || recurse(currentNode.right);
  }

  return recurse(root);
}
