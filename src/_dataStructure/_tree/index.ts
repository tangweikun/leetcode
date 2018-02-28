import { TreeNode } from './treeNode'

export default function Tree(data: any) {
  var node = new TreeNode(data)
  this._root = node
}

// Depth-First Search
Tree.prototype.traverseDF = function(callback: any) {
  recurse(this._root)

  function recurse(currentNode: any) {
    for (let i = 0; i < currentNode.children.length; i++) {
      recurse(currentNode.children[i])
    }
    callback(currentNode)
  }
}
