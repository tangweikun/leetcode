// HELP:

import { ListNode } from '../_utils';

export const addTwoNumbers2 = (l1, l2) => {
  let s1 = [];
  let s2 = [];
  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }

  let sumList = new ListNode(0);
  let sum = 0;
  while (s1.length !== 0 || s2.length !== 0) {
    if (s1.length) sum += s1.pop();
    if (s2.length) sum += s2.pop();

    sumList.val = sum % 10;
    const nextSum = new ListNode(Math.floor(sum / 10));
    nextSum.next = sumList;
    sumList = nextSum;
    sum = Math.floor(sum / 10);
  }

  return sumList.val === 0 ? sumList.next : sumList;
};
