// HELP:

export function minWindow(s: string, t: string) {
  let HASH = new Array(128).fill(0)
  let begin = 0
  let end = 0
  let head = 0
  let minLength = -1
  let counter = t.length

  for (let c of t) {
    HASH[c.charCodeAt(0)]++
  }

  while (end < s.length) {
    if (HASH[s.charCodeAt(end++)]-- > 0) counter--
    while (counter === 0) {
      if (minLength === -1 || end - begin < minLength) {
        head = begin
        minLength = end - begin
      }
      if (HASH[s.charCodeAt(begin++)]++ === 0) counter++
    }
  }
  return minLength === -1 ? '' : s.substr(head, minLength)
}
