// HELP:

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  return n === 1 ? 1 : 2 * ((n >> 1) + 1 - lastRemaining(n >> 1));
};

console.log(lastRemaining(11));
