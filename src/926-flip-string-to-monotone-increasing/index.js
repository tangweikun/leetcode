// HELP:

/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
  let withOne = 0;
  let withZero = 0;

  for (let i of S) {
    withOne = Math.min(withOne, withZero) + (i === '1' ? 0 : 1);
    withZero += i === '1' ? 1 : 0;
  }

  return Math.min(withOne, withZero);
};
