/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const thousand = Math.trunc(num / 1000);
  const hundred = Math.trunc(num / 100) % 10;
  const ten = Math.trunc(num / 10) % 10;
  const one = num % 10;

  const oneStr = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'][
    one
  ];

  const tenStr = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'][
    ten
  ];

  const hundredStr = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
  ][hundred];

  const thousandStr = ['', 'M', 'MM', 'MMM'][thousand];

  return thousandStr + hundredStr + tenStr + oneStr;
};
