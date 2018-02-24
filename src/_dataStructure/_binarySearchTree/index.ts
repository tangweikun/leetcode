import Node from './node'

export default class BinarySearchTree {
  root: any
  constructor() {
    this.root = null
  }

  push(value: any) {
    const root = this.root

    if (!root) {
      this.root = new Node(value)
      return
    }

    let currentNode = root
    const newNode = new Node(value)

    while (currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode
          break
        } else {
          currentNode = currentNode.left
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode
          break
        } else {
          currentNode = currentNode.right
        }
      }
    }
  }
}
