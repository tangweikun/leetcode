export function findUniqueElement(arr: any[]) {
  const result: any[] = []
  arr.forEach(item => {
    if (result[item]) {
      result[item] = 'DuplicateElement'
    } else {
      result[item] = item
    }
  })

  return result.filter(item => item && item !== 'DuplicateElement')
}
