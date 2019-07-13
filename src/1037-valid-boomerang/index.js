function isBoomerang(points) {
  const [[xa, ya], [xb, yb], [xc, yc]] = points;
  return xb * ya - xa * yb + (xc * yb - xb * yc) + (xa * yc - xc * ya) !== 0;
}
