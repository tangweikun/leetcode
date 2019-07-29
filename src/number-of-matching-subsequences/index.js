// HELP:

export const numMatchingSubseq = (S, words) => {
  let total = 0;
  for (let i = 0; i < words.length; i++) {
    total += isSubsequence(S, words[i]) ? 1 : 0;
  }
  return total;
};

const isSubsequence = (s, t) => {
  let cur = 0;

  for (let i = 0; i < t.length; i++) {
    const nextCur = s.indexOf(t[i], cur);
    if (nextCur === -1) return false;
    cur = nextCur + 1;
  }

  return true;
};
