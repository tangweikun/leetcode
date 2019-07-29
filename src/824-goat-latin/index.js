export const toGoatLatin = S => {
  const vowels = ['O', 'o', 'A', 'a', 'U', 'u', 'E', 'e', 'I', 'i'];
  return S.split(' ')
    .map((x, index) =>
      vowels.indexOf(x[0]) !== -1
        ? x.split('').join('') + 'ma' + 'a'.repeat(index + 1)
        : x.slice(1) + x.slice(0, 1) + 'ma' + 'a'.repeat(index + 1),
    )
    .join(' ');
};
