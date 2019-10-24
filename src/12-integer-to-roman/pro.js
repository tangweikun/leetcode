/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  let index = 0;
  let result = '';

  while (index < 13) {
    while (num >= nums[index]) {
      num -= nums[index];
      result += romans[index];
    }
    index++;
  }
  return result;
};
