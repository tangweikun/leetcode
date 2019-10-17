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

var middleNode = function(head) {
  const hash = [];

  while (head && head.next) {
    hash.push(head);
    head = head.next;
  }
  hash.push(head);

  return hash[Math.floor(hash.length / 2)];
};
