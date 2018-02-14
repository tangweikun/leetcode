export function find(head: any, element: number) {
  let currentNode = head

  while (currentNode) {
    if (currentNode.data === element) {
      return currentNode
    }

    currentNode = currentNode.next
  }

  return null
}
