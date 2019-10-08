/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [[nums[0]]];

  for (let n of nums.slice(1)) {
    const temp = [];
    for (let i = 0; i < res.length; i++) {
      const arr = res[i];

      let j = 0;
      while (j <= arr.length) {
        const curr = [...arr];
        curr.splice(j, 0, n);
        temp.push(curr);
        j++;
      }
    }
    res = temp;
  }

  return res;
};

console.log(permute([1, 2, 3]));
