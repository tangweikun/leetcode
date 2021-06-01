/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let [reverse, cur] = [null, head];

  while (cur) {
    const next = cur.next;
    cur.next = reverse;
    reverse = cur;
    cur = next;
  }

  return reverse;
};
