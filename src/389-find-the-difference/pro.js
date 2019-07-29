// Time Complexity O(n)
// Space Complexity O(1)

export function findTheDifference(str1, str2) {
  let code = 0;

  for (let i = 0; i < str1.length; i++) {
    code ^= str1.charCodeAt(i);
  }

  for (let j = 0; j < str2.length; j++) {
    code ^= str2.charCodeAt(j);
  }

  return String.fromCharCode(code);
}
