// Time Complexity: O(n)

export function getElem(head, i) {
  let j = 1;
  let p = head;

  while (p && j < i) {
    p = p.next;
    j++;
  }

  if (!p || j > i) {
    return 'Node Not Exist';
  }

  return p;
}
