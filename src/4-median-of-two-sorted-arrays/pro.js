/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(arr1, arr2) {
  const arr = [];
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length === 0) {
      arr.push(...arr2);
      break;
    }
    if (arr2.length === 0) {
      arr.push(...arr1);
      break;
    }

    const temp = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
    arr.push(temp);
  }

  return (
    (arr[Math.floor((arr.length - 1) / 2)] +
      arr[Math.ceil((arr.length - 1) / 2)]) /
    2
  );
};
