export function isHappyNumber(num) {
  const hash = [];
  while (true) {
    if (num < 10) return num === 1 || num === 7;
    if (hash[num]) return false;
    hash[num] = true;
    num = digitSquareSum(num);
  }
}

const digitSquareSum = num => {
  let sum = 0;

  while (num) {
    const reminder = num % 10;
    sum += reminder ** 2;
    num = (num - reminder) / 10;
  }

  return sum;
};
