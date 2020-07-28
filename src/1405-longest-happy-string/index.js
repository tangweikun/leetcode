/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */

// 每轮放置字符时优先先放剩余次数最多的, 如果上次放的2个字符和剩余个数最多的字符相同，则放置次多的字符

var longestDiverseString = function (a, b, c) {
  let res = '';
  const helper = [
    { label: 'a', value: a },
    { label: 'b', value: b },
    { label: 'c', value: c },
  ];

  while (true) {
    helper.sort((a, b) => b.value - a.value);
    const [max, secondMax] = helper;
    const len = res.length;
    const lastStr = res[len - 1];
    const secondLastStr = res[len - 2];

    if (max.value === 0) {
      return res;
    }

    if (len >= 2 && lastStr === max.label && secondLastStr === max.label) {
      if (secondMax.value === 0) {
        return res;
      }

      res += secondMax.label;
      secondMax.value--;
      continue;
    }

    res += max.label;
    max.value--;
  }
};
