// Time Complexity O(N)
// Space Complexity O(1)

export function getClimbingWays(numOfStairs: number) {
  if (numOfStairs < 3) return numOfStairs
  let thirdToLast: number = 1
  let secondToLast: number = 2
  let temp: number = 0
  for (let i: number = 3; i <= numOfStairs; i++) {
    temp = thirdToLast + secondToLast
    thirdToLast = secondToLast
    secondToLast = temp
  }
  return temp
}
