// Depth-First-Search
// HELP:

export const binaryTreePaths = function(node) {
  const stack = [];
  const res = [];
  helper(node);
  return res;

  function helper(root) {
    if (root) {
      stack.push(root.val);
      helper(root.left);
      helper(root.right);
      if (!root.left && !root.right) res.push(stack.join('->'));
      stack.pop();
    }
  }
};
