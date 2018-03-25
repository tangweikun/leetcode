import { I_TreeNode } from '../../_interface'
// Depth-First-Search
// HELP:

//leaf means no left and no right
export const binaryTreePaths = function(root: I_TreeNode) {
  const paths: any[] = []
  const stack: number[] = []
  dfs(root)
  return paths.map(path => path.join('->'))

  function dfs(rootNode: I_TreeNode) {
    if (!rootNode) return
    stack.push(rootNode.val)
    if (rootNode.left != null) dfs(rootNode.left)
    if (rootNode.right != null) dfs(rootNode.right)
    //Hit a leaf!
    if (!rootNode.right && !rootNode.left) paths.push([...stack])
    stack.pop()
  }
}
