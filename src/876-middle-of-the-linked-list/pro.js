// 当用慢指针 slow 遍历列表时，让另一个指针 fast 的速度是它的两倍。
// 当 fast 到达列表的末尾时，slow 必然位于中间

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
