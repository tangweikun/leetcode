export function maximumSwap(num) {
  const s = (num + '').split('');
  let max = num;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let t = s[i];
      s[i] = s[j];
      s[j] = t;
      max = Math.max(max, +s.join(''));
      t = s[i];
      s[i] = s[j];
      s[j] = t;
    }

    if (max > num) return max;
  }

  return max;
}
