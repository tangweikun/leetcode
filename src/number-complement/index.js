export function findComplement(num) {
  let sum = 0;
  let i = 0;

  while (num > 0) {
    sum += ((num & 1) ^ 1) * Math.pow(2, i);
    num >>= 1;
    i++;
  }

  return sum;
}
