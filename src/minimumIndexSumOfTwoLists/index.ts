export function findRestaurant(arr1: string[], arr2: string[]) {
  const hash = new Map()
  const temp = new Map()
  let res: string[] = []
  let min = Infinity

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (hash.has(arr1[i]) || hash.has(arr2[i])) {
      hash.has(arr1[i]) && temp.set(arr1[i], i + hash.get(arr1[i]))
      hash.has(arr2[i]) && temp.set(arr2[i], i + hash.get(arr2[i]))
    } else {
      if (arr1[i] === arr2[i]) {
        temp.set(arr1[i], i * 2)
      } else {
        arr1[i] && hash.set(arr1[i], i)
        arr2[i] && hash.set(arr2[i], i)
      }
    }
  }

  temp.forEach((value, key) => {
    if (value < min) {
      res = [key]
      min = value
    } else if (value === min) {
      res.push(key)
    }
  })

  return res
}
