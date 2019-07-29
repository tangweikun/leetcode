export function maximumSwap(num) {
  const str = ('' + num).split('');

  for (let i = 0; i < str.length; i++) {
    let currentMax = +str[i];
    let swapPosition = i;

    for (let j = i; j < str.length; j++) {
      if (currentMax <= +str[j] && str[i] !== str[j]) {
        currentMax = +str[j];
        swapPosition = j;
      }
    }

    if (currentMax !== +str[i]) {
      const temp = str[i];
      str[i] = str[swapPosition];
      str[swapPosition] = temp;
      return +str.join('');
    }
  }

  return num;
}
