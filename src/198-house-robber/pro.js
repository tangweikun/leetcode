export function houseRob(nums) {
  let rob = 0; // max money can get if rob current house
  let notRob = 0; // max money can get if not rob current house

  for (let i = 0; i < nums.length; i++) {
    let temp = notRob + nums[i];
    //if rob current val, previous house must not be robbed
    notRob = Math.max(notRob, rob);
    //if not rob ith hous, take the max value of robbed (i-1)house
    rob = temp;
  }

  return Math.max(rob, notRob);
}
