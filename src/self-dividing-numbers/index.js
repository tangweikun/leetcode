export function selfDividingNumbers(start, end) {
  const res = [];

  for (let i = start; i <= end; i++) {
    if (isSelfDividingNumber(i)) res.push(i);
  }

  return res;
}

function isSelfDividingNumber(num) {
  let n = num;

  while (n > 0) {
    if (num % (n % 10) !== 0) return false;
    n = ~~(n / 10);
  }

  return true;
}
