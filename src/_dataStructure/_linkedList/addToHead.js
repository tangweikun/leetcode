import { Node } from './node';

export function addToHead(head, element) {
  var newNode = new Node(element);

  newNode.next = head;

  return newNode;
}
