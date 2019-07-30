export const findNthDigit = n => {
  let i = 0;
  while (9 * Math.pow(10, i) * (i + 1) <= n) {
    n -= 9 * Math.pow(10, i) * (i + 1);
    i++;
  }

  const reminder = n % (i + 1);
  const gap = (n - reminder) / (i + 1);

  return reminder === 0
    ? (Math.pow(10, i) - 1 + gap) % 10
    : +String(Math.pow(10, i) + gap)[reminder - 1];
};
