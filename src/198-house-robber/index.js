export function houseRob(nums) {
  let maxList = [];
  for (let i = 0; i < nums.length; i++) {
    const preMax = Math.max(...maxList.slice(0, -1), 0);
    if (nums[i] + preMax >= ~~maxList[i - 1]) {
      maxList.push(nums[i] + preMax);
    } else {
      maxList.push(maxList[i - 1]);
    }
  }

  return Math.max(...maxList.slice(-2), 0);
}
