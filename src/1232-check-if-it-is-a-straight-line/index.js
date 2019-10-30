/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  coordinates.sort((x, y) => x[0] - y[0]);
  const rate =
    (coordinates[1][0] - coordinates[0][0]) /
    (coordinates[1][1] - coordinates[0][1]);
  for (let i = 2; i < coordinates.length; i++) {
    const currentRate =
      (coordinates[i][0] - coordinates[i - 1][0]) /
      (coordinates[i][1] - coordinates[i - 1][1]);
    if (currentRate !== rate) return false;
  }

  return true;
};
