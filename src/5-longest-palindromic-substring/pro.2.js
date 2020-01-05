/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  if (!s) return "";
  var range = [0, -1];

  const findLongest = (str = "", low) => {
    let high = low;
    // 定义中间字符的边界
    while (high < str.length - 1 && str[high + 1] === str[low]) {
      high++;
    }
    const ans = high;
    while (low > 0 && high < str.length - 1 && str[low - 1] === str[high + 1]) {
      low--;
      high++;
    }
    if (high - low > range[1] - range[0]) {
      range = [low, high];
    }
    return ans;
  };

  for (let i = 0; i < s.length; i++) {
    i = findLongest(s, i);
  }
  return s.substring(range[0], range[1] + 1);
};
