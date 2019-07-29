// HELP:

export function minWindow(S, T) {
  const HASH = Array(128).fill(0);
  let [left, right, head] = [0, 0, 0];
  let minLength = Infinity;
  let counter = T.length;

  for (let c of T) HASH[c.charCodeAt(0)]++;

  while (right < S.length) {
    if (HASH[S.charCodeAt(right)] > 0) counter--;
    HASH[S.charCodeAt(right)]--;
    right++;

    while (counter === 0) {
      if (right - left < minLength) {
        head = left;
        minLength = right - left;
      }
      if (HASH[S.charCodeAt(left)] === 0) counter++;
      HASH[S.charCodeAt(left)]++;
      left++;
    }
  }

  return minLength === Infinity ? '' : S.slice(head, head + minLength);
}
