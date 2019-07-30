export function plusOne(digits) {
  const lastIndex = digits.length - 1;
  let i = lastIndex;

  while (i >= 0) {
    if (digits[i] !== 9) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;
    if (i === 0) {
      digits.unshift(1);
      return digits;
    }
    i--;
  }

  return digits;
}
