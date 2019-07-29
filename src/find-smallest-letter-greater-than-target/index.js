// Time Complexity O(n)
// Space Complexity O(1)

// TODO: Use Binary Search
export function nextGreatestLetter(letters, target) {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target) return letters[i];
  }

  return letters[0];
}
