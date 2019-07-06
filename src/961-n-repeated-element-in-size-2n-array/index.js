function repeatedNTimes(arr) {
  const hash = new Set();
  for (let n of arr) {
    if (hash.has(n)) {
      return n;
    }

    hash.add(n);
  }
}
