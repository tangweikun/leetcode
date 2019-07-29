export function isSubsequence(s, t) {
  for (let char of s) {
    const pos = t.indexOf(char);
    if (pos === -1) return false;
    t = t.slice(pos + 1);
  }

  return true;
}
