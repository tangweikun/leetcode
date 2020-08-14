/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const arr = preorder.split(',');
  let slot = 1;

  for (let str of arr) {
    slot -= 1;

    if (slot < 0) {
      return false;
    }

    if (str !== '#') {
      slot += 2;
    }
  }

  return slot === 0;
};
