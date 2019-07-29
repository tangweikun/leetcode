export const nextGreaterElement = (nums1, nums2) => {
  let res = Array(nums1.length).fill(-1);

  for (let i = 0; i < nums1.length; i++) {
    const pos = nums2.findIndex(x => x === nums1[i]);
    for (let j = pos + 1; j < nums2.length; j++) {
      if (nums2[j] > nums2[pos]) {
        res[i] = nums2[j];
        break;
      }
    }
  }

  return res;
};
