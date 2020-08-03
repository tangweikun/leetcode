// Time complexity: O(m*n)
// Space complexity: O(n)
// HELP:

export const isSubtree = (s, t) => traverse(s, t);

function isEqual(x, y) {
  if (x && y) {
    return (
      x.val === y.val && isEqual(x.left, y.left) && isEqual(x.right, y.right)
    );
  }

  return x === y;
}

const traverse = (a, b) =>
  a !== null && (isEqual(a, b) || traverse(a.left, b) || traverse(a.right, b));
