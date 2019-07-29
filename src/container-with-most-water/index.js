export function maxArea(heights) {
  let max = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    max = Math.max(
      max,
      Math.min(heights[left], heights[right]) * (right - left),
    );
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
