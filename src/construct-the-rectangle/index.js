export const constructRectangle = area => {
  let L = Infinity;
  let W = -Infinity;

  for (let i = 1; i <= Math.sqrt(area); i++) {
    if (area % i === 0 && area / i - i < L - W) {
      L = area / i;
      W = i;
    }
  }

  return [L, W];
};
