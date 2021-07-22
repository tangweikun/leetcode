/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s === "0") return 0;
  let pre1 = 1;
  let pre2 = 0;
  let current = 0;

  for (let i = 1; i <= s.length; i++) {
    current = 0;

    if (s[i - 1] !== "0") {
      current += pre1;
    }
    if (s[i - 2] !== "0" && s[i - 2] * 10 + s[i - 1] * 1 <= 26) {
      current += pre2;
    }

    pre2 = pre1;
    pre1 = current;
  }

  return current;
};
