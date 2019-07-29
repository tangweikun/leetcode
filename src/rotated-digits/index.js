export const rotatedDigit = n => {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (isRotate(i)) res++;
  }
  return res;
};

const isRotate = n => {
  const invalidNums = [3, 4, 7];
  const validNums = [2, 5, 6, 9];
  let isGood = false;

  while (n > 0) {
    const reminder = n % 10;
    if (invalidNums.includes(reminder)) return false;
    if (validNums.includes(reminder)) isGood = true;
    n = (n - reminder) / 10;
  }

  return isGood;
};
