export const uniqueMorseRepresentations = words => {
  const code = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  const foo = new Set();
  for (let x of words) {
    let bar = '';
    for (let c of x) bar += code[c.charCodeAt(0) - 97];
    foo.add(bar);
  }
  return foo.size;
};
