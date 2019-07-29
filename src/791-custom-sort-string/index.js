export const customSortString = (S, T) => {
  let res = '';
  const alphabet = [];

  for (let char of T) {
    alphabet[char.charCodeAt(0) - 97] = ~~alphabet[char.charCodeAt(0) - 97] + 1;
  }

  for (let char of S) {
    res += char.repeat(~~alphabet[char.charCodeAt(0) - 97]);
    alphabet[char.charCodeAt(0) - 97] = 0;
  }

  for (let i = 0; i < alphabet.length; i++) {
    res += String.fromCharCode(i + 97).repeat(~~alphabet[i]);
  }

  return res;
};
