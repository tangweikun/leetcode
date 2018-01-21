export function detectCapitalUse(word: string) {
  let ans = true

  if (isLowerCase(word.charCodeAt(0))) {
    shouldReturn(1, word) && (ans = false)
  } else {
    if (isUpperCase(word.charCodeAt(1))) {
      for (let j = 2; j < word.length; j++) {
        isLowerCase(word.charCodeAt(j)) && (ans = false)
      }
    } else {
      shouldReturn(1, word) && (ans = false)
    }
  }

  return ans
}

const isLowerCase = (code: number) => code > 90

const isUpperCase = (code: number) => code <= 90

const shouldReturn = (start: number, word: string) => {
  while (start < word.length) {
    if (isUpperCase(word.charCodeAt(start))) return true
    start++
  }
}
