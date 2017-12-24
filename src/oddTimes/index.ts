// Time Complexity O(n)
// Space Complexity O(1)
export function oddTimes(array) {
  return array.reduce((item, result) => item ^ result)
}
