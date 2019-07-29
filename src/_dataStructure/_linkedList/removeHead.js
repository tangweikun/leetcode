export function removeHead(head) {
  if (head) {
    return head.next;
  }

  return head;
}
