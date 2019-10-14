/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  let sums = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      sums.push({ sum: nums1[i] + nums2[j], arr: [nums1[i], nums2[j]] });
    }
  }
  sums.sort((x, y) => x.sum - y.sum);
  return sums.slice(0, k).map(item => item.arr);
};
