// Time Complexity O(n)
// Space Complexity O(1)

export function intersectionOfTwoArrays2(arr1: number[], arr2: number[]) {
  const hash: number[] = []
  const ans = []

  for (let num of arr1) {
    hash[num] = hash[num] ? hash[num] + 1 : 1
  }

  for (let num of arr2) {
    if (hash[num]) {
      ans.push(num)
      hash[num]--
    }
  }

  return ans
}
