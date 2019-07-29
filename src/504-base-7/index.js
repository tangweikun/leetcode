export function convertToBase7(n) {
  const sign = n >= 0 ? '' : '-';
  let res = '';
  let num = Math.abs(n);

  while (num > 0) {
    res = (num % 7) + res;
    num = ~~(num / 7);
  }

  return sign + res;
}
