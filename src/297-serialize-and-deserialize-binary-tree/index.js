// 字节跳动

var serialize = function(root) {
  let res = [];
  dfs(root);
  return res;

  function dfs(node) {
    if (node === null) {
      res.push(null);
    } else {
      res.push(node.val);
      dfs(node.left);
      dfs(node.right);
    }
  }
};

var deserialize = function(data) {
  return dfs();

  function dfs() {
    if (data.length === 0) {
      return null;
    }

    const val = data.shift();
    if (val === null) {
      return null;
    }

    const node = new TreeNode(val);
    node.left = dfs();
    node.right = dfs();

    return node;
  }
};
