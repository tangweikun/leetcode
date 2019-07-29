// Time Complexity O(n)
// Space Complexity O(1)

export function findTheDifference(str1, str2) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < str1.length; i++) {
    sum1 += str1.charCodeAt(i);
  }

  for (let j = 0; j < str2.length; j++) {
    sum2 += str2.charCodeAt(j);
  }

  return String.fromCharCode(sum2 - sum1);
}
