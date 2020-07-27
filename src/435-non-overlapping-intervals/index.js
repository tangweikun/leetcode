/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length < 2) return 0;

  intervals.sort((x, y) => x[0] - y[0]);
  let end = intervals[0][1];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    const start = intervals[i][0];
    if (start < end) {
      count++;
      end = Math.min(end, intervals[i][1]);
    } else {
      end = intervals[i][1];
    }
  }

  return count;
};
