/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  const longerStr = str1.length > str2.length ? str1 : str2;
  const shorterStr = str1.length > str2.length ? str2 : str1;
  let end = shorterStr.length;

  while (end > 0) {
    const gcd = shorterStr.slice(0, end);
    const gcdLength = gcd.length;
    const longerTimes = longerStr.length / gcdLength;
    const shorterTimes = shorterStr.length / gcdLength;
    if (
      gcd.repeat(longerTimes) === longerStr &&
      gcd.repeat(shorterTimes) === shorterStr
    ) {
      return gcd;
    }

    end--;
  }

  return '';
};

console.log(gcdOfStrings('abab', 'ab'));
