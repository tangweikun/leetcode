// HELP:

export function findAnagrams(s, p) {
  const map = {};
  const res = [];

  for (const val of p) {
    map[val] = ~~map[val] + 1;
  }

  let count = p.length;
  for (let l = 0, r = 0; r < s.length; ) {
    if (map[s[r++]]-- >= 1) {
      count--;
    }
    if (count === 0) {
      res.push(l);
    }
    if (r - l === p.length && map[s[l++]]++ >= 0) {
      count++;
    }
  }
  return res;
}
