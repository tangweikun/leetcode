/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len = nums1.length + nums2.length;
  if (len === 1) {
    return ~~nums1[0] + ~~nums2[0];
  }
  const start = Math.floor(len / 2);
  let count = 0;
  const res = [];

  while (nums1.length > 0 || nums2.length > 0) {
    let temp;
    if (nums1.length > 0 && nums2.length > 0) {
      if (nums1[0] < nums2[0]) {
        temp = nums1.shift();
      } else {
        temp = nums2.shift();
      }
    } else {
      temp = nums1.shift();
      temp = temp !== undefined ? temp : nums2.shift();
    }

    if (count === start - 1 || count === start) {
      res.push(temp);
    }

    if (res.length === 2) {
      return len % 2 === 1 ? res[1] : (res[0] + res[1]) / 2;
    }

    count++;
  }
};
