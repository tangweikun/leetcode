export function find(head, element) {
  let currentNode = head;

  while (currentNode) {
    if (currentNode.data === element) {
      return currentNode;
    }

    currentNode = currentNode.next;
  }

  return null;
}
