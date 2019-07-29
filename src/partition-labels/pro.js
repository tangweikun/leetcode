export const partitionLabels = S => {
  const res = [];

  while (S.length > 0) {
    const k = getNextPart(S);
    S = S.substring(k);
    res.push(k);
  }

  return res;
};

function getNextPart(str) {
  let endIndex = 0;
  const checkedSymbols = [];
  for (let i = 0; i <= endIndex; i++) {
    if (checkedSymbols.indexOf(str[i]) === -1) {
      const index = str.lastIndexOf(str[i]);
      if (index > endIndex) {
        endIndex = index;
      }
      checkedSymbols.push(str[i]);
    }
  }

  return endIndex + 1;
}
