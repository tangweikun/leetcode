// Time Complexity O(1)
// Space Complexity O(1)

export function hammingDistance(x, y) {
  let z = x ^ y;
  let sum = 0;

  while (z) {
    sum += z & 1;
    z >>>= 1;
  }

  return sum;
}
