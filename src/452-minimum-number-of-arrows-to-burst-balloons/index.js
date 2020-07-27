/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length <= 0) return 0;

  const arr = points.sort((a, b) => a[1] - b[1]);
  let end = arr[0][1];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] > end) {
      count++;
      end = arr[i][1];
    }
  }

  return count;
};
