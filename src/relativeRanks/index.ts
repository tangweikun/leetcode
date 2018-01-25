export function findRelativeRanks(nums: any[]) {
  const res = []
  const hash = getHash([...nums].sort((x, y) => y - x))

  for (let i = 0; i < nums.length; i++) {
    res.push(hash[nums[i]])
  }

  return res
}

function getHash(nums: any[]) {
  let hash = []

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      hash[nums[i]] = 'Gold Medal'
    } else if (i === 1) {
      hash[nums[i]] = 'Silver Medal'
    } else if (i === 2) {
      hash[nums[i]] = 'Bronze Medal'
    } else {
      hash[nums[i]] = i + 1 + ''
    }
  }

  return hash
}
