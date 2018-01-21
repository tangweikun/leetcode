export function detectCapitalUse(word: string) {
  return /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]+$)/.test(word)
}
