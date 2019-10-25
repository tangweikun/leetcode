/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  let min = Infinity;
  const oneDay = 24 * 60;
  const time2Minutes = time => {
    const [hours, minutes] = time.split(':').map(n => +n);
    return hours * 60 + minutes;
  };

  const mins = timePoints.map(t => time2Minutes(t)).sort((a, b) => a - b);

  for (let i = 1; i < mins.length; i++) {
    min = Math.min(min, mins[i] - mins[i - 1]);
  }

  return Math.min(min, mins[0] + oneDay - mins[mins.length - 1]);
};
