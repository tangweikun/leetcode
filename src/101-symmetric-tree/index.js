// Recursive
// HELP:

export const isSymmetric = root => {
  return isMirror(root, root);
};

function isMirror(t1, t2) {
  if (t1 && t2) {
    return (
      t1.val === t2.val &&
      isMirror(t1.right, t2.left) &&
      isMirror(t1.left, t2.right)
    );
  }

  return t1 === t2;
}
