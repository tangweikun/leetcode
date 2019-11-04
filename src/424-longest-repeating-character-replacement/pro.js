// HELP:
/**
 * 滑动窗口。需要替换数 = 窗口长度 - 窗口中最多的字符数
 */
var characterReplacement = function(s, K) {
  const count = new Map();
  let maxCount = 0; // 窗口中最多的那个字符的数量
  let [left, right] = [0, 0];
  let res = 0;

  while (right < s.length) {
    const newChar = s[right];
    count.set(newChar, (count.get(newChar) || 0) + 1);
    maxCount = Math.max(maxCount, count.get(newChar));
    ++right;
    if (right - left - maxCount <= K) {
      // 能替换所有非最多字符
      res = Math.max(res, right - left);
    }

    while (right - left - maxCount > K && left <= right) {
      // 不能，则减少头字符直到删除了一个非最多字符
      const oldChar = s[left++];
      count.set(oldChar, count.get(oldChar) - 1);
      // 重新找出最多字符
      maxCount = Array.from(count.values()).reduce((a, b) => Math.max(a, b), 0);
    }
  }

  return res;
};
