import { Node } from './node'

export function addToHead(head, element: any) {
  var newNode = new Node(element)

  newNode.next = head

  return newNode
}
