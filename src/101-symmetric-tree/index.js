// Recursive

export const isSymmetric = (root) => {
  return dfs(root, root);

  function dfs(left, right) {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val !== right.val) {
      return false;
    }

    return dfs(left.left, right.right) && dfs(left.right, right.left);
  }
};
