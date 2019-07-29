// Depth-First-Search
// HELP:

export const findBottomLeftValue = root => {
  let ans = null;
  let depth = 0;
  let h = 0;
  traverse(root, 1);

  function traverse(root, depth) {
    if (h < depth) {
      ans = root.val;
      h = depth;
    }
    if (root.left) traverse(root.left, depth + 1);
    if (root.right) traverse(root.right, depth + 1);
  }

  return ans;
};
