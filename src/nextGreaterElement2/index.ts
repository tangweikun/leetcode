export const nextGreaterElement2 = (nums: number[]) => {
  const res = []

  for (let i = 0; i < nums.length; i++) {
    res[i] = -1
    for (let j = 1; j < nums.length; j++) {
      if (nums[(i + j) % nums.length] > nums[i]) {
        res[i] = nums[(i + j) % nums.length]
        break
      }
    }
  }

  return res
}
