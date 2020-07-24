/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let hash = [];
  for (let arr of trips) {
    const [passengers, start, end] = arr;
    let pos = start;
    while (pos < end) {
      hash[pos] = ~~hash[pos] + passengers;
      if (hash[pos] > capacity) {
        return false;
      }
      pos++;
    }
  }

  return true;
};
