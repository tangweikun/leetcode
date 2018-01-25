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
  const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal']

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = medals[i] || `${i + 1}`
  }

  return hash
}
