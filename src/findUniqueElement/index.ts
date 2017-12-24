export function findUniqueElement(arr) {
  const result = []
  arr.forEach(item => {
    if (result[item]) {
      result[item] = 'DuplicateElement'
    } else {
      result[item] = item
    }
  })

  return result.filter(item => item && item !== 'DuplicateElement')
}
