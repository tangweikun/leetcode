export const nextGreaterElement2 = (nums: number[]) => {
  const max = Math.max(...nums)
  const res = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= max) {
      res[i] = -1
    } else {
      let j = i + 1

      while (res[i] === undefined) {
        if (j > nums.length - 1) j = j - nums.length
        if (nums[j] > nums[i]) res[i] = nums[j]
        j++
      }
    }
  }

  return res
}
