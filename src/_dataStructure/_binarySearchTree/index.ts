import { TreeNode } from '..'

export default class BinarySearchTree {
  root: any
  constructor() {
    this.root = null
  }

  add(val: any) {
    const node = new TreeNode(val)
    if (!this.root) {
      this.root = node
    } else {
      let current = this.root
      while (current) {
        if (node.val < current.val) {
          if (!current.left) {
            current.left = node
            break
          }
          current = current.left
        } else if (node.val > current.val) {
          if (!current.right) {
            current.right = node
            break
          }
          current = current.right
        } else {
          break
        }
      }
    }
  }

  contains(val: any) {
    let current = this.root
    while (current) {
      if (val === current.val) {
        return true
      }
      if (val < current.val) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return false
  }
}
