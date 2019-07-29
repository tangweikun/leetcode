export function distributeCandies(candies) {
  return Math.min(new Set(candies).size, candies.length >> 1);
}
