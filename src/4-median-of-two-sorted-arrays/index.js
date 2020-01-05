// 字节跳动

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  while (nums1.length + nums2.length > 2) {
    if (nums1.length === 0) {
      nums2.pop();
      nums2.shift();
      continue;
    }

    if (nums2.length === 0) {
      nums1.shift();
      nums1.pop();
      continue;
    }

    if (nums1[0] < nums2[0]) {
      nums1.length > 0 ? nums1.shift() : nums2.shift();
    } else {
      nums2.length > 0 ? nums2.shift() : nums1.shift();
    }
    if (nums1[nums1.length - 1] > nums2[nums2.length - 1]) {
      nums1.length > 0 ? nums1.pop() : nums2.pop();
    } else {
      nums2.length > 0 ? nums2.pop() : nums1.pop();
    }
  }

  return (
    (~~nums1[0] + ~~nums1[1] + ~~nums2[1] + ~~nums2[0]) /
    (nums1.length + nums2.length)
  );
};
