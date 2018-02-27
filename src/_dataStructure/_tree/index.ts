import { TreeNode } from './treeNode'

export default function Tree(data: any) {
  var node = new TreeNode(data)
  this._root = node
}
