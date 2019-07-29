// Time Complexity: O(1)
// Space complexity: O(1)

export function hasAlternatingBits(num) {
  let prev = num & 1;

  while (num > 0) {
    num >>= 1;
    if (prev === (num & 1)) return false;
    prev = num & 1;
  }

  return true;
}
