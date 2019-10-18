// HELP:
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var cur = head;
  var pre = null;
  while (cur) {
    if (cur.val == val) {
      if (pre) {
        pre.next = cur.next;
      } else {
        head = cur.next;
        pre = null;
      }
    } else {
      pre = cur;
    }

    cur = cur.next;
  }
  return head;
};
