export function mergeSortedArray(nums1, nums2) {
  Array.prototype.push.apply(nums1, nums2);
  nums1.sort((x, y) => x > y);
  return nums1;
}
