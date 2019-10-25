/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  const maxTime = 24 * 60;
  let res = Infinity;
  const times = timePoints.map(str => {
    const arr = str.split(':');
    return arr[0] * 60 + Number(arr[1]);
  });

  for (let i = 0; i < times.length - 1; i++) {
    for (let j = i + 1; j < times.length; j++) {
      res = Math.min(
        res,
        Math.abs(times[j] - times[i]),
        maxTime - times[i] + times[j],
        maxTime - times[j] + times[i],
      );
    }
  }

  return res;
};
