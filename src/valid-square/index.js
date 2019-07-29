export function validSquare(p1, p2, p3, p4) {
  const p12Square = getDistance(p1, p2);
  const p23Square = getDistance(p2, p3);
  const p34Square = getDistance(p3, p4);
  const p41Square = getDistance(p4, p1);
  const p13Square = getDistance(p1, p3);
  const p24Square = getDistance(p2, p4);

  const lines = [
    p12Square,
    p23Square,
    p34Square,
    p41Square,
    p13Square,
    p24Square,
  ].sort((x, y) => x - y);

  return (
    lines[0] + lines[1] === lines[2] + lines[3] &&
    lines[4] === lines[5] &&
    lines[4] > lines[3]
  );
}

const getDistance = (a, b) =>
  Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);
