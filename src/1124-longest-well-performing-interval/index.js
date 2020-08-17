/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  for (let i = 0; i < hours.length; i++) {
    hours[i] = hours[i] > 8 ? 1 : -1;
  }

  let res = 0;

  for (let i = 0; i < hours.length; i++) {
    let count = 0;
    for (let j = i; j < hours.length; j++) {
      count += hours[j];
      if (count > 0) {
        res = Math.max(res, j - i + 1);
      }
    }
  }

  return res;
};
