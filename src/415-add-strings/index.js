export function addStrings(num1, num2) {
  let [i, j] = [num1.length - 1, num2.length - 1];
  let ans = '';
  let carry = 0;

  for (; i >= 0 || j >= 0 || carry === 1; i--, j--) {
    const sum = ~~num1[i] + ~~num2[j] + carry;
    ans = (sum % 10) + ans;
    carry = ~~(sum / 10);
  }

  return ans;
}
