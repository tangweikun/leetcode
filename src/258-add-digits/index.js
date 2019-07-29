// Time Complexity O(n)
// Space Complexity O(1)

export function addDigits(num) {
  let sum = 0;

  for (let n of num.toString()) {
    sum += +n;
    if (sum >= 10) {
      sum = sum - 9;
    }
  }

  return sum;
}
