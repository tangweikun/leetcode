export function fizzBuzz(num) {
  const ans = [];

  for (let i = 1; i <= num; i++) {
    const fizz = i % 3 === 0 ? 'Fizz' : '';
    const buzz = i % 5 === 0 ? 'Buzz' : '';
    ans.push(fizz + buzz || i + '');
  }

  return ans;
}
