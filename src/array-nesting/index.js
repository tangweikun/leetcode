// Using Visited Array

export const arrayNesting = nums => {
  const visited = Array(nums.length);
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!visited[i]) {
      let start = nums[i];
      let count = 0;

      do {
        start = nums[start];
        count++;
        visited[start] = true;
      } while (start !== nums[i]);

      res = Math.max(res, count);
    }
  }

  return res;
};
