// Time Complexity O(n)
// Space Complexity O(1)

export function firstUniqChar(str) {
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    hash[str[i]] = ~~hash[str[i]] + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]] === 1) return i;
  }

  return -1;
}
