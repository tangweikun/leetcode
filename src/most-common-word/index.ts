export const mostCommonWord = (paragraph: string, banned: string[]) => {
  const hash: any = {}
  const lowerCaseBanned = banned.map(x => x.toLowerCase())
  paragraph
    .toLowerCase()
    .replace(/[^a-z ]/g, '')
    .split(' ')
    .forEach(str => {
      if (!lowerCaseBanned.includes(str)) {
        hash[str] = ~~hash[str] + 1
      }
    })

  let max = 0
  let res = ''
  for (let key of Object.keys(hash)) {
    if (hash[key] > max) {
      max = hash[key]
      res = key
    }
  }

  return res
}
