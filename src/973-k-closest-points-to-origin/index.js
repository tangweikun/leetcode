/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  points.sort(
    (x, y) =>
      Math.pow(y[0], 2) +
      Math.pow(y[1], 2) -
      Math.pow(x[0], 2) -
      Math.pow(x[1], 2),
  );
  return points.slice(0, K);
};
