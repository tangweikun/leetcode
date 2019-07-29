export function longestCommonPrefix(arr) {
  const len = arr.length;
  if (len === 0) return '';

  let i = 1;
  let result = arr[0];

  while (i < len && result !== '') {
    let temp = '';
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr[i][j]) {
        temp += result[j];
      } else {
        result = temp;
        break;
      }
    }
    i++;
  }

  return result;
}
