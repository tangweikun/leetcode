export const groupAnagrams = (strs: string[]) => {
  let res: any = {}
  for (let str of strs) {
    const key = sortedStr(str)

    if (res[key]) {
      res[key].push(str)
    } else {
      res[key] = [str]
    }
  }

  return Object.values(res)
}

function sortedStr(str: string) {
  return str
    .split('')
    .sort()
    .join('')
}
