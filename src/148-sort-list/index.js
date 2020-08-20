/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let slow = head;
  let fast = head;

  while (slow) {
    while (fast) {
      if (slow.val > fast.val) {
        const temp = slow.val;
        slow.val = fast.val;
        fast.val = temp;
      }
      fast = fast.next;
    }
    slow = slow.next;
    fast = slow;
  }

  return head;
};
