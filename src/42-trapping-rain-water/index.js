// 字节跳动
// HELP:

function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= leftMax
        ? (leftMax = height[left])
        : (res += leftMax - height[left]);
      left++;
    } else {
      height[right] > rightMax
        ? (rightMax = height[right])
        : (res += rightMax - height[right]);
      right--;
    }
  }

  return res;
}
