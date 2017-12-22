export function oddTimes(array) {
  return array.reduce((item, result) => item ^ result)
}
