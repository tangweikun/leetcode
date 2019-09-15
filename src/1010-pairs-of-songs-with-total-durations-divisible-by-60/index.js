/**
 * @param {number[]} time
 * @return {number}
 */

var numPairsDivisibleBy60 = function(time) {
  const map = {};
  let res = 0;
  for (let num of time.map(x => x % 60)) {
    if (map[num] > 0) {
      res += map[num];
    }
    map[(60 - num) % 60] = ~~map[(60 - num) % 60] + 1;
  }
  return res;
};

console.log(numPairsDivisibleBy60([60, 60, 60]));
