export function greatestCommonDivisor(a, b) {
  if (a > b) return gcd(a, b);
  return gcd(b, a);
}

const gcd = (bigNumber, smallNumber) => {
  const reminder = bigNumber % smallNumber;
  if (reminder === 0) return smallNumber;
  return gcd(smallNumber, reminder);
};
