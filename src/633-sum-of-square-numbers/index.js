export function judgeSquareSum(num) {
  for (let i = 0; i <= Math.sqrt(num); i++) {
    if (Number.isInteger(Math.sqrt(num - i * i))) {
      return true;
    }
  }

  return false;
}
