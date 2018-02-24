import Node from './node'

export function Tree(data: any) {
  const node = new Node(data)
  this._root = node
}
