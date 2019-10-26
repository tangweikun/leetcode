// HELP:

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let left = true;
  let head = 1;
  let step = 1;

  while (n > 1) {
    if (left || n % 2 === 1) {
      head += step;
    }
    n = Math.floor(n / 2);
    step *= 2;
    left = !left;
  }

  return head;
};
