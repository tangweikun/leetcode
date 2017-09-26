export const listInsert = (arr, position, elem) => {
  const result = arr
  const len = arr.length
  let i = len

  if (position > i || position < 0) return result

  while (i > position) {
    arr[i] = arr[i - 1]
    i--
  }
  arr[position] = elem

  return result
}
