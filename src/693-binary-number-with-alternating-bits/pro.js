// Time Complexity: O(1)
// Space complexity: O(1)

export function hasAlternatingBits(num) {
  const binary = num.toString(2);

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === binary[i + 1]) return false;
  }

  return true;
}
