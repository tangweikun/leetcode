// PreOrder-Search
// Time complexity: O(m^2+n^2+m*n)
// Space complexity: O(max(m,n))
// HELP:

export const isSubtree = (s, t) => {
  const foo = preOrderSearch(s, true);
  const bar = preOrderSearch(t, true);

  return foo.indexOf(bar) !== -1;

  function preOrderSearch(root, isLeft) {
    if (root === null) return isLeft ? 'L' : 'R';

    return (
      '#' +
      root.val +
      preOrderSearch(root.left, true) +
      preOrderSearch(root.right, false)
    );
  }
};
