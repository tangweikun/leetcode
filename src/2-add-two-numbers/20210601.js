/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const pre = new ListNode();
  let cur = pre;
  let carry = 0;

  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = sum >= 10 ? 1 : 0;
    cur.next = new ListNode(sum % 10);
    cur = cur.next;

    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }

  carry && (cur.next = new ListNode(carry));

  return pre.next;
};
