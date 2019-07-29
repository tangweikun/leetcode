export function arrangeCoins(num) {
  let sum = 0;
  let i = 1;

  while (sum < num) {
    sum += i;
    i++;
  }

  return i - 2 + ~~(sum === num);
}
