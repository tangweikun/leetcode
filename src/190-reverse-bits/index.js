export function reverseBits(num) {
  let result = 0;
  let bit = '';
  let i = 0;

  while (num >= 1) {
    bit += num % 2;
    num = num % 2 === 1 ? (num - 1) >>> 1 : num >>> 1;
    result += Math.pow(2, 31 - i) * bit[i];
    i++;
  }

  return result;
}
