export function canPlaceFlowers(flowerbed: number[], n: number) {
  let i = 0
  let res = 0

  while (i < flowerbed.length) {
    if (flowerbed[i] === 1) {
      i++
    } else if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      res++
      i++
    }

    i++
  }

  return n <= res
}
