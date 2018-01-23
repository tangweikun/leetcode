export function findAnagrams(s: string, p: string) {
  const subLength = p.length
  let res = []
  const MAP_P = new Map()
  for (let i = 0; i < subLength; i++) {
    MAP_P.set(p.charCodeAt(i) - 97, ~~MAP_P.get(p.charCodeAt(i) - 97) + 1)
  }

  for (let i = 0; i < s.length - subLength + 1; i++) {
    const sub = s.slice(i, i + subLength)
    const MAP_SUB = new Map()

    for (let j = 0; j < sub.length; j++) {
      MAP_SUB.set(
        sub.charCodeAt(j) - 97,
        ~~MAP_SUB.get(sub.charCodeAt(j) - 97) + 1,
      )
    }

    if (isEqual(MAP_P, MAP_SUB)) res.push(i)
  }

  return res
}

const isEqual = (MAP_P, MAP_SUB) => {
  for (let key of MAP_P.keys()) {
    if (MAP_P.get(key) !== MAP_SUB.get(key)) return false
  }

  return true
}
