/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  const charCodeOfa = 'a'.charCodeAt();
  const arr = Array.from({ length: 26 }, (_, index) => ({
    label: String.fromCharCode(charCodeOfa + index),
    value: 0,
  }));

  for (let char of S) {
    arr[char.charCodeAt() - charCodeOfa].value++;
  }

  let res = '';
  let lastStr = '';

  while (true) {
    arr.sort((x, y) => y.value - x.value);
    const [max, secondMax] = arr;
    if (max.value === 0) {
      return res;
    }

    if (lastStr === max.label) {
      if (secondMax.value === 0) {
        return '';
      }

      res += secondMax.label;
      lastStr = secondMax.label;
      secondMax.value--;
    } else {
      res += max.label;
      max.value--;
      lastStr = max.label;
    }
  }
};
