// HELP:
// area = 1/2 * a * b * sin(c)

export const largestTriangleArea = function(points) {
  let res = 0;
  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      for (let k = j + 1; k < points.length; k++) {
        res = Math.max(res, area(points[i], points[j], points[k]));
      }
    }
  }

  return res;
};

function area(I, J, K) {
  return (
    0.5 *
    Math.abs(
      I[0] * J[1] +
        J[0] * K[1] +
        K[0] * I[1] -
        I[1] * J[0] -
        J[1] * K[0] -
        K[1] * I[0],
    )
  );
}
