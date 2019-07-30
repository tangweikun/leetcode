export const pathSum2 = (root, sum) => {
  let res = [];
  dfs(root, [], sum);
  return res;

  function dfs(node, prePath, target) {
    if (node) {
      const path = [...prePath, node.val];

      if (!node.left && !node.right && node.val === target) {
        res.push(path);
      }
      dfs(node.left, path, target - node.val);
      dfs(node.right, path, target - node.val);
    }
  }
};
