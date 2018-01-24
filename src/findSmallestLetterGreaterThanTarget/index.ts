export function nextGreatestLetter(letters: string[], target: string) {
  const targetCharCode = target.charCodeAt(0)

  for (let i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt(0) > targetCharCode) return letters[i]
  }

  return letters[0]
}
