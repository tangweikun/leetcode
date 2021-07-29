function subsets(nums) {
  const res = [];
  backtrace([], 0);
  return res;

  function backtrace(temp, index) {
    if (index > nums.length) return;

    if (index === nums.length) {
      res.push(temp);
    }

    backtrace([...temp, nums[index]], index + 1);
    backtrace(temp, index + 1);
  }
}

console.log(subsets([1, 2, 3]));
