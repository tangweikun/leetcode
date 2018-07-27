export function mergeSortedArray(nums1: number[], nums2: number[]) {
  let i = 0

  for (let j = 0; j < nums2.length; j++) {
    while (nums1[i] < nums2[j]) i++
    nums1.splice(i++, 0, nums2[j])
  }

  return nums1
}
