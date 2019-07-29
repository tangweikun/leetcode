export function detectCapitalUse(word) {
  const uppercase = word.toUpperCase();
  const lowercase = word.toLowerCase();

  return (
    word === uppercase ||
    word === lowercase ||
    (word[0] === uppercase[0] && word.slice(1) === lowercase.slice(1))
  );
}
