// Time Complexity O(n)
// Space Complexity O(n)

export function countBinarySubstrings(str) {
  let sum = 0;
  let groups = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(i + 1)) {
      groups.push(count);
      count = 1;
    } else {
      count++;
    }
  }

  for (let j = 0; j < groups.length - 1; j++) {
    sum += Math.min(groups[j], groups[j + 1]);
  }

  return sum;
}
