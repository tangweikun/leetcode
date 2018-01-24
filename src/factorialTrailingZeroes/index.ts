export function trailingZeroes(n: number) {
  var ans = 0
  while (n) {
    ans += ~~(n / 5)
    n /= 5
  }

  return ans

  // let five = 0

  // for (let i = 5; i <= n; i = i + 5) {
  //   let current = i
  //   while (current % 3814697265625 === 0) {
  //     five += 18
  //     current /= 3814697265625
  //   }

  //   while (current % 5 === 0) {
  //     five++
  //     current /= 5
  //   }
  // }

  // return five
}
