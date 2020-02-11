/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let str = "";

  while (head) {
    str += head.val;
    head = head.next;
  }

  return parseInt(str, 2);
};
