export function findAnagrams(s, p) {
  const anagrams = [];
  const hash = [];

  p.split('').forEach(
    c => (hash[c.charCodeAt(0)] = ~~hash[c.charCodeAt(0)] + 1),
  );

  let begin = 0;
  let end = 0;
  let count = p.length;

  while (end < s.length) {
    let key = s.charCodeAt(end);
    if (hash[key] > 0) count--;
    hash[key]--;
    end++;

    if (count == 0) anagrams.push(begin);
    if (end - begin == p.length) {
      key = s.charCodeAt(begin);
      if (hash[key] >= 0) count++;
      hash[key]++;
      begin++;
    }
  }

  return anagrams;
}
