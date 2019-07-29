// Depth-First-Search
// HELP:

export const findBottomLeftValue = root => {
  const queue = [root];
  let res = root;

  while (queue.length) {
    res = queue.shift();
    if (res.right) queue.push(res.right);
    if (res.left) queue.push(res.left);
  }

  return res.val;
};
