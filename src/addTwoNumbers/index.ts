// HELP:
import { ListNode } from '../_utils'

export const addTwoNumbers = (l1: any, l2: any) => {
  let dummyHead = new ListNode(0)
  let curr = dummyHead
  let carry = 0

  while (l1 || l2) {
    let x = l1 ? l1.val : 0
    let y = l2 ? l2.val : 0
    let sum = carry + x + y
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next

    carry = ~~(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
  }

  if (carry > 0) curr.next = new ListNode(carry)

  return dummyHead.next
}
