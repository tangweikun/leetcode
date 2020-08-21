/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  return (
    nums
      .sort((x, y) => '' + y + x - ('' + x + y))
      .join('')
      .replace(/^0*/, '') || '0'
  );
};
