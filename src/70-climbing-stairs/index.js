// Approach: Fibonacci Number
// Time Complexity O(N)
// Space Complexity O(1)

export function getClimbingWays(numOfStairs) {
  if (numOfStairs < 3) return numOfStairs;
  let thirdToLast = 1;
  let secondToLast = 2;
  let temp = 0;
  for (let i = 3; i <= numOfStairs; i++) {
    temp = thirdToLast + secondToLast;
    thirdToLast = secondToLast;
    secondToLast = temp;
  }
  return temp;
}
