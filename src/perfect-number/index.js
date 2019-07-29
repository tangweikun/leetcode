export function checkPerfectNumber(num) {
  let i = 2;
  let sum = 1;
  let limit = Math.sqrt(num);

  while (i <= limit) {
    if (num % i === 0) {
      sum += i + num / i;
    }
    i++;
  }

  return num > 2 && sum === num;
}
