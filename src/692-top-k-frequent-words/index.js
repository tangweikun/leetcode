export const topKFrequent = (words, k) => {
  let count = {};
  for (let w of words) {
    count[w] = ~~count[w] + 1;
  }

  return Object.keys(count)
    .sort((a, b) => count[b] - count[a] || a.localeCompare(b))
    .slice(0, k);
};
