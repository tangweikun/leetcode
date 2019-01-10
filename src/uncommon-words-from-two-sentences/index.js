function uncommonFromSentences(A, B) {
  const hash = new Map();
  const arr = A.split(' ').concat(B.split(' '));
  for (let value of arr) {
    if (hash.has(value)) {
      hash.set(value, hash.get(value) + 1);
    } else {
      hash.set(value, 1);
    }
  }
  const res = [];
  for (let key of hash.keys()) {
    if (hash.get(key) === 1) {
      res.push(key);
    }
  }
  return res;
}
