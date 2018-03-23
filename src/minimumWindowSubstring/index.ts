// HELP:

export function minWindow(s: string, t: string) {
  let HASH = Array(128).fill(0)
  let left = 0
  let right = 0
  let head = 0
  let minLength = Infinity
  let counter = t.length

  for (let c of t) HASH[c.charCodeAt(0)]++

  while (right < s.length) {
    if (HASH[s.charCodeAt(right)] > 0) counter--
    HASH[s.charCodeAt(right)]--
    right++

    while (counter === 0) {
      if (right - left < minLength) {
        head = left
        minLength = right - left
      }
      if (HASH[s.charCodeAt(left)] === 0) counter++
      HASH[s.charCodeAt(left)]++
      left++
    }
  }

  return minLength === Infinity ? '' : s.slice(head, head + minLength)
}
