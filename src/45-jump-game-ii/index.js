// HELP:

export function jump(nums) {
  let jumps = 0;
  let curEnd = 0;
  let maxPosition  = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition  = Math.max(i + nums[i], maxPosition );
    if (i === curEnd) {
      jumps++;
      curEnd = maxPosition ;
    }
  }

  return jumps;
}
