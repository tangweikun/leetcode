const keyboard = {
  q: 1,
  w: 1,
  e: 1,
  r: 1,
  t: 1,
  y: 1,
  u: 1,
  i: 1,
  o: 1,
  p: 1,
  a: 2,
  s: 2,
  d: 2,
  f: 2,
  g: 2,
  h: 2,
  j: 2,
  k: 2,
  l: 2,
  z: 3,
  x: 3,
  c: 3,
  v: 3,
  b: 3,
  n: 3,
  m: 3,
};

export function findWords(words) {
  const ans = [];
  for (let i = 0; i < words.length; i++) {
    if (isSameRow(words[i].toLowerCase())) ans.push(words[i]);
  }

  return ans;
}

const isSameRow = word => {
  for (let i = 1; i < word.length; i++) {
    if (keyboard[word[i]] !== keyboard[word[i - 1]]) {
      return false;
    }
  }

  return true;
};
