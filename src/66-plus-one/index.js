export function plusOne(digits) {
  let carry = 1;
  const res = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    res.unshift((digits[i] + carry) % 10);
    carry = digits[i] + carry === 10 ? 1 : 0;
  }

  if (carry > 0) {
    return [1, ...res];
  }

  return res;
}
