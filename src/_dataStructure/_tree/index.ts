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

// Breadth-First Search
Tree.prototype.traverseBF = function(callback: any) {
  let queue = []
  let currentTree = this._root

  while (currentTree) {
    for (let i = 0; i < currentTree.children.length; i++) {
      queue.unshift(currentTree.children[i])
    }

    callback(currentTree)
    currentTree = queue.pop()
  }
}
