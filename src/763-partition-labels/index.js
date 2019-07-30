export const partitionLabels = S => {
  let alphabet = Array.from({ length: 26 }, _ => ({
    min: Infinity,
    max: -Infinity,
  }));

  for (let i = 0; i < S.length; i++) {
    alphabet[S.charCodeAt(i) - 97].min = Math.min(
      alphabet[S.charCodeAt(i) - 97].min,
      i,
    );
    alphabet[S.charCodeAt(i) - 97].max = Math.max(
      alphabet[S.charCodeAt(i) - 97].max,
      i,
    );
  }

  const filteredAlphabet = alphabet
    .filter(({ min, max }) => min <= max)
    .sort((x, y) => x.min - y.min);

  let temp = {};
  let res = [];

  for (let set of filteredAlphabet) {
    if (temp.min !== undefined && set.min <= temp.max) {
      temp.max = Math.max(temp.max, set.max);
      res[res.length - 1] = temp.max - temp.min + 1;
    } else {
      temp = set;
      res.push(set.max - set.min + 1);
    }
  }

  return res;
};
