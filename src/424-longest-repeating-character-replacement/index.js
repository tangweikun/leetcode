// HELP:

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let character = new Array(26).fill(0);
  let start = 0;
  let maxLength = 0;
  let maxCount = 0;

  for (let i = 0; i < s.length; i++) {
    character[s.charCodeAt(i) - 'A'.charCodeAt(0)]++;
    maxCount = Math.max(
      maxCount,
      character[s.charCodeAt(i) - 'A'.charCodeAt(0)],
    );
    while (i - start + 1 - maxCount > k) {
      maxCount = Math.max(
        maxCount,
        --character[s.charCodeAt(start) - 'A'.charCodeAt(0)],
      );
      start++;
    }

    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
};
