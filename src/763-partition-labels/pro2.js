export const partitionLabels = S => {
  let lastIndex = 0;
  let preIndex = -1;
  const res = [];

  for (let i = 0; i < S.length; i++) {
    let index = S.lastIndexOf(S[i]);
    lastIndex = Math.max(lastIndex, index);
    if (i === lastIndex) {
      res.push(lastIndex - preIndex);
      preIndex = lastIndex;
    }
  }

  return res;
};
