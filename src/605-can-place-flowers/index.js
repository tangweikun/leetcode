export function canPlaceFlowers(flowerbed, n) {
  let i = 0;

  while (i < flowerbed.length && n > 0) {
    if (~~flowerbed[i - 1] + ~~flowerbed[i + 1] + flowerbed[i] === 0) {
      n--;
      i++;
    }

    i++;
  }

  return n === 0;
}
