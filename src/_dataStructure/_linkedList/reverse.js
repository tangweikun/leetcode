export function reverse(head) {
  let prev = null
  let curr = head

  while (curr) {
    let nextTmp = curr.next
    curr.next = prev
    prev = curr
    curr = nextTmp
  }

  return prev
}
