/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function (A, B) {
  let res = '';
  const arr = [
    { label: 'a', value: A },
    { label: 'b', value: B },
  ];

  while (arr[0].value > 0 || arr[1].value > 0) {
    arr.sort((x, y) => x.value - y.value);
    const [min, max] = arr;

    if (
      res.length >= 2 &&
      res[res.length - 1] === max.label &&
      res[res.length - 2] === max.label
    ) {
      res += min.label;
      min.value--;
      continue;
    }

    res += max.label;
    max.value--;
  }

  return res;
};
