export function reverseVowels(words) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let res = '';
  const hash = getHash(words, VOWELS);

  for (let j = 0; j < words.length; j++) {
    if (VOWELS.indexOf(words.charAt(j)) !== -1) {
      res += words[hash[0]];
      hash.shift();
    } else {
      res += words[j];
    }
  }

  return res;
}

const getHash = (words, VOWELS) => {
  const hash = [];
  for (let i = words.length - 1; i >= 0; i--) {
    if (VOWELS.indexOf(words.charAt(i)) !== -1) {
      hash.push(i);
    }
  }

  return hash;
};
