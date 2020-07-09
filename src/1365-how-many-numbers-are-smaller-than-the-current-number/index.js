/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const hash = {};
  const res = [];
  const sortedNums = nums.slice(0).sort((x, y) => x - y);

  for (let i = 0; i < sortedNums.length; i++) {
    if (hash[sortedNums[i]] == undefined) {
      hash[sortedNums[i]] = i;
    }
  }

  for (let n of nums) {
    res.push(hash[n]);
  }

  return res;
};
