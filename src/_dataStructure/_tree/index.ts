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

Tree.prototype.contains = function(val: any) {
  let res = false

  this.traverseBF((treeNode: any) => {
    if (treeNode.val === val) res = true
  })

  return res
}

Tree.prototype.add = function(val: any, parentVal: any) {
  const child = new TreeNode(val)
  let parent: any = null
  this.traverseBF((treeNode: any) => {
    if (treeNode.val === parentVal) parent = treeNode
  })

  if (parent) {
    parent.children.push(child)
    child.parent = parent
  } else {
    throw new Error('Cannot add node to a non-existent parent.')
  }
}

Tree.prototype.remove = function(val: any, parentVal: any) {
  let parent: any = null
  this.traverseBF((treeNode: any) => {
    if (treeNode.val === parentVal) parent = treeNode
  })

  if (parent) {
    const index = parent.children.findIndex((x: any) => x.val === val)
    if (index !== -1) {
      parent.children.splice(index, 1)
    } else {
      throw new Error('Node to remove does not exist.')
    }
  } else {
    throw new Error('Parent does not exist.')
  }
}
