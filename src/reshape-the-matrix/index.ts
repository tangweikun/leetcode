export const matrixReshape = (nums: number[][], r: number, c: number) => {
  if (nums.length * nums[0].length !== r * c) return nums
  let res = []
  let arr: number[] = []

  for (let i = 0; i < nums.length; i++) {
    arr.push(...nums[i])
  }

  while (arr.length) {
    res.push(arr.splice(0, c))
  }

  return res
}
