export function detectCapitalUse(word) {
  return /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]+$)/.test(word);
}
