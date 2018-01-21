export function distributeCandies(candies: number[]) {
  return Math.min(new Set(candies).size, candies.length / 2)
}
